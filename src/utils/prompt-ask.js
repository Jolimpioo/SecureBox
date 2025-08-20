import prompt from "prompt";

let started = false;

export function ask(schema) {
    if (!started) {
        prompt.start();
        started = true;
    }

    return new Promise((resolve, reject) => {
        prompt.get(schema, (err, result) => {
            if (err) {
                if (err.message && err.message.toLowerCase().includes("canceled")) {
                    console.log("\nOperação cancelada pelo usuário.\n");
                    process.exit(0);
                }
                return reject(0);
            }
            resolve(result);
        });
    });
};