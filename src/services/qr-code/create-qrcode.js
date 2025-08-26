import chalk from "chalk";
import handle from "./handle-qrcode.js";

async function createQRCode(options) {
    if (!options.link) {
        console.log(chalk.red.bold("Erro:"));
        console.log(chalk.red("É necessário informar um link para gerar o QR Code\n"));
        console.log("Exemplo:");
        console.log("  $ securebox qrcode --link https://meusite.com --terminal\n");
        process.exit(1);
    }

    const result = {
        link: options.link,
        type: options.terminal ? 2 : 1,
    }

    await handle(null, result);
}

export default createQRCode;