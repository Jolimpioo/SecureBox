import chalk from "chalk";

async function getPermittedCharacters() {
    let characters = [];

    if (config.uppercase) characters.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

    if (config.lowercase) characters.push(... "abcdefghijklmnopqrstuvwxyz")

    if (config.number) characters.push(... "0123456789")

    if (config.symbols) characters.push(... "!@#$%^&*()-_")

    if (characters.length === 0)
        throw new Error(chalk.red("Nenhum conjunto de caracteres habilitado no .env. Ative pelo menos um."));

    return characters;
}

export default getPermittedCharacters;