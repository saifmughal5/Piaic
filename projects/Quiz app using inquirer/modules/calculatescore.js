import { mcqs } from "./mcqs.js";
let userInput = [];
userInput.push(mcqs['Qno1']);
userInput.push(mcqs['Qno2']);
userInput.push(mcqs['Qno3']);
userInput.push(mcqs['Qno4']);
userInput.push(mcqs['Qno5']);
userInput.push(mcqs['Qno6']);
userInput.push(mcqs['Qno7']);
userInput.push(mcqs['Qno8']);
userInput.push(mcqs['Qno9']);
userInput.push(mcqs['Qno10']);
console.log(userInput);
function calculateScore(count) {
    let score = 0;
    for (let x = 0; x < userInput.length; x++) {
        if (userInput[x] == 'Central Processing Unit' || userInput[x] == 'Keyboard' || userInput[x] == 'Assembly' || userInput[x] == 'Random Access Memory' || userInput[x] == 'Hard Disk Drive' || userInput[x] == 'HTTPS' || userInput[x] == 'Xerox' || userInput[x] == 'AWS' || userInput[x] == 'Bit' || userInput[x] == 'CPU') {
            score++;
        }
    }
    count = score;
    return count;
}
export { calculateScore };
