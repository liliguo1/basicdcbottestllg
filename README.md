# basicdcbot

A basic Discord chat bot that calls an LLM and uses a configurable `skill` to control response behavior.

## Setup

1. Install dependencies:
   - `npm install`
2. Copy env file:
   - `copy .env.example .env`
3. Fill `.env` values:
   - `DISCORD_TOKEN`
   - `OPENAI_API_KEY`
   - optional `OPENAI_MODEL`
   - optional `DEFAULT_SKILL_ID`
4. Start:
   - `npm start`

## How to chat with the bot

- Mention the bot in any channel it can read, for example:
  - `@YourBot hello`
- Or use:
  - `!ask Tell me what you can do`

## Skill location

- Skill definitions are in `src/skills.js`.
- The included base skill id is `basic-chat`.
