# basicdcbot

A basic Discord bot that responds to **prefix commands** only (no LLM).

## Setup

1. Install dependencies: `npm install`
2. Copy env file: `copy .env.example .env`
3. Fill `.env`:
   - `DISCORD_TOKEN`
   - optional `COMMAND_PREFIX` (default `!`)
4. Start: `npm start`

## Commands

Default prefix is `!`. Examples:

- `!help` — list commands
- `!ping` — health check
- `!about` — short info

Add or edit commands in `src/commands.js`.
