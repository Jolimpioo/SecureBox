async function getPermittedCharacters(config) {
    let characters = [];

    if (config.uppercase) {
        characters.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (config.lowercase) {
        characters.push(... "abcdefghijklmnopqrstuvwxyz");
    }

    if (config.numbers) {
        characters.push(... "0123456789");
    }

    if (config.symbols) {
        characters.push(... "!@#$%^&*-_");
    }

    return characters;
}

export default getPermittedCharacters;