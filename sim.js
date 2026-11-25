import {scenarios} from "./scenarios.mjs";
import { checkstep, countSteps } from "./grader.mjs";


const db = scenarios.find(s => s.name === "Database outage");

const messages = [ "I declare severity high",
                   "I will notify manager",
                   "Let's  reboot it"]

for (const message of messages){
        let any = false;

        db.checkpoints.forEach((step) => {
            if(checkstep(message, step)){
                console.log(`"${message}" -> ${step} `);
                any = true;
            }
        
        });
        if(!any) console.log(`"${message}" -> (nothing)`);

    
}

const total = countSteps(messages.join(" "), db.checkpoints);
console.log(`Score: ${total}/ ${db.checkpoints.length}`);

