import gameDetails from "../Game/gameDetails";
import ask from "../Utils/ask";

export class User {
    private name: string;
    private currentRoom: string;
    private inventory: string[];

    constructor(name: string = "Random adventurer", currentRoom: string = "", inventory: string[] = []) {
        this.name = name;
        this.currentRoom = currentRoom;
        this.inventory = inventory;
    }

    public get getCurrentRoom(): string {
        return this.currentRoom;
    }

    public get getInventory(): string[] {
        return this.inventory;
    }

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

    public async showInstructions(): Promise<void> {
        console.log(gameDetails.gameTitle);
        console.log(`Collect ${gameDetails.gameItems.length} items to win the game`);
        console.log('Move commands:', '');
    
        gameDetails.moveCommands.forEach((move, index) => {
            if (index !== (gameDetails.moveCommands.length - 1)) {
                process.stdout.write(`${move} | `);
            } else {
                console.log(move);
            }
        });
        console.log('How to add to Inventory, type: \'item name\'');
        console.log('Type \'Show Status\' to see current room, inventory, and the item in the current room if any');
        console.log('Type \'Show Instructions\' to see the instructions again');
        
        await ask.question('Tap enter to continue');
    }

    public addToInventory(item: string): void {
        this.inventory.push(item);
        console.log(`Added ${item} to inventory.`);
    }

    public set setCurrentRoom(room: string) {
        this.currentRoom = room;
        console.log(`Moved to ${room}.`);
    }
};

export default User;

