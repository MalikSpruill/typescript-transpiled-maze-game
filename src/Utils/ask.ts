import readline from 'readline';
import { promisify } from 'util';

// Creates a readline interface for user input
// and output
const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promisify the rl.question method to use async/await
const question = promisify(rl.question).bind(rl);

export default {
    rl,
    question
};