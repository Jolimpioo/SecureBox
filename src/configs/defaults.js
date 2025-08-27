const toBool = (val, def) => (val === undefined ? def : val === "true");

const password = {
  length: Number(process.env.PASSWORD_LENGTH) > 0 ? Number(process.env.PASSWORD_LENGTH) : 8,
  uppercase: toBool(process.env.UPPERCASE_LETTERS, true),
  lowercase: toBool(process.env.LOWERCASE_LETTERS, true),
  numbers:   toBool(process.env.NUMBERS, true),
  symbols:   toBool(process.env.SPECIAL_CHARACTERS, true),
};

export default { password };
