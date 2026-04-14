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
   - `OPENAI_API_KEY=你的OpenAI密钥`
   - 可选:
     - `OPENAI_MODEL=gpt-4o-mini`
     - `DEFAULT_SKILL_ID=basic-chat`

4. 启动机器人
   - `npm start`

5. 在 Discord 测试聊天
   - 方式一: 在频道中 `@你的机器人 你好`
   - 方式二: `!ask 介绍一下你自己`

## 常见排查

- 机器人在线但不回复:
  - 检查 Bot 是否有频道查看和发言权限
  - 检查是否开启了 Message Content Intent
  - 检查 `.env` 是否填写正确

- 启动报错:
  - 确认依赖是否安装完成: `npm install`
  - 检查 Node.js 版本是否为 LTS

## 当前基础 skill 位置

- 文件: `src/skills.js`
- 基础 skill id: `basic-chat`
