import chalk from "chalk";
import handle from "./handle-password.js";
import { printPasswordFeedback } from "./utils/feedback-password.js"

async function createPassword(options) {
    console.log(chalk.cyan("\n[GERADOR DE SENHAS]\n"));

    const envConfig = {
        length: Number(process.env.PASSWORD_LENGTH) || 8,
        uppercase: process.env.UPPERCASE_LETTERS === "true",
        lowercase: process.env.LOWERCASE_LETTERS === "true",
        number: process.env.NUMBERS === "true",
        symbols: process.env.SPECIAL_CHARACTERS === "true",
    };

    /*
    "config" -> sobrescreve env se existir
    ?? (Nullish Coalescing): Usa o valor da direita apenas se o da esquerda for null ou undefined
    */
    const config = {
        length: options.length ? Number(options.length) : envConfig.length,
        uppercase: options.uppercase ?? envConfig.uppercase,
        lowercase: options.lowercase ?? envConfig.lowercase,
        number: options.number ?? envConfig.number,
        symbols: options.symbols ?? envConfig.symbols,
    };

    if (isNaN(config.length) || config.length < 6) {
        console.log(chalk.red("Erro: o tamanho da senha deve ser um número >= 6."));
        process.exit(1);
    }

    if (!config.uppercase && !config.lowercase && !config.number && !config.symbols) {
        console.log(chalk.red("Erro: selecione pelo menos um tipo de caractere (uppercase, lowercase, number, symbols)."));
        process.exit(1);
    }

    const password = await handle(config)
    printPasswordFeedback(password);
}

export default createPassword;