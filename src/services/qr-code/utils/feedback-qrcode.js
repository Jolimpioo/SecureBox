import chalk from "chalk";

export function printQRCodeSuccess(link, isSmall) {
    console.log(chalk.green.bold("\nQR Code gerado com sucesso!\n"));
    console.log(chalk.yellow("Link: ") + chalk.white(link));
    console.log(chalk.yellow("Modo: ") + (isSmall ? "Terminal (compacto)" : "Normal"));
}

export function printQRCodeError(error) {
  console.log(chalk.red.bold("[ERRO] Falha ao gerar QR Code."));
  if (error instanceof Error) {
    console.error(chalk.red(error.message));
  } else {
    console.error(chalk.red(error));
  }
}