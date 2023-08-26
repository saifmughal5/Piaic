import inquirer from "inquirer";
const mcqs = await inquirer.prompt([
    {
        name: "Qno1",
        type: 'list',
        message: "What does CPU stand for?",
        choices: ["Central Processing Unit", "Computer Processing Unit", "Central Processor Unit", "Computer Processor Unit"],
        correctIndex: 0,
    },
    {
        name: "Qno2",
        type: 'list',
        message: "Which of the following is an example of an input device?",
        choices: ["Monitor", "Printer", "Keyboard", "Speakers"],
        correctIndex: 2,
    },
    {
        name: "Qno3",
        type: 'list',
        message: "Which programming language is known as the 'mother of all languages'?",
        choices: ["C", "Java", "Python", "Assembly"],
        correctIndex: 3,
    },
    {
        name: "Qno4",
        type: 'list',
        message: "What does RAM stand for?",
        choices: ["Random Access Memory", "Read-Only Memory", "Real Access Memory", "Random Memory"],
        correctIndex: 0,
    },
    {
        name: "Qno5",
        type: 'list',
        message: "Which of the following storage devices has the largest storage capacity?",
        choices: ["Hard Disk Drive", "Solid State Drive", "USB Flash Drive", "Blu-ray Disc"],
        correctIndex: 0,
    },
    {
        name: "Qno6",
        type: 'list',
        message: "Which protocol is used for secure data transfer over the internet?",
        choices: ["HTTP", "FTP", "SMTP", "HTTPS"],
        correctIndex: 3,
    },
    {
        name: "Qno7",
        type: 'list',
        message: "Which company developed the first graphical user interface (GUI) for computers?",
        choices: ["Apple", "Microsoft", "IBM", "Xerox"],
        correctIndex: 3,
    },
    {
        name: "Qno8",
        type: 'list',
        message: "Which of the following is a cloud computing service provided by Amazon?",
        choices: ["Azure", "Google Cloud", "AWS", "IBM Cloud"],
        correctIndex: 2,
    },
    {
        name: "Qno9",
        type: 'list',
        message: "What is the smallest unit of digital information?",
        choices: ["Byte", "Bit", "Megabyte", "Kilobyte"],
        correctIndex: 1,
    },
    {
        name: "Qno10",
        type: 'list',
        message: "Which computer component is responsible for executing instructions of a computer program?",
        choices: ["Hard Disk", "RAM", "CPU", "GPU"],
        correctIndex: 2,
    },
]);
export { mcqs };
