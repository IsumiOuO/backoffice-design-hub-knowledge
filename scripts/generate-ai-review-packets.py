#!/usr/bin/env python3
"""Generate one self-contained PDF review packet per queryable specification."""

from __future__ import annotations

import argparse
import json
import re
from datetime import date
from html import escape
from pathlib import Path

try:
    from PIL import Image as PILImage
    from reportlab.lib import colors
    from reportlab.lib.enums import TA_CENTER, TA_LEFT
    from reportlab.lib.pagesizes import A4
    from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
    from reportlab.lib.units import mm
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    from reportlab.platypus import (
        Image,
        KeepTogether,
        PageBreak,
        Paragraph,
        SimpleDocTemplate,
        Spacer,
        Table,
        TableStyle,
    )
except ImportError as error:
    raise SystemExit(
        "缺少 PDF 產生套件。請安裝 reportlab 與 Pillow，或交由 Codex 執行。"
    ) from error


ROOT = Path(__file__).resolve().parents[1]
INDEX_PATH = ROOT / "specs" / "query-index.json"
STATUS_PATH = ROOT / "specs" / "AI-REVIEW-STATUS.json"
OUTPUT_DIR = ROOT / "output" / "pdf" / "ai-spec-review-packets"
GITHUB_BASE = "https://github.com/IsumiOuO/backoffice-design-hub-knowledge/blob/main"


def choose_font() -> str:
    candidates = [
        Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf"),
        Path("/System/Library/Fonts/STHeiti Light.ttc"),
        Path("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"),
        Path("/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc"),
    ]
    for candidate in candidates:
        if candidate.exists():
            pdfmetrics.registerFont(TTFont("ReviewPacketCJK", str(candidate)))
            return "ReviewPacketCJK"
    raise SystemExit("找不到可顯示繁體中文的字型，無法產生規格包 PDF。")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="產生普通 AI 可直接讀取的規格包 PDF")
    parser.add_argument("--feature", help="只產生指定 feature id；省略時產生全部")
    return parser.parse_args()


def inline_markdown(text: str) -> str:
    text = escape(text.strip())
    text = re.sub(r"`([^`]+)`", r"<font name='Courier'>\1</font>", text)
    text = re.sub(
        r"\[([^\]]+)\]\((https?://[^)]+)\)",
        lambda match: f"<link href='{match.group(2)}' color='#2563EB'>{match.group(1)}</link>",
        text,
    )
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"\1", text)
    text = text.replace("**", "")
    return text


def markdown_story(markdown: str, styles: dict[str, ParagraphStyle]) -> list:
    story: list = []
    paragraph_lines: list[str] = []

    def flush_paragraph() -> None:
        if paragraph_lines:
            story.append(Paragraph(inline_markdown(" ".join(paragraph_lines)), styles["body"]))
            story.append(Spacer(1, 2.5 * mm))
            paragraph_lines.clear()

    for raw_line in markdown.splitlines():
        line = raw_line.rstrip()
        stripped = line.strip()
        if not stripped:
            flush_paragraph()
            continue
        if stripped == "---" or stripped.startswith("[!["):
            flush_paragraph()
            continue
        if stripped.startswith("# "):
            flush_paragraph()
            continue
        if stripped.startswith("## "):
            flush_paragraph()
            story.append(Paragraph(inline_markdown(stripped[3:]), styles["h2"]))
            continue
        if stripped.startswith("### "):
            flush_paragraph()
            story.append(Paragraph(inline_markdown(stripped[4:]), styles["h3"]))
            continue
        if stripped.startswith("- "):
            flush_paragraph()
            story.append(Paragraph(inline_markdown(stripped[2:]), styles["bullet"], bulletText="•"))
            continue
        if re.match(r"^\d+\.\s+", stripped):
            flush_paragraph()
            number, content = stripped.split(".", 1)
            story.append(Paragraph(inline_markdown(content.strip()), styles["bullet"], bulletText=f"{number}."))
            continue
        if stripped.startswith("|"):
            flush_paragraph()
            cells = [cell.strip() for cell in stripped.strip("|").split("|")]
            if all(set(cell) <= {"-", ":"} for cell in cells):
                continue
            story.append(Paragraph(inline_markdown("｜".join(cells)), styles["small"]))
            continue
        paragraph_lines.append(stripped)

    flush_paragraph()
    return story


