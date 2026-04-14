const OpenAI = require("openai");

function createLlmClient(apiKey) {
  return new OpenAI({ apiKey });
}

function buildSystemPrompt(skill) {
  const parts = [skill.systemPrompt, skill.stylePrompt];

  if (Array.isArray(skill.safetyRules) && skill.safetyRules.length > 0) {
    const joinedRules = skill.safetyRules.map((rule) => `- ${rule}`).join("\n");
    parts.push(`Safety rules:\n${joinedRules}`);
  }

  return parts.filter(Boolean).join("\n\n");
}

async function generateSkillReply({ client, model, skill, userMessage }) {
  const systemPrompt = buildSystemPrompt(skill);
  const response = await client.responses.create({
    model: model || skill.model,
    input: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    temperature: skill.temperature ?? 0.7,
    max_output_tokens: skill.maxOutputTokens ?? 500,
  });

  return response.output_text?.trim() || "I could not generate a response.";
}

module.exports = {
  createLlmClient,
  generateSkillReply,
};
