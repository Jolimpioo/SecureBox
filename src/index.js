#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import createQRCode from "./services/qr-code/create-qrcode.js";
import createPassword from "./services/password/create-password.js";

const program = new Command();

program
  .name("securebox")
  .description("Kit de utilidade: gerador de senhas e QR Codes")
  .version(process.env.npm_package_version || "1.0.0")
  .showHelpAfterError()
  .showSuggestionAfterError();

program.addHelpText("afterAll", chalk.cyan.bold("\nSecureBox CLI\n"));
program.addHelpText(
  "after",
  `
Exemplos:
  $ securebox password --length 12 --symbols
  $ securebox qrcode --link https://exemplo.com --terminal

Dica: ao usar "npm start", passe argumentos após "--":
  $ npm start -- password --length 12 --symbols
`
);

program
  .command("qrcode")
  .description("Gerar um QR Code")
  .option("-l, --link <string>", "Link ou texto para gerar QR Code")
  .option("-t, --terminal", "Gerar QR Code compacto para terminal")
  .action(async (options) => {
    try {
      await createQRCode(options);
    } catch (err) {
      console.error(chalk.red.bold("Erro:"), err.message || err);
      process.exit(1);
    }
  });

program
  .command("password")
  .description("Gerar uma senha")
  .option("-L, --length <number>", "Tamanho da senha", "8")
  .option("-n, --numbers", "Incluir números")
  .option("-s, --symbols", "Incluir símbolos especiais")
  .option("-u, --uppercase", "Incluir letras maiúsculas")
  .option("-l, --lowercase", "Incluir letras minúsculas")
  .action(async (options) => {
    try {
      await createPassword(options);
    } catch (err) {
      console.error(chalk.red.bold("Erro:"), err.message || err);
      process.exit(1);
    }
  });

program.parse(process.argv);

if (process.argv.length <= 2) {
  program.outputHelp();
}