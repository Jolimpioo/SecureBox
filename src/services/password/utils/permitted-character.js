import chalk from "chalk";

async function permittedCharacters() {
    let permitted = [];  
    
    if (process.env.UPPERCASE_LETTERS === "true") 
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")

    if (process.env.LOWERCASE_LETTERS === "true") 
        permitted.push(... "abcdefghijklmnopqrstuvwxyz")

    if (process.env.NUMBERS === "true") 
        permitted.push(... "0123456789")

    if (process.env.SPECIAL_CHARACTERS === "true") 
        permitted.push(... "!@#$%^&*()-_")

    if (permitted.length === 0)
        throw new Error(chalk.red("Nenhum conjunto de caracteres habilitado no .env. Ative pelo menos um."));
    
    return permitted;
}

export default permittedCharacters;