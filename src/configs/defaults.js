const password = {
  length: Number(process.env.PASSWORD_LENGTH) || 8,
  uppercase: process.env.UPPERCASE_LETTERS === "true" || true,
  lowercase: process.env.LOWERCASE_LETTERS === "true" || true,
  numbers: process.env.NUMBERS === "true" || true,
  symbols: process.env.SPECIAL_CHARACTERS === "true" || true,
};

export default { password };
