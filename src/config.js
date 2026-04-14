const REQUIRED_ENV_KEYS = ["DISCORD_TOKEN", "OPENAI_API_KEY"];

function loadConfig() {
  const missingKeys = REQUIRED_ENV_KEYS.filter((key) => !process.env[key]);

  if (missingKeys.length > 0) {
    throw new Error(`Missing required env keys: ${missingKeys.join(", ")}`);
  }

  return {
    discordToken: process.env.DISCORD_TOKEN,
    openAiApiKey: process.env.OPENAI_API_KEY,
    openAiModel: process.env.OPENAI_MODEL || "gpt-4o-mini",
    defaultSkillId: process.env.DEFAULT_SKILL_ID || "basic-chat",
  };
}

module.exports = {
  loadConfig,
};
