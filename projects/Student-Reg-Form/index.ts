import inquirer from "inquirer";

const student = await inquirer.prompt([{
name :"first name",
    type : "input",
    message: "Enter Your Fist name",
},
])