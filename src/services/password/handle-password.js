import getPermittedCharacters from "./utils/permitted-character.js";
import { secureRandomIndex } from "../../utils/random.js";

export default async function generatePassword(config) {
    if (!config || typeof config.length !== "number") {
        throw new Error("Config inválida: informe --length <number>.");
    }

    const permitted = await getPermittedCharacters(config);

    if (!Array.isArray(permitted) || permitted.length === 0) {
        throw new Error("Nenhum conjuntto de caracteres disponível para gerar a senha.");
    }

    let password = "";
    for (let i = 0; i < config.length; i++) {
        const index = await secureRandomIndex(permitted.length);
        password += permitted[index];
    }

    return password;
}