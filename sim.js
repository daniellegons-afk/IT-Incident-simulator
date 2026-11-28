import {scenarios, opening} from "./scenarios.mjs";
import { checkstep, countSteps } from "./grader.mjs";
import readline from 'readline/promises';
import {stdin as input, stdout as output} from 'process';

const db = scenarios.find(s => s.name === "Database outage");

function engineerReply(message, scenario) {
    if (scenario.checkpoints.some(step => checkstep(message, step))) {
        return "Okay, whats the next step?";
    }
    return "That didnt work, what do I do now";
}

console.log(`Engineer: ${opening}`);

const rl = readline.createInterface({ input, output });
const messages = [];

for (let i = 0; i < 3; i++) {
    const text = await rl.question("Trainee: ");
    messages.push(text);
    console.log(`Engineer: ${engineerReply(text, db)}`);
}

rl.close();

const positions = db.checkpoints.map(step => messages.findIndex(m => checkstep(m, step)));

let last = -1
let inOrder = true
for(let i = 0; i < positions.length; i++){
    const p = positions[i];
    if(p  === -1){
        continue;
    }
    if(p < last){
        inOrder = false;
    } 
    last = p;
}

const total = countSteps(messages.join(" "), db.checkpoints);
console.log(`Score: ${total}/ ${db.checkpoints.length}`);
console.log(positions);
console.log(`In order: ${inOrder}`);