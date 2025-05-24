// Game details for "Space Lover and the Saturn Stone"
const gameTitle: string = '[Space Lover and the Saturn Stone]';
const gameItems: string[] = [
  'Fire Hose',
  'Beak',
  'Titanium Plate',
  'Space-Bot Screen',
  'Saturn Sack',
  'Horned Skull',
];
const moveCommands: string[] = [
  'move North',
  'move South',
  'move East',
  'move West',
];

// Rooms and their connections, including items in each room
const rooms: { [key: string]: { [key: string]: string } } = {
  'Cave Entry Room': {
    [moveCommands[0]]: 'The Room Above',
    [moveCommands[1]]: 'Dark Hall',
    [moveCommands[3]]: 'Great Room',
  },
  'The Room Above': {
    [moveCommands[2]]: 'Wind Room',
    [moveCommands[1]]: 'Cave Entry Room',
    item: gameItems[0],
  },
  'Wind Room': { [moveCommands[3]]: 'The Room Above', item: gameItems[1] },
  'Dark Hall': {
    [moveCommands[0]]: 'Cave Entry Room',
    [moveCommands[1]]: 'Fell Bones Room',
    [moveCommands[2]]: 'Room of Skin',
    [moveCommands[3]]: 'Hallow Room',
    item: gameItems[3],
  },
  'Room of Skin': { [moveCommands[3]]: 'Dark Hall', item: gameItems[4] },
  'Fell Bones Room': { [moveCommands[0]]: 'Dark Hall', item: gameItems[5] },
  'Hallow Room': {
    [moveCommands[0]]: 'Great Room',
    [moveCommands[2]]: 'Dark Hall',
    item: gameItems[2],
  },
  'Great Room': {
    [moveCommands[2]]: 'Cave Entry Room',
    [moveCommands[1]]: 'Hallow Room',
  },
};

// Starting room for the game
const startRoom: string = 'Cave Entry Room';

// Allowed inputs for playing again
const playAgainAllowedInputs: string[] = ['yes', 'no'];

export default {
  gameTitle,
  gameItems,
  moveCommands,
  rooms,
  startRoom,
  playAgainAllowedInputs,
};
