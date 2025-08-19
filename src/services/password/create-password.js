import chalk from "chalk";
import handle from "./handle-password.js";
import { printPasswordFeedback } from "./utils/feedback-password.js"

async function createPassword() {
    console.log(chalk.cyan("\n[GERADOR DE SENHAS]\n"));
    
    const password = await handle()
    printPasswordFeedback(password);
}

export default createPassword;