def scaled_image(path: Path, max_width: float, max_height: float) -> Image:
    with PILImage.open(path) as source:
        width, height = source.size
    scale = min(max_width / width, max_height / height)
    return Image(str(path), width=width * scale, height=height * scale)


def prompt_block(text: str, styles: dict[str, ParagraphStyle]) -> Table:
    rows = [[Paragraph(inline_markdown(line) if line else " ", styles["prompt"])] for line in text.splitlines()]
    table = Table(rows, colWidths=[170 * mm], hAlign="LEFT")
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), colors.HexColor("#F3F6FC")),
                ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#CBD5E1")),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    return table


def first_round_prompt(title: str) -> str:
    return f"""請整理「{title}」規格。
只能使用本 PDF 的文字、畫面與來源連結；不得自行補產品規則。
畫面直接看得到的內容請寫成「畫面目前顯示」。
沒有證據的權限、API、驗證、限制、錯誤處理、保存與成功結果必須保留「待確認」。
請用簡單繁體中文，輸出：功能說明、畫面與操作流程、各單位可使用資訊、已確認規則、待確認、Review 摘要。"""


def second_round_prompt(title: str) -> str:
    return f"""你是第二輪規格檢閱者。請比較「{title}」草稿與本 PDF 的全部來源。
不要替產品做決定，也不要用一般經驗補答案。
請找出：遺漏的畫面資訊、沒有來源支持的敘述、互相矛盾的內容、仍缺少的產品規則。
最後只整理需要人回答的簡單問題。每題包含：問題、為何需要確認、影響單位、回答方式。
回答方式只能使用：是／否、數字、單選、複選、簡短文字。來源沒有提供選項時，不可自創選項。"""


def add_page_number(canvas, document) -> None:
    canvas.saveState()
    canvas.setFont("ReviewPacketCJK", 8)
    canvas.setFillColor(colors.HexColor("#64748B"))
    canvas.drawString(20 * mm, 12 * mm, "AI 規格檢閱包")
    canvas.drawRightString(A4[0] - 20 * mm, 12 * mm, f"第 {document.page} 頁")
    canvas.restoreState()


def build_styles(font_name: str) -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "PacketTitle", parent=base["Title"], fontName=font_name, fontSize=24,
            leading=31, textColor=colors.HexColor("#0F172A"), alignment=TA_LEFT, spaceAfter=10 * mm,
        ),
        "subtitle": ParagraphStyle(
            "PacketSubtitle", parent=base["BodyText"], fontName=font_name, fontSize=11,
            leading=17, textColor=colors.HexColor("#475569"), spaceAfter=4 * mm,
        ),
        "h1": ParagraphStyle(
            "PacketH1", parent=base["Heading1"], fontName=font_name, fontSize=18,
            leading=24, textColor=colors.HexColor("#0F172A"), spaceBefore=5 * mm, spaceAfter=4 * mm,
        ),
        "h2": ParagraphStyle(
            "PacketH2", parent=base["Heading2"], fontName=font_name, fontSize=14,
            leading=20, textColor=colors.HexColor("#1D4ED8"), spaceBefore=4 * mm, spaceAfter=3 * mm,
        ),
        "h3": ParagraphStyle(
            "PacketH3", parent=base["Heading3"], fontName=font_name, fontSize=11.5,
            leading=17, textColor=colors.HexColor("#334155"), spaceBefore=3 * mm, spaceAfter=2 * mm,
        ),
        "body": ParagraphStyle(
            "PacketBody", parent=base["BodyText"], fontName=font_name, fontSize=9.5,
            leading=15, textColor=colors.HexColor("#1E293B"), alignment=TA_LEFT,
        ),
        "bullet": ParagraphStyle(
            "PacketBullet", parent=base["BodyText"], fontName=font_name, fontSize=9.3,
            leading=14.5, leftIndent=6 * mm, firstLineIndent=-3.5 * mm,
            bulletIndent=1.5 * mm, textColor=colors.HexColor("#1E293B"), spaceAfter=1.2 * mm,
        ),
        "small": ParagraphStyle(
            "PacketSmall", parent=base["BodyText"], fontName=font_name, fontSize=8,
            leading=12, textColor=colors.HexColor("#475569"), spaceAfter=1.5 * mm,
        ),
        "prompt": ParagraphStyle(
            "PacketPrompt", parent=base["BodyText"], fontName=font_name, fontSize=8.8,
            leading=13.5, textColor=colors.HexColor("#1E293B"),
        ),
        "caption": ParagraphStyle(
            "PacketCaption", parent=base["BodyText"], fontName=font_name, fontSize=8.3,
            leading=12.5, textColor=colors.HexColor("#475569"), alignment=TA_CENTER, spaceAfter=3 * mm,
        ),
    }


