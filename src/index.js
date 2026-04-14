require("dotenv").config();

const { loadConfig } = require("./config");
const { createDiscordBot } = require("./bot");

async function start() {
  const config = loadConfig();
  const bot = createDiscordBot({ config });

  await bot.login(config.discordToken);
}

start().catch((error) => {
  console.error("Startup failed:", error);
  process.exit(1);
});
