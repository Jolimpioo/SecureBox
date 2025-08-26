import chalk from "chalk";
import handle from "./handle-password.js";
import { printPasswordFeedback } from "./utils/feedback-password.js";
import defaults from "../../configs/defaults.js";

async function createPassword(options) {
    console.log(chalk.cyan("\n[GERADOR DE SENHAS]\n"));

    const envConfig = defaults.password;

    const customCharsetProvided =
        typeof options.uppercase !== 'undefined' ||
        typeof options.lowercase !== 'undefined' ||
        typeof options.numbers !== 'undefined' ||
        typeof options.symbols !== 'undefined';

    const config = {
        length: options.length ? Number(options.length) : envConfig.length,

        uppercase: customCharsetProvided
            ? typeof options.uppercase !== "undefined"
                ? Boolean(options.uppercase)
                : envConfig.uppercase
            : envConfig.uppercase,

        lowercase: customCharsetProvided
            ? typeof options.lowercase !== "undefined"
                ? Boolean(options.lowercase)
                : envConfig.lowercase
            : envConfig.lowercase,

        numbers: customCharsetProvided
            ? typeof options.numbers !== "undefined"
                ? Boolean(options.numbers)
                : envConfig.numbers
            : envConfig.numbers,

        symbols: customCharsetProvided
            ? typeof options.symbols !== "undefined"
                ? Boolean(options.symbols)
                : envConfig.symbols
            : envConfig.symbols,
    };

    if (isNaN(config.length) || config.length < 6) {
        console.log(chalk.red("Erro: o tamanho da senha deve ser um número >= 6."));
        process.exit(1);
    }

    if (!config.uppercase && !config.lowercase && !config.numbers && !config.symbols) {
        console.log(chalk.red("Erro: selecione pelo menos um tipo de caractere (uppercase, lowercase, numbers, symbols)."));
        process.exit(1);
    }

    const password = await handle(config);
    printPasswordFeedback(password);
}

export default createPassword;