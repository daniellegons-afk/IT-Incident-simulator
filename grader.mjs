export function checkstep(messages, step){
    return messages.toLowerCase().includes(step)
}
export function countSteps(messages, steps){
    
    let counter = 0;
    for (const step of steps) {
        if (checkstep(messages, step)){
            counter++;

        }
    }

    return counter;
    


}
