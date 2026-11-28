import {scenarios} from "./scenarios.mjs";
import { checkstep, countSteps } from "./grader.mjs";


const db = scenarios.find(s => s.name === "Database outage");

const messages = [ "I declare severity high",
                   "I will notify manager",
                   "Let's  reboot it"]

                   
                   
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