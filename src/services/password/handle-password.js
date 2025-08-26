import getPermittedCharacters from "./utils/permitted-character.js";

async function handle(config) {
    const permitted = getPermittedCharacters(config);

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * permitted.length)
        password += permitted[index];
    }

    return password;

}

export default handle;