import { bossFightSequence } from "./boss";
import ask from "../Utils/ask";
import gameDetails from "./gameDetails";
import User from "../User/user";

export async function gameSequence(user: User): Promise<void> {
    let itemInRoom = false;
    console.log(`You are in the ${user.getCurrentRoom}.\n`);
    console.log(`Inventory: ${user.getInventory}`);

    if (user.getCurrentRoom === 'Great Room') {
        return bossFightSequence(user);
    }

    let foundItem: string = "";

    if ('item' in gameDetails.rooms[user.getCurrentRoom]) {
        foundItem = gameDetails.rooms[user.getCurrentRoom].item;

        console.log(`You're wandering and locate a ${foundItem}`);
        console.log('----<>----<>----<>----<>----<>----');
        itemInRoom = true;
    }

    const userChoice = await ask.question(`Check instructions, Show status, Or make a move.\n`) as unknown as string;

    if (userChoice in gameDetails.rooms[user.getCurrentRoom]) {
        for (const roomKey in gameDetails.rooms[user.getCurrentRoom]) {
            if (userChoice === roomKey) {
                user.setCurrentRoom = gameDetails.rooms[user.getCurrentRoom][roomKey];
                console.log(`After moving ${userChoice}, you have now entered the ${user.getCurrentRoom}.`);
                await gameSequence(user);
            }
        }
    } else if (itemInRoom && userChoice === foundItem) {
        user.addToInventory(foundItem);
        console.log(`You've now obtained ${foundItem} Saturn cave dweller!`);
        delete gameDetails.rooms[user.getCurrentRoom].item;

        if (user.getInventory.length === gameDetails.gameItems.length) {
            console.log('You now have all of the resources you need to defeat Los!');
            console.log('Find the room the flesh and nickel monster is in and obtain the Saturn Stone to save your wife!');
        }

        await gameSequence(user);
    } else if (userChoice === 'Show Instructions') {
        console.log('Pulling up instructions scroll\n');
        await user.showInstructions();
        await gameSequence(user);
    } else if (userChoice === 'Show Status') {
        console.log('Pulling up status scanner now');
        await user.showStatus();
        await gameSequence(user);
    } else {
        console.log(`This doesn't appear to be a choice in ${user.getCurrentRoom}.`);
        console.log('Let\'s confirm which room you\'re in again and go from there.');
        await gameSequence(user);
    }
}