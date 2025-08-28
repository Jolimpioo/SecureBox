import qr from "qrcode-terminal";
import { printQRCodeSuccess, printQRCodeError } from "./utils/feedback-qrcode.js";

async function handle(err, result) {
    if (err) {
        printQRCodeError(err);
        return;
    };

    const isSmall = result.type === 2;

    try {
        printQRCodeSuccess(result.link, isSmall);

        qr.generate(result.link, { small: isSmall }, (qrcode) => {
            console.log(qrcode);
        });

    } catch (error) {

    }

}

export default handle;