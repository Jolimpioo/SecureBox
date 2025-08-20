import { ask } from "../../utils/prompt-ask.js";
import promptSchemaQRCode from "../../prompts-schema/schema-qrcode.js";
import handle from "./handle-qrcode.js";

async function createQRCode() {
    const result = await ask(promptSchemaQRCode);
    await handle(null, result);
}

export default createQRCode;