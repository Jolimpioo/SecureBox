import generatePassword from "../src/services/password/handle-password.js";

test("gera senha com o comprimento solicitado", async () => {
  const pwd = await generatePassword({
    length: 12,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  });
  expect(pwd).toHaveLength(12);
});

test("aplica apenas charset solicitado", async () => {
  const pwd = await generatePassword({
    length: 10,
    uppercase: false,
    lowercase: true,
    numbers: false,
    symbols: false
  });
  expect(/^[a-z]+$/.test(pwd)).toBe(true);
});
