import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scriptPath = path.join(repositoryRoot, "scripts", "generate-ai-review-packets.py");
const candidates = [
  path.join(
    os.homedir(),
    ".cache",
    "codex-runtimes",
    "codex-primary-runtime",
    "dependencies",
    "python",
    "bin",
    "python3",
  ),
  "python3",
];

const python = candidates.find((candidate) => {
  if (candidate.includes(path.sep) && !existsSync(candidate)) return false;
  const check = spawnSync(candidate, ["-c", "import reportlab, PIL"], { stdio: "ignore" });
  return check.status === 0;
});

if (!python) {
  console.error("找不到具備 reportlab 與 Pillow 的 Python。請在 Codex 執行，或先安裝這兩個套件。");
  process.exit(1);
}

const result = spawnSync(python, [scriptPath, ...process.argv.slice(2)], {
  cwd: repositoryRoot,
  stdio: "inherit",
});

if (result.error) {
  console.error(`規格包產生失敗：${result.error.message}`);
  process.exit(1);
}
process.exit(result.status ?? 1);
