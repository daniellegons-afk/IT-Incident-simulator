import readline from 'readline/promises'; 
import {stdin as input, stdout as output} from 'process';
import {users, hash} from './users.mjs';

async function login() {
    let attempts = 0;
    const rl = readline.createInterface({input, output});
    
    while(attempts < 3){

        const username = (await rl.question("Username: ")).toLowerCase().trim();
        const password = await rl.question("Password: ");
        const account = users.find(u => u.name === username);
        if(account && account.password === hash(password)){
            rl.close();
            return "Successfully logged in";
            
        }else{
            attempts++;
            console.log(`Incorrect, please try again, ${3- attempts} attempts left`);

        }
    }
    rl.close()
    return "the account is now locked"

}
console.log(await login());
