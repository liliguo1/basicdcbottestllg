# HELP

## 你现在需要做的事情

1. 进入项目目录  
   - PowerShell:  
     - `Set-Location F:\projects\basicdcbot`

2. 创建 `.env` 文件  
   - 执行:  
     - `copy .env.example .env`

3. 填写 `.env` 必需配置  
   - `DISCORD_TOKEN=你的Discord机器人Token`  
   - 可选:  
     - `COMMAND_PREFIX=!`（默认即为 `!`，可改成例如 `?`）

4. 启动机器人  
   - `npm start`

5. 在 Discord 测试  
   - 在频道发送 **`!help`** 查看全部指令  
   - 示例: **`!ping`**、**`!about`**

**说明：** 本机器人**不接入 LLM**，只对配置的**固定前缀指令**做出响应（见下方「指令配置」）。

## 常见排查

- 机器人在线但没有反应:  
  - 消息必须以配置的前缀开头（默认 `!`），例如 `!help`，不是纯文字聊天  
  - 检查 Bot 是否有该频道的查看与发言权限  
  - 若读不到普通消息，请在 Discord 开发者后台为 Bot 开启 **Message Content Intent**

- 启动报错:  
  - 确认依赖已安装: `npm install`  
  - 检查 Node.js 是否为 LTS 版本  
  - 确认 `.env` 中已填写 `DISCORD_TOKEN`

## 指令配置位置

- 文件: `src/commands.js`  
- 在其中增加条目即可添加新指令与固定回复逻辑  
