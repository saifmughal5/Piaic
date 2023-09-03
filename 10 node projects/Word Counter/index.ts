#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import showBanner from 'node-banner';
(async () => {
    await showBanner('Word Counter', 'by Saif Mughal');
})();


const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])

const words = answers.Sentence.trim().split(" ")
console.log(chalk.bgBlueBright( `Your sentence word count is ${words.length}`))
// console.log(chalk.bgCyanBright.bold(`Total Price is: ${sum}`));
