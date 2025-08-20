import chalk from "chalk";
import { ask } from "./utils/prompt-ask.js";
import promptSchemaMain from "./prompts-schema/schema-main.js";
import createQRCode from "./services/qr-code/create-qrcode.js";
import createPassword from "./services/password/create-password.js";

async function main() {
    let running = true;

    while (running) {
        const { select } = await ask(promptSchemaMain);

        if (select == 1) {
            await createQRCode();
            continue;
        }

        if (select == 2) {
            await createPassword();
            continue;
        }

        if (select == 3) {
            console.log(chalk.blue("\nPrograma encerrado.\n"))
            running = false;
        }
    }
}

main();