import gameDetails
 from "./Game/gameDetails";
import User from "./User/user";
 import ask from "./Utils/ask";
 import { gameSequence } from "./Game/gameSequence";

 /*
  TODO:
    - Be sure to add code comments for the intent of the function
    - Add a README file to the project
    
 */
async function main(): Promise<void> {
    const name = await ask.question('Hello Adventurer, what is your name? ') as unknown as string;
    const user = new User(name ?? "", gameDetails.startRoom);

    await user.showInstructions();
    await gameSequence(user);

    let decided: boolean = false;

    while (!decided) {
        const confirmPlayAgain = await ask.question('Would you like to play again? Type Yes or No: ') as unknown as string;
        if (confirmPlayAgain === 'Yes') {
            decided = true;
            await main();
        } else if (confirmPlayAgain === 'No') {
            console.log('Come back and play again soon!');
            decided = true;
        } else {
            console.log('You didn\'t choose Yes or No, try again.');
        }
    }
};

process.on('exit', () => {
    console.log('\nExiting safely......');
    ask.rl.close();         // close readline interface
    process.exit(0);
});

await main();

