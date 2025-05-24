import { bossFightSequence } from './boss';
import ask from '../Utils/ask';
import gameDetails from './gameDetails';
import User from '../User/user';
import chalk from 'chalk';

/**
 * Function to start the game and prompt the user for their name
 */
export async function startGame(): Promise<string> {
  const name: string = (await ask.question(
    chalk.blue('Hello Adventurer, what is your name? '),
  )) as unknown as string;
  const user: User = new User(name ?? '', gameDetails.startRoom);

  await user.showInstructions();
  await gameSequence(user);

  // Ask the user if they want to play again
  while (true) {
    const confirmPlayAgain: string = (await ask.question(
      'Would you like to play again? Type Yes or No: ',
    )) as unknown as string;
    const confirmPlayAgainLower: string = confirmPlayAgain.trim().toLowerCase();
    if (gameDetails.playAgainAllowedInputs.includes(confirmPlayAgainLower)) {
      return confirmPlayAgainLower;
    }

    console.log("You didn't choose Yes or No, try again.");
  }
}

/**
 * Function to handle the game sequence and user interactions
 * This function is called recursively to keep the game running until the user wins or quits
 */
export async function gameSequence(user: User): Promise<void> {
  let itemInRoom: boolean = false;

  console.log(
    chalk.black.bgWhite.bold(
      `You are in the ${user.getCurrentRoom}.\n Inventory: ${user.getInventory}`,
    ),
  );

  // Check if the user is in the Great Room and initiate the boss fight sequence
  if (user.getCurrentRoom === 'Great Room') {
    return bossFightSequence(user);
  }

  let foundItem: string = '';

  // Check if there is an item in the current room
  if ('item' in gameDetails.rooms[user.getCurrentRoom]) {
    foundItem = gameDetails.rooms[user.getCurrentRoom].item;

    console.log(`You're wandering and locate a ${foundItem}`);
    console.log('----<>----<>----<>----<>----<>----');
    itemInRoom = true;
  }

  const userChoice: string = (await ask.question(
    chalk.blue(`Check instructions, Show status, Or make a move.\n`),
  )) as unknown as string;

  // Check if the user wants to move to a different room
  if (userChoice in gameDetails.rooms[user.getCurrentRoom]) {
    for (const roomKey in gameDetails.rooms[user.getCurrentRoom]) {
      if (userChoice === roomKey) {
        user.setCurrentRoom = gameDetails.rooms[user.getCurrentRoom][roomKey];
        console.log(
          `After moving ${userChoice}, you have now entered the ${user.getCurrentRoom}.`,
        );
      }
    }
  } else if (itemInRoom && userChoice === foundItem) {
    // Check if the user wants to pick up the item in the room
    user.addToInventory(foundItem);
    console.log(`You've now obtained ${foundItem} Saturn cave dweller!`);
    delete gameDetails.rooms[user.getCurrentRoom].item;

    // Check if the user has collected all items
    if (user.getInventory.length === gameDetails.gameItems.length) {
      console.log('You now have all of the resources you need to defeat Los!');
      console.log(
        'Find the room the flesh and nickel monster is in and obtain the Saturn Stone to save your wife!',
      );
    }
  } else if (userChoice === 'Show Instructions') {
    // Check if the user wants to see the instructions again
    console.log('Pulling up instructions scroll\n');
    await user.showInstructions();
  } else if (userChoice === 'Show Status') {
    // Check if the user wants to see their status
    console.log('Pulling up status scanner now');
    await user.showStatus();
  } else {
    // If the user input is not valid, prompt them to try again
    console.log(
      `This doesn't appear to be a choice in ${user.getCurrentRoom}.`,
    );
    console.log("Let's confirm which room you're in again and go from there.");
  }

  await gameSequence(user);
}
