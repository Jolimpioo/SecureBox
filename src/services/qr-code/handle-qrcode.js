import qr from "qrcode-terminal"
import chalk from "chalk";
import { printQRCodeFeedback } from "./utils/feedback-qrcode.js"

async function handle(err, result) {
    if (err) {
        console.log(chalk.red.bold("Erro ao gerar QR Code"));
        return;
    };

    const isSmall = result.type == 2;

    printQRCodeFeedback(result.link, isSmall); 

    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(qrcode);
    })
}

export default handle;