def build_packet(feature: dict, status: dict, styles: dict[str, ParagraphStyle]) -> Path:
    output_path = OUTPUT_DIR / f"{feature['id']}-review-pack.pdf"
    spec_path = ROOT / feature["specPath"]
    markdown = spec_path.read_text(encoding="utf-8")
    document = SimpleDocTemplate(
        str(output_path), pagesize=A4, rightMargin=20 * mm, leftMargin=20 * mm,
        topMargin=18 * mm, bottomMargin=20 * mm,
        title=f"{feature['title']} AI 規格檢閱包", author="Backoffice Design Hub Knowledge",
    )
    story: list = [
        Paragraph(f"{escape(feature['title'])}<br/><font size='13' color='#2563EB'>AI 規格檢閱包</font>", styles["title"]),
        Paragraph(f"目前進度：{escape(status['label'])}", styles["subtitle"]),
        Paragraph(f"產生日期：{date.today().isoformat()}｜畫面數：{len(feature['screens'])}", styles["subtitle"]),
        Paragraph(
            "這份 PDF 已包含現有規格與全部索引圖片。可直接上傳給普通對話 AI，不需要另外下載圖片。",
            styles["body"],
        ),
        Spacer(1, 5 * mm),
        Paragraph("第一輪：請普通 AI 整理", styles["h1"]),
        prompt_block(first_round_prompt(feature["title"]), styles),
        Spacer(1, 4 * mm),
        Paragraph("第二輪：請另一個 AI 找缺漏", styles["h1"]),
        prompt_block(second_round_prompt(feature["title"]), styles),
        Spacer(1, 5 * mm),
        Paragraph("交回 Codex 的文字", styles["h2"]),
        prompt_block(
            "以下是缺漏問題與產品確認答案。請補回對應正式規格，將有答案的項目移到已確認規則，沒有回答的保留待確認。同步查詢索引與工作清單、執行驗證並建立 PR。不要延伸推測。",
            styles,
        ),
        PageBreak(),
        Paragraph("現有正式規格", styles["h1"]),
        Paragraph(
            f"GitHub：<link href='{GITHUB_BASE}/{feature['specPath']}' color='#2563EB'>{GITHUB_BASE}/{feature['specPath']}</link>",
            styles["small"],
        ),
    ]
    story.extend(markdown_story(markdown, styles))
    story.append(PageBreak())
    story.append(Paragraph("來源畫面", styles["h1"]))

    for index, screen in enumerate(feature["screens"], start=1):
        image_path = ROOT / screen["imagePath"]
        if not image_path.exists():
            raise FileNotFoundError(f"找不到索引圖片：{screen['imagePath']}")
        label = screen.get("label") or (
            f"Step {screen['step']}：{screen['title']}" if screen.get("step") else screen["title"]
        )
        story.append(Paragraph(f"畫面 {index}｜{escape(label)}", styles["h2"]))
        story.append(scaled_image(image_path, 170 * mm, 205 * mm))
        story.append(Spacer(1, 2 * mm))
        story.append(
            Paragraph(
                f"Figma：<link href='{screen['figmaUrl']}' color='#2563EB'>{screen['figmaUrl']}</link>",
                styles["caption"],
            )
        )
        if index < len(feature["screens"]):
            story.append(PageBreak())

    story.append(PageBreak())
    story.append(Paragraph("人工回答與回收方式", styles["h1"]))
    story.append(
        Paragraph(
            "第二輪 AI 應只留下需要人決定的問題。回答時不需要寫長篇規格，可直接使用下列格式：",
            styles["body"],
        )
    )
    story.append(Spacer(1, 3 * mm))
    story.append(
        prompt_block(
            "問題編號：\n答案：\n補充說明（沒有可留空）：\n來源或決策人（知道時再填）：",
            styles,
        )
    )
    story.append(Spacer(1, 5 * mm))
    story.append(
        Paragraph(
            "完成後，把問題、答案與 AI 草稿一起交回 Codex。Codex 會更新正式規格、索引、工作清單並執行驗證。",
            styles["body"],
        )
    )
    document.build(story, onFirstPage=add_page_number, onLaterPages=add_page_number)
    return output_path


