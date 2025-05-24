import ask from './Utils/ask';
import { startGame } from './Game/gameSequence';

// Main function to start the application
async function main(): Promise<void> {
  try {
    while (true) {
      const playAgain: string = await startGame();

      if (playAgain === 'no') {
        console.log('Thanks for playing! Goodbye!');
        break;
      }

      console.log("Great! Let's play again!");
    }
  } catch (error) {
    console.error('An error occurred:', error);

    process.exit(1);
  }

  process.exit(0);
}

process.on('exit', () => {
  console.log('\nExiting safely......');
  ask.rl.close(); // close readline interface
});

main();
