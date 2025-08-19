import chalk from "chalk";

export function printQRCodeFeedback(link, isSmall) {
    console.log(chalk.green.bold("\nQR Code gerado com sucesso!\n"));
    console.log(chalk.yellow("Link: ") + chalk.white(link));
    console.log(chalk.yellow("Modo: ") + (isSmall ? "Terminal (compacto)" : "Normal"));
}