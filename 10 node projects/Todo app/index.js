import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from 'node-banner';
(async () => {
    await showBanner('TODO APP', 'by Saif Mughal');
})();
let todos = []; // There will be multiple todos so we are taking string array
let loop = true; // loop chalta rhe 
while (loop) {
    const answers = await inquirer.prompt // we are using this to take input from user 
    ([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "do you want to add more todo ? ",
            default: false,
        },
    ]);
    const { TODO, addmore } = answers;
    // console.log(answers)
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log(chalk.bgBlue("Kindly add valid inputs"));
    }
}
if (todos.length > 0) {
    console.log(chalk.redBright("Your todo list is"));
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log(chalk.gray("No Todos found"));
}
