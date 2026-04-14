const { Client, GatewayIntentBits, Events } = require("discord.js");
const { getSkillById } = require("./skills");
const { generateSkillReply } = require("./llm");

function createDiscordBot({ config, llmClient }) {
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
  });

  client.once(Events.ClientReady, (readyClient) => {
    console.log(`Bot ready as ${readyClient.user.tag}`);
  });

  client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;
    if (!message.content.trim()) return;

    const shouldRespond =
      message.mentions.has(client.user) || message.content.startsWith("!ask ");

    if (!shouldRespond) return;

    const userInput = message.content.startsWith("!ask ")
      ? message.content.slice(5).trim()
      : message.content.replace(`<@${client.user.id}>`, "").trim();

    if (!userInput) {
      await message.reply("Please provide a message after mention or `!ask`.");
      return;
    }

    const skill = getSkillById(config.defaultSkillId);
    if (!skill) {
      await message.reply(`Skill "${config.defaultSkillId}" is not configured.`);
      return;
    }

    try {
      await message.channel.sendTyping();
      const reply = await generateSkillReply({
        client: llmClient,
        model: config.openAiModel,
        skill,
        userMessage: userInput,
      });
      await message.reply(reply);
    } catch (error) {
      console.error("Failed to generate reply:", error);
      await message.reply("Sorry, I ran into an error while generating a reply.");
    }
  });

  return client;
}

module.exports = {
  createDiscordBot,
};
