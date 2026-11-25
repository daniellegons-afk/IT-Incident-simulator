import {createHash} from 'crypto';

export const hash = (text) => createHash('sha256').update(text).digest('hex');
export const users = [{name: "fred", password:"08fa299aecc0c034e037033e3b0bbfaef26b78c742f16cf88ac3194502d6c394" }, 
                    {name:"sam", password: "8988ab0753c8b1e9b37f9f38412d6e96a8f858469d53ae82dac7245b3aec102f"}]