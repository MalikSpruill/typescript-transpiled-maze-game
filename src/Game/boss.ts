import User from "../User/user";
import gameDetails
 from "./gameDetails";
import chalk from "chalk";

// Function to handle the boss fight sequence
export function bossFightSequence(user: User): void {
    if (user.getCurrentRoom === 'Great Room' && user.getInventory.length === gameDetails.gameItems.length) {
        console.log(chalk.blue(`
            You've scanned for Los' weaknesses with the space-roaming bot's screen.
            Los smiles wickedly and unimpressed. While mocking you, you take the lava
            hose and melt the armor from Los' nickel neck-piece and pierce his neck with
            your found horned-skull. Los jumps in the air, attempting to slash your head.
            You block with the titanium plate, blowing into the beak at close range, disorienting
            Los. Then, you pierce Los again in the heart, destroying the monster and using the Saturn
            sack to obtain the Saturn stone. You have won the game! Congratulations!
        `));
    } else {
        console.log(chalk.blue('You lose. Los notices your lack of confidence, and attacks your heart before remembering you have one.'));
    }
}