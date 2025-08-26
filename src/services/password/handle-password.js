import getPermittedCharacters from "./utils/permitted-character.js";

async function handle(config) {
    let password = "";
    const permitted = await getPermittedCharacters(config);
    
    for (let i = 0; i < config.length; i++) {
        const index = Math.floor(Math.random() * permitted.length)
        password += permitted[index];
    }

    return password;

}

export default handle;