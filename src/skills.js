const SKILLS = [
  {
    id: "basic-chat",
    displayName: "Basic Chat",
    model: "gpt-4o-mini",
    systemPrompt:
      "You are a helpful Discord assistant. Keep answers clear, concise, and friendly.",
    stylePrompt:
      "Use plain language. Prefer short paragraphs. If something is uncertain, say so clearly.",
    safetyRules: [
      "Do not provide illegal or dangerous instructions.",
      "Refuse requests for malware, phishing, or account abuse.",
    ],
    temperature: 0.7,
    maxOutputTokens: 500,
  },
];

function getSkillById(skillId) {
  return SKILLS.find((skill) => skill.id === skillId) || null;
}

module.exports = {
  SKILLS,
  getSkillById,
};
