require("dotenv").config();

const { loadConfig } = require("./config");
const { createLlmClient } = require("./llm");
const { createDiscordBot } = require("./bot");

async function start() {
  const config = loadConfig();
  const llmClient = createLlmClient(config.openAiApiKey);
  const bot = createDiscordBot({ config, llmClient });

  await bot.login(config.discordToken);
}

start().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
