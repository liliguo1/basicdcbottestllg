# Project Context

该文件用于保存本项目在本次对话中的关键上下文，便于后续继续开发时快速恢复状态。

## 基本信息

- 项目路径: `F:\projects\basicdcbot`
- 项目类型: Discord 机器人（Node.js）
- 目标: **不接入 LLM**，根据用户发送的**固定前缀指令**返回预设或可编程回复

## 当前代码结构

- `src/index.js`：启动入口
- `src/config.js`：环境变量（仅需 `DISCORD_TOKEN`，可选 `COMMAND_PREFIX`）
- `src/bot.js`：解析前缀消息并分发指令
- `src/commands.js`：指令名与 `respond(ctx)` 映射

## 交互逻辑

- 用户消息必须以配置的前缀开头（默认 `!`），例如 `!help`、`!ping`
- 未知指令不回复（静默忽略）

## 环境变量

- `DISCORD_TOKEN`（必需）
- `COMMAND_PREFIX`（可选，默认 `!`）

## 运行

- `npm install`
- `npm start`

## 备注

- 已从项目中移除 `openai` 与 LLM 相关代码。
- 更详细的本地操作步骤见 `HELP.md`。
