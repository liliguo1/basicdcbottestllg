/**
 * 指令与固定回复映射。要加新指令：在此对象中增加条目即可。
 * key 为去掉前缀后的指令名（小写）。
 */
const COMMAND_DEFINITIONS = {
  ping: {
    description: "测试机器人是否在线",
    respond: () => "Pong!",
  },
  help: {
    description: "显示本帮助",
    respond: (ctx) => {
      const lines = Object.entries(COMMAND_DEFINITIONS).map(
        ([name, def]) => `**${ctx.prefix}${name}** — ${def.description}`
      );
      return ["可用指令：", "", ...lines].join("\n");
    },
  },
  about: {
    description: "关于本机器人",
    respond: () =>
      "我是指令型 Discord 机器人（未接入 LLM）。发送 **!help** 查看可用指令。",
  },
};

function getCommand(name) {
  if (!name) return null;
  return COMMAND_DEFINITIONS[name.toLowerCase()] || null;
}

module.exports = {
  COMMAND_DEFINITIONS,
  getCommand,
};
