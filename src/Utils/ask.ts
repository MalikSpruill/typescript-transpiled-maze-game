import readline from 'readline';
import { promisify } from 'util';

const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = promisify(rl.question).bind(rl);

export default {
    rl,
    question
};