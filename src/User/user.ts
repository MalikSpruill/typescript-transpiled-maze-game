import gameDetails from '../Game/gameDetails';
import ask from '../Utils/ask';
import chalk from 'chalk';

// User class to manage user details and actions
export class User {
  private name: string;
  private currentRoom: string;
  private inventory: string[];

  // Constructor to initialize user properties
  constructor(
    name: string = 'Random adventurer',
    currentRoom: string = '',
    inventory: string[] = [],
  ) {
    this.name = name;
    this.currentRoom = currentRoom;
    this.inventory = inventory;
  }

  // Getter methods to access private properties
  public get getCurrentRoom(): string {
    return this.currentRoom;
  }

  public get getInventory(): string[] {
    return this.inventory;
  }

  // Getter method to show the user's game status
  public async showStatus(): Promise<void> {
    console.log(`\n${this.name}, you are in the ${this.currentRoom}.\n`);
    console.log(`Inventory: ${this.inventory.join(', ')}`);

    if (gameDetails.rooms[this.currentRoom]?.item) {
      console.log(`Item in room: ${gameDetails.rooms[this.currentRoom].item}`);
    } else {
      console.log('No item in this room');
    }

    await ask.question('Tap enter to continue');
  }

  // Getter method to show the instructions for the game in respect to the user
  public async showInstructions(): Promise<void> {
    let moveCommands: string = '';
    gameDetails.moveCommands.forEach((move, index) => {
      if (index !== gameDetails.moveCommands.length - 1) {
        moveCommands = moveCommands.concat(`${move} | `);
      } else {
        moveCommands = moveCommands.concat(move);
      }
    });

    console.log(
      chalk.black.bgWhite.bold(
        '\n' +
          gameDetails.gameTitle +
          '\n' +
          `Collect ${gameDetails.gameItems.length} items to win the game` +
          '\n' +
          'Move commands: ' +
          moveCommands +
          '\n' +
          "How to add to Inventory, type: 'item name'" +
          '\n' +
          "Type 'Show Status' to see current room, inventory, and the item in the current room if any" +
          '\n' +
          "Type 'Show Instructions' to see the instructions again" +
          '\n',
      ),
    );

    await ask.question(chalk.blue('Tap enter to continue'));
  }

  // Getter method to add a game item to the user's inventory
  public addToInventory(item: string): void {
    this.inventory.push(item);
    console.log(`Added ${item} to inventory.`);
  }

  // Setter method to set the current room of the user
  public set setCurrentRoom(room: string) {
    this.currentRoom = room;
    console.log(`Moved to ${room}.`);
  }
}

export default User;
