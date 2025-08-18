import prompt from "prompt";
import promptSchemaQRCode from "../../prompts-schema/schema-qrcode.js";
import handle from "./handle-qrcode.js";

async function createQRCode() {
    prompt.get(promptSchemaQRCode, (handle));

    prompt.start();
}

export default createQRCode;