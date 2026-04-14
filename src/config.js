const REQUIRED_ENV_KEYS = ["DISCORD_TOKEN"];

function loadConfig() {
  const missingKeys = REQUIRED_ENV_KEYS.filter((key) => !process.env[key]);

  if (missingKeys.length > 0) {
    throw new Error(`Missing required env keys: ${missingKeys.join(", ")}`);
  }

  return {
    discordToken: process.env.DISCORD_TOKEN,
    commandPrefix: process.env.COMMAND_PREFIX || "!",
  };
}

module.exports = {
  loadConfig,
};
