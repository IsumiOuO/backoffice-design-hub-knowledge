# 共用母元件庫索引

> 由 Backoffice Design Hub Manager 匯出的 `library-components.json` 生成。這份索引記錄 Foundation／母元件庫中的原子元件與 Variant；識別方式是 Figma 原生 `key`，與 Core Hub 的 `canonicalId` 分開管理。

## 摘要

- 元件／Variant：6938
- 具有 Figma Key：6938
- 缺少 Figma Key：0
- 尚未填寫 Description：6931
- 重複顯示名稱：359（Key 仍各自獨立）

## AI／MCP 使用順序

1. 先查 Core Hub 的 `hub-manifest.json`，優先使用具有後台產品語意的 Core 元件。
2. Core 沒有合適元件時，再查這份母元件庫索引，使用 Badge、Button、Icon、Form 等基礎元件。
3. 找到既有元件時，必須依 Figma Key 建立真正的 Instance，不得只模仿外觀重畫。
4. Core 與母元件庫都找不到時才建立新元件，並說明為何既有元件不適用。
5. 若同名項目有多個 Key，必須搭配 Page、Variant Set 與實際用途判斷，不得只用名稱猜測。

## 維護原則

- 母元件庫有新增、刪除或 Variant 異動時，重新匯出 `library-components.json` 並覆蓋本檔。
- Description 空白不影響 Key 調用，但會降低 AI 判斷用途的準確度；優先補常用 Button、Badge、Forms、Dialog 與導覽元件即可，不必一次補完。
- Core 是從母元件庫 Detach 後形成的獨立產品元件；兩者 Key 不可互換，也不要把 Core 自動回連成母元件。

## 同名提醒

共有 359 組重複顯示名稱。Key 不重複，因此技術上仍可正確調用；AI 選用時需同時比較 Page 與 Variant Set。

## 元件清單（6938 筆）

### Alert--System backend（4）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Alert / Property 1=列表無結果 | `80bd12d2a2740a5fcee53cec1b1e25af49597c89` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Property 1=沒有資料結果 | `dff8e2bd5d8e8fa9d29239c66d74e8792674dc85` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Property 1=無事件資料 | `b9ffd1dd6ebddcb9fd3670bb1090694b25d4f170` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Property 1=無訪問權限 | `03fd531b3afe969623b724b22280d52dc2657ce0` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |

### Alerts（10）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Alert / Type=Default, Style=Focus | `3af909e070ce8c3cc13bc7dc498f7b9c6e84e083` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Type=Default, Style=Netural | `31c0e7eaf8037c67f9a5b911332e41838ddac351` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Type=Error, Style=Focus | `f1d217839808fb8f3a8aed4ea3fb92c3843caac1` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Type=Error, Style=Netural | `2b6837fad365809139f36b61cbe3f5d4e7358474` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Type=Primary, Style=Focus | `ebf18ad13a6a73aa5447f4cdce13b818323ef342` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Type=Primary, Style=Netural | `a737ecd3d0cfce2ccc27e075fd25d8b16535f362` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Type=Success, Style=Focus | `92114d422f3c68bfe81f330b29ba77e75e2844f0` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Type=Success, Style=Netural | `7c0cde3eea6c47e478f8de9610a8bc3ef2a24c91` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Type=Warning, Style=Focus | `bb181c9dd474eec5335ac992a5aecae743b05407` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |
| Alert / Type=Warning, Style=Netural | `b13acb72b90b58881bdf95a6d706f2af36d78acc` | Variant，屬於 `Alert` | ⚠️ 尚未填寫 Description |

### Avatars（528）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Avatar Image / Size=Default, Corner=Rectangle, Sample=1 (Female) | `6207162c6552d57dff2aa679bbf0363f783ca949` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=10 (Female) | `872c485c8b958f0641f61bbed2bc064b2fc3d0f9` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=11 (Male) | `23367870eef4766682c7b34aa79ef3c196bf0695` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=12 (Female) | `f1499426101da0b18f3780dc9b1ece7e70df774c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=13 (Female) | `5933b85dffaa0c81729d4dedf6ff1272a7442d68` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=14 (Female) | `6541bd45f1bf12e2982c52cff5ac2182fe6e9807` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=15 (Female) | `4858f34b550d8f2e98a4f3e175bf6c4115e61910` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=16 (Female) | `b71c234cc6c33d584577fd772a7e1b9a70e06880` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=17 (Female) | `f096f964cc7279593902b355539919cc8c035fbe` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=18 (Male) | `651b50bdd1a3d5782d7c1dc91ec31b214b8c080c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=19 (Male) | `f28bc272c660690cc77466361c46d6c3f3d74952` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=2 (Female) | `06b23c09a972e254a44fb916204e1a044ec421d5` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=20 (Female) | `e2c247c59bbf10c84183c56b735c4a34dff24be5` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=21 (Female) | `dc618b927d81669d86d3792de4a9ce88e02a8555` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=22 (Male) | `d8bc79568f51bc821f53140989c66a2ee95845f6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=23 (Female) | `fde21b7de597ecab1b1c4245329742b82e566106` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=24 (Female) | `1ad665c2d649ea843daabbbde2ff887735cb3300` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=25 (Female) | `70dc62ca4a950bed6b89238e74839ba7090de66c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=3 (Male) | `59535b02181094d5ea6b96ff8b1cbc9a42bbdca4` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=4 (Female) | `20f19ed5541b8b683a4dfc69d46451efdd4b26f3` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=5 (Female) | `6a64d367f0d9b1c32019c51c97a878a0ab5c4511` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=6 (Male) | `28a5151204b291cb56f9795ee495b50d2659d108` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=7 (Female) | `be18a36f6a704f1ddc6ec3890ac5e58fa1f02ab7` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=8 (Male) | `56bea7906d1acda43a6f830f0fb60ed0f5fb08c5` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rectangle, Sample=9 (Male) | `cdb2abd7836c4cc0f9f26e8252ecde6b7b930dfd` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=1 (Female) | `2992d74c26b8c4ebbebdfdb7d9e2fb2f24c7b9cb` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=10 (Female) | `d636d1512b3735c1e5ec42ba0c153e01a1573406` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=11 (Male) | `a126978d9cc1a50c6315fd73bf47f8cfc8225bab` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=12 (Female) | `0ace3f81c9b94410370768a67649fec1efd4b166` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=13 (Female) | `dc72f5cf5dd920b054b7a3c7ccd4ce6746d646e9` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=14 (Female) | `2bd54b0fef5082df00c0a47d7c6992a544049a71` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=15 (Female) | `5ff0aff429486142974a7b9cdc6538803b3f567c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=16 (Female) | `baf6ac401cceaaa72359afbf6e8cb1e842a8b89f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=17 (Female) | `e773336e330d5186100a5010321f8f81fd944cb2` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=18 (Male) | `104c81735dd0a69cfe6bd67ea04f11fbfb6f75e1` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=19 (Male) | `4ac52469f2c1f234606013bf04e355fcc6c77ee3` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=2 (Female) | `06004c0e2c6c11cfc9daa4517ea2f9f52b85fe8b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=20 (Female) | `c38fcbcb87939806c8b72a8d9ae3346937f46cad` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=21 (Female) | `f08028d1bfdf4c2497be73c4af0f1b9461316be3` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=22 (Male) | `16ddc1d81e3c54868db8f5559c54b697469bd127` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=23 (Female) | `0a3f693353b70279cfc06b7d4c94a4f6d3c1b6ec` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=24 (Female) | `98ecea4e72b9dda8080935b12047409623b995e3` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=25 (Female) | `472fe06da20c48f37f49f7ca82a740191b91b8c7` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=3 (Male) | `b37045ed87a4356142a38fec93407044bd1cfdb8` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=4 (Female) | `6b6e7e52aa30b025e273bec0b91c9426cb92a4c7` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=5 (Female) | `c121714443f8e551b115c459fe02e3e7f6a40920` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=6 (Male) | `de56a85f861ec58b8ac54878de1e8a2679d523e9` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=7 (Female) | `3296d2890a1457cf840016c4c8eb6984dcd64854` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=8 (Male) | `7d6e2cdeede49fa98e9eccafa8db4365545c7f54` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Default, Corner=Rounded, Sample=9 (Male) | `7d88f10e6d6dbb610893eabeed4ac467ad183022` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=1 (Female) | `58f756539672f3cf7f638cb5bf8ebeee8b67011c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=10 (Female) | `2710db256797fa873b7d221e7d53aaa52a51c95c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=11 (Male) | `29af46ca14f97b4e03f7dac8b140de5658397298` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=12 (Female) | `ea7937fe6cb9fb5ca582acc5e559ce82cba6f07b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=13 (Female) | `0151bad4340ba9820e2bbda7f9d9d00d22a7a4cb` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=14 (Female) | `83f15886948f79a3d69c25eacabb541ef3409cff` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=15 (Female) | `9bbf5683d08cdfec5d68aad93eba6498c9f8a097` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=16 (Female) | `ec645a89c7bf8aae10442b49f85064954e0a5193` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=17 (Female) | `034559930057ac7469395d634a9f78bef478eadd` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=18 (Male) | `4a3e07b81e5872432f49d2c59835719c72d9bfec` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=19 (Male) | `1f5bd87184b679dabcbbbe936d84011cc691075f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=2 (Female) | `75390e04341a2ef9561cb2906c8284a8abde7b03` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=20 (Female) | `f7b13d4e8a6130b7b96ea6d2e953d11288c11769` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=21 (Female) | `6cacfab1e690c6021bb2fa8656bcd4284252eca7` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=22 (Male) | `4ee3f5104d53f4bee969921210a43cb8a27538bf` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=23 (Female) | `c7fe1d30b7ead5342a3ada9375c846b674d23ef6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=24 (Female) | `ea0949d260aafc58efb5192f6226652b8cdafe36` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=25 (Female) | `ccfa22d8ef614ef80f886b44f1ea7ff723de1b1f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=3 (Male) | `f07d9723a6ef8d15f5d8bf6e37a7998321639023` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=4 (Female) | `d4e5c59e35dbdb1b28d41db0be39f8c1e7efb889` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=5 (Female) | `9f08ce98aaf0428aa7738771e68c917b958a1eeb` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=6 (Male) | `dafa137f8b12072c3daf9a50b1ea8bd729bc07da` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=7 (Female) | `11295b10da6bfca948abf127d1de54f5cf847489` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=8 (Male) | `35b24a11797164766ae7be5c3e321de705575a0f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rectangle, Sample=9 (Male) | `b119afe5c973967099eff85a8fdb3732f9b08159` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=1 (Female) | `3d7d38618b17e535ab32ca8cd7b73659801a0c8f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=10 (Female) | `0d7a33ddc161da71640d3bcfe73c52b183d3bd88` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=11 (Male) | `1df56784279a61251eea406103ae2163a949bbbb` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=12 (Female) | `05f2ff117fbd3108899840f7f30212c646f27335` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=13 (Female) | `2954ce360a6c3b69a044fef4bb63bb693f3ee117` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=14 (Female) | `7c9c043ba464a4149fd93f2552a8dc04c67b0c88` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=15 (Female) | `15fba95a7146fef041c5ec4c13df3cc3c699affd` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=16 (Female) | `6f28ab7e2249b313bf8febd537042897ebf1b1c7` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=17 (Female) | `af4b2a31b379d814302a22a5f10ac07e0ca2e441` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=18 (Male) | `dc88568e40936cecbf96b160f82dd8aba65fad81` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=19 (Male) | `acbd4c42291e8e6339d07ed2f5ace0440ab5c342` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=2 (Female) | `f9c2bc51df2d30eaa645ee55b5dbcd5d6ba803a6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=20 (Female) | `14681e18476d178e4e9956b6db469a2b30b5a956` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=21 (Female) | `39b5bdc1376a3ef5060df9dbdc5abbcfb0e96e48` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=22 (Male) | `70fa8b3ca409745e36431cdd43448ae2f9127d61` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=23 (Female) | `cd0449a3d9a93ca6bb11c7b9f6d0d60d0aa4da67` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=24 (Female) | `b96ce3ae031cbd1325525056c16c85009afcfd4c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=25 (Female) | `0581a7bdd853bf79a5ee84f57ec5ac67f731a127` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=3 (Male) | `dab26835d634429d3923359f93fb8dd3c129a782` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=4 (Female) | `f6e89d008f4b8f5207a1015f3d2081637251a937` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=5 (Female) | `44add0f404a595a65939cb3c035de681e2ac0032` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=6 (Male) | `49d869a253a29e45c398a0919c9997d136f974f6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=7 (Female) | `7a2f8d3dada321aa1e41f1f72a461a8c2ddaeff8` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=8 (Male) | `9aaee6b2e5633610158450f92df648a0a5df250f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Micro, Corner=Rounded, Sample=9 (Male) | `b652bc6ae3c4cb4f406d4f8be2b2150a5d478e4c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=1 (Female) | `96ec003e791d4eb26365afae0a6c1878ab825336` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=10 (Female) | `c0407397e2a8da94087f513009e91ec8188f7337` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=11 (Male) | `db036d2deecce3535e585e4854f8ae1c7ceee449` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=12 (Female) | `19895630d357d519aa3076f9d4862f1a2f61d9d6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=13 (Female) | `9b92809ca3ada499eef96904ada9fc679e555464` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=14 (Female) | `6be9aa3bc8dd66823260bffa44e73350f3abb585` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=15 (Female) | `394e7c9f272de21ec61d03f442739d991572173e` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=16 (Female) | `f30af43a1a158749cb83e9e4cf8db8fb6fc9f735` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=17 (Female) | `a8cc841d0df04d076d86d61927f516315ca0f139` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=18 (Male) | `a75c8ad19b01aec672042593125de71081bbe82f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=19 (Male) | `bc1dface0c8531069bd3922facede7f890a23e1a` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=2 (Female) | `a7b7c4751724a72dc4a33b17885c29e7e02779fa` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=20 (Female) | `9e21b20ff0078b399c4cfe2ec3cced96e0735705` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=21 (Female) | `f9211269fe85be96d71390351338c3aee8d436c5` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=22 (Male) | `d2baac46bf5326cd0e1518e77c89f05408f5b4c2` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=23 (Female) | `4f183625d01297c2fe8ab0baefae84a31aad0f44` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=24 (Female) | `78896f73eacfb03d45ccefff9f86beab9231be9d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=25 (Female) | `29f6206c007407c9e8facda42cbe7ffd2f3bc02b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=3 (Male) | `c193cbcb9f89e0cb104d07df7803451ba8d3cd7b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=4 (Female) | `0c7dce61bca624b0d878b5d338a273c1ae840f25` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=5 (Female) | `96a11448a56fc0cc7b27a3ce4c49d69cfab96ed2` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=6 (Male) | `b69cf82687f89b210d9479887d20bc100d57dacb` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=7 (Female) | `63a55d8cc64b7bc8820fec0d644e88b82bd45e0d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=8 (Male) | `84b7ebc0bcba0381080b05b93e3dfb14527b1d50` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rectangle, Sample=9 (Male) | `5667e679fc0d1fba18df2729995b55bea47d76bf` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=1 (Female) | `8ace70c835e16f05bf13004641a935fda0071106` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=10 (Female) | `3b0b3f106c0b64476c1040af9f1bdaaaa2029e3b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=11 (Male) | `f9920bb827322fa74c42081fac330f96109cf989` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=12 (Female) | `f54b9d417795fde405187e7116952cd5653efa9e` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=13 (Female) | `439b044cefcc31f116c5391173efd3df922284a3` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=14 (Female) | `83dbcd87ca73ca108b155090d7d683f6a0f896f7` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=15 (Female) | `be5d8e10fb814075b1c3948a6903b0f0acb46461` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=16 (Female) | `248401eda514ceb1768c23c26be55ff767f5c3c6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=17 (Female) | `b0e696c95d28eff54b217cde4737e610bd8384ba` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=18 (Male) | `46bb4d261ab272b816ceaa89914a6f122fbfdf88` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=19 (Male) | `76a10dda739973be3fdd45eb931f2e2e8b193231` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=2 (Female) | `ff5b4a0cd5dc776e981666d1410a15dce8be501a` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=20 (Female) | `f498ff2ac81f3ee01c43397745d56046d080cf77` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=21 (Female) | `090ca7bb0610022988ba22223cb042e7122b3185` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=22 (Male) | `4923dcf38289fc9dcccca3e144768e2762ceaf01` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=23 (Female) | `c480a53efc0b71c24952d3dc00434bc1e0b9d592` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=24 (Female) | `7b197888501d6521bc5fdd574b3535427957a0a3` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=25 (Female) | `c1d47e35711a7195886fe7498773af894eb959f1` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=3 (Male) | `1cbeafa6fc19bf117cdd9183459df35cf29134f0` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=4 (Female) | `d8d654ef932d60cac7d8d7cc09f66b977ede47b3` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=5 (Female) | `82d62d5371220c2b1d661d8f350857279e0cf051` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=6 (Male) | `ac8cd0c865060cd5e073576de280db3fc7dd252d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=7 (Female) | `21685cf23e5514e0fa502a6890b0d7bf9716eb5c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=8 (Male) | `223c27a16f57d915fc01179ba5accba7db553e6a` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Extra Small, Corner=Rounded, Sample=9 (Male) | `b66571ed3740ceaf9a4123f53f055a70aebfc6cc` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=1 (Female) | `336e739d9a372223faf0938d96fe8861b7ed3ecf` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=10 (Female) | `c01e8a04cc872a641b981dd241ab607181483f6f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=11 (Male) | `cc48d5bdb2f3ed9c73418f7597896252b5c4374d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=12 (Female) | `2c397cb8f9e1ec264c3ef1ddf37335f9607b0a13` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=13 (Female) | `0f15ac45a57d0ea64fd7442160e014641f0d12ac` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=14 (Female) | `08539ef9a5cd83ab2a92f12620ec0adb1eac4bd2` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=15 (Female) | `68ad6b46007d3f6001e1b979b3555dd2a3eec531` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=16 (Female) | `be76985368d9249896ead7dd15c5d04f5c33e73c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=17 (Female) | `7bd9979761aee7e0c0416d422ad538237e8302b7` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=18 (Male) | `3a4a79ccad516d536a85e6d9e846922df442155e` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=19 (Male) | `48d1f04ccee545460d25914e6fa96d9b489f7475` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=2 (Female) | `7b7e2262ffc48d8960c3bb429f55b6ef84ca93f0` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=20 (Female) | `c70f6a05ad295d468e49e360b894af003849f635` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=21 (Female) | `5e3f07ab8d196fd431c1c25f1732e06f8bcd6401` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=22 (Male) | `08ea9a7d1301dce8da38988789e425b7f85801f6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=23 (Female) | `fb7d51235497d1e50bfbe5e0293c082a27944502` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=24 (Female) | `6d39ca8b4908a7b9c84cbd1f428036056a8c2619` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=25 (Female) | `9510554a2dc853714d42e7933e3fff5a142b734f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=3 (Male) | `ebcc61017a5cad911171ece4993362cad30c3e9c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=4 (Female) | `1dab8112ac8ec00987232787af14d45d8090b996` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=5 (Female) | `db2336992ca4b6dab95c375e7f1e4dc293fb6240` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=6 (Male) | `f7a26b24585ae54ca7b778bcb2b055d42210e898` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=7 (Female) | `78df5e70304e5a50ac36793889e33acb3059504e` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=8 (Male) | `7def7b697d9fb447b0524ebbf649e2ac6bcf0627` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rectangle, Sample=9 (Male) | `acae26aaa7419e142d313822907c43061a898c9f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=1 (Female) | `6b6000319818aa44944f792893723663c6679566` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=10 (Female) | `2ec0ff74f26e9d98775c9bdaf0e35184e72dd3c6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=11 (Male) | `c2f30f0dbfe32ecf1f58ae989f8bd65047b0d32b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=12 (Female) | `5d14cce6c2216cbf7497b8911ef1b63ca04e2d82` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=13 (Female) | `7246d1b05633302f3518f73e16e60e0e2fe050cb` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=14 (Female) | `4be732428af30cc7232670d8b57f2ee690549b39` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=15 (Female) | `b562fe6de75b8e1aead432013590daf600720659` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=16 (Female) | `d8b5dfcd263505a8c3b6e936afa454404847375e` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=17 (Female) | `df939cce3609acc1ed657ea6c995c47b31292f73` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=18 (Male) | `c062d3001efa72c6d3e0db94057c59ff3789cb20` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=19 (Male) | `60235347a2718a799b13e332e763937da17355e0` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=2 (Female) | `bb8406eef3ad4f8f3583b027e23967d1e96cdcfc` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=20 (Female) | `976216b0e0b91d961be353576fa18af6aa90e9a5` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=21 (Female) | `c0366a61c848f9c9bc9b9adf19a929c8d6ad384a` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=22 (Male) | `22656dfc87cf4779e7a8312086c2888a869be4ae` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=23 (Female) | `8ca15ab0c6cd1251e0151c839e7aef14ffbe4813` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=24 (Female) | `19268313ca9166cac803906f784ddc6163df9562` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=25 (Female) | `38974cab641eae93c6205e396bbacd8f2ff21a73` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=3 (Male) | `16053d5a15d53a59823d00849a5ec1b75166995d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=4 (Female) | `27ffd3c12795764a103eab5687a5f33ab16b5675` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=5 (Female) | `ebac7426d23e1e4e28caf4232464a0c058d40de6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=6 (Male) | `2aae625483ea98da958969f6e5eabd2b6f17c069` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=7 (Female) | `529146eaa7fe3405d81e2cd3ff07e603a71c5af5` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=8 (Male) | `90e3eb5a21a5655792fe16a2bfdbea944d2bf905` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Large, Corner=Rounded, Sample=9 (Male) | `a66aac7a7e40ee9cce606a8fefff22186797db86` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=1 (Female) | `728ad77e5cf14b5399c5f1541c6e1b57fa5b40cf` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=10 (Female) | `c06199ac43be2bae97cd75234b87c0df50e97d00` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=11 (Male) | `113e5846aab9d8e35914f2834d84595704c381d2` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=12 (Female) | `0e6168ecb921f8df23c6276d18d62e2812eb400c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=13 (Female) | `9f3ea04df8f701892e09203b7079e6ba3f1746c4` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=14 (Female) | `4b684a38af683c41305dd72feede2a38c1b18b75` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=15 (Female) | `e06e07aceb29ccbabe9bddf94e921c9ae00177ea` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=16 (Female) | `ecddb53b4252a7415206afdc869a617617d63685` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=17 (Female) | `24a95e0e6801740c538d1655121d1434ed106f07` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=18 (Male) | `ac3525e7bf301bde0eb8f504ddb7d6103ba439fe` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=19 (Male) | `322fa28f669ced11da0b716cbbaa5a8ebf88901d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=2 (Female) | `1ff1ec8ca3111ef11784d75f21568b9e25923810` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=20 (Female) | `87f937ae1535fbe34bfd4d5797cf06485049fd8b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=21 (Female) | `e45267522d345f393ab57958a86a6ec9e09bcc20` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=22 (Male) | `5dc172e2e5c36629a2f0a4302f2225245a8cfc18` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=23 (Female) | `c7400f549af63c483cb129180ebe86159fad37c5` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=24 (Female) | `4fbb83e0f2c8115be3e2b3c2d772c636e70441f4` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=25 (Female) | `9a93d26ce5aeef23db825acddca00322767ad7bb` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=3 (Male) | `7712ba4b328ba1b949fdc61962a4e77592eb31de` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=4 (Female) | `590a508744ce16f1394231cc1ed38b27567c8bb3` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=5 (Female) | `7deff3cd0e8abd3b5716c9f0987e71c1d51993bd` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=6 (Male) | `9bac975c7301d5b7d3cc340b9f47f3277cbf6e94` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=7 (Female) | `524001898426b71fdf6f1ad0ff01353b5070795b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=8 (Male) | `40c21cc5108f6ee97862ada546e2e925410893ca` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rectangle, Sample=9 (Male) | `6febb5b25b86336474247f9889c70218c5c9aa13` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=1 (Female) | `619fe5e6112a4af82b606c8ec124326248e85e2e` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=10 (Female) | `e20c96d0ad3b2434711dda1af587e68715600ba1` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=11 (Male) | `57dc4fdcfc59817876c5d661e99974f8e66fa007` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=12 (Female) | `cbdf35cae3d6d2d214b2cb33a30137f7ac003be6` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=13 (Female) | `cc18da71fdb1cc8a0a29ee6e949daafb9b8f802d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=14 (Female) | `1222a5c94bd0aaaf446db923270b99f90fa5819e` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=15 (Female) | `1c332667fef6c286dc1e36710066b0f1eb7f8843` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=16 (Female) | `0aaf85ed567a1bd51a0ff8bfea4ae23e67cd90ef` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=17 (Female) | `cea7a19de22f3a1be28f8f9a1472221bced64ad2` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=18 (Male) | `5bd212ced230a5c6a0139d9ea0d4a754be27714b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=19 (Male) | `4902ad9e6bf6ce39baced10bed833a4ba089e26d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=2 (Female) | `85298fc2091230a7aa5f9d810ab3d78dd97a7372` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=20 (Female) | `d8c3071b7cab2feb99a212f8594e97b99d0ecf21` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=21 (Female) | `9ed958b2915c041e420ef512e5b833ebc8bba409` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=22 (Male) | `278187ca541f4222e1bca097300f17158a51067b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=23 (Female) | `fc60d9b330c30cf22fc7fbab573429cef11efd16` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=24 (Female) | `11e30c0490638b358dae2adf970e1f753138d024` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=25 (Female) | `00b7a3f9ff1947fbe43934096aa736a04bc50e13` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=3 (Male) | `6477f2b48a699b1728a7de939475a8b3902d153d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=4 (Female) | `5988f593a8052b6f3b5e63facb152770759f64b8` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=5 (Female) | `484c5aad8ba26e392d007edc5f4ae9aac67afacf` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=6 (Male) | `5a8e9d3f86c6cf5d6bbfbd674825af644d3d7bf0` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=7 (Female) | `93e5281b371db5f02e0aeae6a147fdcc04a76d47` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=8 (Male) | `7c577fca41c2074de6ba9d4c28b2fdf763fe3ab1` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Micro, Corner=Rounded, Sample=9 (Male) | `a1d1d2d7514c7760b32b2ddb05acd1fe6fb0a224` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=1 (Female) | `fcf1313c0c5257599474baf621e4633fd2798d62` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=10 (Female) | `d6b8a0265a9da208d51c5143d12ef5067fe7ce43` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=11 (Male) | `814685056cb1d1c3ee3cac9df0b3270bba1bd407` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=12 (Female) | `78a85c86a3db2722486e8d2748fff6f3b4485feb` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=13 (Female) | `a6696da3063d0ac6789ec7b6bde23291f4befdaa` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=14 (Female) | `939b4ea50fe50b3dd4a28c3807a2d0a89170c0a3` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=15 (Female) | `5c6437aaab2dcb03c99bebebbed5a6f7e671e197` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=16 (Female) | `b6d9201335c2ca7ac3687339100a95b0a282c4bf` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=17 (Female) | `418e18060ee292d93fa69736289d67fb2521d89d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=18 (Male) | `8ca7aee9d7386da59b8dfd8fab981e37e7d295ca` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=19 (Male) | `5ed227f33ac0491bb177f87579c7eb6f054cd0c7` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=2 (Female) | `804a7fabb437ab0befe3ae00a573f82f1ce0f44e` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=20 (Female) | `2da6a5a39850f5005e6b790d74eb0e0552654113` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=21 (Female) | `cda4a657687452e896bbdc6c911467d1936c4a87` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=22 (Male) | `5db6bd18aa49fa5ef6e5220c7badd96c4771a3a4` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=23 (Female) | `0bfbaa7c37c249c6f1814bad868bb35588ac08d0` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=24 (Female) | `981bf45412b420834ba465593a5ef0dbb43d06f9` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=25 (Female) | `0fdb099d77937ebf220a00629dcb35f52eef460c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=3 (Male) | `96793829873c0f4f8cf340da2793b2442b3674c8` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=4 (Female) | `ad64fb2582b3821b55f59acec51e301193ad5ca9` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=5 (Female) | `a5737092b050dcf9d2c8d4bf0757a0618e27a138` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=6 (Male) | `1fe0a8f03e0043513a1c1eac0f346abf1c9c94b8` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=7 (Female) | `068312025f0d9be09b196867d8625e921cb19ffb` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=8 (Male) | `821b096531f512fb4c107fdc23057927865affca` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rectangle, Sample=9 (Male) | `25f7fce170c3fc0deae091dc6800d12f2a7d68d8` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=1 (Female) | `0068ebfee9ce91a82c0ec11ad6223e13932df3d5` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=10 (Female) | `75f7e88349d200e5b3d93f58bd6d2126a7c8b797` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=11 (Male) | `e9dd80e755d0737cdbdb2e10a87136ed5f7ede1c` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=12 (Female) | `c2ef8a36645ea4d39f97b2e3d01990ccc1484eab` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=13 (Female) | `bcd47b0f83a95cda8e1d10e108003f48ec8696e0` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=14 (Female) | `c15a73b6cc8c5875fc6c89e73294669437f2d48e` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=15 (Female) | `17da2c4e631dd3aec1df1b9e535134c0fdd456fe` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=16 (Female) | `8ebf9d29344fca1605e6445abb0e1705d79ac9d8` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=17 (Female) | `8dbfa85b6f877d32c330b946327ff7c290a03b61` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=18 (Male) | `77923f91b92596da8f7ee0b35721b8ada28cf6da` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=19 (Male) | `2129870eb0931ff72d6772db38d836c36047b641` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=2 (Female) | `77b7daf352d6ad2632d6bbb713f5734b558d2767` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=20 (Female) | `f3f2be4da3fd3177a331d9a64c0b6b7a0755148d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=21 (Female) | `5cbf5eb088ae37397f3e2f51821d35b54e2e5b5b` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=22 (Male) | `54e5056d862ac2396bc70e4a73a8e0f4a2a60927` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=23 (Female) | `a4a166a3b4fe5ec0bdcce11ed53804a5f741b82f` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=24 (Female) | `a7ebb521d601a5abe4c1de18e61701eb12fe2b96` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=25 (Female) | `9f5f357146d0358b7b13bb76cd762e715cf887f9` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=3 (Male) | `ca4e9940ba4e798bc095a277770ea8d52bbf4220` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=4 (Female) | `7aa1c7b7c039db4e64aa707b3917d973801fc434` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=5 (Female) | `30733657f59eb1dff98d827ea7de423f0d52fe56` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=6 (Male) | `97b889f43b2ad438cefca07e1e0699f8c15ff968` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=7 (Female) | `cd627b1ba3aa6335ed43dcfe9fdc077fda9c2058` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=8 (Male) | `607c2456474204917bd8a2d5283054e3075bd847` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Image / Size=Small, Corner=Rounded, Sample=9 (Male) | `1c2b04f5724c9f9e0e60dfb01a2c851b3a317c8d` | Variant，屬於 `Avatar Image` | ⚠️ 尚未填寫 Description |
| Avatar Logo / Size=Default, Corner=Rectangle | `e77c849a22845515db0dc6d41d269a914f84a1c5` | Variant，屬於 `Avatar Logo` | ⚠️ 尚未填寫 Description |
| Avatar Logo / Size=Default, Corner=Rounded | `88c2798c33eadd26ce293dd44af1db2d4a05df7e` | Variant，屬於 `Avatar Logo` | ⚠️ 尚未填寫 Description |
| Avatar Logo / Size=Extra Large, Corner=Rectangle | `42064d0614cfdf4bb47049c82fc32bbe213be376` | Variant，屬於 `Avatar Logo` | ⚠️ 尚未填寫 Description |
| Avatar Logo / Size=Extra Large, Corner=Rounded | `210e208fad590ad6fec4d40ead05ec4ad69e052b` | Variant，屬於 `Avatar Logo` | ⚠️ 尚未填寫 Description |
| Avatar Logo / Size=Large, Corner=Rectangle | `839ed86c86f407a9adcd82be9209b5ce7cfa4edd` | Variant，屬於 `Avatar Logo` | ⚠️ 尚未填寫 Description |
| Avatar Logo / Size=Large, Corner=Rounded | `bcd22bcf24f7e5cfbe7096b71ce530a06da7f2ea` | Variant，屬於 `Avatar Logo` | ⚠️ 尚未填寫 Description |
| Avatar Logo / Size=Small, Corner=Rectangle | `4aab58262c0ba20b065e911103e3dc49e2eaeb4b` | Variant，屬於 `Avatar Logo` | ⚠️ 尚未填寫 Description |
| Avatar Logo / Size=Small, Corner=Rounded | `bbb1df2fa166b403b4d1109bc8caae83ed1478ff` | Variant，屬於 `Avatar Logo` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Amber | `3a6d700884c06c2dc330116f72c048611395ecc2` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Amber Soft | `5be0db348ca20db7312c356930628224c4d91f39` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Green | `e734ae048301e70db260b709f2464c68fea6bf57` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Green Soft | `68c4f05009a9eee0f28ed40a97b3d8b538bc70b3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Orange | `b50c4cfb6cd62147475098b38d5f8bc30e44d549` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Orange Soft | `50c520961d5e1e50ae3eb61fac5aa217c89c992e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Pink | `6998103177249eabe4ea5582aa1d0ac017f5dfd7` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Pink Soft | `04240e29d83ada81b0c92b0976e2ca6890411d1d` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Primary | `01bcfca38af54cc906bcfd717cb97918f0000ac5` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Primary Soft | `59e367dbb6695d34c7a98c21746ac184c585b56c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Purple | `1134c8aa1430c53fd674aa68320306f1f6fb4791` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Purple Soft | `50bf74fa9a0cc6976480498d455364688a3fc970` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Red | `5c906907a7a03b1de9f5919fe0e40f5f28ecf440` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Red Soft | `029db65e0d9675c1a5c76b6b41e9d3d677513e21` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Sky | `a42a21ef9ba1e50a6a44f996fd8f3cfc72e40d31` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Sky Soft | `37864347d2e9ec9f560254c35de68c6055f4d9ef` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Teal | `fc904bb616f5548a281b73abc0aef4e818e67169` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Teal Soft | `2f2f5eeda21b9ed2cc68b40558564e99d11ba05e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Yellow | `3e041dad1bcf5f40690ae63053b438ebc5a93a65` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Default, Corner=Rectangle, Style=Yellow Soft | `985d8fec19fbc205ac1696c200dc3aff5e07db51` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Amber | `26e4775ad72c38fe20a011d60bf7b7a8a35ec000` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Amber Soft | `02843535d98fcdc66232104acd6bfaf216f05b95` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Green | `d0077617a7ab743df3586906e733e09d6033c752` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Green Soft | `d802da52674df8cca1f2d8919bc3b091eb1279c0` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Orange | `1f415607fba49e1d6bd191059fcee057f6ed1977` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Orange Soft | `cfd31acae6d9c54a222159020e10819ac3e4863e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Pink | `10a3bdbe7de490ab74b76c76183fcea15f0b7435` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Pink Soft | `c71a72f2780ffc7199ac2f0aa703674c6fe324e6` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Primary | `3d552cb8db2a209cb5134a1c74a25e6d78ddd6a1` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Primary Soft | `0ab841f148bc06de2870b98df1c5023b9e878a7d` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Purple | `429e453bec0aef30f1eb30287a7f3fd4de7fdff3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Purple Soft | `0feec82f25201eda8ee7f8b1e8d48ffeee00b53e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Red | `0befc9475f3d2becd43d31c1aa1db54111634f61` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Red Soft | `b32cd5cc5ed478c9c8d1ccb30f2d00ade99d1cfd` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Sky | `59379db1956db9c0b39c3726417672b356268f27` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Sky Soft | `2fe11b9c3a4311cfe13acb14795597ebc92ec9ba` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Teal | `49b92026a942e4ef6091f73c87d42ad7cffb0b04` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Teal Soft | `193439955b0706bfd12aca6cebca87850aabff3b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Yellow | `bdfd49b164affe06115d37a3ba5e341556ad7a21` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rectangle, Style=Yellow Soft | `3d17eb8afff4a74afd9256cdc99090aef3cf1b17` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Amber | `6d0255536b8d8e51ae3feb86be5cb71072a46f76` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Amber Soft | `b7e90e2a84bc83a0760d361e9a632e0cada50d14` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Green | `d9e47cec3622a44ab41a07668b927eebe0c1f34b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Green Soft | `358445a78eeebba4c89689ea86ef48b71adb9429` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Orange | `834766d173bb9b6f273a495a45f941debf15accb` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Orange Soft | `9ce80701755d6c029d161e417a44729dfe0585b3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Pink | `fbb84a7f450b67a1d45d6d6705ced658704aa492` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Pink Soft | `662c2faba0effb4f57bb3ac3b2e557f34df946d4` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Primary | `788e83c85ec4e7038501bbd000b7b21290db7871` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Primary Soft | `1b8b6c371dae595680df7b74244205f41220bc00` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Purple | `e6e9b7b808c22ae07ffb69c68a600f225dfd0fe0` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Purple Soft | `05c390f1eb879e616f45b4b733a24ef59f78522e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Red | `40ff1aa5f9e551e648a98caf4fb502c5dcf8279c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Red Soft | `3cd3cf3c21975e190f31b0aebd158d465256ab96` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Sky | `2fdfff89c31820451c16409c825db82fef1ddf49` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Sky Soft | `a53caa30a9d14430084e9f925a4aa8aea3344ae2` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Teal | `087f859ef108fe512ee71a28deef007c923b1e1c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Teal Soft | `0f633afac3f4d0cd798acdc24586941c2a0fb32f` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Yellow | `968569aaa4104411f3e185f96f432a11bda1029d` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Micro, Corner=Rounded, Style=Yellow Soft | `cc04d8ae1bbee81f2e8bbaf750d7edf43a5d7faf` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Amber | `6d05469b0e8b91b2728179abfc71be279d95e3f6` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Amber Soft | `0beb6634383363477d261f03f67d160e7aa65254` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Green | `1e40cae56e1fac9a6d4e3f4c3ab0f2cca17c8b06` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Green Soft | `912404cca684c6b1fd086d13bb704ba60b1f4228` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Orange | `93f307829317e59eb7789a65c106631261698cf9` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Orange Soft | `42b0dee0be2c46aab211c26f0f35c3a3676a5e91` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Pink | `0f39b13d6ec9dbe200b91e4770ddf12f11e3a2b5` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Pink Soft | `dfbca4742c6e5657d47bf6ac05931c2e00ac9072` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Primary | `1d3aae57231c49644447bacb839423c903d7ea2b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Primary Soft | `c4161e79b7a5925f9b235b640131af19b59de57e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Purple | `faafe2a9573cc5fd7f867de9e751b38c6a633e02` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Purple Soft | `05bd2e6d8a1d0c62e46c29f6d20bfd7d6aeca689` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Red | `3c338aaeb09872fe83ae4b57dbeb5ee55c5e944e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Red Soft | `8cbe0fc8f7669b6dc905fe7ff3d11324f409a871` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Sky | `bf4602ee079e3b5fc1846becf7c9a72727d183ae` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Sky Soft | `a7a4d161904711b7aeffe306290b55addecb65fe` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Teal | `4f6e02e7f2b4d1580a1680c4307ab11d925b0642` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Teal Soft | `92398204a0d28e3e7e74548e35d0211f03220290` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Yellow | `fbfaa021e48290e991fc2dfb92eb6f4353ea7e48` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rectangle, Style=Yellow Soft | `5efa563a11157a4a1291f277692a613b2ca90b15` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Amber | `e6c7f14ca45df715771d0de01602b92ccea8a62c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Amber Soft | `436a0752d11778fab9976924fa4db054ef46a878` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Green | `5de13b58e3737e4a55aa272c09ee6398db80255c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Green Soft | `ba1ade28d0e288d4012e322070bedbc9d584eb9d` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Orange | `dc22b3dc56bd65182904f5b5ad2d0a7a2d3a4552` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Orange Soft | `069e9b2034bc3a9356a71662dcdf7d4f73f653cb` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Pink | `0b7193402f956c4b76a68e18fee86e2373725a5a` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Pink Soft | `7b1cb150903ad49410b6b7101f0f54cd089e6653` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Primary | `72d4bb15acff0ba8e7f55aec145a103cdac8078f` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Primary Soft | `1a24ba148e75b9d8a83e41847a3d9e8884b7d05b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Purple | `89e1e1147cbd6950ba832a3a07b06ac8b9ac71aa` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Purple Soft | `ae0d4d40d21b9dca4819d89139600f0041b10821` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Red | `238b3c4bf086a92b9a6313258495f5bd3a186074` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Red Soft | `ed5ae8ceb74ceaa9c7760cbb2c1a7c16f856190d` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Sky | `68c8dcd2972c9fce254b34a719b2f52daa0792a8` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Sky Soft | `ae0f754fa05985242479b0cdd042bac7e4f4943b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Teal | `8fa511bc28dced77de17cc0153a5aa43860810d8` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Teal Soft | `9dfaee292c18fe911723216a17b8bef2800dc85f` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Yellow | `cf0ea7c273d0691a3be6c1085947e37dceca38f9` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Extra Small, Corner=Rounded, Style=Yellow Soft | `6d4de12dbddca492f502f2f435711dff160c5d63` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Amber | `9a4c2d48559e3a124e42a686c276574ccfa45020` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Amber Soft | `049e81dc729757addc1992c6dcfb84f40dd37aea` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Green | `3d799641a1d45a1e748367b5fbd733c57f6a36b9` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Green Soft | `e4c3b9b5c012f97ab8a58af870b349bc888a9643` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Orange | `2e87c5cce4bb53b160e85079aac49b2605a0e895` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Orange Soft | `b8da329567550ef7fc4fea8cf65d6e2bc677a470` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Pink | `4244bed1c1b79c66198f6a69ecb5abebfdc928fe` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Pink Soft | `8ed3e2f92cfc01cb9951f9a89282fd2952599326` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Primary | `686aec65c621d9017c45bca06af006a52125a434` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Primary Soft | `702214d8b126aa7bb21a399f0801c2d1816b930f` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Purple | `3a80c3aa83dc6a5caf9167f5fec19497a0e08e75` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Purple Soft | `592cf50656a65fa876a34ba8060cd541509bbb58` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Red | `abb59eb1c24b74eef1b277bc0f3a0daf1f02661a` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Red Soft | `2c4dd4f372f165e1c9a1bb2bdb6b03293feb69a6` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Sky | `d61d52fba82e70724ec2a14f7a05937d2efba996` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Sky Soft | `5847ae7c37c79e6892f76c1f061c713a4e0cbbc6` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Teal | `2093ff809f5ea7539720960cc2fb46808492b85c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Teal Soft | `ba6d13f74ff925e54c287bff7d68c59899947e83` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Yellow | `436fa8a07874d200146822cf9175603282a9cc25` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rectangle, Style=Yellow Soft | `b443b5f66a77a2d12dd5435e832e3e56d0ba2102` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Amber | `4a59cfdcc625d6b1ee88e302af8ce6e410a0ca3a` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Amber Soft | `ea7f5b4f314bb6dc93b740a3e3d9ffe3966e6687` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Green | `9bc7f96dac8741e69ee04c294d9a8ca79b95603b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Green Soft | `eec7e583568cd9c035309f1d23f58a8b01358033` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Orange | `c074b5735fb4afa8a3b897cd8fcf3ee0bee0ac7c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Orange Soft | `3ba733c7bec8ced5b3d873de40b11e6d49c2e9cb` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Pink | `bbc7bc5d3f69d911fbb937ca8a7c114fd6635a7e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Pink Soft | `6ff44eb1e0ef341a25fd118328d965b348527300` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Primary | `410f95f761967474baf80efb5b07e53db2a6af51` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Primary Soft | `dc07f85420b845ee1a81dfc4b43a470ee652236c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Purple | `9bccaed8fe80fb4a63c49f9923cedf7dec1b89eb` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Purple Soft | `06004f8089fff3fbaa4c2b508138043a12afe8ab` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Red | `4ae7a61dbd2dddeb2672eb5fce4263e865220f0f` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Red Soft | `a736e9ae5e4c1637f1d744a2e7edacbe42717c40` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Sky | `58601c1f2e5543ba5d24991f5c25121e8120d636` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Sky Soft | `5f4a4a2aac9561f4d7d7a47ae6735b11d5d44e2e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Teal | `197f2b3bae778127f226c096e7ff2edd73b06b5d` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Teal Soft | `92d0d331f514540536410eb9e5444ec8af27773d` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Yellow | `d9305422977d6836446363b7c10952c6d73948e3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Large, Corner=Rounded, Style=Yellow Soft | `a192ad3c97c3ff2999969459aac8c9de9291fc93` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Amber | `1a241ad9bd80a9640a464b84e118beabc03b1423` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Amber Soft | `c4238dab78286a8ca440ea6fc509425f908ce2b8` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Green | `435eed101b7901cbfcae9e826a4ba9d972663236` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Green Soft | `5179ec232a5d137ceef904e3c81dba57d01829ee` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Orange | `ce968e04afb14dd430d2f2cb66506f8c0622405b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Orange Soft | `23feb424a7103a532547c44a5608b7829b6e66ed` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Pink | `544beef40540c37366669949179f9393c3868a42` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Pink Soft | `c3f3880227f16717d5b3519484f3f5fef176b1b3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Primary | `efeea676b5cfc6b631fbdae96bed3e1b0030ad1f` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Primary Soft | `23156c30c5f319202940ce50f37bab9241bd0cd4` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Purple | `e5d67ac6f6ea1dabd7673819026d76cf13c8f08c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Purple Soft | `39979701e3a8c367d2f1e1e14c3a4a8388ce4bea` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Red | `45ce0cd8bc0b88a5db97d41dcdc50eef6736edd8` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Red Soft | `ae0885f6f3da2e9211808f21a22085028f31e657` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Sky | `ee50ee914688af879966535e1988f4de5f57195d` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Sky Soft | `aa55af6d28d2598d9c714fc09684735e7a4fd2a6` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Teal | `8309a0bbddb56610b587102fc9f04f3ee4ca21b4` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Teal Soft | `a2cf9a0bcefcd04a5c03c40a1fad683466282b1e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Yellow | `4780a42a04c2d44a2a04af7cd431d4e5cd20f507` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rectangle, Style=Yellow Soft | `cc113d80acd0d3df18cc17b3f325d06a7ed84bae` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Amber | `4a35598e8b675ddfb38b9c86bd16d94d4553ac82` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Amber Soft | `883007361379baff02bb3e168183bcac0146ce13` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Green | `dab3f03f1ee108efc009642a8a8eb748e2c4f8fa` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Green Soft | `65bf839214b39fe947dc32146a2d8e7fc924067c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Orange | `816c284d5029fb7b462c0fdde294055c854e5b48` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Orange Soft | `fe8363e316570f1eb80508a91b32f1e92713583f` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Pink | `b83cfabd59f62005abe7fe6dbd9d38240ddbf53e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Pink Soft | `5af1be7388b49055deedb29201e69ae429249c9b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Primary | `91004cc6499880f1ef64779e936a71144e352665` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Primary Soft | `d699f3d1862491c72698472848691d2828f3a232` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Purple | `3a4827f9b65480b6f7015a2eca291efd7e0b55d5` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Purple Soft | `542506b5cd1eca041d65134b3881febc628fbc5c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Red | `3526368748f9fb1c81ff83e3821046e18bf78ebf` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Red Soft | `b6b043e730bfb0ca5fc505bd5b7ea625c308cdd3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Sky | `53a0453edf7ac9efff86cd14424dc9a5b530d325` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Sky Soft | `a295a43cb3fe0e3aeb951e21eba5d592156a4eb1` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Teal | `e8118d464d58193b1e5567cc28ce345324fb11ab` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Teal Soft | `908676116d860c921dddf720ceb79d00ee07bcf2` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Yellow | `590f24e8efa1ec2d6421e101c4c3dc4285d43bfd` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Micro, Corner=Rounded, Style=Yellow Soft | `7b501dc15041f991c0bbbc6450a9bf750be713f6` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Amber | `3a9e442d5427d6940cd303a48239c0d67aed5a25` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Amber Soft | `5e6f0929409a25e2205d3241bf3cf270f3c811a3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Green | `57f6562117bf8d3ada4cbf4782b52b0a77979eb3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Green Soft | `52a10b2c1e1a224c8ed2911c6fd45bd0b7527d9f` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Orange | `a5f354ccc1848dd67c737b9a89b12335cbca5260` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Orange Soft | `be882be63fc664d1415d4236864b2021a9ae30ba` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Pink | `88d9cafa616da23efccc8ea591343d732d2d6d27` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Pink Soft | `0e491ca15eeaff39a94095d5a844ef4ce7128f0d` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Primary | `a362a1ddf58c654329a99bd11d3df786b0773653` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Primary Soft | `e1e4966d72ceb6d4e51ff6d24d16b754e6c9aa57` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Purple | `e22e9313570ec03e854549147ab5355817c254ea` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Purple Soft | `5bff76f569e9354e657a31eed18bd821e2ba1a83` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Red | `27b4491f82dc79ad332761fd71bcbeabaafead80` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Red Soft | `9cdd2ae6c90c58ba71420a3916f193258f24ad39` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Sky | `a9bdfec8b3d6b4ac455453f0110c642e0fa29c9b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Sky Soft | `1c9e5ca88c4829c98cb645ee4aaa73221dc17926` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Teal | `0e5a99e3e60163c4e4898f2c3aa2ed7b07c12486` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Teal Soft | `943aa39b3902d4efcd9b63cf410a975656b1efb8` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Yellow | `db80f49a68c4748b40eafa0685ce7535f65749ed` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rectangle, Style=Yellow Soft | `e202817ffb39398d83cc1427bf55e0414b319f0b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Amber | `61344950f3d3e244a14e2a3b0b9245eaee7e31ef` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Amber Soft | `e3499fd5709ec6e57e4adff3085d8049e9b6d82e` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Green | `ee4cf5cf67c3ab64f3533accb97ced3128ef3bee` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Green Soft | `76d19a3c6412d922f9425d4f0e86f9736627fbc3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Orange | `be12b53a0ac39bc64dfe7f601519e32b792e2bbc` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Orange Soft | `089551472ce391ed4fa1b18fea792b06fa82d9d6` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Pink | `0d27e7f621843d50dd27b0540a9c1c20de0bb05c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Pink Soft | `36d3a22be99437c9e260fb597d78b37f21371cde` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Primary | `433d81efa01fa1984bec1bbb10d38cd79fb65452` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Primary Soft | `987448cee5fc29361d5a71d5824f04042740a97b` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Purple | `2048e1ef9d047c8766b96f698aafa7b2928de2e7` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Purple Soft | `7c533a6ea58dfb42f4fea20e73ba1efc3f0d3342` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Red | `9ec1d57e76c9a0f0eb62142c4d0f2435773ecea3` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Red Soft | `9cb279d0a8c36fa8eaa580aae7d78bda4f546213` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Sky | `f36e211eee36ef59a7cf0df2f6e565012a9897df` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Sky Soft | `74dc14679a5578faed44d7a936ad99db308b807c` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Teal | `efc5bdfe60e7105d0e1cf2fc7ea717a1fdd1b1f6` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Teal Soft | `6a8acce94179546c0df5be26b644faea08a8a687` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Yellow | `8ee3c917f2a279f86ab6f276f0da16674f947c41` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |
| Avatar Text / Size=Small, Corner=Rounded, Style=Yellow Soft | `d63db14fc77a0c6a5283533353a21a5803d161c7` | Variant，屬於 `Avatar Text` | ⚠️ 尚未填寫 Description |

### Badge（756）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Amber | `13a49b563c87ebfdc74c9c7c3548f01229bc5546` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Amber Soft | `dc70fbf7f86821fde4ae0a531f735866fe61e2a6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Amber Soft Border | `897042b89e4740e6656c92770850fa2b5450412a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Black | `0d3cf1e69c692638ad2712c309e22aada30c8c56` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Cyan | `32edba7411eaf185c862c425e255f66cfbc2bd0d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Cyan Soft | `0662b6750ee95d9461c09fa9cb03f0bf832a8a39` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Cyan Soft Border | `c9726d7499a632d74a243ff8402734ce3b2869da` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Emerald | `74b0f2d3bb29a320585dd3d2fe1fda681e3b8d58` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Emerald Soft | `cc318711e4094c4fb2d4b0d01b2eeefa828524c0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Emerald Soft Border | `1db2a42c65456cbb5fa5169fa8a590f35aaefc9b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Green | `a9dae40013995182d493a841fd62d8caac8022c1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Green Soft | `a45a79e99d0952cb4478e4a9f1b7b8d877b0a215` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Green Soft Border | `af6a59caefa04dac54c20fb487ceca76183102b9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Orange | `55f8467823c6ef899528f4948f1b1e37f0ca6f48` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Orange Soft | `2b636338e07253af6d73926bb58e4377a37ada67` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Orange Soft Border | `e9b4802b5e1d8e8f02e1838e62679a79f9da385a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Pink | `eeeb1cb84a7be5ccf8bd057232c76d053fdf4c7c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Pink Soft | `70170a5d6071bba760b8da8b4180fdd7393b91f4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Pink Soft Border | `9bb3a6b765a53145836aacaa0b2c5d6e36f8fe0d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Primary | `5b6ad20bc156f73a88bfce816064255a3864f333` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Primary Soft | `b01b4f2cebd83a91547898af0818f00d1c718ec8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Primary Soft Border | `bf5410482a880dd19e358ec40310a98a74d7f85b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Purple | `49a89642d87d9945e1c68f708ec662d6f54f5fe2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Purple Soft | `dc8bb954342871f86463c4d546995b5474c45ddd` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Purple Soft Border | `09150df266bef3578d76aa5a709cf11377a77719` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Red | `7ca277095a4f1a9076867511ba7edb951f4ecd7b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Red Soft | `68870103583f1f7565a3973f8b41475cd9eb18d5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Red Soft Border | `2dc4b378322de27ed90760248888b5545287154f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Rose | `1f77ab65c4b9502dbf2f47187990680768e1b8e8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Rose Soft | `1490da7aa82fb6eab5566d5be706279315c685bb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Rose Soft Border | `e6f6404f84a23b906ab70a3527717ef6b4cec5be` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Secondary | `5e2394170d231883efc1cfbede9d22eddcc46a44` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Sky | `8443e269df7904230fcd42d63865e9f023d1a3a5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Sky Soft | `fd408d39dfc6053d1fb99bc9d6366864d622fade` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Sky Soft Border | `853825383b8ec4e0c6de7344c6d659d921c7c4a6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Teal | `6f806a66bc7a244e31348d8fe23d76be92516bfd` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Teal Soft | `fd710ae37efb67829cc1b368c8f98a584c3bbcaa` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Teal Soft Border | `7db56c2ec8b79896171e71c8ccf220dd9dd67c2a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=White | `11f8b0c71e402e6f9df497eebfe5b112ed523693` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Yellow | `9728851f1d28f52555f1ba6182c7cea1e4eed404` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Yellow Soft | `ab35a2bf18f3045d0367c5f75fe6dd619cfb7aa1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rectangle, Style=Yellow Soft Border | `185f2fb5907ccf784375dc18e1afecff14f40458` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Amber | `9a979aa33af70d726b4508f20f794db8f45514f5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Amber Soft | `c7b6c400dd5b84c831c9baf541aaaf02feba30a4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Amber Soft Border | `3797e84b46a0bdcf2b034dbd126b79175c84492e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Black | `2760be2883f64c05bf7df0a9ff812c664e78b4c3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Cyan | `bf7f04d3fa91c06e1f5610c84b02e133ba5acc2b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Cyan Soft | `8819d3d17f1e0f4c48bd2cdb83577552f341dae2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Cyan Soft Border | `ca2ccfbfbd04fb70864ef9036f2a9037d8315dfb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Emerald | `d6df7648695e28043167bff2dd1a6b34488ffd9b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Emerald Soft | `07264927036e4f6f047de75670bfa328d7738ee1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Emerald Soft Border | `3ad3e67b01859beea3e00098c124ac1bf5c050de` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Green | `521a1fba383c3869977bdf09b5603b0015e95407` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Green Soft | `1f7573d5b91dacc49ee8cad9de0b0ceacf8f0419` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Green Soft Border | `dbdd0f2c30b2bacea6a9da14db69405b522a83b4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Orange | `bdc5854dce52c0c6336ebc2497023ef0d6df350a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Orange Soft | `a770b1b4d53fd2ea591103216072f2d7424e6c93` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Orange Soft Border | `e4ac08b083376acb7f89a1053935200d21216b7b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Pink | `21fd25c3b24311283dc2efee537e11ac4e2ae1e6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Pink Soft | `25e002259a84868d647e91e692cf9ea95108b4ad` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Pink Soft Border | `e566788c83d4bf72dd99c1b989ec6bdd67dd4ff9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Primary | `49c7265ba449f86cf6d43b56a2d6748bd0fb9874` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Primary Soft | `ca5f85affe0685737cb9a56b207617939d0eb6ad` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Primary Soft Border | `96f99b529f214bcf3d219aae3bd3d1fa992b34cb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Purple | `cc80467e9f8895fafdbdb58a2253f0cb01263c9e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Purple Soft | `fb588641f7b2d398b237a4fd2a149e3cf17f903a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Purple Soft Border | `fd03feb1cb72f4e66163e60f7b046dbf5e6f54cb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Red | `c5c38a9f41142c42b78d683fcb39990e5a50f58c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Red Soft | `dcf086f390f6715c52208cb89853eb67d53bafd9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Red Soft Border | `cedfb1d04aa01e6c40d7be7c985455eadc944546` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Rose | `b05b9a3916e467493d6a220f78f6131c417fe831` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Rose Soft | `97938f4b229dbed156abbefdf8539096b4a1ff0b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Rose Soft Border | `087a984932107ddad2f9e1f7500c522a00fce233` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Secondary | `6517b5a42034f3c6fc720686323e28854de59a63` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Sky | `5a6ad674250cf5eca50733b7b65c3345cc1d83fe` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Sky Soft | `9f5543ae85bf6db96e45adcc4de871b440b66061` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Sky Soft Border | `2cf26f7aae893af3ef75ef1f1802fd960bbc1f5f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Teal | `9fb479bbb7b67376ec57bd31656334a842892c47` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Teal Soft | `dfe9861338d1e8c4aa36f1dc996e03917b40f6df` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Teal Soft Border | `465f3de17348c0e2ac741422b426e871416ba5ca` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=White | `7e6db410bbc9382cb4cf93c944c732dedc08c8f5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Yellow | `85b6a38fd240fc9eb84fb720a6fb515356228d73` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Yellow Soft | `40c6ed0fdf28d539a61e2345728bd3d67979c649` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Default, Corner=Rounded, Style=Yellow Soft Border | `8974ebce0ab462b05c108c50bb8586a983b1159d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Amber | `3f489adba251f8f3bded82d7a08cfa5e6aa08fc6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Amber Soft | `02bf7a06dc24404d8f78580ee67f7dc021fab19f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Amber Soft Border | `c59f83d552e0da7f0be1ff7f40e556d6dcf0511c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Black | `c06982f04079f9ffdb01e2884f626a818a778f21` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Cyan | `b19eb0dfc76ed309f93cab7c5bdba81de328c34d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Cyan Soft | `f1774a0fb01084f21d3b08fc65e8d5ed9f697cf9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Cyan Soft Border | `322ef220a1ad7ee7bdc039fc888bb08c07f62090` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Emerald | `7d8d03665e4d7007f7900dbc43fd6534cbb081be` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Emerald Soft | `bf95802039e0d7e8d0bd3388f6a9304c7f6764a0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Emerald Soft Border | `11e2c7a67c8ac02230a007dc23fc145bf0a3276c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Green | `8d738e7d2e934832d8cf991366d79ffb822db811` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Green Soft | `9647db6016a42bbd801920f0b3f8496a4d5f050c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Green Soft Border | `bdd38860793ea2ed3176fea565bcc911476aa699` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Orange | `e4af44df693a4b28a466e7da23fa132b45453dc1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Orange Soft | `7dc1fb0e388d008b59e558b601903757bb8fa8fb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Orange Soft Border | `21bd1ce3a06e34d0db29d1639d7ba4837c88ccf0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Pink | `3d89c00ac9801101010b712f3621adec91c084b2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Pink Soft | `22974fcb3432b170a5c1c8899366b14140e5e8a4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Pink Soft Border | `eb3128396b708d38ca115118cb8a10ba04b2dc3d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Primary | `d8cad25b6a0fae0867e64dbafb1cbad92bced437` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Primary Soft | `48d42392fe8700ee1f9a33d59642195580b883b3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Primary Soft Border | `d6440d362426540a74b062f1285c5b6ba677f775` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Purple | `1173cc908cb1f21c89eafa867d326af99845b25d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Purple Soft | `90de1a89e808947809af7a895f5c0ff8e028658a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Purple Soft Border | `d1793871052ee47c3be94a19a61222a0b6ee34cc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Red | `495c42a76f09b6c5fec50bc128461cc212cc4b84` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Red Soft | `726b59b3b15dd78a988857abeacad23bca2abcb7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Red Soft Border | `e2c9853e8b9986aafb54d9d45b79fd9bf948e60e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Rose | `61dfd19bca27e804334240134d75b688fe6c36d3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Rose Soft | `bf4073f63840477c38f015a095486a781b71c290` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Rose Soft Border | `fa33e3393382ce6e7ceefa5fc47e180d8bbc32db` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Secondary | `deb8c9e7598a8ebeb37018180931e7bbef5b7a64` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Sky | `21caa7d9ac01483ff5678e11db792b1f231e4b11` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Sky Soft | `3182eb235983ebcc3cb7d67f56d34a8fb4fac7ee` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Sky Soft Border | `e6092597b0077da8048005317602dac35cd6cbf0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Teal | `7ff3a1459e52a0a0aff3f7b56262b9319e49a3aa` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Teal Soft | `b18f7c791292ce33c609426f52e0393527098a44` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Teal Soft Border | `cbab85bc0c34978ca728da2e08aacf0ed26b4f6a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=White | `b69a28f20698cdf17f7c5c6e71aded4d35bac834` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Yellow | `acfaa524ac0e152c3f96d8064e85aebbbe28839b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Yellow Soft | `374b02a6593f1723a955c5baee4cafda4cbadf77` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rectangle, Style=Yellow Soft Border | `6d6c04eb0a3f1fde5d54cc4ded29f8123116af5f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Amber | `a9b794fb084fd98f4e59ee65e6478db8c8aa0859` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Amber Soft | `bf0430b66cdfccaa8aa9cb56821b8c1d5a28a5c1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Amber Soft Border | `df4c57d0803949cc94ed06b646a25ce0c2545aa2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Black | `98fafec2c44de553c7799a7b7e887b652f6fe6f3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Cyan | `7951bed24b126c7f1c6a06c256d8b568351e6001` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Cyan Soft | `1f6e97e298758438894f074b69760f273620a658` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Cyan Soft Border | `459d5b42ff8ef87292d740aafe39075729ae2e32` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Emerald | `559218987f44b953240545a572e9727607a2132a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Emerald Soft | `ee943d495b245443aea206534bc9a2fe80573663` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Emerald Soft Border | `ded69313a2ed5cc427588509e6cb80ebdaf5d9e2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Green | `782498ac163d7cf62d53138b6b50dbedcaa237b0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Green Soft | `6efd5c2a2850ff2ff5fca098c3867a83b680e199` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Green Soft Border | `35962f9dabe5e226957cd52f795cea43ce772b6b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Orange | `e431e03ad5c1695e03cf0e6c054452bb33ceb074` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Orange Soft | `cca99abcd24a3bd6bc6ced16bce5cd62ca7aaa5e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Orange Soft Border | `1ab2cccf09f035d130eb5a7cdbe2d5cbffcdc31c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Pink | `2b35f304cc9b76fb00327f2d1060de1758af1a69` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Pink Soft | `a17c10d703118b9ee0999de98501b6da447182ef` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Pink Soft Border | `e0d79c489620d18391a7cd134055c1718d759f1e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Primary | `48e9c7e4dba0f8bc551160ee9a2d795d533fca14` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Primary Soft | `4189724ae155bd2c972c5bbf65cba3ad83c3d3e6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Primary Soft Border | `fafaadbf5043c3910e0540c8590b2dbad43733c6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Purple | `018d75fcf48cd4e74056645f3fea6753413bdf25` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Purple Soft | `794be64ae93c76feea27e43fe779137e75522f59` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Purple Soft Border | `ae003b33a97ef0d4b2fb1f95d70144a97eb29df3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Red | `d40d93230d917e8b8b1ed9a0136525d6959bd6e5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Red Soft | `8187a9f84a763f88e4939eb63c73d3122f00c6f2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Red Soft Border | `97c1db2eec7a7786425e216a1e54ef253a7acaac` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Rose | `eb435c09c86089609888ddd369cd486d0c35f1ea` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Rose Soft | `604d3c28133c3063cc373cfdebc3e8821741ccc2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Rose Soft Border | `00b4badb695a6a42df7c10ef247f9df2b298317b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Secondary | `0412b7a586aad0206024e8f7e52ab221469acdca` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Sky | `cae17e80e544285347d0bc9412ec349187eee43f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Sky Soft | `387b6a9d4a0f5eca4f6b12a692bedd0f7a207ea4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Sky Soft Border | `a220c9183b523537ab799b8f2f23d7d7e8658ff6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Teal | `7323ffeea36e4cfb87040eda1664fe3e254e2c1e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Teal Soft | `4e3a54cf796b93fe38d4139271804b083e62e150` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Teal Soft Border | `31a480a11c700e265c89cd71360649cbb3229ecf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=White | `fe3dd9c38a75c218c8b2755a78b122d5335b6939` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Yellow | `b756887fd84995cbaa726bed8062701e1e0a596a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Yellow Soft | `40d95cbc7892a12cbe583afa72563e9e97a98d0d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Large, Corner=Rounded, Style=Yellow Soft Border | `c86ff33c0b74543cd928525609f8cf64f39da995` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Amber | `cd0332cea613b246d297c05aee1b86557ec48901` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Amber Soft | `5e838bd8fe475cba603094ac9c3ad00b647895e2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Amber Soft Border | `8474f342590c34237a4684f01e11a19288dcfbe0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Black | `41ceab656627c27ab818386372145604a27d59b0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Cyan | `a3190286ad9929681a0beed41504a1ad827c9a9f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Cyan Soft | `3b9cfec96c76f72912276971d25ce0294b5b01ce` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Cyan Soft Border | `a08916ce81b9d218360f3ecf1af38a9d5c902f0c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Emerald | `25cbaadeca7db914398b8577562d4c579718175d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Emerald Soft | `866e3ec87ec8f0b67854843db3adb1e8854263f1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Emerald Soft Border | `da55a3a77da8a80abba48fe9b2ad317abe1963bb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Green | `14de27dae35a80bde2cd0f5f8161aeeea2c470d5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Green Soft | `a1d18efe80bf7f46014a37b546e17e48c8cff50c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Green Soft Border | `d540e20a6a720674b01ba69ac3147df6c3848303` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Orange | `1cf06c942fcb6fea166a9923d21bbf4c42ab243b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Orange Soft | `1de4223c05dee724b3016751a21a1c55f3b19e53` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Orange Soft Border | `16cff9b8839eb566b15a495a6fb091894fd24496` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Pink | `a74b99ce7d7ea6a37058f009846c827daa442ee1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Pink Soft | `1ca17802c1e517d52ec27a672711a9b27ebe8356` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Pink Soft Border | `2a671eaad910fc6c24b9bd0893cfa2d75d59856f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Primary | `85329c4304c0bd28838c0ccd350895c75ae7d4df` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Primary Soft | `770f71aaadb0f83d84a9b3aacaf9b73ca566fd20` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Primary Soft Border | `a196f97ed6eb9b601c60d6e8cb051e463646c58e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Purple | `5fe8d21712d7000e93a8bd803f4536f2c24b602c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Purple Soft | `159e5d79b0941508e809014c461a842316e7ca87` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Purple Soft Border | `9659d49e0f6469a0ba7099fe949641d8e2bc7e58` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Red | `a49be89e9a68d34728fcbbaac456c8c64b7a0fb8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Red Soft | `417fec3d445177e3a75d2ad8022d4788a7e0990d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Red Soft Border | `3f9e2dc7959d3b361d14df995edc9b675b7706f7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Rose | `6c83e8e3cd345cc3b4ecb506c19c3dec757f22df` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Rose Soft | `e3da32d7bac96e6ca87c1a907f3679bfe13c6306` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Rose Soft Border | `758d4cf955e1b981972f3a3d67695b85356e7f4c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Secondary | `468b6a394877a10658af0dbff74cbd6f0a74ef88` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Sky | `86a121a08cffd83146480b6188a95ec89469b1f0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Sky Soft | `b9d3154813fc97971ee4aaed9bf98358aec30334` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Sky Soft Border | `ac4b11433113ab0adfeb06b990111e820746aba7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Teal | `e3020eb70e04c3380d860e42aa1c521deba8ca84` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Teal Soft | `8bc725852156d46a8f65e43345aa1234aae73d2d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Teal Soft Border | `4ee55a24f672da33cd3c016d6bf26fe0b4a28f79` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=White | `9f799ea4c7db4f1be9ecb0f5398edab4fc7b7fed` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Yellow | `75a3c4303b92ef69c8e190ac998ae681a1cb147d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Yellow Soft | `59e57de97af677401344829d6d22ccd78db30a52` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rectangle, Style=Yellow Soft Border | `e3d08c446cb68342cb8e74d48ad31026ec9e32ab` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Amber | `1b4362e866bda3f1b46c13839d19f7fededf9fec` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Amber Soft | `aa03404a8dc32bb9460238b86d6fbcae33f85696` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Amber Soft Border | `b4c315716734094d16334a53a05e20c0c08e79bd` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Black | `222140a110685ea1b0a0d6575396facb8fcefb4e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Cyan | `47541d282723e42ef05cbc3bf6e7535fbd987e7d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Cyan Soft | `8bf49fde3b6593eb77ac6f220cd0b890bc5265a3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Cyan Soft Border | `93a08f8e2f22a5892fb52225ce1c57d2dac200af` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Emerald | `4e7054b54ae301219693256a69f7e3fea8af5cbd` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Emerald Soft | `742e6192d22ed8ae2e2b98cb6d2e8bee536c22f4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Emerald Soft Border | `44981890d8bf3f2a92eba811c4ff62ce56f3b71c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Green | `5fad8a9e217daeace21c20b7ab6b8f609f6d076d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Green Soft | `cd1bfb5828bf59c29e1c4f56f69b83f071d2c421` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Green Soft Border | `9bfdd945acec972f5fbde688c79ecb2a0e911127` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Orange | `7f72babfd80d1bfac530087e110625325b95fc42` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Orange Soft | `a9822c29471c074aacf36de62f39987ab116bd30` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Orange Soft Border | `91a489c4942e8c4a83aee5d4189132d8c8939f81` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Pink | `4d7e223d56bbf573a5d0150c2f2cb620537f34c6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Pink Soft | `98699fbe58d9440604b2cab394ea2e487d8b318d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Pink Soft Border | `54ca4b8044483010ac4de1686a791267b25db5da` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Primary | `f0849fd7eb93e5709bab34dec88fc4de5e7ef78a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Primary Soft | `20268db041dea5bcd3a6decd00e25a75b2ecf95a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Primary Soft Border | `cd759520d9251f4aaa3190d44f4f20c5f402c461` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Purple | `0ebf1f29c8724bc18a0c668e3a60f84d690ad6b2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Purple Soft | `771f8a8d95410b3cddd43533866fe1d9c280cd4a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Purple Soft Border | `822c1b2ad472ae1ed44b805f6ac79f5999e9175f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Red | `dbd67bb27b535987a309c55c3da0e919e762e567` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Red Soft | `fd7122a8173c5126ce9a2535d25609ba7dfd4bd7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Red Soft Border | `e2e0f52a0569237640c7a4ad78507f8e30d8ba40` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Rose | `f10f8ec7a4c0421225dfaddf410d7214b60b4f15` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Rose Soft | `927dba89c6d1cdf968e0e62ccd7e271798e08e5c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Rose Soft Border | `5a6000e744cb605e5b7082126b3b087307b89462` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Secondary | `af720f7dfbff057241ce5f8e7416c87f033602b0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Sky | `3b392f76dec0745c09520dc27e629361b9dc1b61` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Sky Soft | `670773ec8445309ff3e052d6dc2eeb5b15e34681` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Sky Soft Border | `efbdc9017b1659c8dbf774e40338f748cb05f4d6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Teal | `42c71d188991bc2487fc43ff3b610c13990ced96` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Teal Soft | `4a58bba37eeb61a0810e98aa2ea20b8403a6cfb9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Teal Soft Border | `6edcb0d9360c328c7940ad5432c13b56b467dd28` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=White | `94c659e04634f5268b1ab62a67a34a156ccbe2d9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Yellow | `e519e91fea3fc39111d23f1ee9154b065015c55c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Yellow Soft | `7de5e4ab5a87f9494df5f18a5a50a9dcf939180b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Default, Size=Small, Corner=Rounded, Style=Yellow Soft Border | `23521e720df47858e869565169158e896ce5296c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Amber | `0a2f779b8f2a3cdd92b5d80fe5bbcf478c47421a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Amber Soft | `45468ad2e686582d651d78b46ba2c18ea48ed044` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Amber Soft Border | `c243b35b0fd6ba74e88d6cd04340a5100759afc4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Black | `2c32e00bf9df8442a46950bcee777e35d1825330` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Cyan | `dbb96153bac680a92f17110de7e2cd30af31b314` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Cyan Soft | `0d07df74bffa28bbcfb0a23313c596d249769eb1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Cyan Soft Border | `bffcd54bdfd26545f129573b9b29cc125d728ff5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Emerald | `752c09c5139892993556fdae53a3d0093deb88c7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Emerald Soft | `0017cecd8361ad07e9f2f06ea3684f3086a5cb2d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Emerald Soft Border | `faec0c2656a3fe63ff42650b71d7cea24ed09441` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Green | `56f53c1ff1026b293c4c0a11f57a41fe71b50f7d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Green Soft | `731216adec53e34350b27e1bcff2ea973e8ea94b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Green Soft Border | `89ebaaec012dbc1e63fbf6371974626a3cd1d177` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Orange | `3e47f53b7f632413843da29ddd01739e5eb5b0e7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Orange Soft | `0063cd0221b22b5c4d8adcba91ead6ef64406594` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Orange Soft Border | `d0c1efa8d053631b63375714ab424bdd917d47ac` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Pink | `794991c5511f3ffab4fcad5d99915258c0075747` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Pink Soft | `8a13d038b389da772bd69e0fdd92355c2f0dc701` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Pink Soft Border | `bf01c845dbdcd70383ca0a117d8ba04226282553` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Primary | `febc95dd9c593b30077f34c6834428f0474eb902` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Primary Soft | `4da3f7153be654c1ef4e031ecd20220ae0c3b353` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Primary Soft Border | `0672a1c4e9e5ed35bf1043b306a6df50a11b962b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Purple | `c2eff8a6aaa6f6a372292ff30b3a2b68970dfbe4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Purple Soft | `fc8946a6216ee788474ab08cf8f76660ead2bad8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Purple Soft Border | `d5237ddb58b4a2c882f83a6230389e75d5b89c58` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Red | `92b855090974ac87cee998deb1ff1ba08a598f12` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Red Soft | `893223a810767292d27f5c18f39a9fad9e3eccb8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Red Soft Border | `ad79a332bee8d3115e5afe4c19aa7ece204d45a2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Rose | `eb9759bdda79227bc199702fe48e5d0f7b5eb537` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Rose Soft | `38eb4ac813951163276f5278ad4374d9aad6afe2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Rose Soft Border | `45f339d6289d0e7d6174f833497322a56fa31b2a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Secondary | `6e7b948eafae6b9dd846803f4c8ef14b73678bfc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Sky | `861c33900e27106b0355bc48ffcd4e5203c8f00c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Sky Soft | `f14bdc0c6b61828b8138b15caded1e78ef0f58e6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Sky Soft Border | `04de8761321f13ec72012028bee0f1b923ea72f7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Teal | `cf5249d36292bbfb6e409d749f296e79ca5a50f7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Teal Soft | `81bd8f9a03a311c2e874f699d752c43845a99809` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Teal Soft Border | `cd70ca0f79abb80a9fe8973f4575c0f091852206` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=White | `096daedaa983004f903441745f03e5946b8585a0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Yellow | `29942d68008166042cc7c696821b2bfce8caaa89` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Yellow Soft | `dafb4c6fb4ddaad9767ef2de11baef331b4eb96b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rectangle, Style=Yellow Soft Border | `1a453b8560eba5755d07ecb4913eb8df782bab2c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Amber | `3a4d150d8a7d918cd444281e1b6eaa1b433bd2ce` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Amber Soft | `35adad77a6f097c42c470be0f2d2681cdb9685e3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Amber Soft Border | `8b316eeb1ac0567762bd79be595bd75bf5de842a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Black | `08e6efb35958830d7356a8ee590a570ba3f19754` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Cyan | `21d387039d860f8558cdf8bba9c7fc901e10bee8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Cyan Soft | `e831b799eb8ea3747e4ef24791782c54696c095d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Cyan Soft Border | `b72457bf30b7dea070ce40de61b0d270d39d581a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Emerald | `5caf2cc7c769e8c02d0dbab57fb9d7d86428d12d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Emerald Soft | `2b36cc4ee06c4c376a1cbfc6c09cc13766e1b07e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Emerald Soft Border | `ef5834c78349cba092140aa292f8c240a1b6f6ec` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Green | `2d884db2fc3afc080dc1d32f2a6132427f5b4145` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Green Soft | `b86a37a4333a15fb4a0e9c9f7de2979bb2190f4f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Green Soft Border | `33393701f25206e6660398f4196ee57ad4ba1673` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Orange | `7663f089fdf1bc9e4a38119716ccef604fb4cb8f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Orange Soft | `192b2e8361046648a2b52d3e7ec7e25996092634` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Orange Soft Border | `511db096cf06f0cf063ddac8b5872d494d022007` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Pink | `6fb2c27c9a9da67b86c0fe20e4988d3e1692ea02` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Pink Soft | `781e7cdfe422a39f78d8664f0812136e6ad95c6c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Pink Soft Border | `f3eada65a5b37782676d5077517c011b2cd82f0e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Primary | `2873827712724758eb0e973dec73ffe6908fede5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Primary Soft | `1f185dbf7a70ccc70b2b644b6dc1356faaaae425` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Primary Soft Border | `1e2b771c1709b0f47131fc186a10faf18d02ac28` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Purple | `703833038bc8f69e4d64c0a4255765e114ed2726` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Purple Soft | `921408590b919ce9b153e907ffa8e89bc633a641` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Purple Soft Border | `4634b9369045115f26e88ae97329747281fac671` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Red | `2a9f2f8c7350835f95676d7d38959fbf67b5e866` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Red Soft | `233f38e6a9dfc2d4961509abdc8a0ee1d182a906` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Red Soft Border | `5861603e4ae666050fad5483ddd34e45ec8baeba` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Rose | `2ad812f429520fc2353c4a332adc95c8ef6bb783` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Rose Soft | `f9d52cf7a838b4e2153a750460fa91f5c650d7c5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Rose Soft Border | `82011b48391d06564d6ef2a6d92720aac8d4c6a9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Secondary | `087b7a209b4eb4cd31147d8b06e54080f94a4f7d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Sky | `3707dcb80b1042ef71155d9ac8357f03e7becb59` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Sky Soft | `4eb94708354b6fc165b4206b1d7b42c80aa79a93` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Sky Soft Border | `b9027a26bca5fcc03d9716fd4becefa0198221c3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Teal | `e227d7350b70e202ea9da67750bbaf0b0acb95de` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Teal Soft | `e9653a68820c3f4a9f02887123ee5621585f3c52` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Teal Soft Border | `250189d9fad8620f4d220d6dddb235e4892a9063` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=White | `507c0211a046984368bd72789836035b8bfa90e5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Yellow | `c1d7801f41ac8e3a03ad34f39761927bc74524df` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Yellow Soft | `465dac08f775632fe068be0b175527935c852eb7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Default, Corner=Rounded, Style=Yellow Soft Border | `0cd8fcd523f0d6ebe9bf9a5590043182b23b4bbe` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Amber | `e0ec8627115f8dda1ed5d8763fb7c2323dbba9b0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Amber Soft | `6b9670d84175830fa53e6b8a33018b6fc40b614b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Amber Soft Border | `89d24346d621524670a4808f4ba4cfff26bd306e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Black | `73a7910c7894a695e0faed5410f54a54062c80f9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Cyan | `93fed672bc0d8c0ad39053f05956e3bd3c55dec9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Cyan Soft | `d35f4cdfe10f9b506e2bae5a006de6ec7ab289a6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Cyan Soft Border | `786b4c0614bccc30586e161074eac98b726e25c2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Emerald | `661682c460459b38641d5e08034a75198f86228e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Emerald Soft | `a4f394415152ba92c254bb767528c392f8f5147f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Emerald Soft Border | `27da70f9425c65b18a7f92b96c40d8ae53d07d1a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Green | `b46bb0c0e107d4ec623b36df23b4f92c452d314b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Green Soft | `74e906ba4691e419eb1ea92f93803a21bdbe250f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Green Soft Border | `a01686331b2e81cf92a424c01cee19a1c4b38a41` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Orange | `34175c35147df46ee1924987c4a2d66d4e75e73d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Orange Soft | `e9087a0e00522b871970deb3dd579e803d22903a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Orange Soft Border | `0703945bfb6ea5b3e4d360ad3fb22e0894070218` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Pink | `2021186ba3bce66d78c6de8b7349d290383b1ccc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Pink Soft | `9585a3f6da99bb54f2d50a9a9df7bd7ce15284b5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Pink Soft Border | `67d13f0cf5f4f20d8c8a4ae7c7b3a6ec3efc0eda` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Primary | `59968ff5fe2744580cc42b99f88248201c8f0ca6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Primary Soft | `ba56835fb88ffd17d61160379783f1359005d410` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Primary Soft Border | `506c6ed590bb55e4a40e9f33ebbd98995646767c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Purple | `a729c80298c54ae719af6f5c550665ad4af49d23` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Purple Soft | `bbf65934fe2a875cc7aad1a2a10e6a61b4b7a400` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Purple Soft Border | `4f1cfc6aaaf92dd0b7271f25917cfb6135ebf90f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Red | `4bb38df2ac6b21af953e9638dcbb79d6808d9379` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Red Soft | `72f7c6eaad3b6e295ba8d658bd6cd1662e7c0a4a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Red Soft Border | `1c21fd621f0f6c44cf7aeb2310d312e77b17c063` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Rose | `8926849f3af422187b76c0f2cb45f4344d77a916` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Rose Soft | `7b3955ddc6439632c2d281e927dd81743c593875` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Rose Soft Border | `1d13e761338cb4521c7b0ad23009393432e45b95` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Secondary | `de36630b1bfcd2b0b396e27dd2c37f78c8d03c09` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Sky | `c5916bb54f6528a81081908a4273a1a405e67ebc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Sky Soft | `ca186c30682dba68a0dda4ffb8a20ca3d0d7a356` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Sky Soft Border | `9b76aac6b7f9141f73232261e607797354fa436f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Teal | `3a482b9054c5b86184019ed284c866fcb7ca4d0d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Teal Soft | `108a07fd8d3ddb64d082815c209716d0f7ef1152` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Teal Soft Border | `3187f59119079332527ab3d14e37b8073d390215` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=White | `e4d9771489bdc72e7188e2378be6d7a4ccc88b92` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Yellow | `29b050a0145613e91d8859240b9b8074e229b32e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Yellow Soft | `9b95abd235d2b19a4bf0dc7955b50b29c9b80b7f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rectangle, Style=Yellow Soft Border | `9ee7524d8d7fd082244f3ec70a80cd2dac9dde2e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Amber | `6dac4aba5905a733efbc4be0a044265396c037ae` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Amber Soft | `120d0b8a3fd559b6ad1ce53685355ccbf821cea6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Amber Soft Border | `e5c6c73f49d653374088b09ba89e4f9960bede45` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Black | `62f0d780c3b50c21de110e996c60d3fd2ebc30d8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Cyan | `9f9c3ef0dc4df4c0d93be35c0b85c6add1b75457` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Cyan Soft | `c80a8e41d2fb28ad216af08b3d7e2e335f83752f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Cyan Soft Border | `a2415a0aebfcb09d688977112911050ea56432e3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Emerald | `a8fe3dd582b4b3fb8da648964cdba12bd8d6cb52` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Emerald Soft | `5b136834452b5a8f5a901a2a0759a859bf5f915a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Emerald Soft Border | `37517c29440fac36013c93eb7350134de980adec` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Green | `89454714511c8fb5b72e4b80795da5e72ae23226` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Green Soft | `2f7366827272196308cc53ab137a98580a978e3d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Green Soft Border | `9c983520800b0c7b236daa66420722f8fd98c265` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Orange | `44e07701494c2c4c1decfcde43c3549e477fa58f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Orange Soft | `a0b32701d392baf38a0e5d6591b34adf8764ff5c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Orange Soft Border | `55282ad43f145829454d203c63e8ca3e3372445e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Pink | `20a594b75771f52a49dfafa53dd3b002b1f83c45` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Pink Soft | `e56077c9979a9ba424d63dd7ac3c5dc90034bb5a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Pink Soft Border | `2e1b2402077b74c4ba7b0a065421e075ba7532dd` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Primary | `2a6112125a185fc856c8e184c34dcbda1148bdd8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Primary Soft | `ddb97dfcf1dae9aad0838ebbd1cfec00473f8d35` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Primary Soft Border | `13352f09cca9c8a617f92bd1185bab4c26479191` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Purple | `4ce6128bbc5971ee420d9f1a609f27f924b59ac2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Purple Soft | `a28e936c8b8702b01810e348e50468a93af82c58` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Purple Soft Border | `8dc7d7d3f5f555a7f07af8e584ed9117de925a5e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Red | `154c5292924ff4142743342359bfb0ba92d1b418` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Red Soft | `e56abc42451d787fe76f680057e49bca06ee0195` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Red Soft Border | `6796aab5b48743182e0cbf75859bdea9516a7922` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Rose | `d3a6912efc840c32567fe85edeab72769a78b66f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Rose Soft | `483909c0f0859ac3be292017ade5b2d6fd7f5f27` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Rose Soft Border | `ca995dbdca03a464c05e091224cb44bf510cdef7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Secondary | `93323bb89fe270fdd078303f81b0fb90a6689458` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Sky | `3acde1a3e8049e671776e5e3b0efb65bd5c847fd` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Sky Soft | `c857928f5e71f4613506e46b2ef3358bf693aa6c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Sky Soft Border | `84ee957881efb7c01f7aae3b6616cdfe4f1d1bf9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Teal | `a993ee3b209ca1e3aa340bdb4647d7eaa55db82e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Teal Soft | `46edecdd958e4034330a59d834a54189840bca8e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Teal Soft Border | `e1070a008e50fc48a52067fb0bc15e2758571238` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=White | `668ca667913cc3adefa7d9ecc5748080062e5205` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Yellow | `a0b24ec29c662e043196989b47810eaeb1ef24e5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Yellow Soft | `38ad89dc430bd8e7da5b49fb5becbdf40ecb240f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Large, Corner=Rounded, Style=Yellow Soft Border | `1db14df4fd8bfc72603d443919aed623245b8f8b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Amber | `b0cc509a6f4ed83403af1feaf4a5aba909782ec0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Amber Soft | `682be0f51ea92c0d97081fee2d1a411b2a6285b4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Amber Soft Border | `2fc272a4aae8205827716eef4d9732572cbe9524` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Black | `69ea40c868f5e7153a2b84b3c63b2412bab1c67f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Cyan | `3c96e55631746661012e6966e581ac854022a824` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Cyan Soft | `15e4efa3680a80e03f9cd4f05feca01e67e878d6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Cyan Soft Border | `ac98ff03aae8bafc75cbbff52620c413544b506f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Emerald | `65dd417778a1d9eb372fc09085793eb653cf462d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Emerald Soft | `968950fd4f282188cc2b8d811b8170de7d60c055` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Emerald Soft Border | `60fa6a5aa95cd787c29f5bec5f84f5c368da5ecf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Green | `1d71ef8a133c7ce5a7bd19aa835332c2451ebe84` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Green Soft | `638e431f912a4d60c69dda0fd9d1f01474b85261` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Green Soft Border | `4b1610b37a24c9cf419f511cc0dae4a9179f19b6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Orange | `6a656c307226ad8676f9e920dc59727ba9762df8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Orange Soft | `962f81efdc4507d2314244032593d20970b62f35` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Orange Soft Border | `19f0a2d6ee47b1b4fedf5b2a987adf42b7065064` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Pink | `362f45dad7baf7d6ea6751d2adecf06cf486d5b4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Pink Soft | `052cc0f67a3cf4c173870c44f353beb65e5f535f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Pink Soft Border | `58d40c2cb3f0fec6f8ff0b578ba860e6c9ffdfc4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Primary | `ce4c0f6afe8c18be51e2bdfd0ee299f87589cb27` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Primary Soft | `d02079d319a0aaa37e4fba6d077a388e3e4187b5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Primary Soft Border | `3b572c572767c068ef09ca7d051ca75bf09a9112` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Purple | `cdca676186464af103f747cebfbe085523e87d17` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Purple Soft | `af6c162f6fb8e4c61d588dfb8940306dac58cf08` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Purple Soft Border | `45e64d37e7b27e075c205d1f3656bc717d558101` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Red | `b5c0f7c311cf0e837911d55fb57ec8b21a112b4a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Red Soft | `eb2feca62a5029869585775c0ed59dba64ea6e0a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Red Soft Border | `f47a0dd43152d4228a96b05cb732407d2a138376` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Rose | `5c3fe61b7c61e4bdf683150f9b5edbf8f1cb5496` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Rose Soft | `e1b66999b9df8845a5ceb4dc637a82a6119f59bb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Rose Soft Border | `de3464d1eac7891ea38797a00868cc5f0e747837` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Secondary | `5b00e80c3ef81af3b3569e4e264db9fe4b6e4c84` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Sky | `88cc9098f012b3eb641025cee7ca32800e3d65fb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Sky Soft | `49a91882456f74b1c1356ec213708787b588d9b2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Sky Soft Border | `b79fffe85c850196a7883afa7278c73dd39a25de` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Teal | `c29f1811c0e6ba3384ff3278f55b0ad0e5237637` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Teal Soft | `e5d031f979c6e4746ef04196bb4a838b2708f2be` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Teal Soft Border | `27ba52d7dac3f2a6b0e2bf5188a92153d31bab39` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=White | `ec2d1bedc077f3ef63c69c33e4b084feda8faebe` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Yellow | `6b9174bd2f6200a029a57d565fbe23eeafaa2dc8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Yellow Soft | `a2769dc761ea9cdad7fbf57e686d0f50337a5b18` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rectangle, Style=Yellow Soft Border | `836b64fa70dbd5983ef560109c16ab43c5448e81` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Amber | `9be0b33baeaa292b3c4aad1e01b8caef71863fc6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Amber Soft | `ab10d63d743c7e2d54701089af65e16b14a68fc1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Amber Soft Border | `67232cbcb4f1e56111a4b115a87295d7e3144a43` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Black | `cbd73de240bf2640b2359f8ffb53b886da448b0b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Cyan | `a5b358b544067c9c4bb3d0b372c58033b484a667` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Cyan Soft | `3e207ad882dd896d63434e03805a99e3c8718495` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Cyan Soft Border | `17e75fec1124f52360438ecddcc947f5a3b832a6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Emerald | `9c8561fb176228751c2a0225f33146900f551674` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Emerald Soft | `b83db37b8c34e86b5e331ca5e355118541ac263a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Emerald Soft Border | `defb35997f8c0bb2cc22fd1d084ccbe4f622f58b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Green | `e71255ace0ad1d1e7befccf597af425c0c6544b4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Green Soft | `928fc96e7509c091ddda5bf2f97ce65a09c854f8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Green Soft Border | `d89a2ae3adf1594df8915c0d0f0ccf95e61e3edf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Orange | `c132809734420d878cac868eea000584b25397ae` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Orange Soft | `5455e5b1f73f7b8c1a7d576544b8962624fb01aa` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Orange Soft Border | `437a879e89c6f60d1a61056db85cbb42a0a4edee` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Pink | `ec57e94a1467c80ede781037d7eef4c15825d787` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Pink Soft | `f2df2e6e0e1232890bc1e767f4503dd0e03540f5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Pink Soft Border | `188a61556ba5e833f5b23fc13d957eb4da817f49` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Primary | `f4faf7004ce8ef8773106b196297d986b52370bb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Primary Soft | `311bc342cb5a7775cc42e5234f9fc7c3a1b8c62a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Primary Soft Border | `1f62f8297632afdde582b10603714ac30c3bad8b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Purple | `c622cf8930d069273c66d333e0e871d27f6bdefa` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Purple Soft | `9a1de4cb20c136d9655dbe1815fc754bac8ba84f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Purple Soft Border | `6ff8069894614136c96cc94a87a8cbdb9c971922` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Red | `41262b4317ada8856b27e81317ccdf001afbe25f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Red Soft | `9a02258357df808c51c1997ebbc3c28e7ea681bc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Red Soft Border | `b036a6537c6f864755c05c909044999779faa6be` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Rose | `41d884c952246aaebabc7f112320e9815601eb37` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Rose Soft | `bc0e1c39ca6b8a075cd27c6940ec34d86866e9ad` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Rose Soft Border | `450030b66db07273fa87d7a99ffb7cbe7738b233` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Secondary | `fd13a356cb09bcae8599da3c6fff70e1af209537` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Sky | `437c1441013a0099cb7cf2f1f074b15ab6044269` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Sky Soft | `f2e7d8ad0af6f5cbd76c7cde4f7f3a8011802e37` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Sky Soft Border | `99ce7ac3a650d43215ce91592993867ccacc49ff` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Teal | `fdf4cf1c4627638f423655e0dcf2484b6ea32e83` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Teal Soft | `5cad2999b157f280a8154803890edce5eebc89d5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Teal Soft Border | `48762bee75b22ea3fe5469857532eb8d491b666c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=White | `ab0c7817439b39642ac9921cf296ef9c50da6523` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Yellow | `825701e722d4cbb869e8ef27816a7d0c526c53de` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Yellow Soft | `b86bde420f7bd0cc4b645b8772a242ba7046a842` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Icon, Size=Small, Corner=Rounded, Style=Yellow Soft Border | `de142d45a9c12786c3fc001236ed2a6a310cbc70` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Amber | `f3a705b632b96f099c1191fd55d72445cc91fb6e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Amber Soft | `aa8371acf8654452531722e0a14b0642185dd61a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Amber Soft Border | `be583aba4849339a3e30f565dd5c5d27b915c661` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Black | `716fd61a32d63755951784e3f59e8d3c40b0af7c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Cyan | `92b5c454d334ffb809aea1ede39a06337803b22b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Cyan Soft | `755855f6b6400fb5047d60263e14abf04d8646be` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Cyan Soft Border | `382b6a70e92ab64604d276655e9131bc97f80340` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Emerald | `b9733757880fdbf147df69a48389851e0e3a10ba` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Emerald Soft | `1596afeae7b120198d45cb8fa923f22bdf3766f0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Emerald Soft Border | `71a468894034538683ad8f172197f4b31ffea577` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Green | `be3c5f65e9b9682140871e1592698a2ee8916eae` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Green Soft | `1549f440ece581508b27d110daae4726c9d1b4c7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Green Soft Border | `6382c98161ffa88d38fd8eba465b4de816aeda93` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Orange | `aecb4bab7481095f89d6eef11a1a0e5a0e756072` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Orange Soft | `44604ebe97b381221638a9249589e3bf195ce12b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Orange Soft Border | `765da8ae7e7fe840bb66c85f1b438ef1a8181d65` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Pink | `21741e2b4c5951f27cbb9ca13d37ee53d12a902d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Pink Soft | `128b08e6eedd30c369fb299f5f3ea94e42f4f3b6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Pink Soft Border | `c48fcae97fe81414b513a8a1523751cfdf8b7ae6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Primary | `627cb782d91872fbeba0715201f2f44aa76b85f7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Primary Soft | `2542b2896fce0594671d73a5e64fff5dab27295c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Primary Soft Border | `d0d1663976118e8678d3d79471309bda06cc1690` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Purple | `22ed21893652c7ddbaa15c09a2bae8a38d1736ff` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Purple Soft | `bfe452f30738ff4d68f827dc88a2ac31360ee5da` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Purple Soft Border | `8be9f77898b980145b8511035f4a1d39f4d942be` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Red | `d7a9c65e3095fe1aa82f0cc189cef0d2eb715932` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Red Soft | `8132c949936db58c4de80c69a98583100b121d9c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Red Soft Border | `2849b43b5f8df2afd64587a5b8a9383a64023369` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Rose | `010c642cba18cc953b13b18a4686c2d864d4bcf5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Rose Soft | `4109987e05e558eeb7453000f3a4a4041608da1a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Rose Soft Border | `5c400c5216d98e2ff0790afd9331b378645465f1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Secondary | `630adcb27876ddb3875fc303d1d77abd8196f0c0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Sky | `17ac13db2d8f96cacb44bc94ac8cf5620fef8c48` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Sky Soft | `07c577433e34b9b612d1cb6c8e8b30ae05fd9a81` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Sky Soft Border | `90486f53ec5cd1095f48b9e8b6c753426e35b0ce` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Teal | `3b651c534a81667554d8515947ebfca43883986b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Teal Soft | `867208065b7cde03e95782e12ffc6085474a42f1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Teal Soft Border | `88c8a87531f83cd3f3a3d9df1c4240ae6fb2aa96` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=White | `35219d8d6bac0f5c9ddd7841c0f9df5a359239f8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Yellow | `a2db80ed10d5c5cbe9beb52b6d914f8bcca20dfc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Yellow Soft | `3f25e01aa9cc8d434dca82ce1dc385f49552b19a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rectangle, Style=Yellow Soft Border | `21d6dc99648fca0e74498aa0277163fae0c0eb2c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Amber | `ec102f524e2dc2645e5a1f74586f93d7ec3b999f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Amber Soft | `7f7df4e8238e9ef40c85c5f23d2bf9c525fbbabc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Amber Soft Border | `3d877a2ae30ceb21454e315917472e17be496cab` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Black | `2bb7bf5cda828114f57d088243d82ec5b21f9133` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Cyan | `b8ffa8d6cba837cbeefb1304d4b5cd646391879f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Cyan Soft | `ad7dc5126d2a5daf64e5f88dcae474721b9fd757` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Cyan Soft Border | `de537191b44aa4d440187f357e51d0d5b7344819` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Emerald | `589420d3a6783c18e377e8252291d4284802a86c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Emerald Soft | `ff0430821f15e32b9d30e329fc9f42f5a6b35417` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Emerald Soft Border | `49ce6531d329a390cf69ce19164137d38c11d201` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Green | `e31bb5188b2e3882b3773d4130abbe9f8efb4bae` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Green Soft | `e8292b4858470bd58518c6201e4e9d54d6aa6e9b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Green Soft Border | `f90033b547e76f9f85252bbd800bea5527575410` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Orange | `92472a88fb0248dd6a94629f9b50d7aa408e1c04` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Orange Soft | `0cd2401ef43402f8f28f6ff6eb9a5fa1381c12b6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Orange Soft Border | `6dc859f38cdb69af5eea1bf1a852589a860e8f3d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Pink | `1745e9c091e457eb4e9b0742b737c62d6782636e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Pink Soft | `b9e95cc947ca690d42127fd93f3e3f9f2db5b422` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Pink Soft Border | `8e1880b51d502a76f86cf133932cfdf86954ef26` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Primary | `d72f5011b62bcc1a36775fa9c859960c048c9d69` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Primary Soft | `a5b2b7039ca81b997bf3f30815a0475af03bb57c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Primary Soft Border | `e60b951bc9825832ad7f50af1946c10bc3e247e2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Purple | `f71ef7b9853fb2bea289e591f2b3acae9a2ab50e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Purple Soft | `6120c50a2aa34a04732a8bc6b564cef3d62a3ca5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Purple Soft Border | `a3a06a9c0581218d290b3343599380748e7bb5fb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Red | `7d35bc723c419f1387c59784f11cf94fd4aca62e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Red Soft | `68d5eca02ce25cbcd9b21dbdb58848f61c5c66b0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Red Soft Border | `5b1f2cbf7d1c8fc41a7d1bebccbb4f9cd4198eb6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Rose | `082595e43c943ec319511b3c011bf223bb428081` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Rose Soft | `de21d44383f6fddeec42942bd8cf5bdd46304a8c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Rose Soft Border | `343ef1d6e21fd0eff574e66050cc661ed4def184` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Secondary | `e4f62218d91686540b339244e0c79daca75689ff` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Sky | `dc60a879f05374790fa09dc746a2a020740f378c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Sky Soft | `b36297cfc9da6c22d93718af0d0005142e8277e1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Sky Soft Border | `1b62b02402973473b30c016d0d32f239b87bbbd9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Teal | `75aa2b2c2259c677ef5e08d7960fcc892b2858ec` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Teal Soft | `0fce49804fac9a5af47ab3b66f3aefe5a6d2591e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Teal Soft Border | `2d3116e17767b93416a2cb4c5e0143a3ae4d944f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=White | `5c7d833db5b9c56f5db439286a398e8f15b0d7ae` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Yellow | `7fb512595902da30623289f4be9bd8ea87ee05cf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Yellow Soft | `38922a05a997b67967abcade43a642dfe6c78f12` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Default, Corner=Rounded, Style=Yellow Soft Border | `4a564c5e5ae3069c40dc0d30d8211f68746e3351` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Amber | `a2b91d960e39a14e412fe007bfbceb8dcba4b5ad` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Amber Soft | `2c0be7ae52218d7c0b7b5f509c35baa3baabc6ea` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Amber Soft Border | `3740727a61a4eb65ed4d936209639c8c8b7d8c61` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Black | `e1d51a617905aebd7c3647d2cb2fbe701292ee57` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Cyan | `433d4eb6609378803970141b1bbf6f809376882f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Cyan Soft | `2ef7ad12689984c9a14b76e7c0d92539b44a5731` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Cyan Soft Border | `baf2eca48bfa7a3874c7e3d02f35bd0ed398e021` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Emerald | `48e43a20214ddd31b6f0f2dfd318d70167073c82` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Emerald Soft | `cec9448111998b64cb100c5b950459682fe8d6bc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Emerald Soft Border | `1b8d490ecf3b3bbdc1919fd833a530c0256a147b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Green | `df1e3200fc489fd7bfe6d853314db4de6e63c151` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Green Soft | `a1a76b5f9b6a3628976513c00bf8e251192516be` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Green Soft Border | `4c845b4875059273a46675659ec71a208c195c39` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Orange | `796697e2388313e4012e134ea5a319f408962768` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Orange Soft | `661beda66a1006871b3958dca6cd8af66c90938c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Orange Soft Border | `50d4d1ced7ca62c24365d6cbe78c79b133ab0a6b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Pink | `124f546944744063249976343b8b91dd93d91aee` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Pink Soft | `6ada17f5c2a2e4f6e56d63db55b691ca756378bf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Pink Soft Border | `50879c7b455071deaf17f76241a8c5dbd3ed2198` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Primary | `fd970cc31a4a81cccb59fda848bc2388aa698371` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Primary Soft | `b4f1d3fb82fb8304764753a89172977ea6d77cc9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Primary Soft Border | `339738f9b208d4023413839aa173bbbc12908d6e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Purple | `591272b4c20243f948ed1bdfe196c5fbc722052f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Purple Soft | `2973a595c125ef145c94ae962c1d1dbc9fa27441` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Purple Soft Border | `f2a57951efff1e873f1914ed396ca0fef591f185` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Red | `e5ff2ca55410e1b9a25eed4a8acc99e8faa0ce78` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Red Soft | `9daa836eaa0090bda613d0661952cb0e928ca4d2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Red Soft Border | `31af859a6bab7ba6783df507dddde1ad3be1cba1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Rose | `270c7fd2101d44f45cf1669d94d6c92bc7d7cf5c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Rose Soft | `4a7f72d894c2e66198ba306cc5b7baa4bb7d0159` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Rose Soft Border | `4ca798fe05b59ddc368bd8d506d127bdc7d6e8b8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Secondary | `399abcb24f9f642840658972a351c00e882dfcac` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Sky | `ff818829dbb38899a1857e1e68f4d7020343fd2a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Sky Soft | `c2720bbf5a53a9c066c74adbfa53212063693339` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Sky Soft Border | `2b6a797bd5ebf4261939b926a0507de725fa5505` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Teal | `b2ededc3aecc230d26ad5d7ce6ecdfda53fdafee` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Teal Soft | `cb5cd2b63ce427ae595ffe4b9aba22a2fe266904` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Teal Soft Border | `53b5fe19ab62872257d84506d685699abb282336` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=White | `5984fa910c5a1d016ae89abf2a0fb8445113ae1b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Yellow | `8fb893139c3e1abc40db0f37a61133638cc85923` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Yellow Soft | `dfa92dcdecfc8fb8bb0e10758405b57e8e98316a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rectangle, Style=Yellow Soft Border | `9aadc22045d6f88e08cb49a1595b1e4291899224` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Amber | `a60ad4622842b42cd345b437ee46703c4aaf0641` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Amber Soft | `4dc9724d60f9161c912a90e55927fb9cb2df89e1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Amber Soft Border | `964d0af83a92c8dfd16fd4e8a9bf87eced943208` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Black | `db03112936776376d227bb4c2054f5497f048c9d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Cyan | `756e18f95221962bfd17fd094ec72c83d34cccf0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Cyan Soft | `11b11cb586822538eb6b3308e4be984ecfe75431` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Cyan Soft Border | `08d9ad17ebb479855b66434eb20c69d92d23d28a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Emerald | `df993b80b041b8a0f1273062432779c9d769d918` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Emerald Soft | `66d614588989a833f7bbf3ad9eeb2ee6756a010a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Emerald Soft Border | `410388429b198677e414c8ebb79b9d682285c25d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Green | `6977cf0c8d57ab6f843cc8a0942c6d2c40f5adac` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Green Soft | `9f35b9054528677b958a3b101a783c751f5626dc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Green Soft Border | `6a4214a174c6445878391766e0a35b323f0bffad` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Orange | `f6f22a773fe084fefae2cc519b614a844952bcdf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Orange Soft | `3f84f11ec754a56c6dde8f143e76e3356e711450` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Orange Soft Border | `431738d0af9506285ab9c8972ec67335f283fd63` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Pink | `6c49f5b075c0e0733532342e4cd4cfc445a544e0` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Pink Soft | `27371623e29a8e0c480e04dcaae05321e14497b7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Pink Soft Border | `94beee7b4c372badba1e7012038a2a3b7c3332f4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Primary | `c9eeec77a4fded359b58c906e768f4f00c3a86e5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Primary Soft | `2e13d1fe5e632f8baa45acc8f055e955548de55c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Primary Soft Border | `87c5678ffd9d9fef5e5c1723c7effd09af08980d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Purple | `1380d676dbfd2be7f0eb68d8b71558db45e84c90` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Purple Soft | `e1b7fece94957c7b1c3ec1c5979bb6fdae122ba8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Purple Soft Border | `e847a7ccff7ef26992cc98d07fe69cfb23795657` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Red | `09447dcffc834d3cec673495e7ba723abf5a7c6a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Red Soft | `38954ef29da03a5c9cde16d00f9b4d2630251471` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Red Soft Border | `149a3272077a4d25db21becde22b861ee16a27a9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Rose | `841d778c8ab514390ca4533030ffd831307ff37b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Rose Soft | `739b98e7d8f827009b98cecd990c42977a88cd10` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Rose Soft Border | `9cefe49157776da74958a6c1eb86f7571b71c505` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Secondary | `e334be9f22adfe70dbfee0b3db2ec2dbb412ed60` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Sky | `6b49f8bc491781dc5e9362c4fb46397b2a848595` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Sky Soft | `3e317a1c8eb30b23947a138879324a02d1b114c2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Sky Soft Border | `d1dcb5b47af7d7fa31eb56ff3f0097cac75d2438` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Teal | `f41661486dcefba2778ae79011f022193adf60e5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Teal Soft | `a5bad9b4e21b5bfb777d3e0907e3b92903cbd338` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Teal Soft Border | `cc8fe8eaa04f956ae78c49de6d7470ee3b14e29f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=White | `a3bd55964832c25c025b730fa43b43e53afc0cbe` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Yellow | `cc364a51f39af65368954c5777ab08edf9c5ac64` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Yellow Soft | `1c8e0405d470e212a9b26179093f67e58dd5496d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Large, Corner=Rounded, Style=Yellow Soft Border | `62d5f33e9ebffc0a14e8dd49d371d9c5b5b8bafb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Amber | `1c2a67ca745a00292a351e8239cd1577e130e2e8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Amber Soft | `36ec7caca13db3f9e040611e045045a792254762` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Amber Soft Border | `a3a40e26cae0e0e668860d3edeb07267f2c3c745` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Black | `b70949c42897c479271c41d10381a30924b5cbb7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Cyan | `6344c89be2b24d943b6fd492d193749ffd46af9c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Cyan Soft | `350707b8f9fe01897ba2f4fb2960aeb8971ff5b8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Cyan Soft Border | `f07edeea08b568b6c576f6fc0834063e06e2084b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Emerald | `7d8744b4d42119e2b7d649be5f6aa572a5370695` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Emerald Soft | `6e3d473e717365b3f36b6f31654e372006e4174a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Emerald Soft Border | `fbea84b389fc0bf631764568d134bfa69d31e5e1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Green | `60c00ce5382398c2410b7e6e3cfc08301bc27cd1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Green Soft | `ca8910a25760bb44116d9408d0a61bb94540d664` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Green Soft Border | `e9552f0423f0653fb09b666d646004bd0e4c5228` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Orange | `a5a6cdd175188a13a8e3f2ef6ddefb3d23389d77` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Orange Soft | `e6bfb97214a91f4fc70fa5db20519cb582f5374c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Orange Soft Border | `868c991699ac46877b0c7ec4ac790c3aec2b992d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Pink | `a878c8a468d31d37be1acde35bcd0f6307420299` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Pink Soft | `33cd22bc4a42993c8d8bb58fe63dc5e2d256ff02` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Pink Soft Border | `19474163ba9449e446469582bfe13bc13b8ce5fd` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Primary | `23d7519945d85d1751679373848e820dc2834532` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Primary Soft | `6b2dd042a219c1c3bd5302d9cfe525f715e74526` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Primary Soft Border | `c749e389c542f3230e53c89805aae5662e46b832` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Purple | `b917e9f9a3fe695e5332b77067e8b31684d4dd54` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Purple Soft | `bc4d4dcaea5015586182122c04e83490fda6d44b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Purple Soft Border | `b5476c0a36d9bc694f6bee219abe9106c7f1a7e5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Red | `1f1945dbe4c8c0c27770c2c3ff839cd0fcdd5a4b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Red Soft | `b8b81095f7acea8fb54cc58a6c4f4e836a75dc0c` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Red Soft Border | `8863f96753b43fde565ef5d7719325937f661da7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Rose | `62fb3199d3b0518bce9d435fb9cfea8d0e86d461` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Rose Soft | `def22a4d1324f3388808ed6494003bce4f198e2d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Rose Soft Border | `cfc3168c87cf9e2531e1696c3d2f2a19387652cb` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Secondary | `37738fbf6a644cd63ccbf072c513a0f20294eb8a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Sky | `bd1ae5c4366a808deba79e9d954d3ec70c5daad2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Sky Soft | `52840cce1dbcdcab7e71bbdd458345aa3cedf5d9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Sky Soft Border | `9092be2fbae1b0d98ff8fae0f4eb99c3a3ff26cc` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Teal | `eb26ecd3a59192d53f292da70fce005dd6ffb001` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Teal Soft | `cfc329a3d14032e79f5f1a69574939d75092faaf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Teal Soft Border | `4f1f44aaff9d605b8054ab477f14d2a1699d11e2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=White | `3dd19eb735c7cefc04887f943cf54f9c906b2a22` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Yellow | `749733a62e90b6f692ac8a9796ac5f205143aa0d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Yellow Soft | `8f044700aa04be3b8ac5190891946b0a2d3823b1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rectangle, Style=Yellow Soft Border | `cf179ec485bf149efeb3bee8d96b0b12a51e8751` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Amber | `571200fe69405b6edc7ab373fb8d6628b3de1b82` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Amber Soft | `9740a66cede966dd491037a673ec0fccea460fd5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Amber Soft Border | `bc352a2e170956367f4ee17a2d9ec7ce25fe1ddf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Black | `ef608b0f9ceeb47ee5799a1ce2f44d71212586d9` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Cyan | `9ca7ca541c6d6e70e77a3122ccba1572d785788b` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Cyan Soft | `b9b663a0a3dd9d96ac8a1925aeed07f714db7893` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Cyan Soft Border | `6e2c16b638361c39fcdde0f0a9bbc0cfaf59689f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Emerald | `b4552cd7935f67d9598a880e4680250f12201b80` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Emerald Soft | `81a327ba57e1b45fc4f6f424953edb0f255bf9f1` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Emerald Soft Border | `412d36bc28cbc2c95ec78bbbcb7719acff7d939d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Green | `4a923d5553e5ebee568309b78cb9c99c66dc1156` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Green Soft | `06928e5f3fbaf2aeda5a26792f73266bad170540` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Green Soft Border | `c054a401f168b09c3156efe34a0d4396c80a2056` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Orange | `361c1b4c26dcf10c485ca53250ceb7aaa3f22ae7` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Orange Soft | `13e67412b192b9b7c3de2771b06eba7090f2071e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Orange Soft Border | `5c36ad3962977905e16b928cd222285f1361cb72` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Pink | `4c14e8f07bf09b91824a0f29007ccc58824da0cf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Pink Soft | `86c5cd5b321f6ee7b78d2af2908ace582a18aed8` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Pink Soft Border | `f596bd82bbf07e5f314753a2f747b20cb025edf4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Primary | `6a024048def9d53834c24fc1fb07b339145cee5d` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Primary Soft | `f2d9270009e0a5f0515b872c1cd6ea061409ad96` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Primary Soft Border | `70b9c66eace2368a480d0a5763662a1763bb33bf` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Purple | `52c75a3b33c61f038099a694e139f2a1cf3e9fc6` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Purple Soft | `8f0ecadf20024834b49869cb40b710779da43653` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Purple Soft Border | `034441e37826416c5d651e0c75094f2d009e5ea5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Red | `021d31acd52f15dcb98c1fcbd894c23aa6205a7e` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Red Soft | `74d2b393b58b48afc5a088b618e35b9edbc2e1dd` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Red Soft Border | `15af7b09754032d8271275b9b92fdd1bb400b9e5` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Rose | `95d07758b915ba9b170d91134d159c3b0013ae64` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Rose Soft | `888d60f8d606e7ad6169da1f746847fd99f916e4` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Rose Soft Border | `f413efdbf6093f1608d7372efc6737a280a0d432` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Secondary | `5e35acdbc026c6f5be68574e049ee8c2f0b40bd2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Sky | `73bc0f753aab8810a29284f5ac836b869edc8e0a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Sky Soft | `ec41572a47afb2313cbf730f503d0a469ef4cbf2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Sky Soft Border | `e58eb15fea49b9844b9f37590aa0799ade085877` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Teal | `3a2ef03e5f5694445641efdbb1affa81d80b4ef2` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Teal Soft | `1487ebabf383a0868ee039b61097113e795bf30a` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Teal Soft Border | `69a411c04b9aa6677ec6e6233aa2a7505a502d70` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=White | `37b35d645d8385aa0a4880e9b99b59ec2659a264` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Yellow | `69d2032039c2b0f531d71498f255955ff811d860` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Yellow Soft | `b8649bfd51f71063fe205bf062e3490bee88cb1f` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Type=Square, Size=Small, Corner=Rounded, Style=Yellow Soft Border | `70b4f9c439778cbceb0345a2534751e1c90bfaa3` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |

### Badge--System backend（30）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Badge / Property 1=1. 開始投分時間 | `be0c232e8ae7ff4cc08f70f9bb771559e22e8e05` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| Badge / Property 1=2. 結束投分時間 | `c2adc0734c85fdf036ee400e847ab3f266b8ca99` | Variant，屬於 `Badge` | ⚠️ 尚未填寫 Description |
| cell-radio | `6d577d9a7f1d10a50bed38623c56347042595983` | COMPONENT | ⚠️ 尚未填寫 Description |
| wager-status / Property 1=sport--large | `97de1aa4d47efcf5293516922cd7b500317e0382` | Variant，屬於 `wager-status` | ⚠️ 尚未填寫 Description |
| wager-status / Property 1=sport--large | `963b998a9c9146b22cd184a94e0f8fb3250bb89a` | Variant，屬於 `wager-status` | ⚠️ 尚未填寫 Description |
| wager-status / Property 1=sport--small | `aacabb7b9d8844457ed540220fe4fac795d8218d` | Variant，屬於 `wager-status` | ⚠️ 尚未填寫 Description |
| wager-status / Property 1=topic--large | `293fed9cdd941b3b94d045ba99e6d15c935f3ea8` | Variant，屬於 `wager-status` | ⚠️ 尚未填寫 Description |
| wager-status / Property 1=topic--small | `3e45189146ea58504fe628ac0bc9e7f2f98b478a` | Variant，屬於 `wager-status` | ⚠️ 尚未填寫 Description |
| wager-status / Property 1=Variant2 | `37d80fa55d356f8bbfb2d76ceec0dba6192b2ea3` | Variant，屬於 `wager-status` | ⚠️ 尚未填寫 Description |
| wager-status / Property 1=Variant3 | `837b9512fd5445c84d31136ef69157e9905ef1c8` | Variant，屬於 `wager-status` | ⚠️ 尚未填寫 Description |
| wager-status-point-large / Property 1=green | `ade25c091412206a548da316dcfd4d6e9d7a7c8d` | Variant，屬於 `wager-status-point-large` | ⚠️ 尚未填寫 Description |
| wager-status-point-large / Property 1=green | `afc55982957581eb0321ed8ffa26f8aeb292b838` | Variant，屬於 `wager-status-point-large` | ⚠️ 尚未填寫 Description |
| wager-status-point-large / Property 1=orange | `5e9158dfb9c7bd14678bfe5ca67d79f4ec16156f` | Variant，屬於 `wager-status-point-large` | ⚠️ 尚未填寫 Description |
| wager-status-point-large / Property 1=orange | `ffb41164b6964d0986703669499274188f39e15b` | Variant，屬於 `wager-status-point-large` | ⚠️ 尚未填寫 Description |
| wager-status-point-large / Property 1=purple | `12563073cc13631f8ba4fe56079de73d02e2638d` | Variant，屬於 `wager-status-point-large` | ⚠️ 尚未填寫 Description |
| wager-status-point-large / Property 1=purple | `926a7207368bec73bef83cfbeed822c8cad8ea12` | Variant，屬於 `wager-status-point-large` | ⚠️ 尚未填寫 Description |
| wager-status-point-large / Property 1=red | `4d587f01fd5c68fb451211e30ec2051dffd4307c` | Variant，屬於 `wager-status-point-large` | ⚠️ 尚未填寫 Description |
| wager-status-point-large / Property 1=red | `09fb65aa5a7b39563ee2e5bdb05f85637f0fb303` | Variant，屬於 `wager-status-point-large` | ⚠️ 尚未填寫 Description |
| wager-status-point-large / Property 1=Variant5 | `ac0be35402d0736790977c19c8a33c981c2e6a06` | Variant，屬於 `wager-status-point-large` | ⚠️ 尚未填寫 Description |
| wager-status-point-small / Property 1=green | `218d51c3fcf337eb398d64acace30189b955eb4e` | Variant，屬於 `wager-status-point-small` | ⚠️ 尚未填寫 Description |
| wager-status-point-small / Property 1=green | `b97bfdbb74eb5e6f72386edc7df1300ea843a1a2` | Variant，屬於 `wager-status-point-small` | ⚠️ 尚未填寫 Description |
| wager-status-point-small / Property 1=orange | `982cbc863e02ee418da7e8cebd458c71035c673c` | Variant，屬於 `wager-status-point-small` | ⚠️ 尚未填寫 Description |
| wager-status-point-small / Property 1=orange | `587df25db26aa05e3275ae27e28566e5ba3d7f7e` | Variant，屬於 `wager-status-point-small` | ⚠️ 尚未填寫 Description |
| wager-status-point-small / Property 1=purple | `b443a552ca1ff397bac001e1ba4c6d1c206f4ae5` | Variant，屬於 `wager-status-point-small` | ⚠️ 尚未填寫 Description |
| wager-status-point-small / Property 1=purple | `29cc5785a11131276d0224a775237f6bbcaf1ff4` | Variant，屬於 `wager-status-point-small` | ⚠️ 尚未填寫 Description |
| wager-status-point-small / Property 1=red | `383158fe75f87871a46201d28a3c94bcaf54add6` | Variant，屬於 `wager-status-point-small` | ⚠️ 尚未填寫 Description |
| wager-status-point-small / Property 1=red | `abbe938eefd3edf7e88a538a548cfcd841e184f2` | Variant，屬於 `wager-status-point-small` | ⚠️ 尚未填寫 Description |
| wager-status/sport--small | `a4c5b18b09946ef2f099979cbee7b863b5d9e895` | COMPONENT | ⚠️ 尚未填寫 Description |
| wager-status/topic--large | `403dacba0f9b66d2a21414ced176cc5eca6ed267` | COMPONENT | ⚠️ 尚未填寫 Description |
| wager-status/topic--small | `a407a9668eefa59e3e6395faefa8e28ca3a1f3da` | COMPONENT | ⚠️ 尚未填寫 Description |

### Breadcrumbs（12）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Breadcrumb / Size=Default | `15173095ec6dba771bc61f39e186a905a332f6f8` | Variant，屬於 `Breadcrumb` | ⚠️ 尚未填寫 Description |
| Breadcrumb / Size=Large | `dfe12278569adcfdaa550cab90bb30485fa33544` | Variant，屬於 `Breadcrumb` | ⚠️ 尚未填寫 Description |
| Breadcrumb / Size=Small | `abca2eefbeb3fba85b9632a02e8bcb2e9af88780` | Variant，屬於 `Breadcrumb` | ⚠️ 尚未填寫 Description |
| Breadcrumb Component / State=Default, Size=Default | `810837b422729459dcdb9d00fed78a2941fd8465` | Variant，屬於 `Breadcrumb Component` | ⚠️ 尚未填寫 Description |
| Breadcrumb Component / State=Default, Size=Large | `d3b038630f2a68e66b9fb0dced4a23151323430f` | Variant，屬於 `Breadcrumb Component` | ⚠️ 尚未填寫 Description |
| Breadcrumb Component / State=Default, Size=Small | `cf78dc00f7f527b5eae21049dceb101b0d282f24` | Variant，屬於 `Breadcrumb Component` | ⚠️ 尚未填寫 Description |
| Breadcrumb Component / State=Disabled, Size=Default | `a80ddd779023aa13bbbc569b7fe814f1324891b8` | Variant，屬於 `Breadcrumb Component` | ⚠️ 尚未填寫 Description |
| Breadcrumb Component / State=Disabled, Size=Large | `316fc59b3d2eba0a7e8cf78a188ddbc7e5bf8ed0` | Variant，屬於 `Breadcrumb Component` | ⚠️ 尚未填寫 Description |
| Breadcrumb Component / State=Disabled, Size=Small | `f3957eab41ff5a4205c047b203cbea55a82e8f3f` | Variant，屬於 `Breadcrumb Component` | ⚠️ 尚未填寫 Description |
| Breadcrumb Component / State=Selected, Size=Default | `cbc7774094e28a117026366303e6516f5006a4b0` | Variant，屬於 `Breadcrumb Component` | ⚠️ 尚未填寫 Description |
| Breadcrumb Component / State=Selected, Size=Large | `dd6fce2e84927ab47ea027c793c3c399af2af063` | Variant，屬於 `Breadcrumb Component` | ⚠️ 尚未填寫 Description |
| Breadcrumb Component / State=Selected, Size=Small | `6cbbd7fec012739799f5db28cb53bc80487dd2ea` | Variant，屬於 `Breadcrumb Component` | ⚠️ 尚未填寫 Description |

### Button（1260）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Black Button / Type=Default, Size=Default, Corner=Rectangle, State=Active | `ce6906efbb790e296a03c10de3cab2a9d6497fd2` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Default, Corner=Rectangle, State=Default | `e1c635f6692da13da85e42b28b8f5ac777042e12` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Default, Corner=Rectangle, State=Disabled | `a99fb336cfefc2187d5cfc2341e27311b3312b42` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Default, Corner=Rectangle, State=Focused | `959b34f7d776dd997317d2f4803307e8f1060315` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Default, Corner=Rectangle, State=Hover | `df94ed015db4d2404fd3c63ef995806e22e50009` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Default, Corner=Rounded, State=Active | `7907f849c548437c1e437b07d9ea68294cca8de3` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Default, Corner=Rounded, State=Default | `39aa9adf2fb97930ef33d3d76682126e1ec1bc5a` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Default, Corner=Rounded, State=Disabled | `5ffef86473482a47c1cc5a4fb68f3c2e6a5ad8a0` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Default, Corner=Rounded, State=Focused | `3513b27b8f5b56b014223e1fa369df66cccc7ccd` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Default, Corner=Rounded, State=Hover | `c372f8daf1d866eff809824a16b4128a56e915b0` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Active | `35e5af109fbc2e4d884868aed38c4da653453549` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Default | `06d5a42c96dddaa99bc0e8cf267130532531b852` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Disabled | `0932f9fef0d821c80f5081d18dc430a3e236e6db` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Focused | `119665a3584ddc68f7e1c255d39c537dddeb9a7f` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Hover | `009ac30f563f9ac7c00ebaa7747149abf1d46046` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Active | `9a1f4678278f210328b074b9514112c7878ef1b7` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Default | `043b13dc115b8eb7768144dc2c0245659f6a17fb` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Disabled | `1f72a08c581017d66fab60220677b0b24f4e577d` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Focused | `bbc9b181eb68a92c3c8ff2804582c0f17e1ecc4b` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Hover | `2d5eebd7bf59a9ddf1aa8376c07f481fbac94275` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Active | `eafc6a53d9320fa1c24ddf7e2f3bafc11f86f637` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Default | `b649b767e2fc8b1d05a9eef8db3796e9a108cf23` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Disabled | `7b7230f363054ebd79bb64642d453b6aa550aab9` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Focused | `5f8d50c59da9a5b4a434ccbdfb92e13bafe4b8b9` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Hover | `047fd8d3db7c4cb79ffb674cbb21fa8eb2a143c3` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Active | `f44e570b31ecabae1880e74aa9e7dd559da5ad41` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Default | `72422d725483526eaf18f1c1ce3e2a57c98856f2` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Disabled | `81f73f924c7fe626e8616ecffe2906186c52fcf9` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Focused | `c71f0f3d6ee8e108d1ae57bbed1e6eb6e1fbd1fe` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Hover | `a92029486b23720174b4589a811a655a46a3d5fc` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rectangle, State=Active | `1571d387616299d7e7986386d41e247c21b84821` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rectangle, State=Default | `3b3306361670a330155210c04a032f570106e34f` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rectangle, State=Disabled | `cae218d78897300da50ee18b233f5783cc1e5ea0` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rectangle, State=Focused | `0a39f530fccd1d475fa6fa8c71785bb509cab980` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rectangle, State=Hover | `8b801dc8b6ae7d2711145d8879bcb08b3845b001` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rounded, State=Active | `cc318325016598819d29efa49060c146a52d9b83` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rounded, State=Default | `5546eed10a616b0c1cc654af0d90f96fa7ad2d67` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rounded, State=Disabled | `2039d9703faf8af19bbd4cbbd5b76835205bafd4` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rounded, State=Focused | `5bc27c9b8c43f907edea62eebd0d138ca2c25fb5` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Large, Corner=Rounded, State=Hover | `dd308e4194d56c03e2fbe0dbc73819ce58e74cf7` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rectangle, State=Active | `682413bb7a213b97a87922e1d6c69e21b1abc5b3` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rectangle, State=Default | `5498ac558f3abaa454adc1b40bd4fecd96f6d881` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rectangle, State=Disabled | `6cf787126ef90003e63549711eaaf07cc9e20402` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rectangle, State=Focused | `326c5a4f7783993316df925ac3d1c58a1a0cad44` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rectangle, State=Hover | `8f544689f5376cab0e3c02f210d89a0fbe13997e` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rounded, State=Active | `c1b6d4caa8f3555302905b79fb10b5358a83e565` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rounded, State=Default | `e7f8827d147ada0cd2f03ed5c38b3b17cf99a21d` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rounded, State=Disabled | `d26afae2f3e707079dacb3911d1a94c910e89cf1` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rounded, State=Focused | `a85f39c6eacb75269fecbee60bb5c9aca85ab4f7` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Micro, Corner=Rounded, State=Hover | `6788e58f804f9f77d51e2f86c99c5cccace523c7` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rectangle, State=Active | `9e72550f03c7f909b459623c938a338b529e40a3` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rectangle, State=Default | `ff64e27f6f0531875938ae3f9c9d1f15406b79a6` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rectangle, State=Disabled | `d2c4a7f5b990a82b5f6f7482a0415c395857ac75` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rectangle, State=Focused | `81f3c488f84f3ad851d6fe588041388fda3982a5` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rectangle, State=Hover | `b8c81b0d62a4666655bfdaf4c82ddcea060aa842` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rounded, State=Active | `b4e6b9e331ee0ab791d880e331ec7f05d8e041e8` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rounded, State=Default | `ba21c3220b4ffd9cbf19e4b1a3fa82a252f6b17a` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rounded, State=Disabled | `15b5693b359a94a503e184df7f2e3439d1946556` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rounded, State=Focused | `ef0942bc95cd4324d85d59b18249d267e162d6d4` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Default, Size=Small, Corner=Rounded, State=Hover | `7414725e6d6cfb3ba3e2ac03677aacaa25093a35` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rectangle, State=Active | `4ae53a67ff0a0003ee72415ae18179f62e72e53e` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rectangle, State=Default | `9bb8e60d498496791eb6deba1a0a2c55efa8f046` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rectangle, State=Disabled | `d64130c7725b2ae7a67493b977fd4b4002ed844f` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rectangle, State=Focused | `373a0d1c5c93880ed1b1f21aa8e6cb20fc34647d` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rectangle, State=Hover | `cbc0dec8e0679cbb73980c5b9845e1bc147840b8` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rounded, State=Active | `91a38b26b960ebd95f45cf16bf437f3375368a79` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rounded, State=Default | `bf9df83c133b55d0a8ca4103c056d0da5627e6b2` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rounded, State=Disabled | `a7401b03d0c9b838f6bd5ae6bd76e838722db2d4` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rounded, State=Focused | `ccf61fa0a3065d576e503ce3f9a8e58d51a843f5` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Default, Corner=Rounded, State=Hover | `48649195a2a6f0d9cadad9987d4b5eee6edbfee2` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Active | `53289be91df73de959a4b6939a1c109a8c00e410` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Default | `a602e6d9243204b5d7727bd9966c1acc30233395` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Disabled | `3b99df6017c07f11a59ab27ec43ae20531be849a` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Focused | `09a91effb29f495873cb8c99760b8589160ddb6e` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Hover | `28616efc999a1e99074a021453c850ee442f9fb4` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Active | `6a7e16cfb27052b790a1221b53116b2d24879843` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Default | `0ecaf3ecc1fa1106e638e65ab005f46002523bf5` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Disabled | `9dc15e6bed3f9134905ce28bd4f8ffccdb18064b` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Focused | `daf5abee5b2799c6624c1084f0e1ea0fe9b303f1` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Hover | `9187f899af923aa5beffba1447b7b6592ee7650b` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Active | `cf60bc60f47348904df58b4c51ba0d69443f7bb7` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Default | `b266b0ef58107d6e0db067f59ed8d5944df6f7eb` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Disabled | `d415940d0569fac29cba587ce261c6db0d45d5c7` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Focused | `75b5a6d493fd6ab0808c4b40928330f7e6e589cd` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Hover | `649cccae9a56bfb92d79f48fcce7f4248e7e5225` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Active | `86b1f565f1d867cbcc5da671d343062a7193e848` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Default | `954ec5a74d07c4025cb7e4137634d084c50c424d` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Disabled | `41ea008a13baf06b77df9b6c5710d4262d3664f1` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Focused | `486fff08a8bf48d4a104ff5f2e683cf742289921` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Hover | `5e5b833a525e0e95f9672aba81fabbdee1ca6978` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rectangle, State=Active | `1a049f666e856ecf5bbfd3d7bec0c25a0f6cb59a` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rectangle, State=Default | `7748b90cebbfd6325f08e2f7aa2c0bc7c2fae48b` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rectangle, State=Disabled | `cd40d605b2e3a64bed0b949312542a6ba2d49e54` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rectangle, State=Focused | `cb48971136aeab23b19c2e0cc6d9e600b7629e13` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rectangle, State=Hover | `992226dd1e6235231efd436ebd4ec7cd63f8ffb1` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rounded, State=Active | `1ebe3037bd70bda3b5879e6e81db26d884c8b573` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rounded, State=Default | `54b6e9e4592fccdaf7f7cb837718739e963cf6e2` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rounded, State=Disabled | `09d109ed6eeaa2ab1dcd830d8de0cc6177d90f40` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rounded, State=Focused | `54f12535e606cd186325189826e0620d9c029873` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Large, Corner=Rounded, State=Hover | `9da286bcf3523eb19646ca89e3c4622914daf977` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Active | `42a0b6ed820caea58740af3dba1fba85a8d0453e` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Default | `b50bc610bb95cb34bd5d6c74c4a7814dafa03c43` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Disabled | `b8df851bcf4c6d18454513a87e6fb5072d594676` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Focused | `4eb425d0892cebce4573963ad73154f8b541871b` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Hover | `2b0f228ba026206b10a5cc880b9dbc3c11396d2b` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rounded, State=Active | `b472461217cb9f3a174d4dbaf6a72a60f065cdde` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rounded, State=Default | `fc59b24b22a753c1f11dd8cf45ded7e20c3ec8d3` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rounded, State=Disabled | `b7007b983d358062e7074404facf381b9cdd4dfb` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rounded, State=Focused | `93d5c7b02530526797ca3d7c0924ff1b58e831d4` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Micro, Corner=Rounded, State=Hover | `6387e54fc7716772e9a863247436affa2bfddd0c` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rectangle, State=Active | `b1aaa925f86ab43f5d6b771b435dab38e130904a` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rectangle, State=Default | `fb9620a8e91cf2c5ba599df57d1d9fd457d96438` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rectangle, State=Disabled | `169e1acf6dba8d4d9651f5bc7e597695ccd3c2a1` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rectangle, State=Focused | `a9579db7a829870c90e6fdde60809e5bc8e14f3c` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rectangle, State=Hover | `969e60f66d8d30e10e9d2cd00d390ae0e571e575` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rounded, State=Active | `d6986d7569d32547797619aa1d6bdcc3efad1cb8` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rounded, State=Default | `aadd22ec7352156e5cc55bea59af57051470ac28` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rounded, State=Disabled | `57c531efc9552f88f38e4bf42de30f55b282776b` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rounded, State=Focused | `1d5efbbf3d3a8b9190836c679556d91be6e169d8` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Icon, Size=Small, Corner=Rounded, State=Hover | `a1b527511072f6c1e146efc5ee7aa38935b53753` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rectangle, State=Active | `922eafac02e90b3c9be420df1f347a91b51e1641` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rectangle, State=Default | `52d2d2b87658919868971a4e2df6f4af4bd78a68` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rectangle, State=Disabled | `39ec0feaa346a8329bde3ff25bff39e32bfc74ec` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rectangle, State=Focused | `1655970e83eda5dde34c558668f3ca41d6e3e86e` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rectangle, State=Hover | `bdf645fb5880b01f5988d1ed06164b4edc3c737e` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rounded, State=Active | `1a0b8e88095cd0e1e15e6175a7aa6c030983e589` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rounded, State=Default | `b9fb84ccfb69f731ca69cca33d221408883c8c6a` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rounded, State=Disabled | `71716c18758d1979f639f97f82ba781b8345ba6a` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rounded, State=Focused | `44ebe8629570b94ec0217e8832ad1c1fc5d7b7cf` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Default, Corner=Rounded, State=Hover | `3ab703c3521b15d3c456a3aa036e0b905250c6d3` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Active | `50daf712eeb707b9776dacf6ddfc74313fcdff29` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Default | `2374a922cfda80ca6a7fb4e95675fff12fb9d552` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Disabled | `2e48a9cb30b04b6fa55d0e5d4e44a16432f109dc` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Focused | `214ea1eaed13717396831f7f4e1332a1e377f994` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Hover | `2f796c8808d2548c629e286745b71bf4c755fe08` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Active | `a24fb616b6d3da7ac039e3bde5a0205d56b6c101` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Default | `7306bc44282d06c2876d3cb454e0d57513d59a75` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Disabled | `823af8575f1af3e47e2f653130c13eba565cb546` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Focused | `b2eaa75ab9dce56a332a5673f5d0518444e1f714` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Hover | `c0c23c8904be3fccf330bba0c7b3dad00b0c9df4` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Active | `7c2f60267ac38c32a2060b42bbfea399692120f7` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Default | `b7d98350242b57ba199cf545ee9dd0d50b96bca8` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Disabled | `a2b88078465081d05cb9d0f433353b133ba8ef74` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Focused | `7a5b69097e33cd8e10cd306902e4598e125e0b76` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Hover | `f638dba8531fe08cbcfd25b1fbc62778f3daef63` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Active | `cbfd20a0fe0b97aa515038049b0f2c745243ec8c` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Default | `07027f956956476938949d4cb3268f966ae23bf1` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Disabled | `1d9434bcab8132983c58a4f46a31157374cbfbd5` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Focused | `de7b35260542079d788526cf2a71f2a0f0d5f994` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Hover | `aea15028f34b4b4fe74bb2bf8b30ddf35037a412` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rectangle, State=Active | `80a74b61cb8e002104cac0ded2eb8c4a1b00ff82` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rectangle, State=Default | `36aaa757a6fd80cb74eef3f6aa116c032f706a0e` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rectangle, State=Disabled | `b20d26f432955fec828f69e97f56ff02e37ce868` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rectangle, State=Focused | `c3df99860230269876a947710744fb054e2170df` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rectangle, State=Hover | `19b96216eed34c4a4164ef62413256b8c87d3ebe` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rounded, State=Active | `7af4d3540bd0b6c4c492136eb403a55c0a4e2461` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rounded, State=Default | `9b93534e94cc7d976ec7e7aada6bce48385c9628` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rounded, State=Disabled | `d3d74d62520783739e18f1c4e9ab633fbbcbe1de` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rounded, State=Focused | `c52976d2cb2c6cf0ac3ef0197264e75ddc57c494` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Large, Corner=Rounded, State=Hover | `238874baeaa8f4ee22e2c1725ae83db8ba1e8c16` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rectangle, State=Active | `41dadd4cf5d6f3f39bd292882a7e16fd5ad48b12` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rectangle, State=Default | `102d1c6cc06255979dd846a76cae3e9dc37328db` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rectangle, State=Disabled | `25c5780c94711523ec8841a938a6fe76ac60f490` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rectangle, State=Focused | `affb6ea17f7f00ba95ffa1b387ed0ff0788317ca` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rectangle, State=Hover | `81be361467563cbb66aad2dc3e620c8bb1f10b23` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rounded, State=Active | `8eb1db280caf160ec9e0ff12592d855c421669db` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rounded, State=Default | `48fd727dca1ea3de6d4781bd335a8dee19d902cc` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rounded, State=Disabled | `8e65e8de60204866da8aa56c85f5ffcd8c48a845` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rounded, State=Focused | `a353afa2721a863b0b91214bce1b4e3ffd047828` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Micro, Corner=Rounded, State=Hover | `685f4748d150116b71d7f5e0bc302a3755c85dc3` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rectangle, State=Active | `d0f29e60e93f3e5a7dd8c1bff03713270ad49c72` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rectangle, State=Default | `54151fd2c3bf7e0ee571051dcfca3e553a8f3996` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rectangle, State=Disabled | `c0bf672a4615aae4f6b1893d11077db2ca389a59` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rectangle, State=Focused | `787e637e2edd6d8e7da9153f90a85a1b600152b0` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rectangle, State=Hover | `a0a65c624c667c300f1b2e06e32a844360db70b4` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rounded, State=Active | `426089479408f259fb91386474ba7db4b04f3a87` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rounded, State=Default | `5a92eb237c856b0d65587f0f0fa99daf9a8350b0` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rounded, State=Disabled | `ec594795c271917c8515fa46de8eb952bf2e321d` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rounded, State=Focused | `0b35891215d9f44f174036c46c241104eefda5fa` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Black Button / Type=Round, Size=Small, Corner=Rounded, State=Hover | `d011f4cc164f9050c6792dad43580e5f4aab0694` | Variant，屬於 `Black Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rectangle, State=Active | `5422eec6d04a599f521a3666abf12a7d8f7cbd5d` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rectangle, State=Default | `30b3a13e683e81af324b39d1805acf25c928fd2c` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rectangle, State=Disabled | `6902c4bc0dd55a4a0230137f9535e716fc6af802` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rectangle, State=Focused | `ecdebe6de2821f4396f13b2623ad5df6fb660322` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rectangle, State=Hover | `15a0199d6f1c6b9973abb9aeaa9148f59cd7ad57` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rounded, State=Active | `2849df9b5f8f41090c9bf3fe361f2fe3118ce3c3` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rounded, State=Default | `47308d96162d7d54a4a09a0700bf43c0eaccd690` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rounded, State=Disabled | `6c05fdf5376c62f6f5f83d6bb2d426c6791a0e55` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rounded, State=Focused | `b55e8d9f13954514a1155f520d370cbbfd427ecb` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Default, Corner=Rounded, State=Hover | `458d27d2523ba9b40b497daf1f33a40e2ab760c6` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Active | `b99c99e3d7f3c7535fb28b849fda29457a74d559` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Default | `2296973e245811057da89d84b039677d9c1e74d2` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Disabled | `8cbc7dccfc2b22fd0326591387c0344e33f6993a` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Focused | `37769e4b9cd2bddccb912e25e7eaaa1b76631820` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Hover | `2732a1dc7719e9410c83832dec73f13843e62444` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Active | `1ed43261e5c3ea94d4d411a004be6c9ff796f33b` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Default | `41a573a433143897d9270097ce15915c5fbf02eb` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Disabled | `255b7f0e6cbada31f4968dede6598e4bcf113fb7` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Focused | `bccfd32edf2b378fb71b3a0c1debbf52a4023ec3` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Hover | `21e71255642bd4387ca646174d2a7733a1afbdbb` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Active | `9d649112a0ffb0b68a5e67aa7a8d5b5ae3f501c5` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Default | `258655477874fd31d191545e1cb957ec88b1fc18` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Disabled | `7892dbaffb62700a8052f182e2b1abdcc7ad77b5` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Focused | `a6849156dd3645790d589303de12fce371ab7add` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Hover | `2feab15947d77adbfe02bf2669b766f5cae66857` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Active | `a972151202de19e85b4e952d60c14a718ec8e063` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Default | `cec956528aaf339821ba61afcb54ed02898fca12` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Disabled | `25589c293c72041c12c3e0288ed43230c53e9911` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Focused | `7dd4bae755d81109ecb089cf5519a9fdec14dc16` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Hover | `995a4f09a236754fcaa3a8d6999a2311bc555f26` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rectangle, State=Active | `92f273ff360207775ad04051e43459a8d5e8e965` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rectangle, State=Default | `f2539f78c46d7a1fdc77f982c9493413727ab2bc` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rectangle, State=Disabled | `3a7161b2b06415dee7e33402d34176ecdbdfd2b3` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rectangle, State=Focused | `b03409a319c261c7c3730a3fbd2a636a6eb8b634` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rectangle, State=Hover | `c12a0c9f91e34ff09335411cc5edecdeacff076c` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rounded, State=Active | `7be795fbb28e1151b868a07a46f052f87be19e18` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rounded, State=Default | `92d3e1818408e58df4eb2dfbf9cfe4672d15ff68` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rounded, State=Disabled | `e5843a887aee84ea956661ec2b84b91389e589d1` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rounded, State=Focused | `d5922c54a619ae9154a9d66e54015701a50fa3d4` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Large, Corner=Rounded, State=Hover | `4878b0525e0fa9f7a0d4bd8196dd4c8c56a5e093` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rectangle, State=Active | `dda3d8c681820573c5a0c8467a80072f2c4d8e08` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rectangle, State=Default | `797b3f008be0e5d42821692c0b5314aef5271bb8` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rectangle, State=Disabled | `32e94a19234ab12437eb169a8a17117852cfd3cd` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rectangle, State=Focused | `781e260c299093a26ce1769ab8d89d73fdc480a2` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rectangle, State=Hover | `5553227cf884c75123aa779a03744efd7bd43559` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rounded, State=Active | `496a47c98cd15a34271a3c4b3018dd9f57f543e5` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rounded, State=Default | `b0c55dd4edbee3f1c5974943ff3ff52c0a3195f3` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rounded, State=Disabled | `a31e2be97ff94ecae547fbed5bcd117ef6fef5a4` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rounded, State=Focused | `13bceac7f139458b50d933e889cb541379d2689b` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Micro, Corner=Rounded, State=Hover | `67a4506fe7b15ba31773dfead6fe1df5f1b6a317` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rectangle, State=Active | `b97aeaac732b6abd5fc4c79de4c64f5a16fa611a` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rectangle, State=Default | `e0bae2bc864cbcb6f43c9750daa1b1b759bc2e00` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rectangle, State=Disabled | `63ce69a59c4176d2a1ebb6649d27d70f95058dcc` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rectangle, State=Focused | `df1b2d2a4150b6c33183852b15ae661c2ad83c01` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rectangle, State=Hover | `a3a14df5d79e8be650e080889038d43745bb7d6c` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rounded, State=Active | `f4b604c346fc8d75d5ac0c07b80f1881d54407d6` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rounded, State=Default | `28c6d51e7e4b369d1c4836e6eb8f56656899efd9` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rounded, State=Disabled | `156fe505df529670860ac6cbf3ecec7b05dee5ba` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rounded, State=Focused | `480b2ba851bb432158d902674d7da5e94a40baaa` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Default, Size=Small, Corner=Rounded, State=Hover | `c6382d24ea98b74132ca7470f8d0fde17e2071bf` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rectangle, State=Active | `1ba29356b41417c135c0a51ccd70638953a6183d` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rectangle, State=Default | `00690e20aa0f4e0ae1900eb847d15d39a2262448` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rectangle, State=Disabled | `063104b81a61ed73e9764b1d4fb37bb7cb45d2ed` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rectangle, State=Focused | `51cb7d153c850157074200f9f374b55d89407c32` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rectangle, State=Hover | `bd1146be11849633c561439267a677a1c87f413f` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rounded, State=Active | `6e6476f5cb21959161c73ad3329155285792a5d0` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rounded, State=Default | `af7f781d035f59c03656ff166e25a50d7a0f11cf` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rounded, State=Disabled | `ab4c4a158900093e44835eb499d82662afd770d6` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rounded, State=Focused | `b54fd3280c3dabdccc8e2463b50f7c43233c9e08` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Default, Corner=Rounded, State=Hover | `3566a1c8831de60b655211d0dcae0cd8799ac89a` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Active | `5ea1d348135c6ae643eee7fee0bb66acba1aeb35` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Default | `ca94143a1bd90530c1b603e7293a97ddd5452c95` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Disabled | `b655bc9634fbb75d597e47dfc87d9f18d0884b5d` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Focused | `ad15310281864fd9e374dc2364f2322b97bd970b` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Hover | `03834b8bb788ce0906fbbcffea46dc039404fae3` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Active | `a3c74edb4a84be0eb9f704b78b47973c3eb011a8` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Default | `7a1fb6f59d9af0744c2cb682b34c6c471afcacf6` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Disabled | `eeb213290270a4ec1711f3cbae08e7635f35de4b` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Focused | `705f416f914feebb3a70d5e2342981c6fd645019` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Hover | `cacffc75374d6e81e4c53ffd4caf54adc9fd0fae` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Active | `cbca0d11ecfd0534ac04963766d7a675ac2f01bc` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Default | `6a35dc4078d2299b6f6b310c8ac233ac06d3f95f` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Disabled | `9c82f8fccfba7c10fcc1394f6647c8b24482e2b4` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Focused | `b88f9a5a354cc95534d8b285520bafe8b1743a16` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Hover | `584c6478be9de5bb4529fbda7b2ce0472f255c1c` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Active | `a799dad20a7f0bc029cb4d5ed9a4cb10bb1c6c11` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Default | `b20477d312a04b6c5c9db4bec51ae08e79bf2e18` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Disabled | `b357d3c74ab40d55fdfbc2a3d12ef2f2ffe6bb30` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Focused | `38791d488ce5d16ff8a5004c519b649df6437e57` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Hover | `77f44f6b4ddd09e0bc48b4a2ba4fc71b5927709b` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rectangle, State=Active | `83a8ec4f498069196136920336a1bcf0a652354c` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rectangle, State=Default | `c31c9364270d3b2e98848b07caccd74f050eef91` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rectangle, State=Disabled | `76643e87972ff4bab0c5531cb6e550a0b0af3d0d` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rectangle, State=Focused | `ab8c80d23fad6db43c29533e87deedb31769daf2` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rectangle, State=Hover | `206850d222eb3ba9be55e74a1e5efb83b4ec527f` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rounded, State=Active | `92db3ff844cef0fb58855033741a566f13fb54c7` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rounded, State=Default | `d33da8616f0ac12f811dbab7dc3c1a4f88bbf477` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rounded, State=Disabled | `7b0917498e7d2c160d730249c92b81d9f0de2209` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rounded, State=Focused | `e6f01fc12d379203dfdd3758a05d821aa2a465cf` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Large, Corner=Rounded, State=Hover | `83466d0a9a61f14ed309d62d891ed98794bf6472` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Active | `0db87498b7c51716f16e6f1488d839bbe7a44755` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Default | `9bfb19716efaa47e996fd442f5b8706a7ac1bb54` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Disabled | `0fbcf0ef0ac63440e313a9176acc830c3ac22baa` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Focused | `c2e7f0ac3a81d0d97dcc812e4c060bb5ea3f72b9` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Hover | `daf22c176383a100724f33cbbc462e4aab128f60` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rounded, State=Active | `49c43f515098621d9651474b2f5fb705216af821` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rounded, State=Default | `8b50095941eb1d419f623bb23efab407cbe22448` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rounded, State=Disabled | `c16d02903360fec825ae82e969a1e8f837b11801` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rounded, State=Focused | `5c3c1bc0effe9e91fed624fe59bfd74133da19f1` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Micro, Corner=Rounded, State=Hover | `894c9b08dd88393029881218e44e59b8877dee1b` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rectangle, State=Active | `b24303756e24a7d5ea4f310a92fffa4f76a428b3` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rectangle, State=Default | `d468a2b961391761c3ea54ee8b987b414e9d92af` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rectangle, State=Disabled | `fe7f6304a8a4c5c46ad1aa5eb941c1dc59548b1d` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rectangle, State=Focused | `49bb4cf7d29fb99676290b5b0135e5982d80d2c6` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rectangle, State=Hover | `94882463a7f655dad152cce29b5f4fbf702776ae` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rounded, State=Active | `c56da131c5082ab86078189ee935bd0483f7986e` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rounded, State=Default | `24e92745d8e1d3d395a7a2205213cd2cc3f3c367` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rounded, State=Disabled | `21c9f5296ca026e577791ebbff162fc133e58ce5` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rounded, State=Focused | `f0322226409679e88fda2f43065ce4ce50d27c69` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Icon, Size=Small, Corner=Rounded, State=Hover | `c3ff41b83ccf040ded9c33fdfababbe7eb60c1c7` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rectangle, State=Active | `ead7790bd1845ba7876907a1a4f99e5d9befcaa8` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rectangle, State=Default | `43fc7fa95ad8a282a13fc6ba21c1dbf80b4e6690` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rectangle, State=Disabled | `91a542f52c1cbb02704259f468e47cd5b06156e0` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rectangle, State=Focused | `2c4d3206a94807e888d747381461e787a17fd2b4` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rectangle, State=Hover | `4182800f6426b8bcf441b80a18242ebc4456a75d` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rounded, State=Active | `d8402d76ed1747f3fb996c7b38f746943dc7cc8f` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rounded, State=Default | `507a1b813e6098d706690009b8d60a0bf2a5ec64` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rounded, State=Disabled | `03dce74d586daec7be21e8e0dd5f494c7684bfa2` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rounded, State=Focused | `882acd9780fab3a2c6e930968fb31b0811c13cab` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Default, Corner=Rounded, State=Hover | `aace1cd227fd5dcdd98219cfb29f8ce8550eb66d` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Active | `b775c8061c1a07cf4f2cacd67cf31d2461507a9d` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Default | `7171151f74710fb86c4c94acff3354670644d3d6` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Disabled | `01a46f95b9f69ec0fa89acdd17566a5683e33b4d` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Focused | `5e7c4d66d5ae07520444e30b386c4fdb7235448a` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Hover | `44a4ca0b020e9ae37d08c74ffa8ad1387f34a375` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Active | `01651b4b3b7615543648f361e31fa07247deef1b` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Default | `365f8fa0cf5a230ac50825d0b744f7ddcf576ce2` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Disabled | `eb50bd854965673f3051787514a4f546a44aa9f5` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Focused | `fb77844175ab42574b81eba9445b8138781e946f` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Hover | `623a3d765ac0279084ff20b61239714ce3a57a2a` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Active | `6e75ae555b2f409b17273a1ba91a035ec12360d2` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Default | `256be2f6bf93fa9d5be3fbcc40a4b58145c68de1` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Disabled | `88b12eadea8ce990a248f0c4072dbbd9096a010e` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Focused | `40f85bdcb88a8bc1fd64d75bb714eb60971495ac` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Hover | `27c8d7974c339a93c4ac7218645f7210d0e4eb12` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Active | `072574a5579c274e5c0d3457acab8c8889aed3b5` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Default | `2193dfb9985a309916514655de4ad0d297dcabb1` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Disabled | `b9f51eae398c17eee443665fe55bf864b715fac4` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Focused | `062f61c448955533f48e3b37c24da612857f6ce3` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Hover | `494567c2f97ccd7474a740e87eb085cf79e0a225` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rectangle, State=Active | `fbad213401f7b705757300e1024600bba97a3753` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rectangle, State=Default | `3a88cc359ea25626e73e461246fbeb99ce9fb2de` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rectangle, State=Disabled | `4157633602a8924c979f09a7e131b544a6988357` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rectangle, State=Focused | `317fe9c6ec4e05ad84f7e76e44971fd2188cefd9` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rectangle, State=Hover | `b1af7d2566a3166b14099e17daacbbae4ad5aad9` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rounded, State=Active | `9e5efd42617d2092860c8f505f39e5a3b57a4d86` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rounded, State=Default | `d4e233ada8654f64bb120366b94780ad97407465` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rounded, State=Disabled | `cc360baaa238a9e431a4e84d79a18f546e8406fe` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rounded, State=Focused | `8ee27a5f40ee414bc156a25ba210fcb533725278` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Large, Corner=Rounded, State=Hover | `027582ec14d056f237cfefde4b8510966bb29ce8` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rectangle, State=Active | `0912260fc0ec52e5c5ff65f43a8dcca89636ca71` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rectangle, State=Default | `44c6c8a388b87b74a6b77d3b8cf93b913137212c` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rectangle, State=Disabled | `b4646bc7b55e2567ab9010cb9639b4e4584f932e` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rectangle, State=Focused | `3d9e4595fc60f5ce2eae847b6700e32eecee1876` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rectangle, State=Hover | `fa18ab3b79e7e62b298d09463b585ab1e326c360` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rounded, State=Active | `e025000e8c2916c83cee51090154fc5efc5ff9b0` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rounded, State=Default | `29b998c02691349d9fab9ae211233ab7f4d5186f` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rounded, State=Disabled | `494b8bc67fb1bbaa640841eb069a5c92d78c0b20` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rounded, State=Focused | `e195907d39fe10b8d954af666fb54445f5c4623a` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Micro, Corner=Rounded, State=Hover | `3557dd934532b91f412939da999983d3c58d2854` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rectangle, State=Active | `a39683af833c249e70463a1a7d86657f02893964` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rectangle, State=Default | `734180f940cd80627f0a07dcd9aa3d63eda40014` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rectangle, State=Disabled | `d7375ea14dbf4d17ab5e6a8df72e8b096c7da5f7` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rectangle, State=Focused | `cbb120c597834dc203a8732a5bab5287de53cacc` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rectangle, State=Hover | `bffee991f0bcd3f45dcc0b891dd699d10c26459c` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rounded, State=Active | `593f9cad00f6919590c93871b419f90ffcd762e6` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rounded, State=Default | `8fc9ea6372358f2d74c50921f19e228807cc397e` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rounded, State=Disabled | `741ce23c7c41e3abb9026a8d7a7d00f806d25327` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rounded, State=Focused | `ef29bbb399ee7d560871fdc8f9ae415987d6f745` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Ghost Button / Type=Round, Size=Small, Corner=Rounded, State=Hover | `e35192a2c9a0cdddc59f110debfc9e670b70466a` | Variant，屬於 `Ghost Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rectangle, State=Active | `133968a8ca4eb560069c997868c897a3834b3ab5` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rectangle, State=Default | `1345e781901f10a156fe5b0551f4a76e4a519d50` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rectangle, State=Disabled | `c6e4ac8de018da811fb3870e194f05f4aa71d3f6` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rectangle, State=Focused | `c6c0b2e4994732328a446ac6e42e521ba8b341bc` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rectangle, State=Hover | `b3c41aa6d1c3596600b413c29ce1594ae0d7f702` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rounded, State=Active | `d6df73909d9b7f59abb912ad2f1dc417b88213b5` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rounded, State=Default | `cc838247edd0dab7d3678cd3a2216bfacad5e5bf` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rounded, State=Disabled | `01393c879e14e2bf9691a030c6d901cf2af67d65` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rounded, State=Focused | `9d8cc7b68c8b2710e527a4e85c92ebe154efb380` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Default, Corner=Rounded, State=Hover | `b686e37e4632157882e57864d19c331e4608fcd6` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Active | `4be5d1a25b228167678ee4dda02a5e9c6b4f16bb` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Default | `c812721197ba71d73cf6af9c7254d0fa56b0e3cc` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Disabled | `8aedc717f98b83ea8e2b629d5318c8d46a0172fd` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Focused | `0cd6516bfbfdf3a02956c9d1258dfdcc6450066b` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Hover | `7077dc1dab88c6351dbb9667872b56565b78508f` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Active | `7c50063bb15d551b41cabe98fd620e53009e7346` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Default | `c0f6c6b5f2b540355e75c9e54a944d287e188abb` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Disabled | `7244e2cfe875c67aa7e8faa38451b044ed12fcec` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Focused | `bfea50b95b303a187669d725322aa86c33fca0fc` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Hover | `bd444e9de0bdc2c0adef82b084f3a90fb5387f70` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Active | `2136d1d66504e5249f7dedb53949434a4216d5f4` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Default | `21ab50de4bb6e7cfaabf0f75b4fd67838d9330b3` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Disabled | `9b9b6b301ebe794b9d45bb2f62303cfb9384114d` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Focused | `2c290d71b612799331122088b01d76061435968e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Hover | `767e33250948f71dfc6fc0a2095e77d9b2a7ccbc` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Active | `51deeba5ed4d8ce3c162f9f1f5f8233bf94a5edd` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Default | `b4310be652b4aff1d50a07badb707017121503a9` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Disabled | `eec79a766ed0005a68fdb6ca56a263db0402666f` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Focused | `b0b82b6479364a3c2529ff12c31c83b9379afbb3` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Hover | `106ffd6fba0e4ba80cdb7650f3cf37c2e961b1fd` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rectangle, State=Active | `37c4a497b4479051d2d0496f0a6e3c713a6c381e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rectangle, State=Default | `4b2d784f95c47d82ef369ce3e024cebf47c133ae` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rectangle, State=Disabled | `6535bd032dfbe39018a617e149766239df07143d` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rectangle, State=Focused | `53eb977ce3712c05e03095c17f1a08984e952dc5` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rectangle, State=Hover | `133ee50dc3b8723a669ce4579e6a3d6aad413a4e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rounded, State=Active | `c4e003b29d84372c0840d2b274752047145670a4` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rounded, State=Default | `edfcaa2dc93c803446dbb0dbdfef5b2863bc779f` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rounded, State=Disabled | `5ba6ceebc57f7b2fb453f85fb1b87c25c38399f0` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rounded, State=Focused | `0f43c8d9a591aa501f9317c4a2d5f83098c38d30` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Large, Corner=Rounded, State=Hover | `831ac816687c2bd3bff2d5b0c4d22133b756264b` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Active | `c9c14e69cf88e6443adc4d9270e5e38f941febe5` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Default | `29751bf29e55213baa36248e57132f73479adf7f` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Disabled | `c4996e000a1a7e84ec06962448d91c11dc8b2fea` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Focused | `549544f51d23c5b7b5659340903e212a4acc9df0` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Hover | `6c3f0507256b48c9ff646a4fb6ace25e1860654a` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rounded, State=Active | `02b2b83d3a6a3e03de9c7737faa71d0f3db8125c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rounded, State=Default | `9e668b1e30b7d27631dc6b084679200644b16f4c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rounded, State=Disabled | `bca76a042acf293b64c7ded7010ae8d7813ed575` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rounded, State=Focused | `2c9ac3d7cf82d7130df8603c554b867a281b7298` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Micro, Corner=Rounded, State=Hover | `9626ed798b62058b81be1ae2dbe3f34133fac5ad` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rectangle, State=Active | `2839e51dc5d6297d35d99b1ea911c76246c9caa6` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rectangle, State=Default | `bbeb9cc75ad0f2c8474f92770abefe8230fb1926` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rectangle, State=Disabled | `180f41bdc4c19abf9c684644f6637bca16732af8` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rectangle, State=Focused | `df9ab34fa8113dadbae898e2de64b389b456e667` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rectangle, State=Hover | `8f13a15310532152b89af48447650f98d1d0a5e5` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rounded, State=Active | `70dde5521d261350f7ff6870371bf7b376b3eb1e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rounded, State=Default | `58b2003829e91e9321922aa5bcfe0b57850fcd21` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rounded, State=Disabled | `97e52d3dbc33826dfb4899c59eede9aeac81c19e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rounded, State=Focused | `a06ed870ea3e8fd5b09d1628d16006beac903f1a` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Default, Size=Small, Corner=Rounded, State=Hover | `38f042b6c5938db74f466def8d08b883e5b398fa` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Active | `f65cf77628f8232decc8388404908f0168360d16` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Default | `4ad87dcc368eeb740f8cbc411290a4084871230f` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Disabled | `8c0901ace941649b60953b3c31bca92deebd1839` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Focused | `9e6d6249e0ddb8fa8c1ccf0b2ea116fd1e18a83e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Hover | `1e9ee552f5a6ec720a5e5ea4a17a8c14c90d9ebd` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rounded, State=Active | `8e1907d85aff969866e1dd1bf415315965bb89c5` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rounded, State=Default | `517702b58ddf29ba9929eeea8887b570a4eff906` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rounded, State=Disabled | `9397f7652f7c5bed878405c49453c15a12322adc` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rounded, State=Focused | `3820c49bc37d9ffa7a2507b7b85e3dc324497869` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Default, Corner=Rounded, State=Hover | `f7194312ac06df49a65578a7402492879a2299bd` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Active | `e31feeaef3ee78bc5214b040aa1ae035f8b4924a` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Default | `2a2c2900ca9275c053c8b3f4a3926d441b7f4130` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Disabled | `060e43f7639cddb9eb6067d386c409ba1aaccf19` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Focused | `41677cae47e7764d5ad4a874854ed8ff26a863a8` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Hover | `8dc1cda3099648fd67b1c52390158074cd85601b` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Active | `74dc5f480578eb096d40b38ad49df912b7bc2525` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Default | `b1f7ebcc7fb2163630840f56a830a131dc282e99` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Disabled | `29af6305ac6ccbdcfb882c38be06b59c89a3b7e4` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Focused | `43a709f7582e3a7569277fdaf46cf93bdbdeaaf4` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Hover | `b786225c386a86820e80ba58af58cfdb774766e2` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Active | `c8ecbd6aa7abaca3330294e0358ee7e1d3d24b16` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Default | `81e319074fe4dd489cc789142e5c112825ca6ea7` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Disabled | `c0753275ccb647502c6245dc288bb11dd1845c2d` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Focused | `da3d1d3c1ea9cca4bffa495203fdb140ae9dc693` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Hover | `964e6c97fd4079ea1532368068abda8dd6e37f0d` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Active | `06a96de8283e033dc03d5a62dfe0adc2e78cac53` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Default | `f7de7e57593cb6bdcfaaa1909fa7f533842035ff` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Disabled | `ec9b66128d18e8d1bb23d69d84f360a6a6656378` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Focused | `e3646dad129816c8421ef3cea577a2a9c334438a` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Hover | `c45e8b77f6caec497e7a679c2a92fe19cd720f8d` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Active | `fe4c0238d1c260eb4dddbbce45486c91dd90a259` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Default | `87a5075f6aba010ba2afa1ed78aeffc1a206fefe` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Disabled | `d79080e8d4db7659952d02da105a3efb6187c09e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Focused | `5fb72f3268f1fa7f98f3aad20bc46cc80f0a22c2` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Hover | `7c629d00d5f953740ae0976c9f28068b33e85a40` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rounded, State=Active | `a261a75371303e5b6ac914f47d93b89971db6702` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rounded, State=Default | `885a84ca05bd051c6c89ac89093653e1678b6c28` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rounded, State=Disabled | `a4ad5b73692949490fc25ae6a4d166d7fccb911e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rounded, State=Focused | `6e1bd411da56d54eebac7b81603f1cecfb555a8f` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Large, Corner=Rounded, State=Hover | `76d77c5d49a83dc0130b2ebde19c8b705be44429` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Active | `e9ac5b9a6148a6df4e75ebb5b35d85d3ba1a4d2d` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Default | `c74fcf59d55d957585a3100529ea46f3a8243f1c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Disabled | `599dc965bf662ff25836c56a2940067a02d05053` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Focused | `b3e2d62d8bca807ec83a174d0c90d725330ebe12` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Hover | `9f332e3f24f43d43e04a5f99cc6cc6201219573c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Active | `63f5459213dc000011f4a8db66414ae20938af9c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Default | `590dadf9694528481032faea5df5e6c0aec4028c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Disabled | `5478117b3eeb08a43514530f11dcb918d966fedc` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Focused | `811a93f346eafc5d11df1ab0c6f1d0872a201426` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Hover | `d108f1c2146c22cfe72c18ddf5550f136b59895c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Active | `b94573d9a1d8bcab703c48feb589aa5a82ef8887` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Default | `f146f7c9249d694d142884cc56dee7ce53dea561` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Disabled | `b01328f996c01e8234b84e9efec0e9579b9ecfa5` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Focused | `ece7fb148e80dfccbd27da4df8b7839cb4235ea2` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Hover | `a2c0761b01ae264dd078fed907f785099d1b4ae6` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rounded, State=Active | `194fd5d92ee827b3140c0231de92c02792bb0f20` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rounded, State=Default | `fd9049a2d1f2c4446f143bea661202dbd574c542` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rounded, State=Disabled | `fab9856a122ee7d7b8507fd9858727bed17db78a` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rounded, State=Focused | `39c4da643dd953311db52ac3d5654cb46e203cca` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Icon, Size=Small, Corner=Rounded, State=Hover | `47fe4b7d45f20b754622b39d7d92183d765aa797` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rectangle, State=Active | `f18034db7ff8e7c0721acaf8cc4b291ecf30d848` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rectangle, State=Default | `631210d9ced165653b4d5a55282aafdd097e2f85` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rectangle, State=Disabled | `f80c3f7f14f5ae84b496e52eae050eb508b8bd17` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rectangle, State=Focused | `e0d4517b7f72cea6df676eb6ebe313fcc9379b0c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rectangle, State=Hover | `384b2dcc67379002d042ed5a014491f7aec899f5` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rounded, State=Active | `991e606f7a5947286dcc7a839dab01ed268c98fe` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rounded, State=Default | `8a76eee0ccf6b8837a0948a28d8e0ceb1a298949` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rounded, State=Disabled | `42bfed258c18e62d312c3cf27d825f00313fa78f` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rounded, State=Focused | `71231b842c13ed87391a7adb3cf1461a18e2187f` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Default, Corner=Rounded, State=Hover | `1d6decb4c80e607977c3964bda9bbeecde95c285` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Active | `5bbe1965adff0f3e6b8df05f7c14a317eaa5333c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Default | `2db94b8b0c7dad2c9f46933b1af83e185d701ec3` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Disabled | `7098b80f133c6fbc5202b1f832c92185f9d668cd` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Focused | `cdf9d00d8f8d7ac14090ff28aaf1286006f07fff` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Hover | `7eb612df44e012a35a2dfb7685373dab8b67a478` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Active | `c63c73814e78db2a33510e2864f0bc227c3ef2ee` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Default | `dd89b71caeaab62fcd9344117be8ccc373dd38b2` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Disabled | `032682092bad395e243d03a1cc92ddb0b4dc2f2e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Focused | `b0b8395ff3ea3a15161271cde017e204624b0674` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Hover | `e5e35a7b8003ccc8dbd0e35b832779926bbde256` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Active | `6ab812e65caedb825eb1fae99f3258ad5ff16b24` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Default | `b8274447e4d2d267ce2623caa0b6325a45273f70` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Disabled | `096654906fc4db69be5d14827375d3848ad809ab` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Focused | `37f2b04da9394b4c8febb9e1170d6d3ed04dc2bd` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Hover | `1dde3013c142bccbf2414c9c1dc9d19a3a03de5c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Active | `4a0e456032863dff4642abb004ecd72d013ee715` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Default | `37a10b207e879a6147f0edd25af2afaa0c5aca83` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Disabled | `2a4eb4a17288aef9e22276f4318249f64fbda143` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Focused | `9033ddae98946db879f7bd925d61eb62e982be78` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Hover | `e0571fd44fb533b0db7e4f5b2cb756b4fb37b5d9` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rectangle, State=Active | `963fee756f99addd18abcb832fc666da51b84486` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rectangle, State=Default | `942ad1221310763cbb7c555ba1a59f6f97230502` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rectangle, State=Disabled | `f333460c9ac9e182a09337e8b335cd9de08e8e8c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rectangle, State=Focused | `4d0970a6fc5f2156e973a9fe46681057ce7d6e6e` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rectangle, State=Hover | `b59c39dc5da7ab35625856da412734590d082234` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rounded, State=Active | `fe0774f8aa5d62e20d05c6730c282ef162cfd175` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rounded, State=Default | `1e78c84fd42879c50f32096f2ecf1338d4c3727d` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rounded, State=Disabled | `39a9dbb6797a0669202d01d629b049d9e75dbffe` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rounded, State=Focused | `958ce70be0d43834b02a22282b3dcb6654f840e6` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Large, Corner=Rounded, State=Hover | `5577b9a3c41f73b98f013588cfc4daba8986100f` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Active | `2f0d015be8f7ec108eb84d8f00f23bb0d24d29cb` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Default | `28935eb53263b989b0a08c5ffaa6c70b0e77c830` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Disabled | `a5edfc877aab7937c7396748e889780541596d0b` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Focused | `634ee8274ab8cb6bec9f6f9f5227f827ccdf5883` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Hover | `b448fef8d1ccd00b123806ad5d1d8d82506535cb` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rounded, State=Active | `86ceceea8dac99e6eeb5744d32c769ac9770e07c` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rounded, State=Default | `16d56c21ba0a365f1f25e81aff23f5218635f9eb` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rounded, State=Disabled | `2409219fe45cb69f107e5154294a84093a184427` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rounded, State=Focused | `3db89158b13753c62b0b3fe0b28cf4a8311c2b4b` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Micro, Corner=Rounded, State=Hover | `5e8ad6f84cc0e043f5b732d4016e4ea889a540a2` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rectangle, State=Active | `3499c1138f356119fe6b984119af25bee623e6ca` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rectangle, State=Default | `23afd1168eca87019a88b08a5572bc48a33fcdc6` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rectangle, State=Disabled | `29301ad15a01e7f3965ff2d13313abbc10d74f46` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rectangle, State=Focused | `0de24c8a1feb345dca3797858f4768d20198a3a7` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rectangle, State=Hover | `c2446bd11b87c3d248e49c370ad22effed03feed` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rounded, State=Active | `9d56060c67fa3f3eff24553cf982706765087427` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rounded, State=Default | `1f2a877b232109aa548a6ceed91627bc45a69e9b` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rounded, State=Disabled | `2c51dc6092fd1ecceb56c66ef414f71ad3e826df` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rounded, State=Focused | `0e5b2272dc05fd021661fd38339e7ba47e46dacd` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Primary Button / Type=Round, Size=Small, Corner=Rounded, State=Hover | `e75c75a7302c8888bdc0438e87e681e0810f6780` | Variant，屬於 `Primary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rectangle, State=Active | `3067b81151d4a7c25768f643b32a65595138e538` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rectangle, State=Default | `04a2424b29a80f5e186dadeb68ac68d4d8bf9111` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rectangle, State=Disabled | `776ddf19ea69175311fc3ddc27e3088b89aaa022` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rectangle, State=Focused | `67702293888e35600ac96a45a780017f52e56ad2` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rectangle, State=Hover | `c769c6e4a54b1a6d6a1c4b080631320239ab3c00` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rounded, State=Active | `b461a4a60b7c72ad1e5674a112827dd7456543e4` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rounded, State=Default | `7fd2bc25656f6cffa9f2ca59a73670bb0d1e6051` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rounded, State=Disabled | `8f24da600fa0e537cb8a40938e47193619a93e6e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rounded, State=Focused | `1a79c54cb69d71277667a92b913247c8ade6d4bb` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Default, Corner=Rounded, State=Hover | `160f23f83e9fa08c88718eda00338c0b5ba21dbf` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Active | `9d23d34d34aac8f2f57cf92cd6527265c481a1b7` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Default | `9dc5b3b3fee5168bfa1d03acc63d9373a051b40b` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Disabled | `3a7a75dd260db8d4da52b34d31c224d3303e40d6` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Focused | `b1f8313234c3b873c5a71cedf236db43512a0c44` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Hover | `2071053bf36d2d3cd6bc8e898c1f8e910bd1870e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Active | `57bf4362da9a436a3811f15b8ce629c11370f24f` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Default | `eb195b7a192704092757016ee6426042dd92d65d` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Disabled | `57153be5e4a4e12aa65c10f9085497b920d18dca` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Focused | `c340201f0e0fbe1888956c12e1e4d6b479f74deb` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Hover | `c2996b1fe894c031b5846586b9b619f38925bfab` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Active | `0cf6b51c676f9cf3b7e94692c5f84cb0f2335d43` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Default | `d0f85395c5d7ddb39c7ff64ae2361ba5937441b9` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Disabled | `e14b25bfdd969f783e08c3d73426d686ac6edff0` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Focused | `4fbdabc8e5468bbd36cb045c45cf83e056318c17` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Hover | `16094bc31030f22799700a9e37c069b075763655` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Active | `b2c86ee87b5dc1e65fe6a658440f56c05fc796b8` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Default | `51d187d591855cac2580bbbe86df6aacbca2b301` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Disabled | `4d7725f33763323006f8db8582b4ab8e3970d18b` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Focused | `b88bf8a24d5435258dabf40f9345274c00188270` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Hover | `8933677ccc389b9bfda4536b3bdbd7b28e653809` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rectangle, State=Active | `447510156c97c13007300169ee93c24db706b26d` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rectangle, State=Default | `d64ab94c83583baf7c781388415720f72aaa7c04` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rectangle, State=Disabled | `8af8231b52fb8c542463dc738a7143e015bf5d54` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rectangle, State=Focused | `4447d820de6356ae4c5caba9c8c71cf0423e2a91` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rectangle, State=Hover | `1e5cb52acdca4e178f1d6c57f4e7c5736eca7fa1` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rounded, State=Active | `7ceb76ecc96c3d7cd519cf79b8a21ea6d8a18be9` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rounded, State=Default | `11697eb67e49a25c288b5a19e2b36d054849fff5` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rounded, State=Disabled | `317745088b66c17268c48bcbaad50a655334ae90` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rounded, State=Focused | `6828a9f9e3ace8fa6f47643aefa56677f706d4de` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Large, Corner=Rounded, State=Hover | `32dffb0c1ad81f20aa1d5f19c9b70e04fe936a0f` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Active | `8de88822775ba5ebd3fc45af93d391fadbecc51c` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Default | `cff6adbe88b5bc43b828187cdecc2fb640257cc7` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Disabled | `e1336c1918309deafb07a9b103cfe51b3a31be45` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Focused | `cbc5cd48fe407a1545b39a83a4c1595d5289db77` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rectangle, State=Hover | `0a71df7f2e18bb7aefac6cd6a931eecb9a41566f` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rounded, State=Active | `effb285992b0cb2c5acd4be6de29775a84fc065a` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rounded, State=Default | `e14197bff422deee01d135597614d56fb35ae9ec` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rounded, State=Disabled | `362d0cede0ca2bd01cfe083083255b7185fa8b52` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rounded, State=Focused | `9a5cc72481359274bd33b9c9085ed9d7c23341a5` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Micro, Corner=Rounded, State=Hover | `bb0a254add63b9026f9a1319c5fdc48cb5349635` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rectangle, State=Active | `91a988d8a66e90c163d76dabd17b8082d52bc21e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rectangle, State=Default | `a1317932a2c880cc8c039ff1c55df26094df845a` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rectangle, State=Disabled | `6b2df41c0169514d68eba8e1df5df51229782e54` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rectangle, State=Focused | `9a78ab70194b8c7f5d918ccd3180391f90a5eba0` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rectangle, State=Hover | `cc36f57c342e3b0eb1e35f42d938724460a00cec` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rounded, State=Active | `1956e0fc7fc5fc97c57bd6d7152412cad9c2b94f` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rounded, State=Default | `d3dbff77bca49a731c6fb1428720f8d65e9230af` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rounded, State=Disabled | `74e6b41f7e79aeb398614612fec47c3a5507ee2e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rounded, State=Focused | `79e1c80311973185bc753b6fd9981942a7c04dc8` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Default, Size=Small, Corner=Rounded, State=Hover | `e3b05051a4a4b43ede85e3c6b6c267417f3fa447` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Active | `ba11de510b4c54e8e09437f8f744da34d7b377a8` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Default | `53196504f1af52c0a781c9ad8ec9bfad67117067` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Disabled | `05ae88b83920471d2d196dff0025ccfadd1a0e8d` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Focused | `22ccbaa61b4e3fa3f5255ac447fe8bf80cb6cab0` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rectangle, State=Hover | `697203511041499fe312dff6c15db981b6116933` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rounded, State=Active | `9c5ea6469de0b9c1fc4dfd06f0765e68b818e597` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rounded, State=Default | `fd37a3bae64859583d76d1eec2980d11114be9b1` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rounded, State=Disabled | `f007ccf270c546a1ceda8fe4cb50a32465c38a46` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rounded, State=Focused | `477f1ed385c0e44be3d04e07548799d5d0de651d` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Default, Corner=Rounded, State=Hover | `369734262e6fadc5e95292d8c4d138c023cd4a12` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Active | `8b40e064bd025386fb73e3ba488bea578fa24f4b` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Default | `bf213d93701b24279ff9c3fa08077179b66ee5c6` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Disabled | `5c7dfd04160c712df3c22d2e022317030dd61f53` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Focused | `9162bc767a962d4a75ea870259d3b21b755a5baf` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Hover | `ee347c48685634c77eaed8d2715e0ca2c44599e5` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Active | `036924cf33efe2689037a66ba7c8e91d5e169ccd` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Default | `46b931a42ea8ff8a30bed840039381ae2842128f` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Disabled | `da37e08357b044ac90cd0bfb0b604f1002d63b44` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Focused | `ccde1217154bea03c976e0933bc9c187362d9217` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Hover | `6d486a345f84bb849d9575e030984fa767edbf8a` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Active | `1cb87c3534d1a09259b93080415b3ee0f768b423` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Default | `81d32a7b97f7509929332e11ee0cbf8e0040d3a6` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Disabled | `aec0cb50c155bbeb31481e8af78106c631894186` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Focused | `f9fb8954623d0b0014d9bf1114022f540c22d8dc` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Hover | `ebea00d2122c621bae74399d1b7d875f192a0f40` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Active | `bd6f444facc37b9f63d78491e552ad71977bb1fe` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Default | `f37bf897312e98dad1bb536fefa53f6630aac030` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Disabled | `770d3450cad24ed7ddd5ef1ab9706cad4ae7ec71` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Focused | `db187604be0523cc2d00a1514551df9d0239cb68` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Hover | `3dd48e01eb6a6d4ada15964841b803c50610bf18` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Active | `9b5a4de5ecf5a419d4dd5e31cf0f502529292f30` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Default | `b797d9126eb0ab009f2ac04e6df81ff12127f5c9` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Disabled | `2c4044181884ab445a11e9df453778998b53f671` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Focused | `26dae8ca0e52505ccf882394d9777f3e16bab13f` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rectangle, State=Hover | `1a14821626cd63f9ea0ace362df1b7438f90866e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rounded, State=Active | `7d088ad1a20176ee5be8cef78d3ea550f27afb04` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rounded, State=Default | `de742669fb9abf554359357898cdc3ceefed0648` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rounded, State=Disabled | `bc8da9ba7f92696220e569792d92561bb2e59062` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rounded, State=Focused | `6eab2b838e7277efe44d6112f84e194b8c5d643f` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Large, Corner=Rounded, State=Hover | `9db489821643d04424dd7564b719bfcff0ea59de` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Active | `34fc166f151cf8a1e11d5895cc938e93f8aadc6a` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Default | `03b7f98f15264c6de4f9e65b2e18e7a2b8a81db9` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Disabled | `7efeb26a361900e9a354574f6bd69b8b4f4fffa5` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Focused | `0e129baffae5dbf26ad14b0f93a42b0cc5f88f55` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Hover | `b9075239435ef191a013080d5c2b97390c38eb2c` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Active | `6e72cabca8d3b1e1b38b740130eda556f75648fa` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Default | `5ae17fd65ed37620547b7e0b8e811c435d7b96a6` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Disabled | `e89140a4f9bb1b83f4cabee3c1bbc1db1ecbc654` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Focused | `86374008e5c55ffe22f4725504817f61dbe40bb3` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Micro, Corner=Rounded, State=Hover | `de64af576e23275f8aacd5d55e5f4264b29e8bf6` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Active | `08e5231d3ddaf0c417a5f24d92120c148e5edaff` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Default | `8c058c77fd7b1aca4b85331279b6d66aad77e62e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Disabled | `e856084c1deffe527c31bd7490b1ed528c00aed7` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Focused | `1fbac580637f99d7979533aedbc44773e2ebb8f2` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rectangle, State=Hover | `955fa165a64523c53af75ce37075031e5075e736` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rounded, State=Active | `89f6d94b5dc80b934a95636083d7e82ac9caa5ee` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rounded, State=Default | `73165a05123ec9ca9ea77db093f13c76cb9fa999` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rounded, State=Disabled | `ced934e1352ca340aca9ff96d69f97f19cf70675` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rounded, State=Focused | `499b1bebc523ad6441964e4971895fc807107ee7` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Icon, Size=Small, Corner=Rounded, State=Hover | `0f75e708172df8f7265617ca9111f1cbd9dc3fe5` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rectangle, State=Active | `bfd1ff6f0f6d0d630b1cd6c3156da214f7caa7d9` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rectangle, State=Default | `a15d6d8a82f185a6fee698a29b967208020d5660` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rectangle, State=Disabled | `0b558ccc87c84b9002129a059b18cc479d69dd66` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rectangle, State=Focused | `9d91006c46da1a3a3da95f1b361d74ed4f8e3906` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rectangle, State=Hover | `159d971d5cd83fe759873d8b4a32b74515067d4f` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rounded, State=Active | `6698afe15c0bca5bf645c56d102227c088d90432` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rounded, State=Default | `137c61c7722e82eb0d9c8bd28e53a266cb2ba4de` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rounded, State=Disabled | `1ccdd00453624b414f2dc67eb9a6f3f8d84a9ba0` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rounded, State=Focused | `3946136610fd231e0e817d13e6cf368faaecd501` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Default, Corner=Rounded, State=Hover | `3350c265e44902354357121dddbc83bddbc3d8ca` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Active | `3687406e9e34c75057749e216dff03d882477f7f` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Default | `06aebdccfeadbd6ecee26cc0b7ccd6ed8baf77e9` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Disabled | `0d4122736cbea373248a9e8a27537b4bff1964b3` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Focused | `593db44566be967475fab81fa732292cbd3ceb99` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Hover | `bce8b67c888d7ee3a4878ca7340b821a3d755de6` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Active | `82fa13a24a3a7169371af60131701efce76c6aea` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Default | `34dd2748e0eb5bbd646348b2fd6a30b4a914bf91` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Disabled | `a00e63aba1f9594145955ce18ed905d6e74f73e3` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Focused | `80cf75365c433710e9d23d92fae5b9012f6b5f9c` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Hover | `5ae1d3d5cc3594f161124b8f02a6df4e95cb911a` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Active | `05420229b9b014d08501083d4bac60e1fd81c5b8` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Default | `82f0dc7abd252fcea26046ccd8bec472b0b65703` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Disabled | `4ee70368203ca2690f46c6dd6699a02ec43a54f8` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Focused | `a66af78d1cdad57c6c39983ceace54189fc2ae8e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Hover | `f141e472ddec99c9801535ed619c14cfd9386720` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Active | `03e14c57656aefee48bc94daa8841d3cc1e37ea4` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Default | `0177164e39b1729fa1fb55f87b078bd4d82ae3fe` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Disabled | `9636e569dd137f71bc905843733f5cc26cf90f66` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Focused | `84b446b2bbcd5eafb45e42ef96b92abd68e0b287` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Hover | `ce73ce4de3123cac12f015914d9ae64cadcaa970` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rectangle, State=Active | `a0074724b2b0dd56f7114f4880d050b73d2e5c7e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rectangle, State=Default | `18aa61c1789fed32387e6b0a465d1ae3df0fd3d3` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rectangle, State=Disabled | `35d3f2ec0f410852a38a682673ad35fd5a507d05` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rectangle, State=Focused | `4b673906034a42136fde4214d3adc859c729e099` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rectangle, State=Hover | `91064b3a2e744e8ccb1649b6e5d96218174b4a8e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rounded, State=Active | `401169909cc8799f13d24edb986157296460f439` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rounded, State=Default | `835a9f7728f52d7870e46a3d54677119aad62db6` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rounded, State=Disabled | `47ac66502f76b59c5a433433c28cabdd66e3ef36` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rounded, State=Focused | `96d378b2d98f476e2097766a751cb8774c753d1e` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Large, Corner=Rounded, State=Hover | `9a76131543c147d08ea9db3657013e77c7a3bc10` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Active | `f3220e08f066d973cef14f856a08d63e60f1292c` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Default | `10fa91d011f184d5f7ddd0d395172e2b5f5406cf` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Disabled | `2956307283318d713b00ed4c7a3d0df11ee570c5` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Focused | `d34c7faedf953fb24ab1554fd295faba81768933` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rectangle, State=Hover | `d910c5f933bcff0c01b68ecc8c0a00a52383f421` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rounded, State=Active | `49852bc0bec91959a634d2877e2d4bfdbed3076d` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rounded, State=Default | `0d272d72557a9208fe8e5fbff930b7f22fd5ab55` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rounded, State=Disabled | `0303f7dcbc7308fd5bd1e40bae1c9adbaafc62fa` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rounded, State=Focused | `9d83aa358adafbe993e1ff2ca0900a13aff58e54` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Micro, Corner=Rounded, State=Hover | `27804320dd4b3163959a8bbcc861e42b1dbfc7ac` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rectangle, State=Active | `6b6087cd07cfe1b5a2d438c94b382c276f6553db` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rectangle, State=Default | `ed1e04cd13b5253be9461d8342a88ce458697de9` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rectangle, State=Disabled | `5e27b95b572bb1b1f336777ba98d814852221306` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rectangle, State=Focused | `32fa3c8bb834eda8e05c17ac064f6ce1f5072515` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rectangle, State=Hover | `a7b6013e1f9fdf6f1d9068e7a2b6b05c28813ab8` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rounded, State=Active | `cdac988b3d99b6a3f375cd933adbbc5459a29e94` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rounded, State=Default | `54eb604e52ec58bb3956fd3cd8bca51bc5c9afc0` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rounded, State=Disabled | `679cc8e08c630f5ae454619aab2026de8e64fabd` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rounded, State=Focused | `b3179974912e5d67ddf239111215ed1751b5ce0c` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button / Type=Round, Size=Small, Corner=Rounded, State=Hover | `1ec2d135c4a69f96f9043ea49583f7f5586bd514` | Variant，屬於 `Secondary Button` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rectangle, State=Active | `4b122f414adf777b127ccf45b2621ee3e6da2053` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rectangle, State=Default | `0b5866d7a9c864a31898a391d47cfc47f15f158f` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rectangle, State=Disabled | `d22cf2b97ede6ddb35f1cb4754086392790bfc57` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rectangle, State=Focused | `8f9467f1df3381845181a5deaacef05b883e3ade` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rectangle, State=Hover | `06e3169fb188fa1a5607a023f41cfb148775f03f` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rounded, State=Active | `5ef12352fc3dc8db1e0f582bbc344637b5ec1063` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rounded, State=Default | `3753b4a934c63b7ebeed54fd4032cdbd6ad94740` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rounded, State=Disabled | `195210a516d21b3518f65d9fd9259b7d9f301649` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rounded, State=Focused | `a8f97f8d61821a2dc9e72022f9a4f32319992c07` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Default, Corner=Rounded, State=Hover | `b4bdcdab48fdbbc8702a9078b5d512196d335d23` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Active | `dbb992b0eba20a5b480024c5567c46b975b81063` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Default | `0829ba819f0ebebd1f0ba9aaaddd014f000ef242` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Disabled | `f8d02a4f45c019bfac85193f644b1c0acfaf0dac` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Focused | `e78f07c59bdfda13655c476b92962c6b4ebe20c1` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Hover | `eb8fb79c25270489e82afff7223c8efdf3cd02a7` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rounded, State=Active | `27a82b5959e77ee023961de33ab50a3e68284cd9` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rounded, State=Default | `a5b884dbe15d157d4634d51a03ca6244b165ecd8` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rounded, State=Disabled | `b70e00e0b99e1da6ad13b000eaf2be13956ad313` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rounded, State=Focused | `1b9d7ce7895af63174cd96adf9a0860eb4dbdad6` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Micro, Corner=Rounded, State=Hover | `fdf48e50d0da96bfefe95818f54adcd4e512ddc9` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rectangle, State=Active | `fa1072f79dd434570c785df23031040f1f1394ce` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rectangle, State=Default | `0cad3787c38110eca0b7624ad7e895b6e9c0acf6` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rectangle, State=Disabled | `34d8ff1dd780d0f289d1eba328f7015fad4c9c3f` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rectangle, State=Focused | `2d78d146904b86194d714e008374bd62bcaa9d4a` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rectangle, State=Hover | `6f1c40533aa5a081a11b97d78390d9757ac1a43e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rounded, State=Active | `9bcd297713244d57cc1b4a7ea9fdd81ecdad319c` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rounded, State=Default | `6bc02e52cf12138aa4c5b9cac62d7486993a50ff` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rounded, State=Disabled | `3d16f57185a063ca6160ceb348daf93ee4ee0f5b` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rounded, State=Focused | `db39d96a1e710d9257cf60cc288e0e710b33b80c` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Extra Small, Corner=Rounded, State=Hover | `be0108692cd0c19a3deffb5dce2c1fcc89916a22` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rectangle, State=Active | `4b59d30b1e687363c9697f2664e1d2ffafb4ae25` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rectangle, State=Default | `67b090d570de2505b3caf2c35a33fbf1fedc88d4` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rectangle, State=Disabled | `dac04914f3c12cf791d3b0c5067ef1071b4e4ad9` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rectangle, State=Focused | `84a78de5e0aea8432fd35a48ca4defb9d40c3419` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rectangle, State=Hover | `d0fa6a0f69f2c88870be4a7b5c9ae2a41d5c02ef` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rounded, State=Active | `52951c4f8e5a72b28e4b6c6d4a5a9ff946116397` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rounded, State=Default | `725127aea79e3e2aabf9de74bd270a85dccdd192` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rounded, State=Disabled | `61561b8d2a2427afcca5bfd133779ef6b6f8c95c` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rounded, State=Focused | `bcfa88494461cb14eb2d14f1f45024b8030b2469` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Large, Corner=Rounded, State=Hover | `92773c9c9539bd4027a180884d7a18b12a0b8c2e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rectangle, State=Active | `45ecd40b170b2e455a01ccdd88378cbd7ad7d83f` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rectangle, State=Default | `22d0348c4afedb817d538770b2b09db7def43c22` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rectangle, State=Disabled | `595e3999064d383a4cd01c94241fccfa406ba7a3` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rectangle, State=Focused | `a2ad07131178e799b28eb5652fb3d5055bf13fb7` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rectangle, State=Hover | `9d8da938b73d8900f5323cf3ea4957cbceac8933` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rounded, State=Active | `a9e4017fd7960fdfe9ae3ba25a7650b7c2b49628` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rounded, State=Default | `000cf82d7cf78cf065296a827613212c40871e0d` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rounded, State=Disabled | `02117d33dc8cacc9fb9f57f0245d7507f9846388` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rounded, State=Focused | `bc36861b584b3f0af7df9fe6fd7c3aac14c9f04b` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Micro, Corner=Rounded, State=Hover | `65a2f0781eb05f62a1926c9c30383462893b3f8b` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rectangle, State=Active | `9bf48b1b21fca2b48dbbeedbd1d106b5a23e2692` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rectangle, State=Default | `8682da03370db09c4cdf6383e53d9b51342a298d` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rectangle, State=Disabled | `5435983c122d750bae9f3674c633397006a677e7` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rectangle, State=Focused | `c3cdefd946378a8e65726bbea6760b494d36a908` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rectangle, State=Hover | `efdea1da6b1a36a3f0fc59c72e3049cd5ebf8cca` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rounded, State=Active | `f21f686048df53a0630821a19eb2adc8296d0596` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rounded, State=Default | `88db80efd8d3820bafba97f49f18cefe8f92a27b` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rounded, State=Disabled | `0456a771cbf2f786140abaf3e9f07c289e504d5b` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rounded, State=Focused | `6924fcc9aab54b368380ddeafbaff304791985fa` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Default, Size=Small, Corner=Rounded, State=Hover | `c6b6239361d7bf36b9247b94c4f7dffbb91858a9` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rectangle, State=Active | `1bb012bb57043f08a4be54448a52e3d207f5752d` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rectangle, State=Default | `1fb6217b8146d1e7860d7de99a79e7ad688fdc8a` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rectangle, State=Disabled | `14fb8eefcaa69d8cba4e7939f7cfb7c7e11d9144` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rectangle, State=Focused | `d53871f38fdd1cba3417390a7ea9811c9cf1fd9e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rectangle, State=Hover | `4c435e7857f498db085fdfb603713543de4f8a93` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rounded, State=Active | `88c45dbd9b191ac24f3cee8fe415b08165eac0fe` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rounded, State=Default | `cd891cd583ea1bce6053b4c5d0d7de6d47e6e63b` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rounded, State=Disabled | `2c0744d1b1a6516476599be489e87caf32f62ce5` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rounded, State=Focused | `d3adfe395b835cc0f156e89533ebacac62aea384` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Default, Corner=Rounded, State=Hover | `3d139ba2c7dbee38016a367d59e24e3026c3a6e4` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Active | `fb1f6439d9e6e133c1b967e13eeb59a8ec5acd32` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Default | `80ebf82c41151680580d902cb52cb217705555a5` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Disabled | `ab811ed4671f258d7b2b9680333f3fe2a44d4cd1` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Focused | `dab3dc2825675f3b58a384a2519e4c5c2aceefa4` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Hover | `dd651d511c7b08f19a7b25664e1a3e417345f444` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Active | `867d5e4b72919a6c80a036877a4c6364568cf68f` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Default | `68a3525f5835db2806577277c3923bdac217a7ee` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Disabled | `3208be66d837e869043ace67647cb4bd9d255788` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Focused | `3387cc08601d863bb9babfe435ff1474ac3f480f` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Hover | `183e8e3493a122c71f0ce46f759da83982841a91` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Active | `0326d9be37c7320fd7699b40ab2685815bb93201` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Default | `24f6b58436265e0f981c61940110f7262d9595a8` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Disabled | `8686d0d76e025939f224f6fb7bb5dd173b27c7e6` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Focused | `58290d6b5e760ef0f3782cac16e60f64e7a534bb` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Hover | `4192bae78280d7db095c3dfabc3276859b671cf5` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rounded, State=Active | `e12f28e62ee661297a47381f30766ec2a2846269` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rounded, State=Default | `dc9f34cfb080d5a47bb62c381df7fc0990c364fe` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rounded, State=Disabled | `44f628f28c9b039c22097c93aaa71f1c45ae3fac` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rounded, State=Focused | `d562d50f5993d6356f023bd10c0fa19cbeaa98b1` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Extra Small, Corner=Rounded, State=Hover | `7ed2109c4589a50cc3d2b16ea44381bfacd536f0` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rectangle, State=Active | `b14c3e0907abe84cb83e222836653d741a016c1e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rectangle, State=Default | `ab02a97fc35b395d120a4d0b97ff479c210c8bab` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rectangle, State=Disabled | `bebcf4376115471e2f4c489bd5507caf65c36152` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rectangle, State=Focused | `8dd8cd33bded002d7c8b4987361cd143b96ac103` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rectangle, State=Hover | `889d2d773c742fbbb72dbedd669752fd41edc67c` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rounded, State=Active | `b5e4a46864350f36da646ae5fd05f7a665bdab5e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rounded, State=Default | `400aa7141986edf2516f0043579c45a3bb2087c9` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rounded, State=Disabled | `d8d3a541491215f7526068c84679d25a8cd6b884` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rounded, State=Focused | `92c60bab247dcdc97cb541655eb4512006e297e6` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Large, Corner=Rounded, State=Hover | `5761b5eaa143db9c262d47a4b086e84c4522cedf` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rectangle, State=Active | `d13b8ba7ba22b0431b362bc4ce351820df7e9641` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rectangle, State=Default | `6dff3ee27749cff2bb81d7cff9b32fd9f57867f2` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rectangle, State=Disabled | `1de2573935f1203dff46fa43e98ea8f71ecf003b` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rectangle, State=Focused | `a4726f8a0d38a04078d64c0534e33ff25860b312` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rectangle, State=Hover | `14075a66178bb7bc77047fc8d403868944f54a53` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rounded, State=Active | `6615f5a0400cf975f2129e88879fa7b6be6285d5` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rounded, State=Default | `cd0b873667a188746a31ce74ddc22bfd33c63035` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rounded, State=Disabled | `d1bad350ad267ef899a01e24847a292e37595764` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rounded, State=Focused | `0cc6b19dce1b0a2b23ecfa4915e290d201298af7` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Micro, Corner=Rounded, State=Hover | `99766ddfb05f87ac9eff3ee29bceb2811a2622e9` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rectangle, State=Active | `ff43631feb84413c8e891fd7db70609c894ba124` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rectangle, State=Default | `0b944f53d895eaad61d942d96ee7adc85a43427d` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rectangle, State=Disabled | `8987db093baf6c92b6afc96f926f87dcaab001bb` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rectangle, State=Focused | `baeb261e047a029de0011b0c23fdfc2540763954` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rectangle, State=Hover | `eed6962e16443cc2438dca87dae242b9cc574d33` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rounded, State=Active | `e2d2b38e6209944daa5d49f64ee0705dd73cbde7` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rounded, State=Default | `43e4214c647644a2b88b87d344757f473c29be5e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rounded, State=Disabled | `f2487a1285ec607f4b50ac918005e8afe4e47193` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rounded, State=Focused | `fefbd8b8bb303927293a382ee9bd89bb3b3eb742` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Icon, Size=Small, Corner=Rounded, State=Hover | `1df4414924a086fe9f96b918695f1aaff99ef138` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rectangle, State=Active | `ec77c553d3564b6443aada8396d123da48fb40af` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rectangle, State=Default | `2780daeaa1392584f4aac5648658e41d43336287` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rectangle, State=Disabled | `798d5a8fdab01f52156ce07a803eb0bb8a626410` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rectangle, State=Focused | `bab030ff7bfc0d1d5cd357f4fe3652385cc11752` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rectangle, State=Hover | `47c7c067c950c92de233a44d2300e33d6042f5e7` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rounded, State=Active | `df02bab4d535b042acb16a912b0a2418af89951d` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rounded, State=Default | `c15e1e0aca402d82a1688cf7f68a5c14cff3d857` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rounded, State=Disabled | `13f06ac3146a2c75651c21ee6e121505e77d6267` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rounded, State=Focused | `507a814ff9cd947af1dbedd5bb98b7e45f814c1e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Default, Corner=Rounded, State=Hover | `e60490c74809c2839e1e2d0ff6a6dba99f8de627` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Active | `9297684622cdf8a85e4c4d451a81e52594801657` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Default | `c508f0e1d92306c2ef86ba03cd79a499a277ad39` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Disabled | `67078ef47b4f28f8985e96b3e83d0c0642c438af` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Focused | `1995437e632fe8e4a4a3410343d29256eeca943a` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Hover | `7f9e05fb4539693c01319e749fd265672f20d3b2` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rounded, State=Active | `87b892d2268a55dffd76e40ed62f70998cec1044` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rounded, State=Default | `b9047d006aa92522162019a8ee8aabdd60942a03` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rounded, State=Disabled | `e90e5427d1d6848abc686b0917d5e2c2d3dd787d` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rounded, State=Focused | `cde7c50329391175af078335cda413e5098e007c` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Micro, Corner=Rounded, State=Hover | `d24694fa3e2f755f9666b8ce3d998bfdbebc761c` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rectangle, State=Active | `d3a68a83787604937a8a23ffbedac0246f6eb2fe` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rectangle, State=Default | `95d1e729dd52bc84d78f71da22909d252c753fdb` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rectangle, State=Disabled | `c40517d3d1c2311e450e2e97d340f32d8da78049` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rectangle, State=Focused | `775c753564eb0b24fd313b238cd1b9ca66e0accd` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rectangle, State=Hover | `19367bab3cf61cdc1d66b15dbeb05aaf78119494` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rounded, State=Active | `4e9d198d0ea7b6c43b1f04a7f4c0cad7308577cb` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rounded, State=Default | `086cdd171e2b949ef2710500689a2d70290dd038` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rounded, State=Disabled | `bec65e6e64433cbc87baeed3849d6ddd5504d6a1` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rounded, State=Focused | `6e5003ea383f57226e7183e332a8e1f16ae8d3f7` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Extra Small, Corner=Rounded, State=Hover | `a908d3b0736e03b6f1b14430d323b1ac4c7cb056` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rectangle, State=Active | `ea009f45568e9883678c02f6b831c911bd3d5456` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rectangle, State=Default | `82b27fd34e3a29626d7388c4daa59cf45578654e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rectangle, State=Disabled | `952047c08c05ccc5273f53e8b28eebb77c0e6b2e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rectangle, State=Focused | `d853ce2557531fab9e5494b752f9c3994f3577c1` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rectangle, State=Hover | `da312a798bac2fee14674b4a18be89cc9d1e04bc` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rounded, State=Active | `7889f2e4770b714f7a346303cdc2b204ed5e95dc` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rounded, State=Default | `c5d37fd0fefd9512c7730a0de2d5940188d9bedf` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rounded, State=Disabled | `b5a11045b62323567384251e8d99e25e9c2d1270` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rounded, State=Focused | `93211a434b2772ef9bde94dbf3020ec648b7359e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Large, Corner=Rounded, State=Hover | `c4ae063e43ad721b5316901db2268cf78c0345c6` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rectangle, State=Active | `7e508c3c0d82adc381fb435bf978a3391a74074e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rectangle, State=Default | `cd0b0b4b6ab03fcc4c00735bfd208bfa7e3adad3` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rectangle, State=Disabled | `222931dda8f43027421811a45fb598ae708e339b` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rectangle, State=Focused | `442d04d6c8eeaf2ff13efb29ab21c5ab9b0975b2` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rectangle, State=Hover | `81efdcb9011c137ccef8eeaabba11ecd84027ad4` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rounded, State=Active | `0cf90a5c164ee70d192f4f87e8c4a0eebd5b020e` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rounded, State=Default | `2737f543dc861e7bb2bddece433a0ce4962dad01` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rounded, State=Disabled | `0b4eb160406e09be078df0d5194e4b5b570fdd54` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rounded, State=Focused | `3931afa5d6121eadc628e9b58bbe01ddf55a31a1` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Micro, Corner=Rounded, State=Hover | `1dc1a27707f90ac8be3467feea168be703311f5b` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rectangle, State=Active | `e62bf4762b71fbc505ab1f551c19003c945a2a2f` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rectangle, State=Default | `5be81e956f41bd9cadfc7652a2d29eee4ddf663a` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rectangle, State=Disabled | `91249c90e9dde28ea46955e977edcc9d2c348bba` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rectangle, State=Focused | `d2c6bf8c9eb08f53d57c45b3f70e591c35838984` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rectangle, State=Hover | `f943e04b0a62748d316e10e9a148f5d28b6b6ddc` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rounded, State=Active | `8518f5b1f96e2e0f3b000b3d6766a983b4db0661` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rounded, State=Default | `01e6386f2cc3bac2711be030ce65a56ddac36ab3` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rounded, State=Disabled | `ffafb99e1384f057d0a6aea56796a79c34ceed5d` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rounded, State=Focused | `3e335a191f3ea97c8cfdc9dfd4d188d1704dbd83` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Secondary Button 2 / Type=Round, Size=Small, Corner=Rounded, State=Hover | `24ac1f3dec1a00b5a83f885a7f611fda83fa853c` | Variant，屬於 `Secondary Button 2` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rectangle, State=Active | `8bf8d77b9a9deba1837774afd84ec2463f77fdde` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rectangle, State=Default | `4829122ae64a30167bc823ca2aa46b36eab6011e` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rectangle, State=Disabled | `653bf444caae6ee5818f5578b42fe8373e1a94db` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rectangle, State=Focused | `1c8ab7d449e407cab9361fc0012b166b927c96e5` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rectangle, State=Hover | `01d53e0cbf68dad1a4dd99cb1a7be89a45c2e661` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rounded, State=Active | `fe6a4f38e12fa4992080e06daeb43d78d8939431` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rounded, State=Default | `f991be9c680dc576fda328c5fb2ee0708c844289` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rounded, State=Disabled | `05aebbb911f97d8d85683c642b00706dfabb7b9c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rounded, State=Focused | `fcbe92fc29a37e00b0ac2832d26513cfb7ac3a20` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Default, Corner=Rounded, State=Hover | `278e12edae8e2983abb5380c68c70358d41fde05` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Active | `b244ebc81c33867cf923cb1e723d9ac8cdebb68a` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Default | `40161bdde6944ace5f909213c3670d332f24df71` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Disabled | `33eba4eb2a71dd8a9e60c164cbb45511f289790d` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Focused | `fc0517465e8c3116f6e1fc0ce6a8dec14ade8cfb` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Hover | `632bf4ec8f984016044c33eb6a18fffb916c74cf` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Active | `2fbaa96d2e00b4f9114423a6361c10987720702d` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Default | `7f4fc9bf176e994d4f2e3aff11e729cb232d7a2c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Disabled | `f690ac46aceb3ee4c75d8efd5ced090e990d20fb` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Focused | `e10dba36b877d29095c0035985954a28937a9c46` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Hover | `388695d97b95a35d64ead1a6b56cb8009216b00c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Active | `f151307f7fd907da8aab47e58be6ad6519ca93f7` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Default | `6b05c532f9788680eed1bc9897e11e9b9d57a28d` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Disabled | `72f80204899932100b0a3756fb578bb4b3a4b39a` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Focused | `606b8adb670aa85f7c9248868b733394a97ec569` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Hover | `ebc0c880e8fed0bed475910b73e5733e81f9a7bc` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Active | `553749bd351627aecce45526259d72774b69f45f` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Default | `e87667ae17ed09ed24a1ba5d96050c5ab4390ac3` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Disabled | `6db069ad3c3a688e676fcebe055d57129abd9c82` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Focused | `a72c916e9a1683c4d09e048c825a4d66d52ed8f0` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Hover | `691fb1a220a88ae5e1effa36b86750a75ba26289` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rectangle, State=Active | `b493d73855ba8d49da73c08f5c705aa15bdebc1b` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rectangle, State=Default | `7e0bc822cd9e51df1d7f428e28e5bf5e2cf6e634` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rectangle, State=Disabled | `6609f5dffab59d4bcf01f5b28344b864497d2a5e` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rectangle, State=Focused | `86916b496f16a7532d3bf3040ce876732090d6c0` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rectangle, State=Hover | `e151f369800d55f78eccd9cff280271f95d8033d` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rounded, State=Active | `2b7e43fb7181f09555f597cafcae0d3b8f268809` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rounded, State=Default | `19f31ef50ccae469b64026aaa035bada277b94d8` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rounded, State=Disabled | `1b4a19fa010db5aa4a3cff87dd9143a4fe553086` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rounded, State=Focused | `4754b56d448c9f5864781632ddd5ec22bfc5c1a8` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Large, Corner=Rounded, State=Hover | `e903a7a2dca2e6c27dfe366cc00e685ac7a98863` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rectangle, State=Active | `3f06886736e4b7cd2f3f029a97625828adf07605` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rectangle, State=Default | `05ce3e408543849fa365bc46a6e1bd3a68cd60f7` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rectangle, State=Disabled | `16553592a1e2fa0988e6a082ae5ff3c29d4b04b6` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rectangle, State=Focused | `f68f8d3a00698e656fc67d120f1fe0b9382ec906` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rectangle, State=Hover | `ec68ff053a90a96d0f69eb3cb1daab88e69aa220` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rounded, State=Active | `93e1e91dafc467510692c6ddfe6b52c40cfdeed8` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rounded, State=Default | `8c2fcee75c7484e96bcebf6cdf0b1c1572a329eb` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rounded, State=Disabled | `ec5215c9a3bcb6972bcce338d41c7c40bd6e499b` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rounded, State=Focused | `294af833169a90049662a241783423dec7d5b292` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Micro, Corner=Rounded, State=Hover | `cc43409e3ef7de8058c22faa5fd2e4890124c222` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rectangle, State=Active | `c1e122e58301fe2b9f1d6eff34c31a836fcc71d8` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rectangle, State=Default | `854d8ade170c6eb6427256c1bd2dc79dcc52dc71` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rectangle, State=Disabled | `20b466bc2e1fc0a26510b26acea8c8185e2b3767` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rectangle, State=Focused | `ca3a889e54045f706f983010d08370b8266bfd7f` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rectangle, State=Hover | `79313ccb2f3014a71cc54ce6c7e3214c8eb42ae5` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rounded, State=Active | `2c067917b8ec9af3ddc997906e7dd5a573f72cb0` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rounded, State=Default | `a661eb168768ab321d9bcc8a80ae70b3a434002c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rounded, State=Disabled | `3bcc8d0b9e3c96c0c7bb04f754b06c8893ce7e8d` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rounded, State=Focused | `50c350e28fe26db1947ab6979fdfee87270d18ee` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Default, Size=Small, Corner=Rounded, State=Hover | `9695d398e0a2d450b9a97680b8c4488bca0c77b3` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rectangle, State=Active | `aab02d7751cbe4447c1f83fa661723c0d3e940b4` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rectangle, State=Default | `6d6275fa13cdcfbfb925d82339b01052f55cc30e` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rectangle, State=Disabled | `06b0ffa2af514b187c2515d0d9b9e33d7f34d035` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rectangle, State=Focused | `4fdf7b52c615d9412637e0b9422febda37922576` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rectangle, State=Hover | `d216530802fa36369f8a4ae30eb5d3b99092f89a` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rounded, State=Active | `9c47629a1866ac9a380caf1d2cf11c9cab4b5363` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rounded, State=Default | `7495b283e87f42f15c871acaf321080fa488afb4` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rounded, State=Disabled | `e7efb31b5375b6a59874e8ea2a3fea8a30f67f9a` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rounded, State=Focused | `8fd5b97ca6dceced1d39e1f3d633b39c1e236442` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Default, Corner=Rounded, State=Hover | `726e8c3fdc89fb98fd25c98964b9ae327523f482` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Active | `1365d5fb7c2bab2af64a7c1b9fc5ab8cf51c6a0d` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Default | `0d8e442772969982526112770b89be41d72b1c2e` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Disabled | `3c7f932c87b04480fd0b006df10f6ffeacabc602` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Focused | `528b063920a16ba8bb0065040de97a1adfe60a37` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Hover | `14a7ef42400cf03c3f7cb4e79dd9e44bd2a7cf73` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Active | `54ce40461885f03ba63d2ab79f143f2237f9d6a2` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Default | `ce6ed0689ad00e4a603faee002463c02e01ee548` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Disabled | `63c290c41e8414a2208763138a7c5f32ef234511` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Focused | `845cb4659152856215f6ef3238ade8a1db91815f` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Hover | `43cb545d143ee8936330677b17e0ad501f52ed87` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Active | `21ea7ce9fcb169f729b8d2875358c3270aaa392f` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Default | `d826eacf243b6b075b0830fc895fa2cf3a5f2558` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Disabled | `3b281c200642e537c62b289f8d67374bb18fb1f7` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Focused | `edd53c0b53763219f43cc259269d5e5d31605cef` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Hover | `957974ad1a6e588e7a2c9471f821ee21b9b87f6a` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Active | `fafcab847b0d4743b4ce50eef7b5abb50b622684` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Default | `dc6b90867c46c68b48f0a6f155fb33237034019b` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Disabled | `5db02993748c96900b0d8e0402ddc872d86adfe2` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Focused | `98e4cf548ddaf0e73efe607674771ce9b01465b2` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Hover | `926d8055eab491b3f360e80a2cb5cf5273f62b51` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rectangle, State=Active | `7408637efe9fcda2f71639397430ec73bffa8b8b` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rectangle, State=Default | `ab1540aebb7b1e80fc615fd8dba86fe52384c90c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rectangle, State=Disabled | `221901561fbb2860f4c6f673b1b44f27c2af3231` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rectangle, State=Focused | `06f5a315dbe090d8f4a51c83d61755c7392ede3d` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rectangle, State=Hover | `ff81b06cb4fd24f6cf8c2717bb94d927687275b4` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rounded, State=Active | `19f4c80078d7c60f1cb1a17b502e84bd980447e7` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rounded, State=Default | `e74b2c048d2a498e830c6ab089be58e1dbdab2e7` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rounded, State=Disabled | `f1ab46e6993bcee9532fe2bf6346d3a818d65fe5` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rounded, State=Focused | `9bc474cdb90f717e9e2735eb410126e9b00fd02c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Large, Corner=Rounded, State=Hover | `84f970de61f86582071f3342510e12e7ea19bde0` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Active | `cd9482f20730c66246b6708f6fca27b0860b0146` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Default | `0a519ab8992c3d333dea370f8bf2402ce31a93f3` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Disabled | `f78cb15a5ece3564f9c10845344998eff627c67c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Focused | `20fbcf80c9a65e16edef61fd809fd4e9ff9f7c98` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Hover | `6515b6a5a3eb806d84f4193499faec8913e7176e` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rounded, State=Active | `aa211b10fd89d4e038e2642a06c3d926cef22206` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rounded, State=Default | `32fcfb5d478998675fab0202af6784ecbbbdf9c6` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rounded, State=Disabled | `2105d789b0d71f5b7c9ac055a32749e9549edaa2` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rounded, State=Focused | `5cc98c8a5b3384be9d545b890881fe6314ef8c83` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Micro, Corner=Rounded, State=Hover | `e569b9de9daaf5195fb444c77b8e611cac43b5e4` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rectangle, State=Active | `15ec5e7122491afb4ffb5c2f032c1c0f403c3925` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rectangle, State=Default | `f212e2b6be4c974e0bd66b1940c23da371af73ae` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rectangle, State=Disabled | `53d0ed4e8d1da397a88fa555928c3dac209eac72` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rectangle, State=Focused | `fc77ac7030eda212dc98af906bfda53b29331be2` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rectangle, State=Hover | `72738ca07cd160ff6696e379eed15b536e579b73` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rounded, State=Active | `8d59296df6d1bd76db2a6b3e6b3cd7159f4f1f9c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rounded, State=Default | `c122ba0471d8fafe45f108d9fa2ced3a1a33badb` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rounded, State=Disabled | `2852be7adc23dd26d88721ffb61db8222a79e75b` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rounded, State=Focused | `6c9f375fd62cb8d42e5317bb20019848be0fa296` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Icon, Size=Small, Corner=Rounded, State=Hover | `8ee5aaa94eb79f8b180c253bf4c8dada8d035e83` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rectangle, State=Active | `d0ab735e668ef7e5c349b4ba82853f877d31b480` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rectangle, State=Default | `68cae80b68daf3fdedb9ca1495f08529471f6253` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rectangle, State=Disabled | `f301fe5ae34aeb7136f65272907a4c4c903b9eda` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rectangle, State=Focused | `52451b727f9859a9564659e49b750c958db406b2` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rectangle, State=Hover | `f24df9a55fee6e23b1007d00ed5a114643261f40` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rounded, State=Active | `12f33eb940692fb04e891d4a4fc761b1ec74884b` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rounded, State=Default | `d99971682ea415fd1d2e5f8b0988c4226dd20eb4` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rounded, State=Disabled | `e07cd3ad29fd59ea9fed45d17c7d743327d0e3a1` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rounded, State=Focused | `6d66414c246adde54d876464834dfb3463ce7b34` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Default, Corner=Rounded, State=Hover | `336cfda4630fd91745da9b99483921ce716a30cc` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Active | `32b727cfc519ec03aecd031d2607e3acce130508` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Default | `c1e1add426521244f72924aab6b234ed96e857e6` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Disabled | `67f34f0c00451ec2881a4a3d7cb86816e510c04e` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Focused | `a2c736cb60cece304821c25019d92bcb9d77344a` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Hover | `80b46d6609fe1f8c1abc45113ee6bf8aae4ab516` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Active | `65d125e7dc7a9694b22be1bd452319a83f1c2cd0` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Default | `185b4521677203ce744386b47432503df1a19432` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Disabled | `ae45d2cce6f1ad31e0d7776914e2e34c0b8ce908` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Focused | `37a76152233b354d73e130061356d98db2596e02` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Hover | `4e95e91af226890089ef91d97d23a296aa5f209b` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Active | `9f8b0faf9e08f12b3582eed1df4fc6a7c2c8da6c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Default | `c35e70bbd4a4f8afc59031527f8e8187df4c06b5` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Disabled | `4a2fcc6b061f5abbfc8531c64232493ed11ed5aa` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Focused | `68cd9503f10b88f3fa54c83f751032a4405bb18b` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Hover | `ad43ca0c56a99904fbaef7edcbfede049999f184` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Active | `ffea02c893a00ab49ca0493a5ea0096a6c5e19e3` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Default | `8257616fdeb89533abd68ff646d671f662a8dc7d` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Disabled | `f8c9311b445bea82519ce2eb0eaa91dc58827ed3` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Focused | `cbab8f083ab77385e0e03917bdf26734014f77e4` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Hover | `5d794fbed794c66bcaae43c4793866d8f61a113e` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rectangle, State=Active | `a0be061af9a20240e5aa1f0472035692c1cf1950` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rectangle, State=Default | `b6f711a0847a76b5d1b8f3a108398c85fd4b9815` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rectangle, State=Disabled | `766fd3c39b6cb15b10b6a3debda89fb06012d5a7` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rectangle, State=Focused | `7afff5c96e7ffb032ed21c8b40568b7ff367c70a` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rectangle, State=Hover | `47f8049661573c84c9a3715e81e1062efbfab175` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rounded, State=Active | `8e18ba0e6daecd2a85401bc756c5ee632fe48d95` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rounded, State=Default | `a8f006be855ca6a3ffe551802f30d349563b566f` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rounded, State=Disabled | `ed07f188d520ce5c6f5af5c93ba7aefca84d9bad` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rounded, State=Focused | `11b2acf76de71a90a44f150f11d677702cf57859` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Large, Corner=Rounded, State=Hover | `baa2b6b5e03ff338dae87f231da73564904a8753` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rectangle, State=Active | `667c921961cca26a7c33db4ed1c1367a8b45a6a9` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rectangle, State=Default | `5bed91ed0a9d745c0d120c57a780e472dd534a75` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rectangle, State=Disabled | `7394cd97d2e8345a7fb68c3396b1051778a440b6` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rectangle, State=Focused | `28a181ecc8c316df5419af2518a2152304593f17` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rectangle, State=Hover | `2d561bb94805a9f9355506a7c418298316d80196` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rounded, State=Active | `232fcca4bb4a364f8999e5fcb521cb6bbcb96d3e` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rounded, State=Default | `4c1faf4cd99e233bdf1c3b5d6c2d8b88ff046526` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rounded, State=Disabled | `5a6215589f826d49e098b6da230af2af0512ab28` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rounded, State=Focused | `3c790bff86334ace9d4948233dc0333808680aa1` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Micro, Corner=Rounded, State=Hover | `cf6c77d4a95ced3cc868009c6c3150eb5734635e` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rectangle, State=Active | `4dc4e2c2ed995d16ebb8d493665206ecc1b8b78b` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rectangle, State=Default | `07ecd8dc06dfa77c55dcb2d797ee294462c8f3ff` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rectangle, State=Disabled | `87710f77d29848e00ce6204bd0dc0af32bb4474c` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rectangle, State=Focused | `756c28576ca2ec50fb7eebc450a762e581704da6` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rectangle, State=Hover | `516644c04b2e19fc33abd46080337e5ebddbd175` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rounded, State=Active | `9dc5db88f24e21a82646938044508065530149c9` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rounded, State=Default | `7d9ea81c9490046bae7cbedaa9f3e1a688ecd918` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rounded, State=Disabled | `a563e73dd99b3b234b7cba3f13bf02f5ea722dc7` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rounded, State=Focused | `4539a0805ff165e1adf353128726752cb9835360` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| Soft Button / Type=Round, Size=Small, Corner=Rounded, State=Hover | `4ad4e1d93ccf22e441e47799a17da5cc18ca6a9d` | Variant，屬於 `Soft Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rectangle, State=Active | `a866917848f21050098f29495ea90247421111fd` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rectangle, State=Default | `3c0483f3d3cdcfa340096dd7189c0a57d64dad6c` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rectangle, State=Disabled | `d67d0a3cca2fa9066cf710e6cf1ce04e8c0efe50` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rectangle, State=Focused | `8690c541c4d716e9a09e439a4bcbc82d1b17b220` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rectangle, State=Hover | `949c680abfe3606cda00b56df9a48fd93c66ec47` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rounded, State=Active | `2231d1e66801b1695ae1b6b1252da8e74c50f585` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rounded, State=Default | `fb668e13190726b937e9014bdb5429dcab8b1068` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rounded, State=Disabled | `8e0f1a4f8ea07231c291e2a605c797e5b3798994` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rounded, State=Focused | `d996f9dc19f2a95ab93dab78f0cf62600faecaac` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Default, Corner=Rounded, State=Hover | `106b033a42b15c278f15d7c1cd3391bc8b4e5987` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Active | `55ced47f31496153399ccc619eb5b502dbf2a13e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Default | `4f4c228a28937ed356fed8d08563024ac3d69cb0` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Disabled | `60e7e9a3bb9fc58caa5b608957164e7f6a2fbe1a` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Focused | `969d9e54ec240b080f62124fc989891bd49c7399` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rectangle, State=Hover | `6683548aa877cc112d2db1c771b46e26865fe786` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Active | `9b023cdd2c5582724e9304aadb06d1ecb685d946` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Default | `38580f7cf3520ee976272652b18cc4c1870298ad` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Disabled | `e603a31f6feba2cc04e6c73a66c25f9a8b163175` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Focused | `f81978f2ddcfdf207c63bc6862de41ed19bf1d47` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Micro, Corner=Rounded, State=Hover | `a8c2d614f113c4e34f9ae32cd05eb35e2db3ea1e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Active | `cc12fb758512380b6dbf6ab021430ecf41723f09` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Default | `afbf22cda882b9cdd6c80576c888bf94a02c7f78` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Disabled | `1f6ceae679eb46683e5be0bf67fcc607c1bc2924` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Focused | `e69668c15fcf5363e081d5cbdedbc5cd839d29c1` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rectangle, State=Hover | `99cb9261f136cae6d26a979e0078c365d2f2fb26` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Active | `19516438137de62f95f63e00e3ca3d75c3caec64` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Default | `f4106311ed3efdc36e5739c66d4a33cba5010524` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Disabled | `4332b058c1f96b4789c7be9243a43c0b9ae211e3` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Focused | `1e9a671c0c6de772fc50a22dfe4f39b33dc35a38` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Extra Small, Corner=Rounded, State=Hover | `6143f4a8682e58cdeb82b38387270a0fa0d77617` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rectangle, State=Active | `278abf93a214420f5bbe80bd4c3f0701132fb9fe` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rectangle, State=Default | `6724dd41343634fee38b0d247d22a30da89655c3` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rectangle, State=Disabled | `3002534f3703a49325f33c2594840a6a36a2eef8` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rectangle, State=Focused | `4e7978a00bfc23dab7f792380675261e89a8276c` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rectangle, State=Hover | `d63634c31afb2090eacb4e7a22c46fae6bdfb0cc` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rounded, State=Active | `c29cdd9d73f9402f2e8d884d36e8b470ec39f7ed` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rounded, State=Default | `c65437809f9dfda64957694b213b016e350c4aac` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rounded, State=Disabled | `68f20df763ebd3706790219b29b949d786e6ebec` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rounded, State=Focused | `cf0936968e10084cee3216e76d2c03b12833a26b` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Large, Corner=Rounded, State=Hover | `3bbb3b82fddd43ae7d85b2783d04eec034d63fc4` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rectangle, State=Active | `bc01385274cbe61882c43c81be8dabff037e8039` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rectangle, State=Default | `e83674fa86015ef0ba2d97d52af9b5215352f976` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rectangle, State=Disabled | `35eed759b997f03575f02820dee70a760b84c902` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rectangle, State=Focused | `c3a7ca67de828c2543e64290e074e29d3a0e4929` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rectangle, State=Hover | `dd8a743b7ce0203f2c271e52282526f508984477` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rounded, State=Active | `35e162b4dcb37def29f2a66fc2711e08927426c1` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rounded, State=Default | `5443c80cf2354c3e8ff9097a9ba32c1180e41e88` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rounded, State=Disabled | `0d3bfa5a19de56009fca1f96a27b51fdce4a0b6d` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rounded, State=Focused | `137db57f42042b832629b611f72de86d9a42a514` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Micro, Corner=Rounded, State=Hover | `e083ae8fdc000e87aa5315acb145fde5b2aaa1ca` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rectangle, State=Active | `7d9b701f6b8aeabda0c4b565f7a2b93e04ba7c1d` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rectangle, State=Default | `bc02f1baf1e6fc81bd022b47ae5f6e4bcc6a20e6` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rectangle, State=Disabled | `de5975645de9dfc40d939bff6f0fdc9832983aa1` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rectangle, State=Focused | `8a90648faea7d426d29b692742fbe8d7deb1c3c6` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rectangle, State=Hover | `1f1de27a042dec8f18829eac424cc134b6b2cf9e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rounded, State=Active | `56c581fb8dedeb9a8684380d96c3101d08745dd1` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rounded, State=Default | `bf16f98e90caf35844b25a9208dd861b7d9d6490` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rounded, State=Disabled | `1df75db43a1fc6a2b5fcaf0037cc4abc357e5879` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rounded, State=Focused | `93eead7a53e06a5cf5db78081abb0111e56279e3` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Default, Size=Small, Corner=Rounded, State=Hover | `4328cd27ab0d6ed99f0fa86717b09ff4a5f53ea8` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rectangle, State=Active | `edcb1800286b0943647d7fcbca59bc16f200c953` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rectangle, State=Default | `b866c1547526525722a46b0fe05d8a6ea1e0e881` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rectangle, State=Disabled | `32fb2f8bf9fcab138afc1763917a005baab24baa` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rectangle, State=Focused | `715bbb37f603f2cc086a13319e7b84b6821d0695` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rectangle, State=Hover | `3985b17a9b55fe1f2a8e0f941143d3785ef27ae9` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rounded, State=Active | `fe009a890dac8d56dd4ad4f39f7000b2dfbcbca0` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rounded, State=Default | `21cdf4fac596bc84eccb4223d1c6abdb203df6fc` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rounded, State=Disabled | `3edbdd0ae1d9c907ab22309d6e2f1e57413856dc` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rounded, State=Focused | `de25c885b80234ac55dbb40916ef75e865b21667` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Default, Corner=Rounded, State=Hover | `4ec6348953de433e93204e381c59acfef6daddc2` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Active | `85b707789f24f5791bfbbd035cdafdaf4ef9d100` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Default | `c534b7df733aaf2eaa749ed39f91c561b98e136e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Disabled | `0a2c6b1e0cb56a32a426a02af6b28205193f2377` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Focused | `12d77c03de19a385e9c3f54f05070bd986f59fb5` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rectangle, State=Hover | `ca16e3705fc8f4a63163329d29bad33e366f6857` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Active | `12a3d7fbe651da45c5e55d1285fb93359bebbef2` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Default | `4aad2ba7bce45dcb70cac023bc881fe580d49416` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Disabled | `77466595a093a80f6d66e42c1838247e4fc187cd` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Focused | `b5e174ede071439a00d4a4d96e1b01ce2bc52727` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Micro, Corner=Rounded, State=Hover | `36f95b350cd5435416041bcf7d599eac50ab35a5` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Active | `9ec4df0c7433501f1eb0964e680f0f63e2ca529d` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Default | `48ce3a5ffe9ad13e62011a55ee20c4d1977b066e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Disabled | `9e1e634dde7d6899d4d3d0015ed69cead2a320c9` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Focused | `3f2da9d38f9cf8f57765befcf30f2888f5b645c6` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rectangle, State=Hover | `7d76fb97aafa1fcfcb824d70a95894e6d1e9ad11` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Active | `fa8b06a69d1d2f4b7a0103344605781438a3b63c` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Default | `c25b7a2770f9a922b12b3f04e8ac29df1b79a742` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Disabled | `5381eead874d41d94d7267bba04d43c931f6e804` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Focused | `63df5dcb0534b4f5a44a9a0a39a727d14c050ce9` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Extra Small, Corner=Rounded, State=Hover | `1ab1fcf108caf3a369914c651e3325d88e34cedf` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rectangle, State=Active | `afba11ee4bbd38425adbfcd396b51069dd9610a8` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rectangle, State=Default | `abba02b9d9bd82fe125e49889f4b90c8af811d98` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rectangle, State=Disabled | `6624e503fe58e93ccdb223e7566734eb7e2e113a` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rectangle, State=Focused | `fcb6353860f2902ed6efcf249d3e37965446f131` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rectangle, State=Hover | `24ab80ba2d36c43e1f39f2f7bceec9a44cf91ce8` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rounded, State=Active | `6f31cc87baa2d8ff7e21ab3175c05ae9eb7ad159` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rounded, State=Default | `802fa87737bb2a0c5da706c1bf6c6b01cf52648c` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rounded, State=Disabled | `f4b2f0ef081a8ce3194ef5736bf8a81c54603c09` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rounded, State=Focused | `f245c524b3998244e63f01a5543c7678774b8c59` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Large, Corner=Rounded, State=Hover | `1be3dd96e7c8cf5ad75d7e6459344632a4612d67` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Active | `a5d5d9a5aacdcb88ef8c25662f071a6cb7bc5df8` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Default | `6f3e8e9deed60997b503c1153e72fa504c867edc` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Disabled | `7e3d3026016dfb1a863d6eda33d9cb6d085f5521` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Focused | `00062c4915b3baf7e809083fa188f94db488e530` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rectangle, State=Hover | `400823f36f6e7755b2731b1cafc01aaced4d2784` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rounded, State=Active | `eccbad843049b19ccd08d4323a2942f3d6a10346` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rounded, State=Default | `e8212408041cce2c0c7ce5997694e39026e430a9` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rounded, State=Disabled | `47c7390baff313024b1b45d65b75b8b1e596121b` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rounded, State=Focused | `1ad6bf254e6d3caaca511fb6f57c6cc2405d494b` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Micro, Corner=Rounded, State=Hover | `2489c105116c5b8673e4f2c1561fd8913de8f2ef` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rectangle, State=Active | `aea437e40552b34c069cb8fc2e0ce927062fc1e4` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rectangle, State=Default | `992f1672e5d8fffd9cdfa9f4a4023872ef4a40dc` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rectangle, State=Disabled | `bd7aaa1b880441dbad7367b33a9c6cfe10795a50` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rectangle, State=Focused | `a0a47cf0054b5519d87a8836a42b82bc2192f3bb` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rectangle, State=Hover | `d4169a433d7acc08aad5cf2d160d554692d8db02` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rounded, State=Active | `d0afaa764aff3d3ccbb8080875f743ce17c79c3f` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rounded, State=Default | `c752681ae6630c5fcc71fa537cc759e1b1eccdca` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rounded, State=Disabled | `04297038c4c01c4868860907139313a64b1a6a06` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rounded, State=Focused | `ce3ba230b0f5a7cf64bf4e10c7af46a5a4a688b1` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Icon, Size=Small, Corner=Rounded, State=Hover | `655afded05339a06a0163a54b262bed5eb2aaf7e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rectangle, State=Active | `8c49aaed6b74265cae4d56507d439383a5b5c311` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rectangle, State=Default | `6d417d4065a435fc11a9f69e20d1fb7a86593d28` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rectangle, State=Disabled | `a798c5e8b61a9368748a9e1d0c2bfe481549d85d` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rectangle, State=Focused | `50e44def7709ffb5f3241699d4b8709300cfffda` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rectangle, State=Hover | `3d7c27e39cf877ed4ab6b8e9b18f64aad1806f07` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rounded, State=Active | `803de772537b1a4f23256c0bfa8554252676587f` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rounded, State=Default | `42e2c1263acf50da882e3b6b3ff8f9bd3f9b6819` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rounded, State=Disabled | `c6820d1ad525eace2114b08b5142c5b0f2fe52a6` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rounded, State=Focused | `6dee21e4f1c08c0b865c96cc800b9d29fdafb796` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Default, Corner=Rounded, State=Hover | `e1fb35b62022928a6c17defd62e171fed24c389f` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Active | `2c9364a94a75b6a5b87d0fc845b4f0a7e837bafe` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Default | `c68c8ee27badc411ab071ccfe21c9da5a38dee74` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Disabled | `63c5b9ca1d5ba3d97e6ca46ce5f94f043f711f46` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Focused | `94cd2035e9d355b6ffb68e43b07a1aa4c6cae59a` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rectangle, State=Hover | `4a2082e5f73cb63579a7da34932ade4826dcd0eb` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Active | `f60ce8dbbd5a6ec7161693c27e43223bcb9481a1` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Default | `6b31c3bd4278bde7ba063f8c01c49a403bf9c0e8` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Disabled | `6796e5edf37af02b22d93ea4fe5a31ab5267cccf` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Focused | `4ccc0ff2710a84ddab96ff42d70c723295c9d0ca` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Micro, Corner=Rounded, State=Hover | `e5a4be533def1bf2740598e152022cf75821c124` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Active | `9d273f2147dd4f3b3ac68a02201677ea647c8c1b` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Default | `ed1afb9dc9449cc1aa2af6ede88c820635df3f7b` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Disabled | `3071c7bb51de201a18b44677ab5355a8f9d2e052` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Focused | `fabb6dc11a94ab34763812b0548e211a1a87f09c` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rectangle, State=Hover | `dd80d13e998e1df047709e21c4a10ff2e8d88fba` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Active | `a66ff464efd325d83a5a60c9b73539b1f1866e1e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Default | `e3b5269c9cf2a93fa72a12f29e2d0cb0cccaac90` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Disabled | `ba3c8043bc0ee0ac01ae41e17db858f65693fbec` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Focused | `6f3d821e2dd3ba53cc635d4f298bb919abaf9004` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Extra Small, Corner=Rounded, State=Hover | `7412f5bd094547f8d19c439dbb246f692b14f5aa` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rectangle, State=Active | `d5fd8778780085ebf3ddcd252d06f59660963816` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rectangle, State=Default | `0ae3e9dbc9a0d462b65b107b08a21217017f87ea` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rectangle, State=Disabled | `68666fa5be1415097811ec7d223aea8cb8bdb184` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rectangle, State=Focused | `86e2cb9505d0ed525b3c62b5a63c4fa7ac3bf72c` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rectangle, State=Hover | `39d9994f39928c00306f3641d66d88ab04376758` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rounded, State=Active | `1cf374769ab9ad2723e5152a97042d8ea6f776f7` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rounded, State=Default | `fde7aa4037f3aa71d9bfbf2d015f165306b846e3` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rounded, State=Disabled | `df25f9962d67b0a4c33296825ad0ecdae2e7b0b3` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rounded, State=Focused | `fa3e6752a1a73532cdc48bd155e40ec8f88b0513` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Large, Corner=Rounded, State=Hover | `02dee57abc3bee939777e15ac88857ebf4df6c6e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rectangle, State=Active | `4df09595e1582f7a21182c9d21e34f48be3851ab` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rectangle, State=Default | `33875570a9402a37e626d153d8b345cbd6e33946` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rectangle, State=Disabled | `de3314967c028b2c66960671d72346eef17bfca9` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rectangle, State=Focused | `9a3148a20ff677c64ffaa44a5daac28d7525afc9` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rectangle, State=Hover | `50f5d46293cdc157d25289b3ccf73d040fad7a92` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rounded, State=Active | `77401fae180aa5b41e37a6e24cd938bfa26a2933` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rounded, State=Default | `b2abc47fba21ec355dd7d240ba791a2007e1cd79` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rounded, State=Disabled | `751a4a91ee7408e69089e3f3e9b3cc1b43834c77` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rounded, State=Focused | `2e6da153cbb25c1960f96cfff914d9263513cf7b` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Micro, Corner=Rounded, State=Hover | `3e706155f566b110da4a4f1b39fd8654bd5914d4` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rectangle, State=Active | `4357b1cbc7e9212e4268dfac5656f6d1922368b3` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rectangle, State=Default | `dd47f72d70e244208c737131666a30fa85aeb878` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rectangle, State=Disabled | `a0f9a29ed16cb3d7402007c5d99050eb22b2b6d9` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rectangle, State=Focused | `01df641ac37434b128a7a2619ca348143a82e893` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rectangle, State=Hover | `4a48e015928301682b6fbc88c49225dac0bb1e45` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rounded, State=Active | `2fc4f22b2b50dbeb72642e0b5d7f872e3b01f297` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rounded, State=Default | `4edab4704d1cbdeeed3c277cb4634dc2d7729695` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rounded, State=Disabled | `4d7185c9562b0d1b6c4e353b39ed18616120a736` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rounded, State=Focused | `acb045b0e0786c84f4a9b859f5214c7ae8a9053e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |
| White Button / Type=Round, Size=Small, Corner=Rounded, State=Hover | `e9675df439cb24c32367de3f4c1de9094648867e` | Variant，屬於 `White Button` | ⚠️ 尚未填寫 Description |

### Cells UI（141）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Avatar Image Cell / Size=Default | `0a4520cc2295cddd18fe2d861de7d637cb9b2fbc` | Variant，屬於 `Avatar Image Cell` | ⚠️ 尚未填寫 Description |
| Avatar Image Cell / Size=Extra Small | `bdf33a5fdb9ecfc9350d5601f41e6dc837b5ac8b` | Variant，屬於 `Avatar Image Cell` | ⚠️ 尚未填寫 Description |
| Avatar Image Cell / Size=Large | `25f61199c507f013373b26a16ae351bd959e9888` | Variant，屬於 `Avatar Image Cell` | ⚠️ 尚未填寫 Description |
| Avatar Image Cell / Size=Small | `bd41d1fb1d9c360a0d8e2b0f7239e9c057d0ebcf` | Variant，屬於 `Avatar Image Cell` | ⚠️ 尚未填寫 Description |
| Avatar Text Cell / Size=Default | `74e53892c76a4696afcb77f06090636bbbf5c57d` | Variant，屬於 `Avatar Text Cell` | ⚠️ 尚未填寫 Description |
| Avatar Text Cell / Size=Extra Small | `80c31d0bb6d6e752782d6c23b1b0f3264a31c7c6` | Variant，屬於 `Avatar Text Cell` | ⚠️ 尚未填寫 Description |
| Avatar Text Cell / Size=Large | `a3d09f8c7f24264e026f8b617a49498a4246de0a` | Variant，屬於 `Avatar Text Cell` | ⚠️ 尚未填寫 Description |
| Avatar Text Cell / Size=Small | `29a762da63dbfa55d31a3887e8ac95ea89722180` | Variant，屬於 `Avatar Text Cell` | ⚠️ 尚未填寫 Description |
| Avatars Group Image Cell / Size=Default | `635b5e7bbb46e8d7eced90793db2da8a277b05d8` | Variant，屬於 `Avatars Group Image Cell` | ⚠️ 尚未填寫 Description |
| Avatars Group Image Cell / Size=Extra Small | `5c6db8d82390149693da3d0c19535692a7da6755` | Variant，屬於 `Avatars Group Image Cell` | ⚠️ 尚未填寫 Description |
| Avatars Group Image Cell / Size=Large | `5b4f1c44452307e4cef11b694705b02a23713429` | Variant，屬於 `Avatars Group Image Cell` | ⚠️ 尚未填寫 Description |
| Avatars Group Image Cell / Size=Small | `27d58ed27855014e7154d6f2d398fabce34b8a10` | Variant，屬於 `Avatars Group Image Cell` | ⚠️ 尚未填寫 Description |
| Badge Cell / Size=Default | `92cee7e2e93ed19259ec965780bbbc7b53d557d3` | Variant，屬於 `Badge Cell` | ⚠️ 尚未填寫 Description |
| Badge Cell / Size=Extra Small | `538b72e526897f065d362f651ec5cdbf5234acbc` | Variant，屬於 `Badge Cell` | ⚠️ 尚未填寫 Description |
| Badge Cell / Size=Large | `30e886f6e7fb89161dad4652e8f88a3fe74235bc` | Variant，屬於 `Badge Cell` | ⚠️ 尚未填寫 Description |
| Badge Cell / Size=Small | `2d1b972b0d0304fb864909c189670ab74edd5e92` | Variant，屬於 `Badge Cell` | ⚠️ 尚未填寫 Description |
| Badge Icon Cell / Size=Default | `272f0d0462251162a4c38e018f910879b24e0d61` | Variant，屬於 `Badge Icon Cell` | ⚠️ 尚未填寫 Description |
| Badge Icon Cell / Size=Extra Small | `02cd587cabbc95474c8d0e254c1679e387681855` | Variant，屬於 `Badge Icon Cell` | ⚠️ 尚未填寫 Description |
| Badge Icon Cell / Size=Large | `d90f629025941e3fd6f683655ff005f5a4695e31` | Variant，屬於 `Badge Icon Cell` | ⚠️ 尚未填寫 Description |
| Badge Icon Cell / Size=Small | `41adbfe0f5d3c04d1951500f924810e3f83eb824` | Variant，屬於 `Badge Icon Cell` | ⚠️ 尚未填寫 Description |
| Badge Icon Feature Cell / Size=Default | `434a5f17870e71853be0e700869bb02b15ecbb63` | Variant，屬於 `Badge Icon Feature Cell` | ⚠️ 尚未填寫 Description |
| Badge Icon Feature Cell / Size=Extra Small | `6b304b199515664450df86c21ecef87a639874aa` | Variant，屬於 `Badge Icon Feature Cell` | ⚠️ 尚未填寫 Description |
| Badge Icon Feature Cell / Size=Large | `250ae207165770622fe844ef6190f24530e83c27` | Variant，屬於 `Badge Icon Feature Cell` | ⚠️ 尚未填寫 Description |
| Badge Icon Feature Cell / Size=Small | `6f06f03c2d4ac2b90c989ce6b97ccdec314a2446` | Variant，屬於 `Badge Icon Feature Cell` | ⚠️ 尚未填寫 Description |
| Badge Sqaure Cell / Size=Default | `9c6cc89dcb990cade91faef9c9e52ccb37f1540d` | Variant，屬於 `Badge Sqaure Cell` | ⚠️ 尚未填寫 Description |
| Badge Sqaure Cell / Size=Extra Small | `a66cba0a1da179f3c0e8582ae3829a3be52aa126` | Variant，屬於 `Badge Sqaure Cell` | ⚠️ 尚未填寫 Description |
| Badge Sqaure Cell / Size=Large | `992cfd7d3a7c6d4de32948d59e4e235bd002fa2f` | Variant，屬於 `Badge Sqaure Cell` | ⚠️ 尚未填寫 Description |
| Badge Sqaure Cell / Size=Small | `a31ddac76ab49a11c7e8bb716c3486d98a438d1d` | Variant，屬於 `Badge Sqaure Cell` | ⚠️ 尚未填寫 Description |
| Badges Group Cell / Size=Default | `b33976f412b96d7b876bdb84b40a291642e8127c` | Variant，屬於 `Badges Group Cell` | ⚠️ 尚未填寫 Description |
| Badges Group Cell / Size=Extra Small | `d528827b3488dc9b1e8715503d3ffc98393018d2` | Variant，屬於 `Badges Group Cell` | ⚠️ 尚未填寫 Description |
| Badges Group Cell / Size=Large | `2c30b775cf7216b83da51454c45299133d07e97e` | Variant，屬於 `Badges Group Cell` | ⚠️ 尚未填寫 Description |
| Badges Group Cell / Size=Small | `76db297fc8b21435c47d45316f6718d6c7c1d580` | Variant，屬於 `Badges Group Cell` | ⚠️ 尚未填寫 Description |
| Brand Cell / Size=Default | `ae7f386f69511c9f8ffc9101a9b131ec0e23fb19` | Variant，屬於 `Brand Cell` | ⚠️ 尚未填寫 Description |
| Brand Cell / Size=Extra Small | `7e4cd172132f74cfd5366fec53aaaf3ae22fd20d` | Variant，屬於 `Brand Cell` | ⚠️ 尚未填寫 Description |
| Brand Cell / Size=Large | `0e68ca3156995eac51068ed6db5e0c9e396dda8c` | Variant，屬於 `Brand Cell` | ⚠️ 尚未填寫 Description |
| Brand Cell / Size=Small | `7121b531a526f17f2ea5f0afa3f41636fc887a33` | Variant，屬於 `Brand Cell` | ⚠️ 尚未填寫 Description |
| Button Group Cell / Size=Default | `ca4cd1e8614f02ca6ec06e04298efdc0039c21c4` | Variant，屬於 `Button Group Cell` | ⚠️ 尚未填寫 Description |
| Button Group Cell / Size=Extra Small | `e61235f39c96745c45551ce3b0506f953c1ae399` | Variant，屬於 `Button Group Cell` | ⚠️ 尚未填寫 Description |
| Button Group Cell / Size=Large | `05dd3f36011afb0856e7a8f8d060a77ba8428ed7` | Variant，屬於 `Button Group Cell` | ⚠️ 尚未填寫 Description |
| Button Group Cell / Size=Small | `b509b7b65ee83f56e70e8cecffa5d54a119e8028` | Variant，屬於 `Button Group Cell` | ⚠️ 尚未填寫 Description |
| Button Group Cell 2 / Size=Default | `7a91ba4bcda2747fc66cb6bfb50c62a060c8e8d8` | Variant，屬於 `Button Group Cell 2` | ⚠️ 尚未填寫 Description |
| Button Group Cell 2 / Size=Extra Small | `5709ca428e877ab2a1f948a341e881710a711173` | Variant，屬於 `Button Group Cell 2` | ⚠️ 尚未填寫 Description |
| Button Group Cell 2 / Size=Large | `da08ed99c291a8504f17852523b6106f1439eff4` | Variant，屬於 `Button Group Cell 2` | ⚠️ 尚未填寫 Description |
| Button Group Cell 2 / Size=Small | `eba945f001b1fbc4c153a461498249418d86ad71` | Variant，屬於 `Button Group Cell 2` | ⚠️ 尚未填寫 Description |
| Button Icon Cell / Size=Default | `4a5033ed8fbc2041ae568bd28d32b95a54b46144` | Variant，屬於 `Button Icon Cell` | ⚠️ 尚未填寫 Description |
| Button Icon Cell / Size=Extra Small | `0dd7db8f34250a2e32905d8379c13b0157444ebd` | Variant，屬於 `Button Icon Cell` | ⚠️ 尚未填寫 Description |
| Button Icon Cell / Size=Large | `ae5fbba4a66f7cec95d486d0363542081da69c19` | Variant，屬於 `Button Icon Cell` | ⚠️ 尚未填寫 Description |
| Button Icon Cell / Size=Small | `9c89937f06fe69199216b305e260d55e83304a3f` | Variant，屬於 `Button Icon Cell` | ⚠️ 尚未填寫 Description |
| Button Primary Cell / Size=Default | `8486fb3fa39301d220b5305244b4bf3748e07982` | Variant，屬於 `Button Primary Cell` | ⚠️ 尚未填寫 Description |
| Button Primary Cell / Size=Extra Small | `a73c694101a467fa4c89ae1e8e71e8db8dc25c4f` | Variant，屬於 `Button Primary Cell` | ⚠️ 尚未填寫 Description |
| Button Primary Cell / Size=Large | `cff8064d00e8bd314feb6e5a935defdb39bdacd3` | Variant，屬於 `Button Primary Cell` | ⚠️ 尚未填寫 Description |
| Button Primary Cell / Size=Small | `cbafd5e483e88f3297f4133e86f4aa3bf28be49e` | Variant，屬於 `Button Primary Cell` | ⚠️ 尚未填寫 Description |
| Button Secondary Cell / Size=Default | `dd49556969ffca3e5ef523c39011f7689cf988cd` | Variant，屬於 `Button Secondary Cell` | ⚠️ 尚未填寫 Description |
| Button Secondary Cell / Size=Extra Small | `5d946942534690072743fc8c90b2f474833895a2` | Variant，屬於 `Button Secondary Cell` | ⚠️ 尚未填寫 Description |
| Button Secondary Cell / Size=Large | `a03c7995c22e73f52ef1110a49cca2892dc64167` | Variant，屬於 `Button Secondary Cell` | ⚠️ 尚未填寫 Description |
| Button Secondary Cell / Size=Small | `142064509be5e5783157fe23405695deb3c7e81c` | Variant，屬於 `Button Secondary Cell` | ⚠️ 尚未填寫 Description |
| Buttons Icon Cell / Size=Default | `7b74010ca6e393aa788d6efdea275a3876325e76` | Variant，屬於 `Buttons Icon Cell` | ⚠️ 尚未填寫 Description |
| Buttons Icon Cell / Size=Extra Small | `13bf6dbc498fa60cc67db78bffdd5ba344726180` | Variant，屬於 `Buttons Icon Cell` | ⚠️ 尚未填寫 Description |
| Buttons Icon Cell / Size=Large | `d63bf2619b2f5ed3c3c9f35d8f924f74bd58ec42` | Variant，屬於 `Buttons Icon Cell` | ⚠️ 尚未填寫 Description |
| Buttons Icon Cell / Size=Small | `f63a7a555069f05b36cfae7e97652402b189cc44` | Variant，屬於 `Buttons Icon Cell` | ⚠️ 尚未填寫 Description |
| Chart Cell / Size=Default | `14e0533bd4e92211bf5dffd99145ad9d7eea4ccb` | Variant，屬於 `Chart Cell` | ⚠️ 尚未填寫 Description |
| Chart Cell / Size=Extra Small | `49ac753ce5fc344d54e23275912679823b9c1738` | Variant，屬於 `Chart Cell` | ⚠️ 尚未填寫 Description |
| Chart Cell / Size=Large | `9781ed981140171b25a5cada9798c0e792d68e90` | Variant，屬於 `Chart Cell` | ⚠️ 尚未填寫 Description |
| Chart Cell / Size=Small | `fe78e3a734c0edd1c8b5597e96aab70d391e1673` | Variant，屬於 `Chart Cell` | ⚠️ 尚未填寫 Description |
| Checkbox Cell / Size=Default | `8cef4c6be9a577c712025864fdd44cb9c97b5318` | Variant，屬於 `Checkbox Cell` | ⚠️ 尚未填寫 Description |
| Checkbox Cell / Size=Extra Small | `4e0f18bea132be08c383522a160bd503ee0aee78` | Variant，屬於 `Checkbox Cell` | ⚠️ 尚未填寫 Description |
| Checkbox Cell / Size=Large | `0260c90840161e0ce39c3fe8357924c60b23e8b0` | Variant，屬於 `Checkbox Cell` | ⚠️ 尚未填寫 Description |
| Checkbox Cell / Size=Small | `4bafb26e2b759cd829a0f0dc3fa2feca4ecfcbf4` | Variant，屬於 `Checkbox Cell` | ⚠️ 尚未填寫 Description |
| Country Cell / Size=Default | `4390c5a25b087276fcd7d51ec6c8c975d2946a80` | Variant，屬於 `Country Cell` | ⚠️ 尚未填寫 Description |
| Country Cell / Size=Extra Small | `e3b2ce0d50aaebd1f29985c153d5a1bb126090c4` | Variant，屬於 `Country Cell` | ⚠️ 尚未填寫 Description |
| Country Cell / Size=Large | `776fcd3b031d996d714b39c89830f670aef49a67` | Variant，屬於 `Country Cell` | ⚠️ 尚未填寫 Description |
| Country Cell / Size=Small | `1e52ae459067f5f843ee05fcbd92d40b466b52f1` | Variant，屬於 `Country Cell` | ⚠️ 尚未填寫 Description |
| Crypto Cell / Size=Default | `7d482fbf6fb594294dcdc59599df35b06947463c` | Variant，屬於 `Crypto Cell` | ⚠️ 尚未填寫 Description |
| Crypto Cell / Size=Extra Small | `48b87a91f5b919e532bfd022012e2bed53772600` | Variant，屬於 `Crypto Cell` | ⚠️ 尚未填寫 Description |
| Crypto Cell / Size=Large | `e6289ada9476ea9b7e714ab30828b965d2d14ec1` | Variant，屬於 `Crypto Cell` | ⚠️ 尚未填寫 Description |
| Crypto Cell / Size=Small | `85ce311d1f6c82ca7506d012c7617ff6fa9737a7` | Variant，屬於 `Crypto Cell` | ⚠️ 尚未填寫 Description |
| Empty Cell / Size=Default | `dcc3b1a385bd257bfc950c699f1e966f1271318a` | Variant，屬於 `Empty Cell` | ⚠️ 尚未填寫 Description |
| Empty Cell / Size=Extra Small | `18c958a5957571b2b57c1c5b2069003533d9abb6` | Variant，屬於 `Empty Cell` | ⚠️ 尚未填寫 Description |
| Empty Cell / Size=Large | `eaea092cdd11f326082f9dd0c2fbc050f37c4007` | Variant，屬於 `Empty Cell` | ⚠️ 尚未填寫 Description |
| Empty Cell / Size=Small | `ad950f11cca52f0508055561da96747285ed22cf` | Variant，屬於 `Empty Cell` | ⚠️ 尚未填寫 Description |
| Group Buttons Cell / Size=Default | `e3dd7befccf26ce265a84e9760974b18f032d742` | Variant，屬於 `Group Buttons Cell` | ⚠️ 尚未填寫 Description |
| Group Buttons Cell / Size=Extra Small | `e94693b07c10638cc7e97e901a06dd720cfbbd9f` | Variant，屬於 `Group Buttons Cell` | ⚠️ 尚未填寫 Description |
| Group Buttons Cell / Size=Large | `2279fa1582f1af30e194265eac92c53034b00367` | Variant，屬於 `Group Buttons Cell` | ⚠️ 尚未填寫 Description |
| Group Buttons Cell / Size=Small | `68788ae8cc9329e05b479b42e29322b920dd1371` | Variant，屬於 `Group Buttons Cell` | ⚠️ 尚未填寫 Description |
| Icon Cell / Size=Default | `ffa361b98274a8ed612424e60970c1feb4bca99e` | Variant，屬於 `Icon Cell` | ⚠️ 尚未填寫 Description |
| Icon Cell / Size=Extra Small | `56ca735abf187a9ebf7d89d6d70770b6168e400b` | Variant，屬於 `Icon Cell` | ⚠️ 尚未填寫 Description |
| Icon Cell / Size=Large | `754aa3689b76886b87374fcb8af37b49dc64864c` | Variant，屬於 `Icon Cell` | ⚠️ 尚未填寫 Description |
| Icon Cell / Size=Small | `169b65a149a027bae5dc2c194e9704c5b37ff851` | Variant，屬於 `Icon Cell` | ⚠️ 尚未填寫 Description |
| Icons Cell / Size=Default | `75f673d93b0bad988c89e6ca8367c59e3094a9d4` | Variant，屬於 `Icons Cell` | ⚠️ 尚未填寫 Description |
| Icons Cell / Size=Extra Small | `dc14e9d886ed7e3696122a806252c29e8198c376` | Variant，屬於 `Icons Cell` | ⚠️ 尚未填寫 Description |
| Icons Cell / Size=Large | `f8f396461c7e66826e96f882d342f025a0ace627` | Variant，屬於 `Icons Cell` | ⚠️ 尚未填寫 Description |
| Icons Cell / Size=Small | `0837f1bfbf7c8cfda51df59d5ac657623d0e56fc` | Variant，屬於 `Icons Cell` | ⚠️ 尚未填寫 Description |
| Image Button Cell / Size=Default | `9b9d9bfc839d5b481dbe738a0b16fb6063cb11ac` | Variant，屬於 `Image Button Cell` | ⚠️ 尚未填寫 Description |
| Image Button Cell / Size=Extra Small | `d129cee3a31d8232eb52c2afaf8d39963f9c8b68` | Variant，屬於 `Image Button Cell` | ⚠️ 尚未填寫 Description |
| Image Button Cell / Size=Large | `7906eb30348135a63fcac9c0a329871240c0a9cc` | Variant，屬於 `Image Button Cell` | ⚠️ 尚未填寫 Description |
| Image Button Cell / Size=Small | `76c11a2dfe4ffaedf71d8a8c9c6c95f51f08a822` | Variant，屬於 `Image Button Cell` | ⚠️ 尚未填寫 Description |
| Image Cell / Size=Default | `8aeeec7367ac680ba7fa44839b2cdca38b9d2023` | Variant，屬於 `Image Cell` | ⚠️ 尚未填寫 Description |
| Image Cell / Size=Extra Small | `fd6fe178725180a32fd9a5ddfa2e1dca465e7e97` | Variant，屬於 `Image Cell` | ⚠️ 尚未填寫 Description |
| Image Cell / Size=Large | `cd16eefa33bba38a1b4e092d5c2be2d22231b9f7` | Variant，屬於 `Image Cell` | ⚠️ 尚未填寫 Description |
| Image Cell / Size=Small | `874cde6c6dc16ebc5335cca504959dbca3ca5b50` | Variant，屬於 `Image Cell` | ⚠️ 尚未填寫 Description |
| Input Cell / Size=Default | `92642f775e554bec20fbf050726f41b1deee7d05` | Variant，屬於 `Input Cell` | ⚠️ 尚未填寫 Description |
| Input Cell / Size=Extra Large | `f308249c8833a6f8698c5b024f2eae3924c8a347` | Variant，屬於 `Input Cell` | ⚠️ 尚未填寫 Description |
| Input Cell / Size=Extra Small | `38f7f2e7754cffbced9415523bfa7c72d2df6919` | Variant，屬於 `Input Cell` | ⚠️ 尚未填寫 Description |
| Input Cell / Size=Large | `58488e5855ef9c82c1b3b1d4ee8d050f58dc229d` | Variant，屬於 `Input Cell` | ⚠️ 尚未填寫 Description |
| Input Cell / Size=Small | `5021db1154b727d57bade8d2cf7253990beddd19` | Variant，屬於 `Input Cell` | ⚠️ 尚未填寫 Description |
| Payment Cell / Size=Default | `5497d9c45b99adb529fc0a5b109cfcd3ba353457` | Variant，屬於 `Payment Cell` | ⚠️ 尚未填寫 Description |
| Payment Cell / Size=Extra Small | `d6f047eaf79272b609f69fdbc65c70011f17b1b5` | Variant，屬於 `Payment Cell` | ⚠️ 尚未填寫 Description |
| Payment Cell / Size=Large | `22e0c4f4e3813e82b3d35a05d6c92304c2d87b8d` | Variant，屬於 `Payment Cell` | ⚠️ 尚未填寫 Description |
| Payment Cell / Size=Small | `89bd8ffa3f36bbddf2e5a2fc643a37bb8414cd9c` | Variant，屬於 `Payment Cell` | ⚠️ 尚未填寫 Description |
| Progress Circular Cell / Size=Default | `e893ba661fa78394ec1edfa8e711661e54e75f43` | Variant，屬於 `Progress Circular Cell` | ⚠️ 尚未填寫 Description |
| Progress Circular Cell / Size=Extra Small | `d19335f17a8157e4022ca4cd87804b96da6d6fe4` | Variant，屬於 `Progress Circular Cell` | ⚠️ 尚未填寫 Description |
| Progress Circular Cell / Size=Large | `2611245343e846e29ce515ca912da9ea8a99e000` | Variant，屬於 `Progress Circular Cell` | ⚠️ 尚未填寫 Description |
| Progress Circular Cell / Size=Small | `9f3c1d97367714450f5a1102411e13a1ec91c24f` | Variant，屬於 `Progress Circular Cell` | ⚠️ 尚未填寫 Description |
| Progress Horizontal Cell / Size=Default | `ab8ccac3d75b8c9d9e5b0a2939af6c7a44cad7dd` | Variant，屬於 `Progress Horizontal Cell` | ⚠️ 尚未填寫 Description |
| Progress Horizontal Cell / Size=Extra Small | `f4cae05014f28096d443705dc1871b288a38d672` | Variant，屬於 `Progress Horizontal Cell` | ⚠️ 尚未填寫 Description |
| Progress Horizontal Cell / Size=Large | `6db1876c9124c93bb59417f9c94d49222cc7c3ba` | Variant，屬於 `Progress Horizontal Cell` | ⚠️ 尚未填寫 Description |
| Progress Horizontal Cell / Size=Small | `357cf0a19de361a360286ed8f5897e0f54b64b82` | Variant，屬於 `Progress Horizontal Cell` | ⚠️ 尚未填寫 Description |
| Radio Cell / Size=Default | `26fb01019ce45e0132d589b4275609b4abc77b63` | Variant，屬於 `Radio Cell` | ⚠️ 尚未填寫 Description |
| Radio Cell / Size=Extra Small | `938bffd2018d827d28dfe0e9957a412dc135739a` | Variant，屬於 `Radio Cell` | ⚠️ 尚未填寫 Description |
| Radio Cell / Size=Large | `23a5bb655c35f304397d6d5b02ea6c4801de8510` | Variant，屬於 `Radio Cell` | ⚠️ 尚未填寫 Description |
| Radio Cell / Size=Small | `7aef07455ae2749f8d726fde199203b61bcf4c0d` | Variant，屬於 `Radio Cell` | ⚠️ 尚未填寫 Description |
| Social Cell / Size=Default | `8076375ff0c481396958820636f98235a754b0ce` | Variant，屬於 `Social Cell` | ⚠️ 尚未填寫 Description |
| Social Cell / Size=Extra Small | `10527c068edaa9ac969ce22459d4aaff14d9c74c` | Variant，屬於 `Social Cell` | ⚠️ 尚未填寫 Description |
| Social Cell / Size=Large | `00a7f77afeaf545c9fefce751f3b22677c59304e` | Variant，屬於 `Social Cell` | ⚠️ 尚未填寫 Description |
| Social Cell / Size=Small | `a21e90e6bb428b57f14c84facc004a38fa5b2e7b` | Variant，屬於 `Social Cell` | ⚠️ 尚未填寫 Description |
| Switcher Cell / Size=Default | `9bd38d32831fc414641be5afa44378f92d23e290` | Variant，屬於 `Switcher Cell` | ⚠️ 尚未填寫 Description |
| Switcher Cell / Size=Extra Small | `731fe516f06003faa5a1e875f9152aaa2904381e` | Variant，屬於 `Switcher Cell` | ⚠️ 尚未填寫 Description |
| Switcher Cell / Size=Large | `76b871a316933f886c474b7b9e6f39f194be3108` | Variant，屬於 `Switcher Cell` | ⚠️ 尚未填寫 Description |
| Switcher Cell / Size=Small | `2afb1349b86e15297898c524fddc61e818b5e288` | Variant，屬於 `Switcher Cell` | ⚠️ 尚未填寫 Description |
| Tab Cell / Size=Default | `e5ed40d220f12f6e63077541d3ab30ab05eeb4b2` | Variant，屬於 `Tab Cell` | ⚠️ 尚未填寫 Description |
| Tab Cell / Size=Extra Small | `f1c95a96adec819c03752eb8eb18398134fe197e` | Variant，屬於 `Tab Cell` | ⚠️ 尚未填寫 Description |
| Tab Cell / Size=Large | `1a48b9339a4331c4d2b595b61c0184604009d38a` | Variant，屬於 `Tab Cell` | ⚠️ 尚未填寫 Description |
| Tab Cell / Size=Small | `7744b905cdae7d9f3e34a549e15a4301db65679f` | Variant，屬於 `Tab Cell` | ⚠️ 尚未填寫 Description |
| Text 2 Lines Cell / Size=Default | `2c0696724863ff89aae580a829d35f4af980c89d` | Variant，屬於 `Text 2 Lines Cell` | ⚠️ 尚未填寫 Description |
| Text 2 Lines Cell / Size=Extra Small | `6644c70ade5cb2ef6149ef05aee97418ed41d25b` | Variant，屬於 `Text 2 Lines Cell` | ⚠️ 尚未填寫 Description |
| Text 2 Lines Cell / Size=Large | `bfaa54b02b7f13c5a266cccc2d0047c5854e3cb6` | Variant，屬於 `Text 2 Lines Cell` | ⚠️ 尚未填寫 Description |
| Text 2 Lines Cell / Size=Small | `35079dea9f91847641ce50801189a979819df344` | Variant，屬於 `Text 2 Lines Cell` | ⚠️ 尚未填寫 Description |
| Text Cell / Size=Default | `6853b65ff04956fbbc3edb2554dc0e24d9c85614` | Variant，屬於 `Text Cell` | ⚠️ 尚未填寫 Description |
| Text Cell / Size=Extra Small | `c09c1744417a58a686d65582f5bac764500415c1` | Variant，屬於 `Text Cell` | ⚠️ 尚未填寫 Description |
| Text Cell / Size=Large | `c4411ecaabdec3190b7d49a006a5ba1610c8efb4` | Variant，屬於 `Text Cell` | ⚠️ 尚未填寫 Description |
| Text Cell / Size=Small | `18381de091d80fedbd8ae72f0a2f91edad72766b` | Variant，屬於 `Text Cell` | ⚠️ 尚未填寫 Description |

### Charts（130）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Chart Dot / Style=Amber, Border=1, Type=Color Border | `0c1ce523e1de3a60a7f090356e46e80d7dad8913` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Amber, Border=1, Type=Color Center | `684c90ee8bff0317c41f472ab2cff9571e0f43d2` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Amber, Border=2, Type=Color Border | `80c711f116032ec14018a5c91671297e60024565` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Amber, Border=2, Type=Color Center | `fe734fa482b4c5be05180601bd412b248632a365` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Blue, Border=1, Type=Color Border | `7d95f0c3bf885779a153b78942c591cc9a2fb881` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Blue, Border=1, Type=Color Center | `f887f97bc63194e9c51972d36bf47e41bd5f1b13` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Blue, Border=2, Type=Color Border | `8fab789e9239bb73bcf957fce07bd09568223385` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Blue, Border=2, Type=Color Center | `18425677a0b909548a78a09547f639c49a557d8c` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Cyan, Border=1, Type=Color Border | `08a81031993a02c97a40504ddba74fa655491964` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Cyan, Border=1, Type=Color Center | `09c902a23d9c861364d8ed95d6669f3c15a2392c` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Cyan, Border=2, Type=Color Border | `145c3828f1a919ab7d4113e79d4b3e79b3152806` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Cyan, Border=2, Type=Color Center | `3141ffd72564e15937179b86babea8ab54ec7dd5` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Emerald, Border=1, Type=Color Border | `73c09bb421a162f723d67eacc159a9c4d1bb8655` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Emerald, Border=1, Type=Color Center | `bda79e92bc01b28b4932b9289d367a72bae1833a` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Emerald, Border=2, Type=Color Border | `31e94097d6b1bd22f25ecf0beb38827f07b606dc` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Emerald, Border=2, Type=Color Center | `6ed16cc33d1f0d593372ac275541ff8afe6378f2` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Fuchsia, Border=1, Type=Color Border | `dcdc96b7e958a333ce8aa4d3277764c8c989c8a4` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Fuchsia, Border=1, Type=Color Center | `b918b863ef7db09be5d3af511ce0154b7afd6354` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Fuchsia, Border=2, Type=Color Border | `f4212d54b1627f22465e1081e927d8af0bf5d751` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Fuchsia, Border=2, Type=Color Center | `5bfa01b6373ed2a9dc497bf1a7a74483b4f57a1e` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Gray, Border=1, Type=Color Border | `94661b1aceb5c3022f12f4880a9b2ebf36b73fd7` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Gray, Border=1, Type=Color Center | `728d5e9b80f941922d22215d11f8a60b18d9af6c` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Gray, Border=2, Type=Color Border | `edb187f798adef37df5afd256c90b931e06b3dc7` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Gray, Border=2, Type=Color Center | `4c1e5f4f7ff700bfeaac19e992091f9f72eb51c3` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Green, Border=1, Type=Color Border | `211faae5d404c80212f7489e2b69de0964214588` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Green, Border=1, Type=Color Center | `8eac0f8f235d5cfc2805cf180aef877e465af9de` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Green, Border=2, Type=Color Border | `a8aa0b7acfb8111fec0f864cfdf95a2e9d73d1ab` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Green, Border=2, Type=Color Center | `b301f17cd92d94d1863c5de9f275ecfdd550964d` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Indigo, Border=1, Type=Color Border | `19cc4a89230dfd1ae5834fc9278bc9323c75acaf` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Indigo, Border=1, Type=Color Center | `f0a91a8de438df1215f372e0b5fe8e9ddbd12ecf` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Indigo, Border=2, Type=Color Border | `4d3fba56e71c5a0938f954436facb68958f03eeb` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Indigo, Border=2, Type=Color Center | `e44b5fd737d816e7bbf804dfe0e023eaff772221` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Lime, Border=1, Type=Color Border | `3219a478361cece7933be5623d417393a7266373` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Lime, Border=1, Type=Color Center | `f86074daed2a2c541eef0c66e29bfbf03f5420b2` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Lime, Border=2, Type=Color Border | `7d4dfab05927e86fdf472297974859b8aff01857` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Lime, Border=2, Type=Color Center | `73216c04f549c44c30c5509018a9ba85ac967be0` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Orange, Border=1, Type=Color Border | `4a06a8c97cfe69d8a2a2c84c2e2595d4dd91c170` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Orange, Border=1, Type=Color Center | `6dcdebf3cf91ae6c689ebf9f026f85376f24cffb` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Orange, Border=2, Type=Color Border | `a0b37d75eee5b959a06dde8d4bb6e97939e506bc` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Orange, Border=2, Type=Color Center | `af63fcbe41776acf4812027859fb08a1f3bd7297` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Pink, Border=1, Type=Color Border | `fadd2bb4f3e50828099913222ae6a0a7e247b3e5` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Pink, Border=1, Type=Color Center | `6d43396055dabc3c9c81072e3c3b54dbdabdf8a7` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Pink, Border=2, Type=Color Border | `3325e393c8c814bcab65633346e0b5659083e59e` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Pink, Border=2, Type=Color Center | `ad96c60dd67cbd6b394ba50012c64d784fbc4c9e` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Primary, Border=1, Type=Color Border | `036af4d2b6ed71002e4b399111779e042774718a` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Primary, Border=1, Type=Color Center | `4fb4cef56620d2ed97446f549495ed5750abdc2d` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Primary, Border=2, Type=Color Border | `4039bb05bb3834e13c35c877588c8c87f9ebc540` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Primary, Border=2, Type=Color Center | `bdc05ef3cd8f8c2d37247930f7dd4fca8abc5dda` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Purple, Border=1, Type=Color Border | `0d1d738cc147cfd57afcbd6c6634478f8522cbcc` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Purple, Border=1, Type=Color Center | `9f03d2128f23aa537d4d50cddf6e1582a86a1b30` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Purple, Border=2, Type=Color Border | `f0af7c800611447abb815505043d36c76a8ec42b` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Purple, Border=2, Type=Color Center | `20e9f3e448a1f89361e1f339143cac68598f6a94` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Red, Border=1, Type=Color Border | `a149f0331839a07c0335c669b918bd6922a3c6a9` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Red, Border=1, Type=Color Center | `ff91b1de9985b199451b9b9a06726fa123c33755` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Red, Border=2, Type=Color Border | `5fcf32f8c7fba54ae2ad42d64c8ac608b215022d` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Red, Border=2, Type=Color Center | `7659c10899db6954dafe29c0976fa479e169253e` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Rose, Border=1, Type=Color Border | `004c39fa26c541ac43de9fe861de94f9da334b3b` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Rose, Border=1, Type=Color Center | `5a860f3252a451b0b45c53ebfabaa4361c4aca98` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Rose, Border=2, Type=Color Border | `a16105483688f5cbbcdee60a7760f19c405375a5` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Rose, Border=2, Type=Color Center | `931c09631f06211fc328a8b055e1909152d1b09d` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Sky, Border=1, Type=Color Border | `69e5f20da9bea2920f765e62ce0ea78fc2dbab96` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Sky, Border=1, Type=Color Center | `6b494388335751274670c3136d6d129ba16301d7` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Sky, Border=2, Type=Color Border | `d2447aa8e7f0e4a04d8a3890697e53eb5898e343` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Sky, Border=2, Type=Color Center | `ed01f1e2fcdd2bf4dd1ea52ce3ba2fefa44590b6` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Teal, Border=1, Type=Color Border | `09adade167b1c9a85994bd46820c614073e13811` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Teal, Border=1, Type=Color Center | `d469dbed4fdf2a5c07e634a16af845bda6d1ede5` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Teal, Border=2, Type=Color Border | `b54753fa161d182381f0d8d7252c6f4f386d5e03` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Teal, Border=2, Type=Color Center | `7fa8a41c396cd5ed96891385a223aa0a5fa0c149` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Violet, Border=1, Type=Color Border | `ef9337a221cdc760e2d7e7efb64cd3c02b84cc42` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Violet, Border=1, Type=Color Center | `fb49a32790f21e7d156a12514af57df550a193e5` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Violet, Border=2, Type=Color Border | `7d8dd16010484ce741f3a2e66ba0d10c64b34b23` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Violet, Border=2, Type=Color Center | `d71b9a1e9b47b21f642fcf68072c5371e67212b3` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Yellow, Border=1, Type=Color Border | `c02012e60c26798417189c5454f62c59418db4f0` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Yellow, Border=1, Type=Color Center | `a81fbffd82e47f5a5fbe476fe90b23d9e0eb7101` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Yellow, Border=2, Type=Color Border | `141fa8f7353650e82414edea7f268d7df3e48468` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Chart Dot / Style=Yellow, Border=2, Type=Color Center | `4af89307335a8bb6d3c363db3710801cb27b7681` | Variant，屬於 `Chart Dot` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Amber 500, Type=1 | `3a2f79e803cf449494b24ae961f340f6c941214b` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Amber 500, Type=2 | `8648406181318bed5a7bf8afdb7d74cc01397231` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Amber 500, Type=3 | `d56d1c0f4a47bf324108bccbe5fad7eb80e1f0ab` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Blue 500, Type=1 | `d6ffe6b7c0cf20745f59771118e52474ffb02e73` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Blue 500, Type=2 | `c0ed57b3bcac3373cdeb243e7e0411c304c116ed` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Blue 500, Type=3 | `534239ebda7b5e8ae5af089082e0f63d52ef7c04` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Cyan 500, Type=1 | `93d35240ae704be9f946fa6f4126930cc86ac091` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Cyan 500, Type=2 | `6a19f6972e2995256dda1b0533d2d206aff122de` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Cyan 500, Type=3 | `689c433883294eeaa5ed06437eea32ac08db6dd4` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Emerald 500, Type=1 | `75f11582aac924884acb837c3fd5dbb4e3580236` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Emerald 500, Type=2 | `4ea84a0b1cf67d46655310df8a02963e95bca6e8` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Emerald 500, Type=3 | `e090137f6cbc53753a4b84b58614ab9168b46de8` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Fuchsia 500, Type=1 | `160baa04d843b3cf2b6c9cbf77daa46b3f8860c5` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Fuchsia 500, Type=2 | `1ff9ea27b11e3c370c9b3ea6ed620e8a7612c6e3` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Fuchsia 500, Type=3 | `df8a3ddb926d1aea6ed6ee533ae223eeb5583c4a` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Green 500, Type=1 | `be1166328246efe7407c3c86f5919e89de5f0a1c` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Green 500, Type=2 | `02cb4a496a5a7b144f6542dd05b423f817a1f2fb` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Green 500, Type=3 | `bbefbc8e3580dbb3a4c8031650c36d5ee49773f6` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Indigo 500, Type=1 | `9e82853a0e84876a9e4023feed0f02be2e6e8b52` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Indigo 500, Type=2 | `2afe057cde9ea8431385b59b5045eef223d2376f` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Indigo 500, Type=3 | `39b847900e7afec397af55ae070f2e0de813e3b2` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Lime 500, Type=1 | `287cbafcbb36628ae61efcd1b5804d15e74f51a5` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Lime 500, Type=2 | `1c0fd03a728bdef4fa4ca3e60d4c295e123538c7` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Lime 500, Type=3 | `467e7739ae33f07468457f93ea4fb5a48c52ab38` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Orange 500, Type=1 | `e9f44ec7a9666393690f6b096ffdca60a1e152df` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Orange 500, Type=2 | `a5cd2bd4346d8350ee41d9f63939de90dd9376fb` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Orange 500, Type=3 | `6398e559c1266b5b9b5caddb08b1b138b42718da` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Pink 500, Type=1 | `0f9281a993836394a8e11260b4b137dff8152fce` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Pink 500, Type=2 | `e08445dd38ba63d3ab61e8bb70f52d1ca624d120` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Pink 500, Type=3 | `156c3e024d9039a1731893d5098247457680287f` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Primary 500, Type=1 | `4d95ff086e4db5dda59dd441bac28904f3a060d1` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Primary 500, Type=2 | `c91cded23488ae9ddf9ba96696669adf86597784` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Primary 500, Type=3 | `483cd5b95588885d6478f1fc9649d356029ea127` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Purple 500, Type=1 | `50faf3ff6a83a84ec5b721bf647aa5153ee23a41` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Purple 500, Type=2 | `ca0b37f0aa7f8b168c6de3d5d4d262f640c1f759` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Purple 500, Type=3 | `606d2e863fa9818655a5cc72560d35cb3fea2b42` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Red 500, Type=1 | `61f7fb7acd92b422ec67fb2d44fd592dd3e6e4c2` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Red 500, Type=2 | `2fcba6893553100de656161fc69564210233bad4` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Red 500, Type=3 | `a18d7900175f0b5b6686bb7e65fdbfed05cc93ed` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Rose 500, Type=1 | `fc530e7cb6849480d233d6dd47095abd2a80b6a0` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Rose 500, Type=2 | `5dacedb2b26308b80fb1c88563a93641775a12db` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Rose 500, Type=3 | `9f7a88e694b55c3032e31853688865a82418e54d` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Sky 500, Type=1 | `4481e42e528246ad7d92a1e57fdc02ec14b728a2` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Sky 500, Type=2 | `93d20bccf8ed54bd2778ec461a98c30920b3af7a` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Sky 500, Type=3 | `c013cb8de2863adb24da7b17c2c573c7c44ab28b` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Teal 500, Type=1 | `2a97e9d9229d56f9be5db6447e11ee1e96563c72` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Teal 500, Type=2 | `bad6d9b65e0e71cbefa72f79480a09bdf889fe71` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Teal 500, Type=3 | `0ff1ece6cf30fa808fabfd839ed928e9a9be0f56` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Violet 500, Type=1 | `00fd597022457127cf493da877b86512c1579103` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Violet 500, Type=2 | `31257438fc916c99f713b01ce795026bc394df22` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Violet 500, Type=3 | `a199181e54a8c3d48ff624ef485e159f4165143b` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Yellow 500, Type=1 | `28e0005a7d7d9b87f723510774c6c9998fd7b8a9` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Yellow 500, Type=2 | `992aaa3c70c9a5825f353c957858576dcf947124` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |
| Line Chart / Style=Yellow 500, Type=3 | `e5a42e020f8b23c0b52dc75d5fedfd9587883a96` | Variant，屬於 `Line Chart` | ⚠️ 尚未填寫 Description |

### Dialog--System backend（79）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| alert--dialog / Property 1=1 | `95c538a9e18ff5a4a07bd76a78fdacb097ae83aa` | Variant，屬於 `alert--dialog` | ⚠️ 尚未填寫 Description |
| alert--dialog / Property 1=2 | `965928187921b7e02e5d9c3ab1e8a74e7d4b7895` | Variant，屬於 `alert--dialog` | ⚠️ 尚未填寫 Description |
| alert-content--dialog / Property 1=content1 | `5654ffe3cc707ceba74e998b03c0cfc13984f8db` | Variant，屬於 `alert-content--dialog` | ⚠️ 尚未填寫 Description |
| alert-content--dialog / Property 1=content2 | `6d595e1b1c07a8820dfe7fe245d2d053a6042fdd` | Variant，屬於 `alert-content--dialog` | ⚠️ 尚未填寫 Description |
| alert-head--dialog | `a9a482765a3fac1bcfd0d2bc3b7976feac0f5b38` | COMPONENT | ⚠️ 尚未填寫 Description |
| alert-title--dialog / Property 1=上架失敗原因 | `dd15073db27473aaf74d0a7d07bf5b40cfe6663d` | Variant，屬於 `alert-title--dialog` | ⚠️ 尚未填寫 Description |
| alert-title--dialog / Property 1=Default | `98e9653b6a92c3b3e9bc32ed227a28d18768fb98` | Variant，屬於 `alert-title--dialog` | ⚠️ 尚未填寫 Description |
| badge | `fe7be50710bcd7ae24ea7f6e686022147f13059c` | COMPONENT | ⚠️ 尚未填寫 Description |
| badge-merchat / Property 1=商戶一 | `e963f74d37c379bd4ab3761628659b5c540fc512` | Variant，屬於 `badge-merchat` | ⚠️ 尚未填寫 Description |
| badge-merchat / Property 1=商戶二 | `7332b75f5e3a5f37aa01d9d4934dafc428ecf97a` | Variant，屬於 `badge-merchat` | ⚠️ 尚未填寫 Description |
| badge-merchat / Property 1=商戶三 | `e81a2a547443874a084bbadc89cf67389d1c5fa4` | Variant，屬於 `badge-merchat` | ⚠️ 尚未填寫 Description |
| badge-merchat-select--pc / Property 1=close | `7e8292e7708db763c4b1ac6e4f31589770daa804` | Variant，屬於 `badge-merchat-select--pc` | ⚠️ 尚未填寫 Description |
| badge-merchat-select--pc / Property 1=open | `4f17e6fec8e1d6adc528c3f59ca73c31feb50c7e` | Variant，屬於 `badge-merchat-select--pc` | ⚠️ 尚未填寫 Description |
| badge-merchat-select--tablet--mobile / Property 1=1 | `812584fa760a9b626320b9c608f46982cc3ed4ee` | Variant，屬於 `badge-merchat-select--tablet--mobile` | ⚠️ 尚未填寫 Description |
| badge-merchat-select--tablet--mobile / Property 1=2 | `8cfc4912cd4c41edcdc8540f7499b2be8c1d3e37` | Variant，屬於 `badge-merchat-select--tablet--mobile` | ⚠️ 尚未填寫 Description |
| content--dialog / Property 1=Default | `c16112b6a6185d9468a6e5672d95b49c92d143cf` | Variant，屬於 `content--dialog` | ⚠️ 尚未填寫 Description |
| content--dialog / Property 1=title | `98dbaeebde9f64eabe8830b5d43416de1b230370` | Variant，屬於 `content--dialog` | ⚠️ 尚未填寫 Description |
| dialog--system-backend / Property 1=Default | `6b03fc92fad4785130ba748934e79bcaf5caec8e` | Variant，屬於 `dialog--system-backend` | ⚠️ 尚未填寫 Description |
| dialog--system-backend / Property 1=language | `d5681b7b60df3f61d8584134fdc8d2f923c7e0c6` | Variant，屬於 `dialog--system-backend` | ⚠️ 尚未填寫 Description |
| event-row / Property 1=Default | `a2f5f1b3d83defa10b14cf99e8f5028d0d83d0b5` | Variant，屬於 `event-row` | ⚠️ 尚未填寫 Description |
| event-row / Property 1=Error disable | `e99ba0e492cd3fea9ce1862c73d04e76f616c64f` | Variant，屬於 `event-row` | ⚠️ 尚未填寫 Description |
| event-row / Property 1=Error enable | `d41e46bb66540c3d563e9e433042ab636e5010fd` | Variant，屬於 `event-row` | ⚠️ 尚未填寫 Description |
| event-row--select / Property 1=已選擇事件 | `89682593b36af651ab4be9d95654cc563698beb3` | Variant，屬於 `event-row--select` | ⚠️ 尚未填寫 Description |
| event-row--select / Property 1=部分成功 | `aa6aec33817bfcf6e187cab3d5cd191816c1a6a5` | Variant，屬於 `event-row--select` | ⚠️ 尚未填寫 Description |
| head--dialog | `fe5fbeeadc78b2d623dcc9c440e854bdc1d4b39c` | COMPONENT | ⚠️ 尚未填寫 Description |
| head-select / Property 1=1 | `5fe5cc2bfb1db895bebeed08c7ad1a6fabff69a7` | Variant，屬於 `head-select` | ⚠️ 尚未填寫 Description |
| head-select / Property 1=2 | `8f951d4be3af2c49c33a2e3609cd07449ef6b9fd` | Variant，屬於 `head-select` | ⚠️ 尚未填寫 Description |
| head-select / Property 1=3 | `597b3ee103a9931415dba997ac18d17a28dacd51` | Variant，屬於 `head-select` | ⚠️ 尚未填寫 Description |
| head-select / Property 1=4 | `05bf778d3b412633ffac2bd9a22f96828b9b44eb` | Variant，屬於 `head-select` | ⚠️ 尚未填寫 Description |
| item--checkbox--dialog | `230a4bbd04fa6b6613dfe4f8780725a7e2886637` | COMPONENT | ⚠️ 尚未填寫 Description |
| Item--dialog | `7d4308718d6dd9ddff69d6509ab7c1b7aacc4126` | COMPONENT | ⚠️ 尚未填寫 Description |
| item--group / Property 1=language | `904d328aa73618fb75f7ca396b19f8bf66682dca` | Variant，屬於 `item--group` | ⚠️ 尚未填寫 Description |
| item--group / Property 1=merchant | `02799c72d7a5934198e086dbd96a1442534cd344` | Variant，屬於 `item--group` | ⚠️ 尚未填寫 Description |
| item--group--dialog | `d19db063904814fd4026e85847a2d951c3b19fa4` | COMPONENT | ⚠️ 尚未填寫 Description |
| merchat-select--mobile / Property 1=篩選器--close | `bbb7e63802ff4fd324614d032724c650b57ff151` | Variant，屬於 `merchat-select--mobile` | ⚠️ 尚未填寫 Description |
| merchat-select--mobile / Property 1=篩選器--open | `1b53a928a65ad3a481ace4533769707cdba76378` | Variant，屬於 `merchat-select--mobile` | ⚠️ 尚未填寫 Description |
| merchat-select--pc | `a43ce57575bc295629ecd44fa6be282a4c2dec9f` | COMPONENT | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=上架失敗 | `b5008d2afc7b92196cd839a976703b3f7f7bf290` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=上架成功 | `30a76feae5ef481f762780d60fabbb2ff0fef475` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=下架失敗 | `24e906f4d7d343b4604dca69f0854d16a40416be` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=下架成功 | `71d7144e343ffbb96b00832810e39136a384c1d1` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=已成功生成內容 | `8025c189e35e2e9e495397ce65d27c48ebc89026` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=已成功生成所有內容 | `0f669ac32378c742dc3b82d46feeeb5bf216cb80` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=生成內容失敗 | `91ac39f59391eb7158a2a17a867c006600b0fbb3` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=事件新增失敗 | `fbd15b9bcf241a02a2daf542af86dc35408997dd` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=事件新增成功 | `9c7a6909c10d20ccd96771a7b8e8e5fed585dcc1` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=事件編輯失敗 | `ac64c03a31f45c1f1019eb7ed08b5198851c7961` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=事件編輯成功 | `b96763b11eb9af97e06b8ba35c3238f7473b130a` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=部分上架成功 | `0103c0399fbe7db82f7663b0acd958397a279ba5` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=請至少選擇一格資料欄位 | `a94e8c5dfb3e67c7402ec1bb6c6a3eeb27adfa1a` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=儲存失敗 | `e321a045ecfc1feb9ff2282d246aabf298b153d6` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome--dialog / Property 1=儲存成功 | `0cbb80355c1f729cbfe2fcca664d5101bf875343` | Variant，屬於 `outcome--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=已成功翻譯至其他語系 | `aa2d49315f01f5e516190227b363ac343dd4c828` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=目標語系不可包含來源語系 | `b9aa3ba55087af0ac80c7ab1cab892e0fff2f8f7` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=事件不存在 | `d6a05796844353ae43dd0322f1cb10fc62ccfebe` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=事件名稱為必填欄位 | `b3422fd7711a272b84f63fdddcb679620372b179` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=事件新增失敗 | `647bb26298997c2910254cc5695dc3fdd78af948` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=事件新增成功 | `4f0c15b1cd4f67fa6af59a255fdbf4ba7db39dd6` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=事件編輯失敗 | `ffb4dab7572f0cc5eb8bbd4dbaaf30bd4ed7817d` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=事件編輯成功 | `480ded264b6f170013972628b9f93a34051a94a9` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=來源語系無內容，無法執行翻譯 | `6cecbb1271e835196caf5e6c3041977f2c02fa13` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=該語系已被停用，無法執行編輯或存檔。 | `14cf5ff7bcd0db3100bfdb2e59d04ae620d820e2` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=請至少選擇一個有效的目標語系 | `1dbbdd5456baaf7b03eb919d7d926c0287d5f39c` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=輸入內容超過長度限制 | `2c465a835cd06721e32663ee293ef50962310727` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=儲存失敗 | `0569288357b2930385b53f2681d81039c067eeec` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=儲存成功 | `914e7aa82cb5dccc2684546c27de4e0d4161e8ea` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| outcome-event-language--dialog / Property 1=翻譯至其他語系失敗 | `73b99085fc7a8322c660007009299264c739b460` | Variant，屬於 `outcome-event-language--dialog` | ⚠️ 尚未填寫 Description |
| radio--dialog / item=off | `65a84ea772aba9488618a459c5ab178bb324123f` | Variant，屬於 `radio--dialog` | ⚠️ 尚未填寫 Description |
| radio--dialog / item=on | `772aa35cedafab7a5799f32a97cb60f9caee685d` | Variant，屬於 `radio--dialog` | ⚠️ 尚未填寫 Description |
| radio--group--dialog | `139463b6f14c6319dc203029212ca97b44f36e1e` | COMPONENT | ⚠️ 尚未填寫 Description |
| secondary button--dialog / type=active, status=default | `f38443a70e0a1bc689414abccf523836cb655418` | Variant，屬於 `secondary button--dialog` | ⚠️ 尚未填寫 Description |
| secondary button--dialog / type=active, status=disable | `803c7c8ae13ca5afce45146db82c5aac297080c0` | Variant，屬於 `secondary button--dialog` | ⚠️ 尚未填寫 Description |
| secondary button--dialog / type=active, status=hover | `f98588207563910ee67e7982574dfc26f811bee9` | Variant，屬於 `secondary button--dialog` | ⚠️ 尚未填寫 Description |
| secondary button--dialog / type=default, status=default | `9401076f8ad55ee0913ee0d1d63805b540653a20` | Variant，屬於 `secondary button--dialog` | ⚠️ 尚未填寫 Description |
| secondary button--dialog / type=default, status=hover | `c7164b6935e8921b4ace4b08660dc30bca247ce9` | Variant，屬於 `secondary button--dialog` | ⚠️ 尚未填寫 Description |
| secondary button--dialog / type=warning, status=default | `cb4edb963f8745c8cc2fd01425a85005497ac215` | Variant，屬於 `secondary button--dialog` | ⚠️ 尚未填寫 Description |
| secondary button--dialog / type=warning, status=disable | `bc2826be45b508d9d0414d2e916c3f7f05e2aaed` | Variant，屬於 `secondary button--dialog` | ⚠️ 尚未填寫 Description |
| secondary button--dialog / type=warning, status=hover | `ae88056510b7bb63de5954ccb3998f0c6619428b` | Variant，屬於 `secondary button--dialog` | ⚠️ 尚未填寫 Description |
| text cell--dialog | `1f683fd74c29c29cc0ef4d9e59a51857dd909681` | COMPONENT | ⚠️ 尚未填寫 Description |

### Divider（8）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Divider / Type=Button | `22b7d524128c33d1f9266efcfcced41c752207c0` | Variant，屬於 `Divider` | ⚠️ 尚未填寫 Description |
| Divider / Type=Button Icon | `9d0876e63b0b11dc911de098658597d0182dedeb` | Variant，屬於 `Divider` | ⚠️ 尚未填寫 Description |
| Divider / Type=Default | `6f8f18a655a6e86adae822f6dbabd1eabde55f7c` | Variant，屬於 `Divider` | ⚠️ 尚未填寫 Description |
| Divider / Type=Icon | `6432b8db18832da285993e1aeb4cf55faad0cd5d` | Variant，屬於 `Divider` | ⚠️ 尚未填寫 Description |
| Divider / Type=Left Center | `4ff0da08629be1174167c3e2be11b5b21bad7eed` | Variant，屬於 `Divider` | ⚠️ 尚未填寫 Description |
| Divider / Type=Text Center | `c9b54aaa6d88c2b63d0409850a14e322ab50489a` | Variant，屬於 `Divider` | ⚠️ 尚未填寫 Description |
| Divider / Type=Text Center 2--disable | `e03f571da6438a3303e603b5d10264468616ed10` | Variant，屬於 `Divider` | ⚠️ 尚未填寫 Description |
| Divider / Type=Text Center 2--enable | `b5f6f9688c50449a0bec3272250d45b8c27e3c1d` | Variant，屬於 `Divider` | ⚠️ 尚未填寫 Description |

### Event pic（7）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Topic image / Property 1=1 | `839775ca33948816858f093efb113cad7e245400` | Variant，屬於 `Topic image` | ⚠️ 尚未填寫 Description |
| Topic image / Property 1=2 | `d50dada692035934f06bce288f3059e8e4f7acf7` | Variant，屬於 `Topic image` | ⚠️ 尚未填寫 Description |
| Topic image / Property 1=3 | `bf1943a02f12e42e17590274f61d1a056a4e32bd` | Variant，屬於 `Topic image` | ⚠️ 尚未填寫 Description |
| Topic image / Property 1=4 | `308d46674f610efc8b6be35da8e8849ae9bb5ffb` | Variant，屬於 `Topic image` | ⚠️ 尚未填寫 Description |
| Topic image / Property 1=5 | `48f1ebd2041848cd730070bf084f3ce47841844b` | Variant，屬於 `Topic image` | ⚠️ 尚未填寫 Description |
| Topic image / Property 1=6 | `162fb96f214d88eebd0bf5af5b351e0264d1ef9b` | Variant，屬於 `Topic image` | ⚠️ 尚未填寫 Description |
| Topic image / Property 1=7 | `ca8ee8401a9a507a120cfb83d50a7816e8b45267` | Variant，屬於 `Topic image` | ⚠️ 尚未填寫 Description |

### Footer--System backend（2）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Footer--mobile | `8bdf67801733f7f4cc31c18b1401e2e77180cdd9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Footer--pc | `91f1cd5708155e1cd07344fddbd5d067418deab3` | COMPONENT | ⚠️ 尚未填寫 Description |

### Forms（121）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Checkbox / Status=Checked | `2d600ccc9e1e6f4cba3cbb94d61197bac2af450f` | Variant，屬於 `Checkbox` | ⚠️ 尚未填寫 Description |
| Checkbox / Status=Default | `0b9ee188b91060294749892741aeba9ef39ba25a` | Variant，屬於 `Checkbox` | ⚠️ 尚未填寫 Description |
| Checkbox / Status=Dislabled | `a5e4dbaadda1a32bf3fcae4bf733e98795ad5198` | Variant，屬於 `Checkbox` | ⚠️ 尚未填寫 Description |
| Checkbox / Status=Focus | `72cc431faf9682827489adc143d3839cbd6cf29e` | Variant，屬於 `Checkbox` | ⚠️ 尚未填寫 Description |
| Checkbox / Status=Indeterminate | `c22a683872c621a884e8e0e20e6e65aafc79821f` | Variant，屬於 `Checkbox` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rectangle, State=Default, type=Default, height=Default | `1b9b7df247a10e3c142017d1f4300f2021cb7259` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rectangle, State=Disabled, type=Default, height=Default | `72ee35a4ddfe792eac3ce3dd208509af974499a3` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rectangle, State=Error, type=Default, height=Default | `abd76c118885b6a25d1fdba877cc96926e5127c7` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rectangle, State=Filled, type=Default, height=Default | `6e1542052c2f54dc95d351e4b0693704cd1ac9ac` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rectangle, State=Focus, type=Default, height=Default | `5e8e8f993fd3d54a18c5c07172b0f56261bd3374` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rectangle, State=Succes, type=Default, height=Default | `0e227477c9d9524272ee30e0ca8a192dc3938437` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rounded, State=Default, type=Default, height=Default | `d03461590ef2690f05bf2d02c89e4fff5a92ffd4` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rounded, State=Disabled, type=Default, height=Default | `07428d24b4e5215f554b61ea420841a6ec62021b` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rounded, State=Error, type=Default, height=Default | `d6596b02193b75be8af07639238008076fa9429e` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rounded, State=Filled, type=Default, height=Default | `e3f2d6df77e1661dfd3a8e959270cbb9a93c16ee` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rounded, State=Focus, type=Default, height=Default | `daa45a0a15c326aede8e39a76d9c5bb8a6586039` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Default, Corner=Rounded, State=Succes, type=Default, height=Default | `0b2fa4e9f1001d7b4a74561ca8ff7d0bf2558316` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Default, type=Default, height=Default | `83e90362a4728b561c3451d166c5167b8449e7cb` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Default, type=RM, height=Default | `5e767c0ac002f90f3b6bbbbada6ef40cb55f4be7` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Default, type=RM, height=Gamedetail | `07fbcc69f277aefbafdec36889386ae426bd8709` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Disabled, type=Default, height=Default | `674257b4d51ce29fb82c3bb966c2107f0d4634ff` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Disabled, type=RM, height=Default | `8f9da69c77e7265e0a13fc085a9124abdaddfabd` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Disabled, type=RM, height=Gamedetail | `94c57eec5312281bd4a0c74bf9fde3136c07cbb9` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Error, type=Default, height=Default | `4b8854810d34815c62680f2a4333a2ad04bc312e` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Error, type=RM, height=Default | `8ac3e19c52704dea17ef26e5be2fddf3ffbf5f18` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Error, type=RM, height=Gamedetail | `c1bdc8d00725abf745f804b6d9536de1629688b5` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Filled, type=Default, height=Default | `58c8afcbc5342f22f9e62b1d696bc11090925819` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Filled, type=RM, height=Default | `b893d2f68ec34f63b382d65e51d1cc93ee91c831` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Filled, type=RM, height=Gamedetail | `d5b682a2e712880c6bd2cac6e5d7424c3cb61888` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Focus, type=Default, height=Default | `c1768c7bd6841e237b696793ef25d75c8c662bfd` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Focus, type=RM, height=Default | `135ddf860a74dea8d42b418fab2be6bdacbbfd30` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Focus, type=RM, height=Gamedetail | `265714809bd496f9a86fe945743651ad202c3931` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Succes, type=Default, height=Default | `5573e1b5849171387848b4c68b3586a3d5b99004` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Succes, type=RM, height=Default | `a267438fe94686ad211ee140ad60041522cf14fb` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rectangle, State=Succes, type=RM, height=Gamedetail | `04db2b069845b79e1ef4363937ccf4280558bf68` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rounded, State=Default, type=Default, height=Default | `1e1ab70460aa1287cfd9a59ed42c44344b5acc06` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rounded, State=Disabled, type=Default, height=Default | `e24faad9dea3b4e26256f13891b33779f47a407b` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rounded, State=Error, type=Default, height=Default | `2fbfa823c6a781f9034668733c94c1b8eb894d62` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rounded, State=Filled, type=Default, height=Default | `5d77eb1acc82f9af9878976d2906a04f42c428d0` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rounded, State=Focus, type=Default, height=Default | `61dbac287279ad56c083b217355c55b66b5315ed` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Extra Small, Corner=Rounded, State=Succes, type=Default, height=Default | `cb5ae6cd4b735098e004dc879165ab3bd6498455` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rectangle, State=Default, type=Default, height=Default | `e22b7ef0e873886d18e5f16b243cbbf8cbdc9eeb` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rectangle, State=Disabled, type=Default, height=Default | `0c51a1ee1429b3351d41c7013afdd621e2a94b12` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rectangle, State=Error, type=Default, height=Default | `2e583d94f5877f0a4966868472c337103adcf3bb` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rectangle, State=Filled, type=Default, height=Default | `8c8b36b891ee47139e3ddf1ce874fc4678108429` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rectangle, State=Focus, type=Default, height=Default | `f7fca52c0ce0f0860aea1f40f52fcc5536ac387f` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rectangle, State=Succes, type=Default, height=Default | `b123e29505a56d61d1f3253fef96aa1bf694523f` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rounded, State=Default, type=Default, height=Default | `f2eb5353ca7c333039fcd70fddabae7ceb16a334` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rounded, State=Disabled, type=Default, height=Default | `d42e28c6cb1267fb7b10c8a9025e9b043ae1cd6b` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rounded, State=Error, type=Default, height=Default | `8481c51c149acafa988efdebdda074e3d079a19a` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rounded, State=Filled, type=Default, height=Default | `0ef768ef5d1f42b578605698706a1fa73396833a` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rounded, State=Focus, type=Default, height=Default | `ca6a1ae206a7f4cd0c4ee23c1c431f5b1eb4c720` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Large, Corner=Rounded, State=Succes, type=Default, height=Default | `7a92182223448df1f5fb2e4df900ee156332227c` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rectangle, State=Default, type=Default, height=Default | `2991ee1fed23da98366cfd61fd2fa3f789363df1` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rectangle, State=Disabled, type=Default, height=Default | `68a87f40d0a4bf1d062a527c071991daba1cb29b` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rectangle, State=Error, type=Default, height=Default | `0842c8f7d5cae3133529032f6bbd359f60b575a5` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rectangle, State=Filled, type=Default, height=Default | `730dc60fdedb044553a8f0749a676ef84cf031dc` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rectangle, State=Focus, type=Default, height=Default | `e02739264fd897f664af48e8da71ac23d4d12ffa` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rectangle, State=Succes, type=Default, height=Default | `a4ecfcf72778d4c4f412337da202270b4a214ede` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rounded, State=Default, type=Default, height=Default | `ff6a164b80761186742a0bb5765360a0dfae5f59` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rounded, State=Disabled, type=Default, height=Default | `ea8352aecf687a5dfb42302c05ccdca60c72e18c` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rounded, State=Error, type=Default, height=Default | `db5454f697bc0e29b004c73cb6b5e7ec4e91ff45` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rounded, State=Filled, type=Default, height=Default | `2679f33bf8edcdd915a3de1145e61e3f97eef519` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rounded, State=Focus, type=Default, height=Default | `c4d567a089e6d23a6264201f9d831a1401ba6b32` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Input + Select / Size=Small, Corner=Rounded, State=Succes, type=Default, height=Default | `98bfc7516977637ff29b263e8781a82be2c04eb5` | Variant，屬於 `Input + Select` | ⚠️ 尚未填寫 Description |
| Radio / Status=Checked | `23a3cfdaadbc3eb65022a1e51ef291d2257e02d5` | Variant，屬於 `Radio` | ⚠️ 尚未填寫 Description |
| Radio / Status=Dislabled | `e220c033a4437e58cd575394d510831b3da9d58f` | Variant，屬於 `Radio` | ⚠️ 尚未填寫 Description |
| Radio / Status=Focus | `8a2bd52d334f849b96e4b941bf14f6aaa78dd936` | Variant，屬於 `Radio` | ⚠️ 尚未填寫 Description |
| Radio / Status=Normal | `f444bad864eeeda26b4d41badab9064f50258a2a` | Variant，屬於 `Radio` | ⚠️ 尚未填寫 Description |
| Switcher / Status=Off | `5af6fc04aa8c0df68668510698ca13b879ca74c5` | Variant，屬於 `Switcher` | ⚠️ 尚未填寫 Description |
| Switcher / Status=Off Disabled | `b4ad23847b4db99ae42d785389d4dc17fa4d4825` | Variant，屬於 `Switcher` | ⚠️ 尚未填寫 Description |
| Switcher / Status=On | `7301d2487cd23b7d1d4921f682a2d57f4eeed77f` | Variant，屬於 `Switcher` | ⚠️ 尚未填寫 Description |
| Switcher / Status=On Disabled | `e3017e0cf6701bd0f128f96230760e515ffd3f9d` | Variant，屬於 `Switcher` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rectangle, State=Default | `360b0758d3944e4f2c01e4048b79b25acca65685` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rectangle, State=Disabled | `f3fbc9be9a5513a543f58de6024ae2f0acf10fa5` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rectangle, State=Error | `efec6970f3400a502505fe9ea57a40b4b8df4d7b` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rectangle, State=Filled | `aa8bb0ff14cddb1be3d5034ce09ef49886be2905` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rectangle, State=Focus | `ef91f70774076674ce67768c0b14513821d20e69` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rectangle, State=Succes | `5dccaa80b17712c5ae393ed5bbfcd2a59099d254` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rounded, State=Default | `3cf9b10a9ec9d4bd894873c043a3b91ab0b85eb5` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rounded, State=Disabled | `9d0b5fd3a0bdec9732719fb09ccae8f1a8d62a57` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rounded, State=Error | `6969fe470b6316e88a0cf4e304143dc778ca03c8` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rounded, State=Filled | `b6aa27155bea3d0ca969f6aa78d19f6b7886a3ed` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rounded, State=Focus | `794470390fce5ff49388a30c6da8de35736218c2` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Default, Corner=Rounded, State=Succes | `6722876c08d9a207cd3032d226c7f2407c419256` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rectangle, State=Default | `8d934f880841aa9ac349b044054e19958ed89c39` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rectangle, State=Disabled | `eea644677b616e3e7322cc193b6a839c406b51e6` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rectangle, State=Error | `58b6e2b368911be493560f1f62db0f1fbbc787b2` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rectangle, State=Filled | `f50deba0a9a09edb74bdd7355f30be5df86debd9` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rectangle, State=Focus | `4d4c24e888818628d1642d4bcfc0e1fd2e7f4615` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rectangle, State=Succes | `775a8d95b4d1a58d107d8a84b0b8d70b0e2fea11` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rounded, State=Default | `369458d22c7c4d24d3ab027131d450a5c7376182` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rounded, State=Disabled | `62fe61eb88d699a5747141fcdac69c0264dfd3c6` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rounded, State=Error | `32eb301cff5a18015dfc1aedbea2adddbc18adf6` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rounded, State=Filled | `37a1fdb916d1aa8f76fd920b66e9a396babcf0f2` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rounded, State=Focus | `8aebd4ba32ad6eeebbec2f44b588e31cc1b6b8bf` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Extra Small, Corner=Rounded, State=Succes | `e7095ed68084860b8c04e571a09e2cd42ed54188` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rectangle, State=Default | `81038eae730f4cc160c63480a59101895d8a43a5` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rectangle, State=Disabled | `035de948603305f64d7d3b1fdfdcd07de0a5de14` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rectangle, State=Error | `d967e7370686b06f4890e55e65c84917eb566722` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rectangle, State=Filled | `9c872ec76357a605f1fcd4449ab31a1ba9ab1e4a` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rectangle, State=Focus | `49119b5fbc85f1f210f6002729714eabb4747e4f` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rectangle, State=Succes | `a5398b3d7545ea64700481b515bd8cca36def3dc` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rounded, State=Default | `8ff5492dc3da96b4756736465ae1b83786ff8d94` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rounded, State=Disabled | `d17c703f2520793039f4ee99f794a608b03f01c5` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rounded, State=Error | `1e73681376f4b23a7e238f0c254a00946dcff7db` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rounded, State=Filled | `d06b010a2b3d97614e8e5c5163a8727c49c55a82` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rounded, State=Focus | `0ff019b11d55927b4e70114ce100a980a0ca46fc` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Large, Corner=Rounded, State=Succes | `941b76c96e9239af158a0a00a69a0441b9ab485d` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rectangle, State=Default | `efbbfad43d8984447f27682da06a0db8d7cdd343` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rectangle, State=Disabled | `8ec7fe05efe9e42d7eae01dde3c383a1d8362242` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rectangle, State=Error | `1ac127566837f182c224511d984929e555d8b7c6` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rectangle, State=Filled | `8877febdb3e87f270c37bf6e281832f4ce1c5455` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rectangle, State=Focus | `6f825584543712cda156218baa2eebc8bf28add6` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rectangle, State=Succes | `a87dc4b249daa63d14fce8889de1772d5fc4f6f1` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rounded, State=Default | `c8adb8bf4ed4e4650c73185cb8fc625a0e379e6b` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rounded, State=Disabled | `e51db5ed02b771328d2043b11b9495181364abcb` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rounded, State=Error | `cd46985f1af5ca4ea688fa5ac8a4026d0f01dc58` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rounded, State=Filled | `f0399117ca50251902f54a1feae71b1fc62a67e3` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rounded, State=Focus | `dab34e161934ee898484d30cdc83aeee3db81fe3` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |
| Text Area / Size=Small, Corner=Rounded, State=Succes | `5edcf4eca2aeee35cd0faac23f96ff6b9945e0d2` | Variant，屬於 `Text Area` | ⚠️ 尚未填寫 Description |

### Group Buttons（40）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Group Button / Type=Default, Size=Default, Corner=Rectangle | `79477c7ab97840f08cd4924c87147e34f2d71ff4` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Default, Size=Default, Corner=Rounded | `714051e21ed4c5a4b26f9c61a9067f5b969aa840` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Default, Size=Extra Small, Corner=Rectangle | `738dce66e3ca980bece14307bb2bdd0ab58b6df5` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Default, Size=Extra Small, Corner=Rounded | `3cd05cb4819cf7d4b7c5920239f643f7534f4c4b` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Default, Size=Large, Corner=Rectangle | `1ff4d0eee8421cc06d465c6ba805acb4c51e880c` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Default, Size=Large, Corner=Rounded | `fd71e399257db3683351baba1f1220524df19bb0` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Default, Size=Micro, Corner=Rectangle | `02d1694b33209a8a41b19cfc14e3141d344b7213` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Default, Size=Micro, Corner=Rounded | `e44c8cb4a8b894a7c56f925fbd13568d082440e0` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Default, Size=Small, Corner=Rectangle | `135b14d9f2dc2ed6b7060b9ec5ae79f90139a42a` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Default, Size=Small, Corner=Rounded | `399386fa4e8476b08f030d17d2074c4768f4171b` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Default, Corner=Rectangle | `bc15309325fb0d543146857e0a00380044de2f16` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Default, Corner=Rounded | `ce0833fded4c7f536e9c1d4a52b41ace23d48a27` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Extra Small, Corner=Rectangle | `0942286c970f8149648f118f0c62cafef48623d7` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Extra Small, Corner=Rounded | `1a27982c5a56333403231aed484c5a467daa919b` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Large, Corner=Rectangle | `1327cb16f0385b72b4255c80a03ee59166690756` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Large, Corner=Rounded | `8317a0d9394cdf7815923610e9bfdd8e56db6f46` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Micro, Corner=Rectangle | `8b4a6fac1a8fe41144ad1688fd54a687721b290f` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Micro, Corner=Rounded | `92acaf5a7d1890a5c8d230fa27a748264fb61b97` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Small, Corner=Rectangle | `075dc1faf05615da0f810806dd5bf58acf3459ae` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button / Type=Icon, Size=Small, Corner=Rounded | `3545b5ae7f0a7c452d28dbb2d1ac84d55fbf2691` | Variant，屬於 `Group Button` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Default, Corner=Rectangle | `13ad7fb65a1a48f7c5534bbd0741dd4b8e02360b` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Default, Corner=Rounded | `753288745ea02efc557b7dcb913305993185867c` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Extra Small, Corner=Rectangle | `cf2158d40f71bb3c137fe2ad746a80eb6b8f8f7b` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Extra Small, Corner=Rounded | `15d9fd0927ec1937926f719f2fc28dc30d079b97` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Large, Corner=Rectangle | `205b3f0ac2abe934cb2b0f379da6a0ce97292a93` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Large, Corner=Rounded | `85cc509465bee210eeb180140be60d211f8a124d` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Micro, Corner=Rectangle | `453e4bcf5ec8ce466ff731aa38929dd4d2a29eb5` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Micro, Corner=Rounded | `6a99414957d3cf9b44e397ad5e1104f980291346` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Small, Corner=Rectangle | `37dfc954b37bcaac480bde5f5491bbc82ffb464e` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Default, Size=Small, Corner=Rounded | `566b8c1e3a8ab4710d811764641332107c1f7323` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Default, Corner=Rectangle | `f7bbb2779cd1bbcffd562755e3d0092b20b12947` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Default, Corner=Rounded | `13d0bf5f8b30fefd80a69a20b52ca731725487e5` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Extra Small, Corner=Rectangle | `c0a8c0bcf0efa44496d144a3208bc6a5c8fd3356` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Extra Small, Corner=Rounded | `b3caff7b29f8db824b95f3ca773c0102e72e4489` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Large, Corner=Rectangle | `51ac54f5b480aba23abfb6614fb6935bd87b8a92` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Large, Corner=Rounded | `5682bbf246f244e1720087bc728e98429af0ede1` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Micro, Corner=Rectangle | `4525a7bb18af40dbed1170ea288a8f48f017de19` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Micro, Corner=Rounded | `56d8b7ca065694362284f58d3e0c40b31b3ed294` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Small, Corner=Rectangle | `abc1e1ff92f7bc4e9d802275659672763d5216f8` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |
| Group Button 2 / Type=Icon, Size=Small, Corner=Rounded | `14ff61c140289e8c19cfd71485b6569b916a1ec2` | Variant，屬於 `Group Button 2` | ⚠️ 尚未填寫 Description |

### Header--System backend（16）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| header / 類型=事件參數設定, 裝置=PC | `bef115c31e693be13c3f542ec3ef0cbdb187920a` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=事件參數管理/批次更新, 裝置=PC | `02bc72433a4a1530dd4b04dbbdc64635ecd94c14` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=事件參數管理/預設值維護, 裝置=PC | `bebda4208f9b5de51367666551d60071ff5eddd1` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=事件結算, 裝置=PC | `4d2ec4606b755f24998324fb61ed9b089e135253` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=庫存管理, 裝置=Mobile | `fc954a5965c459bc89b802ccf4d44c11d744c3dc` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=庫存管理, 裝置=PC | `4a865600255d734ad8eed6851f960f08230c0f67` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=參數類別管理, 裝置=PC | `47f1809da940564a3032abf5db744c6d50ea68aa` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=商戶事件顯示管理, 裝置=PC | `f230247346be9d949e444fcc7a7f5c682658a776` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=通用, 裝置=PC | `62f4a1c02a0fe0b064611b1d3245f445a37ca141` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=新增事件/結算事件, 裝置=PC | `137d067101caf5678eba46de8e3e317a367499c1` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=新增事件主類別, 裝置=PC | `cde3195d1355e31ce3c89dc3952969ec91cc4670` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=新增事件次類別, 裝置=PC | `b8313419ca79d3cb5d8bef1ba7685cec6597ed72` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=新增圖片路徑, 裝置=PC | `2631d42bcebee2757c39142b86a1740080721d1f` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=圖片管理, 裝置=PC | `7c79050235ccd2b77ea26bff6ec02d0876c0ef23` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=確認新增事件, 裝置=PC | `359c076fb8000591d8eea1976b758ae521e6cd14` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |
| header / 類型=確認編輯事件, 裝置=PC | `e880d59e0c5011f239ced4e34053aac163221089` | Variant，屬於 `header` | ⚠️ 尚未填寫 Description |

### Icons (Brands)（217）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Acrobat Reader | `59aa67bb1d73fcc07269159be8136506648264a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe | `1c4077a4e4498a849b2bc526befc953cf57407f5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Aero | `e059e67d06e5088946cfaacbbdd44932cf22505b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe After Effects | `bce643ca9e77e3462ddb3f37e7adca62193e5d60` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Animate | `f6c558b3b3e77071150e0c3d147236ae3e7e4378` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Creative Cloud | `da16e5d618207fbe4cbaf364f83f053c30456f4a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Dimension | `aa46518f9a5f9963a0be4d123fbad4aa86131075` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Dreamweaver | `e31205f811188077d4e827ba014fd405b6b857de` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Fill Sign | `3f144f1b8bf167ad72157e60725e8a042dc12039` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Illustrator | `d92a75b91de6ab88f3cb76aeeded0dfe2f7307b1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Incopy | `1468c941828bbc96ac70bdb4fcda22d806c739be` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Indesign | `15c2bf4fd11f83d4f8fd67085c20ad0bd583c7a8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Lightroom | `b1485b6de3ed92c8076831f903ac9121af93cdb7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Photoshop | `4c1002404b4bbd66192b3e8259c94f73443b16e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Photoshop Camera | `4893c2b8ca06d377a75d372cf4829a24ca24e85d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Photoshop Express | `2461a631f7da89e70968a7f4f66362c2b3dfc922` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Premiere | `c11a399421efa26e23e50cb3269eb9d3da3c9d76` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Premiere Rush | `5a9334e57297c1567b62d989ce9760875a211cae` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Spark | `c96a67af74e3daed754f5833186d3aa904c036ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe Stock | `320a8ae5b9387d00ae1a0e8d4c15631726150612` | COMPONENT | ⚠️ 尚未填寫 Description |
| Adobe XD | `667cb877114f34ca6052eca30ccb58d0aaa29636` | COMPONENT | ⚠️ 尚未填寫 Description |
| Airbnb | `b3f79dd5dff58a60aaf6bdd7091445b249727db2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Amazon | `297459f51365ce316248de2741ea1267145801c6` | COMPONENT | ⚠️ 尚未填寫 Description |
| AMD | `cd3f98b41803d2e9767386c17cda1b325f21a592` | COMPONENT | ⚠️ 尚未填寫 Description |
| Android | `2be9095eabd5d33dd5c5b16a09e6d55bd10f899a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Angel List | `7f251fd2a923255eb424a4e3a319285a3b60ec56` | COMPONENT | ⚠️ 尚未填寫 Description |
| Angular | `a39d2270e57f70f19de86537741bd6a46928dfe2` | COMPONENT | ⚠️ 尚未填寫 Description |
| App Store | `6c0f06cc5262bb31152069f9480269574a43d12e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Appearin | `736dff9e91a815fbb9258fd1052e92fe8a3ccbcc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Apple | `d6124ea2f72e815512d31ba6178c1b5215670da4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Apple Music | `6e6adddabfa2de3cdf4eb46f2fb52b99725e5b2b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Asana | `d36616f39ed2de0f64d78a570b6f48f17b0d8a79` | COMPONENT | ⚠️ 尚未填寫 Description |
| Atlassian | `ea4609e99c7dd284dd9a688720b4e950157619fc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Atom | `7ee756242320188aaf147af04202995a80bdbb4d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Autodesk | `5265a2ef3588c0b49b59cb464fbb56a2d8909886` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bamboo | `4edbbe72e5cbffe2d6433a9003c8296deb31e205` | COMPONENT | ⚠️ 尚未填寫 Description |
| Basecamp | `9bb909d9cd3ae0860d9e52805a486855b37e0366` | COMPONENT | ⚠️ 尚未填寫 Description |
| Behance | `29c7f1f7a9448103ec04cd685b721aefdb1ca70b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bitbucket | `f1a3f6c03ecb3657ee6e59d2aa8ed6f1b4f4675d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Blackberry | `cf21ac4d7578078adcc010a1b5f392d50c3669e7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bluetooth | `ea3fe27093f1d1d1630588da56f7efbd70ae1c8f` | COMPONENT | ⚠️ 尚未填寫 Description |
| C# | `aa18241253d2012736705475287e4614297b1887` | COMPONENT | ⚠️ 尚未填寫 Description |
| C++ | `cde5c8f860daf0eecdd86722713a041a46fc8714` | COMPONENT | ⚠️ 尚未填寫 Description |
| Chrome | `db21c386cb60600f70958a833fe6383d68bf9e98` | COMPONENT | ⚠️ 尚未填寫 Description |
| Chrome OS | `640400d59ae3ab4e09d7dbf13e9d8106dcb11f82` | COMPONENT | ⚠️ 尚未填寫 Description |
| Codepen | `7604f10b86a97ed6f3945ffa5422fbb793071fbb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Confluence | `372ef2f2facb7f6257269e437aaa90cb17ad8404` | COMPONENT | ⚠️ 尚未填寫 Description |
| Coub | `c1d9817d6c143edc13af49dda03776406c5eae28` | COMPONENT | ⚠️ 尚未填寫 Description |
| CSS 3 | `bdce2bde0c6796e43e3a91e4b032e73efa25815d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Dell | `6ab8191f903b015b538d4cee1b1653e444236717` | COMPONENT | ⚠️ 尚未填寫 Description |
| Direct Debit | `cb7c2c0115762828435fdc7f0930bc31318b37d8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Discord | `d0a0f2a7df2194ef509b19c2bcd9c12471971952` | COMPONENT | ⚠️ 尚未填寫 Description |
| Docker | `1b735b6795a08ec1a3e6192d4dc6cbca18122030` | COMPONENT | ⚠️ 尚未填寫 Description |
| Dribbble | `7f8679f4d7c1a13bed3795a9362cd37879da273a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Dropbox | `b60bbc0303d9d77c8f5ff85f48216ff336d6b665` | COMPONENT | ⚠️ 尚未填寫 Description |
| Drupal | `c1d4ed3bf31e3a516248546cfc8dfc023202b14e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Edge | `99193d0838f8f7c7e9e540f118ad8bdcfccd1468` | COMPONENT | ⚠️ 尚未填寫 Description |
| Elementary | `86302dbab7c0a909c1f18034020b2156f2b493f3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Envato | `e74649c12058a6deadc439b0ac780f91a3fac266` | COMPONENT | ⚠️ 尚未填寫 Description |
| Evernote | `31d79287ac6ef8299231fa33ece3bebd0c05c67a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Facebook Messenger | `95cc1f68d16a8bd73e009e05c28019e833b08db9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Facetime | `22cda77a58304538b11af5bf957e2969f57df930` | COMPONENT | ⚠️ 尚未填寫 Description |
| Fedora | `6ece940d099c9bfc3169c106577307d6e48b4294` | COMPONENT | ⚠️ 尚未填寫 Description |
| Figma | `f81e6f133f106fe7e0d83d0ca89a6178d961592e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Finder | `4e2565d5e7b25a9f872f695db22981b850aea102` | COMPONENT | ⚠️ 尚未填寫 Description |
| Firefox | `b34efbdd0a933f2ba8d4b40c7c0c07faa58326b4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Flickr | `facc5c4226439e407c92e022b845b3eb818f4ac5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Flowmapp | `10284d431c47c4acc7bc81008ecad605d03d1634` | COMPONENT | ⚠️ 尚未填寫 Description |
| Framer | `c8360d35032c95d8cacd08b5cd6c1be9af42c29e` | COMPONENT | ⚠️ 尚未填寫 Description |
| FreeBSD | `8657ce01572a5752abe9e2359dac0d24aefd53fa` | COMPONENT | ⚠️ 尚未填寫 Description |
| G Calendar | `50a43069eb3cf3c24aca115075da78fc1c146cd8` | COMPONENT | ⚠️ 尚未填寫 Description |
| General Electric | `aca70898c4c4442df6aa82b87284fa495266ee9b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Git | `802f4145ea10962d1eb4f3b87576df31d2001bd3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Gmail | `60fb06e4956abfd6fbd53780bd17aef26206dcc2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Gnome | `8fb9e6c4ca8ab14290de521aaa0c6d21efc68e57` | COMPONENT | ⚠️ 尚未填寫 Description |
| GO | `12891eeb7daf172d995c364a6d882461f8c16e90` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google | `d10f6321d06b888cb94e50a8ea6de576a71b8c86` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google Ads | `d112cd294af6bfd2ac2361fb6986280e2d67ea28` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google Chat | `b7ede8ea4465a2f0ffc83ff78ad162fe24bae782` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google Docs | `d4196b0981d70de468dbe741ddd1fed7e1278057` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google Drive | `4e729e23091fb9c43e601f585ddceff8f3eb128a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google Maps | `615649c15a28730873a384ac425c6f4fd5b14ae6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google Meet | `938c52dc36052541fcda01c7f03dd6d41bc65f12` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google Meet | `91a484bf7252c1510a91aae5e8271974e7ab2f5e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google Play | `6cdbb6e96100acc85b88ed0a8e008d23cf7a8328` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google Play Music | `f7adcc9feace5bdaadedbe25d8bfd58fc6df3216` | COMPONENT | ⚠️ 尚未填寫 Description |
| Google_Authenticator | `dbc28ad5b4d55bb4c71e03433129b959049a46ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Grooveshark | `2cbcaff13e3184070bc8d766436aef2fabfd6402` | COMPONENT | ⚠️ 尚未填寫 Description |
| HTML 5 | `a3f0b77c5f5a791e43cbd02de26998fc5e7236ba` | COMPONENT | ⚠️ 尚未填寫 Description |
| Huawei App Gallery | `eb737dfd1706bf2555197d4bae9f8994dc03d5ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| IBM | `b1a4a1afcbdb9f45dfa1d604051d3dbf7960b481` | COMPONENT | ⚠️ 尚未填寫 Description |
| IE | `bdc9ba5b8da348ebf1275124ab1318a9e0acd7a8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Igtv | `44c2d2d015d5a69d601a310918be10d90fe96975` | COMPONENT | ⚠️ 尚未填寫 Description |
| Intel | `bb8543b0f38a3827c85e8dc26411cc9ab28c195c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Intercom | `1d2bed8c8ccb042fbd4c1a2b4113a8c31faf3e30` | COMPONENT | ⚠️ 尚未填寫 Description |
| Invision | `4cca2766e0e39af27b0d5b9afb7d16300b6b4421` | COMPONENT | ⚠️ 尚未填寫 Description |
| IOS | `317541fc330104a102800b567975bbb6594d4421` | COMPONENT | ⚠️ 尚未填寫 Description |
| Java | `392f901165b52858f83b139ab9b66ab19bfc8693` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Appcode | `2deabcd12e144cbeb9c403e2b5eb62c6295764ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Clion | `dc3d6d4d9a4041de72ae46220494c6534d0eec71` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Datagrip | `cf450ce2986b1b257c569d5419b8a8449c1ada8e` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Dotcover | `436646f52f490c6c30adc27d0d9aad7145e7a201` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Dotmemory | `178fe6963761e1da8cc0476df212ac4a31dd3bec` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Dotpeek | `6e6242d1d86596ca6acf2f6b5dcbe453590aa7ac` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Dottrace | `a2a0fca0f2f7622eff08c3f065160635d712010a` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Goland | `40f49d0ff043717faf0cf63a0bdedbd5032a50b5` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Hub | `98282f63944e13dac1e93a8fa12ed6f221c140d1` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB IntelliJ IDEA | `ac82e94ebb7bad70c76f89606a56d34089fe0752` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Kotlin | `6f1ec3c4ec7e08ae2b2606cf8a744dcd75b3bee6` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Phpstorm | `9725fe6891a20f4bd6bf2e5748d3b40a0de462bd` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Pycharm | `5f5636cb60ecf28233e6351418e636c0d1d72f20` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Pycharm Edu | `a1d996c566f83c0c72a12dcd7a776e238a77cd6e` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Resharper | `1d3c3db632a8b94d6cad869b42ab28fa5f1b4228` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB resharper C++ | `c3afc98171dce9ffb7596c8a69740972fdc6b40d` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Rider | `0b391a876f4f26aab5d2635d89da5f2e2268b26d` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Rubymine | `33fc9d37fe49c7e735bd41cb18116e36aab9bac4` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Teamcity | `d73bc9e7660d95da48f68becf1f735474b4c09ca` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Toolbox App | `de2c8965497621e427540d65f6ef36beed884e14` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Upsource | `5f364a4287f81c2747a22463e1c0f1953e1d05b3` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Webstorm | `c7cbc01a3da7413740598e527e45e286ba9b5b17` | COMPONENT | ⚠️ 尚未填寫 Description |
| JB Youtrack | `87735db20bec5e5de2e21df66e3071b5d8347f4b` | COMPONENT | ⚠️ 尚未填寫 Description |
| JCB | `751a46527cc8c15e249e5ce1d3d1a0ce3b26f4fc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Jira | `fc72f95e1c85b4514e1d08298974399b1d3749a3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Jira Core | `a2ec2d2a8d26f9ee6b0a9ca76b3d5e77b9c81427` | COMPONENT | ⚠️ 尚未填寫 Description |
| Jira Ops | `d35ff5f05e447a7eda8d80b5096ebe9d86383828` | COMPONENT | ⚠️ 尚未填寫 Description |
| Jira Service Desk | `e1691e7bbd603be84f80fd9cf82f834750943df5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Joomla | `2813547413ccc4dd0f2904da4aaaca28693d6cb8` | COMPONENT | ⚠️ 尚未填寫 Description |
| JQuery | `32fbed6b5d03f141783da611a7c26baa8079585c` | COMPONENT | ⚠️ 尚未填寫 Description |
| JS | `3d925d87658b8c28b710cb7b4294522a47afd340` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kakao Talk | `ada4cd8e8874fe1582bfcb1d7b0b474190efde9d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kayako | `053513f8054ef4ca4ea68e0ba57904b6154943bd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kickstarter | `e142edc52012d220734e90342bb7747bd39329c0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Line | `da5e7cc427593f5915213fc56415e358c46b8156` | COMPONENT | ⚠️ 尚未填寫 Description |
| Linux | `92de8e51b6b69ed1d99ace75c2787987ef8cd323` | COMPONENT | ⚠️ 尚未填寫 Description |
| Linux Mint | `2636f8275102acef62b5e34006ddecb5a3b045b4` | COMPONENT | ⚠️ 尚未填寫 Description |
| MacOS | `601cd55e4bb294b5a0ff481335fe0f7f332459b5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Mailchimp | `2ba6e285ad9dd8eee505097f791017d9de8c5b65` | COMPONENT | ⚠️ 尚未填寫 Description |
| Marvel | `5641f8b5cf409a7f6879d64a02bcabf25bc427d2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Mastercard | `ad683ef4c1cc310be8ee52a08753b7d0df09973f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Medium | `f269c30f13bd51b4ceb6fc517a927fbbc5097049` | COMPONENT | ⚠️ 尚未填寫 Description |
| Messages | `71d23d2ec58819ebe1f3e661fb1c1cfd9ad45d3c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Microsoft | `a2cd14da86c1a3afa201f69c25873ca894021eb9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ms Excel | `dbfd508bb60012e7ca902fa14d477e25482f2906` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ms Onedrive | `0ea4635a493dd73839b62267769209e41bb29b1b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ms Onenote | `93e9c6f58902019b6ffc5d64e6d5a196cbea21cd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ms Outlook | `1b4ead9f73879410c4ee0c32d425fedd0530b4a0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ms Powerpoint | `999b5f6638db6bb0a770d5f9bbdc9139d7b976a7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ms Sharepoint | `ffc96fffeb600b7a03deb34979a6100f95c28770` | COMPONENT | ⚠️ 尚未填寫 Description |
| MS Skype | `8a254e7d37d125b2014b0d9e7fa9acebf7049f6b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ms Word | `14403ad69907aeb53199698b602de120d4f61e4f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ms Xbox | `f64ae52093297b2f9d57bb86b4bdb2350b292930` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ms Yammer | `280fe8e8ddfff801a507ac3cee6605cea39261bd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Netflix | `64e727dd463448a2f2e2dbb6fdd002b979e87804` | COMPONENT | ⚠️ 尚未填寫 Description |
| Node JS | `9cb159f23e3c3cb373c9610cafe541cc20514821` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notion | `5261b5fd340698dd37dbc3ee5120d288be9fc8da` | COMPONENT | ⚠️ 尚未填寫 Description |
| NPM | `3d5f9b99a61b8de80face678e398156d2889bab8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Opera | `f06449ee16f38554e000610f8ffece030c5edc32` | COMPONENT | ⚠️ 尚未填寫 Description |
| Opsgenie | `224cbbb6b36d132ed234aaee70fe533ec879cba0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Paypal | `a939aceda4d281183c8a2a2fcfdaa970ddd04f3b` | COMPONENT | ⚠️ 尚未填寫 Description |
| PHP | `7f44de67d61b96f44036b3c88acc0fa7570c7350` | COMPONENT | ⚠️ 尚未填寫 Description |
| Playstation | `01380c96c4ac51f313231651987a6906d66f5a55` | COMPONENT | ⚠️ 尚未填寫 Description |
| Procreate | `ea736062a48f411000bfe39e199c9473ad1ef283` | COMPONENT | ⚠️ 尚未填寫 Description |
| Product Hunt | `ad2246b5ee43ecf71ad00521903a966288916889` | COMPONENT | ⚠️ 尚未填寫 Description |
| Python | `f8136f7dc8ecaa049be330be6a378ac0a7f5cdcb` | COMPONENT | ⚠️ 尚未填寫 Description |
| R Lang | `801a98458048ece2c13d142a5b5b839d09a6174d` | COMPONENT | ⚠️ 尚未填寫 Description |
| React | `269f771b37d829f7e4d4b214b1f8be90c1985c99` | COMPONENT | ⚠️ 尚未填寫 Description |
| Redux | `d64ad789e393fc18969c2b1f594f0d1e05f2d087` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ruby | `356954fd689554af7b6a62b530a0b9fcf912eb23` | COMPONENT | ⚠️ 尚未填寫 Description |
| Safari | `3da607ac4b624fe9f17829e72485fbdc7145bb53` | COMPONENT | ⚠️ 尚未填寫 Description |
| Shazam | `635293e4b0774b99d1ee94c6c59e205f238dd617` | COMPONENT | ⚠️ 尚未填寫 Description |
| Shopify | `92e032713c64a05e9295cc8c43573c63f61c32ee` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sketch | `643bbfbc037e0c9af7e65eabdbff91f4c0a0f999` | COMPONENT | ⚠️ 尚未填寫 Description |
| Slack | `f8b9679b38af455cca09260f4efa0c1f6aca1c8f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sound Cloud | `7c1f609eeb0b2e01f437910385268ec587c0bc01` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sourcetree | `dad55b7835f505641a1bd1791d9d771372b87a44` | COMPONENT | ⚠️ 尚未填寫 Description |
| Spectrum | `ef788189691877affb9614716dbf12ffb561c17e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Spotify | `60c378c8bd1797d9a2dfe0f4eda13fdc5077a998` | COMPONENT | ⚠️ 尚未填寫 Description |
| Statuspage | `ac46d93d54241e962c3ee5223029ec4baecc86d8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Steam | `61ca22f2bec2d55dfeeb595e362cec92334508ef` | COMPONENT | ⚠️ 尚未填寫 Description |
| Stripe | `f45f3d6570a314be640409a9a86b97b20094042e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Stumble Upon | `518b43dff6ff5c268b911692695d473c0b4b3200` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sublime Text | `ea19558df8accc95a38939e8ee7b17c6b87184f5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Swift | `4104249387a57e9dc67d69cc1cf488506e6aa18d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Swift | `49c0aaca9886e49ff37e9ff2429c1b50f960ec34` | COMPONENT | ⚠️ 尚未填寫 Description |
| Taobao | `d63e1a690c3ebf13f6e1dc2b4e184f7679a77ef4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Teams | `af640d11cdbe30a924e5d39ea93a17c29b87d48c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tech Crunch | `fbb6e844c2b72d8a2d4a70006c4dabdef33b9606` | COMPONENT | ⚠️ 尚未填寫 Description |
| Telegram | `f0f1a8ab86c5d8e06ffce28bdf0badb331b2b5aa` | COMPONENT | ⚠️ 尚未填寫 Description |
| Things | `babd756303aeaf862ec7240c49cd1ad74d497654` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tor | `8b2fc1b3f7da3fd13d07ec15cc923bd13de848f0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Treehouse | `fbe06a48e2c063994aeb2651efd82c7e5aea38da` | COMPONENT | ⚠️ 尚未填寫 Description |
| Trello | `1f4146270607f4d67b978d13b396d619cad3dc2b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tripadvisor | `72bcad9530360ade47b2f3eb396e7da7f6bb4a41` | COMPONENT | ⚠️ 尚未填寫 Description |
| Twitch | `cce52297a9274e3ab0aa4d9e0ae091d6f029e3cf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ubuntu | `d3fd294a5ecdaaf70c0c811e668dee67b8e21cea` | COMPONENT | ⚠️ 尚未填寫 Description |
| UC | `717df282a794df8e8ff178502396ecb6c0e814a6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Viber | `2d38870a911b1d97aadeade047d441e12c178ea9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Vimeo | `23f55ac8db29ce4489dd23d1b8a0f995baf102f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Visa | `1d3a53e265106ab376c848ea2e4af6abeec6b762` | COMPONENT | ⚠️ 尚未填寫 Description |
| VS Code | `2e63151fc90cdd0e7fde8295ea328b510887911f` | COMPONENT | ⚠️ 尚未填寫 Description |
| VUE | `bd363c0080ae2f334471e6722ae6e0704b13b32b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Webmoney | `ab750b56b230f437b8d8714fa68e7da097a75554` | COMPONENT | ⚠️ 尚未填寫 Description |
| Wechat | `c01873a07cf00fb9fcef180867fb7afd544167eb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Weebly | `d504cfff80c21af032c6146ee253a8b1aa12a0ee` | COMPONENT | ⚠️ 尚未填寫 Description |
| Western Union | `461843a088d46c1e74614f3eace07fc1882f824a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Whatsapp | `cbcc979f05a5c4a2a77d2837281edb388227e6af` | COMPONENT | ⚠️ 尚未填寫 Description |
| Wordpress | `75cb0719afebab3cbcb58a526bdf298549903d27` | COMPONENT | ⚠️ 尚未填寫 Description |
| Workflowy | `cf7376978a579bc17dc2e3c7a85da5ea26d4b61d` | COMPONENT | ⚠️ 尚未填寫 Description |
| World Pay | `a2c0d28b239ba81f7d74efc3fb70d67d5009c8bc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Yandex Music | `933cd5a0e81f6797c07df363453fe1ad5f8b8997` | COMPONENT | ⚠️ 尚未填寫 Description |
| Yii 1 | `9d6eed2e8264684dbd2c61c2db7efc22e386659d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Youtube | `164c49aa9c622e1351d0b8afa3cf562d8e699761` | COMPONENT | ⚠️ 尚未填寫 Description |
| Youtube Music | `215394ee29856283ae25354c2ee6f3abad256cf5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Zapier | `a4a4f5181ef250f7d2faeffebc60a2b001bc6532` | COMPONENT | ⚠️ 尚未填寫 Description |
| Zendesk | `6394d624e7df2b2bbb4deee073624cc56c108837` | COMPONENT | ⚠️ 尚未填寫 Description |
| Zeplin | `4adc1c6941c257890c0f1f00efa13be45909345f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Zoom | `20328dd9ff15e545701301d183f2e5855a6935e4` | COMPONENT | ⚠️ 尚未填寫 Description |

### Icons (Crypto)（62）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| AAVE Aave | `3c8cbd93eee16839384b21b038afeacbb888792c` | COMPONENT | ⚠️ 尚未填寫 Description |
| ADA Cardano | `f01f6ff6117f9cbefb968193e849da2470749486` | COMPONENT | ⚠️ 尚未填寫 Description |
| ALGO Algorand | `f693ef382e99017e700d06edf675f467988b8f38` | COMPONENT | ⚠️ 尚未填寫 Description |
| APE ApeCoin | `54a1d52ea688b83703da19454fe13eb4a9fdabe1` | COMPONENT | ⚠️ 尚未填寫 Description |
| APT Aptos | `a5c6b011cb8e29c70946f3022372495ed7520d73` | COMPONENT | ⚠️ 尚未填寫 Description |
| Astar Astar | `4a49363cc812f16719e92c15b2bd8fd71e5cc7d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| ATOM Cosmos | `26dd1c3441223c37f0cdf086b1dd3460bb00acc8` | COMPONENT | ⚠️ 尚未填寫 Description |
| AVAX Avalanche | `b53748ed187ed3a3a48466c30e4037d9f47211fe` | COMPONENT | ⚠️ 尚未填寫 Description |
| AXS Axie Infinity | `5ffec65e4740750cc8bb50bf91cd9cac07fd70ea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Base Base | `10efe80edcd567595a3316019293b61748d5949b` | COMPONENT | ⚠️ 尚未填寫 Description |
| BNB BNB | `2c309a44a305957de42623f6234a46c5125bfd49` | COMPONENT | ⚠️ 尚未填寫 Description |
| BTC Bitcoin | `08934d9f0aa655f0560bd797cb45990b7fa5ba42` | COMPONENT | ⚠️ 尚未填寫 Description |
| BTC Bitcoin Cash | `7b2a3a476a3358452ce981ae5f6193571dfc75e0` | COMPONENT | ⚠️ 尚未填寫 Description |
| BUSD BUSD | `1740e28be1d2ad1fecc0d08f3891ac1f5d8afee6` | COMPONENT | ⚠️ 尚未填寫 Description |
| CELO Celo | `0de0e30582cdea3e10bdbbf557bd725a462d5ad8` | COMPONENT | ⚠️ 尚未填寫 Description |
| CHZ Chiliz | `793a9184e06a63a6d389a8a67955e229d869b2e3` | COMPONENT | ⚠️ 尚未填寫 Description |
| DOGE Dogecoin | `e1c442b87199034f5670914a9cfeb5e1c86b6b09` | COMPONENT | ⚠️ 尚未填寫 Description |
| DOT Polkadot | `23bd08d0a6fde3c08fc36131fd32cda4c6fef2f7` | COMPONENT | ⚠️ 尚未填寫 Description |
| EGLD MultiversX | `b9172cba33a021d0cd64c96b42f55a367bb828a2` | COMPONENT | ⚠️ 尚未填寫 Description |
| EOS EOS | `1b8fead4c022777c99b1c708200af0e84a58ca42` | COMPONENT | ⚠️ 尚未填寫 Description |
| ETH Ethereum | `6d6956bb8a5c002893541fe09da5cddfa5aabf4a` | COMPONENT | ⚠️ 尚未填寫 Description |
| ETH Ethereum Classic | `b0b9bc373e83fcd68a71849cee8f7d8fb6070345` | COMPONENT | ⚠️ 尚未填寫 Description |
| EUR | `344166a06d4ce56d52ba6fba1f36d7e556664524` | COMPONENT | ⚠️ 尚未填寫 Description |
| FIL Filecoin | `305fc200ed677d3ff272635c0404a379c3e00931` | COMPONENT | ⚠️ 尚未填寫 Description |
| FLOW Flow | `408b616602990cfeb08095866dda16839f0630e1` | COMPONENT | ⚠️ 尚未填寫 Description |
| FTM Fantom | `8f8a77fd641a61805b6b1e01cee0abf52b677bdb` | COMPONENT | ⚠️ 尚未填寫 Description |
| FXS Frax Share | `a872a81b23586f48dc56149a15aa09449d870b83` | COMPONENT | ⚠️ 尚未填寫 Description |
| GLMR Moonbeam   | `c3fa21fb5a726f534338565b4e0e036ecf26bc62` | COMPONENT | ⚠️ 尚未填寫 Description |
| GPB | `4374765d7cc4d99a23b627d8bcbd0cad9658f55c` | COMPONENT | ⚠️ 尚未填寫 Description |
| GRT The Graph | `4e991375c30c668b3b10149e3cbc6728b19d3f9b` | COMPONENT | ⚠️ 尚未填寫 Description |
| HBAR Hedera Hashgraph | `8740d5a9e6dc5bce93c76d24abca40f470596aa9` | COMPONENT | ⚠️ 尚未填寫 Description |
| ICP Internet Computer | `1e1cfc7f1b092158d284c68f05dc0f9c43ce2e8e` | COMPONENT | ⚠️ 尚未填寫 Description |
| IMX ImmutableX | `770b98753ec0512594132c3c7797ecd2d9f89159` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kroma Kroma | `601d18b93ef3a30753d6d9d88b92551597f27ee5` | COMPONENT | ⚠️ 尚未填寫 Description |
| LDO Lido DAO | `2ccb9da44d6628a9c64bbcbc66b68c60d6e3d887` | COMPONENT | ⚠️ 尚未填寫 Description |
| LINK Chainlink | `72ac0f87269bc4c39c5516ad4517e7117a8bb57c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Lisk Lisk | `1015a7d850b2cd1b766f99a4ecfe80aaf65e6243` | COMPONENT | ⚠️ 尚未填寫 Description |
| LTC Litecoin | `411d3b5b971bc2d1a23607e9d29132fd58c52d3b` | COMPONENT | ⚠️ 尚未填寫 Description |
| LUNC Terra Classic | `aad4af40d534b8932823f42ab764d618ad09d239` | COMPONENT | ⚠️ 尚未填寫 Description |
| MANA Decentraland | `f3f4681a6a755245007a0e688252dff7790ad789` | COMPONENT | ⚠️ 尚未填寫 Description |
| MATIC Polygon | `df9e2c3fcf7927ed2835663bb0b94811ded95c3a` | COMPONENT | ⚠️ 尚未填寫 Description |
| MINA Mina | `d54d84398296ea86f597b033dc66ad47c0502275` | COMPONENT | ⚠️ 尚未填寫 Description |
| NEAR NEAR Protocol | `9840516f68e9f942a49d7ee32c315689438ae3f2` | COMPONENT | ⚠️ 尚未填寫 Description |
| QNT Quant | `727e523d8781da1702f1c761fba822950bdf4af2` | COMPONENT | ⚠️ 尚未填寫 Description |
| RARI RARI | `a9b273c1ef7e5aaf404b44917ac7a5ae5271de69` | COMPONENT | ⚠️ 尚未填寫 Description |
| SAND The Sandbox | `f55b3ec3aecbc3d26d73ab9f1ea6c4f8186f7e58` | COMPONENT | ⚠️ 尚未填寫 Description |
| SHIB SHIBA INU | `613ddbcf8065573ba217252844fa175a2bf53198` | COMPONENT | ⚠️ 尚未填寫 Description |
| SOL Solana | `ae3ccad7322e6950df77e214db267bbdc97cb07a` | COMPONENT | ⚠️ 尚未填寫 Description |
| THETA Theta Token | `adf547a3faad9bd617578abcaec23da959331aff` | COMPONENT | ⚠️ 尚未填寫 Description |
| TON Toncoin | `aed714e0863a7d5dfa432a7195c8bd7f8ca48f86` | COMPONENT | ⚠️ 尚未填寫 Description |
| TRX TRON | `7a8f3983c4ef85d3ac299cffda5ccfe57f4cfde3` | COMPONENT | ⚠️ 尚未填寫 Description |
| UNI Uniswap | `0ff026376966bf539a1ab1cfb59a77f8ac2c377c` | COMPONENT | ⚠️ 尚未填寫 Description |
| USD | `0c1f21c46d630993258c66707cca2d2dabba7dc1` | COMPONENT | ⚠️ 尚未填寫 Description |
| USDC USDC | `3909e719b177aafa7db906ea163d0896197d9b4d` | COMPONENT | ⚠️ 尚未填寫 Description |
| USDT TetherUS | `61744db62a00943c74ddc3efdc2b4bfdbfcea799` | COMPONENT | ⚠️ 尚未填寫 Description |
| VET VeChain | `0fb8a8ba7ce0ff1a2705a17ed9dc05cdf79785b9` | COMPONENT | ⚠️ 尚未填寫 Description |
| WBTC Wrapped Bitcoin | `c7bc53ec2c742cb5ef11429b30d1f146c7b0f102` | COMPONENT | ⚠️ 尚未填寫 Description |
| XLM Stellar Lumens | `fa0a99ac64f2e90a1cbdf17df56baa876fe13277` | COMPONENT | ⚠️ 尚未填寫 Description |
| XMR Monero | `b45788811735b7538b62a973b59383964d23e020` | COMPONENT | ⚠️ 尚未填寫 Description |
| XRP Ripple | `6e43ffc3a5e48a3906bca62bcbd33f228d84977f` | COMPONENT | ⚠️ 尚未填寫 Description |
| XTZ Tezos | `a52a3c384bddafc603109337e4bbc65f3f5f69d1` | COMPONENT | ⚠️ 尚未填寫 Description |
| zkSync zkSync | `ad425464adb213d43cfd93fe53e2fc1f23446bc5` | COMPONENT | ⚠️ 尚未填寫 Description |

### Icons (Default)（1272）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Action/3d_rotation | `fcede915d80bd12fd5b92cb4921720b466f96266` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/accessibility | `4972240620fa59592d13b457295637100fca471e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/accessibility_new | `ff00bb655ca5181920f55d013dfdc72f0cf199f7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/accessible | `8294c0c7db3e937e2c88d329410d88a336fd49d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/accessible_forward | `5df529925cca769931e2931727b3a6e2be5e78cf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/account_balance | `1fbac863b606b1102a279d4dfe655936385d7d50` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/account_balance_wallet | `06dfaf369536e149b7db89588c5bb852b429f929` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/account_box | `22018e226a19d6e5e4df959a1d4c7b821f453b68` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/account_circle | `0fa3b062abc088c07bdf906d42538172e02796dd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/add_shopping_cart | `800a44daa64d858b32764e21c1100e9d2f1244ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/alarm | `610c8d3b0604803994c39eab5d07332d00984951` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/alarm_add | `52fb865c3c99cc7813fb9be06835ea169f74de6c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/alarm_off | `319bb6d2d181c7893af3ac7251e7f677c00d6f0d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/alarm_on | `957cfb0da6f0c5b5b179cfa508da7afba8ab8a18` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/all_inbox | `ff0310f26de0c1b3e13c33458eb2be5bde7d160c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/all_out | `da9fbc886caaa9fd48aaaaec72a2ea4979ad72e1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/android | `ebeb22c7c96859fbd66a5e24ea659ae4641213e3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/announcement | `2d9aaaf11accc1340e50050e799ebeb6a9926e5c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/arrow_right_alt | `cee6a513abe898f26556455444bb073bea807904` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/aspect_ratio | `72fb4fbd33dd0ae399eaf241710131ef6b8a54b8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/assessment | `5f84b5f94e7cf58082f75c8f19042eedcadee288` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/assignment | `ea6dd0243c2366b37f85d6d1ced2ace566ef3d6e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/assignment_ind | `7d43ca9f42d63ca7e957afa0d74ef7eb612767d4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/assignment_late | `f568aec7e424f84b8fc29fd66b4da478f4a3a819` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/assignment_return | `468c85f70bfa4c1e50f63505e431dfea4e36169c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/assignment_returned | `898194e23521ef79dec9b7dfc3f155239b76c398` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/assignment_turned_in | `338f3a8059bc05bb1c7419d1fb3f96ee47b014ac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/autorenew | `0ed0954a630e2fd3b2ebaa5d6be1a091d1e318d2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/backup | `3ebfda26e5665adf0a25754425d8007f908a7c34` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/book | `ea79ae471528c44a84b5581fe89dd217f126e95d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/bookmark | `4202d283b7d841f7ff158a724401284385ae864d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/bookmark_border | `85c2c574c7358122834370d96c6b7d23842e3f20` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/bookmarks | `5dcd9fd0216c645a0d886bd94104e2ecb1919346` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/bug_report | `d39a3e109888f7897dc5f5e842803a05c132bd22` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/build | `bbe3bdedb81dd22f69be4ab6f243f941c698e4c0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/cached | `3d22f8f2378777c8c690aacd923cd7a5cd6d134e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/calendar_today | `978f8331c667cb46bef9c3bd644bc90ad3451ea7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/calendar_view_day | `0470a4dac4e1e6408da82dde130a0233d8702426` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/camera_enhance | `601e10bd13379133ae3a58fdd178f56aa7ed46a8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/card_giftcard | `5b42f86ea8d4d7416cd1e288e3ca9364372be5ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/card_membership | `aaf0f22dfd5602491c5cc15812bb4fbe638d3734` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/card_travel | `ab8de6990575343961fbc50f4b53a2f7d11dd6cf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/change_history | `abe98fe01e283b99172ff8fa3738ea06487c4b62` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/check_circle | `58b8761039220a31099e2fc2d02326a78f2b3345` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/check_circle_outline | `606536940f485fdca4be282d2be77d10844900c3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/chrome_reader_mode | `f498c37461bdd1cd93cadbac4c9d6746a7b7b46a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/class | `a1056e626884ce3d36751e7e81ed1ca89b5109ee` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/code | `6a54fe4c7c9b08f80f2d2e5a7f3d42cd12838eb5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/commute | `8ebf988527bfe0a875907d979d176b77b9173e8f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/compare_arrows | `0d3e8c7a7b08f18cb2d33b3c4b9e7ca3297fde4c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/contact_support | `4d86454aeb6de0dd867b82ddd1c0a9ba5e8d8555` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/copyright | `d761978f0b82aac57c58869dd736e07752ebc174` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/credit_card | `cd6e87c24d49be693a17b1d27d276fb1494373d1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/dashboard | `f95f31ca467c4a73362619469cf60bc484aa3345` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/date_range | `dca3d22df682b0c45b6c120325b0009faaf03b05` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/delete | `04b589a18f27407abafe3772ca75c453f245d22b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/delete_forever | `8a65023150424b3b88f7cc90a78dd5fcb6aa1d3c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/delete_outline | `b731ac81f870c1261942b1e0677b0e8d617d3c81` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/description | `00042c3f1635c023b008526d77c073c654f97f3f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/dns | `848dd8e75c0c1495557294240671c510fc273ec0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/done | `61f67f7389831bc03fe67d465fd5db87b971dbbc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/done_all | `7b9dad4ac9de40762f9ed7808879e24070afc85f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/done_outline | `504e35cc723a011f86399fa6f08df55be6bd0756` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/donut_large | `a922d2648d8c14cfa06e1bac67f6a9baaedce792` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/donut_small | `9f81f6b3d08be6a6263fded17b17b97f320d9042` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/drag_indicator | `e4638f0571dafea47c1c9ade23ef930eeef03b7a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/eject | `f7cfaea8685dca764c8cf5e4c0749f2a66268225` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/euro_symbol | `d97692730ff78fb6d2c29e30fe443f18b4f14cd5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/event | `8450c441c7cddd2eedba3d275b66bae0c76c666d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/event_seat | `3e881a84122ca4b40bcc63e82d2f95c4732165ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/exit_to_app | `01d2720bff1a609922ac3a25013e99918ae33484` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/explore | `5055d4ae37e0ffb7c01ddb64e0a9d8ebad34f8fd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/explore_off | `90ed23966169813b979e81841ccfc7b68711fda8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/extension | `fd6ada3a5b60b8fceecec150b8289dc90918fa2a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/face | `fd69f4586adc2b159777442c1ebd8557740ec732` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/face_unlock | `bfa37b8302ab17bf508ce8755bce43c0f3c7ed3e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/favorite | `ce48fb0c92207bc10d8caa0a1fa369a55ec0a14f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/favorite_border | `b02012c8ab7b767dc7f0c212149c36cac19008be` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/feedback | `7758a72483f76d471c07c1b935623853f408d6f0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/find_in_page | `fbf38663382810ac356b5a60b76d45bd0996ecf5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/find_replace | `6b679824a7b4b514c1f0912ab5b6a42a6b9ff07b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/fingerprint | `a727b9f05485fda705e9cc748ba5da58303fd82b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/flight_land | `88a344b375e86c9381359cc39aae6a2aa11deabd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/flight_takeoff | `7fdf10fa91b65f619dcf882690b48486dd15311b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/flip_to_back | `ae57718baf12af291fc3d61c42728432d1d8aa7c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/flip_to_front | `ed9f4280163554ecc48c2f204189735f69616b98` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/g_translate | `1eaeff23b2be7082bd660fcf3b6f035c60e6f35d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/gavel | `29e8d6cb44f2249ca475a1f9044019410cf87388` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/get_app | `4975032dca7be3e219af0ac0589859ace58084c8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/gif | `ae30f03081e99185848ae4fa057c0844adc1d4b4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/grade | `67a83c62339f74bf0f9ef3a3254eb06755061a5b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/group_work | `215617dedd8a425b6bc87e2f5d41035e54f273c6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/help | `e1e83d7c612f6502b6aa84da3b1a56bade84233c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/help_outline | `d4514699de8de30a74087ee1d1d6ce3d6c5ad909` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/highlight_off | `05f9b576f209c349d1786fc85552b904083c78c4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/history | `9385b55efba4ba8c14bf3c5a49f7a15eddcee19c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/home | `4d134c9de96251400ea477a9fbe501f57137a703` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/horizontal_split | `7a11032221ac2e5e1fe5fb17d4787ecc6009aacd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/hourglass_empty | `79d2fc3a5fc76925548b687050b2d9f33f036db3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/hourglass_full | `ee6d7c13313b710a7f904c0f835a201687b44753` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/http | `47e6c432d5f6da0cfbd89415f9960442ccf1f4e2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/https | `00c244e4ae334838effca3e39f744489a4239528` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/ic_areas | `5d88d80036ffa57955895969fb80cff1a905ed37` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/ic_chart | `758cbf70c56e9feca7b0d4900578aefb0c2b384e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/ic_lines | `19b403d0c28caf0eb92c0f73990c36a2c925ae90` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/ic_multibar | `a21e98d92a01891ec662b7d89cf3121151380f5e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/important_devices | `8edec6c88b55d1951ea4ab1d6cf7ba8114fdb95d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/info | `cb85cf954a78c459c2c77574843e8fb8e3bcee86` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/info_outline | `5a8b61772916b767ee96785611828151270f8dc7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/info2 | `2fb85b403f8ed053eaee7255dadbfd4379c1c816` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/input | `615458fce8b2a203c849b14208305cca7aadc3cc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/invert_colors | `0953e07a021312bc0b365b71cc6f20a053443154` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/iphone | `f09f6467e6a861ffdc51dabab30495d5d65d2390` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/label | `054bc57eb73f8eddf30b713df499135f0434c6bd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/label_important | `0f12ce1d8ddd0d3cd8a8794926c4741ecbf88856` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/label_important_outline | `b344900a4a2ad2c215b00a58493c5d857253d1e0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/label_off | `cf5c748679109cbe95cd21d5692e188998038297` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/label_outline | `6a8656f61df56c8030f4b1bdd90638319ddbe94f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/language | `1519bdfc899edfdfc7de937fb04110c27c1d058d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/launch | `cdd82f5e1b0cd51989ab3637dfd5189e2fe6fe02` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/lightbulb_outline | `6a244db57ea8636746c07d30525c339af41ecc80` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/line_style | `1046735e5d7e13f96b3e8d7abea7c3bae8f25ca4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/line_weight | `3cd9f79d85966681031240aff0db503452a46c1a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/list | `5f15fc86cabd9f7c8e2a8bf36a2688b053bca56b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/lock | `a6355718a9185a7be526ebdbe42a2003aa8812b8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/lock_open | `54ac37c4fa0be4d6b82fa685012a992a38246c56` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/lock_outline | `e388a04e0d56887a5a09bbc06e540d56e0e1dac4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/loyalty | `2014effddb74fe073c731018d98816edafbf6b34` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/markunread_mailbox | `daa004da844d7db9627427b5c414a6f5b1d13332` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/maximize | `9013246e1544150e036daed6db2698acab5be8d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/minimize | `fc6fbe28aa821aa3d72d69d61b2177dcbe429e09` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/motorcycle | `b772e6319ddc18b268c3bffeb404bef355deb8c2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/note_add | `cdf10193e27cd4304cdbd4741870f80720334d0f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/offline_bolt | `3ef70aa19bcd3d955f2f3d54cdc6fd76a358ba2c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/offline_pin | `d626365d936f445afbc18479fd2f5dc1ede1fb8a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/opacity | `b63229dcf99ace74bf4418eeeff2aab4be9e9150` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/open_in_browser | `f36eaf36522940d3407fe9eda96039821abd11c4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/open_in_new | `44ade17ac9f7704d13eb93b2f8565d7b8f8e4028` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/open_with | `ead60da4164438856d91323fb54cb7d77e82bdc2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/pageview | `7cd032c555bea27e09c8582e1aae0a036439e2ea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/pan_tool | `ed0b4e225d19865b73e874a6bc641476806558da` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/payment | `434fb0e73b29607c9f579f3c8c8415a612919b2a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/perm_camera_mic | `4f7ba5972ff02872995057d4129828901bb9b5c8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/perm_contact_calendar | `b10d3f3955b748ef6e498b5c7c8292fcb7957fa6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/perm_data_setting | `5f10384db6a24cd4a285ada963c8aa6c64a2b92e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/perm_device_information | `8005f5ea7e6a9b4cb8bcaa035c0dc0a088992d8f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/perm_identity | `01132f10271bdbb248a4a94562652e85ca1678be` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/perm_media | `39389cac6c3f564b80f3c034612e590d906ce6b9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/perm_phone_msg | `dd863a998e508a42e3eff0b84848827c74426421` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/perm_scan_wifi | `3a5126196638ddfcdc7aee886953295b8f5faf87` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/pets | `017c2171f355459d20f2adc0906bc21502fe1eb6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/picture_in_picture | `ab4c2857b2a05c823d75f03aacb001765e5be471` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/picture_in_picture_alt | `8a81c7914a5b7930631c63cbf1097c42c6d51c1f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/play_for_work | `5b3ad911493973a680ae3dcc1068e8e04dc6c473` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/polymer | `ea76fc9c08993f493c077db68970691de2466b5d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/power_settings_new | `b4301c1e8b25d14ec899d88ce7fee8d910b4cb3a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/pregnant_woman | `3fb6582a794fdfb6654ea3e5242a4df43e8194f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/print | `b572ea602cbbe6079c53af3436bb10c2d9362a68` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/query_builder | `dbd5088a027638057b9221d4de0827dd090e377c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/question_answer | `abd83e39e9676f90444b436b4bd866385a25139a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/receipt | `bf183c8984f50307a9f8974d5b993125bc2942e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/record_voice_over | `b9e6d8ab4dcda433b3f9cab4acf329e00abd525b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/redeem | `b4b4f541a20e3872c9f93c8dde8c2e15849b154c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/remove_shopping_cart | `40cd3667c5d141448709f98a443a89bed4684bcd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/reorder | `f56009b5505eed28164e45bc2feb01775fb94cb7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/report_problem | `10ef7e0269b974aea08f88a046f0b9036db0afb3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/restore | `46f4b2a55fe981a8e457cefe15beb55d9f63fb11` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/restore_from_trash | `59f949f226e6123192e879621d7fee08c90305f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/restore_page | `87f59b0bd431e7142c1bad179dee27c54c3cd5f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/room | `3fe71fd71eeb614d54907593eb0c680ff09ba2b2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/rounded_corner | `030ff335b9a87f8b7404deed8d207ad6da728f17` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/rowing | `d9e3f18f36ee0679a7763c6f279241d0a0b03569` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/schedule | `71cc772502ef4ba9255a955a874df5060c3e56e2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/search | `d705ac42113ad5828c51fdd721534bc9eec8be94` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings | `9e04153c86b7f7405517db235cb9f8f1b867f0d2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_applications | `929891f4becdb17bd234e591670d6ccfb90c46ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_backup_restore | `50a6f44cef0be0cb80cb1c32a5038254bcf17d6b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_bluetooth | `38b20d403325a9f41a4dac0bee07369bb61ecda1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_brightness | `d74f09b469a801b72a8ec4862cc980a40c3e638c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_cell | `fa80dd2f965e15c5a4b84ffa603347d14f3694ed` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_ethernet | `c2cfaa781b7a7db8fd40a49902766093fb5a3111` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_input_antenna | `3bb2066c8eef735b73ffb7fe50554edbca570875` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_input_component | `33e86b2cf7fbcc99e96788f0f52bbec94359f51b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_input_composite | `e7dd8ce5b1806f2f1ef6f3a7b97c28bd55de4946` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_input_hdmi | `50d30e2e181b2322d72402c6a27effd144f7fbe3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_input_svideo | `4c8c52f9128921e0291764cb2061be359d238fd1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_overscan | `40d07583d408cd29eaca516751b7d6abc4d15a38` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_phone | `43d3c3b678469c12e7265638dd6e92110680507e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_power | `0793497e8729b0f848de04698297f8206edb44a6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_remote | `fd4ec4084eb4af24f432bd2ed319c8ca091182fc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/settings_voice | `d44681435c4571638b8b1ffa94aa9518c9f2901d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/shop | `a1f4d5ab7e7aba4c20040d1bba26ab7e7dc47c0b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/shop_two | `b55bb472183616ef43131420a765599cde021bce` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/shopping_basket | `77fa72187d3a72b5ae9ef71230c23268589e907f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/shopping_cart | `c3264a7902a571a23854b737f445d070077d4e95` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/speaker_notes | `40da573a25ec6c0cf1f0fd9b3f7b949b4d57eba7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/speaker_notes_off | `5875676d79949851b01d4e17df594fd82d73d368` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/spellcheck | `7ff6b52f9c17c8cd2f89704824c3f9ca1e74499a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/star_rate | `48e32fc849e107dc19e94c64560d418357e9abea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/stars | `d590738b9663257fcaea72789e9840528004e1db` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/store | `9bb3cd26510595273e320e56d450707a4aa5bb96` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/subject | `9a98d595725acec00909ccc85f613f6059096343` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/supervised_user_circle | `c137bc7f0df01d3bbb18412562230d5e159e6cfb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/supervisor_account | `6fa42e5b64325b182327c25c2d4141bab32b833e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/swap_horiz | `ea7b36358c78b1210cd10f1588f9a74c9efe49f2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/swap_horizontal_circle | `2908c510380d12fd5537f3c29f2446588f013755` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/swap_vert | `a21bd001708cd3e2aeb592c097c00137618ed11c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/swap_vertical_circle | `e7b921ae4a31aaf12a6a5f59a0e7a1efbc4bdcae` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/system_vertical_alt | `f6755f37b70d2f467fdfe4bf05993da578e271e0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/tab | `a190b0d8fbed4392b4cc033c5762ad58b9a5af12` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/tab_unselected | `950ed395eef2f923a18011f4470f1884b3aba8da` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/text_rotate_up | `df738eceb4322bfb386814e567197e3304dde727` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/text_rotate_vertical | `11805427f85f1c1890fa59eee4be9f4e4506237d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/text_rotation_angle_down | `e51f0f8aa9e9ea150ae070bebb27259bf0f9042e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/text_rotation_angle_up | `4c855095cba067cfbf8ab3f45e2c108e4ea215f9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/text_rotation_down | `c9e5abfcea7293f1e91c57bf1a75938e48739d5d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/text_rotation_none | `a47306497ffb318c0853948f8d85d001cbf86da6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/theaters | `ac23689ff5f81df83ce9763364efaf1684f9aa38` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/thumb_down | `118d5b64734ef43a0cdc95bf4742ffb487b6d245` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/thumb_up | `110167203bfa423d203b7b0e936c591e81c9aaa9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/thumbs_up_down | `4ca5c4a6746ae8cbaf4e7ac009e83bebfbc72ff3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/timeline | `961148c80f0f1cd520d0bfe7b8fdf76fbada4a40` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/toc | `9fcaa8855770d67abac2217791a1798bfdf802b9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/today | `fff0652f7ffd2cc356bfcc08b2d3269fb50ec2ad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/toll | `8f2c47181f40adb5ca4113f309339a5ba07107b4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/touch_app | `4cab19d0ab0831c1f1394cd3e1ca940b4d95dc81` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/track_changes | `7bf16f2cb4ecf61b1a5c34b55a1680d7a63cf2be` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/translate | `8ee4bb8f67f9ea54e023f3751fbcf47e36c001c9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/trending_down | `c7523bcfe50b686141ad7d4fe35eea9281223653` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/trending_flat | `892b408b69f8303fbaa711d6ca733047ca9c44a2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/trending_up | `26ea571462bd6dbf81a7058f0fd548f778a85219` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/turned_in | `fbc52586cd01040aea051680df19faea0001e53e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/turned_in_not | `14fc8207110d5e4bdf14afb8581a412f53b0a3d1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/update | `417c424e1357e6098c49ec073cd1fe20f84ce6a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/verified_user | `903b329727df3bc4ae3bf985c5fa4841adb7fe18` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/vertical_split | `a9a01d37a2bf9b5b109fb48047041abee6c30f33` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_agenda | `c42dbd139bde4bd4168bd329208ce6e3944bcf78` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_array | `b76779b170995ac2283eef5a59dc68a7f6179660` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_carousel | `0d406cae1391724281a0f9580599e8078a33218d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_column | `569428f6745ed2d0c2d07352ee4f499f1238e960` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_day | `02442992e7aaa5f224cec52aeb3616fcfc3a8687` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_headline | `a8d35aff2c00fb751fbc37544314e09f67797dde` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_list | `a86cc95bfeec97b4e8d8a43ff0017e3b035f6767` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_module | `681075eb5c0db27d42bb09e3eac1c13425f2beb7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_quilt | `e467ef15cda19b6780a00eced1aabf268ea92a7f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_stream | `a1ec2acc1292fd73d4bf604859e99b9965c78b9c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_stream2 | `de0bb5fb2dd7172ce5158e3a29842fe6053e5070` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/view_week | `be4e28bb824b6d069c006193df30747e7b790e2d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/visibility | `9caa8bbdb32c85c60fdeccf7b0250d9a8d1d41ed` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/visibility_off | `f30dadcc60a479649e13dfb325b7fb9edf743b55` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/voice_over_off | `60d9223ca0c3f7825c56797d6aecba0d97d9d77f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/watch_later | `cfc9a8a8a82b91dfaa3cfb8b2708f483abbc999b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/work | `826dd53e63df60a4a543c8499900cfeaed34ee5e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/work_off | `3843b9e754f1527aa7b6203b3cde0122525b7dbf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/work_outline | `7d7d25329da5583233d1893ce2625c6e9b1cfecc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/youtube_searched_for | `39b063e689c8c835651a85e1b8226e21ce15ff4a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/zoom_in | `e024532a75504f9ef5fdee5b9e62d6c41785cf0f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Action/zoom_out | `f6925503ca9a053f68e8cf2f42dbcc8a6e8f7022` | COMPONENT | ⚠️ 尚未填寫 Description |
| Alert/add | `ab8414f40c35f52758cbacdc6d2be41253cf2995` | COMPONENT | ⚠️ 尚未填寫 Description |
| Alert/error | `d6c6555fb3732a331b563f93444fa6308a643af9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Alert/error_outline | `abde07cefbbfedf921d51d8937a8fba9021b653d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Alert/notification_important | `6b2c8f67166b4c32f2068d7bdb36f3c7b195d62b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Alert/warning | `acec21888ad12c3ec89b1dbd5319e0457075c690` | COMPONENT | ⚠️ 尚未填寫 Description |
| Alert/warning_amber | `aad3b002cc399c2fb03531a07441cd36b227d714` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/4k | `71c8d703f8409cd685ae38b6de51ea70dc4265ae` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/add_to_queue | `39d73f2160d2686406e50755c85a710d16443e1f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/airplay | `39c91b290cfe1d9314ab829d2c31de0a80d5a0ac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/album | `a801e7be4e57da57022dd1a077c040b0e4a5a59e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/art_track | `608d530fa7017a3af5a36ea96a59aa2b2dd87182` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/branding_watermark | `2485b5d158289a3f67ae8b1f4acafb4456c02f31` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/call_to_action | `31a9b4bf9019b3d9f1a3cfddbb831c457a1e7304` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/closed_caption | `163a2f58a86cbfe4d3096b48ec14b5ff662ee47b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/control_camera | `e90232f37a9ea8eb767dcbc0d28f378847798431` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/equalizer | `539afa1ce1e4f2d692db28be0661f5cf3626d3ec` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/explicit | `00ed8b2719b991ea3e307586e2a46fb05284ffcc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/fast_forward | `48494f90e17d20158afc7bd5f6cfd63c9e352be3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/fast_rewind | `36b69e81299121f147aab23a06b76e3d2226d92f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/featured_play_list | `31c85b7955762d21b111f7caa8930ea8787175c3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/featured_video | `f96deb23ad9768888d224596201113216a0c2e53` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/fiber_dvr | `e18c0cf3d56114f87a96ee8ac64cef7b2268b693` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/fiber_manual_record | `0337ef47d435be37c2f3811554c229f1a1b6aaaf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/fiber_new | `3948ff90e2efcf6e637f909d03d67f8a84aec2c8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/fiber_pin | `7ffb29064f09f0d7f348bafcb21808f5ab5ebf27` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/fiber_smart_record | `663430b65c7c0d089281c0812adaae040aaaf680` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/forward_10 | `5c265aca49e16e5522919164982f57cf083c3385` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/forward_30 | `f9d75daf2a262213d2618f491bd144c5dacb1d69` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/forward_5 | `319035b1abee8a39acf5f9192c31ea1a707bbd79` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/games | `d86577f016bf04be5f22358ddfe40a4741bfce85` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/hd | `cbfce79aeaf65b706bc67a56ba7e8721098fa60d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/hearing | `4e01cd550444420b08cc89444a23d0c18c52f958` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/high_quality | `e50ffacae5c1044cac3272217781d922a5780246` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/library_add | `148a99770a460f6314ea7946b94526867a98ba2d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/library_books | `2a0165518b451545760907b29c66bcd65c13ac9d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/library_music | `2efd57a1e5227df90f8773dfbd3696d7bad918ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/loop | `f5a8051af6859aa89d8a7e05b02fc78289a8b285` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/mic | `7fdfd5dd3226241028122b42fe0139e5a6a66a25` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/mic_none | `8ab979d37cbc0cab52ff71f6b4ae8dc40d52eafd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/mic_off | `14d0149f05222121e01f9e974043bfa5da42dcad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/missed_video_call | `cb1ff63c24e32798dff0a6478d64bbc6bba91fd5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/movie | `faf4f7cffe5d3f3fee54dd027f0525612c404a4f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/music_video | `76dcffb412962a85edc23b4070366032b04f5981` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/new_releases | `fe1115f0a2139fa1e2fea64cdaa3bf2fa9ca3279` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/not_interested | `9e9dd5c327e8d284f8ddab30d9b38bf1f1ccd9cd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/note | `27243815c1af14d730951a0d440e2f2e504860a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/pause | `918aafbc7b7f7a04aca32900e2b9fd55ac041340` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/pause_circle_filled | `911231bd36668f909c2b64de18dafeb252069a6f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/pause_circle_outline | `c61d240b49acec28f4f1aa4d514ee6ad1b825777` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/play_arrow | `0b457a95e38ca3f09d9b7d24090470acd197e7d4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/play_circle_filled | `f9430c4c11c5c0b2295530519344d8c12c03141d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/play_circle_filled_white | `50fe715979a25b7cf56318beb38be152d84e29ad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/play_circle_outline | `0b18e4dc6ca6eef3c774cd325f4bd92aa017f115` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/playlist_add | `46f38ff70f7ebd6e456e90c1fe8e1f811ddbd9e0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/playlist_add_check | `249561ed4f3f84731e103228476c8a596c995832` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/playlist_play | `0bea8d2f2709366e4f993135cac265ca7ffa6f7d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/queue | `620caf3bbf86dceb430a63b8bec3a0d3a93a4104` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/queue_music | `121a11d48b492679b4791278a61b706d17515fbc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/queue_play_next | `f7b1d12ed5d88cc9ef4ff965733a8961aa3b3b73` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/radio | `306987c321c7eb38e2a406019448d8349731238b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/recent_actors | `06376bf3fd0c1df80c1cfa414e02ff319eacbb14` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/remove_from_queue | `de50be439466d370f7fdeb8ca0fcd079311b28d3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/repeat | `392a131dd3e1f271f8a2cb777cde4fa419d43cfa` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/repeat_one | `9648dfa3f040e28c32709baeb5fb1f1c7c9920ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/replay | `2a6cbdeb67627538387a2eac5f9b83863ec73853` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/replay_10 | `189c50fdea13af3e4c67e815358c59b14f318a17` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/replay_30 | `a8dae0993ea9006376a4955d699ebb34da686bbe` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/replay_5 | `d4e6bcd9633fee54b29eb3ea850a89e7682928c5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/shuffle | `5a5e787653e698d21200e140c202571928df6103` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/skip_next | `d7edcfa673a8b50787e810d54907343b7448caf3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/skip_previous | `89cd5b08e41e42a195edd5161d78e5488bd08078` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/slow_motion_video | `a33a13f3287a77f75fe823c7e0f180fcde46d376` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/snooze | `1acb1efaa3594ac9742900efdb6852decb9f3bd8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/sort_by_alpha | `61045f2ff07a648d9c52aad70f50f7af8eb9bc5b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/stop | `4a334213b65d6ffed1383632a576400e5e1e39f2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/subscriptions | `072441d60c469e010c5a2d26e4051871bb780576` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/subtitles | `9d5113abb2f44f9b91e858bec57ac85f1d4d7f99` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/surround_sound | `03695e66db753f763a8e67fb4510f1c9e1f4d8f0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/timer | `4cb2082d94bd4ce05e873af6707e210e7ea6ecac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/video_call | `63ded0e887c997ad47410d66b8b272b61103ff6f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/video_label | `43bfa2d99f6d931cb5fd3507abda7d944d17c885` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/video_library | `3f2c95bd6258dea2395e618e0cb2d6d65fd58369` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/videocam | `212ecfcc431a87548d9111954c54c6324d5b9ef3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/videocam_off | `eaf13618c67110429bda68fe536bfc94aac744ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/volume_down | `40fa3e35e9a32076c11baca786a7ac0896bf98f5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/volume_mute | `e2a03ae672542be2c2e855aa50e1caf91fa97e56` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/volume_off | `7a228ab3d83e4c156c0135738144a16a8b0318a9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/volume_up | `b262b0eb94037cdbb6402a80e0a5b2160abfd6ea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/web | `2364a615a051aa25e387cd1137443e2640d54fdd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Av/web_asset | `79ab4cbb67448a1fb8ab16169986a75ef6d07217` | COMPONENT | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Amber, Corner=Rectangle, Size=Default | `eadf3d4126478954a3b8b6794112460cd4103432` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Amber, Corner=Rectangle, Size=Large | `ae12a8dfdba00e53f342522f40cf4b02c192acb1` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Amber, Corner=Rounded, Size=Default | `5786dfa2ace2d6216915a756cb9ae420c33f5c9b` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Amber, Corner=Rounded, Size=Large | `0b741a14dda3b26778bb22c0327476c652ad6d29` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Black, Corner=Rectangle, Size=Default | `ee19f882517793ca20a7e9887e6b4c3080ace7dd` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Black, Corner=Rectangle, Size=Large | `520b9b5850b7751d4ddd666c10d5eca7c6080ba4` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Black, Corner=Rounded, Size=Default | `f7240fd6011a37566e305c32bd39e70c6fc5c9b4` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Black, Corner=Rounded, Size=Large | `6a833b95702ad4792229ae0c611f79fff7d36778` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Blue, Corner=Rectangle, Size=Default | `1254380817a605f964bc0ee27ce0476e1c95a4ce` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Blue, Corner=Rectangle, Size=Large | `a100da2e6e14da4fe9f5d6d6804f3b38ccd2803c` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Blue, Corner=Rounded, Size=Default | `8ed7afd8c14024466c8d5993c4c422927e23f9e2` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Blue, Corner=Rounded, Size=Large | `fca878a5d5ca36649646073b369e5494c3ebfd70` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Cyan, Corner=Rectangle, Size=Default | `0b4016c0dce3f67dde47945255d6bdb1bae148d1` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Cyan, Corner=Rectangle, Size=Large | `f0b0f46ff9a8c496dc0cbbd75f7d6b9819a95d6f` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Cyan, Corner=Rounded, Size=Default | `618240c0ac1e47240130a84064df72f46be06326` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Cyan, Corner=Rounded, Size=Large | `ab87f2e6e8a76815bff4aa857430c36e9600c57f` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Emerald, Corner=Rectangle, Size=Default | `4aca326ad5ea962a05710a2b8f3440f0b3dfbe0e` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Emerald, Corner=Rectangle, Size=Large | `2932bd4c7d955de25310c2c9bd120d6e87e514f4` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Emerald, Corner=Rounded, Size=Default | `c231c160da6ac76c493672c4e9eb20f0b3808d54` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Emerald, Corner=Rounded, Size=Large | `1a044634c2ba4cca42195a7b9616176211d38b0e` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Error, Corner=Rectangle, Size=Default | `889676fc4e30ff74d25b3b77b5294b8821718b7a` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Error, Corner=Rectangle, Size=Large | `c6244fb2d75618d8d7367040ee4962bb743dd987` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Error, Corner=Rounded, Size=Default | `71e0c681d3a5bcf0fb6c5daecffcd54fda8822ca` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Error, Corner=Rounded, Size=Large | `7ba7b9ab6f92af0f506a865e85a511920796def4` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Fuchsia, Corner=Rectangle, Size=Default | `e53a0e3acae8b350e1aafdc3c7f9611163245c74` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Fuchsia, Corner=Rectangle, Size=Large | `81c75dd5e5d9e953957a0f55d48a1418a9f943dc` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Fuchsia, Corner=Rounded, Size=Default | `4e2345537a3d2cf0891a347f2de8780c83a9799d` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Fuchsia, Corner=Rounded, Size=Large | `9d96d0750c10123c579babf7bba0d70e39c0d1c2` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Gray 250, Corner=Rectangle, Size=Default | `ab33570b7e2a98660d66c153375b7b3dc9bf7ddb` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Gray 250, Corner=Rectangle, Size=Large | `734bef107c98ca999ee044fa70d583caef642579` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Gray 250, Corner=Rounded, Size=Default | `40363148f15074ed89d8d5895d08f771076882cd` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Gray 250, Corner=Rounded, Size=Large | `17dd1d0db3d30f940dc2bed8d73cbaf581201134` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Green, Corner=Rectangle, Size=Default | `b44310fe14901c68e43f0adbd5353692ad1fb8c7` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Green, Corner=Rectangle, Size=Large | `fa9f8be23950c41dc25897177542a4b63d15c2ac` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Green, Corner=Rounded, Size=Default | `f07bca0dce975fcaa8c05e57be418f21da3b2aff` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Green, Corner=Rounded, Size=Large | `9703c4d75d960a65811831bd005abe657b0190dd` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Indigo, Corner=Rectangle, Size=Default | `e7e29dbcca33eb5e631889125470a0cfdf111acd` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Indigo, Corner=Rectangle, Size=Large | `c39746bb4e3a3143a8d2d05e3dfb94033e226be1` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Indigo, Corner=Rounded, Size=Default | `12433f6f39a6021a6e3390e6b92bdcbb840ba1f3` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Indigo, Corner=Rounded, Size=Large | `01b7b43830aee77e1a5751f4eb4a2f0d9de5e2c2` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Info, Corner=Rectangle, Size=Default | `03c56cfb600826836478c3469238a5f744381459` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Info, Corner=Rectangle, Size=Large | `a5ff10996594894a077f3b9024252bd875029241` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Info, Corner=Rounded, Size=Default | `8c6219518af81689a95564d874f66180043ad3de` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Info, Corner=Rounded, Size=Large | `6a3b4930ed185270d256a74f1691fa35e5644124` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Lime, Corner=Rectangle, Size=Default | `241167d14b0807a3a49f10c91ff9eac02255e88f` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Lime, Corner=Rectangle, Size=Large | `28aee707c7cde37baf51fdd2527cf820d8a43495` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Lime, Corner=Rounded, Size=Default | `3a97c44adc4a5003ffc9c9267038787378e624ab` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Lime, Corner=Rounded, Size=Large | `18c2abb7d0f64e8bf83419ad9b2f1a4e9427734a` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Orange, Corner=Rectangle, Size=Default | `0d7b85e797b288fb4c81ff584048f35038b550e7` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Orange, Corner=Rectangle, Size=Large | `8a669302d7ce1bd63f9230e5224fc8655918e6bb` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Orange, Corner=Rounded, Size=Default | `cfd6a88adae89e0a343bff82f9475854553d1b66` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Orange, Corner=Rounded, Size=Large | `5f9c78c6ff3176a4338c3d163de9709a488cbfe6` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Pink, Corner=Rectangle, Size=Default | `e8fbc9df43e1d1d32f289f09bb9b39edd7c62d92` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Pink, Corner=Rectangle, Size=Large | `f56048e465d6cb041a0793d43a0ff07f697dd6f8` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Pink, Corner=Rounded, Size=Default | `df2d5197461b3be1356632de6c864f35e721dc82` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Pink, Corner=Rounded, Size=Large | `ad7992544b6a942b3ea8eb10020d3e978f4ff946` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Primary, Corner=Rectangle, Size=Default | `5da3179dd1a1b9a04eed8137ac77ecb3d485f134` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Primary, Corner=Rectangle, Size=Large | `a1cba44642262c4456d9eb0524ddc09c1d2a7d4e` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Primary, Corner=Rounded, Size=Default | `c6e39098587d624914618f85bba3855d245e248e` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Primary, Corner=Rounded, Size=Large | `07b47f0f2297fef2c1408f4120a9ae0cf0826dff` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Purple, Corner=Rectangle, Size=Default | `580e21cb43ce6308ddf03ce9750698e577a3241e` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Purple, Corner=Rectangle, Size=Large | `a39ca5bb6ec25b5b865331a5c044476a9466bbb9` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Purple, Corner=Rounded, Size=Default | `2bdee634efd448588b295e831f4a3718b735c913` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Purple, Corner=Rounded, Size=Large | `aa4a51bc73239ae1c9e777499b76a248f25e4da4` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Red, Corner=Rectangle, Size=Default | `5f0c4feddbf2e4503a8d2483b5e75f411e3c91b6` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Red, Corner=Rectangle, Size=Large | `275cb55d0bda94e45cae8bb94c408202ef2e78e8` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Red, Corner=Rounded, Size=Default | `d2d8fa328776c5693b31869afe8f3c54b081fcad` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Red, Corner=Rounded, Size=Large | `6770c6edf87bd6887c22934ed1b2b2963fb71d2d` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Rose, Corner=Rectangle, Size=Default | `dd3802331f278972cc329f98ddcbb1c2cefd7f7e` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Rose, Corner=Rectangle, Size=Large | `460a7de461188fa7bd587741f4e27837437c08b8` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Rose, Corner=Rounded, Size=Default | `f262e48d91168944feb24fd820d5530c7fd66a1d` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Rose, Corner=Rounded, Size=Large | `08819e14419ca4dbd4ff740584ce840c91b23a82` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Sky, Corner=Rectangle, Size=Default | `0d21d0505cf85eb027dcac08bf4dd04158b4e5d8` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Sky, Corner=Rectangle, Size=Large | `e2deafd967e1505b041b0b922725a34afcdd3647` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Sky, Corner=Rounded, Size=Default | `c2556bc574e8dd41b3a447771fb0d4bb2a0c5381` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Sky, Corner=Rounded, Size=Large | `b9f961805a956ffa1f6c6495154f3dfe6e3e68f9` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Success, Corner=Rectangle, Size=Default | `b8cc9801c9045553c3d2e97c2d8a59ea93ed548a` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Success, Corner=Rectangle, Size=Large | `f8b885d3cd9a680850e6905a9117d18916cf338a` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Success, Corner=Rounded, Size=Default | `00c0d7a9ff1d5f322bec7d6dfa0f5e09f2385e0e` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Success, Corner=Rounded, Size=Large | `9a7a3810efeb89292b41cab5c4297a959088cfa6` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Teal, Corner=Rectangle, Size=Default | `9cc3d2b797e2a89de179384ca55037553a49e35c` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Teal, Corner=Rectangle, Size=Large | `22b72b62e31f3a986d002ef6094f725b82a981ad` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Teal, Corner=Rounded, Size=Default | `281f6ee8df4d2cc297187980c7af02144cb43f87` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Teal, Corner=Rounded, Size=Large | `13de0d1f566b04f9331edba0fd9cd96672ee287f` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Violet, Corner=Rectangle, Size=Default | `9e0b37f6815edff027546d07db90ae40c188a3f7` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Violet, Corner=Rectangle, Size=Large | `3af7095b661a04c49bc7cdbf7f85747cfb2fc2b3` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Violet, Corner=Rounded, Size=Default | `ae36b2f02521d3b33669016522807e4d2ee17317` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Violet, Corner=Rounded, Size=Large | `d46342c9bc8758635bb44922afb5ca70986f91d1` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=White, Corner=Rectangle, Size=Default | `7cb18325aebbd12601478ec4f20aa500eae07096` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=White, Corner=Rectangle, Size=Large | `9eafa37e3ddca9bf1d90046490d168a0d55e49da` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=White, Corner=Rounded, Size=Default | `67c86200a1c21cfc89eb396b360be30ec0105546` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=White, Corner=Rounded, Size=Large | `762507ecc36cf466727eb66ecd08757fa21d4f82` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Yellow, Corner=Rectangle, Size=Default | `7325ca8ee7c50156cfd38c5802f882c2672a3f87` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Yellow, Corner=Rectangle, Size=Large | `ebd2aa410d9ba825395b560a49d089677bc6099e` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Yellow, Corner=Rounded, Size=Default | `c6b00fe5d70a534854c01cb44da044bbfe731e17` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Colors/Item / Style=Yellow, Corner=Rounded, Size=Large | `308c98f29115ec04b93389d76a34772f1ce8c996` | Variant，屬於 `Colors/Item` | ⚠️ 尚未填寫 Description |
| Communication/add_call | `6c7936270898242b4636f08c6b2b81a718b62a34` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/alternate_email | `7463649f6dea7809adece0dae1e5fc5c82723795` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/business | `cdb8298c8db05f14237e706bd04323262fba7e2d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/call | `37d104e9d62116f7bad0fc95769d590e3e845d9a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/call_end | `d6145b69c68879f58be4442c546f2aab82a870b1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/call_made | `e5f990282bee625b00dc9763773ef88cad723574` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/call_merge | `45ce127239841bf591c33cbeb99396025d680d5c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/call_missed | `f9998bb1bb04d97bccc9365c0c519cc000cab8ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/call_missed_outgoing | `0e4a163d2e1173cbac7b40f20eec09192a240019` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/call_received | `d011044fad4cd55c99e435b80ec2494dc847fd88` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/call_split | `c36c7fe62df839bf3b1384345ec3bec014d96400` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/cancel_presentation | `9cdf6ec779ea90ad60d518e90ec8e98cfb9f1302` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/cell_wifi | `bd19a20722d0e1dab4b80baacaa204feaec08d82` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/chat | `e2e60c3876e434cf16adb8c77fa51bba39f24234` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/chat_bubble | `506684f8b74c17b200f0904506918c5f49999207` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/chat_bubble_outline | `41ab514fc5fd9da60d865616e765212b6b06f88b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/clear_all | `1e5f765e6fdc6b70205756fb8b4e89e13f28c13a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/comment | `7bd030a15792d0a588f4b320110229d20071f35b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/contact_mail | `6f345707b34dcbb86c8175ac172015eecf2ab2b3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/contact_phone | `4f607ec71d5ff2fa148f54df6f58a6e91c52e9ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/contacts | `c875dcc7ba568765b09859f75023f97f9d771b3b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/desktop_access_disabled | `9b5659141d80f13ed2c3cd245b10511c53c496c8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/dialer_sip | `8a2dda27237190b41e6068676fdd3601351833c4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/dialpad | `c03f3fcc034226e853101461ab5add8e3df0c4f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/domain_disabled | `0ae743695aea51101855d2a64356f58924de8051` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/duo | `8efd18452e842720eca6d62ba2320a7099d15975` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/email | `d992e66ee6a15288a0602a09e4b5364a1a81d5f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/forum | `e2de0c495c5fa02a161d52a04c770d9b7c64672f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/import_contacts | `9ae07c0d91776b5b42d28596c239cdb333caac19` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/import_export | `431f331b95880ac4921284004b80a9be354c6ccd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/invert_colors_off | `04d2eb07b5f9f0e770444b0f54405cc74207cf01` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/list_alt | `a8ad63eb7a736978881cc38eb578ce3c7b080a7a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/live_help | `43cb4044f4888d6c71adbed7201229eb421c9b50` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/location_off | `d3a8f3acb4cb87ffd3c33789d0cb7d322f0c8aa6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/location_on | `9e14d83ca2478458e8e38061deee909448d09612` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/mail_outline | `8d1d2e12228d8c22b72e52db99863bd40f31f34b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/message | `94817e6186d8cac6870d101708325567069f9082` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/mobile_screen_share | `710f3b2dcc508359ede77552b3ef113e90e034f9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/no_sim | `1a76a5b826beb89d6b10e951da2b073298213117` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/pause_presentation | `b7734b2561dada61fc2ff115ecc63f143ed7e12a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/person_add_disabled | `cc0b143fc9a5da061daad1133dbdb0426ed2f5a7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/phone | `2e1fc7ca5e1e2aa385a036b7709ad87923971257` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/phonelink_erase | `3734dd66c4585ad626d4c506070657be7c6f9e73` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/phonelink_lock | `d8a4746ab1135ee6134be0839c97f60cb3f0c34d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/phonelink_ring | `53ce26288a5db1b72389182e7b6065086901fd79` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/phonelink_setup | `b3b8c5d5535c0512bcc96ca8009c8f305330eb98` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/portable_wifi_off | `edc35b8e1e0504071d2368aa471e064a01b9a66b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/present_to_all | `b42fb7e5bcf03e269c19edf6d36d587a241869e2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/print_disabled | `7a0af59b7e7cb6c660c5270e2118faad52b5fccc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/ring_volume | `57e632546564cb289c30084d9e1cf42ac732e82d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/rss_feed | `14ddbec98dbabfe7c0bd4f4992701fdc5aa137ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/screen_share | `f301c81af8785c18766a81b336b7133489661dc0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/sentiment_satisfied_alt | `a438fb81f906f4c67d0be90ceddbc02ef7af112e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/speaker_phone | `3f9a5d98b0195c3df4c8e5bbe74977b902ac7d6c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/stay_current_landscape | `2798eb3689a6a0a61b9b78145c25189ff22a6ef0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/stay_current_portrait | `57c8f4883a7403c3f2111ac003385c0d675f508b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/stay_primary_landscape | `07c18a8e94807d6791be0fbe153afa971998f657` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/stay_primary_portrait | `dfa4e28c41f70642f3a5e96f9962ebb580b0d344` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/stop_screen_share | `a1d583998115ab8d02b87a583f6fe394c7a04728` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/swap_calls | `313ef83ad0c2786721d3c5e03e4cf1d7f1838975` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/textsms | `4bafb4e693079492d280220218cf3fd91aa29f6f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/unsubscribe | `9a6411c4d8b487399bd45161197dc36d9146a92c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/voicemail | `b885b073b4f6cbb79a73a608327895aef8ea6946` | COMPONENT | ⚠️ 尚未填寫 Description |
| Communication/vpn_key | `cdd3bdbc0313af7f09425b6cee868f14734bac49` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/add | `bcfb5006c1100d268331836825a608fb4c82c318` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/add_box | `4e4e33b357974b9a712e345bd51a7e9e077d4db7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/add_circle | `2dd0fcfe99ccfbba4ef693f48cd679d026209367` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/add_circle_outline | `3b6bc2cfe36a6aa5ed15a143652f5a5d271d78df` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/archive | `32186a67c6b861368644107592844ebb4ac179e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/attribution | `9f6f097e69db3bdf8484551844391f563b816467` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/backspace | `957a6eac624c92ae6ff1fd97f9155006aa50389b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/ballot | `c3ed7dafd28b0420a5631ee473128471b5b007b4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/block | `70d2a23c2038babbe78146822552c9703dfe24e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/clear | `49a058494ed6a99880870cdbb662ebe5691591af` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/copy | `4d1805825fe2c8354b2700c42f32daf07047e39b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/create | `635d6aaf29d93165eb5a86df5dc2b08ae3e792af` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/cut | `560c8209a9f613ad793cabb004802bc5377f8d0d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/delete_sweep | `7ec87618db2074f752ff5e8a1fe6c145ef7f0540` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/drafts | `5bba3ccfd0ae50a93465c548b6c31c28c03ef455` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/file_copy | `876c5c697cc09bcd3a64630ead92b757cd6531b4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/filter_list | `42571173745511f82830ddde7bc96cdc23796355` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/flag | `28d0508586a7e7f19e59c776cc368f60868c4c14` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/font_download | `ee0b6a63c2472123f7210aad2cb877eb35a68834` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/forward | `0eb2e30cfe6a7fdd5efec2ccb2b80535688bde9f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/gesture | `eebfe032151b16978158687a922282be1d1ce519` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/how_to_reg | `9af7bf461366e888437b82229354178d6e89e5a9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/how_to_vote | `25fc0203e79e9dcaef042c1cef842637378986a2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/inbox | `2ea2463a75e74438cd60e64b5a798d5c03a9b4af` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/link | `7aed8850d69f17520731bdd95e708c73c30addc4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/link_off | `102d697d73af28d1bd89c0491adad07f17abad79` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/low_priority | `fda47eabca5343bca7a73fbb055b1f5762ba2332` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/mail | `56d9a01be786aa05d46f01d991004a97eeeeb68d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/markunread | `9c6f52729baf19f5e336dfdc972eacd21cab4d64` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/move_to_inbox | `7e8f042a534f4db2c9ff53c5f83d74e07fddc191` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/next_week | `c340e188112f5270279e3bfb57cb70ec5296afc3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/outlined_flag | `55bc75e52233220a4e40fa123d1fc65d28a0a213` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/paste | `ee161ccd32a24dbb8896cbbb5647f4d86139ac6e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/redo | `715caa3f9c3b015ca2ff5c28ae6ab81e1a55a740` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/remove | `e26d5fbcba51332406957c2a635f3acd8dc6236d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/remove_circle | `ce97654e21a5454db3ef1244ce29b7ee649b4b5e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/remove_circle_outline | `d4c55320937af0c756636cf102cab9335bb8a9de` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/reply | `8e8e0e002a1ee443b87db553d514cf321ea547de` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/reply_all | `320c56d72ebe02770829a3909dcc33812b07c057` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/report | `8853a2b6cfa1c326302bbb55268ec12262e8890c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/report_gmailerrorred | `adad6b83ccd378f3b47010e862c9ed4306a55d85` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/report_off | `10e96959398d9086070f17eb67e6e47fd046bcdb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/save | `3bc897ae75d6c5b325ec28a04ba9a2450a3a9e85` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/save_alt | `f6e8d0941a6a553b3c9028e34caee53a466ddd20` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/select_all | `a31ce5fed38da63f9d5a1097cd1d9b2670acb2ec` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/send | `caceae6cb402fa840d2a9f61415ba7fa0f262d5e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/sort | `b74f849ddefc0da4ca82ecf2ed09bca154029577` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/text_format | `af651a99a392f16051605589c4c2d6f6c28fdb23` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/unarchive | `864d0ea0f5ce88397e8e5fb340a4f864d12a4f2e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/undo | `1303d5e656e2b1bff8f3e6e7bd1c88c1208433ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/waves | `240e674b9d0926441d7d003a308f04dbee3cadc9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/weekend | `7d22792128479130ed0c1d262bed6ce8f02aa3d8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Content/where_to_vote | `fc5b189374d712bfe0b3870b175caeb7f711af30` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/access_alarm | `9c6b67ffd62c4901040d49569670ec7e31497801` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/access_alarms | `343b96ec06915d695e1f9e07c22dcc460a9f1f08` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/access_time | `351ba4b0f4b652841ae77c70929492e13fd715aa` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/add_alarm | `59c6f1eefb15d60e258fcbd8239d3422baed1c04` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/add_to_home_screen | `48b6d78b4367077d4e8ebe3ee2cf0257b8a4d9c1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/airplanemode_active | `3ac403c08b12fe426c3c10c4fe828d6979ec8353` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/airplanemode_inactive | `54d02a500883e539720b969840d221f456afc6ad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/battery_alert | `560cc389512b13f31d3dafed9ee3ef91e750104d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/battery_charging_full | `6a6ed1badcafc9a6240bc1f0e4d8a9e6ac48e7d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/battery_full | `dc5d966345f728c84a1ff943a0974cf2c7f544b6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/battery_std | `19882a28f8477614e66d58b5e3569e0b01d8fca6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/battery_unknown | `063280bf1a4127d0e521609f52668fc93abce776` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/bluetooth | `53507ae133f21c0cc1fbb20bda0fd83402f850d6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/bluetooth_connected | `a16d703d0862a4f11deef706a1800151336c753e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/bluetooth_disabled | `5c2af39a311ce67288b97641349936c2476693b8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/bluetooth_searching | `cf901a96a943f87dde18aa06ab53fb5495e2921a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/brightness_auto | `2bfc05a59e5d76347d2dd5518f2229dc03d818a6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/brightness_high | `b3bafb37188cda219c73c20c6cb8753fd252de3f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/brightness_low | `ef71e805b33e8e951eea8adedbb3841a69adefac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/brightness_medium | `4e2a54089a69e6a11dd84e0051880d9c3bf15502` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/data_usage | `1b03f85aff3ab420474fadf973ad8baa6241874b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/developer_mode | `556ba576acce26f6e781e7f72a71a8bce5257314` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/device-eq | `1efd69565a2ce584a501189195473c0af415544a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/devices | `0e34b3364e7573ee005ceb0e296edeede483c7d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/dvr | `e060aec9b6a5b60e4c14941dd2f7578d6b09a329` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/gps_fixed | `c919c1e1424b1145102eeb41bcc0d6d8ece50a92` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/gps_not_fixed | `97536d617f3bc1542182f9cd0f9591309e902abe` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/gps_off | `d03084d927ebd7245c347cd522348e3bc8f329b6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/location_disabled | `f678b41a76196571e04a30a816feb4c4b26c8bc7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/location_searching | `7ce4f9bc800cccac46ca4d15ca7b50d878d1d226` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/mobile_friendly | `93cedf7b3d2373e6b049e72e69049bf81084802f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/mobile_off | `6995e4521b65c4cc6bd5c933a0d96fb9461ec943` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/network_cell | `4e4ed0c3f42ac858145ff29817e516340079aeb7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/network_wifi | `d276125d3d3b6882c73b7c8f2c0bd99528ce2785` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/nfc | `916cbfe9fd7319bedfe98012b3789810d9580ec2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/screen_lock_landscape | `6e331acff316e6bda891f46bf0c31fd548e2ace8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/screen_lock_portrait | `8e76e40dec8c48e0f1ab7876a70b048bc0e19d80` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/screen_lock_rotation | `d2eb79fe5f7192b6c1d7ac749c19459210faf13f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/screen_rotation | `e88802c73ca4d84ad75b2f6c11bacf73fe9fb612` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/sd_storage | `c305ba718c0a129a3740753612fa4bc0bc828943` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/settings_system_daydream | `a7a19cc745a8a739c63d5a9f656379c1fab01136` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/signal_cellular_alt | `c5208b244fc2ef79875a4577d1b5199c1d5706d6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/signal_cellular_connected_no_internet_4_bar | `31dd7d3d71720d1e65bd84e15fafa40a70bd45c6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/signal_cellular_no_sim | `287e34f03d37b99ac74d186a9a6b5637e2e8a1d5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/signal_cellular_null | `a130a757f0ec94df17d8d5535297b353ea855277` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/signal_cellular_off | `0ef6019bfa43d19aef79fa6674d3200edfe17c23` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/signal_wifi_off | `c3eb09ee2b7e2939aa6ab76de3b213eeba516775` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/signal_wifi_statusbar_connected_no_internet | `b8229da67d480ec2bd3fc38a510aea9c24ac4424` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/signal_wifi_statusbar_not_connected | `86d93d4994199b756522fa09076c6b529c6fe5b5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/signal_wifi_statusbar_null | `a90d808c931dc98dbbce3777773ab2f9cd72c68d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/storage | `4bc08fbbdbd3b1bc359859074c3f37a508a93738` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/thermostat | `bfe512bcafa6299b45799c2947809b300297a6a0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/usb | `4ed15f637ce88239ac134c3b9930f0a00bfe344f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/wallpaper | `6449cab8dc5209cd5e13e5321043c4f7846f449a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/widgets | `8cef54a4b7c4c4ffde4d62377aa1c38ff93c6eb9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/wifi_lock | `a19fe929f1dd15cca4727d833ffef034fcb580f9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Device/wifi_tethering | `7381771fbfcec60dbee6426b8f7a9590a932b570` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/add_comment | `3fd546a3b825e9cc66cc2f7554d0e19fababa061` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/attach_file | `0400d082f2c180de35d1b022d13b5c275c446729` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/attach_money | `bdaf820c21d3cc7925bb08d57421840a24d2d822` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/bar_chart | `5373aaca95132b668717b685b150f4aa596059cc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_all | `eeafc945954884285dc471f6e560770400d5a7cf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_bottom | `07fd785c9b556ac22d63efc763d1f2815e37f08e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_clear | `6af99ff1ec3ad41cbab99b0742bf3609882a4f20` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_color | `692891e4bedea24701c28c1329a8221957a16043` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_horizontal | `55a652b865bc0e7700297bc4cbd630328f36ff76` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_inner | `6866cba5424556c47fb37ca11296e00067386c2e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_left | `47b31dca0dc98fe0ebbf9a8cc18888461417ce60` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_outer | `40d9240636f40e126d0a04cb2ddf2524569e7d9b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_right | `c69169a0ae93d0259f6af0c661036ea4a247e76b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_style | `d5501dc4798c2971d1336dc2c562f4d2073cd6fc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_top | `da91a69d85f74dbb9bd81b89b25e50b8ae090239` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/border_vertical | `9d90a49f87fb86cb87fbfb289a02ab485102e28d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/bubble_chart | `c888a82ffa7db240905ea3a84a996c3e3c930d63` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/drag_handle | `b603553d2313d3e414aee64bd1146d41f6d35847` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_align_center | `3193e8bc4e42c33bd677f1c9a402d8e413616dca` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_align_justify | `042eff253bf1cc63384c50eb67799aa0ffd29a53` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_align_left | `d2608269c3a8fe9f8754c8345e8c7197f0f72e36` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_align_right | `2bd7bc0ae90666ea77117346e3d89266c3ad3e57` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_bold | `4586e51396f65cadc45681fd00c56a18dee41895` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_clear | `fce821a042b9e8e47c2576becfcaf99f7809acdd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_color_fill | `256d17cf443035d7946ba93bcabe755fea1fe661` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_color_reset | `120e27ecbb267578e9bcd29163ca074224509de9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_color_text | `1064bc8d32c4413cd4fc55185b597bf36b9cf96a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_indent_decrease | `e453a61290ede354576a46bfaec1a6817777d68b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_indent_increase | `34b2cc0cc80268d4c5d2473ed7bf913fd7687902` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_italicon_editor | `ae09f5ed2783f69541adfd268ecd537b46d4b132` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_line_spacing | `55b661f2fdb8e5472ef67f4a4327dc03f2679e9c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_list_bulleted | `91cbf8f4e39f1b1e857d60180c1f10842da995a6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_list_numbered | `7ae7a594c552bec42a7b95b1ff4c9941f08bd2b3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_list_numbered_rtl | `e93d664ce57c72e031b7fcc2f6a67eb22fea00c8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_paint | `88bb93ea7b0ce6d6fe5836dbc91510e875fc7d95` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_paragraph | `139f58b9eaef36c9e55180a96dffaa1a716b50fc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_quote | `4f875ee1e2751f74e0183ca5383dbb6d5fed4cf8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_shapes | `e4bae2acfc7278890b1b26e2f13826419ba56816` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_size | `5a335e3f3f488a3aa219d17411e54d11e628960e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_strikethrough | `e7175ef633b55326b152230c51b76a5302e11537` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_textdirection_l_to_r | `1169da50580009e75fa88636f382d940711ab2ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_textdirection_r_to_l | `5eb2fe170fd1a0ef3f888c7e3bd5a29bd64947eb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/format_underlined | `c2dabc9797d6736b7850169756a5a0edf2743772` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/functions | `8c9e10466bdeefb235534d84f090e0ab7817e7f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/highlight | `6eb6c76045c5c82d2c6d9c6808e59239750e7b07` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/insert_chart | `f0059cccdd258bd6e9f0460b01117f5adb1516d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/insert_chart_outlined | `569074a93346df3d79e54594be63bb4242c67fa1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/insert_comment | `cf375a5972591866cd5a01ad98cc7d50da641b8b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/insert_drive_file | `9ac0774573378bf3ec042623f0912ce9251c797b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/insert_emoticon | `1c3e08a997277836498b774017bb0a886fbebd5c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/insert_invitation | `1dbcc18ab7ee997615b5062c005bcdb648816e1f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/insert_link | `cd6626b2c8519cda26fd1c497fa91713f25a20c8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/insert_photo | `c59341458d9bd9c6175c3066bb4c63c41c51596d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/linear_scale | `e59c26d820753255886be6c30aada9d47669cef6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/merge_type | `2ee9b2a2b901dc5817bd9bea6ca2c241997525c4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/mode | `ece232a243e97f873c1fbcfe8e0847f666aeaafb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/mode_comment | `4863fb19c651aff1205cbbf79d3da066e1cef43d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/monetization_on | `68759f9f4cd2602781fab7bb6e2db5821a024271` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/money_off | `33fcfa1bf7bca22894aa26f65beacf5ca9efc84f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/money_off_csred | `90b60245c802b7a6ce3fb0471705b88f57671f09` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/multiline_chart | `42e8797e59d89e9c33d0436aae11cc4fef6f46c8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/notes | `86238554e9d0f915417ab42d9b4ccc88b19909b7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/pie_chart | `0346efec96f3a3b244fcb53fb96093e257496247` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/pie_chart_outline | `18263d9e55c0d2f0c97b33305a1ab2abe6a2d461` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/publish | `09e124d0aa86c9ad029a66694d78f8fe5c4fee27` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/scatter_plot | `a1f2758afae884b9a9d94d3bfd8abdd975e604db` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/score | `1c476114841c3deee1b8865ed3577915a1630e52` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/short_text | `bf5db09bea7daf46d28a8b1bb2b511e44288952e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/show_chart | `1446a233a3c44b0977148fbe2e7b72eedbd0baaa` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/space_bar | `46d261770eb2b37a276f352ef7a28f9ea8db2dbf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/strikethrough_s | `64a59a25590dc2d16bde827242ec0ca203124443` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/table_chart | `1036bc18e1aca2548b95d8fb06c0fd4878260870` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/text_fields | `181277c68fda8db43f51de708015c70ee8e29b71` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/title | `c7c82a024028f12cbe2553fe4a0042b07be528b3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/vertical_align_bottom | `0ed90233d219a89e0e76c847691d942543cb8f4b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/vertical_align_center | `a0d553ce705bd2ba658767f520f348697442e036` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/vertical_align_top | `fdd2ef633fbb183145ac1d1731ba8147eaeb6639` | COMPONENT | ⚠️ 尚未填寫 Description |
| Editor/wrap_text | `2fd911ebbe29f07196694e89696f9af4aca3ee7c` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/attachment | `1b1d1d0fab0cbcc5a49a218b9886766df8dd4794` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/cloud | `a5a858326f7120baab76760de6ead5b37f387322` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/cloud_circle | `84c0e0bddf290f5c52174a732e57027ed2531f07` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/cloud_done | `f9c1d7914a9adadef60a36d1a2a34cce007efc93` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/cloud_download | `145d32cda333d167355ea790243ea3a557e1ff93` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/cloud_off | `20e8f53ef426db7f3a6b04b3112807ca9721c76e` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/cloud_queue | `94c878c3d203798918c6abb9ee207aa7db7e6228` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/cloud_upload | `66b81937f73451c126173e1c1c2fafe9aab6eb1d` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/create_new_folder | `9bf1f09fc9ba6b8fa24159d01f3258702012d840` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/download | `daa64c9413ce87d0fa1ae597ef5c47ce5d99cfa6` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/download_done | `67b7664666510f203240b98a73392f156201639d` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/folder | `ef00667e3ec19e3969948cee258c113e7c52a220` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/folder_open | `0f4b33d8575b5d1891d030f179366a04f784c1e6` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/folder_shared | `a0ee1d93b89ebcd871d4795c2c316f905ae7ad61` | COMPONENT | ⚠️ 尚未填寫 Description |
| File/upload | `c42f5cbdb4824e08a1e6059533132864ce7b8355` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/ai | `993c53cf563358afd2cf21e1902bec417d0b62b2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/avi | `bd7c7306bb3a778ee3f93e306c9be2d1e7fd89ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/bmp | `d1d39f729ab415f181aa680a13a7b4254f0b3205` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/cdr | `6a920a8c46b6d68d623367c05237df14cf2c656b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/css | `69a47c785aa889ac3fb9608ddd7854d68c4a83b6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/doc | `76cd38fd0709bb4283e8354198e471100368f7c3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/eps | `7c3f6abc379c8486790548ac28b9bf92bde95957` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/exe | `35bc20dc327e20a76a5a3f77b950c83f41c3c33a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/gif | `4ec2fc08034282e06114e64757f82b5f86844cc2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/html | `0211a7017b973a188f412b2e730bf964e6c49a00` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/jpg | `3474fc08e7dba38d249637ac84183219e9ee2d7a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/mp3 | `35e1dfeb2c4abe59d1d18ab9b0a3e20b66ea8f01` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/pdf | `ef078516298261228093efe4fe58b4d6d02adeaf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/png | `ef783b13c46d96cec04b6c2443dd6c6f0d253754` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/psd | `edab9c0cb03d4ac1094939298190f0d47911d1f5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/ptt | `4f7f0959f0900cf54fdb06867f4c4729e467e469` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/rar | `72f29aa3c179a61020bb9e0d8422d5e61029bbd3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/raw | `6413240373ed728cde84830765cf82c4b6803859` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/sit | `7b78a94bb49059996369896c22968c9a71726cb7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/svg | `b824c20a6f325b5beb3a5175db78643ea5125cad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/txt | `0c0c03187b2939d9a6b25ef2912d721aac0ad62f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/wav | `4b95e35eaeaee8003a7ebdfd0d026cf82ba9d12e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/xls | `e016d35008892fc612e4c8db69ec428d359de8cd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Format/zip | `a8bced2442096af0a59e50e63e18dc664e0f95a8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/cast | `3b5151c1ea1202ad3fb0e67813b9e61fd28d92f9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/cast_connected | `7c6f721668c26f5b8f80feed99918afffc66b34f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/cast_for_education | `15ddb8413278306cf8b964bc80673f6bd37b30fe` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/computer | `25c17433bb40bd3785324d6c196facc0c85f6c40` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/desktop_mac | `e8841e5146bcf506a228a1fa6947d770fb4af1d5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/desktop_windows | `7223bb11f67efaf5ed2b958a0277967589cf772f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/developer_board | `78b9904629dd8a3644bd3fd3226dccb1d3c5e7f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/device_hub | `f3e14eb0610bddd7c4111fb284b2614bacabf67a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/device_unknown | `84335474778c17b539fe342931fe02a7b48ee122` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/devices_other | `6e164ec9ec19630d4dcbe95b480880812eaad993` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/dock | `2d4351814b343667563b192cfd9c7baeeb9e49a3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/gamepad | `dec2dd71c4319b7cac8d6f9a97425a7e8706812f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/headset | `216ba820e7bb78c9cf6f24782f1c14bbd3c5aa15` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/headset_mic | `a08e3bdf6b5d7ef27afa80afcc22c45d70896cc0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard | `305dcc1c8428d1e3641dfae77028acc051d7af1d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_arrow_down | `1f03372036628a34cc2f2e863f483258dc4961e5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_arrow_left | `9bdb99daf433193406fbd32fe809cb09a337fd1f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_arrow_right | `71bbc8aaec86d5a4ac8cbace1ef22314f74e55be` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_arrow_up | `a6de6768c31ca493cb1c2591995ebc92aa7c44d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_backspace | `622e1ad1114b3e6eae8920554f43c203934904d8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_capslock | `f36dc21df2f70a76aeadf4f53a98a6ecfa0a3d60` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_hide | `bda0fc470b9c81917b1925ecf79ea4a32ee40948` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_return | `f7dadb8e24c26f4165820b5bfc1e485a2b20cc4b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_tab | `37fe975ee690a242e5fff46968116a90bb8c3aae` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/keyboard_voice | `3c9c7c1462b1466316b669046d137c59c69dafa3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/laptop | `f5f3f99f7485bd24314b4d9a2d62942f6541ff3d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/laptop_chromebook | `5e1287d68062c5b81bc3771cc9a130612e55bc75` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/laptop_mac | `9ce9b1a2c8294ad674b7f5a40e19a63ec31db7d5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/laptop_windows | `4352110a697b2b2f3f6f27cffd95c1184119734c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/memory | `ed757f9cad9017193ff495437252867d58b8d0d2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/mouse | `552c52503cbbc0bb782fd5c40e9f9b7f8974627b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/phone_android | `6f9bf04848230182d7da8b1b612bb3659ae4ac42` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/phone_iphone | `9531629e7547ffdf04cd1a595385f7b4231a837e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/phonelink | `721a1ba565fee01358478ff2059a9b95b531ce9b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/phonelink_off | `eb09191c94ba87c282aba0e7e33fa0e225f3a138` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/power_input | `5e6bb8aa5823af7929cd77cbf0a2225296d98809` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/router | `fc2920117e888f1c8eb370224a36cc3694acc968` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/scanner | `11293e83f409791c40941e3d05e1b61ab650c60b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/security | `f61bc3b41353ba8b1eb17013d27172b2f23b9b55` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/sim_card | `9db42caf02f9eec48703d46b2247d0567029d5e4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/smartphone | `537671045f4227ebca14b58cd54141446e304909` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/speaker | `dc01969b19d460e6eb6d97b7dc1c176ee8cf794f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/speaker_group | `d272550f0ac6a215290846b1f97123079314cf85` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/tablet | `82732133dc80b15f401cae3f4fa7bc6c8e620b15` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/tablet_android | `639e590519c12b8e32deb7515d50469232a3dc04` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/tablet_mac | `871a60b585d638b356211f21eebd1439e61a540d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/toys | `0584bbf2516f2461ce50e7955fc1d2babb96e49a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/tv | `7694806b64190bc12afcc9ca00425f8113eb29fc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/videogame_asset | `a19386356b9dbba1b18401b394a53e61e5f00193` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hardware/watch | `b8969d732d4de00cb28e5f26236df5763fb893af` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/add_a_photo | `2767ccc16b725a421afdbf6451842a614828cecb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/add_photo_alternate | `38d873464a85d9a68a01243d63002b8fa9eedf63` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/add_to_photos | `b3d369ad07d654ecb3cac3d75118ceec2cf548f5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/adjust | `13cdbb18f39c000b776ab5b1e8ce1e2780102b7b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/assistant | `aea461a71edb793d532d2fad5bd7edb45900056a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/assistant_photo | `88efe715ed21cb74baca05619e43bbb89e89b27c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/audiotrack | `e5b9ec3f4df50c31f34acf42f58237564c47de22` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/blur_circular | `bd3429a8b9c6bc721e0cd998fe17ac135be9db00` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/blur_linear | `6cfb135466cd9edeec2ae8ccbe6a6be730bfff3a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/blur_off | `1772b02e30650ddbc12e2592ff087fe4459939d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/blur_on | `fd9c120b170169f3df46bd8588ddec6ecc08237a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/brightness_1 | `624a2da28dc4cb2d8d5797bb7164d3da18f16f03` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/brightness_2 | `eda7b98a25444286fed8af9605f250afd2fb0540` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/brightness_3 | `e9b1da4320cc1b8017697ab8b1bb92c78fd8e124` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/brightness_4 | `3b4c8471cbff173d8a5aceb54b65905b752579ac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/brightness_5 | `f0673f43a1829a98c53dd459a395054eccc98c38` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/brightness_6 | `c21587810d9279261edab04d895bfc09a3dd682c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/brightness_7 | `fd29db175ea049d3e4cab85c62030c955a53a60c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/broken_image | `c1bde91664794ec87d2ae1b9535dab4cddd9825a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/brush | `c94fe2ee1e6c8d83ad1c0d5f03031f829c6b635d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/burst_mode | `425c721d1c0dbd2de4f162641601dfab5160788c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/camera | `77d55010d7eb0cf76b587621d7468414c7337126` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/camera_alt | `818d8265d4db4c341cd716ce686bc23ca25b8901` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/camera_front | `bad820d2da5c11c296a2feac1f4df73d46c54f98` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/camera_rear | `489e105ef25d3f42d8adf057eaa7da623617c85f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/camera_roll | `299c13e0cbe1258cf4d0369e28a8b9b80b175286` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/center_focus_strong | `3a0d3cf32763741538103a286f168512a9ebcd74` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/center_focus_weak | `bd716c3c7c86d7782986ea5357a80e1292eaabb6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/collections | `268c26f459ee2b23297bb57574abd2d2e0b91899` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/collections_bookmark | `519b6a2bf2558338df613d93a9c535f1e07a4969` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/color_lens | `7dc53dc555a970819ac4fe0aa6689247a9c6bff7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/colorize | `9c980c63b3b255615231706ac9147df23a3ec08d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/compare | `d7bdbfcbe0fe07883798af2bab72651b6d267035` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/control_point | `48cccc3ebffb7bb00610d97eee59c24bcd28ba56` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/control_point_duplicate | `b6d87e1aeaadd09bdea16d7131fa652fa7e3229a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop | `0cd4ac1fd770be95151560a50c822e20f07ae0e4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_16_9 | `33247c505f3d069396da4fd4d045c7325b4c88a4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_3_2 | `c6fd02f88f962fd43b469569465d3984f5aab385` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_5_4 | `d20a70786b10f4be5b5637aedf2faaa6fc3c32a7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_7_5 | `040d59369c340e1ad864594dd53241ffcd68d958` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_din | `0fd5b27b7cfd12e98aa795d1cc6fbfa670ec256d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_free | `ed36982bdba4bd0f7c215740c7936e6eb88dfc2c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_landscape | `8e005a9aa23a339ede066207d374b5d3f28faabe` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_original | `71a8d167f6f218190424b9a00b20686e2b0bab5f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_portrait | `6bc192fa752f487f156530aa5055a6c0a56f6734` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_rotate | `9502dda659d9345f2775af7e6103acc5e683bdb0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/crop_square | `039184d6c9774f13043210e66fab3ac5141ad5d8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/dehaze | `8d6f193a02b8a0fa3a73a32224d6c006dd0b9c77` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/details | `9d5359e89b3a55504b477d1077ae1ccc315d6dfc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/edit | `0c170af253bfc1478c6c9f7dbada59ad765a7f8c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/exposure | `92823d4b5e05bf182f9942c238b2e5c54d503b58` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/exposure_neg_1 | `5efc3de87a84ce39656ee87f82f5999fa73a2921` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/exposure_neg_2 | `8104f7ddd9e916b485278a78561a84c597615e34` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/exposure_plus_1 | `fa5700ed77ea1459146882dcc46a0424dcc2b903` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/exposure_plus_2 | `44ce3419809b3161c4ccfeb8d19278faa0923e46` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/exposure_zero | `605f16873a350b066d5cb761c6690089f12e191a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter | `30b482e2e6296cf2e3c117fdb685ae24c8bc1910` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_1 | `b0025146b7ae153298f54d7a39e51effa25b4a5d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_2 | `22944687530b5f44b7264e3f500df97d9507bff6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_3 | `89d6ea2dbfd591dcba1b31b9c1404049639e46c4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_4 | `45e15594a0ff4fd18579ab833676eb7fec6e72dc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_5 | `b3f67c1c3e2a896e02c6684d802a0f3da0d2b9ba` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_6 | `0c5c53543586adb09f787c453a4fbe5f02b69b99` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_7 | `d9c4d1891cc65bf5ecd0b0bf75a12756463bbbc2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_8 | `c036011131723f9a01a873e09d446456733f3589` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_9 | `4538db2f4555f43cc6ee616e77e5c6d5f6c3ba0f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_9_plus | `16a5f7abc2a6fa489ab7f69d054fa9ca23e7d928` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_b_and_w | `65732c5d3ec8d771c7cdc500bcc41905dfc617ad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_center_focus | `ac4c711af88b045253133bc68a0f323fd56f71d0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_drama | `18641e42f7eef30a9ce1941f06f444305b0d721a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_frames | `213371df15311974c2a9b8d94ba1a421484d8a3c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_hdr | `4a165182bba0415a275b7a5ff15e2d1cccc8cf75` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_none | `5ef199afb2458c9c9b93678be2372f99e0af4d0e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_tilt_shift | `2d9782fa1b4b5c4bacc2f5abfea2bc87b4e46632` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/filter_vintage | `ba454d64745ac0df93cc19b58b47a31e7f73806b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/flare | `8ea0e6fd97159bc4319a02054fbd494b7ab729f9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/flash_auto | `42984d3436778ae2c2c281264c1fd35542b91efa` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/flash_off | `f1b4b7a36d6d7e705de7594c7be5c9a85039530e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/flash_on | `444b0451fea2506609c871e42ea05bd60fd66336` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/flip | `1a4c3e961b46a9144242bb2561280cd0e31d8729` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/gradient | `051da01d1e0431d79bc2a0f4cf9a5810dda8e27e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/grain | `3668fcbff0ed565f4f1d5bf8a3a033d2600a0b59` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/grid_off | `4f18a4efde4fe1a1454eb8a4d3697ff18f3c65ec` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/grid_on | `1b7b1225c5a9d456753dd35559b3ecc3bb281c9b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/hdr_off | `ea11e2a504d513bfb17c6c2e1885213987b358c6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/hdr_on | `4bb449b675375192b4349e2617a0e10b95f7398a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/hdr_strong | `2f97bf0b8b0055d7973a8163afb2b6b98091d2fc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/hdr_weak | `01581eb7a3c070dc5241b1bde97d247e85b42e7b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/healing | `4e15d0304a37f36ce0d7a554a2b621f4916f89b1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/image | `e684b7fa8cbf85e493d096ab45a4dfd6b50d90ac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/image_aspect_ratio | `000ebca409bd2a274a232af7bea04fc556684d0b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/image_search | `4a929890d779f81e134da7f22224a68257491dee` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/iso | `5d1dbff6ebbe20de021156461440de5eb79b3d4a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/landscape | `9615c4d4fc25615c9562ed78248a73352266a6e8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/leak_add | `54e5556dd379d6cfd2c6f72227c06dc8baa2919e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/leak_remove | `a953201b809cb4647c6cd1e3620bc3f3788a9422` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/lens | `44e4d9551a7c3e54470d4e80e56f18dbe2a1e4ac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/linked_camera | `8be56f14aaf7b7821e2266c92798866f17cf0680` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/looks | `ee8d4428cdfd1bef77d93dd4c93656382cc3a0ee` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/looks_3 | `990477fdaf40219f6ba147e704c83f9a28d7d38b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/looks_4 | `33ca1fe3ac83307c69d3392802009cb4e7393744` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/looks_5 | `a79da4faf0c7fa29390d62f8eb2e8a9d325bad35` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/looks_6 | `929a264c4e5777488b3a24fc2c17e2bd0bf62274` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/looks_one | `fa00f48ebcf8c485dc9aa8b4202fefd8e428862a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/looks_two | `8515a4f64c072c158ef90d4c75f9be99f85b0a4d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/loupe | `424ab3ab51a734aea5eeb4c1d38c67294925c115` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/monochrome_photos | `a4f2561c48a71570f040ca2cbf4bafe9be967809` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/movie_creation | `30e189e85ac1bcba7c9f607f35018cb95dcf6d13` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/movie_filter | `db8ca6ca5573c21d365c583a3f0f79f89ded71ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/music_note | `2f1fa728f6fba58a16f99c9932a55afca907a9a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/music_off | `cc4edbeb04fe9f900e929501f6a5e636f19317f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/nature | `b9c5f5918a2851b2ce38ce916c57222ab8b2a1c8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/nature_people | `0962e6ec12263583b9298f7bf9eb3679d9abb0e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/navigate_before | `f5fd99aa37af769a06b603c19ae4b10c1780292e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/navigate_next | `a07b9397dd7bb515e5a5999d7d16eba3b7c4d1d5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/palette | `1e60fe03bf96fa79bd4f2e3db92341daf421898b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/panorama | `e9e53f29c60f95f894314bb095a8571be83891a4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/panorama_fish_eye | `5ff67aa77d3a125a6cf0e9367aa17a8e388d8c9a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/panorama_horizontal | `1f900f4c57b72e880e1e57bf7b7aaf09838cbe84` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/panorama_vertical | `69a9e015ada24bccc98d6a27b586653aee11efc1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/panorama_wide_angle | `115363e5b2281a4df327410d400b568b52c7f82c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/photo | `ef65d817626e4f5c4a45a7ff20681d504a89c5de` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/photo_album | `ea8229078478a9550c3bff85a4d8d9673f0511d2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/photo_camera | `4a3e82d3400fae5971fdfc35bcc805f6cabe74ed` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/photo_filter | `5a3fb31e03f40832bf006c71239427491ec7d935` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/photo_library | `6bf1241e9f89df6403bf01a07d4627209a20b90a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/photo_size_select_actual | `631a769e8e55f607db8535d4074f713eb64f64a3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/photo_size_select_large | `296e205a9c55ab3351d58ef1d06a6fbacfebcf1c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/photo_size_select_small | `66010132813eed5d4b48ac3ba5cf6cf7d0272dd7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/picture_as_pdf | `07da490426c54c5c937fb73d664f1218fc3a5df0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/portrait | `ec954c7a08b789752d49cf5fb261e264fbbc738b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/remove_red_eye | `c5e5a8ef552245107695805f9c08afcad5cae48d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/rotate_90_degrees_ccw | `ca911b239ffc3c3023e1ef93a89ee9552a6ebdf9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/rotate_left | `7b727217ca1470d7359abcf6fbfc031c8fc95e44` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/rotate_right | `116e31a9274835dee912b630f091e42257dfe8af` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/shutter_speed | `0a6b131f140922a686aa3127a5440e0bbe9cd8ac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/slideshow | `ebe2d8b7a7420f9895e4711aa2e144b4fca5740c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/straighten | `e0aea471cae05329b2e5e9d6ba8060e765a68a66` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/style | `c29aad261624dc8384cfee70a295af5fb43c9ce4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/switch_camera | `1f188b3e65c6cf8f3365c246cd0ce01e91eb7265` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/switch_video | `dd51c1025084295357bb1233532affe6d8f79ee6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/tag_faces | `296b41461c34a2add35a364000d30eae4870494d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/texture | `9f7df72de5b4beca3b79c0def780bf5a1d997317` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/timelapse | `c44087004022da2597428bbb90321669ad2f8448` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/timer | `77b1220cf33a0d658a14593c4d5ac66d414f271c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/timer_10 | `1b7a8df33e3d49f7fba314540595cf67c5c6437d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/timer_3 | `91ccee8c1cef415c24c5fa812113e8257b45f198` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/timer_off | `6711ef379de0609344588691aaa728f41ec9085a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/tonality | `14e432152c1028de3b65fa330b55edfd9d82c509` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/transform | `32b9e57fb4a240d89a51986e3c2da6f186d1be6a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/tune | `5a04013fd014efc182d53432e2d0ab7e1d5ce965` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/view_comfy | `24c28bd41d6d1b28927e71d65eba6363067b1ec4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/view_compact | `32802b513d41d6769628618a9513c0edb8660963` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/vignette | `b8b1b1908f9bf52d1a483eeda915acb4f8cefb3d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/wb_auto | `20816e306a3ae8ae1054890d6d4d6e51a345eeea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/wb_cloudy | `d38b4c269ffc20b0102dc4e15a08360a92af8202` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/wb_incandescent | `e4cd6925cb82e23dc7b4a270e69d60561c7b1007` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/wb_iridescent | `956a84c24dafc5e8bd8fb2b305e0e89cecca26f2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Image/wb_sunny | `4d97e38a570119f60ca011ba0ebeab3d99deeaf3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/360 | `77747d7974c287af6adab86adf7001c69773ff71` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/add_location | `64ed831cdc78bfb510ca88ccda59247990b67858` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/atm | `91e83696b7e1d3017a2064b58aa7506c035764bb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/beenhere | `df407dbd20433a428eaf69ffee7c97cb68660db4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/category | `a1671ee54cb1db4c5c10b2987603b12559ccdcfb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/cheese | `0505d12ce6337c12778275b419bc1d8b7d587da9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/chips | `afc0db3f53f83e540c232b6878d98c0c3c673eb3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/compass_calibration | `f426c34832e198fb6a0f0b9fb9c1fbd2c001aaf0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/dental | `fb2205e7075bb8796b3aff05af7e63cf7594168f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/departure_board | `bb65d0a80ed285c530638e36f6543de847b87516` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions | `ca58c22ab267e59effe871f8eaa456756cd1c0ac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions_bike | `2acab1bef27141174df56a41712bc3281a4ca683` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions_boat | `807cf450fdf67ee07f50e4da8d588635aa5c951e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions_bus | `be708194454d87b5696dafb6caf977e4d566c8c6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions_car | `1a0ad669c3047dbb483f458979a32d0451b0ea5e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions_railway | `4dd60148e98340d65788866e18f130da8f55aeef` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions_run | `2134fb56c755b09e1265f86b02b4727f7a2d3c1e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions_subway | `352ad925eb7569c3e59b9d31caeee64096cbfb5a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions_transit | `e2245a1684576b98615cf4f0138c813f9ef20329` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/directions_walk | `1b4550b9949938787bd1309b1fe7913783645af1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/dough | `e999b0b8acc989cf0617d9ef72bbc7332bda4ab4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/edit_attributes | `7a720c639a235318b14e5269561f1bdbbc5448bb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/edit_location | `21ca9f73998586a09549f9dbccf688c1a27bbc5a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/ev_station | `351afe53624a2ab08924f1444d99cf7fddcfb637` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/fastfood | `7034c507aec651a173066c61924dfd3b13d89e6f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/flight | `32bc60205ab0ab90a8935f195f646e9d4af1eccb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/hot-dog | `fef398ac063e96e877ff8e06443646f25d28ee06` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/hotel | `67f056ead7ada2e5664624e07a79248f2cea9eeb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/layers | `caba3fe62517fc8f01dfdacaecea3b5ec39607cf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/layers_clear | `aceb978071384c2b282f26ca7c51e0b035e60aef` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_activity | `b0020729c9db4eb90f1b0f98eb4de7e4b7d491a4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_airport | `c2deba75275cb2504aba59ab73f6dfc4761b1ee9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_atm | `5158bf03a287f9c4c04fe4f9597d625790ae86ea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_bar | `aad34440c1a1993322780b0f8ff1e579567ca061` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_cafe | `3837ff3f0662c64df072879e4fcf5b36e965bf0c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_car_wash | `f498f244fd0b4941d75f7aa127c924ce88f8e935` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_convenience_store | `761d13572acb1ff9bc343c69b3d694e328e46bc2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_dining | `5a151e83e94132cd5dea61361d6163a3d31171b0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_drink | `b381c4df3c7ba9bb93865bd860fad99f128e1f28` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_florist | `b7e27337906025fca8994a14831acf2dd82541ee` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_gas_station | `adb3be5113ff3a7fbfa7a5331526d564562a9b2f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_grocery_store | `11ee11f85bf73249409d16a903f7aa5c2d156c2a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_hospital | `26c0b8e1906e13648449557e58ef4389e574ece6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_hotel | `90e5dc052e9ad6d8bfbbf1aa5de3f301b5f5bfed` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_laundry_service | `b5cfffa897ccb3369aa385d791f5ca4ebb2383c0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_library | `e76aa0339db89c143d1050506130ea9deefe3b39` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_mall | `0e57a083cbe1e57746880d75503292ee06ce3a23` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_movies | `4ca30fa6db9425b1d15d705cda981c208070c65f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_offer | `e992f5260399adeae3520f5b277891743a35fc01` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_parking | `0f9ff9e7e1ac7d69e2661f002f3822fb64f75812` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_pharmacy | `50e28e2e567a45c0e34f8fb8aeca12e4829acb90` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_phone | `00749cfd683d5dc77aef060f0b145a6e1defc203` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_pizza | `6ab6a0290ebdf162b4b8aa812ea59a2bf051938a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_play | `c4e9aa8302e6acb5379e0906559bc4a1e2b0b8dc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_post_office | `802403b963b3dfaf221193043eaac9970f37c174` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_printshop | `e039e0e284158be327584529be168582b433b371` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_see | `2ff828a74890e1c78e55edc7de36dd291fe3d70f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_shipping | `326c590a63e1574af0d53849a2773eada1e59b8b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/local_taxi | `3632561b7fd9783d10f95e9756a8e65511917cc5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/map | `a11e3aac8b3542944447614cd0584ca4bd82224e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/money | `4ad84213541542a38af993b743ab86451d52c402` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/mushroom | `b9c8b9632251c2e29ccc5087e8c026c3f6aa6f1a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/my_location | `2a0bb60d51474c4411c409bb59d684ddb8fc0903` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/navigation | `437ff688f353b9f3075a2a8d7a126ad0f18b8fb7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/near_me | `b9970c4424588a2a504523d42d00fca6d626caaf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/not_listed_location | `e842cecf9158a2afd1002788f775dbc876ec2282` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/person_pin | `1fffbefc4bdf16e3f91d02bb2e08b593da822638` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/person_pin_circle | `93dbaa215ac4dd26bb288b0e8356f7b7807e1de5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/pin_drop | `c10756c70bada04bccac4facd7434b1aa4674bc8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/place | `04b579075eaad019f8549cca6e58b7f9f71e936b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/rate_review | `117d93050ba708a88fadbfb1b75348068c431ee4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/restaurant | `51a78f21c3916bfff2c015b4821cc739da090615` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/restaurant_menu | `5cf06ae9d42fcf2c6d488918e9322fe97ff4aa73` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/satellite | `b756ad39c079eca63667f94d1928ae1eec31b351` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/store_mall_directory | `222f0fe858ecf59ff0804577f8907bd682371e51` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/streetview | `5445e15ba9416ea03cb50f708cf13d3934f32584` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/subway | `e27246f623c78c540dc6e5912a3cf8ad98490582` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/terrain | `d5d004701c362ebb2af567ec093e3281be05c4e5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/tomato | `f411ed27c9f9e301af254a50494cb0d4445d8a92` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/trafficon | `19d7199a3af5138894b744a92ee73d0001e6150b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/train | `0b59a31223c83c8c9c51ac644da5fd8dbaabdcdd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/tram | `5078576d9b5f96ec33fb796a60413f92dd80afcc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/transfer_within_a_station | `a790cd99a02479c917581021e48fe1c2665491ed` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/transit_enterexit | `1532cab7229dd434dcd8de204a9d687c26d033a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/trip_origin | `520de554c390ba263763e5ddf137ebf8de3e8b74` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maps/zoom_out_map | `3d6bc4d0b9e4d71ee834ad3456a0dffbd1194413` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/apps | `e2de40ceefe78275e3817493a6ace7e5d3b92303` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_back | `1323d14edfb702366a801f49b5bc4a521e219df5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_back_ios | `a1f967317844aa2d51a12b108eb1226c7de12600` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_downward | `4629ada82ec024f33c41282957ed0bf759508b28` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_drop_down | `d7e3cbd0a1f861879c4429fc310d89ea71bd45b5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_drop_down_circle | `6203ac9577fce6c6d395e858a606f3484a6f1bc8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_drop_up | `882f03512842e5b4f464b356a76b0bd874f9cd77` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_forward | `dab5e8dec12cc9554de8ee68c8e53a647133f06a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_forward_ios | `d6aaa7fbb2a3fef9c1e729fb16bf46c4c46d8e2a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_left | `2f998782d02cce6b05908eb3f3cba9f716bf435a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_right | `585138c4b800846ee60a2d3109053b0206467ec3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/arrow_upward | `352b5f4273f6075f7f52132294f562ade68c3894` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/cancel | `b2094c196f01b240e4e6e7c19c282823320ab849` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/check | `a203ead5ca2cd9b51633be33c476547b4261cf03` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/chevron_left | `8ef4d9ad1f3546d6b34a1a8556fbd71dade26916` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/chevron_right | `f5cfbda9b2011ea5d39d92daed579d10208855a9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/close | `4d298083e3679ff3a4abaff0276485b61cf8107b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/color-dot | `b874388c1fff1935555cbcc7d698e68f184a36af` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/color-dot-2 | `10b474644bf79a883c54c0eab922a637cca638fb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/color-dot-3 | `ab18771a92069d34f187dc67e252105f6a108469` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/color-dot-4 | `236f7fa0c743db9a86baf28c3f5b50867410ac6a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/color-dot-5 | `e27547cccdc389de7ad8023d85f6274215e6a8eb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/color-dot-6 | `f5e1bdfacf1131afb12d04b93d7205d8d4f40b69` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/conor | `8b2d09a5940bf38be63932b027136d15731df6e4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/expand_less | `525cb0a702edcf40eaefe95c1ee9810d5ee2cd6b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/expand_more | `700f7084b9ceef912e72ed3858456b9af42c578e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/first_page | `4ffa84cc62080250abd4dc90f61b167aa4894c4a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/fullscreen | `c11eeaa07e5c6496432794459f35a1c730f8bc2c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/fullscreen_exit | `b82182cac3b160a210fb52b8b8158472dce8100a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/ic_arrows | `a3e3aa3d88b49c5b36cee01a8dede1759de1d5ad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/ic_arrows2 | `adcae7639396532b25e1bf38bc3ee3e46bf368b2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/ic_done2 | `f5f8dfbeba0da232d3bcda6efb77c8627c704736` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/ic_Ideterminate | `1ba480d2f056ca407cef1aaea7d73ed045210180` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/ic_minimize | `7331ec5c440692152e3959bb7e32aed338d1738f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/last_page | `4923ef630f9c761ab47d4fa2681310733c326211` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/menu | `8af87a95885cce3c37c20e9e9beb600f7f2081dd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/more_horiz | `33a5eaf6c08820392278f7d923fd9c7ceef9b232` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/more_vert | `b07c4f489911b18ac28a34b5665a1f70fb463f74` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/refresh | `73d13cd4afb2dd77a3d1a5a74f5552191b98ba30` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/subdirectory_arrow_left | `e8e4622d54f70a3134c8cca17ebc455e2f4b8421` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/subdirectory_arrow_right | `3504719a401931711fff88855472c092316ca1de` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/unfold_less | `a687cdf1a0bd72dee2d5ed0bab6a0098af0456b3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Navigation/unfold_more_2 | `050e24359a320ad8ee7a062a603410324718e022` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/adb | `b1794a03e1ea539d3072d502080498049bfeba3b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/airline_seat_flat | `18d2bfb59417bbd04b52e4000784364057904c13` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/airline_seat_flat_angled | `3a3a8406a3f39496941841d6314ac56c0098b68f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/airline_seat_individual_suite | `921bd0f5964ff80deffb0732604c4fd77894f68b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/airline_seat_legroom_extra | `e8ad0695e69ead1c39d5cb6cea20e34a4a14486a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/airline_seat_legroom_normal | `20d77240512a50107280335d6ffc998b81f284e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/airline_seat_legroom_reduced | `4637aae3e79f620ae5b697fdc599c36458ef3670` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/airline_seat_recline_extra | `0ff66ad9494e2e5390173a410c6eb533342b9c5b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/airline_seat_recline_normal | `5ec85302836ec2ec0350f49dbd1c9b4d2a4fd58c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/bluetooth_audio | `52a38a732c146944947345b74bb108c7b1348b56` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/confirmation_number | `40ca282baae32becff94e485420d3d514052d1fb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/disc_full | `7ea9807bb2ccd411a6615609c685fa04a44f0ef0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/do_disturb | `5be01ee9998debf9c1cff7c4086391324ab70d00` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/do_disturb_alt | `6f45b701588b1532b8240ef0e7527cab44f13eac` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/do_disturb_off | `6bc8e57df7798ff88a97ae60b1a6c002f08e78c0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/do_disturb_on | `d92b46b2dc55f3d8e9c8e890c3c8c9d4648c592e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/drive_eta | `5186cfc210bf72168689c6b7d8d8d54ed87d2db1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/enhanced_encryption | `38b01e2c432f520b20fb02c041a5c6ee7cb5ad2e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/event_available | `9b6cf1732c937c128c915e1307adc77b13dab77f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/event_busy | `2ca146e695d3580956c62e444a18ce39634c2c22` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/event_note | `7c97d2a8fe035d7a2cc7da567d60d7f63732e5cb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/folder_special | `fe6e619720fa656e4e52cf39fe3fda842098a493` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/live_tv | `44a7d1882c97aa9b40fd1fb3b86c4c77d7b587a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/mms | `923d396bc3cc2bbd72d98ef8790c4a6bb67c1435` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/more | `afbb1c87ff7654d19feaf7774eda837ecc8805f3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/network_check | `212ad28d104eba19a67c7fdc821dae517fa3a7f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/network_locked | `ab165990d8d7f5c34fd118177971208ac215a6c5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/no_encryption | `d2c2eb6d2ce51d55e57da9542bc1e306a28be913` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/no_encryption_gmailerrorred | `7b732220ed1e65fe05cdff686b60c5aa481eca16` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/ondemand_video | `1c66c7538768c7565f9d83c572eb17b903711e1d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/personal_video | `177672da40daf863770bb5f15b63cee9364c651a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/phone_bluetooth_speaker | `0bfc3ad92c3a70e8743c3956df4eee512c4aca00` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/phone_callback | `69b3d15e3d87f962110e0effce6150e4dfadff9d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/phone_forwarded | `bdba452b9b181ef1c0bd71f98f3f975afb129468` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/phone_in_talk | `1653a144f0a2b205d4f1564c47301cc5df1ec10f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/phone_locked | `e2f5864dac97a126b4555fd80f33938abf880a1e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/phone_missed | `a75269b72276aefda16918a691c679955d6ce90f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/phone_paused | `d84cedfae58c0843737b51e362d7a8937e6ae451` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/power | `9e21bb81531e884c5c35b18fa530c3620a1585ec` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/power_off | `aea3a48d87bfbf03283c58bbf2d1d3b357a26ed1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/priority_high | `96d2188ac33d6dfe4cebedb7dd261710cdfb6e3a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/rv_hookup | `efeb0b9a4866e565a4a02ceb13f99966959f24ea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/sd_card | `affb6cf8bdd1e60972357a9b6669a0701171ca27` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/sd_card_alert | `2d63aa29b8a12dfc39ac79e3cee41448c754386f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/sms | `a43658551dc72274cec6bf968c71f42c0662359f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/sms_failed | `0bd1712ebf2dfed756f8b029e29bd8dfbb12368c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/sync | `23e43b5aae96df8fbe64b59adc5daf956f3096ef` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/sync_disabled | `595b2a67960550695f8d6cf56330ab18be3bdc43` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/sync_problem | `d92c31a17f44aecefc498f0c98f9161243c60a49` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/system_update | `bbbea53ba629bbcb7d982d6128aed97764a5e651` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/tap_and_play | `0bdb1fe2860e5b597a683e1f92eaf8183d7e6add` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/time_to_leave | `7af46fca2ece3cb65abf621475e3c25f358d8dc3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/tv_off | `6b5821705aebd27dee2696932a336effea33a24a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/vibration | `e6339339c9271b150b50a5a8430787faa8c497ca` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/voice_chat | `3faf4564b63423e7df8b539a2a0126b7d247038f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/vpn_lock | `cefcceb4e7358d1bdd91b0c02d9d1cb3cfd51645` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/wc | `933956254d38fd2d53ef287b1e77189cba07b114` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/wifi | `2c4625b90d16539026d4d9ba1e31751ca05637cf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Notification/wifi_off | `7a73aa6f2e3d777bcd07041fa8984bc8fc763a83` | COMPONENT | ⚠️ 尚未填寫 Description |
| Other/30 | `3cf88eddf7fc2ab7c0630a6d667fc460e5c1d1f6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Other/bleach | `2bf58e735170700372b73e2a0705a2931a290092` | COMPONENT | ⚠️ 尚未填寫 Description |
| Other/cool | `ee43b743064c0088fb71b750e24ec1df5ed2a5c3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Other/dry | `6f0761e4b74ccc6b967befebf186eaecff76d53b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Other/temperature | `d10660b16876ec87f9638d10d7644207c3f4903b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/ac_unit | `438e54b93a37a826060a201d2cec43baba55103c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/airport_shuttle | `f1a2acf4b78c75279132605c965819dea97f37f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/all_inclusive | `ee0dccfbf514b535dd0ab84976579046eaf55581` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/auto_oil | `ed0c528e07c226fc7bc035e0f5770f4fc33ad26b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/auto_parts | `2f50ef0a4292a960108f57870c407da87cf54a6f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/auto_repair | `dbe0587f4a27661b8630683c05273ccebd7337db` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/auto_trade | `06ecde4060714c76a4cad955ab085b74362209d3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/bars | `56fa9ff7a8234312168bf1d8903990f6c46028b9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/beach_access | `4543d29624e1089bec70ed46c0f41ba2f8f9a947` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/body_parts | `ab1118e3764a1aaa760d87bc32585f546b1fd5a9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/burgers | `fca94d441d58c4eef78dc674b1024a0958474e2e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/business_center | `dba23847d48128d14643af214a88bf049ba60fc8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/casino | `66726a4b9d74a8bde8cd060cc01f0186fda5b076` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/child_care | `47e546594aeb72bfb8840759864a4e3219686af5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/child_friendly | `e3081e1fd375cd869f7993357623f24ac003976a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/chinese | `920f29f46ba43487f751b2a1f55f25a8278ccdef` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/circus | `0cd67af6f9a1bdbd7a95caedcda9d3e36b649a9c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/cleaners | `5207e5daa2416c8b14c9c5db579cbd52b635e0df` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/comedy | `a68f09f337bc90bc88e04b7e660ca38c1d089d29` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/contractors | `7f28aa1e2e1a28baf10960fbf491989e0abf7b61` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/drama | `f784b0a4f9f7d096a182aa6ac984cda0b49a9bb0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/dry_cleaning | `5ca79fba2161ab2346b78c57db5aad7f1308052a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/electricians | `15d4c4c2e220ed21ad4cad80c105e35c4ba366b3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/fantasy | `8c837a881d92954546807417d13e52b35efe0777` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/fitness_center | `7a1e81c7bbf9f42d0f831bb506e92db476ba8435` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/free_breakfast | `86f514ceb46533a926aa254460b65eb79a69b63a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/golf_course | `e4032a9b05e51b8579bfe77762ac523dcf4a6845` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/hair | `207668492cbbfb2ba257d8b9a3a82b339d75527d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/history | `677b4566074b217ae3af2738140df13cc34c193e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/horror | `9aa699c195fc5cd35c15e00b63cb09ab7efe4847` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/hot_tub | `80aae35b1298362a32f5369acfb7436a4faf36cc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/hvac | `993d91095111b210a23aa0037e992da453f5732c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/ic_bathroom | `4779157913d5569b66a6cc2e7abb52533e847549` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/ic_doorman | `4ab10f350c43bb7d29108ee52a6c75aba5dbcd34` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/ic_thermometer | `a248e71c18d83735cf35e925cc1d5749195377e6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/italian | `1f5606b48bdec67bafee155da025e2eb4b8cfd70` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/japanese | `29185899a395b91d0bffd02f066da0ed4a907cfd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/kitchen | `1a406251da4b046eb9ec8ded0cfadd46ed68d5ff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/landscaping | `865540658376aa445f619ca67c2202ad0d163d8b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/locksmiths | `d61374f128d08820a90b405a421061a11c67f116` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/massage | `f3fe49a8cc8a4d1942ac5704024b6f7c6177f1df` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/meeting_room | `12a90a3d0948c0c1fedd4fd994bc381264e31409` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/mexican | `10cd6c788aca3e189019c6ecbc498d960162da61` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/movers | `179525ced592b7cbd681c9b30d39d2ee7bcbb1df` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/no_meeting_room | `095f2e1fd370509720c5e3ea5dd9ed709204c080` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/plumbers | `1b311b195383e385e89ff21218c0aec3d44d573e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/pool | `2009f6f0329a1378a0afd795a9e1ab075e72b110` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/room_service | `bd699a1344c7971e4c739b4509597be459c454e3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/rv_hookup | `bc4475e5e866351d7548dd219d4b083ee897abf7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/smoke_free | `8208524c9b096d6a3de284475cb52278674c4a92` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/smoking_rooms | `e265d34cf5eba01742a39c9fe5be59422d77c67e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/sofa | `b277a7012654444f284e868ddd826183a8156c31` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/spa | `3cfb7e9b49e16678786258c1086684741b4f605b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/thai | `dc89e5cb744d4e95fb96c7051d314a2762e1a384` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/thriller | `c3e5aad4a30472171ca5806788df8c2d680786b0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/towing | `b697f4a69d89c5df5bed18d38bf02a5ab6d67510` | COMPONENT | ⚠️ 尚未填寫 Description |
| Places/tree | `5172a7f32772dd33c0820c1e740ffa11116a781b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_android | `0ba85156063a1822d45d899a22a394d92bfe49d0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_apple | `c66bb6d7792466cb6ba7cbdb44eb29cc26be36ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_behance | `9a192ff03134fa174a7b11e582b6ce72cbe57ee6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_dribbble | `d18d051f87a90c3e49a645a7fb464ea63c73d557` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_facebook | `0bd9468518bbd10314296b080797899e91faa582` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_instagram | `b04d35d17e1d36dba280ee54ed5fa0ed89acb82a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_linkedIn | `8292d2b1f382177ba96369e95c16bdd45ddad932` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_mail | `60643340826677cf80c612490d9a85b89576fa4d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_messenger  | `673505e7f4cc2f512642fdbea1491ebd6d1c9c76` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_outlook | `f392794c582d1cd681fe66e3e020b428733b4dec` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_pinterest | `d28baff36c8dd2cffc13c90049a52f9d1235395b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_slype | `5435fbc74a7663d600b7befddb27df72c18fe974` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_telegram | `a9830ed1fa68efcb49ea9798c84e1226937ef886` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_twitter | `7e380a3e99371c3d9bc2368d5068ebb73b41ac82` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_viber | `4c6df0e2f99fe04b1acbc026f61f32174f24d784` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_vk | `ba48c9a077d7b8cf016dd9b5ed56c0808325385f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_whatsapp | `ee33aa5dffb0262dd31bf78807ed61103175aa1a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_yahoo | `4aa01c970dc63542395a0216c6ad5b9d069a3708` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_yelp | `ba8ec991a7b1f1af1cc5599c640b09c9fedaf7dd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_youtube | `172f7e4788f80821459669deeaf233cd323590fa` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social icons/ic_zoom | `4cc72db16c26696935aa80c25772a9ae9574205c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/cake | `3f48eafd5eb64f528e0391b6b884eaf6c487cfa7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/domain | `363fd3cb68014c0db77d4948b821ca2f337a9fef` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/group | `28d0dece30619d8965609eb67988805fe817651f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/group_add | `9685fd0f305a37c3365d302a0272ced5d82903bf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/ic_hot | `0beb3788f3408d3b068f014c893aad5d8d3ab236` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/ic_share2 | `7c858773240851e82669acf7ac9ffba1a32da76f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/location_city | `9aac016f95c179005d1a6dc34937f079e2b384a1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/mood | `2eb0ddaecf9b416511f6cb593f75f6e0da72d82d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/mood_bad | `deadf89614a7202b1c4eab09fc6facb1a538adc4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/notifications | `f8d45c0c93119d91adfdc7180c69619397432f1e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/notifications_active | `eae0db770036b42e5767ad06e5c090b0a2b8d96b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/notifications_none | `c7461ce526f0cd20c35fd1d38c0544ddcc5f921d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/notifications_off | `2162c2093ff64afefd53c124f8da9ae7b4dd1d33` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/notifications_paused | `b2ce87a360fd655ce2e848199fea17e9e713eb2a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/pages | `cb5b942f2ab29e91c30d9bd19e0c5dfa5534f198` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/party_mode | `725437a93f13dcb0e1f94d19adddfc0102a5edd9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/people | `b5715b70de82fe976cd969aed99e419fbabbe0b5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/people_outline | `a816e0e8cd22ee0d27193fe80d7e56ea3fffa7ee` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/person | `800595bb9137eb8e83482e644c9a81825ed93cf5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/person_add | `c8cf3db40dce0a0199f420662e180a37511ed2fb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/person_outline | `623488183f6aa51efd271d972010a20e3b62f559` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/plus_one | `380ed5b8345dfb80675234bd136c19f9bc5d8220` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/poll | `4d15a73552bc892d299a6b5429bafa9dc3b4b129` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/publicon | `3ddfc8137e25c6034be1d242ceb9be392eb2126d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/school | `a0acaf2316e4a1da61fe1bc19b2e7e944e576f11` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/sentiment_dissatisfied | `0a4dfe7b9e73376d21fc085fac173b77747371da` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/sentiment_neutral | `c744504f2a19b24b3917d5221aed6b637692cb93` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/sentiment_satisfied | `4cd2fdb5ebcfa0ed52bf14ca85fc078e9d7dcedf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/sentiment_very_dissatisfied | `cad082526680909f1e6e664ea58458261519f2ca` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/sentiment_very_satisfied | `ce152a3966df927a443275d4fe3c5891d3f96a34` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/share | `02e8510aa03ad6d43fabaaac58c0630029c8b81f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/thumb_down_alt | `4b1965b27ab13d5519b1212b138883c6a2fcbe3f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/thumb_up_alt | `50ce60f056fe1e2319342a220a0b45697c6e9e63` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/tie | `e981b93e386ebbf1c90e51db490513fe07ce47d1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Social/whatshot | `f9918dde3248b923f7fc6e8dd52c1872356f9433` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/check_box | `d18e04cc9581b3bb4d829b8d72ddbeae3aba875f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/check_box_outline_blank | `03fe4645ab90f32381b5d6f6a471edecc9ab217c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/indeterminate_check_box | `f45c002b3d01d56ddd386161e71db0d2cd9561a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/radio_button_checked | `bfec000db34f5381dd823ef5b50f284de5f9b576` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/radio_button_unchecked | `0639f95cc1a5c7f0e7b9c40c2d79f9bd06c5451b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/star | `752e2a43afd08e13ad9fb2ed3b98f06eef482270` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/star_border | `5ab9a1840abc81e244151cc34cc6f9df6d3ec6dd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/star_half | `3ff67a227c865535e402543c8c283b2b21318d1c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/star_outline | `98da08eb14d22115c9ef3ad2f345f68e6f96ce74` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/star_purple500 | `42a77fc4e692c8a8a5085da756797dc1a17a78d4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/toggle_off | `2f57b89555ac6a8b0cc93c032fa3b42c3b7fcd51` | COMPONENT | ⚠️ 尚未填寫 Description |
| Toggle/toggle_on | `35b76b95dfc581b30ecea167e1fa7a7a7db5e5df` | COMPONENT | ⚠️ 尚未填寫 Description |
| Weather/ic_weather-lightning | `0de79faa991f3f8addcf0c2b9308923f174cf879` | COMPONENT | ⚠️ 尚未填寫 Description |
| Weather/ic_weather-pouring | `f2b6361be14674dc2c36a72235283eb6d210fc3b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Weather/ic_weather-sunny | `534833ff63a9899b6a0ebcfdfe3145319ed56cd6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Сrypto-format/bnb | `a11b29d2702b78cad64612e7723cb579aca33d8c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Сrypto-format/btc | `9a53522198bc4a9f406966eafaa4585848bbb305` | COMPONENT | ⚠️ 尚未填寫 Description |
| Сrypto-format/busd | `39c613fe0597bf50f8494e11f01e3124eb256f1a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Сrypto-format/doge | `c9eda3e67909adb5b2f968a1989e8b3dbfb71fdb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Сrypto-format/dot | `e167538c955d738e6c88250384714f3371697033` | COMPONENT | ⚠️ 尚未填寫 Description |
| Сrypto-format/eth | `ba97a731af1149dbb36cc38daf14b1b17defc7e1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Сrypto-format/matic | `5b9f316974834363c3e7ab7106b0d0390e1db790` | COMPONENT | ⚠️ 尚未填寫 Description |

### Icons (Emoji)（168）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Alien | `00865afedab8099bd8f66e0903ab20b58640f337` | COMPONENT | ⚠️ 尚未填寫 Description |
| Alien Monster | `a11c8a007cd8dbc199edb502ab490966b6885538` | COMPONENT | ⚠️ 尚未填寫 Description |
| Anatomical Heart | `708e79efe32855ce563312e6e815385dcd8b093e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Angry Face | `e151f9008dbec343b15b646dac1665f522a99ca2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Angry Face with Horns | `1716cb66847edb3c4d2d068a7f4741b2c1fe9861` | COMPONENT | ⚠️ 尚未填寫 Description |
| Anguished Face | `fb34d6c690e3676e52f92e94f694b4023760ad28` | COMPONENT | ⚠️ 尚未填寫 Description |
| Anxious Face with Sweat | `1f55b27667c3c3012e178ad9c5ad178acdb09b53` | COMPONENT | ⚠️ 尚未填寫 Description |
| Astonished Face | `93941b88a289f7bd3fa936bc6878a82a2941ad57` | COMPONENT | ⚠️ 尚未填寫 Description |
| Backhand Index Pointing Down | `65c348d2135f167f48694eddd2746a3a97cd7501` | COMPONENT | ⚠️ 尚未填寫 Description |
| Backhand Index Pointing Left | `d5c01e1d8ab53f4a0f587b5bd289d48db7cfae47` | COMPONENT | ⚠️ 尚未填寫 Description |
| Backhand Index Pointing Right | `19db7f5408243c1220fabe0570ccc5b7d7ddbb2e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Backhand Index Pointing Up | `7dd5e7662cfffc1cdc1488472c7eecd8a2ae5e27` | COMPONENT | ⚠️ 尚未填寫 Description |
| Beaming Face with Smiling Eyes | `c790c3ea5e157572ccf1b1ab701625bcdb2abc52` | COMPONENT | Beaming Face with Smiling Eyes |
| Bone | `b082e0f5efb5b9860a285b250ef02845b681be99` | COMPONENT | ⚠️ 尚未填寫 Description |
| Brain | `5ac4f137f2cf2a5a618086b8c8f3fa08b47337ba` | COMPONENT | ⚠️ 尚未填寫 Description |
| Call Me Hand | `effa6946f5f2d2d54633fc3ba69331981c088560` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cat with Tears of Joy | `58dbe0037f2c071fabd70a9ccde51a062b239ec8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cat with Wry Smile | `4d465ebbfd02ea38bfb52f555654b0be69f2a424` | COMPONENT | ⚠️ 尚未填寫 Description |
| Clapping Hands | `b3b0a40d603774dc4141b980deeaccbf0522abbd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Clown Face | `8f37c64fbd4dea711b19e66a7e4ab853779aee5a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Confounded Face | `50731cb6502d8cd0829f04d7de3c9d1f8df53141` | COMPONENT | ⚠️ 尚未填寫 Description |
| Confused Face | `79d941ee0aaf87123b0a93f2215d867e911912d7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cowboy Hat Face | `4c2ef1cf0e301c6dc847be06e2df252ef79e42fe` | COMPONENT | ⚠️ 尚未填寫 Description |
| Crossed Fingers | `7f5199d2a96e5ef0846784eb7381f694a0d878d7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Crying Cat | `8058d0cd34cb02da6cbac10ea6be0da132fdf2dd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Crying Face | `ebd08c641741fe76b680a0db2c56ab470cc4a499` | COMPONENT | ⚠️ 尚未填寫 Description |
| Disappointed Face | `ceba006cbe87f7c92de7959a5b1679856e6452a2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Disguised Face | `cf5debd53769cc407e812965659c3461720726f6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Dizzy Face | `16086e2eef945bb108172dd7ef9a7ea6a5f690de` | COMPONENT | ⚠️ 尚未填寫 Description |
| Downcast Face with Sweat | `ad739a6fab75e99f6c8390eca19f1e38cf49bf35` | COMPONENT | ⚠️ 尚未填寫 Description |
| Drooling Face | `5a363aa9f1841a9c009becbf7980817580bba652` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ea | `e9180b85124ede5a56a18f55bb87e30fbe75f788` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ear with Hearing Aid | `5d0f63a0cae51af505452779370df2337b3b7ceb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Exploding Head | `2c8911df27bb040361d83344892612e1601a999f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Expressionless Face | `dd8136ea924fdba608354c45e703e1583155f1b2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Eye | `4085677e465def0b28ee01950cb6c9e9d1fdb40e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Eyes | `58b640cce0a5e18b7ae00d059c6739b10ba4784a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face Blowing a Kiss | `4ce4541ba61d130715f1670b5d93608ff35b73ed` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face Exhaling | `7d104ba0bf5ed67820fabf9f216f76dc105087da` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face in Clouds | `2c954ac137de4ddf7f36e0fb673b793fdc6d03c7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face Savoring Food | `be5ea1d868b65e4f8e1be0c9fcb84860b1e741ad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face Screaming in Fear | `6b4f441b3e69cb3fa4882cf91d6dba8419e85df3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face Vomiting | `798187a588c4cb51fe360503fe3c924661417c22` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Hand Over Mouth | `688ea5422a2e5095e0ba7c92ff4ae47d103c4ea8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Head-Bandage | `95fa20d7517b187053ca84fc74554acdc2ae0740` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Medical Mask | `02e353c15a535479afa85fbbfdfbb1c3c9da9945` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Monocle | `4b492aa916f9fa76e3916b0f7ad5d04ff09f7b71` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Open Mouth | `84b3eb24320d6d14660633a4fe48f5d57ce2ab91` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Raised Eyebrow | `038971971925e0e26cf88cc2ab655c9d909f6111` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Rolling Eyes | `b1b7ba6010b9bf1d973ce55995980196e8e29285` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Steam From Nose | `0de5eff961895fb72e53182ef4ae9805f6b422a8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Symbols on Mouth | `8ab1212dcbc53456dfbd2f0a12f397a1ea670811` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Tears of Joy | `d62cee26855587462739dadedbc3fec7ad19e1a8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Thermometer | `5867ec74afa1823bc5f586ae2584baf41ef26ff9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face with Tongue | `3bafc5ac94ffcf6e52538d572f0dc08dbbcd7fe2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Face Without Mouth | `c858b37252ac155c9a7da9b77d3b24fba88d23bf` | COMPONENT | ⚠️ 尚未填寫 Description |
| Fearful Face | `5eb9aec91e034559c5893a1fbdb89e8f259a56bd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Flexed Biceps | `05e31f778f73017da8bb649738451bfef90a9149` | COMPONENT | ⚠️ 尚未填寫 Description |
| Flushed Face | `7dc273d91ba1dd95145e0b6ce67ced13ffba13db` | COMPONENT | ⚠️ 尚未填寫 Description |
| Folded Hands | `98e14cf53116008700374e07f7cee4af09e98eea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Foot | `b542324506c0a6f35589abcb0185829d5462a202` | COMPONENT | ⚠️ 尚未填寫 Description |
| Frowning Fac | `d43e1fe4d6b9687f05ae99c6fcf8a10851f3f7ad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Frowning Face with Open Mouth | `cfb4d1bba7132ba21cb51b11f792f0431a1808e2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ghost | `df801eb26883a32678ada0a57d761c92da6806c7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Goblin | `c326e11d872dfce99715d57cf1cbb7dcc42cc8e3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Grimacing Face | `2905233d906ef598a344b5df01b9b3b15e865449` | COMPONENT | ⚠️ 尚未填寫 Description |
| Grinning Cat | `b9030516ebcb179b451c83a7663720227fe118bb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Grinning Cat with Smiling Eyes | `d9af138d07272f4d22f6248970a954c4c71eab0c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Grinning Face | `945f590011061368132e916f07b8634c7cc0dcee` | COMPONENT | Grinning Face |
| Grinning Face with Big Eyes | `5a0ff10a195d0b30ad729cdc9809521b57d9a68d` | COMPONENT | Grinning Face with Big Eyes |
| Grinning Face with Smiling Eyes | `b2d74773984a43684acb5d8f7fd607147b9904b3` | COMPONENT | Grinning Face with Smiling Eyes |
| Grinning Face with Sweat | `6e985d51f72c9c353fce1cf214da64542c83f440` | COMPONENT | Grinning Face with Sweat |
| Grinning Squinting Face | `b92b9cddb57d893cab5d45437d1c9dcf82d3d073` | COMPONENT | Grinning Squinting Face |
| Hand with Fingers Splayed | `d8b50ad6b05e04b2a2209a9c3ecd99b3d5a5239c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hot Face | `60af41c455ccd271a6b04651d5a3330b0a819636` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hot Face | `69c0eca92edadea97f06e8845df76f217fd92c65` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hugging Face | `a2471b75aa8030292777460a592364170d3fdc9f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hushed Face | `9fe2a980b996eb8097bc5a503a2b32f4d4b61892` | COMPONENT | ⚠️ 尚未填寫 Description |
| image 225 | `3b49e4d59083213e3a2560ae23b91c4af1d890b7` | COMPONENT | ⚠️ 尚未填寫 Description |
| image 227 | `7b09a50398f213401d7913e55141036f967411f2` | COMPONENT | ⚠️ 尚未填寫 Description |
| image 228 | `15c57d8f8c09a166503403c230b4772b27adf443` | COMPONENT | ⚠️ 尚未填寫 Description |
| image 359 | `e3b07f1a53b8e8e5a8f56641df87247dfdd9554e` | COMPONENT | ⚠️ 尚未填寫 Description |
| image 361 | `3153cac23a63be9be86e4f8c2f811ad0279b7868` | COMPONENT | ⚠️ 尚未填寫 Description |
| image 42 | `b794abaa2a65fb017f1fe3340f2f47770677e72b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Index Pointing Up | `06cbf386d5b4620ffcb8eb62b67534ee5dfc05b7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kiss Mark | `1ed2d10ea6a3393bda1a3526aa12f5feb564f441` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kissing Cat | `fd06ccac86276424da1f61872b8891f71f3dc1e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kissing Face | `64dbd23c87c1967357133f781fde6af036ed969c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kissing Face with Closed Eyes | `10f3e420d68fbdbec24aa6be8b419445c6782a78` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kissing Face with Smiling Eyes | `7be48b35078f53c4f8ae16691766a0b4a4890f1d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Left-Facing Fist | `5ec30daa0ce6f78c394a2ecc41e01c0827591c9e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Leg | `268ef8e4749b5d037ded86ffeb73558551fed3dc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Loudly Crying Face | `ee304116f6f9c109da768caa4b5352c256da66a6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Love-You Gesture | `c8081d77dbbe8629639f6eff9c2c993e14f1fd40` | COMPONENT | ⚠️ 尚未填寫 Description |
| Lungs | `9af40aab3ba71c2d292834e9b1641861910d01f0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Lying Face | `88bac46114300942b58d87377cc27f34da0d27df` | COMPONENT | ⚠️ 尚未填寫 Description |
| Middle Finger | `fff6680c75245fd83e893ba8c2be2f2f106a6eb5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Money-Mouth Face | `1c20f700b6983d2793e4772e15fd80c48c8502bb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Mouth | `e193c9bfd80219d1bcefa887e63c14bac3e47393` | COMPONENT | ⚠️ 尚未填寫 Description |
| Nail Polish | `23705952c9f527018330ab3929d1e7cfaf8edee1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Nauseated Face | `8afc978c0c6d5b6c93e22c00c97e4d8bf2818299` | COMPONENT | ⚠️ 尚未填寫 Description |
| Nerd Face | `d84b6c7558fb294235a11fe85394aca0fcd6d188` | COMPONENT | ⚠️ 尚未填寫 Description |
| Neutral Face | `55c2d162b3d71795ad790752ff607427f1d2c7e5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Nose | `9d2139f7dc3cd3f92c896d4f65979c03b31511f6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ogre | `c22659e3b30a029e44c1838977bc7321c441c86e` | COMPONENT | ⚠️ 尚未填寫 Description |
| OK Hand | `2fba1250f22d86a065bfb3461dedf3858760e624` | COMPONENT | ⚠️ 尚未填寫 Description |
| Oncoming Fist | `5395b0b15a5c3d2b98bce0406d42b073bdc3f967` | COMPONENT | ⚠️ 尚未填寫 Description |
| Open Hands | `c100a4d21f38a9397ba1b31cb47767f74fdaa661` | COMPONENT | ⚠️ 尚未填寫 Description |
| Palms Up Together | `6256ec5dca45990283f8dc66b4d1acfabbefa3e7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Partying Fac | `cf6bddb9c273e02e23458b83b4b790e720e88476` | COMPONENT | ⚠️ 尚未填寫 Description |
| Pensive Face | `2236f99f2f68e6c03b5e1e4646c48c7e2e7a14bd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Persevering Face | `e32804d649e4ab8eba4c3bcb32f30d6361d3e25d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Pile of Poo | `8434126975a7fd8f4b6c6a9d427ba4b16dd504a6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Pinched Fingers | `de214cfb862bb5d89c6b3378364918cda720585c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Pinching Hand | `2a04062dc5577a19153d45361f873d01cf4a23f5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Pleading Face | `7dbd25bfbaea7b01efe2a42b415925592e247e5f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Pouting Cat | `d1fdbde9101e4faa800e785aaf3cb7f0940c0713` | COMPONENT | ⚠️ 尚未填寫 Description |
| Pouting Face | `d235f7e10014b429591bf4495b06ea1973aebcf3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Raised Back of Hand | `c77a80ea45741369b41f6d246b574078d5079aa0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Raised Fist | `fb4b1b2da68fccc8d5d525ad41d5d05a299002eb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Raised Hand | `e1374de645cf04c6ea6609720507c30cbb764da6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Raising Hands | `1f916ddebd15c5e2f5dd3fee552021732d5597c5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Relieved Face | `4501e443dba6eebb26674718d5cc4ae52f775851` | COMPONENT | ⚠️ 尚未填寫 Description |
| Right-Facing Fist | `968f35bb287cdf5213ab60c4a1d89c085f55cd21` | COMPONENT | ⚠️ 尚未填寫 Description |
| Robot | `38aabb9debc5d47e15b9f44beb9a681e226656eb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Rolling on the Floor Laughing | `01ecccaabeec74eb3c46797ce55c5825747ae9f7` | COMPONENT | Rolling on the Floor Laughing |
| Sad but Relieved Face | `d20b1eb621c95bc6b2f778f0e47fbbc7fc31f4c3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Selfie | `523be751534863a74e1c7651aed3bf1df072b8af` | COMPONENT | ⚠️ 尚未填寫 Description |
| Shushing Face | `a5654c18e6aee031303dcdf5ae05e996ebe8caff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sign of the Horns | `504377a79ebb1c39f8c2ac17a1626602f006b04d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Skull | `4e42370e3a800ed5f1916fa231154cded90eda6b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Skull and Crossbones | `23d5c79a1e02e996081d615f91e8833512c474fc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sleeping Face | `1925b22145c085b8d0d36c122cbcb5e7ef204d3d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sleepy Face | `5416264981567fec3375182efd168b840915b7b4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Slightly Frowning | `889bb18d6869dbad4bbe08536f0960db72ad496f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Slightly Smiling Face | `f6604b84132975406775fbb5243aec7dc79a2321` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smiling Cat with Heart-Eyes | `5035c17faf031b0642df205e52dab213207c198c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smiling Face | `1ae48b65597d95e56121571bf91c33d1dc18076f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smiling Face with Halo | `891f872e5a34bfbf122d7481ed3625e5ec469653` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smiling Face with Heart-Eyes | `5617f2278c489164653e6cb355cce413fc27fac7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smiling Face with Hearts | `ccb624efc5adb194cc5600b8a2ae78132a53a5b2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smiling Face with Horns | `10117dd7a9d7049bb0a855c1fadeb76e74f961e6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smiling Face with Smiling Eyes | `26dca9b64e691c0242367f77a32b7cc878cf63cd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smiling Face with Sunglasses | `94e3d970b7663598c336309da216aefcb1d02aa3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smiling Face with Tear | `2fc8be66b35e66bb68ae087d0400841bdbfbe4c9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Smirking Fac | `9bda9e0d32d8126d8b7d34c93eb8a19dbacdf66e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sneezing Face | `8d884280faf3e59f7b18a0cc8f3f6a8357b2abf9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Star-Struck | `34485de1abf5f270dd597500f338c0f2320dfb64` | COMPONENT | ⚠️ 尚未填寫 Description |
| Thinking Face | `bc813e5232c6f7b1a8b3e933cb269f6f326acdcc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Thumbs Down | `50ad359675232ba45c295240a6672a4068685f89` | COMPONENT | ⚠️ 尚未填寫 Description |
| Thumbs Up | `a2e0d1399023df21d0ccdaa257378eb787babc5a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tired Face | `7b129aba91805b71210c669ceb5a59cd296e8ab5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tongu | `7303c9b94df3f4ed4046d6b02c7cd905f0ceafe9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tooth | `35bcc393cf3983d4c2dda0300bdc330caedca455` | COMPONENT | ⚠️ 尚未填寫 Description |
| Unamused Fac | `7b3e8d72d4b61e9d23d71409164073401f200665` | COMPONENT | ⚠️ 尚未填寫 Description |
| Upside-Down Face | `2225d8c3182dcb5403287bbbb45dd6af6adb3952` | COMPONENT | ⚠️ 尚未填寫 Description |
| Victory Hand | `e635dca7933c8423ad6399075611ee46ad7782a6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Vulcan Salute | `c1ba1864fce2eb066503ddda00f5e6f4c85ceb6b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Waving Hand | `27619da1c1be6b33c6fc020e32d0ba041597e6f2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Weary Cat | `9d69f21d664c6f16522e54f2585ef5868dc6fd53` | COMPONENT | ⚠️ 尚未填寫 Description |
| Weary Face | `c05cf50b8113db3a64ec4b11aaee68165bf5c750` | COMPONENT | ⚠️ 尚未填寫 Description |
| Winking Face | `3185dc771edd16d7e3bde03590f52bbb67b5a919` | COMPONENT | ⚠️ 尚未填寫 Description |
| Winking Face with Tongue | `6db63778704c62e9d4ee98c576aa8cdf31d31734` | COMPONENT | ⚠️ 尚未填寫 Description |
| Woozy Face | `c2034af095b76ad99cf2e6b7e903d5b5a006e450` | COMPONENT | ⚠️ 尚未填寫 Description |
| Worried Face | `c37fabf8e9c55138dc88b8315535f0270380eb64` | COMPONENT | ⚠️ 尚未填寫 Description |
| Yawning Face | `f8e90d286f9c60fe0882f700c4840a01e710f108` | COMPONENT | ⚠️ 尚未填寫 Description |
| Zany Face | `946dea52f54d83f4b46f88c9d09042b1b545747a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Zipper-Mouth Face | `cc932258f6def33160932acc56e350aafdb2a622` | COMPONENT | ⚠️ 尚未填寫 Description |

### Icons (Flags)（238）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Abkhazia | `fab87218253a6fe74c8d341ef13dfda0bbd06186` | COMPONENT | ⚠️ 尚未填寫 Description |
| Afghanistan | `0ab6d2e682a2b96b5e5e3e8da7b9706102b2c26c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Aland | `24775ce8ffba4f8fa6160926c3e78c1f649d1e3f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Albania | `661df46ff5e5fde41f5e9934fb5dfce3a5df0283` | COMPONENT | ⚠️ 尚未填寫 Description |
| Algeria | `a8c1e657cddaa17cc814826e3b23037b1e63936d` | COMPONENT | ⚠️ 尚未填寫 Description |
| American Samoa | `edd758a263d8a10f9c256ee4fa1026a5a62c1275` | COMPONENT | ⚠️ 尚未填寫 Description |
| Andorra | `9eca54210a99dc439f8c6c7abc1139cbea5752a7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Angola | `8715660cfb4fc59a49ff37320873947521e35ba7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Anguilla | `5202a11d55b49b28bc5afd0e48aa8511d4c9a7ea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Antigua And Barbuda | `a54f0dfbfc3df8d0e1f8dfb1c28d041744da09ec` | COMPONENT | ⚠️ 尚未填寫 Description |
| Argentina | `b6396df2c36129dca229a45e1343d1f4cb855a1c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Armenia | `c2db9191f9f4a73d4153563690084c4801316aaa` | COMPONENT | ⚠️ 尚未填寫 Description |
| Aruba | `a4a31ff86c1931085fecb2083f219bcb56dc520f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ascension Island | `0a69b8ec157e863032333fd2fe3bef2f35d0c6b9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Australia | `50bedd5c612d340679605f5d53eac43e0ab3e90e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Australian Antarctic Territory | `f98c1adb02333d8f897b720f229ee08e7b644eb1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Austria | `fd8af13d255469574f113feff6758366a7d9dd3a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Azerbaijan | `737489e035bb31f3d3e343322a8b531ed86fdfb4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Azores Islands | `694f332cf7b261fcae0fd8a36f16b4657cfb6568` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bahamas | `b2e522e02134d96246d2e17a7113466b4c5fc113` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bahrain | `c29abbf8486ac3cda39a5220575ae66a04260fd5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Balearic Islands | `a98fde598f324ddbfe5db603e25f58f19c8e980a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bangladesh | `67daf90ef57f011c5d710f2fab155a574445ab9f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Barbados | `af9e4966b3a5b13fb55ca8f14b35c50339f47eb5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Belarus | `12dff1f85f3982227e41f5e0b1dccdeb8222731b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Belgium | `1fabdad98657f3d24b183c866e700b523671bed3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Belize | `18f3c8a1197633368c2c5cc687e34d49db5f7d9c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Benin | `917db2ae9a1bfb7b90e804bc4a19d3d7ab5205bb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bermuda | `973ca5378f112918265e6893f3f4cf49e35497fe` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bhutan | `455cfa7c72113604f38a77caa959a4ad25255a88` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bolivia | `4a30e5a5a63301e1eefe933b133d3cc6e6b1c041` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bonaire | `8d9cd802df91294e4dd9a25647c4b3beecf35af9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bosnia And Herzegovina | `86e3adf8daf66a36efdf254c1f99d2529b4c4539` | COMPONENT | ⚠️ 尚未填寫 Description |
| Botswana | `bbf2f3391645b18ea59d496187eff1322386e43d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Brazil | `aeaddbfcdb1ec68973acea9a3a77f1b0284ecb33` | COMPONENT | ⚠️ 尚未填寫 Description |
| British Indian Ocean Territory | `48838ac0f3f92e27d2c487081e4dfc683073effb` | COMPONENT | ⚠️ 尚未填寫 Description |
| Brunei | `7e0dd93fe59a73a85d19dd1d4b945a201f459b6e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Bulgaria | `e55ac4b9c46af579840480b65902406a8c641b54` | COMPONENT | ⚠️ 尚未填寫 Description |
| Burkina Faso | `6a9d6b55e4be2f3d7f6bc35a249d84dc85c6132c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Burma | `a9fee58bdf7f628d3610b442bb12cf45bb4e8536` | COMPONENT | ⚠️ 尚未填寫 Description |
| Burundi | `d9363b9f9aa294e07f615035ff51569980e96365` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cambodia | `1eba718476ff79949c7d734f41906d8c840842da` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cameroon | `b2d46579d8fb6dceb17b7c89ff26638ca82af6f1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Canada | `29a4eba3ad24ad125dfbd9f5470d684ed7665c0f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Canary Islands | `5706e61b32671e17602bccd76e219ee58ac31e15` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cape Verde | `992452577d0defd6f5003ad6aa9fc9273a7095a9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cayman Islands | `867d982b5a0644f862bc4ff1177887065a25e079` | COMPONENT | ⚠️ 尚未填寫 Description |
| Central African Republic | `0b3dfcda11683ac6086b04378e2ef03eb82c87ad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Chad | `e77cae6a2ba3c866e6020d4fd56d4c5c8196e543` | COMPONENT | ⚠️ 尚未填寫 Description |
| Chile | `517a7b68b2347c3bc1a613567a0d2e6323dbede2` | COMPONENT | ⚠️ 尚未填寫 Description |
| China | `69855e7e356b67164bfafe66fa1ab93bd6395e82` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cocos Island | `d895156c2ad77cba6128934c2975b384186de024` | COMPONENT | ⚠️ 尚未填寫 Description |
| Colombia | `49ca49be66fb463f7fa2ab6669b7a863a668ad8d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Comoros | `fbdaceeae8a495777b0f363f72f3089323b0aeff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Congo Brazzaville | `8146e18286399c0c55a24107f1d9e2d8031245d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Congo Kinshasa | `8f3894fa54c0dc1f022a9b83fe778f7c85785b60` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cook Islands | `4feace3b705381a7abb6216a3cdef5622f8ebef4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Costa Rica | `84108a5ec5499ae8e25d06902759c2c8a6436303` | COMPONENT | ⚠️ 尚未填寫 Description |
| Croatia | `a90852a6219ec554dc58c188118c60df8775c79b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cuba | `ddeacdfb064f9ca60f2b10671502db9c5779857b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Curacao | `806dee0ff60fbd372ad4cfba703b0af258ad80a9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Cyprus | `198f44c25dfbc2a2d15d3a68c7eb3111c5622ee7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Czech Republic | `72ec9926e428506534fedbe2785fd2e9cfde6b09` | COMPONENT | ⚠️ 尚未填寫 Description |
| Denmark | `c3d8a06e477f04e0dc08dfedaa59c6c4da511bd2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Djibouti | `a290931d6af5651f6b07adde83cae87b2fdab64d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Dominica | `b6dc4ffb7da9d70f4fd76d17bb0e86cb1a38ad7d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Dominican Republic | `f1359b42950c1202bcf4d4b8cd8799c7e03bad3f` | COMPONENT | ⚠️ 尚未填寫 Description |
| East Timor | `621dd12919bbc3f923da4adfa408245789415a21` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ecuador | `fe6c2b56a5819da9f634ee0c03cfe6d947a42068` | COMPONENT | ⚠️ 尚未填寫 Description |
| Egypt | `234ce7bba4977b2acfa369857a80d7a5c636a194` | COMPONENT | ⚠️ 尚未填寫 Description |
| El Salvador | `15bfea03905af7af3dfc0646ab91515a82c3faa2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Equatorial Guinea | `56c20cb222270c4c2f3bbf483b611e802281e8ca` | COMPONENT | ⚠️ 尚未填寫 Description |
| Eritrea | `d2994d495e743ee80ec3ea5b0c870c996a26622e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Estonia | `436c7bc3b9c7470d3e3195c986383ae9f6a121ec` | COMPONENT | ⚠️ 尚未填寫 Description |
| Eswatini | `f01240e3acfd387e3d50c53760df832b260f2e02` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ethiopia | `1bfa22fc607f4113a789fdbd0373ef440a1f8468` | COMPONENT | ⚠️ 尚未填寫 Description |
| European Union | `d5735c9a0b092dd0c2efb03215d48af7a39e4a41` | COMPONENT | ⚠️ 尚未填寫 Description |
| Falkland Islands | `14a44a2d41ceb935b8e3702aac39462de82d0915` | COMPONENT | ⚠️ 尚未填寫 Description |
| Faroe Islands | `feee7f9f0210d155b0e2522397cadefa29b8d80e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Fiji | `2badab9681c1d2ad13a27b44f99dcfe61f04896e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Finland | `3a3fb13c18a914b843b0635f95d94f69de1f738a` | COMPONENT | ⚠️ 尚未填寫 Description |
| France | `5b90d394dd31d5675f14fbf05204eb3030390e8f` | COMPONENT | ⚠️ 尚未填寫 Description |
| French Polynesia | `9efbaad0798360462077ac9eba82eba5dfb47bb1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Gabon | `8e116a401b148185c5cda8f4ec2a2501d999a730` | COMPONENT | ⚠️ 尚未填寫 Description |
| Gambia | `c38d3fd49a884a5eb6582929cb32a04db3249b25` | COMPONENT | ⚠️ 尚未填寫 Description |
| Georgia | `cec22989ab57ea9e9ce2ad4394586173f6789ba0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Germany | `ca28961dc0cd63fba0ea19e665117f53872507d7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ghana | `804eb00b8c9becdaa7b33aab5124f42f56d7265a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Gibraltar | `72d1a5eba83b0b8986755e43399176d5040828ad` | COMPONENT | ⚠️ 尚未填寫 Description |
| Greece | `387cb88a048f3a6bd3c10555e65da3ceff43ec47` | COMPONENT | ⚠️ 尚未填寫 Description |
| Greenland | `84c533a5eba55c77fcc51b6568f1d3a3132191e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Grenada | `17471b801acd1b18fe1141a5c899b280d52ec549` | COMPONENT | ⚠️ 尚未填寫 Description |
| Guam | `32b2c08ca34728b45d23486aeab0f04311e63e9c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Guatemala | `5ab97ca29a8c53bb324d31e8b87962e7cbbf3f9b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Guernsey | `519583cb91b6dfe2a67a0ab793e9d73fdf02f610` | COMPONENT | ⚠️ 尚未填寫 Description |
| Guinea | `a6bf7a1ddd082777205c34c24a686861a0916e98` | COMPONENT | ⚠️ 尚未填寫 Description |
| Guinea Bissau | `b3ef828ebb4680988404668f6c46b701342838e8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Guyana | `540dbc29854a73e14cef5423e5c58c5baf4919f0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Haiti | `2dcae9b12284eb8e0450e7d799a5ba38e04e4853` | COMPONENT | ⚠️ 尚未填寫 Description |
| Holy See | `7997b25f68e94e5d222bcc43c46ef7eb33ea8c17` | COMPONENT | ⚠️ 尚未填寫 Description |
| Honduras | `5984a0a41f69ea373f96ac685015d69af0630f6b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hong Kong | `e6ecbcc28e362b1e6d8e9348410c55254e1e335f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Hungary | `2861c8b58d5332aaf5e08e9f5c3d9b7dada82c84` | COMPONENT | ⚠️ 尚未填寫 Description |
| Iceland | `e487a6d32967a5a3791b14e615d08b8d94c10126` | COMPONENT | ⚠️ 尚未填寫 Description |
| India | `7398bbfed7908851ff0c56fe59212c9f7d9dd6f6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Indonesia | `c2e7b5943248cd7b01ea596015b25173f1cf8ba4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Iran | `2c02e04afcf4d88de674b65e55def0af10e0e28f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Iraq | `90eaff9848e6f8f816d29c3563b03b9fc67eaa48` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ireland | `b23ab66deb8c189254d435077c8c2ccc755fe8d9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Isle Of Man | `209584e1736919b05befa9ba44d7ed00df134978` | COMPONENT | ⚠️ 尚未填寫 Description |
| Israel | `6a7d6157bc43e49e9142a02cce9e3d6cdb76fc00` | COMPONENT | ⚠️ 尚未填寫 Description |
| Italy | `a836067ab7db9f5f4aa01026e9a0361dd01fc525` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ivory Coast | `a0c608f823197d5d27412cd606f4b07dc0a35581` | COMPONENT | ⚠️ 尚未填寫 Description |
| Jamaica | `d9b7c6b59b6fff84cdb1fc865d8b99decd21f35b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Japan | `2feee02ce7504b1e3b20b0eb1c7b036d1b28a75e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Jersey | `fa0222f637363cfd383e2b9f69bfcc89dc798235` | COMPONENT | ⚠️ 尚未填寫 Description |
| Jordan | `09937114db1ba9db557c9878a64a3404d2a16631` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kazakhstan | `fb0ffafea9af53553f4f7060c202b295609c4e5d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kenya | `5d1a6fad117c7ae56f327eec9f1050905abda264` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kiribati | `99d075d18e33ae1aeda42e9dc74ec5c58c4837b7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Korea North | `935d2d1ae1e970b3809af18f3b2f6ab91f8083fe` | COMPONENT | ⚠️ 尚未填寫 Description |
| Korea South | `0dfe0f8880d000a50de581ae9a0b9e38965b6a09` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kuwait | `8fa07829c82608de99f563107e9145e19fb6947e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Kyrgyzstan | `1a7ff632a429cc6c82ac7bbe9bb58a5f724cda95` | COMPONENT | ⚠️ 尚未填寫 Description |
| Laos | `fec07fe8f55e0ddbf2624257ca764b1fe38c5a92` | COMPONENT | ⚠️ 尚未填寫 Description |
| Latvia | `5922916adbbc75e894d4623e1b2894b71ee6ba96` | COMPONENT | ⚠️ 尚未填寫 Description |
| Lebanon | `f7913e90413b83e478c0737b7772b6195153492d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Lesotho | `ad46ebe7fae92f60b262ecf2f2f0c0d1cb37b39a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Liberia | `b7e661dd131f66158f9224595eda46e7b7b93548` | COMPONENT | ⚠️ 尚未填寫 Description |
| Libya | `8578257e1438a7846d92b09d8f6b291deaab5d8f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Liechtenstein | `8cfe24c745c594b1342dde65faa7208ff7a21e26` | COMPONENT | ⚠️ 尚未填寫 Description |
| Lithuania | `269cdc35515360de5cce0d32cbac450dabee704c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Luxembourg | `13d24f58851dbb3b26b7360c976eef57d6dce167` | COMPONENT | ⚠️ 尚未填寫 Description |
| Macao | `0b1e1733dad60bc5495b9361a923932d452a7ac5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Madagascar | `e18eb15171917239dabee68795f201b3d2092657` | COMPONENT | ⚠️ 尚未填寫 Description |
| Malawi | `04aef78eb1a662a4b3bfb20b16f7eb3fa537c85c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Malaysia | `268fe3f121e0bf83afb09ddf5dce8874f5e09482` | COMPONENT | ⚠️ 尚未填寫 Description |
| Maldives | `3f9e552ed58125ab24beaf1f82c8b158e921b4e0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Mali | `a51516fc1219380722e30f84454d40e7f1ed0034` | COMPONENT | ⚠️ 尚未填寫 Description |
| Malta | `1fe7ca9fae9b4f7b93ff5d875d1fb213f1c354c5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Marshall Island | `307e2860808bf657eba2b4774d0121936d4fbe76` | COMPONENT | ⚠️ 尚未填寫 Description |
| Martinique | `c3c79be1c6a0eefd8cd9ecbe95742d926f9d41ea` | COMPONENT | ⚠️ 尚未填寫 Description |
| Mauritania | `39e2e93b7c023ee0b9fbc5f710d3402ff6731d43` | COMPONENT | ⚠️ 尚未填寫 Description |
| Mauritius | `ddfc524fa99b9a835510dcbe94605f0cfef3bda0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Mexico | `4bb4a4737993295bd23566afe7274b20da566569` | COMPONENT | ⚠️ 尚未填寫 Description |
| Micronesia | `55275e639af453bb4132896f98a2f608c5a31f53` | COMPONENT | ⚠️ 尚未填寫 Description |
| Moldova | `e07c1b3ccf7f74fd2e75cca67667fe2fcd3e1bbc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Monaco | `e12a6d6459eb6fd740f80c75f6736ac7c25f15d5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Mongolia | `fd28840d519b3f02291714ce150f554d325f159b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Montenegro | `23271696fb4030a854541e211c7d67eafeda9492` | COMPONENT | ⚠️ 尚未填寫 Description |
| Montserrat | `9f70322a5e6675f6fcadc45afa50630028c41fa3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Morocco | `9d355ea5e8abffb1c60fb0fb8761f13cfff13ba2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Mozambique | `b1291953ea439f85702cf570245361c089a1b51d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Myanmar | `b881d8535ade8da401e88f7b001f68ca0922fdb9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Namibia | `33956715c87eb1cceb2af479db34ce30ed15372f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Nauru | `2b2d35ea01a82a44dd4ce9dee0f317f8277d9b60` | COMPONENT | ⚠️ 尚未填寫 Description |
| Nepal | `4432b6e5ad1abc4fe70af64c32de2a0eec19fd07` | COMPONENT | ⚠️ 尚未填寫 Description |
| Netherlands | `3813de3f076ed0c8776ded29c28cb0e2b3122d8b` | COMPONENT | ⚠️ 尚未填寫 Description |
| New Zealand | `c40fe905f152fbf54fced3bce54e5f458b082fe0` | COMPONENT | ⚠️ 尚未填寫 Description |
| Nicaragua | `b5a1e8b91d0556fb6d6240f4e0420f7e5345348d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Niger | `80c01bea99169f39a47a50085bbf87b1e43cee93` | COMPONENT | ⚠️ 尚未填寫 Description |
| Nigeria | `deb1cef37f054d5feaa3ed0a1ff5a198c8abf434` | COMPONENT | ⚠️ 尚未填寫 Description |
| Niue | `518dfb21e29ee16ac310653b0ef801563dbaedd6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Norfolk Island | `c02448b728eb4a437fdd8c8d11088e3bc48ce8f8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Norway | `e7d5867a7ec8f1f81a3b9fb380faa5db51f878b9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Oman | `ef3ec4145ce92f375c6378db73e75144421df7c4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Orkney Islands | `e0aa5a01180a1393443115b812321ab4e310c50f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Pakistan | `429fddf308e8c0b672191226c1a2f08e5e89853f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Palau | `1fe7a59e083673d9573cdc9d13abbe65c591ba2f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Palestine | `769365a7b04a78e8b83b3d908d0929412b60c24d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Panama | `7f6c90ca1d98c21390a3f01e793422783b2636f8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Papua New Guinea | `32078f9a622ecfe6891e065f2a168376a8df5d8c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Paraguay | `8ed7059932a3af6f3b877df4833521fe62b47b9c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Peru | `666ac646a114500896002c216c43316f17174435` | COMPONENT | ⚠️ 尚未填寫 Description |
| Philippines | `86c3253925971d47d87179682ef4785ceaf6ddff` | COMPONENT | ⚠️ 尚未填寫 Description |
| Pitcairn Islands | `c07491e29c30f6752a019fb04492714a414fc77d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Poland | `f2431c1d5afebbc0e3b0a6809279fc86cff08df8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Portugal | `cb66b96e381e6fcdb79aeeeb327706235a34fe6c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Puerto Rico | `5ffb47a71a25f05d3cd5d4326a02eaa8f9ec5ecd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Qatar | `2b4ec90adcd571d4a08a3d8ebcc38d0c9a653ce1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Romania | `b2df8f0ce8b9d996e99bc35669f380699bf6ad55` | COMPONENT | ⚠️ 尚未填寫 Description |
| Russia | `1908c28ec3691c845e118e56d3c099ee00fa78c7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Rwanda | `32868f1931b617fdaa21ee7e7d805c4e4003772a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sahrawi Arab Democratic Republic | `4f0c3601051e62a45c9238211aede7bbfbbac8e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Samoa | `288ad9da65df4e4054c9ad5cca989e2239590e68` | COMPONENT | ⚠️ 尚未填寫 Description |
| San Marino | `89dc489ae90df1f0b787457d9080841f6768f781` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sao Tome And Prince | `d47e377e389a1380ace999bdc0cfebc89c01afe3` | COMPONENT | ⚠️ 尚未填寫 Description |
| Saudi Arabia | `ffaf2c2af9ec89dbbe75e667be5e368b1dc81c40` | COMPONENT | ⚠️ 尚未填寫 Description |
| Senegal | `3d0ac1a966260d3bb4fbd0680e03102e448cb49e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Serbia | `77d6be2cd6578f647824ba743c0c4cf92b1fe2b1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Seychelles | `ed92bf9828e08680415d3292510b36a299bb07ed` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sierra Leone | `3675dc80f0a59b9b96ba1c4408d0a1ce1cd2972b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Singapore | `f33b113933fd970432ddb598bbffb3978110ee7a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sint Maarten | `64aa3fe13f75f316106a2f038f46bfc10f97c464` | COMPONENT | ⚠️ 尚未填寫 Description |
| Slovakia | `58005a1b1da136f52f911dc149f02ade489e980e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Slovenia | `b7f5f6cce089b08aee7c4f00ecdbd667be54e8f6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Solomon Islands | `8f4971d531dd894884a4fc190c44bd129d85ecc9` | COMPONENT | ⚠️ 尚未填寫 Description |
| Somalia | `d897169ee80c19a089ab400995145cb9a934f9cf` | COMPONENT | ⚠️ 尚未填寫 Description |
| South Africa | `793f15c9a6ad8be1ec77343e84bfa9c83d08839a` | COMPONENT | ⚠️ 尚未填寫 Description |
| South Sudan | `8098ad2d8995b9bdce5b02a97e7bd118ac1de523` | COMPONENT | ⚠️ 尚未填寫 Description |
| Spain | `08235b8316d542f169b91c440810e0d8df3007a6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sri Lanka | `c48bba07700214ae89bf627f2cf075d9d81bb8c3` | COMPONENT | ⚠️ 尚未填寫 Description |
| St Lucia | `3f1704ec3b1e28374fdc4e1fb7cff64b80e111e0` | COMPONENT | ⚠️ 尚未填寫 Description |
| St Vincent And The Grenadines | `17fc2881f3140bd7f1a68a9c5d6f13ce14b96ab2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sudan | `4d5a4f9e3fbc92fd08510a47ee09b938f2b71aa6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Suriname | `066b1a3d8173ad60607176615e0455ce5ee3c194` | COMPONENT | ⚠️ 尚未填寫 Description |
| Sweden | `fab8cff7e06ffcca60ab36ba5c4b98a9aa770e9e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Switzerland | `592220b82e6268620b19a4e51687ebaed4e51a80` | COMPONENT | ⚠️ 尚未填寫 Description |
| Syria | `b70ab172c582f656ee63b309bf90f4bd5517292b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Taiwan | `7a7d35c1555ce7893e6f5ca210bc603511a26d3d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tajikistan | `b3bc38fd48ed7f1bcb1c3419a35bc0290e48479e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tanzania | `75b69dce22ed089d6a983d88fa67fa6f2ac0d7a6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Thailand | `0710bd900a62cf37a9d0d2823ac1d4b1fc6b2808` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tibet | `6718c0d4c4a4ca4b1e8fa6443803d5a1ee860618` | COMPONENT | ⚠️ 尚未填寫 Description |
| Timor-Leste | `58f35b460253219d88e80676be0ffe41c4d7ed32` | COMPONENT | ⚠️ 尚未填寫 Description |
| Togo | `9b00cde1844e681f437a298912527842d9f46a4f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tokelau | `127f7145d76cd16265e032cd7d1fa0208cd91cca` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tonga | `7985c0354b05c4f711687d218131b2e520451424` | COMPONENT | ⚠️ 尚未填寫 Description |
| Trinidad And Tobago | `02c328bae4af19bade58251a0765ee6330d0de64` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tunisia | `fc3bb34f9a9c05c2dcf4b0b97b4c9d5a3d4ee712` | COMPONENT | ⚠️ 尚未填寫 Description |
| Turkey | `fef2dac2f83c820f07c75a710827361f7b212ead` | COMPONENT | ⚠️ 尚未填寫 Description |
| Turkmenistan | `6c72620707df3c17a7b7e1c3212b737efb9d8495` | COMPONENT | ⚠️ 尚未填寫 Description |
| Tuvalu | `4941b132fea81b727dde4c0e99fe5c51c1f24fcd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Uganda | `50697b5650ae861be726081b36c05dc5590be0f4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Ukraine | `84842ae9091eb8978cd4b4ceef56d783aaebc0ce` | COMPONENT | ⚠️ 尚未填寫 Description |
| United Arab Emirates | `98430ee2acd2b6f05ab04b28e1becf4377492fba` | COMPONENT | ⚠️ 尚未填寫 Description |
| United Kingdom | `cf6c065689aad62bf87cf66d3b58a5514e5de271` | COMPONENT | ⚠️ 尚未填寫 Description |
| United States | `0201b83d258058344fc1d938389229e35cc0ef34` | COMPONENT | ⚠️ 尚未填寫 Description |
| Uruguay | `c853d267e678c3b34b92933239f7a2325092ac11` | COMPONENT | ⚠️ 尚未填寫 Description |
| Uzbekistan | `7ce15b50ad43cf883a97c0c204042bc9f4f0027b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Vanuatu | `7c23063ac849952d27fc9f5ebf2c4d51ef639f1b` | COMPONENT | ⚠️ 尚未填寫 Description |
| Venezuela | `961b1931c61fd8047f7e39d5416629d913c8dd02` | COMPONENT | ⚠️ 尚未填寫 Description |
| Vietnam | `b9060c26f4c7b9cd76cc32a1b1d20edae377e2ab` | COMPONENT | ⚠️ 尚未填寫 Description |
| Virgin Islands | `547f100de5f032c8c1e50f2948d9be8342b0165c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Western Sahara | `afcaa91d9685821027bbe261b637ee7673ce171f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Yemen | `8dfd0baf043ccb032aa010051100a51d671072cd` | COMPONENT | ⚠️ 尚未填寫 Description |
| Zambia | `90afd969461c9402e45df101ccc2e90a3f2454a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Zimbabwe | `8c48e470c3b5733ee45cc4efb77ce58e1a3568ed` | COMPONENT | ⚠️ 尚未填寫 Description |

### Icons (Payment)（24）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Amazon (Rectangle) / Type=Default | `84c79ef8607f1c56032abf0ecb7ff82e4277698f` | Variant，屬於 `Amazon (Rectangle)` | ⚠️ 尚未填寫 Description |
| Amazon (Rounded) / Type=Default | `3a4df16e4f130f135c959835e279f399ee97dec9` | Variant，屬於 `Amazon (Rounded)` | ⚠️ 尚未填寫 Description |
| Amex (Rectangle) / Type=Default | `f9361e911ed52592bd6a4d6c7fbd5f232bc9199d` | Variant，屬於 `Amex (Rectangle)` | ⚠️ 尚未填寫 Description |
| Amex (Rounded) / Type=Default | `c0c9c2b82ca4f545b8d8719d39f4c8c2bd0f0b74` | Variant，屬於 `Amex (Rounded)` | ⚠️ 尚未填寫 Description |
| ApplePay (Rectangle) / Type=Default | `82e0bb490eb1af6f9ec39937f72dc983ac3fab3a` | Variant，屬於 `ApplePay (Rectangle)` | ⚠️ 尚未填寫 Description |
| ApplePay (Rounded) / Type=Default | `3187cd05e57d746a3c1b93b2ce5d4c3b379421f5` | Variant，屬於 `ApplePay (Rounded)` | ⚠️ 尚未填寫 Description |
| DinersClub (Rectangle) / Type=Default | `9c584c5f9b6dc5cb987bb096f274d086e9f5e105` | Variant，屬於 `DinersClub (Rectangle)` | ⚠️ 尚未填寫 Description |
| DinersClub (Rounded) / Type=Default | `1ee4652f984476771cb715b564f0c7a545b72687` | Variant，屬於 `DinersClub (Rounded)` | ⚠️ 尚未填寫 Description |
| GooglePay (Rectangle) / Type=Default | `16a463c3bab9b8bb9cc672d6f58b8a68eebeec8b` | Variant，屬於 `GooglePay (Rectangle)` | ⚠️ 尚未填寫 Description |
| GooglePay (Rounded) / Type=Default | `7bbe16ec6e40961adddc5e34d05e7f6386c8ed78` | Variant，屬於 `GooglePay (Rounded)` | ⚠️ 尚未填寫 Description |
| JCB (Rectangle) / Type=Default | `36173cbdb9fe5995ca5ef1ab7a64c26963f176bc` | Variant，屬於 `JCB (Rectangle)` | ⚠️ 尚未填寫 Description |
| JCB (Rounded) / Type=Default | `6e3afd02d7e4082d4484f177ba7b8d58473d81b5` | Variant，屬於 `JCB (Rounded)` | ⚠️ 尚未填寫 Description |
| Maestro (Rectangle) / Type=Default | `625fe975502e4d55d5f79e25a6d88a68231bfef7` | Variant，屬於 `Maestro (Rectangle)` | ⚠️ 尚未填寫 Description |
| Maestro (Rounded) / Type=Default | `a93d4c1827e10ba766e8b04aa003c24caaac2caf` | Variant，屬於 `Maestro (Rounded)` | ⚠️ 尚未填寫 Description |
| Mastercard (Rectangle) / Type=Default | `9235f409272e2c07ca57e71685d998081e442cc5` | Variant，屬於 `Mastercard (Rectangle)` | ⚠️ 尚未填寫 Description |
| Mastercard (Rounded) / Type=Default | `e16639db95b0ac4d0837395a0fe86069a079c3c1` | Variant，屬於 `Mastercard (Rounded)` | ⚠️ 尚未填寫 Description |
| Payoneer (Rectangle) / Type=Default | `7df7052c6a7a257571ecefb6bfc87dab72d59237` | Variant，屬於 `Payoneer (Rectangle)` | ⚠️ 尚未填寫 Description |
| Payoneer (Rounded) / Type=Default | `f8ebdb5c375c3967749f9694b9f0c7deb593b6ba` | Variant，屬於 `Payoneer (Rounded)` | ⚠️ 尚未填寫 Description |
| PayPal (Rectangle) / Type=Default | `0b05f7daa468702837e0ab7b15ada777e5f89687` | Variant，屬於 `PayPal (Rectangle)` | ⚠️ 尚未填寫 Description |
| PayPal (Rounded) / Type=Default | `48e349a9ffb03ad5887fe018e008132f2d231faa` | Variant，屬於 `PayPal (Rounded)` | ⚠️ 尚未填寫 Description |
| UnionPay (Rectangle) / Type=Default | `02c9f8c84ba57e1f2a4d65d2b6a6448cbf28c526` | Variant，屬於 `UnionPay (Rectangle)` | ⚠️ 尚未填寫 Description |
| UnionPay (Rounded) / Type=Rounded | `16615a562a077268d3d9d41ef18f619fdd1d9429` | Variant，屬於 `UnionPay (Rounded)` | ⚠️ 尚未填寫 Description |
| Visa (Rectangle) / Type=Default | `e8cef226dd512105c6c701f18535892a1d11b27e` | Variant，屬於 `Visa (Rectangle)` | ⚠️ 尚未填寫 Description |
| Visa (Rounded) / Type=Default | `f7bf28360a98145abfacde6d4b6d4f71a8ccef1b` | Variant，屬於 `Visa (Rounded)` | ⚠️ 尚未填寫 Description |

### Icons (Social)（69）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Apple / Style=Color | `050029f9b674176d24dea7438d594bf3bc58fb4e` | Variant，屬於 `Apple` | ⚠️ 尚未填寫 Description |
| Apple / Style=Gray | `354379f1e97dd793b825d3a5fac66fc7982aecc3` | Variant，屬於 `Apple` | ⚠️ 尚未填寫 Description |
| Apple / Style=White | `fd20ac1699df2dd0ec0f79b3681d54b092ed64a8` | Variant，屬於 `Apple` | ⚠️ 尚未填寫 Description |
| Clubhouse / Style=Color | `47dae4cf1309b857cb7023274cf0306e51f2a8f7` | Variant，屬於 `Clubhouse` | ⚠️ 尚未填寫 Description |
| Clubhouse / Style=Gray | `946a263a17e98c8728680b8b21a817684444913a` | Variant，屬於 `Clubhouse` | ⚠️ 尚未填寫 Description |
| Clubhouse / Style=White | `d3272c99efa864a0618ed7e1f11292370d64cc34` | Variant，屬於 `Clubhouse` | ⚠️ 尚未填寫 Description |
| Discord / Style=Color | `6c67af3b67f7394b691c9e1c016e6e3e1f389c80` | Variant，屬於 `Discord` | ⚠️ 尚未填寫 Description |
| Discord / Style=Gray | `d13c97c37a032c8d1d602aba51cb6ff4905f3e98` | Variant，屬於 `Discord` | ⚠️ 尚未填寫 Description |
| Discord / Style=White | `710ab0060172644cca6a6bcbdff54d9cb3ff924c` | Variant，屬於 `Discord` | ⚠️ 尚未填寫 Description |
| Dribbble / Style=Color | `a52039a2050248ab588ceb42500f7b647f6aa382` | Variant，屬於 `Dribbble` | ⚠️ 尚未填寫 Description |
| Dribbble / Style=Gray | `a3b5e6b7812a319591b887cf831d35893277ebf5` | Variant，屬於 `Dribbble` | ⚠️ 尚未填寫 Description |
| Dribbble / Style=White | `a74ca3c583e9e65084b3e2260b8d750c25e36113` | Variant，屬於 `Dribbble` | ⚠️ 尚未填寫 Description |
| Facebook / Style=Color | `01e86c25a52c3769eb9efadfed1dfba69d669a05` | Variant，屬於 `Facebook` | ⚠️ 尚未填寫 Description |
| Facebook / Style=Gray | `b65acf452fd03827688502d2db7a3b170842d0a8` | Variant，屬於 `Facebook` | ⚠️ 尚未填寫 Description |
| Facebook / Style=White | `7380c75d9911bf015df4fe8886291aabac98870c` | Variant，屬於 `Facebook` | ⚠️ 尚未填寫 Description |
| Figma / Style=Color | `ee85428c19266ed0e63aa1ddff996de3fc3cab3b` | Variant，屬於 `Figma` | ⚠️ 尚未填寫 Description |
| Figma / Style=Gray | `d8ee2c520d709da52a684a8de4591971ef9e3fa2` | Variant，屬於 `Figma` | ⚠️ 尚未填寫 Description |
| Figma / Style=White | `51ad24097ce7217e38e6aaa30a5b233af5423e86` | Variant，屬於 `Figma` | ⚠️ 尚未填寫 Description |
| Github / Style=Color | `ffb5505369059287069ab16a9cdb3a08df113812` | Variant，屬於 `Github` | ⚠️ 尚未填寫 Description |
| Github / Style=Gray | `46df11474e6c9c7f1c9a88d671023ed017809539` | Variant，屬於 `Github` | ⚠️ 尚未填寫 Description |
| Github / Style=White | `4bacebb3d7dffa20454b3166fc5bdb6ed30d7148` | Variant，屬於 `Github` | ⚠️ 尚未填寫 Description |
| Google / Style=Color | `b3539fc3634e083a4e541c10838e2f7daf0ca80b` | Variant，屬於 `Google` | ⚠️ 尚未填寫 Description |
| Google / Style=Gray | `75dcc9e4102540890285d4c99d6cdf6cd592b240` | Variant，屬於 `Google` | ⚠️ 尚未填寫 Description |
| Google / Style=White | `fe0667d7fa1e240c343b920b30455f651231d0a5` | Variant，屬於 `Google` | ⚠️ 尚未填寫 Description |
| Instagram / Style=Color | `4dbedc3d2cd6b1338b3c82dfd1d33e33de4c6758` | Variant，屬於 `Instagram` | ⚠️ 尚未填寫 Description |
| Instagram / Style=Gray | `ea08297eeee2f532453b98e91caa241a1901f6d0` | Variant，屬於 `Instagram` | ⚠️ 尚未填寫 Description |
| Instagram / Style=White | `39c50ccc5b21f67afcad7e8093b4929ed8d6d186` | Variant，屬於 `Instagram` | ⚠️ 尚未填寫 Description |
| LinkedIn / Style=Color | `541cec16a3951257e1b0e93c237bbb04d9f6fbb1` | Variant，屬於 `LinkedIn` | ⚠️ 尚未填寫 Description |
| LinkedIn / Style=Gray | `a7702189272b78e4e9bded1c881172f17ed7a5a4` | Variant，屬於 `LinkedIn` | ⚠️ 尚未填寫 Description |
| LinkedIn / Style=White | `9615865b132e92e7d11bde9aedac91dae2d68286` | Variant，屬於 `LinkedIn` | ⚠️ 尚未填寫 Description |
| Medium / Style=Color | `47c3bd03796f13b2683f6c774af19331a1b0bafd` | Variant，屬於 `Medium` | ⚠️ 尚未填寫 Description |
| Medium / Style=Gray | `ce7f04c4eed277d8ef522b025ecfc19ada563a47` | Variant，屬於 `Medium` | ⚠️ 尚未填寫 Description |
| Medium / Style=White | `cb1f7235dc6a81f90309cdce3c4bb2714e61bdb2` | Variant，屬於 `Medium` | ⚠️ 尚未填寫 Description |
| Pinterest / Style=Color | `e57212594080a51579892096c8525163e7625414` | Variant，屬於 `Pinterest` | ⚠️ 尚未填寫 Description |
| Pinterest / Style=Gray | `2b881ec545c8235f3fd9e98e7e10a122228eb3a0` | Variant，屬於 `Pinterest` | ⚠️ 尚未填寫 Description |
| Pinterest / Style=White | `722909d1a2e67a5782bc7a1153ed5af1684c43c4` | Variant，屬於 `Pinterest` | ⚠️ 尚未填寫 Description |
| Reddit / Style=Color | `84442267582ec74fa6c833f8350425fdf97e8134` | Variant，屬於 `Reddit` | ⚠️ 尚未填寫 Description |
| Reddit / Style=Gray | `12c8f20ec66421648cd632236590229cadc53512` | Variant，屬於 `Reddit` | ⚠️ 尚未填寫 Description |
| Reddit / Style=White | `b51b30cfcb92d555b42aa19d8a3da5aa921a8d52` | Variant，屬於 `Reddit` | ⚠️ 尚未填寫 Description |
| Signal / Style=Color | `405c4ebd903edf959b8768c7a5cf84a1e7534626` | Variant，屬於 `Signal` | ⚠️ 尚未填寫 Description |
| Signal / Style=Gray | `0d83ac88c096f648853c854461dd2eed98a17351` | Variant，屬於 `Signal` | ⚠️ 尚未填寫 Description |
| Signal / Style=White | `04a426ac50e0b3bc507d4ab2357d2cfdebad877c` | Variant，屬於 `Signal` | ⚠️ 尚未填寫 Description |
| Skype / Style=Color | `ee2cf0580d94ad83f1bf7d930c3619295dd2c560` | Variant，屬於 `Skype` | ⚠️ 尚未填寫 Description |
| Skype / Style=Gray | `f160c4be76627aa1c179b81edcea132c2fa0cb3f` | Variant，屬於 `Skype` | ⚠️ 尚未填寫 Description |
| Skype / Style=White | `8a0eba81ff26cc6f873366fc66db8c039b355628` | Variant，屬於 `Skype` | ⚠️ 尚未填寫 Description |
| Snapchat / Style=Color | `8bea4a62860f73a252ceb04dc095784335b54e02` | Variant，屬於 `Snapchat` | ⚠️ 尚未填寫 Description |
| Snapchat / Style=Gray | `21f5331ca6d359b7a3f2c1c0bff10aa228cab42c` | Variant，屬於 `Snapchat` | ⚠️ 尚未填寫 Description |
| Snapchat / Style=White | `41c709da836a8f5e7d5ad3cc4a1c3504a8632908` | Variant，屬於 `Snapchat` | ⚠️ 尚未填寫 Description |
| Spotify / Style=Color | `c27f615fa3a0bed6942b1aa8825c1bda05908ef6` | Variant，屬於 `Spotify` | ⚠️ 尚未填寫 Description |
| Spotify / Style=Gray | `064f5aa5e48381f264fa4589930d09de3df2566f` | Variant，屬於 `Spotify` | ⚠️ 尚未填寫 Description |
| Spotify / Style=White | `98e32275568e498fdf79fb8eddc7a0d959c8fecc` | Variant，屬於 `Spotify` | ⚠️ 尚未填寫 Description |
| Telegram / Style=Color | `53e3b2728a01a1cf1e0d86fcfa92b2e171dfb8b4` | Variant，屬於 `Telegram` | ⚠️ 尚未填寫 Description |
| Telegram / Style=Gray | `2dce7269b7ac597729e15041f5c845437f53ea5c` | Variant，屬於 `Telegram` | ⚠️ 尚未填寫 Description |
| Telegram / Style=White | `68f3bcc840528fcc70eaf024b697e7bc6dce7e6a` | Variant，屬於 `Telegram` | ⚠️ 尚未填寫 Description |
| TikTok / Style=Color | `8a3b7a930d81866510e54e0b516d285bde7d4fda` | Variant，屬於 `TikTok` | ⚠️ 尚未填寫 Description |
| TikTok / Style=Gray | `70262bc31c3a51b5484d38174d16417748d5f641` | Variant，屬於 `TikTok` | ⚠️ 尚未填寫 Description |
| TikTok / Style=White | `0e2f1c99738a26bea4fa8f4934fa699b548258a8` | Variant，屬於 `TikTok` | ⚠️ 尚未填寫 Description |
| Tumblr / Style=Color | `840bf32c2ec848e525bee964caf35c4b1118fe48` | Variant，屬於 `Tumblr` | ⚠️ 尚未填寫 Description |
| Tumblr / Style=Gray | `becb398a65e6022cc6f541407a1003d96eed6627` | Variant，屬於 `Tumblr` | ⚠️ 尚未填寫 Description |
| Tumblr / Style=White | `ee0f682ed1f29405fef6e8f2342523ca2f45e374` | Variant，屬於 `Tumblr` | ⚠️ 尚未填寫 Description |
| Twitch / Style=Color | `279ab100b7d79baa075f05163b22fb75226181bb` | Variant，屬於 `Twitch` | ⚠️ 尚未填寫 Description |
| Twitch / Style=Gray | `f864756301035ac520486a57591b19e9eedb64e7` | Variant，屬於 `Twitch` | ⚠️ 尚未填寫 Description |
| Twitch / Style=White | `da652b5c279a1843557f306b815641d69b0dc7fa` | Variant，屬於 `Twitch` | ⚠️ 尚未填寫 Description |
| X (Twitter) / Style=Color | `d97797a0743e8ae42d5ef4629c344e3041eddfa4` | Variant，屬於 `X (Twitter)` | ⚠️ 尚未填寫 Description |
| X (Twitter) / Style=Gray | `f8576375bc330153939c9f14a756bbf74e21e878` | Variant，屬於 `X (Twitter)` | ⚠️ 尚未填寫 Description |
| X (Twitter) / Style=White | `ec21e1132af7edce6ed472617f4c264d06081f68` | Variant，屬於 `X (Twitter)` | ⚠️ 尚未填寫 Description |
| Youtube / Style=Color | `2657bdbc9f0f3a7c2fad4279f9d32da8b9d3ffe4` | Variant，屬於 `Youtube` | ⚠️ 尚未填寫 Description |
| Youtube / Style=Gray | `a8e0e2afbcff82760c733031acdbac3c29a3d5e8` | Variant，屬於 `Youtube` | ⚠️ 尚未填寫 Description |
| Youtube / Style=White | `1ce7bc925e097ecc9f030695bbb5e3aa6df44242` | Variant，屬於 `Youtube` | ⚠️ 尚未填寫 Description |

### Images（25）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Avatar 10 | `8a178b61e3a0eb44d27d7b19306a3ddaf09016c1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 11 | `8ef9ea6f3278ccc45a48f384add2a24e9d597e6a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 12 | `9f4b44492ffdf52bdc0919635f5b0a74552a2bb4` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 13 | `c71f9a42ecfadf5cd7afd1f6cd48a0ade03b920e` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 14 | `d0fa25d87f80f0efc14f84f35f1a51b6f41459d7` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 15 | `53d89b161c413e5cf5da578f31e77cbadcba4077` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 16 | `edcb0137ab5eabab5916318dfa613e803729f751` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 17 | `a62c3fc7f8089e2a465e888c698611c073b096e5` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 18 | `0ffd7eae48b521d14fed9560c9de61b7e21832e2` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 19 | `422c42acceeccc2de604a7047335da051e37c724` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 2 | `d59e41a2a80c444b499b61a33455194dd04adc57` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 20 | `9f35704e98071ceba5676e1d8bf75b6ab109ea41` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 21 | `6c681b1fc54e3c66334c680cfb446510d46927db` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 22 | `e73c87b814cfa13409c000e4ff08b0e6f3f2e9f6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 23 | `01957d0055ff5089af77264335ac675858f57e20` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 24 | `f2bbf51783ce6c09e8e2c450ab26f0735f190d7c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 25 | `cdaf0c2614ae19d482cede5affab6931a6449e4f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 3 | `2f0a3128b554c1c6692a19f237f408593dc676fc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 4 | `6a57a7bb669c2a60f6b01592bdaba8d3e1e4b44f` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 5 | `369f68909a3e2b79fd9a0b3bf6979adae998737c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 6 | `8c040f439f2f55b6d8e6ccf6a08436ffe92103da` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 7 | `fdf9523a2186c14743070cfa8084b341c49d556a` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 8 | `50fe8862861836d8a577f072f5aee15aa763d1dc` | COMPONENT | ⚠️ 尚未填寫 Description |
| Avatar 9 | `b29fb7eb5d8095929c5412a2d18a8ecb2210c685` | COMPONENT | ⚠️ 尚未填寫 Description |
| Photo 1 | `803553959477a35b79a7397dd718742dbf2cdb62` | COMPONENT | ⚠️ 尚未填寫 Description |

### Input--System backend（4）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| input-image / Property 1=Default | `39cb248a55bb2fe00c747efc6672491c64b24034` | Variant，屬於 `input-image` | ⚠️ 尚未填寫 Description |
| input-image / Property 1=pic 1 | `3dad4806c3af874b86d148bfe501a35dbb2e75c0` | Variant，屬於 `input-image` | ⚠️ 尚未填寫 Description |
| language-cell | `336024dc9d4f70441eb10cb2f41c96ac14df7c16` | COMPONENT | ⚠️ 尚未填寫 Description |
| text-cell | `44f10256ddda9d9a11f164ddda8411d114052244` | COMPONENT | ⚠️ 尚未填寫 Description |

### List Group + Dropdown Menu（13）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Calendar Dropdown / Type=Calendar, Corner=Ractangle | `c0db488553791e3c880d099341608225cba54453` | Variant，屬於 `Calendar Dropdown` | ⚠️ 尚未填寫 Description |
| Color Dropdown / Type=Color, Corner=Ractangle | `446a6bc05f6f220bedbc0b22c9c7bdaf627cdb17` | Variant，屬於 `Color Dropdown` | ⚠️ 尚未填寫 Description |
| Content / Type=Badge | `ab1880393d3f2da31271b9468a4d815d235395b8` | Variant，屬於 `Content` | ⚠️ 尚未填寫 Description |
| Content / Type=Button | `f656597aae469a6d565abea6867ee4630bf67390` | Variant，屬於 `Content` | ⚠️ 尚未填寫 Description |
| Content / Type=Default | `3e9ee8a3b6c6d057bf21476968f5b80e7d18aa2c` | Variant，屬於 `Content` | ⚠️ 尚未填寫 Description |
| Content / Type=Form | `cdb87075e28595790cd740f442b017b69dd3f2f7` | Variant，屬於 `Content` | ⚠️ 尚未填寫 Description |
| List Group + Dropdown Menu / Type=Dropdown Menu | `5a30edb5bcfbc19ec9be25641610188a43fe0b47` | Variant，屬於 `List Group + Dropdown Menu` | ⚠️ 尚未填寫 Description |
| List Group + Dropdown Menu / Type=List Group | `96cc0ab07ce62d7a23c7ec40065b92dd8f79cd60` | Variant，屬於 `List Group + Dropdown Menu` | ⚠️ 尚未填寫 Description |
| List Group + Dropdown Menu type 2 / Type=List Group, status=Active | `e3709466cabd9f943945094807436dcb244e166e` | Variant，屬於 `List Group + Dropdown Menu type 2` | ⚠️ 尚未填寫 Description |
| List Group + Dropdown Menu type 2 / Type=List Group, status=Default | `fea55359960f7e756491d5dc84b10edf07e6d914` | Variant，屬於 `List Group + Dropdown Menu type 2` | ⚠️ 尚未填寫 Description |
| List Item / State=Active | `1bcbb97563e5aa9b2155c4df28e278b8fc1a2ea9` | Variant，屬於 `List Item` | ⚠️ 尚未填寫 Description |
| List Item / State=Default | `cbd6b59ae87d57101bfed1fcec36ff2e8e44043c` | Variant，屬於 `List Item` | ⚠️ 尚未填寫 Description |
| List Item / State=Hover | `7bd17214a2231443e64c4882a6932c77efb5a98c` | Variant，屬於 `List Item` | ⚠️ 尚未填寫 Description |

### Logotypes（214）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| ActiveCmpign / Style=Color | `fcda8b162d2f342a960f294a7e137f6a8055e877` | Variant，屬於 `ActiveCmpign` | ⚠️ 尚未填寫 Description |
| ActiveCmpign / Style=Monochrome | `bde0d665fe10fcfdb9a1e0a24caeb3495b5e6244` | Variant，屬於 `ActiveCmpign` | ⚠️ 尚未填寫 Description |
| Adobe / Style=Color | `3abcb2fa5147ddbe4e160e75fc37a4800f694268` | Variant，屬於 `Adobe` | ⚠️ 尚未填寫 Description |
| Adobe / Style=Monochrome | `e34457fc60430e8f5a3f7edafe1b0edfbc7419f4` | Variant，屬於 `Adobe` | ⚠️ 尚未填寫 Description |
| Afterpy / Style=Color | `fe01e7ada5546dfcdb25ccd6d183b04ca7444aa8` | Variant，屬於 `Afterpy` | ⚠️ 尚未填寫 Description |
| Afterpy / Style=Monochrome | `e9d66e73765102ae98f727be3c6d49d4ed83b716` | Variant，屬於 `Afterpy` | ⚠️ 尚未填寫 Description |
| Airbnb / Style=Color | `56adcc8c0a7f38d4da9357fd0aa8317102de84e1` | Variant，屬於 `Airbnb` | ⚠️ 尚未填寫 Description |
| Airbnb / Style=Monochrome | `f9f0836d3ba43e8552a4b5dfe192f8afba926e41` | Variant，屬於 `Airbnb` | ⚠️ 尚未填寫 Description |
| Airtble / Style=Color | `b6caa996aca90270495fa7c7d7948a56c2228502` | Variant，屬於 `Airtble` | ⚠️ 尚未填寫 Description |
| Airtble / Style=Monochrome | `20c0d4b39d90edc1187ff16906ac894d17cc2e50` | Variant，屬於 `Airtble` | ⚠️ 尚未填寫 Description |
| Airtsker / Style=Color | `8831d643cfc83d0879cf90b3347e5d9b0ef0b949` | Variant，屬於 `Airtsker` | ⚠️ 尚未填寫 Description |
| Airtsker / Style=Monochrome | `83e3dcc9e3599df23054910e5f2dcd61235976f0` | Variant，屬於 `Airtsker` | ⚠️ 尚未填寫 Description |
| Airwllex / Style=Color | `6dfbd8598012858bbe8f73b3bd525a973c03d5db` | Variant，屬於 `Airwllex` | ⚠️ 尚未填寫 Description |
| Airwllex / Style=Monochrome | `9aa3d9352e0f985a2618d409f117f330dede5d14` | Variant，屬於 `Airwllex` | ⚠️ 尚未填寫 Description |
| Amazon / Style=Color | `e80b0a5a83f88a858c0781a143d2f4eeb4072e22` | Variant，屬於 `Amazon` | ⚠️ 尚未填寫 Description |
| Amazon / Style=Monochrome | `939b2b1dcf4c02455510a10670da00bb91cfd6ff` | Variant，屬於 `Amazon` | ⚠️ 尚未填寫 Description |
| Amplitude / Style=Color | `4c896864c3810a2cb9889c33d8449bf419a9efdc` | Variant，屬於 `Amplitude` | ⚠️ 尚未填寫 Description |
| Amplitude / Style=Monochrome | `b4767d9512b3796c821f37ace8fe2bfc26013f4d` | Variant，屬於 `Amplitude` | ⚠️ 尚未填寫 Description |
| Asana / Style=Color | `bc2f0ba3ea691b1dcc4178ed0328427f53d45a5a` | Variant，屬於 `Asana` | ⚠️ 尚未填寫 Description |
| Asana / Style=Monochrome | `68f856ffdd0e5253c971d3826e99d46972ff6ad4` | Variant，屬於 `Asana` | ⚠️ 尚未填寫 Description |
| Atlassian / Style=Color | `2abd5626e74687c38060c75d69d4f39505702e87` | Variant，屬於 `Atlassian` | ⚠️ 尚未填寫 Description |
| Atlassian / Style=Monochrome | `b605ddc0c772654cbf7792516133f5102345750c` | Variant，屬於 `Atlassian` | ⚠️ 尚未填寫 Description |
| Attentive / Style=Color | `e392092cf5be2a8bc0bc7a4bb952f409ff55c786` | Variant，屬於 `Attentive` | ⚠️ 尚未填寫 Description |
| Attentive / Style=Monochrome | `b66dc360a426c1e4cfc0a11237f5cf24538f231f` | Variant，屬於 `Attentive` | ⚠️ 尚未填寫 Description |
| Automttic / Style=Color | `61d6e7c96c8a56a12ddd944b0abc43b20cadb374` | Variant，屬於 `Automttic` | ⚠️ 尚未填寫 Description |
| Automttic / Style=Monochrome | `f5705d42600149a3dc6cbcfabf8c95e5fb7848a0` | Variant，屬於 `Automttic` | ⚠️ 尚未填寫 Description |
| Basecamp / Style=Color | `64bb0a5caecbab2cda42a2d7ceaa78f1ad3a1255` | Variant，屬於 `Basecamp` | ⚠️ 尚未填寫 Description |
| Basecamp / Style=Monochrome | `9f24d36924c123da0315d4b287e2161f20231dad` | Variant，屬於 `Basecamp` | ⚠️ 尚未填寫 Description |
| Booking.com / Style=Color | `31148fcc0bbf6fa7a6562729abe894e777bc23d1` | Variant，屬於 `Booking.com` | ⚠️ 尚未填寫 Description |
| Booking.com / Style=Monochrome | `4729130527596d93bbcbccea4d60e4ac2159b1d4` | Variant，屬於 `Booking.com` | ⚠️ 尚未填寫 Description |
| Braze / Style=Color | `1fe37b8f67b18159ea286a7182e8177a85c57a8b` | Variant，屬於 `Braze` | ⚠️ 尚未填寫 Description |
| Braze / Style=Monochrome | `303fa6c7ff1ac9e0f7c62ef9bc11c948e42fea70` | Variant，屬於 `Braze` | ⚠️ 尚未填寫 Description |
| BrowserStack / Style=Color | `0965e6589f1f7e71ed36e5c3c4bd0e9de2542c4a` | Variant，屬於 `BrowserStack` | ⚠️ 尚未填寫 Description |
| BrowserStack / Style=Monochrome | `2f9050db3bc5c6db1ce99e81581795fc190bb550` | Variant，屬於 `BrowserStack` | ⚠️ 尚未填寫 Description |
| Calendly / Style=Color | `cea9e3829c3dcb5a160aefa0692b0f256e62a82c` | Variant，屬於 `Calendly` | ⚠️ 尚未填寫 Description |
| Calendly / Style=Monochrome | `63914bf536cc669ad6f160c6929370493fcd6775` | Variant，屬於 `Calendly` | ⚠️ 尚未填寫 Description |
| Canva / Style=Color | `20f6b94bf81680b195e836986e0a46ae5e7a3b12` | Variant，屬於 `Canva` | ⚠️ 尚未填寫 Description |
| Canva / Style=Monochrome | `5d3df6eff305ee8a996075ece46df4ae8bafd386` | Variant，屬於 `Canva` | ⚠️ 尚未填寫 Description |
| Carta / Style=Color | `64fa353e63d1136515c6eca89cde2b2c1f921ab1` | Variant，屬於 `Carta` | ⚠️ 尚未填寫 Description |
| Carta / Style=Monochrome | `ae4fa0f336e5cf1e0d7bb00c73c58afbdf23319c` | Variant，屬於 `Carta` | ⚠️ 尚未填寫 Description |
| Classpass / Style=Color | `77e64505a0d4c1089265d09959dd9b3cbdfc218d` | Variant，屬於 `Classpass` | ⚠️ 尚未填寫 Description |
| Classpass / Style=Monochrome | `b8532537ad2a7d0d7bd6f590a25d95ba96952de2` | Variant，屬於 `Classpass` | ⚠️ 尚未填寫 Description |
| Clearbit / Style=Color | `c18cf922de9e74ab73df4a97a3aafb4b63ac644c` | Variant，屬於 `Clearbit` | ⚠️ 尚未填寫 Description |
| Clearbit / Style=Monochrome | `25f3ab6afe5572ded0f29d04a4384f0d86ebc223` | Variant，屬於 `Clearbit` | ⚠️ 尚未填寫 Description |
| Codecademy / Style=Color | `acaaf5a0cfbfa618effaf448b6789e483c81103b` | Variant，屬於 `Codecademy` | ⚠️ 尚未填寫 Description |
| Codecademy / Style=Monochrome | `2eda1c8f42e26011525e9b22677d902ebf7debf9` | Variant，屬於 `Codecademy` | ⚠️ 尚未填寫 Description |
| Coinbase / Style=Color | `349ebf7b6876907b781410f2067a2fc8c7f23aec` | Variant，屬於 `Coinbase` | ⚠️ 尚未填寫 Description |
| Coinbase / Style=Monochrome | `a5bfbeb905898b955b661358d331331661acab88` | Variant，屬於 `Coinbase` | ⚠️ 尚未填寫 Description |
| Contentful / Style=Color | `95dc74a002edb77b06f67c0a17e793bb027fb41e` | Variant，屬於 `Contentful` | ⚠️ 尚未填寫 Description |
| Contentful / Style=Monochrome | `a18ff9181ac400b53e28dcc8e31d535f767596bb` | Variant，屬於 `Contentful` | ⚠️ 尚未填寫 Description |
| Culture Amp / Style=Color | `54d98b9acfa5c7eb0a7c47ef3a652f54f43149ff` | Variant，屬於 `Culture Amp` | ⚠️ 尚未填寫 Description |
| Culture Amp / Style=Monochrome | `e500db8825f145ca941294b9ea97c98e0bf6ed9b` | Variant，屬於 `Culture Amp` | ⚠️ 尚未填寫 Description |
| Customer.io / Style=Color | `76b8deaecff471fed54547b41cf0d7fd1b5c6292` | Variant，屬於 `Customer.io` | ⚠️ 尚未填寫 Description |
| Customer.io / Style=Monochrome | `1e0a80e62bb7ee12a7571291f789da9a456ce875` | Variant，屬於 `Customer.io` | ⚠️ 尚未填寫 Description |
| Databricks / Style=Color | `4fd73441559035b409c0c935288ae72e8789cda3` | Variant，屬於 `Databricks` | ⚠️ 尚未填寫 Description |
| Databricks / Style=Monochrome | `60894faf9c0ad9e0ae5f89112da8b25a2fafcc31` | Variant，屬於 `Databricks` | ⚠️ 尚未填寫 Description |
| Descript / Style=Color | `7736d55b59edccc8f972b20f8eb7ca724bc8871e` | Variant，屬於 `Descript` | ⚠️ 尚未填寫 Description |
| Descript / Style=Monochrome | `a278747e891f8dc1acb442d52d21f74e0b9bf032` | Variant，屬於 `Descript` | ⚠️ 尚未填寫 Description |
| Discord / Style=Color | `4deabe1bc24e29e7c2f50fcb83c7019a82a71963` | Variant，屬於 `Discord` | ⚠️ 尚未填寫 Description |
| Discord / Style=Monochrome | `a6a2cbd59e4e3d38fe88cb7f712cd42b6c6dc9c6` | Variant，屬於 `Discord` | ⚠️ 尚未填寫 Description |
| Docker / Style=Color | `84f890e509d187b812a5ac0ce9152b1a0dc8a686` | Variant，屬於 `Docker` | ⚠️ 尚未填寫 Description |
| Docker / Style=Monochrome | `d41410d7bf95046e4a6479de67d582196964bc5e` | Variant，屬於 `Docker` | ⚠️ 尚未填寫 Description |
| Docusign / Style=Color | `626a4ebbff2bcc8ee34f5702480529abe47640fc` | Variant，屬於 `Docusign` | ⚠️ 尚未填寫 Description |
| Docusign / Style=Monochrome | `8531ca930cc8bc3e44f55faf5b445e7e7178d7b2` | Variant，屬於 `Docusign` | ⚠️ 尚未填寫 Description |
| DoorDash / Style=Color | `c6c7f8b5a5820ebab6625222f84aad29e4bbb618` | Variant，屬於 `DoorDash` | ⚠️ 尚未填寫 Description |
| DoorDash / Style=Monochrome | `a28cbf6cb5accab838d21f0530054fbe5bbc3919` | Variant，屬於 `DoorDash` | ⚠️ 尚未填寫 Description |
| Dribbble / Style=Color | `b2ca1155ea7bc402ad8e57c0f8a1fd50334fe095` | Variant，屬於 `Dribbble` | ⚠️ 尚未填寫 Description |
| Dribbble / Style=Monochrome | `be666f23b4bce1fda1920f51005f60320e9c3883` | Variant，屬於 `Dribbble` | ⚠️ 尚未填寫 Description |
| Drips / Style=Color | `ba052764fd8035493dbb0e87cebb173e795c6dbc` | Variant，屬於 `Drips` | ⚠️ 尚未填寫 Description |
| Drips / Style=Monochrome | `7ad600653b224e2cdb4d9cf84ff83c984d8e5972` | Variant，屬於 `Drips` | ⚠️ 尚未填寫 Description |
| Dropbox / Style=Color | `daf31423c20f9e4056d589e96fabad25610f37cd` | Variant，屬於 `Dropbox` | ⚠️ 尚未填寫 Description |
| Dropbox / Style=Monochrome | `b14525138872eef945fbc90bc0e21f7de6c5deda` | Variant，屬於 `Dropbox` | ⚠️ 尚未填寫 Description |
| Elastic / Style=Color | `4fc391435f6d58c608ccbfebeafea49583e7e03a` | Variant，屬於 `Elastic` | ⚠️ 尚未填寫 Description |
| Elastic / Style=Monochrome | `562d844470b18e717c1d347043e0ae8dadb5d924` | Variant，屬於 `Elastic` | ⚠️ 尚未填寫 Description |
| Evernote / Style=Color | `2d4f98a544565966cc2136355f5c6b9021fb2f8f` | Variant，屬於 `Evernote` | ⚠️ 尚未填寫 Description |
| Evernote / Style=Monochrome | `5a15f0b7eebe3dfa906cc0b7497efba4600f317d` | Variant，屬於 `Evernote` | ⚠️ 尚未填寫 Description |
| Figma / Style=Color | `050ddc0eb0c233d1f4f8d3e6744ccfbb6f89272f` | Variant，屬於 `Figma` | ⚠️ 尚未填寫 Description |
| Figma / Style=Monochrome | `36094a69d658bd8d710527d359db70575ef7354c` | Variant，屬於 `Figma` | ⚠️ 尚未填寫 Description |
| Fivetran / Style=Color | `065c507ec83f9cc25180259060041d642b56df80` | Variant，屬於 `Fivetran` | ⚠️ 尚未填寫 Description |
| Fivetran / Style=Monochrome | `b2e50b701bb09cd5047ca1bc01338dbea31f2f65` | Variant，屬於 `Fivetran` | ⚠️ 尚未填寫 Description |
| Framer / Style=Color | `c4c46b2f3f65823d4b003371f0b0527cf4df7c25` | Variant，屬於 `Framer` | ⚠️ 尚未填寫 Description |
| Framer / Style=Monochrome | `9e6ee714e049a68dbceeb3ba3ecdf8c0f950bc7a` | Variant，屬於 `Framer` | ⚠️ 尚未填寫 Description |
| Freshworks / Style=Color | `16aafa93818428f939c646495c0847128d02a992` | Variant，屬於 `Freshworks` | ⚠️ 尚未填寫 Description |
| Freshworks / Style=Monochrome | `47593551598d0e573cc94690e22154a87b2dbbd5` | Variant，屬於 `Freshworks` | ⚠️ 尚未填寫 Description |
| Ghost / Style=Color | `4ca3bcde918bf3244d2c7e3d6625c0f3cb323766` | Variant，屬於 `Ghost` | ⚠️ 尚未填寫 Description |
| Ghost / Style=Monochrome | `e7effd8d7a8c3ff9677bbbd9f599fce8555a6c2a` | Variant，屬於 `Ghost` | ⚠️ 尚未填寫 Description |
| GitHub / Style=Color | `068e9069379a9169704d5b846847a8b6a77a5f0c` | Variant，屬於 `GitHub` | ⚠️ 尚未填寫 Description |
| GitHub / Style=Monochrome | `f8f3f8f9bd86d701ae6a654f5d7a506f4289026e` | Variant，屬於 `GitHub` | ⚠️ 尚未填寫 Description |
| Gitlab / Style=Color | `1369a08571b530dd94192c1c9ddf28bc15fed28d` | Variant，屬於 `Gitlab` | ⚠️ 尚未填寫 Description |
| Gitlab / Style=Monochrome | `069fdb537b59752e9575d2fd3a0c3c46b7f710c9` | Variant，屬於 `Gitlab` | ⚠️ 尚未填寫 Description |
| Gong / Style=Color | `47554932eb714a19462dda727fa88b236a9d5f42` | Variant，屬於 `Gong` | ⚠️ 尚未填寫 Description |
| Gong / Style=Monochrome | `bbe0dec3479db4f044a9539aca62357233ae5ca2` | Variant，屬於 `Gong` | ⚠️ 尚未填寫 Description |
| Google / Style=Color | `8e9fd54589d4d378ceaf8c0feaf7a0f57e7ad3b8` | Variant，屬於 `Google` | ⚠️ 尚未填寫 Description |
| Google / Style=Monochrome | `32744364eca51396c3057d802b51ab40c2c69be2` | Variant，屬於 `Google` | ⚠️ 尚未填寫 Description |
| Grammarly / Style=Color | `01a21a4490b51ba86678e2051025c253bfc0f8af` | Variant，屬於 `Grammarly` | ⚠️ 尚未填寫 Description |
| Grammarly / Style=Monochrome | `249fe366c87f36e5c0e41a57b1610198a9d06b0e` | Variant，屬於 `Grammarly` | ⚠️ 尚未填寫 Description |
| Gumroad / Style=Color | `5945f5adc7e8a91577f73b7a73c39044e1fa7571` | Variant，屬於 `Gumroad` | ⚠️ 尚未填寫 Description |
| Gumroad / Style=Monochrome | `1979b3e19547e79806d013980dd785653fbefaa8` | Variant，屬於 `Gumroad` | ⚠️ 尚未填寫 Description |
| Gusto / Style=Color | `b5a31e27869fae003e26fc9b3f907275d1c19a34` | Variant，屬於 `Gusto` | ⚠️ 尚未填寫 Description |
| Gusto / Style=Monochrome | `9f43276dba48f94c6cf1a265aa093797bda8de53` | Variant，屬於 `Gusto` | ⚠️ 尚未填寫 Description |
| HashiCorp / Style=Color | `6a2f9a2eaff28e12069b815997f3adf2497077b5` | Variant，屬於 `HashiCorp` | ⚠️ 尚未填寫 Description |
| HashiCorp / Style=Monochrome | `022b968f20b96219b5b9b8bd22224badc9d68906` | Variant，屬於 `HashiCorp` | ⚠️ 尚未填寫 Description |
| Hellosign / Style=Color | `72b2b9ed29b32ba896babd18dfb7f0d720775226` | Variant，屬於 `Hellosign` | ⚠️ 尚未填寫 Description |
| Hellosign / Style=Monochrome | `12295b83dfaf0dfcfbcfa1cfb5e17efb4c74738f` | Variant，屬於 `Hellosign` | ⚠️ 尚未填寫 Description |
| Hopin / Style=Color | `cdb78a3a1df98f97be7f9704577bc73b1e94212d` | Variant，屬於 `Hopin` | ⚠️ 尚未填寫 Description |
| Hopin / Style=Monochrome | `c866df67d2838cbb9b8767eac3a9dbf4b3721d11` | Variant，屬於 `Hopin` | ⚠️ 尚未填寫 Description |
| Hotjar / Style=Color | `7372b162a6aeee1872f14ee3348adefe034b4844` | Variant，屬於 `Hotjar` | ⚠️ 尚未填寫 Description |
| Hotjar / Style=Monochrome | `f34053fe29def5251a87e0f5259bc5587d50b8d7` | Variant，屬於 `Hotjar` | ⚠️ 尚未填寫 Description |
| Hubspot / Style=Color | `cd13fac709d375ca337347cb11877212a2ba80d7` | Variant，屬於 `Hubspot` | ⚠️ 尚未填寫 Description |
| Hubspot / Style=Monochrome | `800a1e776149111c9236effa9c36b214f921d0ec` | Variant，屬於 `Hubspot` | ⚠️ 尚未填寫 Description |
| Instagram / Style=Color | `7e451250ac4c67f65f8092c6c10af6865d70dca9` | Variant，屬於 `Instagram` | ⚠️ 尚未填寫 Description |
| Instagram / Style=Monochrome | `cf61cd797b7149a27ae2df647542930941fc1476` | Variant，屬於 `Instagram` | ⚠️ 尚未填寫 Description |
| Intercom / Style=Color | `adf42b9615e06f4f54bea43a2d7e69b58e0400cb` | Variant，屬於 `Intercom` | ⚠️ 尚未填寫 Description |
| Intercom / Style=Monochrome | `9b7e2586507e190ca5a0f5a19b51582f9765e1f2` | Variant，屬於 `Intercom` | ⚠️ 尚未填寫 Description |
| InVision / Style=Color | `b8163049e1e3dc8c4745e887aacc8a9c19144f36` | Variant，屬於 `InVision` | ⚠️ 尚未填寫 Description |
| InVision / Style=Monochrome | `1fe5c8a6d1ed2b031c644270cb2e053abb9a6ac8` | Variant，屬於 `InVision` | ⚠️ 尚未填寫 Description |
| Lattice / Style=Color | `bc1081966fe99fca0b00a2d3878262a88b142eb7` | Variant，屬於 `Lattice` | ⚠️ 尚未填寫 Description |
| Lattice / Style=Monochrome | `379a7b5e51a14a5839e99f941e4aa9a1c260f3f0` | Variant，屬於 `Lattice` | ⚠️ 尚未填寫 Description |
| LaunchDarkly / Style=Color | `f87c0e788d59bf2c46a453a66aeb2a93493ccb75` | Variant，屬於 `LaunchDarkly` | ⚠️ 尚未填寫 Description |
| LaunchDarkly / Style=Monochrome | `0b504a0197c89de2cebc3ee6f03499251f16d82d` | Variant，屬於 `LaunchDarkly` | ⚠️ 尚未填寫 Description |
| Linear / Style=Color | `3f70e975cb50213cd265573a35180236891a49e9` | Variant，屬於 `Linear` | ⚠️ 尚未填寫 Description |
| Linear / Style=Monochrome | `c8f7c605831b740d358aab63def7bf15db5b2086` | Variant，屬於 `Linear` | ⚠️ 尚未填寫 Description |
| Loom / Style=Color | `88e6a14e39e4dca1e4dc09f7f7cbd84ad041c0e9` | Variant，屬於 `Loom` | ⚠️ 尚未填寫 Description |
| Loom / Style=Monochrome | `cefc13a5eb0bcc450a12b8f4b3853b52560dced0` | Variant，屬於 `Loom` | ⚠️ 尚未填寫 Description |
| Mailchimp / Style=Color | `b9824a639c7c67fb74de73710002a10bb6812a69` | Variant，屬於 `Mailchimp` | ⚠️ 尚未填寫 Description |
| Mailchimp / Style=Monochrome | `2c5fd1296b39416b1fb3e876beade4a79053ac25` | Variant，屬於 `Mailchimp` | ⚠️ 尚未填寫 Description |
| Maze / Style=Color | `1a8cd9f30496c3521636783ae26facb90b3a9625` | Variant，屬於 `Maze` | ⚠️ 尚未填寫 Description |
| Maze / Style=Monochrome | `9724417c41acac5c65ee91534844a9d4cc046142` | Variant，屬於 `Maze` | ⚠️ 尚未填寫 Description |
| Medium / Style=Color | `bbc1ee8bd61fea51b2d357634061a54ca00b42ae` | Variant，屬於 `Medium` | ⚠️ 尚未填寫 Description |
| Medium / Style=Monochrome | `c69b01837909a67a7e49074eb16efc6b881585cd` | Variant，屬於 `Medium` | ⚠️ 尚未填寫 Description |
| Microsoft / Style=Color | `373a2705312e5c10870b67531814fb332b6229e2` | Variant，屬於 `Microsoft` | ⚠️ 尚未填寫 Description |
| Microsoft / Style=Monochrome | `3a64f2f9de42979f33ace954310d3ad42bd737e2` | Variant，屬於 `Microsoft` | ⚠️ 尚未填寫 Description |
| Miro / Style=Color | `4120045eda212493dca7dddac3fa03e46384a597` | Variant，屬於 `Miro` | ⚠️ 尚未填寫 Description |
| Miro / Style=Monochrome | `8d40e6be18787ccaf2fb69dd70f51c3509c9aef7` | Variant，屬於 `Miro` | ⚠️ 尚未填寫 Description |
| Monday.com / Style=Color | `d7a4079003c06eed77448b4638215331f60e9e6b` | Variant，屬於 `Monday.com` | ⚠️ 尚未填寫 Description |
| Monday.com / Style=Monochrome | `e102e2cc6f10dc2fe5f71f93acbb1e0756ce1db1` | Variant，屬於 `Monday.com` | ⚠️ 尚未填寫 Description |
| Monzo / Style=Color | `c7f67e1080887f469235ce3a6be7b4c03eb53565` | Variant，屬於 `Monzo` | ⚠️ 尚未填寫 Description |
| Monzo / Style=Monochrome | `20cf5293dbe8a98a66129615450d8cb591d98858` | Variant，屬於 `Monzo` | ⚠️ 尚未填寫 Description |
| Netflix / Style=Color | `f9746ee6b44d8fdb6ff356239dc432c3e599d151` | Variant，屬於 `Netflix` | ⚠️ 尚未填寫 Description |
| Netflix / Style=Monochrome | `fc980dc57d6ff3ed7ce6e7f045d1ab3452bda22f` | Variant，屬於 `Netflix` | ⚠️ 尚未填寫 Description |
| Notion / Style=Color | `49d15da950b3831674d787f214d51b917cb1feab` | Variant，屬於 `Notion` | ⚠️ 尚未填寫 Description |
| Notion / Style=Monochrome | `81e730c11625a0557f7ccf8f781e04c6ab446acd` | Variant，屬於 `Notion` | ⚠️ 尚未填寫 Description |
| Opendoor / Style=Color | `befd9f0623feda559b0bf9d4d1f8b654fecb1298` | Variant，屬於 `Opendoor` | ⚠️ 尚未填寫 Description |
| Opendoor / Style=Monochrome | `2be2e055ef808fee8cb7f032e0281900bfabfec9` | Variant，屬於 `Opendoor` | ⚠️ 尚未填寫 Description |
| Outreach / Style=Color | `b878a29d4e19fd0c78bfb8e48cf06f24bd38a31a` | Variant，屬於 `Outreach` | ⚠️ 尚未填寫 Description |
| Outreach / Style=Monochrome | `361a2a60129b98db8263360b3e1381936c64180b` | Variant，屬於 `Outreach` | ⚠️ 尚未填寫 Description |
| PayPal / Style=Color | `5199416a8510f7721a82eee40bbcbe943922daf4` | Variant，屬於 `PayPal` | ⚠️ 尚未填寫 Description |
| PayPal / Style=Monochrome | `362738d3392b8d7da4878aa92ff0f11136146217` | Variant，屬於 `PayPal` | ⚠️ 尚未填寫 Description |
| Pendo / Style=Color | `74075cbb85558c55b462755a892eb12b3d042ad1` | Variant，屬於 `Pendo` | ⚠️ 尚未填寫 Description |
| Pendo / Style=Monochrome | `11f1b01ebb638335129f0d248311319bdfde364f` | Variant，屬於 `Pendo` | ⚠️ 尚未填寫 Description |
| Pipedrive / Style=Color | `37011d5650c51beacc1d009ae76fc9a53f4c7aeb` | Variant，屬於 `Pipedrive` | ⚠️ 尚未填寫 Description |
| Pipedrive / Style=Monochrome | `09dc01a6321e5e312a42b8469558e9870e2e8f28` | Variant，屬於 `Pipedrive` | ⚠️ 尚未填寫 Description |
| Plaid / Style=Color | `eb97784ea9d194a9a134bf0130c6b23b0004b6af` | Variant，屬於 `Plaid` | ⚠️ 尚未填寫 Description |
| Plaid / Style=Monochrome | `a51ab77905ee95f664e1c62e07b1b74cc8f02dfb` | Variant，屬於 `Plaid` | ⚠️ 尚未填寫 Description |
| Postman / Style=Color | `f4370bb16bc590e25f6a3312a3b5b33789943fe1` | Variant，屬於 `Postman` | ⚠️ 尚未填寫 Description |
| Postman / Style=Monochrome | `b5d1ee5f9552f8afb5f94edc093bc3c74fbae741` | Variant，屬於 `Postman` | ⚠️ 尚未填寫 Description |
| Productboard / Style=Color | `9e098f2b13aa08895bf3f17ca0609ae53c201020` | Variant，屬於 `Productboard` | ⚠️ 尚未填寫 Description |
| Productboard / Style=Monochrome | `5f88b64f2609ea4a4d17f4065d00c5c0e8587a80` | Variant，屬於 `Productboard` | ⚠️ 尚未填寫 Description |
| Razorpay / Style=Color | `b658be400bfa1d137d53c7bb9c2b64ce07cc2b63` | Variant，屬於 `Razorpay` | ⚠️ 尚未填寫 Description |
| Razorpay / Style=Monochrome | `e4a206df218c2d6328ffea3fa3b976917b09d580` | Variant，屬於 `Razorpay` | ⚠️ 尚未填寫 Description |
| Rippling / Style=Color | `b67a63b52c275c202e804b6537a95b54da24532d` | Variant，屬於 `Rippling` | ⚠️ 尚未填寫 Description |
| Rippling / Style=Monochrome | `22bf9c5fae98c9dd352068f6983824bc505a7216` | Variant，屬於 `Rippling` | ⚠️ 尚未填寫 Description |
| Segment / Style=Color | `f372de923edd234f5d3d5a0101dfcbce21392cc1` | Variant，屬於 `Segment` | ⚠️ 尚未填寫 Description |
| Segment / Style=Monochrome | `a0773776f62af869ab27635c696e3862e587ffa0` | Variant，屬於 `Segment` | ⚠️ 尚未填寫 Description |
| Shopify / Style=Color | `d94601398b866abeb9361af004502917ea505508` | Variant，屬於 `Shopify` | ⚠️ 尚未填寫 Description |
| Shopify / Style=Monochrome | `9dd87b0b7c0d8410ac947db24e4882acad813bc2` | Variant，屬於 `Shopify` | ⚠️ 尚未填寫 Description |
| Slack / Style=Color | `9f68ea9c91ef685b0a679918786e82c976279c8b` | Variant，屬於 `Slack` | ⚠️ 尚未填寫 Description |
| Slack / Style=Monochrome | `327ec1fa4027d5a9294438ca6f70a9b9d592b09c` | Variant，屬於 `Slack` | ⚠️ 尚未填寫 Description |
| Sonos / Style=Color | `301aa02942b629d8b567c18eb75bd6abd1079857` | Variant，屬於 `Sonos` | ⚠️ 尚未填寫 Description |
| Sonos / Style=Monochrome | `1b74f596c1505866ba6106289130f7e1c548a3e3` | Variant，屬於 `Sonos` | ⚠️ 尚未填寫 Description |
| SpaceX / Style=Color | `10c5add0546849b0fe31b447ccd824e05fbf957e` | Variant，屬於 `SpaceX` | ⚠️ 尚未填寫 Description |
| SpaceX / Style=Monochrome | `fc08b34e03de0df044a9b09ea3c201c80675ee98` | Variant，屬於 `SpaceX` | ⚠️ 尚未填寫 Description |
| Splunk / Style=Color | `4be2d7b7d9f44dd9847396c0a3c2394632548f4a` | Variant，屬於 `Splunk` | ⚠️ 尚未填寫 Description |
| Splunk / Style=Monochrome | `ec621e63c60c66f6e682f499567c171255898e1e` | Variant，屬於 `Splunk` | ⚠️ 尚未填寫 Description |
| Spotify / Style=Color | `ade70013e2c5da73ba0b7834c1c03a56116fce2a` | Variant，屬於 `Spotify` | ⚠️ 尚未填寫 Description |
| Spotify / Style=Monochrome | `33ac6ee24eda1c21278159f3c97879984954b5f6` | Variant，屬於 `Spotify` | ⚠️ 尚未填寫 Description |
| Square / Style=Color | `4bbe8dc8bcdccb778dbb95a97c133d7217702575` | Variant，屬於 `Square` | ⚠️ 尚未填寫 Description |
| Square / Style=Monochrome | `dd7289232b077d059ea22b687e3523a3724193f5` | Variant，屬於 `Square` | ⚠️ 尚未填寫 Description |
| Squarespace / Style=Color | `fd0d0939fe090b14f5c5754c5209ae323447a91b` | Variant，屬於 `Squarespace` | ⚠️ 尚未填寫 Description |
| Squarespace / Style=Monochrome | `949500942f62e1a9fb8a324f5793299c856f95aa` | Variant，屬於 `Squarespace` | ⚠️ 尚未填寫 Description |
| Stripe / Style=Color | `51685b70451ee5fa3efb06124a2e8e75136ea169` | Variant，屬於 `Stripe` | ⚠️ 尚未填寫 Description |
| Stripe / Style=Monochrome | `34a6a06985d463188b418d4b8c6ebf217ae6e591` | Variant，屬於 `Stripe` | ⚠️ 尚未填寫 Description |
| Tesla / Style=Color | `8496783995e2eeaf91d3f5240d5b64e06ecc1611` | Variant，屬於 `Tesla` | ⚠️ 尚未填寫 Description |
| Tesla / Style=Monochrome | `200eca8bc1d1d4ce743c1c8ccb82c111ab1d3afd` | Variant，屬於 `Tesla` | ⚠️ 尚未填寫 Description |
| Tinder / Style=Color | `f784616eb6d1b3abc55da35dde3bb8aff122d58d` | Variant，屬於 `Tinder` | ⚠️ 尚未填寫 Description |
| Tinder / Style=Monochrome | `6f23029004c700e6b04df7466dffeaf440376ee4` | Variant，屬於 `Tinder` | ⚠️ 尚未填寫 Description |
| Toggle / Style=Color | `657246e4ebbc3c4c3b68738baaa9db074a3fb88f` | Variant，屬於 `Toggle` | ⚠️ 尚未填寫 Description |
| Toggle / Style=Monochrome | `aa75e86f77284a871b92963afc6c6485d46aecc3` | Variant，屬於 `Toggle` | ⚠️ 尚未填寫 Description |
| Treehouse / Style=Color | `4ecba84719c720b65c8c3deb471e58681db6b5d6` | Variant，屬於 `Treehouse` | ⚠️ 尚未填寫 Description |
| Treehouse / Style=Monochrome | `f7ff39d20aa4ca7f32911bd37311b661d82d2f60` | Variant，屬於 `Treehouse` | ⚠️ 尚未填寫 Description |
| Trello / Style=Color | `a4474b0ba904d2629a2e5ada83cea7be7cbad7f5` | Variant，屬於 `Trello` | ⚠️ 尚未填寫 Description |
| Trello / Style=Monochrome | `eefab4b0d18b863544552deda736547ba930f745` | Variant，屬於 `Trello` | ⚠️ 尚未填寫 Description |
| Trustpilot / Style=Color | `e56ebd03ec745f6a2aab88ff6ec0ea6b49b6766b` | Variant，屬於 `Trustpilot` | ⚠️ 尚未填寫 Description |
| Trustpilot / Style=Monochrome | `00c8eeba4a12a2a514095ea790631544583152ce` | Variant，屬於 `Trustpilot` | ⚠️ 尚未填寫 Description |
| Twitch / Style=Color | `70ef38802f8affac29e9649c6756428afd2b4c07` | Variant，屬於 `Twitch` | ⚠️ 尚未填寫 Description |
| Twitch / Style=Monochrome | `6ce779e4f720c955b99869fad6038a6b74b4ab33` | Variant，屬於 `Twitch` | ⚠️ 尚未填寫 Description |
| Uber / Style=Color | `051d6860c691b62f0904bef260c11bc49602603c` | Variant，屬於 `Uber` | ⚠️ 尚未填寫 Description |
| Uber / Style=Monochrome | `420a5ee92b22ae73bdc4be4af83812234d50889d` | Variant，屬於 `Uber` | ⚠️ 尚未填寫 Description |
| Upwork / Style=Color | `eb312369ceff8c0a6e818a11632c57229fbdabaa` | Variant，屬於 `Upwork` | ⚠️ 尚未填寫 Description |
| Upwork / Style=Monochrome | `684ff6593ffbf12178c99547b889d49962bf37f6` | Variant，屬於 `Upwork` | ⚠️ 尚未填寫 Description |
| Wealthsimple / Style=Color | `6bb297ace6facbf66857f9f14766e4bcad7ebda0` | Variant，屬於 `Wealthsimple` | ⚠️ 尚未填寫 Description |
| Wealthsimple / Style=Monochrome | `ce952ceb66eea2edbaa537c86aff97d069d7fcfd` | Variant，屬於 `Wealthsimple` | ⚠️ 尚未填寫 Description |
| Webflow / Style=Color | `66ceb34e6c2d448c906592ff3dd5d9f4b8e83992` | Variant，屬於 `Webflow` | ⚠️ 尚未填寫 Description |
| Webflow / Style=Monochrome | `a4f1fe113a4cec0c20a4c97b96f43a4d09fa2588` | Variant，屬於 `Webflow` | ⚠️ 尚未填寫 Description |
| Whatsapp / Style=Color | `48ea900b612e7c509268261171eb88fce192578f` | Variant，屬於 `Whatsapp` | ⚠️ 尚未填寫 Description |
| Whatsapp / Style=Monochrome | `4f4da3097bbf438134a3c5ea2defe139e42620ce` | Variant，屬於 `Whatsapp` | ⚠️ 尚未填寫 Description |
| Xero / Style=Color | `3aeaa8f016d9eba01efd5aef575f0687f0f2edca` | Variant，屬於 `Xero` | ⚠️ 尚未填寫 Description |
| Xero / Style=Monochrome | `6abfdc809f190b365b31f9504b4fab2872a0fda0` | Variant，屬於 `Xero` | ⚠️ 尚未填寫 Description |
| YouTube / Style=Color | `7d46c66b831fae0a3f6fd8f180cf52b67527c177` | Variant，屬於 `YouTube` | ⚠️ 尚未填寫 Description |
| YouTube / Style=Monochrome | `8e15c8f55c253d1b6a2546272138598ec1b052f0` | Variant，屬於 `YouTube` | ⚠️ 尚未填寫 Description |
| Zapier / Style=Color | `73abf5b84ff4ec4732ae9a5b3b45c27a477ff67a` | Variant，屬於 `Zapier` | ⚠️ 尚未填寫 Description |
| Zapier / Style=Monochrome | `cea345702b299c46eeb346c76456546c0a062a31` | Variant，屬於 `Zapier` | ⚠️ 尚未填寫 Description |
| Zoom / Style=Color | `6ef210320dc89f188d5a94e46dca6d38552b53c2` | Variant，屬於 `Zoom` | ⚠️ 尚未填寫 Description |
| Zoom / Style=Monochrome | `1b87a4dbc8b0db8d0c910e0cfc66645d5435115a` | Variant，屬於 `Zoom` | ⚠️ 尚未填寫 Description |

### Misc（112）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Dot / Style=Amber | `5151fec1c44bd52c087cb6951e69615352d6c8c7` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Amber 50 | `25ec3ff4038067ee8bdefb3a8f00b189ec9107f6` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Black | `760dcc2a8b161e3700210344ef15cc51da0abc5e` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Blue | `c9bb1a1f226cb46f553b3dfb60e6cbc3516fbc82` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Blue 50 | `4d0e55a707e0a57ff22763c44baaa02fc7b5b277` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Cyan | `3d7472ec1ec4716d7e173bdad760fe0111f26e0a` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Cyan 50 | `e762e77ff79b9e49bdb53637f8f2387b1da599f7` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Emerald | `c07bf84c9c310452b956b113a9fa88f1d409c29b` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Emerald 50 | `ca5376a80be3a063422d8b5f58fbc77eced969de` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Error | `042aaefd9f27ec5cf4b273f28513f4d5e45b0cff` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Error 50 | `84d6e3a31c7fb026a5a354d82c3fe01e2fdf312e` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Fuchsia | `3059b2f7a0045368383654a393f67cc9a7ca3d84` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Fuchsia 50 | `35302fff4f80f9339cc48f6312f4a89834fb4683` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Gray 200 | `0e1c382ebcf47683bc537ed105db903d7980e6c7` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Green | `222b1d89641c04166b2f1d5710b6a53a5bb20aa2` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Green 50 | `9b70ff39a63927d896af146932841a1556af81a4` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Indigo | `a51a244ba4e85bdcb39c6fb507c047fb2a93a84c` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Indigo 50 | `9ee763d96f0246d764bd8fd5c22630ec2076ce25` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Info | `492630994f5115e224d4d2b01969fde2b06851bb` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Info 50 | `f15c08427f803125063ea69a40b41a6acdf1d287` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Lime | `52ba3d62f9981246e1cad88d0f0be8a51abbf055` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Lime 50 | `ce709ae65ca564eca6bb05e0a832a22d9e5d0715` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Orange | `c1c3a79129b11bb6f0c0b82ec78568e014cfcdf5` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Orange 50 | `19043e4b17b3291dbdbf742534af103e3eb0206a` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Pink | `25fc6668311c3282919806a635262fa28092733e` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Pink 50 | `210c422f9385f2e44b27cb5543dc0a930b214d13` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Primary | `8c395f4f17e23660719fba7aeb7806aebccf7bb2` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Primary 50 | `4fbe20680fe259bb266e2347554ff1e4ccf7ec71` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Purple | `c067b0be2ffa923defbcd17117fc23de82621e2e` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Purple 50 | `2afbc0a36e123d0fa0c62f4b83a7917210a33224` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Red | `f5601320c9f15a14c1e2d6e2d7bd8da75890bfc9` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Red 50 | `290a480cb2ba4d322b35fb7584842d2e2c388cc9` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Rose | `f5b519dcd1758f9b9800d56984d177008082279f` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Rose 50 | `209ab3fbe108d4b39a2e5aab78d7052bb1331752` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Sky | `307aa869445049bb23324169fabd8e1f791ff1ba` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Sky 50 | `b2e61f1e338ea7de619f13332c301df78359fbac` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Succes | `b08570503886d8000400609bc6bb7776936eee89` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Success 50 | `a7c5c0260058803a9506674bf21136ef4c41be94` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Teal | `ae69ab05cd7cfd41bc7afc7ec44b6c99112a728b` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Teal 50 | `8321205c96b35b8cb57bda1bfabdfeead12edf84` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Violet | `ef9adcb424189c83a9fa8ce63d6809251edfb609` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Violet 50 | `f8fdc1c945bf4cec38a5cc48b982cb074e7703c1` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=White | `d4f5359ec2452e3247cb5598ee71252a42ec7110` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Yellow | `d254b7e91b3d11b90feceb7239f6da1529d37ee8` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Dot / Style=Yellow 50 | `3f395d580780756292382fb263dbd3676db41ce8` | Variant，屬於 `Dot` | ⚠️ 尚未填寫 Description |
| Map / Style=Color | `0b866691d4f916ae08f401283a37bddfadf83a0f` | Variant，屬於 `Map` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Horizontal, Size=120 | `0429f00d7c414e0ff81505fb0e822f31eb2596a7` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Horizontal, Size=160 | `1117e9eec7aa152174a626638c90cd48882ef438` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Horizontal, Size=256 | `242d6f79de74e56d53b622e81d585c7e03daf20a` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Horizontal, Size=512 | `c039ddc771aaa7b639e3ac219eecf3d5eb75efff` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Horizontal, Size=92 | `1d066d4e23cf9ac359ad627b170b2284af3cdf0f` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Vertical, Size=120 | `781333e86ebfef08a6fd244ce8999202446c0402` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Vertical, Size=160 | `561e16f3529470339d3deb4075b96e5fd18e9b5c` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Vertical, Size=256 | `d55a55752f8bf5e600c4b1487d69d8a24870e364` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Vertical, Size=32 | `04ec5e1074645d0b519aa8aa5bc8f1d04dadb5c2` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Vertical, Size=512 | `e6acc20aa871d585259c651ae6a3a2f41670f70f` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Vertical, Size=60 | `f944e90d8538e2441808ec838e5b3310da46a4fd` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Scroll / Type=Vertical, Size=92 | `e951e25cc1d916443931f674164b4abbe2fcee2c` | Variant，屬於 `Scroll` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=1, Style=Gray | `210f659d16ceae2eb9d95a7dd7430710ff3fdf52` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=1, Style=Green | `8647322aaa9fa4e0fc03e43793af2076013932fe` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=1, Style=Orange | `a226ac357e4eebdd48ed601f03c523fb2ee4ff5b` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=1, Style=Pink | `e8e959c341e43b768c5a374790252888be1e324e` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=1, Style=Primary | `a87fe77d8cf6877c7983d89072e6363996dc2783` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=1, Style=Purple | `a9e05e6fc53e09a213fad10cd3627e4f57ea1644` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=1, Style=Red | `2191ed93dfeb13582f46895fd22ed8a2f0bd75d7` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=1, Style=Sky | `0187d20a136a1a203387c01855d0025609885039` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=1, Style=Yellow | `cc8738916fb792e186ac395c52e92ff084da3590` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=2, Style=Gray | `e952e80755ca40c8726ed9bbc09b48c993a04d96` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=2, Style=Green | `5e7828fee1ddf13539a34570a8b599a8661d3ee9` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=2, Style=Orange | `037b938a9ea5e62b50beb472eeb92ff1c7aeda7d` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=2, Style=Pink | `3997deb905d4cc5039c9510ff1fdca4421fefe5a` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=2, Style=Primary | `ed8cb2dc5d06985d54163ddd4a61cf55a8d85e95` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=2, Style=Purple | `768235c8f4ce603fb49f6353a00676170a6dddc9` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=2, Style=Red | `9f9707d562ac92f7bfef582ca052023d0ae214eb` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=2, Style=Sky | `2374e17ab1728401e393a75833955bb98b5a829d` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=2, Style=Yellow | `55db42eaf9b30ead0f577fe722e03a370a5665a5` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=3, Style=Gray | `b126ebbf971f6467db9559d888ab46fd2424e832` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=3, Style=Green | `e31919d6655c21745cb352579df7e63aa30fb06b` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=3, Style=Orange | `ea362900432f406fa71f6ed458787792478f94b7` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=3, Style=Pink | `4babbe468f7407eda3c55e4ed052435c3b03a560` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=3, Style=Primary | `edb83ef76fcf35c42b7432e1b759055f48272fd3` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=3, Style=Purple | `e5337ce04f91bdf108647290f9ef8933f6293665` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=3, Style=Red | `1c660c28b8e65881c54f2adb24a973e4c332e98b` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=3, Style=Sky | `0581619412c083ef48053c90df5cbc35d785582a` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Border, Border=3, Style=Yellow | `b80a51951a8233307895ce2a56ba6801adf377b5` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=1, Style=Gray | `8efaecb2b9ed10cce4224b18deffce2320ba6148` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=1, Style=Green | `adb2fb7838aba250c4e574835b982bbb7a93edf8` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=1, Style=Orange | `7d89f5754b567c57634237fb0453d3dd942b3a80` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=1, Style=Pink | `68f3e3a5d9aeee187d538fb0d34d921f3354ad45` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=1, Style=Primary | `522a91ad778082c4824a68701a413c1d5d4c5d99` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=1, Style=Purple | `faa551e6bd17e1ce409f4445626619053b253a66` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=1, Style=Red | `6e0f83bb6b7c56fa587f503b3aa246ed4b45f2ec` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=1, Style=Sky | `157c4402f9987c73e27794b43e4062010ae5d273` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=1, Style=Yellow | `379df1409622b569695e5fb103734d4f97b16eea` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=2, Style=Gray | `711fd3ff7b094ef8908afa7a793223d33870cfc2` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=2, Style=Green | `6b09145eb0e0bba7a4ebdf080e7ce73577ed267e` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=2, Style=Orange | `a7dbf806ea6c2fcb377cda014c0684abed7d3d20` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=2, Style=Pink | `8bf320fd9c8eeebc4765e509e6b77174af809992` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=2, Style=Primary | `d9f3ca1686f8a671ef9179f3962efac72e4f6fdb` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=2, Style=Purple | `47254b98a0eadcb4da149d474f823ace19bc810d` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=2, Style=Red | `4d270e6a35f6c7b53c4618eb38777bcc4f7135a3` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=2, Style=Sky | `f35fefb2f27c9ee81ee37399c003fa9df1c9d4e6` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=2, Style=Yellow | `772be7fe61ee28358989a691b6f38d85213f6ef5` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=3, Style=Gray | `d4cea6a8251cfe90ff8980160d8c21c797f95ba6` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=3, Style=Green | `96a5bb7de169a9ab53c1ebb059ac40886bd6dd71` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=3, Style=Orange | `72b94f75e0081c1ce1abe5122cf59dc88792cd45` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=3, Style=Pink | `6e661f0f2b0aa9b1b292235ae382f68b6cfd9046` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=3, Style=Primary | `32c8ab64ec5745cf3ee84da35c47a77b5313fdd7` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=3, Style=Purple | `72e5a40d1b5d6009dd6d8fefa3beb60fd83fe52b` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=3, Style=Red | `54da5d73c64c9839dcae9b03ea454a5e65a6fc2c` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=3, Style=Sky | `2cb25c5ad86c54304825713bb50ede68412c80cc` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |
| Status / Type=Color Center, Border=3, Style=Yellow | `fda95d102031b129025794d3b8ba9aabdc004891` | Variant，屬於 `Status` | ⚠️ 尚未填寫 Description |

### Modal（1）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Modal / Type=Default | `3df98bc06d6c24af173d56e22ad6f1d24f239c62` | Variant，屬於 `Modal` | ⚠️ 尚未填寫 Description |

### Navigate--System backend（1）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| navigate / Property 1=Default | `60afe5d346c5b8a8732b27c9b3f09fef621c41eb` | Variant，屬於 `navigate` | ⚠️ 尚未填寫 Description |

### Pagination--System backend（2）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| pagination / Property 1=Default | `204ef6796e7ca7b0ef3ca5cfcca13b36996bb63e` | Variant，屬於 `pagination` | ⚠️ 尚未填寫 Description |
| pagination / Property 1=Small | `623162491439cc0268a2b42941dd9720794e734e` | Variant，屬於 `pagination` | ⚠️ 尚未填寫 Description |

### Progress（286）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Progress Circular / Size=Default, Style=Amber | `25269baa80ac1102b567f2f70e5f92d07c2a88c5` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=Green | `44ac2c9af8932a833fc7e99d768d35f47a60b826` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=Orange | `4b7ad75c25b0fabfe281b7f87032075c6b1f0dbb` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=Pink | `0f3342b0a61165ebcc87177494e2d6f8449ef645` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=Primary | `b069462b5dbb7e4c22f27fa02f1f8fb3e579bcd3` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=Purple | `bd869fbc1890e53acfab8a82d58bf8068fceeae2` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=Red | `e610caf5279d57681d7d62cfe2acb85b51dfaba8` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=Sky | `5b002b4e22e198a601abd6644b396ec62289ad10` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=Teal | `18f2cad2f2246a7552d4128b620ce7ddf02b8ac2` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=White | `271adb2b4f8271c8e17e8ef513dcb9a9a361c73a` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Default, Style=Yellow | `77246e5251a3e563a22d193dce6d153bdfdac03f` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Amber | `a60fafc46a55792de951fc2ecc832c86e1551231` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Green | `5f9caa9b3ce0ca5664de415512d57206a8213650` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Orange | `0282aec7c3be8e48c20fe373c3d82bcbad6668b0` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Pink | `2f7b39e4d1d77b8b023c5a7532b948cb31f9b2c5` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Primary | `5c3cb0aa32a58b8d424fda4e63be295f5a3b4f82` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Purple | `8d053f49bc75e4e635b4aaeb9a6caab89810fe6c` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Red | `0bc009f52a15d635520096034cb350aba692a629` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Sky | `543a21f1c2aa972e6e4a4813fabca6c162e0804f` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Teal | `3a11842e732aaad938068c2f6fb433c834007e63` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=White | `1d6867aa8cf9b922391469540a89ae7afde19a4b` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Extra Small, Style=Yellow | `4938329d8dbe3812ab7ff3be601685edb6c5f525` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Amber | `6f9ccf462626107370fee02afac8e063074ce42e` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Green | `b294ea21361d9d006da841ef08487fdce08bf7b7` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Orange | `27a7e87cd363a1a1f61c40115c02cc42379ff448` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Pink | `0e32793f926b27da068481c74176bee7c440b3af` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Primary | `d41264a7654fb34bea4d4f2dc1dc904c48f970b8` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Purple | `c6501f94eeecfcb6c42c822d05ffb2bd159ddd0d` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Red | `8eeb5d61d7056c5480bedb1c615cbf055a7642cf` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Sky | `07501cb9afbd9f9740cc229e9d4622287054799b` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Teal | `2cbeb2c1652640c3945de3ede53fefda7b6a7d90` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=White | `c682bb9cb45fc474eb11a92888f9b4a56c9b1843` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Large, Style=Yellow | `6331070da9de9873e386f14d782fceaf99bcbbfa` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Amber | `e25262394c311305ec1809289b2163bfb1fcd902` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Green | `f069e6a5935d82d2d23ac23d266498cf1af7a14f` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Orange | `fb870835195c5f538ae43497f0acf572396eaae4` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Pink | `5e22a82d95a8fc1a0e59fb537d54b686a03a2529` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Primary | `5738e931cdc56bb713f0d482a3afda0b41eb8c6f` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Purple | `78b1f0b3331b6c86c0e3ae8f0460c700ad5d11c3` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Red | `2a2e2e203668ce5a0d54799e4a26800d6cc4f8a9` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Sky | `b79a703c74e4fe9b49cc893ace8fc58d08c02e1c` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Teal | `a1422e6cbcda96b85d370accb2565fa5fd227663` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=White | `7a12cc1987fe72f0efef0d40e314ca318f656f7f` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Micro, Style=Yellow | `e0aeb9739591e7ce2c0ea88a72e57111dbbf3b41` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Amber | `412981d8877a307722ede1411f4cd9aa79e9364a` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Green | `01be2fee0d7797094bdb823183253ef85991c00c` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Orange | `21527c2487bf1c99c6b42553bd3b225673e84a1d` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Pink | `0f38dd9601a579ab3f0f4928b035d02e9ad29448` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Primary | `9a33fa364874dffb69817f5932072668401c5990` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Purple | `1215c85fe75a78cdae8231d824a100194384c865` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Red | `813e32d2cb57b92f0d7150b4f762c2aeafc2e43c` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Sky | `ecc4e48d6b5ae46b92e08f6f7e19d36cad1c62a5` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Teal | `e39690425cb7fbc66aa9968ba1126a3310f88963` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=White | `c908f278b99af386504bb30174b37b9b05a4afd7` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Circular / Size=Small, Style=Yellow | `cb65aca72a38ba5cfa41152fb7d5dc7e77ccd9d9` | Variant，屬於 `Progress Circular` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=0% | `9beeeef77e7f0d35201fc49005c631699bba7e2a` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=10% | `3664f4277ef562789559e59a31f099bd64a92fb2` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=100% | `9b9984915d19051b3e366eb6bb00bc05bf273d90` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=25% | `f913ff2791ec3aa6bb19b46cc47ca9589151eafe` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=3% | `bc89fd9255906b79d3c001c1c77c82ce42ddf16a` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=35% | `52f42cb7b1fb87e3d0f6a373e9e371a917bac8eb` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=5% | `e8b940320ae192769f40b8c0df704edcd58936aa` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=50% | `0c84635afe47413d60a9bc0af70a8b3e0da82e00` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=60% | `22df573bd448916d0d7f8bb8f0d06b82f8d1e866` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=75% | `1904bb0e3e09db4b2166e226540b6ae1f1850383` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Amber, Fill=90% | `0d2bbcd9a6a823c05b43122c6b0a6ccd8c2a4f6b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=0% | `e12e6e90a5b4b15763fac3ca919420e011c993cb` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=10% | `4efecaa3a08c155e247332614e76e6988307eac9` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=100% | `f8560652c2d19b41f23baa3f75eab85d87f44e17` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=25% | `ffae588dbf35597f06ab2df87bbb176226fee373` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=3% | `ae07490dc957b395c535f3e5fcd1d0d81a06b6d0` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=35% | `a091d3304226d8293d9de2eaa56ff5da555d0596` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=5% | `2097e9cf72dca8faef578a8b50af89428e26e369` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=50% | `1d4a4da79b8c740586106b3f80fd7fe1099dbe50` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=60% | `d70eabd77edbebaecb7bb3cdd3db4b14df73f496` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=75% | `cfeb21db3ec505a359de50130b864db7cf55592d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Green, Fill=90% | `9354d6872e505caa7c634f1d9ef2a1095dd9a151` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=0% | `81d70dfccafcfbadc034b57126c04f05586f7383` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=10% | `806f039d18e434db9e2d9c0f64812d94249ce9ce` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=100% | `de483e99bc6d2289dad04cfa9dea916147d560c7` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=25% | `827300182e736e57ead241d6c67191f3afaadc11` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=3% | `2f974da29d306b10c1dba0e926958283ede3a9c2` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=35% | `583217a268d1ac58ee118be3cf438c5635de58ba` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=5% | `6e43416327ed5fa14b4b44ce02edd5bffa5ed33e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=50% | `85e3141a7843ed30a5aaedd31f720d91fa70694d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=60% | `3468f0b73e178cba432b2f8aa1e7ccb5461c5f27` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=75% | `5b6e453d5a457d9a71bdcd573eeaf53bde97a2e1` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Orange, Fill=90% | `218112b5becb9b85cf0133f683fe1cf9eb170d72` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=0% | `0d1704c2ca00bc22141dc6991724a58c24162c10` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=10% | `397d6994be8d425ee7434b18fa2ae41087e6cc68` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=100% | `aa4d3642b93d46f1edde225b88eb811783b7069d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=25% | `49f8fc8935efe5ead9355779c4ac715b03da6858` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=3% | `1a7a50cee480217301f4cb208cbc259a2a07bf3d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=35% | `7a6fdb11b60466be566e2d96d58e892999262c12` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=5% | `9c482705eb704d48908156afa974a4e7d4a887dd` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=50% | `647d6635b27436189d3d8198529b3a389a500a00` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=60% | `7d111b6e0647ab523320d914d329ec8752e1012b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=75% | `0aae6d8950f99a27942eb48dc9cb40836fb2ee5b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Pink, Fill=90% | `e06b26bbb7a2055eca2f71dbd003561cfadd1bed` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=0% | `34273befea0faa4472b0bcd62bd45d8d9a77dd9e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=10% | `1abdde6b7b1f1ead550f4f2807687b952827644b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=100% | `918729a8a34317e7e56ce71f60a236ca2ba6cbf0` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=25% | `bb6379bf7137fa6cdf6ab81746a6ba9c766828b6` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=3% | `788266457e76cc6f18833cbba2cafd86c1eb8ce8` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=35% | `f05cc865359c81722c447c5c42027a680bde9131` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=5% | `5ab223f690e4543b263b81bf67ba9af39368e7d7` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=50% | `03e11ae184080561c1758fa34401f234596a00b9` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=60% | `2de0892ff5f8c22c3a9802bf8b450cfd36fa15dc` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=75% | `2d58f74c98637a2e84802d74205f63914f6d6a20` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Primary, Fill=90% | `d0bec8c864913360357686fb3abc77cefd09959b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=0% | `20adbd20d23035c07ef2686e5a406556ef758ad8` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=10% | `146b3cd9d15aa4e82fbe128db962cf7ed5699e50` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=100% | `147a9b1ccfa47edd58ad8bd5761cc21156b64b48` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=25% | `2a377651f1c150298cd18ac80d6670a1d4ad3444` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=3% | `5908ba0a540a31a858e33cd09a3cec622fdddc99` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=35% | `7865373cec825208f1338df36226873112589a10` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=5% | `d92a365b57e60631dd257a7ea12b1202ad49c791` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=50% | `b111d025288cc6f14b39f68bd59e2ffa03edf9d8` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=60% | `650dee7110f79893521ee4cf711e0346bfbdad63` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=75% | `965278960d54f0199559fd90b59f610496b238e7` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Purple, Fill=90% | `e6ea3de446048c645c3773959f1c021f33993dae` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=0% | `f188169e0e6bc7db54e289d4f0f884578e0ac34e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=10% | `8f1f2a1cbe350b94bb638a5a9412dd7d3d519799` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=100% | `c233cb84600eebf27cfc97b0f05cc9c308c18601` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=25% | `68441e0a6899c98779408c231a5d2ac56a2b9536` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=3% | `e3c851054448210fd36c8a421607d3da10ecd7c1` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=35% | `bd3fa023a0c3e5b17efa077556ebd078e6febf15` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=5% | `816cb086aca177e766c910f18c9525ff059b5707` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=50% | `810bd4241b33d508c29d9402ef61f2aae5aa09e1` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=60% | `44ddeae093a3199a5209324622250f835bb7f79e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=75% | `80e914c384edfe27a6d4d961382c9d5a1367031e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Red, Fill=90% | `661be945edbc10dad6f066f59aa6834183e932a9` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=0% | `7a337b61945e9a0febabb66589f737a2a451471e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=10% | `716cf8c49a7531d0ab438011de4fb9cac860c7a7` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=100% | `e27cd1d776b86280173a3a684c3bc3251144593d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=25% | `2e03524568cb3b77e2e85bdb9d1e52c00e1dc07e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=3% | `4ade22a5939f2569db7893b0b3226e8ed13a2bf3` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=35% | `09110e6c4bb9783639e225323fb1d4bd74d2f3d3` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=5% | `41efca10bc6a46aeb91fa71bd824d7dd68566c1b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=50% | `cf6931731611ed35d5d1d4a76e9b8c8ca5193f0c` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=60% | `928cdd18a847f298d3ade5a66cb32511c60b292f` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=75% | `99ef3ece1d76bad289a96b9d63f55458fa9c531e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Sky, Fill=90% | `af81a785f9df458f9d6cd174bb897e6a5d1e6778` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=0% | `93c3319b86958932dc130cfb15daf7966da5833d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=10% | `d47072897222eb3e1c424a91f9438005a2503006` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=100% | `0fd4bba38816fb62977384ea1bf5ef83676bfa88` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=25% | `53d9323dad1dca67beeaeab3c756376505ac1518` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=3% | `93a299c2880b1205e54ccad3e017e00efe7323e1` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=35% | `11a20d7c6b33d4bfedcb06ecd14edb99ae7ece53` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=5% | `e81382791f5c10c445b35ae753d0e342e0c3f0f3` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=50% | `a1ebbebfcf0b409f0fe456d1bc221c5f5eea842b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=60% | `3eecf078a4aa417646329cf9407b37faebd55c5b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=75% | `7200bd5d69eb27d75e779e77ad967648b78237c9` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Teal, Fill=90% | `26073ee33988cb37ac42d02a1afe5404cad890f6` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=0% | `fc071dfc71a96b6dabc159e6b5a1d74762dc7602` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=10% | `0ad2375cc3e6e1cafba4765039a1bf5cb25dcf61` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=100% | `ee3dfa6d69eeff4e2e910f308ffd3f0593de11ea` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=25% | `9cef1cb546b897336c3bcaca3211fe469d8630c2` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=3% | `e8873a5a3a2f9c2181f38b603fdfaf5eb6c4427c` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=35% | `b38c656283da32db318c212889d52aec470c4a24` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=5% | `bbe8c547066d3623f776ce9d949bf0e0b31bbc2d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=50% | `c500595ca5ebc1c7f085b4dbd5be895ddb448900` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=60% | `08481bc3a337a0117786a2f8aaaab9db2cfa3e0f` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=75% | `f805ab176e156a86480dbc8a83c41944011e3c71` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=White, Fill=90% | `cd0e7c7eaa36c6ce9796ada488027e64dea98950` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=0% | `a3860875716e90aaea2ee620975d294a208acb2c` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=10% | `3e81c221078e089e2c004916f33e40f80fadd3c3` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=100% | `0f88139afd89fcb1bb96965774a95a8b76b61f02` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=25% | `1e0efc185993a978350bb9028bd4a55fd08cbab1` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=3% | `9aff7cd67fcdebcde00bc2d32b23417cb72c4b75` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=35% | `c321d85da00f8758b8c7a75e462dfbeb241da275` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=5% | `cc27148eecad033baa477ec25a220320a5703063` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=50% | `92bfca81ea7a623c2bfdc9f329cfeec0fbe1914f` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=60% | `28943bfdd787d1cab45ba6274b1ca45fe6bf0973` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=75% | `d542333a62b50cc52127c1c12daed0ae1e7fb61c` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Default, Style=Yellow, Fill=90% | `0f59bed9a4082fd4faa3c3f5bd9e92791a35612a` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=0% | `8a6c4c9b8352188450c5fd57c87570ea3246ef10` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=10% | `b896b8cfe43f3d8eb32e352b88128bea28227134` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=100% | `55c4bae53e8269a7a70303b5b5bdac4f3c1ca3da` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=25% | `1b821f0cf6005234be2d58164512c1cba5b4446c` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=35% | `bf42fcf356a8003b182ab5c9ca487657c4abb2ca` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=5% | `51499e4aabeed92ec055deea5f24eaf6e50145c4` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=50% | `41a86b7be0e6492ea6ecceb370b477c2e1edd99d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=60% | `414dc9c25acaa287834f0b56c78578db651aa69d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=75% | `2a1d9197b40cd1a34eb46df31d90b7abf4eb9a40` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Amber, Fill=90% | `0f6602f15cd783f129573db5ee318e249797cc63` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=0% | `f091e6df0034594407279ba76fe58000b8cc8043` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=10% | `02d846090a805f489250c996c51adcdda4317efc` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=100% | `f49cb89413cf20813a62037007bb38c2312a2af5` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=25% | `98edd4a58da10c75abd5da918cb08a7d0e6a6154` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=35% | `70ce7ede45aacbb2fb6079c12c06f0eaeb3f2d35` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=5% | `3bd45a1bae45cc43fef7a6b6735a6141ba5860c7` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=50% | `97891029c6e3df46f6d81aced6810bd6938244e7` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=60% | `1d8e201d26bd4c0a6af78aa6652897c52426151c` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=75% | `5360e910c1b204c1cf337972cce8d329ba678602` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Green, Fill=90% | `724cf609933ab6a9ab29d81193705df195a6d245` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=0% | `835c67181be52344fb082d91572409069b8ec46b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=10% | `7d4e5bbe9875cad32d3bbed10641634ffcdcd094` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=100% | `9db9c3c9b5c57011bee979850157555753ef074e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=25% | `9285d79d189076d9d2274eefc373156b22e2dbff` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=35% | `d85a4d92e1f5afbb376df655ac9325c5ac44967b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=5% | `d8b97fe911c878ce14a7fc961f77f009c18090b6` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=50% | `9739260b8ee8c93cb19af05dade084eab3406335` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=60% | `ec30e4ded1043c791044b865017c0b9b92a00eec` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=75% | `81528b4c043af837e5c696736c6a08efdd0bb989` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Orange, Fill=90% | `01a23167453ef4e7bab6fb91e649edcdc23d2285` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=0% | `2f0e9f1f4abddc969745df65129104ae0e20702c` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=10% | `7ea7138adf52a0fd2244a890897f6f0a27601722` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=100% | `d4b05413601f7021c979ab2c141a3ad16f7f6ef5` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=25% | `21799af1c4a709e09e1174cd25c08dbb86c694ea` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=35% | `6dcbab65b6afccc0f8f151192b478027f1b63608` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=5% | `4067490b1aacfd3d5f31e1f90514a693ca148ac6` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=50% | `fccd65618f7f52870b8aa3009b653299ac7bce0f` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=60% | `9640373dfed3c7374658a1c36f45a91835c91d31` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=75% | `c31de2ccc57a7eb851c3d3bd81fdcd7b8d73210f` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Pink, Fill=90% | `54ee7e815a509f5c46829b8bf850033b3021b55e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=0% | `148f8d8169868c1568bf0e863a775db91a47de64` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=10% | `59e6e105a6683e6b8be6c4d6b3f4b7be224df814` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=100% | `3a4bf417ab3ee5be75e8d8b9383d5e9a3d09a335` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=25% | `8db7a4682493848eaa0ce3376b8eb1c7184d9ce0` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=35% | `0ca5dc9a9582d9ad393680d7200e5fd59bbd777d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=5% | `21f17cdf0a185e12ca484d40c829b2df0184a223` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=50% | `ed42134d5ff2891151728295feab02482bf1fffd` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=60% | `07f6dda4fef5b527328e798371beee8c8bbc02c8` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=75% | `857602bb82cb6301e373e508be2ea745a654a25f` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Primary, Fill=90% | `69dc1b68cb1c102a1d073d60aca86698e54d17d6` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=0% | `1b94845eb6b787944a8ddc9cb2218dd99beb9936` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=10% | `b3b467c770aa996ddb5412fb4cb1a53060627a7b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=100% | `a10c0a8920e09baed786285739e7ee1474802954` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=25% | `6301ab65be4e497a832b3da4dfe6f229e0493e79` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=35% | `47251242fa05b77b13e6e31a710319041df56656` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=5% | `818c51b11d25d65541533f1c15fb504eb24f5163` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=50% | `bceceb35440a69aa4d6d0887b1e4851a1aa45ac3` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=60% | `9d66fa2a20a6f1929ad7e98619890b1f1de2804e` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=75% | `5d2b3192f94ceeaff6ed65173dee0f91e3afe449` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Purple, Fill=90% | `1782c10df2b54bef6ebd1e3a8744f3492c8753c5` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=0% | `85411d24ff7a3cc3160b02866622ff15d0adaa1d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=10% | `517aca02cea7ff800c148b8acd2fa65821a31cf4` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=100% | `efd10ccc43290ce3001ee46d95317df8c4094378` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=25% | `660424c4e722b4efbf00f8acd4133676166305fa` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=35% | `cd5a0690656fa0b23c6288f553638998fa128fcb` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=5% | `c7a4f45efd33cbca1ae202c546ad87de26d67fda` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=50% | `4ca50e32ffc3bde1304da94dd8a6064e18df9ff6` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=60% | `d555de1ac4f7635fc3e832d252f5488ee1f4b292` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=75% | `9b9e933cdd32e1f92c141cadb51e291a7df03d15` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Red, Fill=90% | `8acff7df9db4a2047007dbc8262bff15c337e7cd` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=0% | `5f35f411ffddc154e49ec8a225f3d2f0560562bf` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=10% | `d9afd9d85a91c395857cae7a45f0cfb8032ef040` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=100% | `9886befdfa65a0d651803020d4af94375cb77efe` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=25% | `e2c708fafff48757960ba9cbfeae1ab8dc4bdde6` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=35% | `96021785c557c280a03aa9fd8eccf836ef52bdb1` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=5% | `a6d36362395a16b3eb84b3e88165b97300533fd0` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=50% | `39c85bf5b6aa3ea34b0d0082da39ec2aeea4e785` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=60% | `bfb828b3e75044a2e60a8033453b386998553cb5` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=75% | `2a07904f51b0112e8d663dc97c57072b93311015` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Sky, Fill=90% | `c202f18b4d8b6812f775209dbfe78ee5179e1445` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=0% | `e1db4996644d3812a8ba51d61d96549565e3ba10` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=10% | `1a6b27f875adca3fd99ee5c063211fa5b3a63dea` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=100% | `fa697ec1a089f6379583c1713566da654b31bd30` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=25% | `90c7c05007d64b9437ec15df308f7b6d27e9d48d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=35% | `1cb01e3c45615b647831d2b6e40e30f4fc04e98d` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=5% | `cc80c97b6940565b9ba8c21c4044a3c3e4835d40` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=50% | `3ec49b01cb179af993b678fe9dfe46cccdbb1936` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=60% | `62d7a219d330f47d7529506db794613f3eb59816` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=75% | `fbff86d4a7abd95a16f59a44f931aa7ae25537a2` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Teal, Fill=90% | `626df1edc7ac493d941fc21d105d63a75d67542b` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=0% | `6001eca578b3326d30323317475135c8c060c110` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=10% | `3f4c6b9851cb85f6d0ea14eb285184ba9d8ee47c` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=100% | `cdd51c52d41e4496726613551206d221c77d7c66` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=25% | `d9153f50ade8903c4c535704fac253e3955ed671` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=35% | `d9137d78bb62a01e12637f58c68eb5eacb991397` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=5% | `57dde0464ab67b96b7acddc081ffc251b8615409` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=50% | `0e488d1a88c570d92581d2959c4da9017159e26c` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=60% | `1fff766ba4b602ccdb03a5e04254e1b704a458df` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=75% | `28a5b6351dc2f296282dfad1aaa633b462422ccc` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=White, Fill=90% | `74602669635ccc50c7d750a1ed67ea5edfae9aac` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=0% | `b4b6e9f13f6c16e35a228cbb9607c00ccaac87cb` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=10% | `97ae6abbc72ea9d6bcacbfa4f1548321d5216462` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=100% | `d1d5b723e53a89d1c3b3c2969c4432a4c1eb6c75` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=25% | `278f9be18f78f46d373c014a8554b7e117ba8d78` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=35% | `c27a30901e0af258e6e761da884b2b3294ac0138` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=5% | `f02123f7ae256761ca0f1dfd0140c1bcddb4cbca` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=50% | `dc8686af0ac266e062b07beadd40c018269ce5ba` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=60% | `22df0ad0e44d21f9ef8f926ffd71dbdb4fc2e288` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=75% | `1e2b391f3404ae56f34a22ac4d32fc3c41e1ba50` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |
| Progress Line / Size=Small, Style=Yellow, Fill=90% | `fcd54ac5bfd151322e0828671c0ec3fc322538ff` | Variant，屬於 `Progress Line` | ⚠️ 尚未填寫 Description |

### Sidebar Components（38）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Footer | `44d87aa9ac6518389c3981702148b3dfba8637f1` | COMPONENT | ⚠️ 尚未填寫 Description |
| Group Avatar Navigate | `2c4bfd95c7cf2feacd5820fb379615a103adc6b8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Group Avatar Navigate | `299c6cbda6c9e361688da18ccc1452e73f1a4322` | COMPONENT | ⚠️ 尚未填寫 Description |
| Group Avatar Navigate | `3736b826cf1f631c982cd317503f850ae9980d57` | COMPONENT | ⚠️ 尚未填寫 Description |
| Group Navigate | `fb8653a020179478bb4d0674909a886ce0114f4d` | COMPONENT | ⚠️ 尚未填寫 Description |
| Group Navigate | `b671c66e9162a012ca4b33e15974e04de1c46ec6` | COMPONENT | ⚠️ 尚未填寫 Description |
| Group Navigate | `7986849a84f05f98f4b93c4a43e384c203b283d8` | COMPONENT | ⚠️ 尚未填寫 Description |
| Head / Style=Big | `d1fa4f423b68640affcd9aa15e015ec842383332` | Variant，屬於 `Head` | ⚠️ 尚未填寫 Description |
| Head / Style=Big Bottom Line | `b2e4f7de074755b959205219e42a6f091cae7e04` | Variant，屬於 `Head` | ⚠️ 尚未填寫 Description |
| Head / Style=Big Top Line | `d81f03ebb718977fcfe0b7ce6eb63a5c1d6820a6` | Variant，屬於 `Head` | ⚠️ 尚未填寫 Description |
| Head / Style=Bottom Line | `772653db1046e706b944f4e71de7647f5ec5300b` | Variant，屬於 `Head` | ⚠️ 尚未填寫 Description |
| Head / Style=Default | `cd56685e8aaf500e07df3fe2df3e71fd9136f671` | Variant，屬於 `Head` | ⚠️ 尚未填寫 Description |
| Head / Style=Top Line | `995eca34e441e0492fbceb0d5ae5901e456fe487` | Variant，屬於 `Head` | ⚠️ 尚未填寫 Description |
| Item Avatar Component / State=Default | `2dcb1a2f0faf139e0db023db463b0063ec62bbc0` | Variant，屬於 `Item Avatar Component` | ⚠️ 尚未填寫 Description |
| Item Avatar Component / State=Default | `57507f9a16a320f7cc2b1905851c08aa4d1c95a8` | Variant，屬於 `Item Avatar Component` | ⚠️ 尚未填寫 Description |
| Item Avatar Component / State=Select | `d7ed352778eb7b092ceb96f2a20e0f082ce12860` | Variant，屬於 `Item Avatar Component` | ⚠️ 尚未填寫 Description |
| Item Avatar Component / State=Select | `5cff5fd01fb482067a5dc704acfea75685694fc7` | Variant，屬於 `Item Avatar Component` | ⚠️ 尚未填寫 Description |
| Item Avatar Text Component / State=Default | `d3f8029f985bbd4ee4169327589789a9b731c6f8` | Variant，屬於 `Item Avatar Text Component` | ⚠️ 尚未填寫 Description |
| Item Avatar Text Component / State=Select | `7e993e30a64a503817ad5de89fc57e3898693c77` | Variant，屬於 `Item Avatar Text Component` | ⚠️ 尚未填寫 Description |
| Item Navigate Component / State=Default | `87590b7a91b5e41d6bb26c3a0de6f01942886e39` | Variant，屬於 `Item Navigate Component` | ⚠️ 尚未填寫 Description |
| Item Navigate Component / State=Select | `c03b323c9bd5aeeeed994e9e01e32a4cc8b7d2ae` | Variant，屬於 `Item Navigate Component` | ⚠️ 尚未填寫 Description |
| Item Navigate Text Component / State=Default | `d39346a4acb9a53baeaaf5e012033ff84867f83f` | Variant，屬於 `Item Navigate Text Component` | ⚠️ 尚未填寫 Description |
| Item Navigate Text Component / State=Select | `99f1e7d2be75a165e0b33167bf34a736246b56e9` | Variant，屬於 `Item Navigate Text Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=1, State=Default | `2fc2630ed126134cb7aa2c175d265cf114229047` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=1, State=Open | `59ad06799690d5c217e76d912cb4579ef4a16a7b` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=1, State=Select | `d44ce938a1b700814566885f6c5720340198455f` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=1, State=Select Primary | `baface227eb595d33d4526b2cfca68096ccf676a` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=2, State=Default | `d3dc805038787893cc2fa101a28cedca6ae17680` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=2, State=Select | `db57dfd53ebd6566f87773c00aa9541312bf5c4f` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=3, State=Default | `afe6475924cede6815d4e3b6def212e2dcc5fd7e` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=3, State=Select | `ef1bbe1cc62773d18e30c1b61e78c74d708a84bd` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=4, State=Default | `ca6bbbab32a118144733c8bb3c34e12bf70f8991` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| List Item Component / Level=4, State=Select | `91b6b4a3bb579edf5ee0a7d0b9afe639f0b0675d` | Variant，屬於 `List Item Component` | ⚠️ 尚未填寫 Description |
| Message / Style=Default | `fbd5a851d41369e23e56f468bea4bb56df280702` | Variant，屬於 `Message` | ⚠️ 尚未填寫 Description |
| Social | `c8a69b630789bbc1a235fbea85d9d23901bdb0b9` | COMPONENT | ⚠️ 尚未填寫 Description |
| User Component / State=Default | `0e65dd443563c8f585584102529146b092b22b18` | Variant，屬於 `User Component` | ⚠️ 尚未填寫 Description |
| User Component / State=Ghost | `bcceb90992ce8374d263aa684018e2effb6dd6ee` | Variant，屬於 `User Component` | ⚠️ 尚未填寫 Description |
| User Component / State=Open | `ca979de5967bcfc8118673d8fccf3279a02cba8e` | Variant，屬於 `User Component` | ⚠️ 尚未填寫 Description |

### Sidebar--System backend（59）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| 系統帳號 / Property 1=身份組列表 | `d5f0251e39ba121ae6f6937d5743eb244a431c49` | Variant，屬於 `系統帳號` | ⚠️ 尚未填寫 Description |
| 系統帳號 / Property 1=帳號管理列表 | `7581b0d883e9cd7ce8a07e1480725b2f1ab1c864` | Variant，屬於 `系統帳號` | ⚠️ 尚未填寫 Description |
| 事件設置 / Property 1=事件參數管理 | `cf94f4794bcc823e0fe5676d2c2555ac77312d36` | Variant，屬於 `事件設置` | ⚠️ 尚未填寫 Description |
| 事件設置 / Property 1=事件異動歷史 | `249767f4c53bfd5765626832668d034cdbfefbe5` | Variant，屬於 `事件設置` | ⚠️ 尚未填寫 Description |
| 事件設置 / Property 1=事件管理列表 | `e3dab3ad435ee69eb72a1bcca490b82a05c50c88` | Variant，屬於 `事件設置` | ⚠️ 尚未填寫 Description |
| 事件設置 / Property 1=建議事件審核列表 | `3cb1e81f01f544a346544e9ae9a5cbefccc1f3dd` | Variant，屬於 `事件設置` | ⚠️ 尚未填寫 Description |
| 事件設置 / Property 1=庫存管理 | `07adcbf8854535fe6e6830070e4fc0fb7936c009` | Variant，屬於 `事件設置` | ⚠️ 尚未填寫 Description |
| 事件設置 / Property 1=新增事件 | `d9b13a5eaa9fecb39f201880535c1c9c9f74c649` | Variant，屬於 `事件設置` | ⚠️ 尚未填寫 Description |
| 其他設定 / Property 1=系統通知 | `9a8cc68b1a45d6ea0b5b702d8503a230863d2a5a` | Variant，屬於 `其他設定` | ⚠️ 尚未填寫 Description |
| 其他設定 / Property 1=運動設定 | `4314c257270f06fd764799aa58760ecf41806b54` | Variant，屬於 `其他設定` | ⚠️ 尚未填寫 Description |
| 客服 / Property 1=會員訂單紀錄 | `7401bbb0d0c3ad1759f6eef7997c49e22abe6e0a` | Variant，屬於 `客服` | ⚠️ 尚未填寫 Description |
| 首頁 / Property 1=數據總覽 | `dbe8360041c3a20f22fab1084a09a03f5ec47671` | Variant，屬於 `首頁` | ⚠️ 尚未填寫 Description |
| 商戶帳號 / Property 1=商戶帳號管理列表 | `9934d345e060369900303c991d422391dc16cb6a` | Variant，屬於 `商戶帳號` | ⚠️ 尚未填寫 Description |
| 商戶顯示隱藏事件管理列表 / Property 1=商戶事件顯示管理列表 | `18b5f21cb878199c065e28db835f5cb43d48f944` | Variant，屬於 `商戶顯示隱藏事件管理列表` | ⚠️ 尚未填寫 Description |
| 帳號管理 / Property 1=使用者帳號列表 | `b5572c90e3f461c602d5e7c959c0b3309279af8e` | Variant，屬於 `帳號管理` | ⚠️ 尚未填寫 Description |
| 報表 / Property 1=事件損益查詢 | `8b1f4bf632ecf49d0a3b928c35b1d449b09e4f7a` | Variant，屬於 `報表` | ⚠️ 尚未填寫 Description |
| 報表查詢 / Property 1=事件報表 | `f48ec74ac1e41f13cc4d7fe2adee459962e1cd79` | Variant，屬於 `報表查詢` | ⚠️ 尚未填寫 Description |
| 報表查詢 / Property 1=會員注單報表 | `fd878c598e344eeb99a3121831c3e3c223d9c791` | Variant，屬於 `報表查詢` | ⚠️ 尚未填寫 Description |
| 資料庫管理 / Property 1=事件主類別管理 | `760a63ffc50e8b9afc92eda50e2cd5dafa835385` | Variant，屬於 `資料庫管理` | ⚠️ 尚未填寫 Description |
| 資料庫管理 / Property 1=事件次類別管理 | `25514e194f9e75480715cd4b4e0ce47264bc64d5` | Variant，屬於 `資料庫管理` | ⚠️ 尚未填寫 Description |
| 資料庫管理 / Property 1=事件參數管理 | `d552bfadb55e32f9a784268cb5cfa544dbe46e61` | Variant，屬於 `資料庫管理` | ⚠️ 尚未填寫 Description |
| 資料庫管理 / Property 1=參數類別管理 | `b681ddc208780686889c7d11baf6e8f1605e11a2` | Variant，屬於 `資料庫管理` | ⚠️ 尚未填寫 Description |
| 圖片管理 / Property 1=iframe | `19e5acb25c82893b1eecc89c25011b321fa46682` | Variant，屬於 `圖片管理` | ⚠️ 尚未填寫 Description |
| 圖片管理 / Property 1=Widget(V2) | `1fe28fbb2c31f4bf4e6e43d622263341e2215d55` | Variant，屬於 `圖片管理` | ⚠️ 尚未填寫 Description |
| navigate--開關--merchant-backend / Property 1=Default | `fcf94f2859219bd04e1ec6eaac223dabb3ea0469` | Variant，屬於 `navigate--開關--merchant-backend` | ⚠️ 尚未填寫 Description |
| navigate--開關--merchant-backend / Property 1=Select | `99b0a0b64d5530562793226f80aedd3c8daf372e` | Variant，屬於 `navigate--開關--merchant-backend` | ⚠️ 尚未填寫 Description |
| navigate--開關--system-backend / Property 1=Default | `ae9f30b33b38b48d4ae8ed5e5a796f58c08265bf` | Variant，屬於 `navigate--開關--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--開關--system-backend / Property 1=Select | `b1abe0acdb25787da157181a47b706d35d9a8f12` | Variant，屬於 `navigate--開關--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--main-component / 層級=子級, Property 1=Default | `b349c2f05cf1a0e95917e04df34af481fdba9ad5` | Variant，屬於 `navigate--list-item--main-component` | ⚠️ 尚未填寫 Description |
| navigate--list-item--main-component / 層級=子級, Property 1=Select | `bac138623cb3c6626674122c7b5c2e0f665f7800` | Variant，屬於 `navigate--list-item--main-component` | ⚠️ 尚未填寫 Description |
| navigate--list-item--main-component / 層級=父級, Property 1=Default | `96ddf902a33a6ef61f04711ac0eb8e14ff0e91be` | Variant，屬於 `navigate--list-item--main-component` | ⚠️ 尚未填寫 Description |
| navigate--list-item--main-component / 層級=父級, Property 1=Select | `266a4b154c71a1748e9863a6ec6c224c8fdb2d34` | Variant，屬於 `navigate--list-item--main-component` | ⚠️ 尚未填寫 Description |
| navigate--list-Item--merchant-backend | `06fc195e03b04954be594562a0b5e056f7f89174` | COMPONENT | ⚠️ 尚未填寫 Description |
| navigate--list-Item--system-backend | `dd7cc4ebfa78a3a585ddbb317487a4e718968305` | COMPONENT | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=系統帳號 | `ffe930d34179c560b599b19c5e7988e11a7b3a81` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=系統帳號 - Select | `5e39b809b8691a04948f271eb122a689f1c48ed9` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=事件設置 | `11a9d99f625b823b355231e7f254e3df41b84b19` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=事件設置 - Select | `2e2239e2d7df4951f3b6743a32913a3d48133357` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=其他設定 | `06d73c7a0d1e4cd34d23b1ec9934fa43688d4fa7` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=其他設定 - Select | `a62b47ba3b7ce2f13341e64c7e02558973ef841d` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=客服服務 | `77d49ebbac230d1f86f0ce9c58a3f0f0979582ad` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=客服服務 - Select | `5ac61afa48b91bbe9b2e0b3ab23c54d3ee073305` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=首頁 | `dfc6c4455cf85d865d105539ee1553f8683a6316` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=首頁 - Select | `3be4ac407560da2ce3392d588839a605d927d8ce` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=商戶服務 | `f2bb928c79368ffb7047db8cf16a4cb37cc3adae` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=商戶服務 - Select | `ca67e22587ae275d619d5f8f31cd85670b358cdf` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=商戶帳號 | `29256ce20b13d0057b3932323c8086d8d4b9a493` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=商戶帳號 - Select | `7e7c8efa28d8d28c218f5fc911e5036d3d8c42b1` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=帳號管理 | `ea337b1f6bf41cae3b092f19807780159bd2ab58` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=帳號管理 - Select | `1eb8e46691a8d635b6575193c963b1aa7c1b5180` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=報表查詢 | `de90c4743c613570f27ddb1a90925d7e160baeaa` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=報表查詢 - Select | `f98494caa6686a73ac95ad8e4afb448dde5e871a` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=報表紀錄 | `812d4ef9ba0464b7f485ee855a53ec4ac7003985` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=報表紀錄 - Select | `f5df6066240f58648b6a909b0ea7bb38f6f31426` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=資料庫管理 | `29d15a1d1ac9319ac6e8d6ff18eb3fd494a71101` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=資料庫管理 - Select | `81b6470c9edf1b43690ac0a505508d5cfdf8b5ca` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=圖片管理 | `02a5f1021a27503b9658cfdb6491b5055f4e2307` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| navigate--list-item--system-backend / Property 1=圖片管理 - Select | `f62f683ee1c52d9c7010724fb1206e5fdddf5bea` | Variant，屬於 `navigate--list-item--system-backend` | ⚠️ 尚未填寫 Description |
| user-information--system-backend | `7362f091d676a2559da83449d93402113be85837` | COMPONENT | ⚠️ 尚未填寫 Description |

### Slider（4）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Slider / Type=Default, Size=Default | `f5e286d1a045989b3245cab05be5aed763540b60` | Variant，屬於 `Slider` | ⚠️ 尚未填寫 Description |
| Slider / Type=Default, Size=Small | `14d03f30f48957b8c9c4eddc6a9dc9d9df3bec44` | Variant，屬於 `Slider` | ⚠️ 尚未填寫 Description |
| Slider / Type=Range, Size=Default | `43799c97941d0d5b1b63170c6c60020357570f14` | Variant，屬於 `Slider` | ⚠️ 尚未填寫 Description |
| Slider / Type=Range, Size=Small | `cc3281e3b2c7a3a2300464c5007bd83651211844` | Variant，屬於 `Slider` | ⚠️ 尚未填寫 Description |

### Sport team Icon（371）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| ARI | `63f4506ac6ced0c59b575925de78a9a85fafb4c7` | COMPONENT | ⚠️ 尚未填寫 Description |
| ARI | `33f5e012b175027673be33ed3aa28a62e5db09fb` | COMPONENT | ⚠️ 尚未填寫 Description |
| ATL | `f0da1006db1b61035fc6a3b43779315699436092` | COMPONENT | ⚠️ 尚未填寫 Description |
| ATL | `725f4745034b072cb3536071e4f4fcdc00ca9899` | COMPONENT | ⚠️ 尚未填寫 Description |
| ATL | `6a17f002ad8a161ba796b4d02c72f5bca28a6982` | COMPONENT | ⚠️ 尚未填寫 Description |
| ATL | `b26881b4dfe4ed95380900e690d30307efd355dd` | COMPONENT | ⚠️ 尚未填寫 Description |
| ATL | `252af76c235cc72c6765600f98d65c78accb4279` | COMPONENT | ⚠️ 尚未填寫 Description |
| ATL | `151454578e9330b91101f2b08883bb76045f5d9e` | COMPONENT | ⚠️ 尚未填寫 Description |
| BAL | `36e84f2a9208615bdbc818dbe8f86e15e99199f7` | COMPONENT | ⚠️ 尚未填寫 Description |
| BAL | `7346731b291cf907c18b373e153616aaa18f3c96` | COMPONENT | ⚠️ 尚未填寫 Description |
| BAL | `fea6760d75cd6626a6f3161be0a26ff636eaaa83` | COMPONENT | ⚠️ 尚未填寫 Description |
| BAL | `630a500269b3e5d3d3be107f63753f25bc478b42` | COMPONENT | ⚠️ 尚未填寫 Description |
| BKN | `99af33a10c4f0cf4e50df16eaf32f1d8962e0576` | COMPONENT | ⚠️ 尚未填寫 Description |
| BKN | `b3e0191a0c96ded61a230ccae97ab3b0f2e99473` | COMPONENT | ⚠️ 尚未填寫 Description |
| BOS | `7f1afc627f388163cfebce0d0adb2f7a1df8483e` | COMPONENT | ⚠️ 尚未填寫 Description |
| BOS | `b79ded4dd42cb2612d09aecae5786da23e70445c` | COMPONENT | ⚠️ 尚未填寫 Description |
| BOS | `4c0909171ec0d0c3f0dbf3355e14293783922786` | COMPONENT | ⚠️ 尚未填寫 Description |
| BOS | `77b18a0ac7e81cf7ef48f84d6af1fcf6047b2b86` | COMPONENT | ⚠️ 尚未填寫 Description |
| BUF | `d3be2eb24f6a78b2bcdaa10c555d043112e04ff5` | COMPONENT | ⚠️ 尚未填寫 Description |
| BUF | `d6e05810d530f36053ee21ae52c91dc2be496c6c` | COMPONENT | ⚠️ 尚未填寫 Description |
| CAR | `2acbd4587ab0d81188e0f5657909c560a10a452d` | COMPONENT | ⚠️ 尚未填寫 Description |
| CAR | `143e77bafbf6228db08d962e5e2de3c8f7884cdd` | COMPONENT | ⚠️ 尚未填寫 Description |
| CHA | `8eda98d28723273a853d88cece4d23607835241f` | COMPONENT | ⚠️ 尚未填寫 Description |
| CHA | `39039dde042c43c89e804bb13f983fa6dac74e11` | COMPONENT | ⚠️ 尚未填寫 Description |
| CHC | `efe4fd077fc278facdb11e99bbe8e6fc91bd3265` | COMPONENT | ⚠️ 尚未填寫 Description |
| CHC | `512e29af89960c20c6319d074259fcc8a904125f` | COMPONENT | ⚠️ 尚未填寫 Description |
| CHI | `0eba27467e7144b8867ae0a9b47c5364e91dfeab` | COMPONENT | ⚠️ 尚未填寫 Description |
| CHI | `68b733f42f06a4f38dffbe04cbb0cb5d216a871d` | COMPONENT | ⚠️ 尚未填寫 Description |
| CHI | `8b48107b00d7a0239d357fc43e8f0f847b4366e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| CHI | `07be2d07c68a89a139d73f7fd3bbe3a6417568c0` | COMPONENT | ⚠️ 尚未填寫 Description |
| CIN | `3879a7f3fee50b4b3df921ff7004805f510f1340` | COMPONENT | ⚠️ 尚未填寫 Description |
| CIN | `c2d5220339409e44c209891b2c3109177915e256` | COMPONENT | ⚠️ 尚未填寫 Description |
| CIN | `3909b49755b0a5496d116c9c9b42027111fba2bf` | COMPONENT | ⚠️ 尚未填寫 Description |
| CIN | `2a69b6c39efae9f0a05f4a987e0860a630afea3c` | COMPONENT | ⚠️ 尚未填寫 Description |
| CLE | `6939ba03168ec1b6a94f10d1bc0904819af19853` | COMPONENT | ⚠️ 尚未填寫 Description |
| CLE | `d4b607e3d2e087dbba09718346f91f5cf59da034` | COMPONENT | ⚠️ 尚未填寫 Description |
| CLE | `eea3f268905c929038b6331d66cd0bc2da0f1881` | COMPONENT | ⚠️ 尚未填寫 Description |
| CLE | `5f361169b2bb8f69b9ebee227c8b523398238db4` | COMPONENT | ⚠️ 尚未填寫 Description |
| CLE | `6433459f99c0277eec05501060caa5ac64c35c93` | COMPONENT | ⚠️ 尚未填寫 Description |
| CLE | `81c5776304bfd3cc7040ec77967206ee59bf6880` | COMPONENT | ⚠️ 尚未填寫 Description |
| COL | `0fb07adb6594dd3938b5ef6169e0b241efa4295f` | COMPONENT | ⚠️ 尚未填寫 Description |
| COL | `e47b12ab901e697f094facfe3e33eb84f3756923` | COMPONENT | ⚠️ 尚未填寫 Description |
| CWS | `b2e9c4ec7f57b0b912904530c9724911de5fa1d0` | COMPONENT | ⚠️ 尚未填寫 Description |
| CWS | `e383b434e43f0e4fbfb966eac3a76129c58f88ca` | COMPONENT | ⚠️ 尚未填寫 Description |
| DAL | `657875d3106742087c61f8cee10b818e224e96dd` | COMPONENT | ⚠️ 尚未填寫 Description |
| DAL | `88353aee9f5bcaa0c6bcf0992e386fcd411dad07` | COMPONENT | ⚠️ 尚未填寫 Description |
| DAL | `d24f20292e68c9278baed1c66c5c8bcf7d9defbd` | COMPONENT | ⚠️ 尚未填寫 Description |
| DAL | `ff306c2543f78a2300ad8afaf442e513880578a0` | COMPONENT | ⚠️ 尚未填寫 Description |
| DEN | `5d981a43c5c3915d478fcf93fae505e9d80fb127` | COMPONENT | ⚠️ 尚未填寫 Description |
| DEN | `722b94dc25cdc78a7d418ea58b3312df7b755668` | COMPONENT | ⚠️ 尚未填寫 Description |
| DEN | `0ea44d99a9a2cfa55dfb6aeadc54414d8e189aba` | COMPONENT | ⚠️ 尚未填寫 Description |
| DEN | `e06a745227cfa0eb2a516fb20b5167e0e47e228b` | COMPONENT | ⚠️ 尚未填寫 Description |
| DET | `ec110a25031b7e5910863cb74d9456d99f116809` | COMPONENT | ⚠️ 尚未填寫 Description |
| DET | `55a5be5f91294d24deeb42f53979d12d427a19d4` | COMPONENT | ⚠️ 尚未填寫 Description |
| DET | `59b67cfff855a1e922d6123eb5417d1cf0c849c5` | COMPONENT | ⚠️ 尚未填寫 Description |
| DET | `9c81ff72ff4817520ff1eaf320db6543e7ea344d` | COMPONENT | ⚠️ 尚未填寫 Description |
| DET | `ba5ad49987551593be373c795875f7a2625676b3` | COMPONENT | ⚠️ 尚未填寫 Description |
| DET | `cb770061c2f42246934b31fe346807e3aa30d576` | COMPONENT | ⚠️ 尚未填寫 Description |
| GB | `21f4f0db4d776b2ca7ea94b627fed467b23fca77` | COMPONENT | ⚠️ 尚未填寫 Description |
| GB | `8f7324ee439ab24cb95c98b694f800d5af1e931a` | COMPONENT | ⚠️ 尚未填寫 Description |
| GSW | `4712753a1e8b11de6296848ea60b8786e7ec0ef2` | COMPONENT | ⚠️ 尚未填寫 Description |
| GSW | `ff5f44846b3be410b90711807aa15f3b5465b441` | COMPONENT | ⚠️ 尚未填寫 Description |
| HOU | `c4eab183d226cc631c8755efcb0b182ea428d7bd` | COMPONENT | ⚠️ 尚未填寫 Description |
| HOU | `733ffe075d4b14b2e20478153e54ccdb1b926f29` | COMPONENT | ⚠️ 尚未填寫 Description |
| HOU | `9dbbd1e16831117cb92f1518137cddba9bbf1302` | COMPONENT | ⚠️ 尚未填寫 Description |
| HOU | `fe861e266d446a74d150d88eb153704ba35164a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| HOU | `27a4166e8e1941b917731a003ae2471ba1111b38` | COMPONENT | ⚠️ 尚未填寫 Description |
| HOU | `12cbff541ac4bba8c89448921098c62dde34fabb` | COMPONENT | ⚠️ 尚未填寫 Description |
| IND | `c174adcadf54f4af136f62470c37ea2f3826e3d4` | COMPONENT | ⚠️ 尚未填寫 Description |
| IND | `12cede5b6fffa869bd9ce11bfeec6fa0272c3003` | COMPONENT | ⚠️ 尚未填寫 Description |
| IND | `0305d35bd09035f7a9bde04203013becc81e4ecb` | COMPONENT | ⚠️ 尚未填寫 Description |
| IND | `d25fb3ef8a2007f32fd93dc6e89742d5147000fa` | COMPONENT | ⚠️ 尚未填寫 Description |
| JAX | `417fa85df08d7152e73780f881dc869f4ee4882b` | COMPONENT | ⚠️ 尚未填寫 Description |
| JAX | `d63be29aac3f80711878a556a2051c17dcbf34ce` | COMPONENT | ⚠️ 尚未填寫 Description |
| KC | `9fdf7d0b9d0faa2d1decde0977711d1a02e946a0` | COMPONENT | ⚠️ 尚未填寫 Description |
| KC | `101a6c58e9fcaec7d1d3751913c0b4fb197b40ea` | COMPONENT | ⚠️ 尚未填寫 Description |
| KC | `38b0809658fee7350e0899d2d8816332f1f0d866` | COMPONENT | ⚠️ 尚未填寫 Description |
| KC | `73a86ae35fb5af56185b8077bf68da8768770e02` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAA | `6d6f22c4e79c2af189b43dffc4640d185999a770` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAA | `ecc5c5a17c7223286635727e3f9edb3489bd0dd2` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAC | `02704ba2f7c10710989be25b0e6a9746bc702d22` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAC | `224fe2db8a8323cdc5f0dd301339aba4440449e5` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAC | `feef8d18712f00200cc336abc630cb14bcf490b5` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAC | `7952878b058395c3c4c970479fc749794f05e9fb` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAD | `3f6deef42e108d6ec85a86bb9ea24988672a6136` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAD | `9c1998a5a710d831a2cf04583ae3a97c1a913ec9` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAL | `1b9b297324c156057add30f53d269d9cfa39803b` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAL | `03304e1b5029f03180f16da754d143898fb5a72b` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAR | `de2c6a10ef005a9a281e3853579e17882e2edcce` | COMPONENT | ⚠️ 尚未填寫 Description |
| LAR | `24e9ba659e012e2890e3345d0e60eab43868ab62` | COMPONENT | ⚠️ 尚未填寫 Description |
| LV | `f3cb0876eae4720222dbdb6fe8e52d012bf9307d` | COMPONENT | ⚠️ 尚未填寫 Description |
| LV | `87c51541de0ff062186c0e69ae1c5112a2665262` | COMPONENT | ⚠️ 尚未填寫 Description |
| MEM | `9790ac2d9970987ffbdff96942d8accc90b3543a` | COMPONENT | ⚠️ 尚未填寫 Description |
| MEM | `bcf7320ad7020f234588dfa18b0bf435ff8f32b2` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIA | `0c89430a8797465ae087345479cbb9da9e0c2471` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIA | `6fb9a87e2b7e0edd20c214f6ebffd9d4ddbe1dcf` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIA | `6ea1c90890090042cca759833c10ab0e32ba13e9` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIA | `57874aea92e204e257c1a8ee43d5044ea2a8f69d` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIA | `8af5a776a23b1ab329845504e0774f10ed18308b` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIA | `7eea203c6f8d52bb39117f3fd8e1d5b7de2b8228` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIL | `20344c1605ef930d8c36200f6e1e54c47ddf7183` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIL | `8cfdea1635162e87602ffac8f887cbb1c7e9a1a0` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIL | `92088c8fc6892131169d415c92a474f283350f0f` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIL | `9479bd8a47ee15e94368d4e66d1ec888c0da285d` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIN | `d9e8c8cd366700a594ce851591f2842185e7891d` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIN | `a3390c1b7ec344bc30ecfedfec6dc3a1d01d302a` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIN | `4ed570e8ea69ad50eb48a599d97f5cbdf7973df9` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIN | `a0949692c3a22d0ad60c7b09a2c52bbaf052e5d5` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIN | `de01b13a63b1b1cde891f30e37a0d2dfab767dc2` | COMPONENT | ⚠️ 尚未填寫 Description |
| MIN | `2be5db44c9349e3b29e0ac50262d30ba8328bb58` | COMPONENT | ⚠️ 尚未填寫 Description |
| MLB/ARI / Property 1=Away Team | `3ccdc77759838207ba386a1ea365c0589cfa3904` | Variant，屬於 `MLB/ARI` | ⚠️ 尚未填寫 Description |
| MLB/ARI / Property 1=Home Team | `ff26edc69910d647c8e003a25cb15b08a999d284` | Variant，屬於 `MLB/ARI` | ⚠️ 尚未填寫 Description |
| MLB/ATL / Property 1=Away Team | `5f6e4dc93d40b6f15b09e93daf02bef93db6d2fd` | Variant，屬於 `MLB/ATL` | ⚠️ 尚未填寫 Description |
| MLB/ATL / Property 1=Home Team | `91c14d4c019bee544e87b17489eee5421aa2d96a` | Variant，屬於 `MLB/ATL` | ⚠️ 尚未填寫 Description |
| MLB/BAL / Property 1=Away Team | `808e142663f7f31df14aeea3331090f76f326f4c` | Variant，屬於 `MLB/BAL` | ⚠️ 尚未填寫 Description |
| MLB/BAL / Property 1=Home Team | `ea4e96ae5e765b72c103372a57b1cfce63305ca1` | Variant，屬於 `MLB/BAL` | ⚠️ 尚未填寫 Description |
| MLB/BOS / Property 1=Away Team | `e00182f461446b10a2b84241709ea513e1547b23` | Variant，屬於 `MLB/BOS` | ⚠️ 尚未填寫 Description |
| MLB/BOS / Property 1=Home Team | `8c86747c51a51967e74a4557f0737dd2a218020c` | Variant，屬於 `MLB/BOS` | ⚠️ 尚未填寫 Description |
| MLB/CHC / Property 1=Away Team | `65cbc16ef9b4ff074c302c1871d35fdf885d8378` | Variant，屬於 `MLB/CHC` | ⚠️ 尚未填寫 Description |
| MLB/CHC / Property 1=Home Team | `d2ca150f8776c4bc94b995e7b45733142d2a279d` | Variant，屬於 `MLB/CHC` | ⚠️ 尚未填寫 Description |
| MLB/CIN / Property 1=Away Team | `0afdab0819639e572634007f0b25e3fcabdbc55b` | Variant，屬於 `MLB/CIN` | ⚠️ 尚未填寫 Description |
| MLB/CIN / Property 1=Home Team | `fcd618e42cfc821b2a9f4c72101cb89e6c15ee7b` | Variant，屬於 `MLB/CIN` | ⚠️ 尚未填寫 Description |
| MLB/CLE / Property 1=Away Team | `a7f94f934360df883681e64c5458844f4889f902` | Variant，屬於 `MLB/CLE` | ⚠️ 尚未填寫 Description |
| MLB/CLE / Property 1=Home Team | `2b65648f519a890ab20f0007e48eea4a863d330b` | Variant，屬於 `MLB/CLE` | ⚠️ 尚未填寫 Description |
| MLB/COL / Property 1=Away Team | `0d7e8bd0e2e980ae6036d6232ed93dc3cfac458a` | Variant，屬於 `MLB/COL` | ⚠️ 尚未填寫 Description |
| MLB/COL / Property 1=Home Team | `f858fe6e67073ed86135d966f9f3e5ee7ae09ca5` | Variant，屬於 `MLB/COL` | ⚠️ 尚未填寫 Description |
| MLB/CWS / Property 1=Away Team | `3f8f2b10008a946e66d326e1dabacf4ddee3ebf3` | Variant，屬於 `MLB/CWS` | ⚠️ 尚未填寫 Description |
| MLB/CWS / Property 1=Home Team | `8230427c201be2b7e0224fab044113047ecb3225` | Variant，屬於 `MLB/CWS` | ⚠️ 尚未填寫 Description |
| MLB/DET / Property 1=Away Team | `25a0c3745b4a8625181da5cae041c228277a98fb` | Variant，屬於 `MLB/DET` | ⚠️ 尚未填寫 Description |
| MLB/DET / Property 1=Home Team | `50440a42058e0b2299744bd37b2149610e7921bb` | Variant，屬於 `MLB/DET` | ⚠️ 尚未填寫 Description |
| MLB/HOU / Property 1=Away Team | `bf4d1aa99007e047af389809b7284ca23a97599d` | Variant，屬於 `MLB/HOU` | ⚠️ 尚未填寫 Description |
| MLB/HOU / Property 1=Home Team | `82e2be2de32c3298d679b7e44a0d443d13601745` | Variant，屬於 `MLB/HOU` | ⚠️ 尚未填寫 Description |
| MLB/KC / Property 1=Away Team | `21481e397a0b1de86999471dc097745e15b3cc08` | Variant，屬於 `MLB/KC` | ⚠️ 尚未填寫 Description |
| MLB/KC / Property 1=Home Team | `4e7ca37070738ddcc4a00ef80cbe58914bd6161c` | Variant，屬於 `MLB/KC` | ⚠️ 尚未填寫 Description |
| MLB/LAA / Property 1=Away Team | `0d344941a7d4466d91ce9bc3b0c8eb51732155db` | Variant，屬於 `MLB/LAA` | ⚠️ 尚未填寫 Description |
| MLB/LAA / Property 1=Home Team | `845b83805e5334c1c3909540630f287a15559539` | Variant，屬於 `MLB/LAA` | ⚠️ 尚未填寫 Description |
| MLB/LAD / Property 1=Away Team | `75b3c9fcea9127501e38c0cab128faa350b06610` | Variant，屬於 `MLB/LAD` | ⚠️ 尚未填寫 Description |
| MLB/LAD / Property 1=Home Team | `4234510c459107f45355f4a8d4e840d0cf6c64c0` | Variant，屬於 `MLB/LAD` | ⚠️ 尚未填寫 Description |
| MLB/MIA / Property 1=Away Team | `2e276b5cd7311d69491a25538e7f5d04cfe8a99d` | Variant，屬於 `MLB/MIA` | ⚠️ 尚未填寫 Description |
| MLB/MIA / Property 1=Home Team | `62f4dd50681f2f81b7a7d6deb183f0ebf5234f7c` | Variant，屬於 `MLB/MIA` | ⚠️ 尚未填寫 Description |
| MLB/MIL / Property 1=Away Team | `5efdf814fbe6580976eb5ce3a00ff6e4af195ced` | Variant，屬於 `MLB/MIL` | ⚠️ 尚未填寫 Description |
| MLB/MIL / Property 1=Home Team | `dc5dfcf24a6713de2cca3bbe8e86726f91109251` | Variant，屬於 `MLB/MIL` | ⚠️ 尚未填寫 Description |
| MLB/MIN / Property 1=Away Team | `993323dc96e170abdede6b10be3289d0b572a249` | Variant，屬於 `MLB/MIN` | ⚠️ 尚未填寫 Description |
| MLB/MIN / Property 1=Home Team | `8e27d8fae1c1fc5bc8c726864b9526793d013412` | Variant，屬於 `MLB/MIN` | ⚠️ 尚未填寫 Description |
| MLB/NYM / Property 1=Away Team | `f8cd0c1545a2c9b80f96fc34c749c3547bf212a9` | Variant，屬於 `MLB/NYM` | ⚠️ 尚未填寫 Description |
| MLB/NYM / Property 1=Home Team | `3fb71378ca743d51d43920fc99292bf7d2ae0e29` | Variant，屬於 `MLB/NYM` | ⚠️ 尚未填寫 Description |
| MLB/NYY / Property 1=Away Team | `b86a1752b342e68b63397491d759423f29ddf245` | Variant，屬於 `MLB/NYY` | ⚠️ 尚未填寫 Description |
| MLB/NYY / Property 1=Home Team | `ec928386367476cf1922aff8cbb45b803d79b5aa` | Variant，屬於 `MLB/NYY` | ⚠️ 尚未填寫 Description |
| MLB/OAK / Property 1=Away Team | `fdbcd06974f0ae8b9d955c882baa69fbb5d8bf38` | Variant，屬於 `MLB/OAK` | ⚠️ 尚未填寫 Description |
| MLB/OAK / Property 1=Home Team | `4d0e2ebbf28347db26dc156037367db7edb7434d` | Variant，屬於 `MLB/OAK` | ⚠️ 尚未填寫 Description |
| MLB/PHI / Property 1=Away Team | `6b633c537390dd4a3b0ec02a5bbc89d7bd2cb51c` | Variant，屬於 `MLB/PHI` | ⚠️ 尚未填寫 Description |
| MLB/PHI / Property 1=Home Team | `b022ec15304297015686a49c77d42d36e715554f` | Variant，屬於 `MLB/PHI` | ⚠️ 尚未填寫 Description |
| MLB/PIT / Property 1=Away Team | `83625a926a554b32ffd4949c23a1dead54ac1e50` | Variant，屬於 `MLB/PIT` | ⚠️ 尚未填寫 Description |
| MLB/PIT / Property 1=Home Team | `e3bfeaac0082284143c7bf4c0d304176f2ed6baa` | Variant，屬於 `MLB/PIT` | ⚠️ 尚未填寫 Description |
| MLB/SD / Property 1=Away Team | `5b2bc8dcc84a51ce03b0fd5ac371c5289bc13322` | Variant，屬於 `MLB/SD` | ⚠️ 尚未填寫 Description |
| MLB/SD / Property 1=Home Team | `c092fa431237fafac9351d5c4ff2c527f99488bd` | Variant，屬於 `MLB/SD` | ⚠️ 尚未填寫 Description |
| MLB/SEA / Property 1=Away Team | `f5186db78dac5c4d72e2959e5b0085152db2f985` | Variant，屬於 `MLB/SEA` | ⚠️ 尚未填寫 Description |
| MLB/SEA / Property 1=Home Team | `200e9b5788ab9205144176d296596d91c41172e5` | Variant，屬於 `MLB/SEA` | ⚠️ 尚未填寫 Description |
| MLB/SF / Property 1=Away Team | `60590577bff8576ae58a0898da09aaa9317d875b` | Variant，屬於 `MLB/SF` | ⚠️ 尚未填寫 Description |
| MLB/SF / Property 1=Home Team | `8aa6d559f3569c32d67b543d08ff6a36c008ea8f` | Variant，屬於 `MLB/SF` | ⚠️ 尚未填寫 Description |
| MLB/STL / Property 1=Away Team | `41ddde41ef0c1b40c4ab63fa4f1ffe01477315f4` | Variant，屬於 `MLB/STL` | ⚠️ 尚未填寫 Description |
| MLB/STL / Property 1=Home Team | `d88823ac557fcdb3ae05655c1429707530e0af06` | Variant，屬於 `MLB/STL` | ⚠️ 尚未填寫 Description |
| MLB/TB / Property 1=Away Team | `db09de2718c9e253399e2e51d02b583e1d475b83` | Variant，屬於 `MLB/TB` | ⚠️ 尚未填寫 Description |
| MLB/TB / Property 1=Home Team | `5a49418da92e4885921a087621da7a56dc9cdbec` | Variant，屬於 `MLB/TB` | ⚠️ 尚未填寫 Description |
| MLB/TEX / Property 1=Away Team | `86fea4627c7219b38e6316b548164aab7f141251` | Variant，屬於 `MLB/TEX` | ⚠️ 尚未填寫 Description |
| MLB/TEX / Property 1=Home Team | `6b9de333c4ee0b0391c336efbdac7e5ced3157de` | Variant，屬於 `MLB/TEX` | ⚠️ 尚未填寫 Description |
| MLB/TOR / Property 1=Away Team | `8b8818553199ef9af445f8b919283829c7642862` | Variant，屬於 `MLB/TOR` | ⚠️ 尚未填寫 Description |
| MLB/TOR / Property 1=Home Team | `cde2b26d4a54c279e281ad12df99cbde84e64558` | Variant，屬於 `MLB/TOR` | ⚠️ 尚未填寫 Description |
| MLB/WSH / Property 1=Away Team | `1dfb0745a4c88b506cf7d5d241458c42ee1800e1` | Variant，屬於 `MLB/WSH` | ⚠️ 尚未填寫 Description |
| MLB/WSH / Property 1=Home Team | `4cfeb7a3fb2c02ec47e6fb3f9dfa07c86c4c311d` | Variant，屬於 `MLB/WSH` | ⚠️ 尚未填寫 Description |
| NBA/ATL / Property 1=Away Team | `00b04e7fea53026da9e37e9e052168780450f2c2` | Variant，屬於 `NBA/ATL` | ⚠️ 尚未填寫 Description |
| NBA/ATL / Property 1=Home Team | `b5441c5585a7ddc4ee6fa700818078035fe8ca59` | Variant，屬於 `NBA/ATL` | ⚠️ 尚未填寫 Description |
| NBA/BKN / Property 1=Away Team | `a90762635a3c8a999eede9d9753423b8c72d784b` | Variant，屬於 `NBA/BKN` | ⚠️ 尚未填寫 Description |
| NBA/BKN / Property 1=Home Team | `f5b7ac79fb8f817a578ac15089537d57dbb8c2c5` | Variant，屬於 `NBA/BKN` | ⚠️ 尚未填寫 Description |
| NBA/BOS / Property 1=Away Team | `2e9303d886eb5a847c319b6a8921214cc4e381d7` | Variant，屬於 `NBA/BOS` | ⚠️ 尚未填寫 Description |
| NBA/BOS / Property 1=Home Team | `cc13a757361bbb87dd633014b8479777f685655d` | Variant，屬於 `NBA/BOS` | ⚠️ 尚未填寫 Description |
| NBA/CHA / Property 1=Away Team | `c98aa6c67e345c887db2eb238c8e333678e8455b` | Variant，屬於 `NBA/CHA` | ⚠️ 尚未填寫 Description |
| NBA/CHA / Property 1=Home Team | `380a42c5ccfc06964e03ccce78175617b27e39da` | Variant，屬於 `NBA/CHA` | ⚠️ 尚未填寫 Description |
| NBA/CHI / Property 1=Away Team | `d35319906aeb53632d933ed52bc8634e4f0196c6` | Variant，屬於 `NBA/CHI` | ⚠️ 尚未填寫 Description |
| NBA/CHI / Property 1=Home Team | `2a8c800580ffec7523776b580d759ff4e1dde32a` | Variant，屬於 `NBA/CHI` | ⚠️ 尚未填寫 Description |
| NBA/CLE / Property 1=Away Team | `63f7e104c367543eebec0ed727f8758ad2c6d8bf` | Variant，屬於 `NBA/CLE` | ⚠️ 尚未填寫 Description |
| NBA/CLE / Property 1=Home Team | `4ead29f68b527746892736de8a7853100e7c70a9` | Variant，屬於 `NBA/CLE` | ⚠️ 尚未填寫 Description |
| NBA/DAL / Property 1=Away Team | `7c278f2b3b4677fecf6117665cba3a3199f4077c` | Variant，屬於 `NBA/DAL` | ⚠️ 尚未填寫 Description |
| NBA/DAL / Property 1=Home Team | `22a3b5c85fec64f42106832fcc2c4b5f72ab84b5` | Variant，屬於 `NBA/DAL` | ⚠️ 尚未填寫 Description |
| NBA/DEN / Property 1=Away Team | `80bb1641f50b59b012b05c9874a7005c3ddc0f5a` | Variant，屬於 `NBA/DEN` | ⚠️ 尚未填寫 Description |
| NBA/DEN / Property 1=Home Team | `1619f2c651cd3436bb815f2f510d7d856d7e855b` | Variant，屬於 `NBA/DEN` | ⚠️ 尚未填寫 Description |
| NBA/DET / Property 1=Away Team | `281059d5f4f954262dedd7ee88c5131ad41f798b` | Variant，屬於 `NBA/DET` | ⚠️ 尚未填寫 Description |
| NBA/DET / Property 1=Home Team | `36848e8ae09311737d12d00b3c45fb8988dfa1b7` | Variant，屬於 `NBA/DET` | ⚠️ 尚未填寫 Description |
| NBA/GSW / Property 1=Away Team | `54bf89abf7fa750732c2dc060aed9809e187d6ec` | Variant，屬於 `NBA/GSW` | ⚠️ 尚未填寫 Description |
| NBA/GSW / Property 1=Home Team | `eef48fe465ddb37655d8a8180fbb4326e3e3a712` | Variant，屬於 `NBA/GSW` | ⚠️ 尚未填寫 Description |
| NBA/HOU / Property 1=Away Team | `a2d133329905790e41b5d9ee5a146609d81162ae` | Variant，屬於 `NBA/HOU` | ⚠️ 尚未填寫 Description |
| NBA/HOU / Property 1=Home Team | `ae799d6edd856286183da26d7d94ec02f682ca50` | Variant，屬於 `NBA/HOU` | ⚠️ 尚未填寫 Description |
| NBA/IND / Property 1=Away Team | `cb965840e9790333c8667469e80f49f871c77827` | Variant，屬於 `NBA/IND` | ⚠️ 尚未填寫 Description |
| NBA/IND / Property 1=Home Team | `fcefc6f35874e9fb31f895d2d63c0fa6d72c1834` | Variant，屬於 `NBA/IND` | ⚠️ 尚未填寫 Description |
| NBA/LAC / Property 1=Away Team | `46a64be0998ce53efe965717df0d63de7098f237` | Variant，屬於 `NBA/LAC` | ⚠️ 尚未填寫 Description |
| NBA/LAC / Property 1=Home Team | `648b3a12fe01d0a66c769089cf42d19d1d5c7f89` | Variant，屬於 `NBA/LAC` | ⚠️ 尚未填寫 Description |
| NBA/LAL / Property 1=Away Team | `4c1f1f3f498ce7e42cb772572fe4e3c234a974dd` | Variant，屬於 `NBA/LAL` | ⚠️ 尚未填寫 Description |
| NBA/LAL / Property 1=Home Team | `1403ece1abe6f7dac736a84b545085da5bb43807` | Variant，屬於 `NBA/LAL` | ⚠️ 尚未填寫 Description |
| NBA/MEM / Property 1=Away Team | `6a1acec168d6921d96f8c84aa10b88d805bfbdd8` | Variant，屬於 `NBA/MEM` | ⚠️ 尚未填寫 Description |
| NBA/MEM / Property 1=Home Team | `5e4d9e9fc73b4b80cb9347a5c046d0ca779fe186` | Variant，屬於 `NBA/MEM` | ⚠️ 尚未填寫 Description |
| NBA/MIA / Property 1=Away Team | `ffc8bf92adc0f7d19362443003f6ff54f74f3b14` | Variant，屬於 `NBA/MIA` | ⚠️ 尚未填寫 Description |
| NBA/MIA / Property 1=Home Team | `355ae17e55af955ba421e882ca2dfcc19871932a` | Variant，屬於 `NBA/MIA` | ⚠️ 尚未填寫 Description |
| NBA/MIL / Property 1=Away Team | `de054760a9caa38c206db01028aad05a488dcbc5` | Variant，屬於 `NBA/MIL` | ⚠️ 尚未填寫 Description |
| NBA/MIL / Property 1=Home Team | `c4b79ad6a5f1086ec6fd453946f697b4cc8ffd7d` | Variant，屬於 `NBA/MIL` | ⚠️ 尚未填寫 Description |
| NBA/MIN / Property 1=Away Team | `3c6b293a86c2a81c4b0a4e55faaa901162d1e443` | Variant，屬於 `NBA/MIN` | ⚠️ 尚未填寫 Description |
| NBA/MIN / Property 1=Home Team | `262b84e9ed49eae6f239e7d11033de4e7cc48756` | Variant，屬於 `NBA/MIN` | ⚠️ 尚未填寫 Description |
| NBA/NOP / Property 1=Away Team | `13f410b4ad7566151b6c8696b0da7b10653034a3` | Variant，屬於 `NBA/NOP` | ⚠️ 尚未填寫 Description |
| NBA/NOP / Property 1=Home Team | `12103dd8c360cc7ca13da97b7e62a076705c15eb` | Variant，屬於 `NBA/NOP` | ⚠️ 尚未填寫 Description |
| NBA/NYK / Property 1=Away Team | `8492a3cdac9bcca200c64dc11e04b162fa3e4925` | Variant，屬於 `NBA/NYK` | ⚠️ 尚未填寫 Description |
| NBA/NYK / Property 1=Home Team | `e00781e8de44c02ea7f91e75348b055293d68169` | Variant，屬於 `NBA/NYK` | ⚠️ 尚未填寫 Description |
| NBA/OKC / Property 1=Away Team | `d9785ca7f601349e5099839616b9028511c60160` | Variant，屬於 `NBA/OKC` | ⚠️ 尚未填寫 Description |
| NBA/OKC / Property 1=Home Team | `6cf9c14cf938c237842b32cea6e60ec1e328c52f` | Variant，屬於 `NBA/OKC` | ⚠️ 尚未填寫 Description |
| NBA/ORL / Property 1=Away Team | `a502130f21b02176002a484a4f98a58f59c97afc` | Variant，屬於 `NBA/ORL` | ⚠️ 尚未填寫 Description |
| NBA/ORL / Property 1=Home Team | `655b59a01855681daddb0fe5cab7a05dfd1c22a0` | Variant，屬於 `NBA/ORL` | ⚠️ 尚未填寫 Description |
| NBA/PHI / Property 1=Away Team | `fbe941e862bce61f5ecc05f672bfbcd4b456332b` | Variant，屬於 `NBA/PHI` | ⚠️ 尚未填寫 Description |
| NBA/PHI / Property 1=Home Team | `ead9106c500c47e967f10b0ea71b58dac0af658b` | Variant，屬於 `NBA/PHI` | ⚠️ 尚未填寫 Description |
| NBA/PHX / Property 1=Away Team | `90c8b510f871f7def8ba761e46ee8c4771b02c6b` | Variant，屬於 `NBA/PHX` | ⚠️ 尚未填寫 Description |
| NBA/PHX / Property 1=Home Team | `bac868a3592c4128fa69200f78bf7cd459161917` | Variant，屬於 `NBA/PHX` | ⚠️ 尚未填寫 Description |
| NBA/POR / Property 1=Away Team | `e77c2a679e92aa9bef8840bd95eafac4bf4e50ce` | Variant，屬於 `NBA/POR` | ⚠️ 尚未填寫 Description |
| NBA/POR / Property 1=Home Team | `35c4027fdafe0f6097fe802094e04beae2cdde74` | Variant，屬於 `NBA/POR` | ⚠️ 尚未填寫 Description |
| NBA/SAC / Property 1=Away Team | `fd10bf01dfca29d7991a8457168a8ddbed836e16` | Variant，屬於 `NBA/SAC` | ⚠️ 尚未填寫 Description |
| NBA/SAC / Property 1=Home Team | `e33a4e71a7dafe40b1fab2ff6b9ee56e3b6510c6` | Variant，屬於 `NBA/SAC` | ⚠️ 尚未填寫 Description |
| NBA/SAS / Property 1=Away Team | `9c8e8dd9a9dc757804817917d1bbd4fc2597d49b` | Variant，屬於 `NBA/SAS` | ⚠️ 尚未填寫 Description |
| NBA/SAS / Property 1=Home Team | `2ef5a0af12eb44dc349efac2cb980541ab806733` | Variant，屬於 `NBA/SAS` | ⚠️ 尚未填寫 Description |
| NBA/TOR / Property 1=Away Team | `b656d701bb25820edf65ac7ad48b48a385df84e9` | Variant，屬於 `NBA/TOR` | ⚠️ 尚未填寫 Description |
| NBA/TOR / Property 1=Home Team | `0ad9c02ee44175b6aa834b8e62f0e5939a40e123` | Variant，屬於 `NBA/TOR` | ⚠️ 尚未填寫 Description |
| NBA/UTA / Property 1=Away Team | `ec49515f4832aa1f844062196e69c55806a25608` | Variant，屬於 `NBA/UTA` | ⚠️ 尚未填寫 Description |
| NBA/UTA / Property 1=Home Team | `6b3b67ad715127f49dea5829a6ae0b0631502d1a` | Variant，屬於 `NBA/UTA` | ⚠️ 尚未填寫 Description |
| NBA/WAS / Property 1=Away Team | `65dac31fa621c05d32d59ec2c28d045e7a51067d` | Variant，屬於 `NBA/WAS` | ⚠️ 尚未填寫 Description |
| NBA/WAS / Property 1=Home Team | `053adc8faf3e70586d43e670aac8c3a263223c95` | Variant，屬於 `NBA/WAS` | ⚠️ 尚未填寫 Description |
| NE | `72633b0be0e0f3f696264f83b7a533798b74d65b` | COMPONENT | ⚠️ 尚未填寫 Description |
| NE | `c141f86752eb94f3a17b473f1984844135053361` | COMPONENT | ⚠️ 尚未填寫 Description |
| NFL/ARI / Property 1=Away Team | `b417eb1d851af3f3e486f19624da43f368bfddcd` | Variant，屬於 `NFL/ARI` | ⚠️ 尚未填寫 Description |
| NFL/ARI / Property 1=Home Team | `1886dfec1f8c518de8835492edd42f10387f488b` | Variant，屬於 `NFL/ARI` | ⚠️ 尚未填寫 Description |
| NFL/ATL / Property 1=Away Team | `0a6d6fda8ff3d29149d003c4a6d27ca3deadf533` | Variant，屬於 `NFL/ATL` | ⚠️ 尚未填寫 Description |
| NFL/ATL / Property 1=Home Team | `87b6235a15b644bf64bac92c5678e28832472ae8` | Variant，屬於 `NFL/ATL` | ⚠️ 尚未填寫 Description |
| NFL/BAL / Property 1=Away Team | `9650c2077c7e64c779612f8420a7de78ffcb1b87` | Variant，屬於 `NFL/BAL` | ⚠️ 尚未填寫 Description |
| NFL/BAL / Property 1=Away Team | `c426243030cb15eaae9f4c13ad1a00864cd1787d` | Variant，屬於 `NFL/BAL` | ⚠️ 尚未填寫 Description |
| NFL/BAL / Property 1=Home Team | `2105b489dd79f3b471d8f58dac039591b45c56c6` | Variant，屬於 `NFL/BAL` | ⚠️ 尚未填寫 Description |
| NFL/BAL / Property 1=Home Team | `502cde1b677e3be5d4b39860e0a3b0953e5f896f` | Variant，屬於 `NFL/BAL` | ⚠️ 尚未填寫 Description |
| NFL/BUF / Property 1=Away Team | `3a44ad69bfb9566f5ce8cf326b347c68d90a9e6a` | Variant，屬於 `NFL/BUF` | ⚠️ 尚未填寫 Description |
| NFL/BUF / Property 1=Home Team | `0c55c39b4a99e92a18ecbd2636c8c7bbf4f21f4c` | Variant，屬於 `NFL/BUF` | ⚠️ 尚未填寫 Description |
| NFL/CAR / Property 1=Away Team | `0c9dc93ec6d44d917fff893b0c8f4844688e40bf` | Variant，屬於 `NFL/CAR` | ⚠️ 尚未填寫 Description |
| NFL/CAR / Property 1=Home Team | `7db156d3dd2bdf3d6e4965b186e46ae155a0f9ed` | Variant，屬於 `NFL/CAR` | ⚠️ 尚未填寫 Description |
| NFL/CHI / Property 1=Away Team | `8dfc3c676eaea8519901ccb1c5bc8879744e30e2` | Variant，屬於 `NFL/CHI` | ⚠️ 尚未填寫 Description |
| NFL/CHI / Property 1=Home Team | `f6da297a2c84b297dc055e1c02942eb22e35934b` | Variant，屬於 `NFL/CHI` | ⚠️ 尚未填寫 Description |
| NFL/CLE / Property 1=Away Team | `3f41707b0537d77281cfe2ec3006e13d62a934e2` | Variant，屬於 `NFL/CLE` | ⚠️ 尚未填寫 Description |
| NFL/CLE / Property 1=Home Team | `895ae6c702f1270f55282740ca91659039140f5b` | Variant，屬於 `NFL/CLE` | ⚠️ 尚未填寫 Description |
| NFL/DAL / Property 1=Away Team | `aa264187a605f4eac17046023ea176d8dacc057c` | Variant，屬於 `NFL/DAL` | ⚠️ 尚未填寫 Description |
| NFL/DAL / Property 1=Home Team | `36819298213827515d3ee153da766a05359a5986` | Variant，屬於 `NFL/DAL` | ⚠️ 尚未填寫 Description |
| NFL/DEN / Property 1=Away Team | `dec9249c6f9c3328f91539f900bb70fd23720874` | Variant，屬於 `NFL/DEN` | ⚠️ 尚未填寫 Description |
| NFL/DEN / Property 1=Home Team | `d4e6f964fb181ec4f3a52433dc896d287211124e` | Variant，屬於 `NFL/DEN` | ⚠️ 尚未填寫 Description |
| NFL/DET / Property 1=Away Team | `c61d9483b57b983b9cd3e65fe83b33889d604984` | Variant，屬於 `NFL/DET` | ⚠️ 尚未填寫 Description |
| NFL/DET / Property 1=Home Team | `8ea3eb234c93f00f7e97d40d32bad24211e6f4e0` | Variant，屬於 `NFL/DET` | ⚠️ 尚未填寫 Description |
| NFL/GB / Property 1=Away Team | `465dc165235798b32587331b0504864033242be2` | Variant，屬於 `NFL/GB` | ⚠️ 尚未填寫 Description |
| NFL/GB / Property 1=Home Team | `309939945c8403c5ee2c4285535bd1bae8705202` | Variant，屬於 `NFL/GB` | ⚠️ 尚未填寫 Description |
| NFL/HOU / Property 1=Away Team | `fed67afdb782da449ed1fc404c7d93cecae5bc5e` | Variant，屬於 `NFL/HOU` | ⚠️ 尚未填寫 Description |
| NFL/HOU / Property 1=Home Team | `faed78f92df17af1550c9efbfa207a09f8846fd7` | Variant，屬於 `NFL/HOU` | ⚠️ 尚未填寫 Description |
| NFL/IND / Property 1=Away Team | `effa7ae5e72c4b506b532ddfd40e38d609db02cb` | Variant，屬於 `NFL/IND` | ⚠️ 尚未填寫 Description |
| NFL/IND / Property 1=Home Team | `d78ea9f1faf54b444d47360f602ad17926d9692d` | Variant，屬於 `NFL/IND` | ⚠️ 尚未填寫 Description |
| NFL/JAX / Property 1=Away Team | `b87f86b2719b050dda5ade4fe61fec3583bf648a` | Variant，屬於 `NFL/JAX` | ⚠️ 尚未填寫 Description |
| NFL/JAX / Property 1=Home Team | `32ec623c64b35e9dd1afef979ad2fe59249013d7` | Variant，屬於 `NFL/JAX` | ⚠️ 尚未填寫 Description |
| NFL/KC / Property 1=Away Team | `31fba90e24d74cafa398d09d673290bf65b495d5` | Variant，屬於 `NFL/KC` | ⚠️ 尚未填寫 Description |
| NFL/KC / Property 1=Home Team | `0bf96713d601e7dac2d86da2784609d1a98ad468` | Variant，屬於 `NFL/KC` | ⚠️ 尚未填寫 Description |
| NFL/LAC / Property 1=Away Team | `1155387e40dc01f6220b2e05ce1be0792fc76a46` | Variant，屬於 `NFL/LAC` | ⚠️ 尚未填寫 Description |
| NFL/LAC / Property 1=Home Team | `21510b2af75b4e7111f82693ea6c4bbf2d652890` | Variant，屬於 `NFL/LAC` | ⚠️ 尚未填寫 Description |
| NFL/LAR / Property 1=Away Team | `dd77560fa7f6594bea50d40252c35bdd84a1b289` | Variant，屬於 `NFL/LAR` | ⚠️ 尚未填寫 Description |
| NFL/LAR / Property 1=Home Team | `d7f7ddabc56b03f82411b0e1d2f58677dbc3b08d` | Variant，屬於 `NFL/LAR` | ⚠️ 尚未填寫 Description |
| NFL/LV / Property 1=Away Team | `71e3228e7ba263100b755cd559e58caf2125aae1` | Variant，屬於 `NFL/LV` | ⚠️ 尚未填寫 Description |
| NFL/LV / Property 1=Home Team | `ac9bb12862bb70bad44f9ef907d53a7346a9f1c2` | Variant，屬於 `NFL/LV` | ⚠️ 尚未填寫 Description |
| NFL/MIA / Property 1=Away Team | `2ecf2faf4c13db154d36e09a86311d5723fe9887` | Variant，屬於 `NFL/MIA` | ⚠️ 尚未填寫 Description |
| NFL/MIA / Property 1=Home Team | `710e83de32315b6995b4829611ec5a26f3cbbeee` | Variant，屬於 `NFL/MIA` | ⚠️ 尚未填寫 Description |
| NFL/MIN / Property 1=Away Team | `e92b96298d376a547d3a90437b20e294e50becb1` | Variant，屬於 `NFL/MIN` | ⚠️ 尚未填寫 Description |
| NFL/MIN / Property 1=Home Team | `68d87ec08228e252f06c67d0d6e6b4bd5708d607` | Variant，屬於 `NFL/MIN` | ⚠️ 尚未填寫 Description |
| NFL/NE / Property 1=Away Team | `314a6b8616b1b61a5118d94348523a3c1a4f5b0c` | Variant，屬於 `NFL/NE` | ⚠️ 尚未填寫 Description |
| NFL/NE / Property 1=Home Team | `e04317c2a0f29610fdc5b6d47618c6373110aa43` | Variant，屬於 `NFL/NE` | ⚠️ 尚未填寫 Description |
| NFL/NO / Property 1=Away Team | `1742116ac454813cf8b7bdd5b40d6485b2ebdbfe` | Variant，屬於 `NFL/NO` | ⚠️ 尚未填寫 Description |
| NFL/NO / Property 1=Home Team | `ea7a03b377ad9ff6675e21dbfa74568be4bc2aab` | Variant，屬於 `NFL/NO` | ⚠️ 尚未填寫 Description |
| NFL/NYG / Property 1=Away Team | `cd30bf5606ca4e499e3214ce5d8ab6bd389a26f1` | Variant，屬於 `NFL/NYG` | ⚠️ 尚未填寫 Description |
| NFL/NYG / Property 1=Home Team | `b8f3695a2edc2922fa9625803b8c3181fa1e824e` | Variant，屬於 `NFL/NYG` | ⚠️ 尚未填寫 Description |
| NFL/NYJ / Property 1=Away Team | `59e1aec6d72bd9cf494524fbac4cb6fb3d328884` | Variant，屬於 `NFL/NYJ` | ⚠️ 尚未填寫 Description |
| NFL/NYJ / Property 1=Home Team | `5c4da93927f1c2d9bbe4702c8c0a290bceea5573` | Variant，屬於 `NFL/NYJ` | ⚠️ 尚未填寫 Description |
| NFL/PHI / Property 1=Away Team | `41cb8b770445b8764303f2a56cca1fd39f668704` | Variant，屬於 `NFL/PHI` | ⚠️ 尚未填寫 Description |
| NFL/PHI / Property 1=Home Team | `77783b8d043e2a75b6457446c0d8cabf1e79a91b` | Variant，屬於 `NFL/PHI` | ⚠️ 尚未填寫 Description |
| NFL/PIT / Property 1=Away Team | `8d63ff1537084ab21bc535914d836f536dd920c8` | Variant，屬於 `NFL/PIT` | ⚠️ 尚未填寫 Description |
| NFL/PIT / Property 1=Home Team | `1206642a5b079d1c9d8b4f2b30c920d49e20a213` | Variant，屬於 `NFL/PIT` | ⚠️ 尚未填寫 Description |
| NFL/SEA / Property 1=Away Team | `6d322ea8bc735fd9b2653af711b67d730eb94396` | Variant，屬於 `NFL/SEA` | ⚠️ 尚未填寫 Description |
| NFL/SEA / Property 1=Home Team | `9c3f5d9bc745e551843ab269a4f01317acad8e66` | Variant，屬於 `NFL/SEA` | ⚠️ 尚未填寫 Description |
| NFL/SF / Property 1=Away Team | `01b7fbff46a8146187375948d324874182741fae` | Variant，屬於 `NFL/SF` | ⚠️ 尚未填寫 Description |
| NFL/SF / Property 1=Home Team | `4d7a0df24860397084f389a3e578c1381005add5` | Variant，屬於 `NFL/SF` | ⚠️ 尚未填寫 Description |
| NFL/STL / Property 1=Away Team | `e25d5c17ff09a53b9c340b36ac251ca77a99c84d` | Variant，屬於 `NFL/STL` | ⚠️ 尚未填寫 Description |
| NFL/STL / Property 1=Home Team | `65ffdbcf6d069a398fd77bd568d332f0667ba697` | Variant，屬於 `NFL/STL` | ⚠️ 尚未填寫 Description |
| NFL/TB / Property 1=Away Team | `f92c95def124676a289a13f0147b6a38b269d107` | Variant，屬於 `NFL/TB` | ⚠️ 尚未填寫 Description |
| NFL/TB / Property 1=Home Team | `38b804df2df9c6a5c32287179728f7cfc5262b19` | Variant，屬於 `NFL/TB` | ⚠️ 尚未填寫 Description |
| NFL/TEN / Property 1=Away Team | `2fbe146e3b8a5b76fd78111f47e1ca6f62d98f39` | Variant，屬於 `NFL/TEN` | ⚠️ 尚未填寫 Description |
| NFL/TEN / Property 1=Home Team | `20c9b1bd25c683643bca12c3460557045004cee3` | Variant，屬於 `NFL/TEN` | ⚠️ 尚未填寫 Description |
| NFL/WAS / Property 1=Away Team | `935b67d9a0c06282be5be9328bd1f703a77f0332` | Variant，屬於 `NFL/WAS` | ⚠️ 尚未填寫 Description |
| NFL/WAS / Property 1=Home Team | `65c12432fa00c199dd207dcc063678592ed77384` | Variant，屬於 `NFL/WAS` | ⚠️ 尚未填寫 Description |
| NO | `9e1ad1e03ed87bd59ca81c782ff00014ee91010c` | COMPONENT | ⚠️ 尚未填寫 Description |
| NO | `e3a87b101cd6ba7f4854db039e928aab46fbf16b` | COMPONENT | ⚠️ 尚未填寫 Description |
| NOP | `ed0f05c6471dbd7c39e1173c224211fc529f5400` | COMPONENT | ⚠️ 尚未填寫 Description |
| NOP | `c1f79b17a90d2531f221a904b9c5b73033d1de0d` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYG | `f5434ba292ca0fd97ac5377b69d048285672d11d` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYG | `d3fc686645a007d14f379c3db908f182855d0f6d` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYJ | `d4c4bb2f6c2e8373d5954d9de928bb8d36be8f45` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYJ | `8067b6559a40670fa62b724773f5a2fb1132dd1a` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYK | `729603189797df3ebd7c248ea617984014630e91` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYK | `b3d0ce964e83f2da77f653e0e0d67cbd6e2fa1df` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYM | `ca5f3df94ba8c78f32d2afdd3909b5220b5c3624` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYM | `929f0d17bddd6577a66879f288881db444589110` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYY | `8ef4d5f8ddaf364fcfb4652fa11a26655d086382` | COMPONENT | ⚠️ 尚未填寫 Description |
| NYY | `76b47a1e92527a42d675af20afae593e6a20ae5d` | COMPONENT | ⚠️ 尚未填寫 Description |
| OAK | `64fb0567b3ef88995bdee327e28533e8ceb4c75d` | COMPONENT | ⚠️ 尚未填寫 Description |
| OAK | `fc02ec4046d7cb57832bba8455b59c4f93149a92` | COMPONENT | ⚠️ 尚未填寫 Description |
| OKC | `c46fc9209fb04425d6e430b68bef3b74bd95045b` | COMPONENT | ⚠️ 尚未填寫 Description |
| OKC | `6c2cce16f6b507289115916621de470050bc3430` | COMPONENT | ⚠️ 尚未填寫 Description |
| ORL | `97267d819a0bfc489d54302a314bee21dd2c0eff` | COMPONENT | ⚠️ 尚未填寫 Description |
| ORL | `01267e34663a519ca3510d44967d129c46f29d0d` | COMPONENT | ⚠️ 尚未填寫 Description |
| PHI | `7eb8dbf9a59728398f5df622f5c7066c23af101f` | COMPONENT | ⚠️ 尚未填寫 Description |
| PHI | `94b09454453df628ca663a6fcfb9e77ee03b9f31` | COMPONENT | ⚠️ 尚未填寫 Description |
| PHI | `0d865d292d584a5235ed4f3f5c049b62e4416d0a` | COMPONENT | ⚠️ 尚未填寫 Description |
| PHI | `35d0c5b474e4b8ecff326873d3a1ff95f17c1bca` | COMPONENT | ⚠️ 尚未填寫 Description |
| PHI | `3444c29a099fcd12608cd0cb84412f4e93782142` | COMPONENT | ⚠️ 尚未填寫 Description |
| PHI | `f1303a05729b886b09dd0c4339528706a6b63472` | COMPONENT | ⚠️ 尚未填寫 Description |
| PHX | `0d97eb5bb76c94490f8694063b5916d23f293704` | COMPONENT | ⚠️ 尚未填寫 Description |
| PHX | `a90ac8bf4ffc982caaf695b48efcb5073cf59c82` | COMPONENT | ⚠️ 尚未填寫 Description |
| PIT | `a8f40aafe01699954272417553781447cae67802` | COMPONENT | ⚠️ 尚未填寫 Description |
| PIT | `1b225f78b428cd532f22a59b940bdcb07f0d75a5` | COMPONENT | ⚠️ 尚未填寫 Description |
| PIT | `92e25e0c2d5262b2ff79a65263e809ce064771c6` | COMPONENT | ⚠️ 尚未填寫 Description |
| PIT | `a4d1ccb2679f23dc352c059c0f0a2dd66ae2cab4` | COMPONENT | ⚠️ 尚未填寫 Description |
| POR | `6a753bdb480cd6b66bddff192621041c2b7e2a42` | COMPONENT | ⚠️ 尚未填寫 Description |
| POR | `3289dff7f03d277875c9e258beb042d9bba9394d` | COMPONENT | ⚠️ 尚未填寫 Description |
| SAC | `ac36e5b9763a532481c0694da04d4539f9a8f494` | COMPONENT | ⚠️ 尚未填寫 Description |
| SAC | `d1617876f906f4d8cb10c73da6c254f89ef58a2f` | COMPONENT | ⚠️ 尚未填寫 Description |
| SAS | `803dac3a44851784a7fc98f4769f71f17b9593f6` | COMPONENT | ⚠️ 尚未填寫 Description |
| SAS | `e08b8d9012e54171d0677f00d57211b58b5286c2` | COMPONENT | ⚠️ 尚未填寫 Description |
| SD | `65ba482c599c13d04354dd18cc284d76f5c9daa4` | COMPONENT | ⚠️ 尚未填寫 Description |
| SD | `2d808219364d4879ed8d5d678675e2c6efd7bb27` | COMPONENT | ⚠️ 尚未填寫 Description |
| SEA | `4ca1005597f38d7a2f8f68a52c744ef2d6dfd09d` | COMPONENT | ⚠️ 尚未填寫 Description |
| SEA | `da3197f461fafb99d867076ab80de9f2636ab404` | COMPONENT | ⚠️ 尚未填寫 Description |
| SEA | `4aae2ccb40577b938031ce42f4b9b20b551b0399` | COMPONENT | ⚠️ 尚未填寫 Description |
| SEA | `75a51c60f904ee238aabbb982735f4a159c77f8a` | COMPONENT | ⚠️ 尚未填寫 Description |
| SF | `5affd50b24377a35aaf700a5d6d79a577f15a060` | COMPONENT | ⚠️ 尚未填寫 Description |
| SF | `a1a04d18631d1ffac819863a61ed3a931b304674` | COMPONENT | ⚠️ 尚未填寫 Description |
| SF | `17250ea77d2f78b6511f749ff0861ceebec187a7` | COMPONENT | ⚠️ 尚未填寫 Description |
| SF | `f686f2d3597d6abf51a1ba5b4ba257665cee7df6` | COMPONENT | ⚠️ 尚未填寫 Description |
| STL | `686592d574bd96f5d0e564081c3729e1ad5ac20f` | COMPONENT | ⚠️ 尚未填寫 Description |
| STL | `2858f73e828e31653e19cec29ec9d2a94be44f15` | COMPONENT | ⚠️ 尚未填寫 Description |
| STL | `58da749cf7da2d11f9f337bf662ff5b075daed81` | COMPONENT | ⚠️ 尚未填寫 Description |
| STL | `2fc911dd51dd7da3cec55c6091e69f120e53fe98` | COMPONENT | ⚠️ 尚未填寫 Description |
| Table Header (Component) | `7168aea25fd1b3d23afe469d66a0a7df5dd6f1a0` | COMPONENT | ⚠️ 尚未填寫 Description |
| TB | `8d3d2018d3e7e30fed9fd8f8a55bbf07adfda809` | COMPONENT | ⚠️ 尚未填寫 Description |
| TB | `948521fe0369dc269b8e152affb3fae75d1cb8bb` | COMPONENT | ⚠️ 尚未填寫 Description |
| TB | `af8d38466a105a796829419122b9464260d3c966` | COMPONENT | ⚠️ 尚未填寫 Description |
| TB | `7361f5ecfd06c60759ffc3488820d70bcedd006f` | COMPONENT | ⚠️ 尚未填寫 Description |
| TEN | `dc5d24b56e12d2d94bdf14e76f39558358cf0112` | COMPONENT | ⚠️ 尚未填寫 Description |
| TEN | `b6ba7ee6fe6d4daaadce6ae7b142d6124eadb6a4` | COMPONENT | ⚠️ 尚未填寫 Description |
| TEX | `f56f516289b97f6231380c672e7d298bf371a484` | COMPONENT | ⚠️ 尚未填寫 Description |
| TEX | `3cd81bb4bebf1190d30deef54d51e1908afe5ea7` | COMPONENT | ⚠️ 尚未填寫 Description |
| TOR | `9f25d64d02ac7dc3f05ced8a37fadd2d47e3e60d` | COMPONENT | ⚠️ 尚未填寫 Description |
| TOR | `882620a7684b2d9802992ab6228861c8ef688a5e` | COMPONENT | ⚠️ 尚未填寫 Description |
| TOR | `d2484462c3b920d4801a9565d3afccac04fc48f7` | COMPONENT | ⚠️ 尚未填寫 Description |
| TOR | `6a29967878dbb5af3314defff808973ad70f5ec0` | COMPONENT | ⚠️ 尚未填寫 Description |
| UTA | `c68c09988b60288a53c806762fb40c0218e853f2` | COMPONENT | ⚠️ 尚未填寫 Description |
| UTA | `99b506a760be4c9054be34eedd86ead5c59a1a8c` | COMPONENT | ⚠️ 尚未填寫 Description |
| WAS | `ac0e6e444088b3de700d6dedaed186b572f1e8aa` | COMPONENT | ⚠️ 尚未填寫 Description |
| WAS | `6d95fa694739b231fdd040612b3a7abc8d7cde8f` | COMPONENT | ⚠️ 尚未填寫 Description |
| WAS | `a1764668ee7f55a8b74064996f33b92073e96481` | COMPONENT | ⚠️ 尚未填寫 Description |
| WAS | `1f571b29811119a4d1d31b7c443007709c5b2f55` | COMPONENT | ⚠️ 尚未填寫 Description |
| WSH | `ad27c6ea9e37829d19195764d3c9b97ed4d04a42` | COMPONENT | ⚠️ 尚未填寫 Description |
| WSH | `8e8c966ded334710e82d206d3750bc249f024a20` | COMPONENT | ⚠️ 尚未填寫 Description |

### Sports Icon（548）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| all / Property 1=Default | `424a5a2e6e3f247bc33108de42f58f716f57678f` | Variant，屬於 `all` | ⚠️ 尚未填寫 Description |
| all / Property 1=Default | `72d7cc0cf6a6a0958de210acc719ce40977b2931` | Variant，屬於 `all` | ⚠️ 尚未填寫 Description |
| all / Property 1=Variant2 | `53ff1a6c461978f1a13baafdfeed078a80bd3cd8` | Variant，屬於 `all` | ⚠️ 尚未填寫 Description |
| all / Property 1=Variant2 | `107acaa5b728fe0211422beefb577637a1819c19` | Variant，屬於 `all` | ⚠️ 尚未填寫 Description |
| all / Property 1=Variant3 | `2387f07b26b90b3c18bc03e97b31df35a17cae8a` | Variant，屬於 `all` | ⚠️ 尚未填寫 Description |
| all / Property 1=Variant3 | `d117f8c60984e84b994c085ab7492d526e078b88` | Variant，屬於 `all` | ⚠️ 尚未填寫 Description |
| alpine_skiing / Styles=Filled | `0f409802bf236f1c38e26c371b63c9895e758ce8` | Variant，屬於 `alpine_skiing` | ⚠️ 尚未填寫 Description |
| alpine_skiing / Styles=Filled | `665ba2a61f5ca82f33094d8020a1f2186f657289` | Variant，屬於 `alpine_skiing` | ⚠️ 尚未填寫 Description |
| alpine_skiing / Styles=Line | `9b39072e67feda75a11f18f0363812d023a437cf` | Variant，屬於 `alpine_skiing` | ⚠️ 尚未填寫 Description |
| alpine_skiing / Styles=Line | `8dd2457d11d2fee81425c57a1d27bbd2c24abd70` | Variant，屬於 `alpine_skiing` | ⚠️ 尚未填寫 Description |
| archery / Styles=Filled | `8e0b9fc39cdac67b2451e10ff944481289fcf673` | Variant，屬於 `archery` | ⚠️ 尚未填寫 Description |
| archery / Styles=Filled | `9e8f9abb0478f22ab7a96466d0246e0bd5cd839a` | Variant，屬於 `archery` | ⚠️ 尚未填寫 Description |
| archery / Styles=Line | `1e696f1d4969147d1656a57986963ceed51ceb90` | Variant，屬於 `archery` | ⚠️ 尚未填寫 Description |
| archery / Styles=Line | `99bfc287c53e262def585d2793fc980ece412a31` | Variant，屬於 `archery` | ⚠️ 尚未填寫 Description |
| backbend / Styles=Filled | `f99770fab51ea2adae32fde5e7b283fe1c688cbe` | Variant，屬於 `backbend` | ⚠️ 尚未填寫 Description |
| backbend / Styles=Filled | `2b54171dbabf2274f3f8d71cbe0f4436e262988e` | Variant，屬於 `backbend` | ⚠️ 尚未填寫 Description |
| backbend / Styles=Line | `e5ae12499c7c5604a86b09c476cded82356f0595` | Variant，屬於 `backbend` | ⚠️ 尚未填寫 Description |
| backbend / Styles=Line | `5d08cf98fee556f3e70b38818af2a934fc6afeeb` | Variant，屬於 `backbend` | ⚠️ 尚未填寫 Description |
| badminton / Styles=Filled | `b53847b74f98dd7aaa25cb6d838326a3ea334d8b` | Variant，屬於 `badminton` | ⚠️ 尚未填寫 Description |
| badminton / Styles=Filled | `07f9c62566ae71b3f48310e52a50844525f3a3ca` | Variant，屬於 `badminton` | ⚠️ 尚未填寫 Description |
| badminton / Styles=Line | `286b4fb40d994c3e2680aaddc0b9635059e3a9ff` | Variant，屬於 `badminton` | ⚠️ 尚未填寫 Description |
| badminton / Styles=Line | `31da2226cdf33908417e6dec9c012c9a6e82d816` | Variant，屬於 `badminton` | ⚠️ 尚未填寫 Description |
| badminton_racket / Styles=Filled | `b65f5813274775d449dab7d2736c975cfae64d68` | Variant，屬於 `badminton_racket` | ⚠️ 尚未填寫 Description |
| badminton_racket / Styles=Filled | `df82891c5d1349254e755c13ee43bca063c25d6b` | Variant，屬於 `badminton_racket` | ⚠️ 尚未填寫 Description |
| badminton_racket / Styles=Line | `f9ef7b91929748dad3f04eceb33a8114e863de35` | Variant，屬於 `badminton_racket` | ⚠️ 尚未填寫 Description |
| badminton_racket / Styles=Line | `b31c52f9fb44a882bc2ca793b2b79db43e118acc` | Variant，屬於 `badminton_racket` | ⚠️ 尚未填寫 Description |
| barbells_01 / Styles=Filled | `c734ad7631766e8d3c0c12bf397b36f570d86d5c` | Variant，屬於 `barbells_01` | ⚠️ 尚未填寫 Description |
| barbells_01 / Styles=Filled | `23ab869da15499d424bafa93c00036c96edd0cd0` | Variant，屬於 `barbells_01` | ⚠️ 尚未填寫 Description |
| barbells_01 / Styles=Line | `dc5931b464d589b35dcb899cd0792a1342d1524e` | Variant，屬於 `barbells_01` | ⚠️ 尚未填寫 Description |
| barbells_01 / Styles=Line | `53bd40874d8cae1637e32439b5e1fe822d5e4979` | Variant，屬於 `barbells_01` | ⚠️ 尚未填寫 Description |
| barbells_02 / Styles=Filled | `a63bbc5128d8c8a1f3891fa6ec7ae265ce7d2b4a` | Variant，屬於 `barbells_02` | ⚠️ 尚未填寫 Description |
| barbells_02 / Styles=Filled | `8aceab9d5b6b4d10a90bc55944eeb8abe951feed` | Variant，屬於 `barbells_02` | ⚠️ 尚未填寫 Description |
| barbells_02 / Styles=Line | `81d4598c11d5f95893dedc9e119c843eb47584c7` | Variant，屬於 `barbells_02` | ⚠️ 尚未填寫 Description |
| barbells_02 / Styles=Line | `50585377d84c2defedecc819135fb2c67191a9ef` | Variant，屬於 `barbells_02` | ⚠️ 尚未填寫 Description |
| baseball / Styles=Filled | `3150c9d7ee80851b4f8c8788776e6b362dc1dd86` | Variant，屬於 `baseball` | ⚠️ 尚未填寫 Description |
| baseball / Styles=Filled | `d9ca8812a861852c957ef4132755353762e4d7ac` | Variant，屬於 `baseball` | ⚠️ 尚未填寫 Description |
| baseball / Styles=Line | `435f96fabba43094168a135995a04d8bee33ffd3` | Variant，屬於 `baseball` | ⚠️ 尚未填寫 Description |
| baseball / Styles=Line | `8db29f67d8fb3b6fff5567fd42cd48e22273cf61` | Variant，屬於 `baseball` | ⚠️ 尚未填寫 Description |
| baseball_bat / Styles=Filled | `a223b25a4bbddf3374269eca604639cc687abc5a` | Variant，屬於 `baseball_bat` | ⚠️ 尚未填寫 Description |
| baseball_bat / Styles=Filled | `e76e24e6005e368b3e7ee9f1c52b0632f063cb82` | Variant，屬於 `baseball_bat` | ⚠️ 尚未填寫 Description |
| baseball_bat / Styles=Line | `e240099aaca8a21f5b5734433d272aee8d667827` | Variant，屬於 `baseball_bat` | ⚠️ 尚未填寫 Description |
| baseball_bat / Styles=Line | `38edb54b85c4302c3e629ecc4ed665b4d58cd2c1` | Variant，屬於 `baseball_bat` | ⚠️ 尚未填寫 Description |
| basketball / Styles=Filled | `ab0b472abea3915ff62794f352fabd6a3c00c721` | Variant，屬於 `basketball` | ⚠️ 尚未填寫 Description |
| basketball / Styles=Filled | `331c1f7873a12e921fe1f07b99f187fca65eadbf` | Variant，屬於 `basketball` | ⚠️ 尚未填寫 Description |
| basketball / Styles=Line | `7830e3a68d00a8b9bb4d1e8a163b59728cc8d295` | Variant，屬於 `basketball` | ⚠️ 尚未填寫 Description |
| basketball / Styles=Line | `a034397537f0beff73db9d7d496b1bd8224b04ba` | Variant，屬於 `basketball` | ⚠️ 尚未填寫 Description |
| basketball_hoop / Styles=Filled | `04732787d7fb5bdbc8bca8515a1a742c38ec1842` | Variant，屬於 `basketball_hoop` | ⚠️ 尚未填寫 Description |
| basketball_hoop / Styles=Filled | `22bb55afb751b5a9a8edde50df7f146672745eab` | Variant，屬於 `basketball_hoop` | ⚠️ 尚未填寫 Description |
| basketball_hoop / Styles=Line | `6c950b281ea1ffbc20ffdfade772a45e84194001` | Variant，屬於 `basketball_hoop` | ⚠️ 尚未填寫 Description |
| basketball_hoop / Styles=Line | `799f761c46f310fd0601110a311aa0db17a9bc85` | Variant，屬於 `basketball_hoop` | ⚠️ 尚未填寫 Description |
| bicycle / Styles=Filled | `71d8ad614b7af427b1b002d14fe809ee936e6d12` | Variant，屬於 `bicycle` | ⚠️ 尚未填寫 Description |
| bicycle / Styles=Filled | `3d5400565186c4f4f746716ea8e14b1ffd5051db` | Variant，屬於 `bicycle` | ⚠️ 尚未填寫 Description |
| bicycle / Styles=Line | `b6d42961d5ad44d272f633ffd22e053aac4eb0e6` | Variant，屬於 `bicycle` | ⚠️ 尚未填寫 Description |
| bicycle / Styles=Line | `a644c1c15dfc7bf98ba26947364ceed62ea836bd` | Variant，屬於 `bicycle` | ⚠️ 尚未填寫 Description |
| biking / Styles=Filled | `cb25d51a58feb288444bdc617b364adde3f4720c` | Variant，屬於 `biking` | ⚠️ 尚未填寫 Description |
| biking / Styles=Filled | `8ff83639644b8281d1cd6c966cbbc2ec544c4e43` | Variant，屬於 `biking` | ⚠️ 尚未填寫 Description |
| biking / Styles=Filled | `9441b957d5dd3d6b83d93f8a298f484618d93fcf` | Variant，屬於 `biking` | ⚠️ 尚未填寫 Description |
| biking / Styles=Filled | `ec9014b6f588c88bac2b486d640bd3b9c3fadc82` | Variant，屬於 `biking` | ⚠️ 尚未填寫 Description |
| biking / Styles=Line | `b96e04af0d62aecb2688fa72ad5e40aedd6f44de` | Variant，屬於 `biking` | ⚠️ 尚未填寫 Description |
| biking / Styles=Line | `1ceea7c6318799e0f918c20d82822c730fdf9c5b` | Variant，屬於 `biking` | ⚠️ 尚未填寫 Description |
| biking / Styles=Line | `c93c4cb140d6ca4fc82602ddd6e1a3edf377d7ce` | Variant，屬於 `biking` | ⚠️ 尚未填寫 Description |
| biking / Styles=Line | `5cce3968e809b714090bf8580e41ac978ea2ee66` | Variant，屬於 `biking` | ⚠️ 尚未填寫 Description |
| billiard_ball_01 / Styles=Filled | `d7d413929a353890c3e1824b8721c104fbaa5ac4` | Variant，屬於 `billiard_ball_01` | ⚠️ 尚未填寫 Description |
| billiard_ball_01 / Styles=Filled | `a116c07115842913e1dccb849003ea267fc7ec6d` | Variant，屬於 `billiard_ball_01` | ⚠️ 尚未填寫 Description |
| billiard_ball_01 / Styles=Line | `b1b84c4047f3d3c4886d03ae0bda0adc575c5c95` | Variant，屬於 `billiard_ball_01` | ⚠️ 尚未填寫 Description |
| billiard_ball_01 / Styles=Line | `81ed9d72d1ede4b70e31b940b70a2165bace6b39` | Variant，屬於 `billiard_ball_01` | ⚠️ 尚未填寫 Description |
| billiard_ball_02 / Styles=Filled | `b82dd2ca5e023f02d94f83c3cddd1f0ab40a6ee6` | Variant，屬於 `billiard_ball_02` | ⚠️ 尚未填寫 Description |
| billiard_ball_02 / Styles=Filled | `94b2f90d3fc133eb5eedb42141c81c6e75ec286c` | Variant，屬於 `billiard_ball_02` | ⚠️ 尚未填寫 Description |
| billiard_ball_02 / Styles=Line | `d9a989adc524bfba590eb986119004179a283638` | Variant，屬於 `billiard_ball_02` | ⚠️ 尚未填寫 Description |
| billiard_ball_02 / Styles=Line | `bff388e7b642a68cf29545ff5b9a14ad400433a8` | Variant，屬於 `billiard_ball_02` | ⚠️ 尚未填寫 Description |
| boat / Styles=Filled | `ad61bd7fc5679347f5654de97ffdc53c1bcc860b` | Variant，屬於 `boat` | ⚠️ 尚未填寫 Description |
| boat / Styles=Filled | `7f09c5407e5de52b54023edc802dacce47485a09` | Variant，屬於 `boat` | ⚠️ 尚未填寫 Description |
| boat / Styles=Line | `4f44431d03b8bdaa2c2405e35048a986936efb30` | Variant，屬於 `boat` | ⚠️ 尚未填寫 Description |
| boat / Styles=Line | `7cac56290b0d2f796e57f546a431736998e60a71` | Variant，屬於 `boat` | ⚠️ 尚未填寫 Description |
| bow_and_arrow / Styles=Filled | `f63d7381d98b2ce34a8941377c2135b4a146d56c` | Variant，屬於 `bow_and_arrow` | ⚠️ 尚未填寫 Description |
| bow_and_arrow / Styles=Filled | `91985a113a8a5df3984af04db61bb6dd371887df` | Variant，屬於 `bow_and_arrow` | ⚠️ 尚未填寫 Description |
| bow_and_arrow / Styles=Line | `bef6f62ecda2699431d63084307a4680684fffc6` | Variant，屬於 `bow_and_arrow` | ⚠️ 尚未填寫 Description |
| bow_and_arrow / Styles=Line | `9a7d1d682007b813e7055a50255cbe9bbfa70fed` | Variant，屬於 `bow_and_arrow` | ⚠️ 尚未填寫 Description |
| bowling_01 / Styles=Filled | `6f2c7616e3c090c6a2004c7ce302d39f5735c203` | Variant，屬於 `bowling_01` | ⚠️ 尚未填寫 Description |
| bowling_01 / Styles=Filled | `4f61863402ac8e9201fdba6564496debea74dc10` | Variant，屬於 `bowling_01` | ⚠️ 尚未填寫 Description |
| bowling_01 / Styles=Line | `7efbd67eb5ef901d824aca546636fbf89d533676` | Variant，屬於 `bowling_01` | ⚠️ 尚未填寫 Description |
| bowling_01 / Styles=Line | `6043e192e5e3dbfdf94ce62e181c204db44575ff` | Variant，屬於 `bowling_01` | ⚠️ 尚未填寫 Description |
| bowling_02 / Styles=Filled | `b87d26cc1c77edfdbf692d146888fbb4d427ee0f` | Variant，屬於 `bowling_02` | ⚠️ 尚未填寫 Description |
| bowling_02 / Styles=Filled | `9afbb86450b6ce43369cdbce11ebb2ba20f26f84` | Variant，屬於 `bowling_02` | ⚠️ 尚未填寫 Description |
| bowling_02 / Styles=Line | `d87be036ccea2b57002910813f820da1803940a7` | Variant，屬於 `bowling_02` | ⚠️ 尚未填寫 Description |
| bowling_02 / Styles=Line | `afeb4cd9fff973bf01baefb6780c28a370dea811` | Variant，屬於 `bowling_02` | ⚠️ 尚未填寫 Description |
| boxing / Styles=Filled | `79086b21196c70d043178e14e589118b9071902e` | Variant，屬於 `boxing` | ⚠️ 尚未填寫 Description |
| boxing / Styles=Filled | `4db6e34f721ee87f079feca5df03607f827f3c1f` | Variant，屬於 `boxing` | ⚠️ 尚未填寫 Description |
| boxing / Styles=Line | `66fbd97d0b2448194d950821165d7d29a75c1e68` | Variant，屬於 `boxing` | ⚠️ 尚未填寫 Description |
| boxing / Styles=Line | `05286f364a91d9dee8637f126a6035cc7560a76f` | Variant，屬於 `boxing` | ⚠️ 尚未填寫 Description |
| boxing_bag / Styles=Filled | `a8c5100e713c946e36c5f3a96b380dfe95acc0b6` | Variant，屬於 `boxing_bag` | ⚠️ 尚未填寫 Description |
| boxing_bag / Styles=Filled | `c16be511cd1220b19e76f2bac34e45408103c262` | Variant，屬於 `boxing_bag` | ⚠️ 尚未填寫 Description |
| boxing_bag / Styles=Line | `4e56bb01d4f7a3ace71fe80db0d45787c60bfd8f` | Variant，屬於 `boxing_bag` | ⚠️ 尚未填寫 Description |
| boxing_bag / Styles=Line | `d49c0483cfe2a98214898969eb24b143244ab072` | Variant，屬於 `boxing_bag` | ⚠️ 尚未填寫 Description |
| boxing_glove / Styles=Filled | `dc17f09527f26164d14e5b31ebfcd950fdf907bd` | Variant，屬於 `boxing_glove` | ⚠️ 尚未填寫 Description |
| boxing_glove / Styles=Filled | `cf7860b6711f2061bd324cd80b3924c47169d441` | Variant，屬於 `boxing_glove` | ⚠️ 尚未填寫 Description |
| boxing_glove / Styles=Line | `7ca803c9a17c8db7202cb1064c6cb63db5249fde` | Variant，屬於 `boxing_glove` | ⚠️ 尚未填寫 Description |
| boxing_glove / Styles=Line | `d7272eea6d6969a175d4b307c174ffb6f6836283` | Variant，屬於 `boxing_glove` | ⚠️ 尚未填寫 Description |
| cat_cow_stretch_01 / Styles=Filled | `51ad9e6214c2d34e5cd12303a974e3c7016f8c97` | Variant，屬於 `cat_cow_stretch_01` | ⚠️ 尚未填寫 Description |
| cat_cow_stretch_01 / Styles=Filled | `d7a63b65387166c01b259336c1ee45a335c5c0c2` | Variant，屬於 `cat_cow_stretch_01` | ⚠️ 尚未填寫 Description |
| cat_cow_stretch_01 / Styles=Line | `a0edf1fd4dcdbf60e4e27934eabe40819b3c3e06` | Variant，屬於 `cat_cow_stretch_01` | ⚠️ 尚未填寫 Description |
| cat_cow_stretch_01 / Styles=Line | `ace4b943368b55522ff31c9fd5da18a0a06ad1a2` | Variant，屬於 `cat_cow_stretch_01` | ⚠️ 尚未填寫 Description |
| cat_cow_stretch_02 / Styles=Filled | `21b0b8b802f39413d6aac4d77114236cf2a10760` | Variant，屬於 `cat_cow_stretch_02` | ⚠️ 尚未填寫 Description |
| cat_cow_stretch_02 / Styles=Filled | `144d54a71709a1832e53f065c85362985605e790` | Variant，屬於 `cat_cow_stretch_02` | ⚠️ 尚未填寫 Description |
| cat_cow_stretch_02 / Styles=Line | `6d1a0006abc964c4bea75b368ca698fe0971c117` | Variant，屬於 `cat_cow_stretch_02` | ⚠️ 尚未填寫 Description |
| cat_cow_stretch_02 / Styles=Line | `47232edb1531fa545e2bf4d2f1d4555468d04fa2` | Variant，屬於 `cat_cow_stretch_02` | ⚠️ 尚未填寫 Description |
| climbing_stairs / Styles=Filled | `eb0d2822703340bd2c9c651f3d186e4407061388` | Variant，屬於 `climbing_stairs` | ⚠️ 尚未填寫 Description |
| climbing_stairs / Styles=Filled | `fcf891c9d74851881cd2ecb24f2712facae16144` | Variant，屬於 `climbing_stairs` | ⚠️ 尚未填寫 Description |
| climbing_stairs / Styles=Line | `fa8e1ec961def283758d61c618b113e9b68aaec2` | Variant，屬於 `climbing_stairs` | ⚠️ 尚未填寫 Description |
| climbing_stairs / Styles=Line | `60c62f3bf5f73e0a8c66fab9ef66a58c319309fe` | Variant，屬於 `climbing_stairs` | ⚠️ 尚未填寫 Description |
| cross_country_skiing / Styles=Filled | `9d3291a0e6ce04cecbfcfc1115b78ff6d6bac021` | Variant，屬於 `cross_country_skiing` | ⚠️ 尚未填寫 Description |
| cross_country_skiing / Styles=Filled | `12eea8ca218eb96c53d1ad2cb18e928f1fa1303b` | Variant，屬於 `cross_country_skiing` | ⚠️ 尚未填寫 Description |
| cross_country_skiing / Styles=Line | `5b390af0d6540b7d0ed7241137e19e4882f59283` | Variant，屬於 `cross_country_skiing` | ⚠️ 尚未填寫 Description |
| cross_country_skiing / Styles=Line | `0bdeec983ba86c4203dcca3c34eb60d4be2e5560` | Variant，屬於 `cross_country_skiing` | ⚠️ 尚未填寫 Description |
| curling_stone / Styles=Filled | `ff7c42ddf7a77ef2534141fa574909ea5c76e566` | Variant，屬於 `curling_stone` | ⚠️ 尚未填寫 Description |
| curling_stone / Styles=Filled | `ae5d99eee2d368ebb06369553a1d11374ac6eee4` | Variant，屬於 `curling_stone` | ⚠️ 尚未填寫 Description |
| curling_stone / Styles=Line | `72d19bdbe681ebbb4e2a1ca0b9f1df48ab7f82b3` | Variant，屬於 `curling_stone` | ⚠️ 尚未填寫 Description |
| curling_stone / Styles=Line | `3396dbb9146dbbb090884f03b343a58c9f723cf0` | Variant，屬於 `curling_stone` | ⚠️ 尚未填寫 Description |
| dancing / Styles=Filled | `31a31c2950d6838bc778c4afece6264faf0d47d7` | Variant，屬於 `dancing` | ⚠️ 尚未填寫 Description |
| dancing / Styles=Filled | `47d0b483fa28463ad071446ad876e85dfe45f3dd` | Variant，屬於 `dancing` | ⚠️ 尚未填寫 Description |
| dancing / Styles=Line | `efc3c2a6206756dfcf90ff216e3e8a7f99fd0f99` | Variant，屬於 `dancing` | ⚠️ 尚未填寫 Description |
| dancing / Styles=Line | `ab773e3f354ec381f50ee4df916bf4ca383ff126` | Variant，屬於 `dancing` | ⚠️ 尚未填寫 Description |
| dart / Styles=Filled | `7f535c173a78b6c4885164641bfa358ecef4481b` | Variant，屬於 `dart` | ⚠️ 尚未填寫 Description |
| dart / Styles=Filled | `c731d073f614ecee440cbdf2898bfa944353beca` | Variant，屬於 `dart` | ⚠️ 尚未填寫 Description |
| dart / Styles=Line | `6ef0e57e545939fd738745670c171f238b0dca3f` | Variant，屬於 `dart` | ⚠️ 尚未填寫 Description |
| dart / Styles=Line | `fe72b0342f505cfa024b7a58384a40af7c6bbf8d` | Variant，屬於 `dart` | ⚠️ 尚未填寫 Description |
| descending_stairs / Property 1=Default | `94aa68cdf2b7a03c33e19d178b1de3a3a253f09c` | Variant，屬於 `descending_stairs` | ⚠️ 尚未填寫 Description |
| descending_stairs / Property 1=Default | `4feae66bb2854d60c69732d0f39c248b2dc175b2` | Variant，屬於 `descending_stairs` | ⚠️ 尚未填寫 Description |
| descending_stairs / Styles=Filled | `020cae95a317cdd481f0063775d724b6990010a4` | Variant，屬於 `descending_stairs` | ⚠️ 尚未填寫 Description |
| descending_stairs / Styles=Filled | `c5f079147d15f393098a84dfe6cda79d633855f6` | Variant，屬於 `descending_stairs` | ⚠️ 尚未填寫 Description |
| diving / Styles=Filled | `28ea060478bfeab060cd0ed4fbaf90c32f5ca75d` | Variant，屬於 `diving` | ⚠️ 尚未填寫 Description |
| diving / Styles=Filled | `8105f65479e10458667fb7263472c26636460392` | Variant，屬於 `diving` | ⚠️ 尚未填寫 Description |
| diving / Styles=Line | `e337a43c47f940b84dd0cc99680c5980af93d384` | Variant，屬於 `diving` | ⚠️ 尚未填寫 Description |
| diving / Styles=Line | `ae1075ec4fb0e5e4bc96840f632419c45b6b16d0` | Variant，屬於 `diving` | ⚠️ 尚未填寫 Description |
| diving_suit / Styles=Filled | `b18e83cb5a8de959773b08b69766b56436f9f747` | Variant，屬於 `diving_suit` | ⚠️ 尚未填寫 Description |
| diving_suit / Styles=Filled | `dff417504896ce455a832f83e05d387104c8fd2e` | Variant，屬於 `diving_suit` | ⚠️ 尚未填寫 Description |
| diving_suit / Styles=Line | `4f895d5c7fe7a390803bb15e59319d4a1964a270` | Variant，屬於 `diving_suit` | ⚠️ 尚未填寫 Description |
| diving_suit / Styles=Line | `6e58cd3c9dd2da4b1e798180261346fa96645867` | Variant，屬於 `diving_suit` | ⚠️ 尚未填寫 Description |
| downward_facing_dog / Styles=Filled | `00c666a52ff679ba52c136d4fb724ebe1b1d81f3` | Variant，屬於 `downward_facing_dog` | ⚠️ 尚未填寫 Description |
| downward_facing_dog / Styles=Filled | `6c55ee6807d098b28c4f30328696d4c376a2bf63` | Variant，屬於 `downward_facing_dog` | ⚠️ 尚未填寫 Description |
| downward_facing_dog / Styles=Line | `56935214cbbb32a114e761feb5bbc19f1c2e7938` | Variant，屬於 `downward_facing_dog` | ⚠️ 尚未填寫 Description |
| downward_facing_dog / Styles=Line | `9c21acd66d26ca26ceb0a672c832bb99763d30fa` | Variant，屬於 `downward_facing_dog` | ⚠️ 尚未填寫 Description |
| dumbbells / Styles=Filled | `28e5a0952fa9c7f1d97167258ca71030836431c2` | Variant，屬於 `dumbbells` | ⚠️ 尚未填寫 Description |
| dumbbells / Styles=Filled | `6a81aac59b2e5ce52fc2107b8aaa5798cc60b354` | Variant，屬於 `dumbbells` | ⚠️ 尚未填寫 Description |
| dumbbells / Styles=Line | `26af2e614ea15ca882f7d60be7b9a23a9857f6a2` | Variant，屬於 `dumbbells` | ⚠️ 尚未填寫 Description |
| dumbbells / Styles=Line | `7988ab4da664f4f8307c57b527b4826285057c1a` | Variant，屬於 `dumbbells` | ⚠️ 尚未填寫 Description |
| elliptical / Styles=Filled | `9aeccf88eb1f48bda75589790f52b3334680ec1d` | Variant，屬於 `elliptical` | ⚠️ 尚未填寫 Description |
| elliptical / Styles=Filled | `89177bc3e6212a003148cf9c8ee8f94390e3fe6c` | Variant，屬於 `elliptical` | ⚠️ 尚未填寫 Description |
| elliptical / Styles=Line | `1d21574758de85d61b50399d9d1f6d551c8287a0` | Variant，屬於 `elliptical` | ⚠️ 尚未填寫 Description |
| elliptical / Styles=Line | `3d1fec8cba7bfe87369e8880f08d60f06f8674b7` | Variant，屬於 `elliptical` | ⚠️ 尚未填寫 Description |
| elliptical_training / Styles=Filled | `75f9aaaea0ccfc06ae2192d0f2b21e2fb0b55db7` | Variant，屬於 `elliptical_training` | ⚠️ 尚未填寫 Description |
| elliptical_training / Styles=Filled | `57da3f982d3bce3bd965bd787bcc0dc704f2231c` | Variant，屬於 `elliptical_training` | ⚠️ 尚未填寫 Description |
| elliptical_training / Styles=Line | `284177365493f9b2e6c0061ab47ab77d0e0a22fc` | Variant，屬於 `elliptical_training` | ⚠️ 尚未填寫 Description |
| elliptical_training / Styles=Line | `554c2fa699c2fcdccea1549df6a1047b6e21a8ec` | Variant，屬於 `elliptical_training` | ⚠️ 尚未填寫 Description |
| exercise_dumbbells / Styles=Filled | `35503e8a5baf6dee204d027bc58b4085aba82517` | Variant，屬於 `exercise_dumbbells` | ⚠️ 尚未填寫 Description |
| exercise_dumbbells / Styles=Filled | `98b3848a388917e65c27ba095bcc8d7ffe73ee30` | Variant，屬於 `exercise_dumbbells` | ⚠️ 尚未填寫 Description |
| exercise_dumbbells / Styles=Line | `f7be3e555ea2e5b8446ea03eaa8d8d6a759290ae` | Variant，屬於 `exercise_dumbbells` | ⚠️ 尚未填寫 Description |
| exercise_dumbbells / Styles=Line | `3cdbc8a6c62beb3ea3b4a6b74d6f69424759975a` | Variant，屬於 `exercise_dumbbells` | ⚠️ 尚未填寫 Description |
| fencing / Styles=Filled | `5958da38ba9b5b88c5d16ff642d040eaa63a8001` | Variant，屬於 `fencing` | ⚠️ 尚未填寫 Description |
| fencing / Styles=Filled | `cb9db0b0e2b4e814b4adf21c97cecf41665a657d` | Variant，屬於 `fencing` | ⚠️ 尚未填寫 Description |
| fencing / Styles=Line | `00fc1da1f7ece65c8beaedb92896c06deb95d9e1` | Variant，屬於 `fencing` | ⚠️ 尚未填寫 Description |
| fencing / Styles=Line | `52244e26d352c69956c1eba934fc2be68dad186a` | Variant，屬於 `fencing` | ⚠️ 尚未填寫 Description |
| fencing_sword / Styles=Filled | `138017aab1faecfa7cbed17605b345ba220956a3` | Variant，屬於 `fencing_sword` | ⚠️ 尚未填寫 Description |
| fencing_sword / Styles=Filled | `5df9cd12c9ddc63ab10e1f3f4a000fd432a414bb` | Variant，屬於 `fencing_sword` | ⚠️ 尚未填寫 Description |
| fencing_sword / Styles=Line | `2255033970531c217434e0f807b7f0faf9c1d97e` | Variant，屬於 `fencing_sword` | ⚠️ 尚未填寫 Description |
| fencing_sword / Styles=Line | `4154a0b5ebe5a2205936fb7ecef6aee6afcaac2f` | Variant，屬於 `fencing_sword` | ⚠️ 尚未填寫 Description |
| figure_skating / Styles=Filled | `750090a596b3d77f6b79d9645df62d808983a5c5` | Variant，屬於 `figure_skating` | ⚠️ 尚未填寫 Description |
| figure_skating / Styles=Filled | `d68104b7fdffcedda9cda7f0af4ffe5970385f3f` | Variant，屬於 `figure_skating` | ⚠️ 尚未填寫 Description |
| figure_skating / Styles=Line | `397d58788a8d0e91140d747385fc3bb02a26e6a7` | Variant，屬於 `figure_skating` | ⚠️ 尚未填寫 Description |
| figure_skating / Styles=Line | `1e6b4e419f94a847f3d5cc3cfacdf4f875b55a9c` | Variant，屬於 `figure_skating` | ⚠️ 尚未填寫 Description |
| fishing / Styles=Filled | `42d497d7b1c7fa289003314bb071018711abf342` | Variant，屬於 `fishing` | ⚠️ 尚未填寫 Description |
| fishing / Styles=Filled | `c03746dbb445fb5908889f61247c6da9cc82de0f` | Variant，屬於 `fishing` | ⚠️ 尚未填寫 Description |
| fishing / Styles=Line | `c246707d5701ef123700dc4d8ab21f72bdf3fbee` | Variant，屬於 `fishing` | ⚠️ 尚未填寫 Description |
| fishing / Styles=Line | `3b98e79dc8dd04eb71cd4e9489aad775bb250950` | Variant，屬於 `fishing` | ⚠️ 尚未填寫 Description |
| fishing_gear / Styles=Filled | `6fad590e0876550a7660f24bd01e6f65ae9c1158` | Variant，屬於 `fishing_gear` | ⚠️ 尚未填寫 Description |
| fishing_gear / Styles=Filled | `6302309e506092802a65b8fcf73bb12a0da0518c` | Variant，屬於 `fishing_gear` | ⚠️ 尚未填寫 Description |
| fishing_gear / Styles=Line | `b973e9e2334be8bdf7fa5fa4e4835d55b8eabe8b` | Variant，屬於 `fishing_gear` | ⚠️ 尚未填寫 Description |
| fishing_gear / Styles=Line | `7d7ad459996d9b7c7ec779a3a69332acd5457607` | Variant，屬於 `fishing_gear` | ⚠️ 尚未填寫 Description |
| fitness / Styles=Filled | `8211dcf2f2e40923dca9f7bd40fa7d3ac9e2b0d5` | Variant，屬於 `fitness` | ⚠️ 尚未填寫 Description |
| fitness / Styles=Filled | `20ec5794662fb70527e0ac561190e6d74530ca9b` | Variant，屬於 `fitness` | ⚠️ 尚未填寫 Description |
| fitness / Styles=Line | `5a1cb296323ee5e4b9b0fe9a41d32e2dd3d23d0a` | Variant，屬於 `fitness` | ⚠️ 尚未填寫 Description |
| fitness / Styles=Line | `dde71ac5c19c38dee0f75b50feef80d25af9535b` | Variant，屬於 `fitness` | ⚠️ 尚未填寫 Description |
| forward_fold / Styles=Filled | `444b138eb427aa8ae168c0da354e38f8bcbc77f1` | Variant，屬於 `forward_fold` | ⚠️ 尚未填寫 Description |
| forward_fold / Styles=Filled | `61f569308c74333d6d23cd29e33f8d31d41234cf` | Variant，屬於 `forward_fold` | ⚠️ 尚未填寫 Description |
| forward_fold / Styles=Line | `67c8d58a0ce3ceea0b0176db5bd08ffbb2da3b07` | Variant，屬於 `forward_fold` | ⚠️ 尚未填寫 Description |
| forward_fold / Styles=Line | `9348528a8fa5908db332a4f3c4970f25ecc24d99` | Variant，屬於 `forward_fold` | ⚠️ 尚未填寫 Description |
| forward-fold / Styles=Filled | `6d8da6c54437bfe936c3e24dc64d6ddb9e84bd16` | Variant，屬於 `forward-fold` | ⚠️ 尚未填寫 Description |
| forward-fold / Styles=Filled | `fbc0edca44b7b6e718598c9c7f0b187b5bac5da1` | Variant，屬於 `forward-fold` | ⚠️ 尚未填寫 Description |
| forward-fold / Styles=Line | `54bf0cf7e133aa62e49455207a8747c379c25911` | Variant，屬於 `forward-fold` | ⚠️ 尚未填寫 Description |
| forward-fold / Styles=Line | `3bf4bfe89d49a30dae57b77536d280a6693d19da` | Variant，屬於 `forward-fold` | ⚠️ 尚未填寫 Description |
| freestyle_skiing / Styles=Filled | `91a30defd1cc3a8b4458f113ed95e54503f05635` | Variant，屬於 `freestyle_skiing` | ⚠️ 尚未填寫 Description |
| freestyle_skiing / Styles=Filled | `f367fbdcddbc999fcffd47dfc031df0573a4b6ea` | Variant，屬於 `freestyle_skiing` | ⚠️ 尚未填寫 Description |
| freestyle_skiing / Styles=Line | `5f0ddf2fa878207e78508d14b3b83b6d76f375f2` | Variant，屬於 `freestyle_skiing` | ⚠️ 尚未填寫 Description |
| freestyle_skiing / Styles=Line | `552399bff5783bb53c698c775af73670f03235dd` | Variant，屬於 `freestyle_skiing` | ⚠️ 尚未填寫 Description |
| golf / Styles=Filled | `7e95f985b24835529cca59ce30e44cb68cafc7ef` | Variant，屬於 `golf` | ⚠️ 尚未填寫 Description |
| golf / Styles=Filled | `ee4026c89a5d24b9eec3a157a994031c749f941a` | Variant，屬於 `golf` | ⚠️ 尚未填寫 Description |
| golf / Styles=Line | `d89f17fc167b34280ac7ddde892b9106c20171bc` | Variant，屬於 `golf` | ⚠️ 尚未填寫 Description |
| golf / Styles=Line | `d3b4f30926d2d834b6502868e14e53ee9f0c4bda` | Variant，屬於 `golf` | ⚠️ 尚未填寫 Description |
| golf_ball / Styles=Filled | `7eea7b221bc3caef1d2779b313742fe40f02061a` | Variant，屬於 `golf_ball` | ⚠️ 尚未填寫 Description |
| golf_ball / Styles=Filled | `99eaba43f78925b9dfd6d19e074714f6b85fba0d` | Variant，屬於 `golf_ball` | ⚠️ 尚未填寫 Description |
| golf_ball / Styles=Line | `418e91cb491d56c2ed777eb7252cf87711e25a27` | Variant，屬於 `golf_ball` | ⚠️ 尚未填寫 Description |
| golf_ball / Styles=Line | `119da9b7c6197e46008f91e9a4ee64706ee64b9c` | Variant，屬於 `golf_ball` | ⚠️ 尚未填寫 Description |
| golf_holl / Styles=Filled | `133efe48a9b7f93f724cf253512a727643c6b579` | Variant，屬於 `golf_holl` | ⚠️ 尚未填寫 Description |
| golf_holl / Styles=Filled | `96861ca4d61f7cbe2786dd55aa4c912c7be5a15e` | Variant，屬於 `golf_holl` | ⚠️ 尚未填寫 Description |
| golf_holl / Styles=Line | `42c1fbb1c80612ff5bdd5dadaf237c5190b63212` | Variant，屬於 `golf_holl` | ⚠️ 尚未填寫 Description |
| golf_holl / Styles=Line | `626090f65c2a4a676258eaaddc42ac682b22b578` | Variant，屬於 `golf_holl` | ⚠️ 尚未填寫 Description |
| gymnastics / Styles=Filled | `c3c5803d8b27b4525168b9271fdf776cb7716180` | Variant，屬於 `gymnastics` | ⚠️ 尚未填寫 Description |
| gymnastics / Styles=Filled | `91b6aa7711008471db522a7e1f2448505f968d34` | Variant，屬於 `gymnastics` | ⚠️ 尚未填寫 Description |
| gymnastics / Styles=Line | `6e67f71014e1e31ad4f3092005439aaff0685007` | Variant，屬於 `gymnastics` | ⚠️ 尚未填寫 Description |
| gymnastics / Styles=Line | `b51fa4410500eb5b2b15f179315106ce4c028afb` | Variant，屬於 `gymnastics` | ⚠️ 尚未填寫 Description |
| hand_grip / Styles=Filled | `90c0c382e273e5010a9e73da5bd028bbc97af145` | Variant，屬於 `hand_grip` | ⚠️ 尚未填寫 Description |
| hand_grip / Styles=Filled | `2a598ccf433cf120b85d9549e6ee2be85eb6facc` | Variant，屬於 `hand_grip` | ⚠️ 尚未填寫 Description |
| hand_grip / Styles=Line | `f59a02170ae86826a6d0c4e9b608e918db455edd` | Variant，屬於 `hand_grip` | ⚠️ 尚未填寫 Description |
| hand_grip / Styles=Line | `4463ca0489676cb9a4e40fe4a5dd5e780d1861ff` | Variant，屬於 `hand_grip` | ⚠️ 尚未填寫 Description |
| helmet / Styles=Filled | `93ac70855db44ebf4767aab2e94bb456471aa307` | Variant，屬於 `helmet` | ⚠️ 尚未填寫 Description |
| helmet / Styles=Filled | `f0f83c0b034a81b71385aa65162ad38d93e8d5bd` | Variant，屬於 `helmet` | ⚠️ 尚未填寫 Description |
| helmet / Styles=Line | `4de4d283a355349068be08c88bc16ee208661f9a` | Variant，屬於 `helmet` | ⚠️ 尚未填寫 Description |
| helmet / Styles=Line | `b1753619051ccbb717939aca88542dca79ecb176` | Variant，屬於 `helmet` | ⚠️ 尚未填寫 Description |
| hiking / Styles=Filled | `ad504829f782eaa95f39d6203ff1d4fa358b008b` | Variant，屬於 `hiking` | ⚠️ 尚未填寫 Description |
| hiking / Styles=Filled | `3bfe6a9ff9925cb3c50249755baad77068358f9b` | Variant，屬於 `hiking` | ⚠️ 尚未填寫 Description |
| hiking / Styles=Line | `0335224fbd6e2cdb8f468e174180224184cf852a` | Variant，屬於 `hiking` | ⚠️ 尚未填寫 Description |
| hiking / Styles=Line | `6f6500824605b6a24b7621afc22eed8c6aac4195` | Variant，屬於 `hiking` | ⚠️ 尚未填寫 Description |
| hockey / Styles=Filled | `4381dad20ce4bd83e167c7069f3c0429f49950c8` | Variant，屬於 `hockey` | ⚠️ 尚未填寫 Description |
| hockey / Styles=Filled | `a2b5ac9546f50a85fa3c4612ef1a7fb93ba94bd0` | Variant，屬於 `hockey` | ⚠️ 尚未填寫 Description |
| hockey / Styles=Line | `44100d5134176d7467a3379e869a5624e95edcc2` | Variant，屬於 `hockey` | ⚠️ 尚未填寫 Description |
| hockey / Styles=Line | `5bc7e33df42f9d09866a0b49257ea851e08e69c7` | Variant，屬於 `hockey` | ⚠️ 尚未填寫 Description |
| horse / Styles=Filled | `5957d55b29361c39bbbf4d8534a46640eee2368f` | Variant，屬於 `horse` | ⚠️ 尚未填寫 Description |
| horse / Styles=Filled | `9a12791101f26b3cd21a853303406907c4145097` | Variant，屬於 `horse` | ⚠️ 尚未填寫 Description |
| horse / Styles=Line | `b8e8c12985a43238202ff7b0f00f9c5656053cbf` | Variant，屬於 `horse` | ⚠️ 尚未填寫 Description |
| horse / Styles=Line | `1feb5ca07a9ecfc28a67a72529e38ea05587a90f` | Variant，屬於 `horse` | ⚠️ 尚未填寫 Description |
| horse / Styles=Styles3 | `4ba3a04df110ada12a15191e4db892144840977d` | Variant，屬於 `horse` | ⚠️ 尚未填寫 Description |
| horse / Styles=Styles3 | `777a282a313db442fae6d3de1211dfe53eca6eae` | Variant，屬於 `horse` | ⚠️ 尚未填寫 Description |
| hula_hoop / Styles=Filled | `0ac59e9d69580e9877d435f0d431b2a5a7810470` | Variant，屬於 `hula_hoop` | ⚠️ 尚未填寫 Description |
| hula_hoop / Styles=Filled | `431c12854330d1dd5bb23f01f4c846e1fde3579f` | Variant，屬於 `hula_hoop` | ⚠️ 尚未填寫 Description |
| hula_hoop / Styles=Line | `9b7b75cc9e556a791ee4919fc845dffbb0798889` | Variant，屬於 `hula_hoop` | ⚠️ 尚未填寫 Description |
| hula_hoop / Styles=Line | `eb3e6e952a916a64fd21f933e5f156b21ecf0652` | Variant，屬於 `hula_hoop` | ⚠️ 尚未填寫 Description |
| ice_hockey / Styles=Filled | `ddbf3f68be03e29214c4aa2de11d79417fcc7b12` | Variant，屬於 `ice_hockey` | ⚠️ 尚未填寫 Description |
| ice_hockey / Styles=Filled | `0fa29c301aad4881527d0618ea706809f678e6b3` | Variant，屬於 `ice_hockey` | ⚠️ 尚未填寫 Description |
| ice_hockey / Styles=Line | `8c822b851db9bb2682be3d4c5b325d621fe89754` | Variant，屬於 `ice_hockey` | ⚠️ 尚未填寫 Description |
| ice_hockey / Styles=Line | `09e415b9e713d8362332aa5efbdfbb1ad7f30f5d` | Variant，屬於 `ice_hockey` | ⚠️ 尚未填寫 Description |
| ice_skate / Styles=Filled | `70b239d1b2f50bb340dd88fcdf520b054d70403f` | Variant，屬於 `ice_skate` | ⚠️ 尚未填寫 Description |
| ice_skate / Styles=Filled | `3b26a1dcb1e3942dd3f4dc888b228d4846cc793b` | Variant，屬於 `ice_skate` | ⚠️ 尚未填寫 Description |
| ice_skate / Styles=Line | `fd63a66468d64331df14d694a966bc832b6d185d` | Variant，屬於 `ice_skate` | ⚠️ 尚未填寫 Description |
| ice_skate / Styles=Line | `d8812a8453fb667f45395636018fa08b06e37d17` | Variant，屬於 `ice_skate` | ⚠️ 尚未填寫 Description |
| jump_rope / Styles=Filled | `914d6482be2ab3b3043fe6fb3bc9201a575a34fb` | Variant，屬於 `jump_rope` | ⚠️ 尚未填寫 Description |
| jump_rope / Styles=Filled | `b566bd13056e530e431e4898039faf3e5e7b5721` | Variant，屬於 `jump_rope` | ⚠️ 尚未填寫 Description |
| jump_rope / Styles=Line | `08bf0591803c11b0023f03436efcdd064233e31a` | Variant，屬於 `jump_rope` | ⚠️ 尚未填寫 Description |
| jump_rope / Styles=Line | `bfa10b727bc329e5c87c40ec43e2800c6077a4fd` | Variant，屬於 `jump_rope` | ⚠️ 尚未填寫 Description |
| jump_rope_activity / Styles=Filled | `061aa40276a3f1af121f4e4aebfdb70e3e760174` | Variant，屬於 `jump_rope_activity` | ⚠️ 尚未填寫 Description |
| jump_rope_activity / Styles=Filled | `25f8db7092893bb45284f45f24ea843465eabbc3` | Variant，屬於 `jump_rope_activity` | ⚠️ 尚未填寫 Description |
| jump_rope_activity / Styles=Line | `dc17bbb28e798bf03dadcf3da402050fec57108b` | Variant，屬於 `jump_rope_activity` | ⚠️ 尚未填寫 Description |
| jump_rope_activity / Styles=Line | `88f36964ea0a39d38bf899be455393499820f4a7` | Variant，屬於 `jump_rope_activity` | ⚠️ 尚未填寫 Description |
| kayaking / Styles=Filled | `e925130f9da78b3c712f88388f2c2e3ff6e8e037` | Variant，屬於 `kayaking` | ⚠️ 尚未填寫 Description |
| kayaking / Styles=Filled | `28dda0d1b4b6359a6f34feb587c26e403726b516` | Variant，屬於 `kayaking` | ⚠️ 尚未填寫 Description |
| kayaking / Styles=Line | `e229c5f6d02050d3309cd33d0fce509b06d7be75` | Variant，屬於 `kayaking` | ⚠️ 尚未填寫 Description |
| kayaking / Styles=Line | `895fe4db48862bd21142a9f82790e44daf886208` | Variant，屬於 `kayaking` | ⚠️ 尚未填寫 Description |
| kettlebell / Styles=Filled | `d9efcc0d3f4fb9bcacc31e837ca3d81af10c706e` | Variant，屬於 `kettlebell` | ⚠️ 尚未填寫 Description |
| kettlebell / Styles=Filled | `43bc8495741863c3d22fd9bf060257d2891934dc` | Variant，屬於 `kettlebell` | ⚠️ 尚未填寫 Description |
| kettlebell / Styles=Line | `153529953fce1a1375a29878c870b616518f58ee` | Variant，屬於 `kettlebell` | ⚠️ 尚未填寫 Description |
| kettlebell / Styles=Line | `78595f363e5a6c34c3d313155726852fa5c87d6e` | Variant，屬於 `kettlebell` | ⚠️ 尚未填寫 Description |
| marathon / Styles=Filled | `8ea343afca1290d995680ae4d457a19857ad38db` | Variant，屬於 `marathon` | ⚠️ 尚未填寫 Description |
| marathon / Styles=Filled | `701a6d7365eaadb49af8888da55a8f07ebd5173f` | Variant，屬於 `marathon` | ⚠️ 尚未填寫 Description |
| marathon / Styles=Line | `dee6ff08456d93f2c878e560b61b9ffeecf47d47` | Variant，屬於 `marathon` | ⚠️ 尚未填寫 Description |
| marathon / Styles=Line | `c2826d81888a5e4bd30456289634d704a80e8004` | Variant，屬於 `marathon` | ⚠️ 尚未填寫 Description |
| meditation / Styles=Filled | `ee01c41e0e06ecc375f78e2fcb9f59f572a8440f` | Variant，屬於 `meditation` | ⚠️ 尚未填寫 Description |
| meditation / Styles=Filled | `9c98b06e36d9e9ea2fc0c204bd3660922c29a6f2` | Variant，屬於 `meditation` | ⚠️ 尚未填寫 Description |
| meditation / Styles=Line | `9fb58e9f4c6317e3c500edce317388e1d6a0b9d6` | Variant，屬於 `meditation` | ⚠️ 尚未填寫 Description |
| meditation / Styles=Line | `a90a91cd402e3e852889d1cc65144f8e2b0e1d1b` | Variant，屬於 `meditation` | ⚠️ 尚未填寫 Description |
| mountain_climbers / Styles=Filled | `83271159450dfc39641ec89a6be1e4466983fe66` | Variant，屬於 `mountain_climbers` | ⚠️ 尚未填寫 Description |
| mountain_climbers / Styles=Filled | `2a0d253e303ebb0010235c0d941ea4187c6632f0` | Variant，屬於 `mountain_climbers` | ⚠️ 尚未填寫 Description |
| mountain_climbers / Styles=Line | `e2006b26b8b231b555c64192b6cebfa65582000c` | Variant，屬於 `mountain_climbers` | ⚠️ 尚未填寫 Description |
| mountain_climbers / Styles=Line | `d180349c92608cdc909323a976e507f958d658a0` | Variant，屬於 `mountain_climbers` | ⚠️ 尚未填寫 Description |
| parachute / Styles=Filled | `753c0c8a8297a5765318302d92b976a8b662737b` | Variant，屬於 `parachute` | ⚠️ 尚未填寫 Description |
| parachute / Styles=Filled | `eebff930395312ec79aae62d5c37d0b0ec6b2619` | Variant，屬於 `parachute` | ⚠️ 尚未填寫 Description |
| parachute / Styles=Line | `83675900afc94fe0082faaec9a59ec379681c64b` | Variant，屬於 `parachute` | ⚠️ 尚未填寫 Description |
| parachute / Styles=Line | `58ddb8fcc92ad5561889fb84ecfdf2e5d885e301` | Variant，屬於 `parachute` | ⚠️ 尚未填寫 Description |
| performing_on_Rings / Styles=Filled | `3569a9717c2ea75f9d53f68e566ffc04cd76f935` | Variant，屬於 `performing_on_Rings` | ⚠️ 尚未填寫 Description |
| performing_on_Rings / Styles=Filled | `ecb47934904e3cf1858ce88b9317a43a66c766d9` | Variant，屬於 `performing_on_Rings` | ⚠️ 尚未填寫 Description |
| performing_on_Rings / Styles=Line | `9f46ea61f1cd7338e5a93dcb02c9cdbcd0bb0ec6` | Variant，屬於 `performing_on_Rings` | ⚠️ 尚未填寫 Description |
| performing_on_Rings / Styles=Line | `04a8fe1d5bd1ff13e606c52ed9a195a13b911e2a` | Variant，屬於 `performing_on_Rings` | ⚠️ 尚未填寫 Description |
| plank_pose / Styles=Filled | `2377b34b372b5e67f6a77c34a53df094a3873864` | Variant，屬於 `plank_pose` | ⚠️ 尚未填寫 Description |
| plank_pose / Styles=Filled | `ad9a9c91a700dcb7a63c12063406e0e6cbb9082f` | Variant，屬於 `plank_pose` | ⚠️ 尚未填寫 Description |
| plank_pose / Styles=Line | `76ba83686f125e95c4103be83117b2589ef8330e` | Variant，屬於 `plank_pose` | ⚠️ 尚未填寫 Description |
| plank_pose / Styles=Line | `4e7c377fe8a57c6ec32c73f7db82cd7381432e6c` | Variant，屬於 `plank_pose` | ⚠️ 尚未填寫 Description |
| playing_badminton / Styles=Filled | `1be411dfde1b8858855777bc30bb826dca88fe60` | Variant，屬於 `playing_badminton` | ⚠️ 尚未填寫 Description |
| playing_badminton / Styles=Filled | `e6d974d99f83a661cfa98bf60fd81688ad82a234` | Variant，屬於 `playing_badminton` | ⚠️ 尚未填寫 Description |
| playing_badminton / Styles=Line | `f9382e3617b14fd7e626aca857ec8d29d271a62b` | Variant，屬於 `playing_badminton` | ⚠️ 尚未填寫 Description |
| playing_badminton / Styles=Line | `0c85f5eec2ca9ed696ebe05473c2161fe45a1a38` | Variant，屬於 `playing_badminton` | ⚠️ 尚未填寫 Description |
| playing_baseball / Styles=Filled | `599268ea4f3ee48fa5f7225a151078027eeebb7c` | Variant，屬於 `playing_baseball` | ⚠️ 尚未填寫 Description |
| playing_baseball / Styles=Filled | `ecd1a973a4affafafb59bea815e908a32c99b726` | Variant，屬於 `playing_baseball` | ⚠️ 尚未填寫 Description |
| playing_baseball / Styles=Line | `3c9421f63f5931c6e1d530145393933b9f492fbb` | Variant，屬於 `playing_baseball` | ⚠️ 尚未填寫 Description |
| playing_baseball / Styles=Line | `cc42b429276d5fff6bb11aac6bafb3578ace9c10` | Variant，屬於 `playing_baseball` | ⚠️ 尚未填寫 Description |
| playing_basketball / Styles=Filled | `5847177d338ea2f5ac2ee70dcbaddc2e7ec47606` | Variant，屬於 `playing_basketball` | ⚠️ 尚未填寫 Description |
| playing_basketball / Styles=Filled | `0ee819ee561913a1b0242a4cd9631c50aab5476c` | Variant，屬於 `playing_basketball` | ⚠️ 尚未填寫 Description |
| playing_basketball / Styles=Line | `99e466c77ef8723aff3267ada0e57a8f06c728af` | Variant，屬於 `playing_basketball` | ⚠️ 尚未填寫 Description |
| playing_basketball / Styles=Line | `4456d89c609dd1941000f49ff8e59aa685494083` | Variant，屬於 `playing_basketball` | ⚠️ 尚未填寫 Description |
| playing_billiards / Styles=Filled | `28d7a3a930dbbe56c4558e5cc1bbbcdd4a73c69d` | Variant，屬於 `playing_billiards` | ⚠️ 尚未填寫 Description |
| playing_billiards / Styles=Filled | `ca6d3d38fcb57ca9c86b0274fd4e8d6bb43c8282` | Variant，屬於 `playing_billiards` | ⚠️ 尚未填寫 Description |
| playing_billiards / Styles=Line | `8017133e5b4b7e85bcddd18d7869d194de896678` | Variant，屬於 `playing_billiards` | ⚠️ 尚未填寫 Description |
| playing_billiards / Styles=Line | `8ebc1a6e6f09c2fc3b484e5e20582772705bf822` | Variant，屬於 `playing_billiards` | ⚠️ 尚未填寫 Description |
| playing_bowling / Styles=Filled | `a36ccf40538ffb870f5ce24ef73c989c27e20400` | Variant，屬於 `playing_bowling` | ⚠️ 尚未填寫 Description |
| playing_bowling / Styles=Filled | `ea432577d92d3694440960953f511d9baee3cd73` | Variant，屬於 `playing_bowling` | ⚠️ 尚未填寫 Description |
| playing_bowling / Styles=Line | `24672445d276fade7981a2a6ee8c5b26c0a52f06` | Variant，屬於 `playing_bowling` | ⚠️ 尚未填寫 Description |
| playing_bowling / Styles=Line | `453faa46a2668cc4a9579c6b69a4cddaccb459a6` | Variant，屬於 `playing_bowling` | ⚠️ 尚未填寫 Description |
| playing_curling / Styles=Filled | `f86ac3283832838a0253ea3c090890eb6e79c5cd` | Variant，屬於 `playing_curling` | ⚠️ 尚未填寫 Description |
| playing_curling / Styles=Filled | `20fa705a4e33b2de1432731575f2211401f13d1f` | Variant，屬於 `playing_curling` | ⚠️ 尚未填寫 Description |
| playing_curling / Styles=Line | `42dbccb50b45c341fe239eb77b470ab02f0827bf` | Variant，屬於 `playing_curling` | ⚠️ 尚未填寫 Description |
| playing_curling / Styles=Line | `b5f09be2907d77a5cb59591e0c5482e05ee4b359` | Variant，屬於 `playing_curling` | ⚠️ 尚未填寫 Description |
| playing_golf / Styles=Filled | `4bd48ec04133cf4d8e389ad8914a0698196f7def` | Variant，屬於 `playing_golf` | ⚠️ 尚未填寫 Description |
| playing_golf / Styles=Filled | `661e1af1fe59556aed1cb457134bc3b417430852` | Variant，屬於 `playing_golf` | ⚠️ 尚未填寫 Description |
| playing_golf / Styles=Line | `c8d510a7202790b61de8c2725fa786cdd2da0ba3` | Variant，屬於 `playing_golf` | ⚠️ 尚未填寫 Description |
| playing_golf / Styles=Line | `3f823c50b00e628c0b4a9d0cdd2c22a693ee293c` | Variant，屬於 `playing_golf` | ⚠️ 尚未填寫 Description |
| playing_hockey / Styles=Filled | `9f12ac9a90c8d1de9d6670fd67bd8906bd9f5165` | Variant，屬於 `playing_hockey` | ⚠️ 尚未填寫 Description |
| playing_hockey / Styles=Filled | `a56647b8f7045d8a55dbd3e3072345f6802037e2` | Variant，屬於 `playing_hockey` | ⚠️ 尚未填寫 Description |
| playing_hockey / Styles=Line | `ef2df191e3b9a9921c6667d7d5b16c54a4a079eb` | Variant，屬於 `playing_hockey` | ⚠️ 尚未填寫 Description |
| playing_hockey / Styles=Line | `4100a382eec192179f0e2f023162e853b62dfb4d` | Variant，屬於 `playing_hockey` | ⚠️ 尚未填寫 Description |
| playing_ice_hockey / Styles=Filled | `215a9508ed41781aa852650ede68fb317f293516` | Variant，屬於 `playing_ice_hockey` | ⚠️ 尚未填寫 Description |
| playing_ice_hockey / Styles=Filled | `245d4c6bae5d7745a9b21925447af7fce9dd96c4` | Variant，屬於 `playing_ice_hockey` | ⚠️ 尚未填寫 Description |
| playing_ice_hockey / Styles=Line | `360ce3067362bf0d3a2791fe6f7050b230a844c4` | Variant，屬於 `playing_ice_hockey` | ⚠️ 尚未填寫 Description |
| playing_ice_hockey / Styles=Line | `cc12ec24df1e3f37883c3522a43971452a6f489a` | Variant，屬於 `playing_ice_hockey` | ⚠️ 尚未填寫 Description |
| playing_rugby / Styles=Filled | `c55a2bf02d006e5562453d9c95a4b5d1ec2396f4` | Variant，屬於 `playing_rugby` | ⚠️ 尚未填寫 Description |
| playing_rugby / Styles=Filled | `d832162844a60f115321244f8a5d81843509429f` | Variant，屬於 `playing_rugby` | ⚠️ 尚未填寫 Description |
| playing_rugby / Styles=Line | `76425d9fb755ef2543d0a36da5b2f55700abbc3d` | Variant，屬於 `playing_rugby` | ⚠️ 尚未填寫 Description |
| playing_rugby / Styles=Line | `cc6996514d448273450fce47815bf6f96793fbfb` | Variant，屬於 `playing_rugby` | ⚠️ 尚未填寫 Description |
| playing_soccer / Styles=Filled | `af4c8a84ccf1bb9123d88341adeaacec6c6e6dd8` | Variant，屬於 `playing_soccer` | ⚠️ 尚未填寫 Description |
| playing_soccer / Styles=Filled | `1410b39cb23aa51881e0d2057a82df0ea0755977` | Variant，屬於 `playing_soccer` | ⚠️ 尚未填寫 Description |
| playing_soccer / Styles=Line | `f181755327eae5e2a7448b2eb2516785575611f0` | Variant，屬於 `playing_soccer` | ⚠️ 尚未填寫 Description |
| playing_soccer / Styles=Line | `d0f302f7b99d0f5562d1df6550d4f98cafb0c1b3` | Variant，屬於 `playing_soccer` | ⚠️ 尚未填寫 Description |
| playing_tennis / Styles=Filled | `cbc85a829c1f90af52a338697ec3d237da44a308` | Variant，屬於 `playing_tennis` | ⚠️ 尚未填寫 Description |
| playing_tennis / Styles=Filled | `9c56f648ed5aeeddec028e4004c689fac57cf757` | Variant，屬於 `playing_tennis` | ⚠️ 尚未填寫 Description |
| playing_tennis / Styles=Line | `fea5d2c87fbb07d677f4ccfa882cf9f53ae2f983` | Variant，屬於 `playing_tennis` | ⚠️ 尚未填寫 Description |
| playing_tennis / Styles=Line | `787ef64e003447a185d6a9fef4050c57bbd633f6` | Variant，屬於 `playing_tennis` | ⚠️ 尚未填寫 Description |
| playing_volleyball / Styles=Filled | `ce43ea32c10870a47bf760f0cdd8e3e59bc9cb55` | Variant，屬於 `playing_volleyball` | ⚠️ 尚未填寫 Description |
| playing_volleyball / Styles=Filled | `546aecaa5d35aec2d84a99f41159646dfb3d5bf9` | Variant，屬於 `playing_volleyball` | ⚠️ 尚未填寫 Description |
| playing_volleyball / Styles=Line | `862ab86ec85164d72dcc7a5f41250c671ec959ec` | Variant，屬於 `playing_volleyball` | ⚠️ 尚未填寫 Description |
| playing_volleyball / Styles=Line | `c2c573fcd92df01f6b78057bf514b4da3ed26c5e` | Variant，屬於 `playing_volleyball` | ⚠️ 尚未填寫 Description |
| playing_water_polo / Styles=Filled | `0026f878c930f5c1d0013ccd5df56479285c44d2` | Variant，屬於 `playing_water_polo` | ⚠️ 尚未填寫 Description |
| playing_water_polo / Styles=Filled | `28ba0124e24eb2c7f56e55d316b37add7d0ed190` | Variant，屬於 `playing_water_polo` | ⚠️ 尚未填寫 Description |
| playing_water_polo / Styles=Line | `898e523d6cbdc2edcabdb71d667568171565df08` | Variant，屬於 `playing_water_polo` | ⚠️ 尚未填寫 Description |
| playing_water_polo / Styles=Line | `98def7a56b3d8d3c3162016dbb8d7d1cd5b4b9b4` | Variant，屬於 `playing_water_polo` | ⚠️ 尚未填寫 Description |
| rings / Styles=Filled | `385887b41f5d9b32d34272f40c2dc24329709f24` | Variant，屬於 `rings` | ⚠️ 尚未填寫 Description |
| rings / Styles=Filled | `0e780a69c7c9372c4e128efc326cceb6765f93e7` | Variant，屬於 `rings` | ⚠️ 尚未填寫 Description |
| rings / Styles=Line | `adc6337c4976f1e8589a2699e8b8aa25a313f184` | Variant，屬於 `rings` | ⚠️ 尚未填寫 Description |
| rings / Styles=Line | `e2f8ce8d8606b74d24b1ada5312821e0e74c1f02` | Variant，屬於 `rings` | ⚠️ 尚未填寫 Description |
| rock_climbing / Styles=Filled | `e69fa97882733075384e87be6bec7f6fea1f6b88` | Variant，屬於 `rock_climbing` | ⚠️ 尚未填寫 Description |
| rock_climbing / Styles=Filled | `b54165e795331c8dbba24cdb75e253d45155dd93` | Variant，屬於 `rock_climbing` | ⚠️ 尚未填寫 Description |
| rock_climbing / Styles=Line | `d0e01a437bf1cb8a4d30f4959d526bc71372a2a9` | Variant，屬於 `rock_climbing` | ⚠️ 尚未填寫 Description |
| rock_climbing / Styles=Line | `7b23d0c289ddcd4aa637b28ed577642bf435eb19` | Variant，屬於 `rock_climbing` | ⚠️ 尚未填寫 Description |
| roller_skate / Styles=Filled | `ea694cfc8e2df7d226dedb9ce5e64c49942b3760` | Variant，屬於 `roller_skate` | ⚠️ 尚未填寫 Description |
| roller_skate / Styles=Filled | `3c1b228beaac602e4c48254b201c3141f6139118` | Variant，屬於 `roller_skate` | ⚠️ 尚未填寫 Description |
| roller_skate / Styles=Line | `ecfd7e5202d113e4b1ce663e0125a8e1599f6fdd` | Variant，屬於 `roller_skate` | ⚠️ 尚未填寫 Description |
| roller_skate / Styles=Line | `56158ce983714bae48dc762f96884ad4e2af0511` | Variant，屬於 `roller_skate` | ⚠️ 尚未填寫 Description |
| rowing_machine / Styles=Filled | `7ffeecb4f3d0a76b58e7766e1efce16803d3d2fe` | Variant，屬於 `rowing_machine` | ⚠️ 尚未填寫 Description |
| rowing_machine / Styles=Filled | `f94bf09755daef968ff589630e9548af7888e8a6` | Variant，屬於 `rowing_machine` | ⚠️ 尚未填寫 Description |
| rowing_machine / Styles=Line | `fad7e5f9b8178f76331baa9dc6499f09e545f013` | Variant，屬於 `rowing_machine` | ⚠️ 尚未填寫 Description |
| rowing_machine / Styles=Line | `ed10e730178c3cded3311a8f1f8dbf15ae472114` | Variant，屬於 `rowing_machine` | ⚠️ 尚未填寫 Description |
| rugby / Styles=Filled | `45c3c69621ab13e3d67ae15acba55532b891d115` | Variant，屬於 `rugby` | ⚠️ 尚未填寫 Description |
| rugby / Styles=Filled | `869109fbde6eaf80880dd2f4d692625bd944c8fa` | Variant，屬於 `rugby` | ⚠️ 尚未填寫 Description |
| rugby / Styles=Line | `cc68b963e6c06e1a7b3d27b27960d8889a62e35a` | Variant，屬於 `rugby` | ⚠️ 尚未填寫 Description |
| rugby / Styles=Line | `5aef60348be883e90f4247970bd7b16971bf0fc9` | Variant，屬於 `rugby` | ⚠️ 尚未填寫 Description |
| run / Styles=Filled | `4ec2e530837adaa65f900824ef712310d1407fba` | Variant，屬於 `run` | ⚠️ 尚未填寫 Description |
| run / Styles=Filled | `6e7efe318a5a27d6ba9141492bd83fe4b13cf57e` | Variant，屬於 `run` | ⚠️ 尚未填寫 Description |
| run / Styles=Line | `db2c0ffecae3d63b95dac00bd3650f1e2778db2b` | Variant，屬於 `run` | ⚠️ 尚未填寫 Description |
| run / Styles=Line | `52d35bf0bc022a8fddc54a174be4b856d0824e67` | Variant，屬於 `run` | ⚠️ 尚未填寫 Description |
| running_shoe / Styles=Filled | `a9888b403d3e613885c140ec2fb23ec2d85e9b30` | Variant，屬於 `running_shoe` | ⚠️ 尚未填寫 Description |
| running_shoe / Styles=Filled | `6fce678b42dee19a3b900418f9eaba1db1f31ce5` | Variant，屬於 `running_shoe` | ⚠️ 尚未填寫 Description |
| running_shoe / Styles=Line | `f965c5ef5f9aa8badfbe87aaccb171267e3e74b1` | Variant，屬於 `running_shoe` | ⚠️ 尚未填寫 Description |
| running_shoe / Styles=Line | `8a0a220ce393a20f95bb9a9f8a325e6092d093da` | Variant，屬於 `running_shoe` | ⚠️ 尚未填寫 Description |
| sailboat_01 / Styles=Filled | `07916991d1de49c88e564a0af2aaaa1b4b5e5ef1` | Variant，屬於 `sailboat_01` | ⚠️ 尚未填寫 Description |
| sailboat_01 / Styles=Filled | `2117b09b372fe142dd2c4694fbb146d5a5d857a4` | Variant，屬於 `sailboat_01` | ⚠️ 尚未填寫 Description |
| sailboat_01 / Styles=Line | `739bd376ed7917bb9651d5c96beac506d123aba2` | Variant，屬於 `sailboat_01` | ⚠️ 尚未填寫 Description |
| sailboat_01 / Styles=Line | `2bb76ae4270befaf0b15fe27f77ac1ffd2ffeb9e` | Variant，屬於 `sailboat_01` | ⚠️ 尚未填寫 Description |
| sailboat_02 / Styles=Filled | `fa9e48633dc229f50304e30b59b3cca668f5528d` | Variant，屬於 `sailboat_02` | ⚠️ 尚未填寫 Description |
| sailboat_02 / Styles=Filled | `283bfab0bc944f7f2f78e9547cfbd7848d2d4557` | Variant，屬於 `sailboat_02` | ⚠️ 尚未填寫 Description |
| sailboat_02 / Styles=Line | `3c791beeda7f6ae13919aeb6fca25357553c52a3` | Variant，屬於 `sailboat_02` | ⚠️ 尚未填寫 Description |
| sailboat_02 / Styles=Line | `bc0efc1a23b291f0d9ffb46f185497cd8d99387d` | Variant，屬於 `sailboat_02` | ⚠️ 尚未填寫 Description |
| sailing / Styles=Filled | `1fd5cc75a02e514db72dc5e584eaa78cdf4b5c29` | Variant，屬於 `sailing` | ⚠️ 尚未填寫 Description |
| sailing / Styles=Filled | `8c2b227ca44621aa44f0851e1c5974d45d6dc62a` | Variant，屬於 `sailing` | ⚠️ 尚未填寫 Description |
| sailing / Styles=Line | `12e6a7773a474ad77610d1732833c0788f49379f` | Variant，屬於 `sailing` | ⚠️ 尚未填寫 Description |
| sailing / Styles=Line | `92da66133a859014091e6fcd6ec65cd5e062e0a2` | Variant，屬於 `sailing` | ⚠️ 尚未填寫 Description |
| scale / Styles=Filled | `24a2c188bfdb9354fd7479215e11e8279567c8cc` | Variant，屬於 `scale` | ⚠️ 尚未填寫 Description |
| scale / Styles=Filled | `0d4af8f94e42f57709cefff3640e52f20436c09f` | Variant，屬於 `scale` | ⚠️ 尚未填寫 Description |
| scale / Styles=Line | `abb7e019516debf1eee6d01cb6af1dc673377653` | Variant，屬於 `scale` | ⚠️ 尚未填寫 Description |
| scale / Styles=Line | `d63b2cbe353f35d06edefa7177d1682c6656c3b3` | Variant，屬於 `scale` | ⚠️ 尚未填寫 Description |
| scooter / Styles=Filled | `11f0934a66e543778820a864686a01548be58654` | Variant，屬於 `scooter` | ⚠️ 尚未填寫 Description |
| scooter / Styles=Filled | `e63b070b38b5a4cff53dc4cff838c7eb6d833452` | Variant，屬於 `scooter` | ⚠️ 尚未填寫 Description |
| scooter / Styles=Line | `dcfa132747be6853e0ac4cbde1acb24998e9b40b` | Variant，屬於 `scooter` | ⚠️ 尚未填寫 Description |
| scooter / Styles=Line | `8e5bad162abaac44bd8f5dca7c5b741fe468aa2c` | Variant，屬於 `scooter` | ⚠️ 尚未填寫 Description |
| scooter_riding / Styles=Filled | `980862d5d23cae3be121d10f25ab921fa2340095` | Variant，屬於 `scooter_riding` | ⚠️ 尚未填寫 Description |
| scooter_riding / Styles=Filled | `07abb8103b3084ff3afa6049548dc9ffc1bd5a89` | Variant，屬於 `scooter_riding` | ⚠️ 尚未填寫 Description |
| scooter_riding / Styles=Line | `5fe5a947a267d843d8cff99b9411822500f871d6` | Variant，屬於 `scooter_riding` | ⚠️ 尚未填寫 Description |
| scooter_riding / Styles=Line | `556d2590e63168d28ee28d5f5b741d8c688ac99f` | Variant，屬於 `scooter_riding` | ⚠️ 尚未填寫 Description |
| scuba / Styles=Filled | `75a803dee1bffa600fec116e858dd0abd7fb5c12` | Variant，屬於 `scuba` | ⚠️ 尚未填寫 Description |
| scuba / Styles=Filled | `de672b6dbe7b3248b0994e0ad585e4efa0ed7eae` | Variant，屬於 `scuba` | ⚠️ 尚未填寫 Description |
| scuba / Styles=Line | `c0d8e26308b4d41f305e23e60aabcf8ee1a414d1` | Variant，屬於 `scuba` | ⚠️ 尚未填寫 Description |
| scuba / Styles=Line | `5ab33e080f3cbb93665ff12437d60665f44b6dd0` | Variant，屬於 `scuba` | ⚠️ 尚未填寫 Description |
| shooting / Styles=Filled | `9f6e937ecb382307e38e4de0857ac8c0dc90beba` | Variant，屬於 `shooting` | ⚠️ 尚未填寫 Description |
| shooting / Styles=Filled | `ccac313cad3a7d0bdc9711b3e0e7be12ca12c201` | Variant，屬於 `shooting` | ⚠️ 尚未填寫 Description |
| shooting / Styles=Line | `8238492e6da34e3133d5ed547ba7c836aadee2ca` | Variant，屬於 `shooting` | ⚠️ 尚未填寫 Description |
| shooting / Styles=Line | `b0f5e1fde2927ccf05023deead910dbff24ee897` | Variant，屬於 `shooting` | ⚠️ 尚未填寫 Description |
| sit_up_bench / Styles=Filled | `b6dde6b5654b866f6e2600ab5901a6f4ff0aac9a` | Variant，屬於 `sit_up_bench` | ⚠️ 尚未填寫 Description |
| sit_up_bench / Styles=Filled | `5a656dc72c237e63d878c1920cd058874b929d1b` | Variant，屬於 `sit_up_bench` | ⚠️ 尚未填寫 Description |
| sit_up_bench / Styles=Line | `bdd29be587e285cbb70a1f6d42022460cce5a878` | Variant，屬於 `sit_up_bench` | ⚠️ 尚未填寫 Description |
| sit_up_bench / Styles=Line | `b2b65eb87009a5e8e8328e1daf2dffb27966ec0b` | Variant，屬於 `sit_up_bench` | ⚠️ 尚未填寫 Description |
| skateboard / Styles=Filled | `d5d764b0cf0c7050b4650e687973871e364c675a` | Variant，屬於 `skateboard` | ⚠️ 尚未填寫 Description |
| skateboard / Styles=Filled | `2e1435adb7be153acac2c5d7e67db2c0875ec801` | Variant，屬於 `skateboard` | ⚠️ 尚未填寫 Description |
| skateboard / Styles=Line | `6d665e089690be2229c1d5d52ddb97643ecbf247` | Variant，屬於 `skateboard` | ⚠️ 尚未填寫 Description |
| skateboard / Styles=Line | `b034b840e70b525b3a0c9cf101fc7017eaf24daf` | Variant，屬於 `skateboard` | ⚠️ 尚未填寫 Description |
| skateboarding / Styles=Filled | `3885c8d9ba7912b7b7f20c99ee26f07c29a5d331` | Variant，屬於 `skateboarding` | ⚠️ 尚未填寫 Description |
| skateboarding / Styles=Filled | `ff3aa77c4c507671e4650434c17a6f4fdd182df1` | Variant，屬於 `skateboarding` | ⚠️ 尚未填寫 Description |
| skateboarding / Styles=Line | `d98664499326230af62b9ec8e7d9998233399502` | Variant，屬於 `skateboarding` | ⚠️ 尚未填寫 Description |
| skateboarding / Styles=Line | `2a025fdec01e866f963eb572e67b17d35c695860` | Variant，屬於 `skateboarding` | ⚠️ 尚未填寫 Description |
| skydiving / Styles=Filled | `a332dc92ec25f97e10e2399987201810e06f8752` | Variant，屬於 `skydiving` | ⚠️ 尚未填寫 Description |
| skydiving / Styles=Filled | `c99bff0108d518ba6dfabab5e21c7e787e3c0be2` | Variant，屬於 `skydiving` | ⚠️ 尚未填寫 Description |
| skydiving / Styles=Line | `5fd17473388d043a9fc0b43beea4f713b7359dce` | Variant，屬於 `skydiving` | ⚠️ 尚未填寫 Description |
| skydiving / Styles=Line | `33c9c4f4bbf037e6738f5377f2f26d2610196243` | Variant，屬於 `skydiving` | ⚠️ 尚未填寫 Description |
| soccer / Styles=Filled | `5dfb1fcdd391692ff7da373300a43802d36432b6` | Variant，屬於 `soccer` | ⚠️ 尚未填寫 Description |
| soccer / Styles=Filled | `a8e65986ee8701ba68cd625696c8328f567007ed` | Variant，屬於 `soccer` | ⚠️ 尚未填寫 Description |
| soccer / Styles=Line | `dac8a17b9b06293fb925ff77a3a4dd7d19b057b8` | Variant，屬於 `soccer` | ⚠️ 尚未填寫 Description |
| soccer / Styles=Line | `cafb064c8dccce803939bb50b2dc630e13839ed0` | Variant，屬於 `soccer` | ⚠️ 尚未填寫 Description |
| speed_skating / Styles=Filled | `b43a1349070d020bc054549bc71c67b51878d7ad` | Variant，屬於 `speed_skating` | ⚠️ 尚未填寫 Description |
| speed_skating / Styles=Filled | `5e7123b1e1aab252a86aaecc3f868511bd5ffd83` | Variant，屬於 `speed_skating` | ⚠️ 尚未填寫 Description |
| speed_skating / Styles=Filled | `8fc5854b8d28d4a2a3ca90f45194798c395d9482` | Variant，屬於 `speed_skating` | ⚠️ 尚未填寫 Description |
| speed_skating / Styles=Filled | `8ccf1f1b3821a7389291325c9180da2c1685d929` | Variant，屬於 `speed_skating` | ⚠️ 尚未填寫 Description |
| speed_skating / Styles=Line | `ffeb32c498fc8dfd76f6a59fb585260f038594ed` | Variant，屬於 `speed_skating` | ⚠️ 尚未填寫 Description |
| speed_skating / Styles=Line | `18cf110e1a3543fb544fcc04ceaee7dffcdc5e46` | Variant，屬於 `speed_skating` | ⚠️ 尚未填寫 Description |
| speed_skating / Styles=Line | `e6a9d1dd32a02d48dc0354a9fe27c2ce3ee7721e` | Variant，屬於 `speed_skating` | ⚠️ 尚未填寫 Description |
| speed_skating / Styles=Line | `36b6c67a58d23f3f05324ce622c2f3d29363fc6d` | Variant，屬於 `speed_skating` | ⚠️ 尚未填寫 Description |
| stretch_01 / Styles=Filled | `1395fcbad108981ee2a3e667791c3e50242ab885` | Variant，屬於 `stretch_01` | ⚠️ 尚未填寫 Description |
| stretch_01 / Styles=Filled | `d8f9a83be246dff18bc05ee17e06809d1295d74f` | Variant，屬於 `stretch_01` | ⚠️ 尚未填寫 Description |
| stretch_01 / Styles=Line | `371f398508475346d045bfe793e6ccf44e347263` | Variant，屬於 `stretch_01` | ⚠️ 尚未填寫 Description |
| stretch_01 / Styles=Line | `70e17cb4666b321ca33fa9ad3c81354164464a43` | Variant，屬於 `stretch_01` | ⚠️ 尚未填寫 Description |
| stretch_02 / Styles=Filled | `f580783b3c71edb25f993f5188182f7cb6ff942d` | Variant，屬於 `stretch_02` | ⚠️ 尚未填寫 Description |
| stretch_02 / Styles=Filled | `832e5d55ef6142e0aa46adaffe53cef2b04a24ae` | Variant，屬於 `stretch_02` | ⚠️ 尚未填寫 Description |
| stretch_02 / Styles=Line | `5d8eeaeceb134e6d6904de988cd8953ee07bd8dd` | Variant，屬於 `stretch_02` | ⚠️ 尚未填寫 Description |
| stretch_02 / Styles=Line | `7e50fecf99e1e4398950440ae3af4a3d8cbec504` | Variant，屬於 `stretch_02` | ⚠️ 尚未填寫 Description |
| stretch_03 / Styles=Filled | `b3610d0e91ebecdf2c0266702d990af8e358d47f` | Variant，屬於 `stretch_03` | ⚠️ 尚未填寫 Description |
| stretch_03 / Styles=Filled | `dd45538755ead03cbaf8f964fd0a9a79401dfd6a` | Variant，屬於 `stretch_03` | ⚠️ 尚未填寫 Description |
| stretch_03 / Styles=Line | `5d93d88ce4ed135f908a5ac8413f81ec8d15ae5e` | Variant，屬於 `stretch_03` | ⚠️ 尚未填寫 Description |
| stretch_03 / Styles=Line | `d716f646373eb1abadc6999ee30c9e5d18dbe5f4` | Variant，屬於 `stretch_03` | ⚠️ 尚未填寫 Description |
| stretch_04 / Styles=Filled | `6b442d684519dccddfcecb6bcb478d1c183ef995` | Variant，屬於 `stretch_04` | ⚠️ 尚未填寫 Description |
| stretch_04 / Styles=Filled | `dc112e56f839b001103101a1cd8170bfa425f535` | Variant，屬於 `stretch_04` | ⚠️ 尚未填寫 Description |
| stretch_04 / Styles=Line | `03d84cdb004349e86c7c3b047cfb85d7742adbe9` | Variant，屬於 `stretch_04` | ⚠️ 尚未填寫 Description |
| stretch_04 / Styles=Line | `adc94a805e7357031780647e2fb049b9ded20706` | Variant，屬於 `stretch_04` | ⚠️ 尚未填寫 Description |
| stretch_05 / Styles=Filled | `a00413553d8ae2b52b8fe1a8c60bba91859afcb4` | Variant，屬於 `stretch_05` | ⚠️ 尚未填寫 Description |
| stretch_05 / Styles=Filled | `3c33a640fa76657eb689dcb06b58d339034f68f2` | Variant，屬於 `stretch_05` | ⚠️ 尚未填寫 Description |
| stretch_05 / Styles=Line | `785f5528b227b01d739ae066cdd2e79f3da47c56` | Variant，屬於 `stretch_05` | ⚠️ 尚未填寫 Description |
| stretch_05 / Styles=Line | `f8925b59b7fb242e0167ad50aa19ae9b804529b1` | Variant，屬於 `stretch_05` | ⚠️ 尚未填寫 Description |
| sup / Styles=Filled | `9bffe237ad86ff1025a67d55edd7303df7c1330d` | Variant，屬於 `sup` | ⚠️ 尚未填寫 Description |
| sup / Styles=Filled | `f991fd0373c2d8eb60a532b5c547bb044b5b7509` | Variant，屬於 `sup` | ⚠️ 尚未填寫 Description |
| sup / Styles=Line | `bba0fdf1f2760cbf4c156421ab66ec62c1bfe878` | Variant，屬於 `sup` | ⚠️ 尚未填寫 Description |
| sup / Styles=Line | `9d32b4264aeef008eb3da48662c28158f28d0c02` | Variant，屬於 `sup` | ⚠️ 尚未填寫 Description |
| surfing / Styles=Filled | `141665b5b8d2fd019b486c7cd575c307e48a1a9e` | Variant，屬於 `surfing` | ⚠️ 尚未填寫 Description |
| surfing / Styles=Filled | `aeadb75c0dc51a10076ad96cbfacb5b8b9257bde` | Variant，屬於 `surfing` | ⚠️ 尚未填寫 Description |
| surfing / Styles=Line | `273824b085e59e6b707d158e3467d38c0c6824ca` | Variant，屬於 `surfing` | ⚠️ 尚未填寫 Description |
| surfing / Styles=Line | `3f8d0c2a847f8e5ffe65953c11833c004fa5d28a` | Variant，屬於 `surfing` | ⚠️ 尚未填寫 Description |
| swimming / Styles=Filled | `0061147147799f661ea2e0a849c766657fd17f27` | Variant，屬於 `swimming` | ⚠️ 尚未填寫 Description |
| swimming / Styles=Filled | `6731c7cd1c11208931ae463ea85212b613cd9244` | Variant，屬於 `swimming` | ⚠️ 尚未填寫 Description |
| swimming / Styles=Line | `3c1dd5148fdb0d62dc17ede60c0b9bc554cf84e4` | Variant，屬於 `swimming` | ⚠️ 尚未填寫 Description |
| swimming / Styles=Line | `b48b1148cbd4a026141056b0855c8f1f25dce8b9` | Variant，屬於 `swimming` | ⚠️ 尚未填寫 Description |
| swimming_cap / Styles=Filled | `0b8133036ccd44f5dcd21044beb62715f788c19e` | Variant，屬於 `swimming_cap` | ⚠️ 尚未填寫 Description |
| swimming_cap / Styles=Filled | `0b72518144d73b259c09bd87e7f8b26db97f73c4` | Variant，屬於 `swimming_cap` | ⚠️ 尚未填寫 Description |
| swimming_cap / Styles=Line | `052b62a2d04f3cd089caa8221a55df0f2568f541` | Variant，屬於 `swimming_cap` | ⚠️ 尚未填寫 Description |
| swimming_cap / Styles=Line | `9e91b63620ea679cfe2d1f729620f848ab24e76e` | Variant，屬於 `swimming_cap` | ⚠️ 尚未填寫 Description |
| swimming_ring / Styles=Filled | `29be7932754c97f96d40955926f2dd53c64f7154` | Variant，屬於 `swimming_ring` | ⚠️ 尚未填寫 Description |
| swimming_ring / Styles=Filled | `f4acb37dcfd23459a1f1d860e1c1639b22f4fa16` | Variant，屬於 `swimming_ring` | ⚠️ 尚未填寫 Description |
| swimming_ring / Styles=Filled | `8688fee65e53a1803d10d471cc922e14fce2e4d1` | Variant，屬於 `swimming_ring` | ⚠️ 尚未填寫 Description |
| swimming_ring / Styles=Filled | `8b8fa3e9ef271eaad20b8c2e706aeb9cbdeafe66` | Variant，屬於 `swimming_ring` | ⚠️ 尚未填寫 Description |
| swimming_ring / Styles=Line | `47974aee8f7ab14c3f0ed9b0ac06f798e36fc3e2` | Variant，屬於 `swimming_ring` | ⚠️ 尚未填寫 Description |
| swimming_ring / Styles=Line | `d023cd85247b13256eb5ff263afe405804e1f0db` | Variant，屬於 `swimming_ring` | ⚠️ 尚未填寫 Description |
| swimming_ring / Styles=Line | `a71ee6b9a1c672624ac3324e83d601824a78a752` | Variant，屬於 `swimming_ring` | ⚠️ 尚未填寫 Description |
| swimming_ring / Styles=Line | `54e32a1dc63face8a2e01b97ef3e1c300448c90f` | Variant，屬於 `swimming_ring` | ⚠️ 尚未填寫 Description |
| table_tennis / Styles=Filled | `53df128013e22e1726846054fcc600d843cd63e5` | Variant，屬於 `table_tennis` | ⚠️ 尚未填寫 Description |
| table_tennis / Styles=Filled | `6b26e38e4073c197cd5e1f0e6303eb64d9209370` | Variant，屬於 `table_tennis` | ⚠️ 尚未填寫 Description |
| table_tennis / Styles=Line | `90505d7777708f5c0640e6fb01af8f46faa738fe` | Variant，屬於 `table_tennis` | ⚠️ 尚未填寫 Description |
| table_tennis / Styles=Line | `f474d6d01d8528f14448694c5ce2b76c20149761` | Variant，屬於 `table_tennis` | ⚠️ 尚未填寫 Description |
| taekwondo_01 / Styles=Filled | `edd5dff2c283e04dd683a8e50a37b6ec5eed8dfa` | Variant，屬於 `taekwondo_01` | ⚠️ 尚未填寫 Description |
| taekwondo_01 / Styles=Filled | `0308140004b036a911b7df534f7563a562a8cde8` | Variant，屬於 `taekwondo_01` | ⚠️ 尚未填寫 Description |
| taekwondo_01 / Styles=Line | `8d4ffc5cf4f0975eecf49c849e5f68d1fb1ed34d` | Variant，屬於 `taekwondo_01` | ⚠️ 尚未填寫 Description |
| taekwondo_01 / Styles=Line | `536417a996f65fb4c3c4367e76ea91f3cb1df772` | Variant，屬於 `taekwondo_01` | ⚠️ 尚未填寫 Description |
| taekwondo_02 / Styles=Filled | `94aa6fbc8676f7857d47dddb1ae1722a2b45ec67` | Variant，屬於 `taekwondo_02` | ⚠️ 尚未填寫 Description |
| taekwondo_02 / Styles=Filled | `f7dfff2ffb95522ef5f7e9f884713591aa17fe1d` | Variant，屬於 `taekwondo_02` | ⚠️ 尚未填寫 Description |
| taekwondo_02 / Styles=Line | `6745bbf99fd56069ca18c8f08b178bbd3177e8cd` | Variant，屬於 `taekwondo_02` | ⚠️ 尚未填寫 Description |
| taekwondo_02 / Styles=Line | `728ddea18887719617d88eaf31bd5810ed5132b7` | Variant，屬於 `taekwondo_02` | ⚠️ 尚未填寫 Description |
| target / Styles=Filled | `bfbd4d73363332220a4768362fddd932ad7a7238` | Variant，屬於 `target` | ⚠️ 尚未填寫 Description |
| target / Styles=Filled | `42639157b252be6589895e2f75d5366dd036fc4e` | Variant，屬於 `target` | ⚠️ 尚未填寫 Description |
| target / Styles=Line | `632cc11a5e9761f4f1bb9182f0dc571b1b32768e` | Variant，屬於 `target` | ⚠️ 尚未填寫 Description |
| target / Styles=Line | `6028433220adba0e74fed163ff46f6a75c348f8c` | Variant，屬於 `target` | ⚠️ 尚未填寫 Description |
| tennis_01 / Styles=Filled | `18b2de5c7694033fb6ad30d36b2da65194f85c38` | Variant，屬於 `tennis_01` | ⚠️ 尚未填寫 Description |
| tennis_01 / Styles=Filled | `8b42e987111cb3e86ddf114154eedb0d60de8355` | Variant，屬於 `tennis_01` | ⚠️ 尚未填寫 Description |
| tennis_01 / Styles=Line | `f0f7e34419146685e76001fa6abffe42b4b5863d` | Variant，屬於 `tennis_01` | ⚠️ 尚未填寫 Description |
| tennis_01 / Styles=Line | `118d0cccd26a727e2c91738091c9bb00416418e7` | Variant，屬於 `tennis_01` | ⚠️ 尚未填寫 Description |
| tennis_02 / Styles=Filled | `9f8c84f705ad956b8aadd18259da9d24ecbdce72` | Variant，屬於 `tennis_02` | ⚠️ 尚未填寫 Description |
| tennis_02 / Styles=Filled | `dea7e9ca5917d2cce14acf5c8bf7b25a29f05d84` | Variant，屬於 `tennis_02` | ⚠️ 尚未填寫 Description |
| tennis_02 / Styles=Line | `c0df063201d3b4626c618afb3020fe6066d76ab1` | Variant，屬於 `tennis_02` | ⚠️ 尚未填寫 Description |
| tennis_02 / Styles=Line | `6ef323d1fa0dc771f2881a4f3ab6a17462e7b5ab` | Variant，屬於 `tennis_02` | ⚠️ 尚未填寫 Description |
| tennis_racket / Styles=Filled | `0419b3f78331547eb044bf55743129a9fbaece8e` | Variant，屬於 `tennis_racket` | ⚠️ 尚未填寫 Description |
| tennis_racket / Styles=Filled | `4c7dd8c2fb71304f7fb4242878c8e132caab3d2b` | Variant，屬於 `tennis_racket` | ⚠️ 尚未填寫 Description |
| tennis_racket / Styles=Line | `91c48256544eb347b7debe6cdf481d81bfeca86b` | Variant，屬於 `tennis_racket` | ⚠️ 尚未填寫 Description |
| tennis_racket / Styles=Line | `507b2055050961178a54dbc2f7df77667c932ddc` | Variant，屬於 `tennis_racket` | ⚠️ 尚未填寫 Description |
| treadmill / Styles=Filled | `70630ba6c52cff96e7d0c486de194c5d549e4450` | Variant，屬於 `treadmill` | ⚠️ 尚未填寫 Description |
| treadmill / Styles=Filled | `368fd2bf7d42ecbee3c837b31329a73658a11ad0` | Variant，屬於 `treadmill` | ⚠️ 尚未填寫 Description |
| treadmill / Styles=Line | `ba27cc463e80810c18ee435f633b38ed7b89ef76` | Variant，屬於 `treadmill` | ⚠️ 尚未填寫 Description |
| treadmill / Styles=Line | `d00155ed44a6dd7e7a1a2faf1f3655a0d79c665a` | Variant，屬於 `treadmill` | ⚠️ 尚未填寫 Description |
| treadmill_running / Styles=Filled | `7f109b01c9e6fafbe73470892b6b9f373bd092cf` | Variant，屬於 `treadmill_running` | ⚠️ 尚未填寫 Description |
| treadmill_running / Styles=Filled | `35b2c4e7d10d6d6eb55824584fd7fc8ca78e3391` | Variant，屬於 `treadmill_running` | ⚠️ 尚未填寫 Description |
| treadmill_running / Styles=Line | `0b41d802a66d06aece1d55c78f894fb6c6032aef` | Variant，屬於 `treadmill_running` | ⚠️ 尚未填寫 Description |
| treadmill_running / Styles=Line | `17d6c74b7e8b18c9cf84ebdf3d19948a6e953491` | Variant，屬於 `treadmill_running` | ⚠️ 尚未填寫 Description |
| tree_pose / Styles=Filled | `0a2c42ab7b440d56bc76b2d5184740cd36e00ab5` | Variant，屬於 `tree_pose` | ⚠️ 尚未填寫 Description |
| tree_pose / Styles=Filled | `985a88707ef2fa9e41474c1f777944c95830806d` | Variant，屬於 `tree_pose` | ⚠️ 尚未填寫 Description |
| tree_pose / Styles=Line | `d59cd1522f06d35c6aa59fe18821802829c8617a` | Variant，屬於 `tree_pose` | ⚠️ 尚未填寫 Description |
| tree_pose / Styles=Line | `19af90ee35b022016a7a247f38b83c2e56d6c278` | Variant，屬於 `tree_pose` | ⚠️ 尚未填寫 Description |
| triangle_pose / Styles=Filled | `739cc4480221f7f881c9ea3dd73a8fb2b9ecdb5b` | Variant，屬於 `triangle_pose` | ⚠️ 尚未填寫 Description |
| triangle_pose / Styles=Filled | `afc88a8b6814a86f729d1b1d761f38df915ffccf` | Variant，屬於 `triangle_pose` | ⚠️ 尚未填寫 Description |
| triangle_pose / Styles=Line | `2cb02cfbff547953f7b0205d819782d86f45e84a` | Variant，屬於 `triangle_pose` | ⚠️ 尚未填寫 Description |
| triangle_pose / Styles=Line | `5a0bdfd0747494080b86694c8f5982e2aec31c98` | Variant，屬於 `triangle_pose` | ⚠️ 尚未填寫 Description |
| ultimate_frisbee / Styles=Filled | `5533d3841dca5cc08985e59cd1d8535ffb60e550` | Variant，屬於 `ultimate_frisbee` | ⚠️ 尚未填寫 Description |
| ultimate_frisbee / Styles=Filled | `4a08a2f949df7f2bd956247bbf64ad87ed8898a3` | Variant，屬於 `ultimate_frisbee` | ⚠️ 尚未填寫 Description |
| ultimate_frisbee / Styles=Line | `a62f41d5a5af82615198fcbff41b1ac1a8c34491` | Variant，屬於 `ultimate_frisbee` | ⚠️ 尚未填寫 Description |
| ultimate_frisbee / Styles=Line | `f7ed5fbd831e832f234b7661928cc5f170da937e` | Variant，屬於 `ultimate_frisbee` | ⚠️ 尚未填寫 Description |
| volleyball / Styles=Filled | `13a6ec48b6ec23bb8a57b4784febad4013bebc7a` | Variant，屬於 `volleyball` | ⚠️ 尚未填寫 Description |
| volleyball / Styles=Filled | `d409d5b652458589099c32a920652738ad4e982c` | Variant，屬於 `volleyball` | ⚠️ 尚未填寫 Description |
| volleyball / Styles=Line | `cbe47fc1466cb43eb88b87226b5e54d5857cb839` | Variant，屬於 `volleyball` | ⚠️ 尚未填寫 Description |
| volleyball / Styles=Line | `f3b1096d768399b6eda0be59f5dc6f87162a4b4d` | Variant，屬於 `volleyball` | ⚠️ 尚未填寫 Description |
| walk / Styles=Filled | `26adca029479d90abc891a243b3ad197d0b36325` | Variant，屬於 `walk` | ⚠️ 尚未填寫 Description |
| walk / Styles=Filled | `b5d20ec721d4a7fa2d10533c6a61a6bdbca18caf` | Variant，屬於 `walk` | ⚠️ 尚未填寫 Description |
| walk / Styles=Line | `af53696066064515a3d25d41a7283207d6eab779` | Variant，屬於 `walk` | ⚠️ 尚未填寫 Description |
| walk / Styles=Line | `dd6b1c60bab62a1cf922a7d66dac5c708fc07abe` | Variant，屬於 `walk` | ⚠️ 尚未填寫 Description |
| warrior_01 / Styles=Filled | `2bf1ff0464439b9c95a3b5115fd3c2fecd8fe779` | Variant，屬於 `warrior_01` | ⚠️ 尚未填寫 Description |
| warrior_01 / Styles=Filled | `a578f6e4cb9d842b96b29b28e84763054c8c84a3` | Variant，屬於 `warrior_01` | ⚠️ 尚未填寫 Description |
| warrior_01 / Styles=Line | `fe6629ea64f65fc4cd35e33ab25e3b8b6ff2219b` | Variant，屬於 `warrior_01` | ⚠️ 尚未填寫 Description |
| warrior_01 / Styles=Line | `0e81917fa4bad0bf8a773a58345104ee338a07cb` | Variant，屬於 `warrior_01` | ⚠️ 尚未填寫 Description |
| warrior_02 / Styles=Filled | `8993f06eb9f1e15365e5b739dd4a158a97f6207e` | Variant，屬於 `warrior_02` | ⚠️ 尚未填寫 Description |
| warrior_02 / Styles=Filled | `33c646f435aa0519db3173a7aee08c7da2e852e0` | Variant，屬於 `warrior_02` | ⚠️ 尚未填寫 Description |
| warrior_02 / Styles=Line | `f72b09ea34132670ce1100ce094e7b258659ffe9` | Variant，屬於 `warrior_02` | ⚠️ 尚未填寫 Description |
| warrior_02 / Styles=Line | `a9f70bea3a8bc0a0658b3684ec6c069cebf7aad2` | Variant，屬於 `warrior_02` | ⚠️ 尚未填寫 Description |
| warrior_03 / Styles=Filled | `55450b6cc3b16f2af0c86234bd8b9612eb18d63e` | Variant，屬於 `warrior_03` | ⚠️ 尚未填寫 Description |
| warrior_03 / Styles=Filled | `7f5b1511e2af5d96285d2928f5008436708632f7` | Variant，屬於 `warrior_03` | ⚠️ 尚未填寫 Description |
| warrior_03 / Styles=Line | `cdac7742e28308c7cdd66cde68b9a4b61b820bdf` | Variant，屬於 `warrior_03` | ⚠️ 尚未填寫 Description |
| warrior_03 / Styles=Line | `40beaea1285f3ad17bef20ad518b70c49dbaaf9b` | Variant，屬於 `warrior_03` | ⚠️ 尚未填寫 Description |
| water_polo / Styles=Filled | `fbb92e69bf33d6bb59a3e9d63fb7138bff1c424d` | Variant，屬於 `water_polo` | ⚠️ 尚未填寫 Description |
| water_polo / Styles=Filled | `7a5565a839da3fbd3b84374bd9038a1d0b6b63f0` | Variant，屬於 `water_polo` | ⚠️ 尚未填寫 Description |
| water_polo / Styles=Line | `1a97717495e1cf1d72953eb8f14dbcafabcc09f1` | Variant，屬於 `water_polo` | ⚠️ 尚未填寫 Description |
| water_polo / Styles=Line | `8a738d23f633c2193aa7384e87b24e7fcc047ce3` | Variant，屬於 `water_polo` | ⚠️ 尚未填寫 Description |
| yoga_mat / Styles=Filled | `808c64bab88f2d1826686caaef1a4cc5261bb382` | Variant，屬於 `yoga_mat` | ⚠️ 尚未填寫 Description |
| yoga_mat / Styles=Filled | `82f4483ae443f9b0ece7cf19d28eb84789aaf0a5` | Variant，屬於 `yoga_mat` | ⚠️ 尚未填寫 Description |
| yoga_mat / Styles=Line | `b99418ca3cc225a522ca629c22ab914e6975fc1d` | Variant，屬於 `yoga_mat` | ⚠️ 尚未填寫 Description |
| yoga_mat / Styles=Line | `6af386ae1fedf5899d1e4196f37b47e091662d5b` | Variant，屬於 `yoga_mat` | ⚠️ 尚未填寫 Description |

### Steps（32）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| arrow / Type=Default | `596ef05214cb61bef7d1875cfc14a0317d8f1c8e` | Variant，屬於 `arrow` | ⚠️ 尚未填寫 Description |
| arrow / Type=Disabled | `cf61b5b7629667f0c901dd1e086e7732529bea91` | Variant，屬於 `arrow` | ⚠️ 尚未填寫 Description |
| arrow / Type=Selected | `967696d7bb41c6466e69da0c44eb3c265a6f4500` | Variant，屬於 `arrow` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Default, Size=Default, 方向=橫向 | `72f96893072dcc6c3ecb4e769a05e2ecc605518f` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Default, Size=Extra Small, 方向=直向 | `f4fe3446db09a74cdd84e30e87e44e8dc635f1fc` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Default, Size=Extra Small, 方向=橫向 | `863d6a3332c788ab53dee1911f25a6311b728d89` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Default, Size=Large, 方向=橫向 | `5f13443576c6b5d4bc7027cd700c9a4450494916` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Default, Size=Small, 方向=橫向 | `ff9c8459b0f1c9e9e34445a11c76dfec1e88e2ce` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Disabled, Size=Default, 方向=橫向 | `57f3936448b86eba411cd11bfa4e9d395f116441` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Disabled, Size=Extra Small, 方向=直向 | `16320ee6d956c0e9cb64ead0ef757593263cdbdd` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Disabled, Size=Extra Small, 方向=橫向 | `46e65bd68a4eb6e7fa7d25fa4714d46ca4983f97` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Disabled, Size=Large, 方向=橫向 | `75b021cc95f487f804e2f1c3f80cba96b6461f58` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Disabled, Size=Small, 方向=橫向 | `0aee05cb781adce994912b353c506bf22a10f6c2` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Done, Size=Default, 方向=橫向 | `4fd095b86ff42766aa49704d62ebd7eb8571b4ea` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Done, Size=Extra Small, 方向=直向 | `51b5ae85a330e2e0d34b4a4e583b2a1c605fa812` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Done, Size=Extra Small, 方向=橫向 | `a63b5b59b087953b81f78738d02114c307fe07d7` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Done, Size=Large, 方向=橫向 | `5e5e65fe7a04931f17e88e7fec35614e18557b01` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Done, Size=Small, 方向=橫向 | `0ae44deb26e3c07c9444a3a3cbbd856b25aebfff` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Selected, Size=Default, 方向=橫向 | `8117e6cf811d29113083f3f1d4f680889b17488c` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Selected, Size=Extra Small, 方向=直向 | `deacd037af60e8cce9d80f41be4efdc0e1f02b92` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Selected, Size=Extra Small, 方向=橫向 | `cd1c107d14da5dfc1b4962e3a4beff61a63062f1` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Selected, Size=Large, 方向=橫向 | `fb318f7477de9d4950c40e5999baf230c31b3190` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Component / Type=Selected, Size=Small, 方向=橫向 | `46bdcb435c4ad95cde35e2956935c3996e4f2d19` | Variant，屬於 `Step Component` | ⚠️ 尚未填寫 Description |
| Step Group / Type=arrow, Size=Extra Small | `564b122658729b9a69a17b3b851c13061c9ac215` | Variant，屬於 `Step Group` | ⚠️ 尚未填寫 Description |
| Step Group / Type=Horizontal, Size=Default | `9afa3abec3b6719da03947e6d1842d19012a3279` | Variant，屬於 `Step Group` | ⚠️ 尚未填寫 Description |
| Step Group / Type=Horizontal, Size=Extra Small | `ee9b88340a029a85ef65b1b3739175392b9d63a3` | Variant，屬於 `Step Group` | ⚠️ 尚未填寫 Description |
| Step Group / Type=Horizontal, Size=Large | `67e7fa5da41a11c505c191b334083a2a0e5807c9` | Variant，屬於 `Step Group` | ⚠️ 尚未填寫 Description |
| Step Group / Type=Horizontal, Size=Small | `88a7343f044988e365976b8ab340a7c61c7fd38a` | Variant，屬於 `Step Group` | ⚠️ 尚未填寫 Description |
| Step Group / Type=Vertical, Size=Default | `7d1c7ab5a8da0c88b388c14d2defd54c1ed8852b` | Variant，屬於 `Step Group` | ⚠️ 尚未填寫 Description |
| Step Group / Type=Vertical, Size=Extra Small | `dc7a7117ff2444bee95bc0949920ba0ddd7c60c2` | Variant，屬於 `Step Group` | ⚠️ 尚未填寫 Description |
| Step Group / Type=Vertical, Size=Large | `1bc17ad55f45b719b8988292d5b0a3cdbe5ad3c2` | Variant，屬於 `Step Group` | ⚠️ 尚未填寫 Description |
| Step Group / Type=Vertical, Size=Small | `881bef30cd7d1ed135628d7030a24544947129ab` | Variant，屬於 `Step Group` | ⚠️ 尚未填寫 Description |

### Tabs（9）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Tab Component / Type=Default, Size=Default | `7196ec5e0a19fdafe8ab95b1bc74d866f47ea753` | Variant，屬於 `Tab Component` | ⚠️ 尚未填寫 Description |
| Tab Component / Type=Default, Size=Extra Small | `457020c24a1eb5b3da23337ca3f7a1d2a7dfe96f` | Variant，屬於 `Tab Component` | ⚠️ 尚未填寫 Description |
| Tab Component / Type=Default, Size=Small | `9f28f075087867c8bfcf1c4439864e8cf21f28ef` | Variant，屬於 `Tab Component` | ⚠️ 尚未填寫 Description |
| Tab Component / Type=Selected, Size=Default | `f3e1a084c3928fc37e1fbcdd7e9564de77a2c959` | Variant，屬於 `Tab Component` | ⚠️ 尚未填寫 Description |
| Tab Component / Type=Selected, Size=Extra Small | `239d2e9f15d81e166f406c8727efea644b45a99a` | Variant，屬於 `Tab Component` | ⚠️ 尚未填寫 Description |
| Tab Component / Type=Selected, Size=Small | `7e82ecce298677e57631be1e102cdc186e4e7813` | Variant，屬於 `Tab Component` | ⚠️ 尚未填寫 Description |
| Tab Group / Type=Default | `fb67dc93a662ceee645817b03fbcd4fd9562f64f` | Variant，屬於 `Tab Group` | ⚠️ 尚未填寫 Description |
| Tab Group / Type=Extra Small | `e676f3b1db1b4edefae2648bfc196ea1b93fa4df` | Variant，屬於 `Tab Group` | ⚠️ 尚未填寫 Description |
| Tab Group / Type=Small | `84a4790d33f6e23ba79714fef272476a3fd102d1` | Variant，屬於 `Tab Group` | ⚠️ 尚未填寫 Description |

### Toasts（2）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Toast / Style=Default | `58a1d1cf73c7147a111693e271452f0bb01aca2c` | Variant，屬於 `Toast` | ⚠️ 尚未填寫 Description |
| Toast / Style=Gray | `1e6c13a3b8ba073a83aa862961fc003af6cf1863` | Variant，屬於 `Toast` | ⚠️ 尚未填寫 Description |

### Tooltip（16）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| Tooltip / Type=2 Lines, Arrow=Bottom | `ffbe81674bb5b404ab77d2b7b22811cdb6a3de6b` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=2 Lines, Arrow=Left | `98fdedbc10c96be8b0a9d2b60b3bc796b43d72d1` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=2 Lines, Arrow=Right | `d284d1bf96e8f96eb6d5e229cb44bc4175de596f` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=2 Lines, Arrow=Top | `2532b025433dd914fbd63432087d3f81aa231a54` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Default, Arrow=Bottom | `d934c2509ae7198c14127e62cbdd26f3c0e1097d` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Default, Arrow=Left | `608ded48e72357472b4ede0cdf7148079db5e87b` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Default, Arrow=Right | `03e4324941943d6e29b5bc81caec6c7069c2b502` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Default, Arrow=Top | `cae8fa0c6b567c4409c12cbed1a61e89f6751a08` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Multilines Icon, Arrow=Bottom | `94b43164ae02eebe2c23e466a3f0475ed5dd8f85` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Multilines Icon, Arrow=Bottom | `03986565d52fdc3bf99e66abdb763f9a2914a9c6` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Multilines Icon, Arrow=Left | `21c3291ca2a5c8cf3161d30321f1b147f11896ac` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Multilines Icon, Arrow=Left | `9c5a65fc8038185e582d11ba461d1c71cabfcb63` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Multilines Icon, Arrow=Right | `4b3a344236e01aeb7e96f749be67e01a75041fe7` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Multilines Icon, Arrow=Right | `8255ac4f6967d4afc2b7ca1e49df7a4bd42aa7d1` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Multilines Icon, Arrow=Top | `b50a365512bdff96ab358d3b9d5c4419f8947472` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |
| Tooltip / Type=Multilines Icon, Arrow=Top | `ff315b8fe94a4efe8e9c1920068d62f2cd717c76` | Variant，屬於 `Tooltip` | ⚠️ 尚未填寫 Description |

### User flow（7）

| 元件名稱 | Figma Key | 類型 | Description |
|---|---|---|---|
| 📌 userstory | `328d4445e3a49867c1250313bf6ed018d358f58c` | COMPONENT | ⚠️ 尚未填寫 Description |
| Handoff — Marker / Property 1=1 | `a6c03dcc5b3e63d80605b369c1a4b82d4b52fe89` | Variant，屬於 `Handoff — Marker` | ⚠️ 尚未填寫 Description |
| Handoff — Marker / Property 1=2 | `f243ffeee6352916aacdb74fb68277f04859ec67` | Variant，屬於 `Handoff — Marker` | ⚠️ 尚未填寫 Description |
| Handoff — Marker / Property 1=3 | `33777a7b598115eaf994292fb391d665a758d9b0` | Variant，屬於 `Handoff — Marker` | ⚠️ 尚未填寫 Description |
| Handoff — Marker / Property 1=4 | `f4da712cca4adcf7bd8c442eddaf0ddae187bfe5` | Variant，屬於 `Handoff — Marker` | ⚠️ 尚未填寫 Description |
| Handoff — Marker / Property 1=5 | `449e87331f7784f8b952317dba02fb6e5bae14b8` | Variant，屬於 `Handoff — Marker` | ⚠️ 尚未填寫 Description |
| Handoff — Marker / Property 1=6 | `904489e943c82151d509f01e654fba64adb40362` | Variant，屬於 `Handoff — Marker` | ⚠️ 尚未填寫 Description |