def write_manifest(features: list[dict], statuses: dict, outputs: dict[str, Path]) -> None:
    lines = [
        "# AI 規格檢閱包",
        "",
        f"- 更新日期：{date.today().isoformat()}",
        f"- 規格包：{len(features)} 份",
        "- 使用方式：一次選一份 PDF，上傳給普通對話 AI。PDF 已包含文字、圖片、來源與提示詞。",
        "",
        "| 功能 | 目前進度 | PDF |",
        "|---|---|---|",
    ]
    for feature in features:
        output = outputs[feature["id"]]
        lines.append(f"| {feature['title']} | {statuses[feature['id']]['label']} | [{output.name}]({output.name}) |")
    lines.extend(
        [
            "",
            "## 建議順序",
            "",
            "1. 先將「新增事件主類別」交給第二個 AI 做缺漏檢查。",
            "2. 其餘功能先交給普通 AI 做白話整理，再進行第二輪缺漏檢查。",
            "3. 統一收集簡單問題與答案後，交回 Codex 更新正式規格。",
            "",
            "## 重新產生",
            "",
            "```sh",
            "npm run knowledge:review-packets",
            "```",
            "",
        ]
    )
    (OUTPUT_DIR / "README.md").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    args = parse_args()
    index = json.loads(INDEX_PATH.read_text(encoding="utf-8"))
    status_data = json.loads(STATUS_PATH.read_text(encoding="utf-8"))["features"]
    features = index["features"]
    if args.feature:
        features = [feature for feature in features if feature["id"] == args.feature]
        if not features:
            raise SystemExit(f"找不到 feature：{args.feature}")

    missing_status = [feature["id"] for feature in features if feature["id"] not in status_data]
    if missing_status:
        raise SystemExit(f"AI-REVIEW-STATUS.json 缺少：{', '.join(missing_status)}")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    font_name = choose_font()
    styles = build_styles(font_name)
    outputs = {}
    for feature in features:
        output = build_packet(feature, status_data[feature["id"]], styles)
        outputs[feature["id"]] = output
        print(f"已產生：{output.relative_to(ROOT)}")

    if not args.feature:
        write_manifest(features, status_data, outputs)
        print(f"已更新：{(OUTPUT_DIR / 'README.md').relative_to(ROOT)}")


if __name__ == "__main__":
    main()
