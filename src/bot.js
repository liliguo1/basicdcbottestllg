const { Client, GatewayIntentBits, Events } = require("discord.js");
const { getCommand } = require("./commands");

function parsePrefixedMessage(rawContent, prefix) {
  if (!rawContent.startsWith(prefix)) return null;
  const rest = rawContent.slice(prefix.length).trim();
  if (!rest) return null;
  const firstSpace = rest.indexOf(" ");
  if (firstSpace === -1) {
    return { name: rest.toLowerCase(), args: "" };
  }
  return {
    name: rest.slice(0, firstSpace).toLowerCase(),
    args: rest.slice(firstSpace + 1).trim(),
  };
}

function createDiscordBot({ config }) {
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
    const content = message.content.trim();
    if (!content) return;

    const parsed = parsePrefixedMessage(content, config.commandPrefix);
    if (!parsed) return;

    const command = getCommand(parsed.name);
    if (!command) return;

    try {
      const ctx = {
        prefix: config.commandPrefix,
        args: parsed.args,
        message,
      };
      const reply = command.respond(ctx);
      const text = typeof reply === "string" ? reply : String(reply);
      await message.reply(text);
    } catch (error) {
      console.error("Command failed:", error);
      await message.reply("执行指令时出错，请稍后再试。");
    }
  });

  return client;
}

module.exports = {
  createDiscordBot,
};
