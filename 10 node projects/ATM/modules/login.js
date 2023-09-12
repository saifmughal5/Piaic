import users from "./users.js";
import inquirer from "inquirer";
async function login() {
    const answer = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Please Enter your Account Number"
        },
        {
            name: "pin",
            type: "password",
            message: "Enter your pin code"
        }]);
    // let user = users.find(x=> x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);
    let user = users.find(x => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);
    console.log(user, typeof user);
    if (typeof user != "undefined") {
        console.log("Login");
    }
    else {
        console.log("You Enter invalid pin or Account Number ");
    }
}
export default login;
