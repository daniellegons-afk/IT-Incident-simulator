import {scenarios} from "./scenarios.mjs";
import { checkstep, countSteps } from "./grader.mjs";


const db = scenarios.find(s => s.name === "Database outage");

const messages = [ "I declare severity high",
                   "I will notify manager",
                   "Let's  reboot it"]

                   
//Input: the list of messages and one step
//Output: a number, the possotion of the first matchhing message (or -1)

const pos = messages.findIndex(m => m.toLowerCase().includes("declare severity"))

db.checkpoints.forEach(step =>{
    const pos = messages.findIndex(m => checkstep(m, step));
    console.log(`${step} -> ${pos}`);
})

/*for (const message of messages){
        let any = false;
        pos.findindex(checkstep(m, step)){
            db.checkpoints.forEach((step) => {
                if(checkstep(message, step)){
                    console.log(`"${message}" -> ${step} `);
                    any = true;
             }
            
         });
        if(!any) console.log(`"${message}" -> (nothing)`);
        }
        
           

    
}*/

const total = countSteps(messages.join(" "), db.checkpoints);
console.log(`Score: ${total}/ ${db.checkpoints.length}`);
console.log(pos)
