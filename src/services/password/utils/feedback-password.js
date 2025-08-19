import chalk from "chalk";

function analyzePassword(password) {
    let types = [];

    if (/[a-z]/.test(password)) types.push("Letras minúsculas");
    if (/[A-Z]/.test(password)) types.push("Letras maiúsculas");
    if (/[0-9]/.test(password)) types.push("Números");
    if (/[^a-zA-Z0-9]/.test(password)) types.push("Especiais");
    
    return types;
}

export function printPasswordFeedback(password) {
    console.log(chalk.green.bold("Senha gerada com sucesso!\n"));
    console.log(chalk.yellow("Senha: ") + chalk.white.bold(password));
    console.log(chalk.yellow("Comprimento: ") + password.length);

    const types = analyzePassword(password)
    console.log(chalk.yellow("Inclui: ") + types.join(", "));
}