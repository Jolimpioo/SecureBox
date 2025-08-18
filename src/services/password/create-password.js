import chalk from "chalk";
import handle from "./handle-password.js";

async function createPassword() {
    console.log(chalk.green("password"))
    
    const password = await handle()
    console.log(password);
}

export default createPassword;