# Milestone Two Artifact - README

This file serves as the README for the **milestone-two-artifact** project, which is a terminal-based game designed as part of the CS Capstone Materials. The purpose of this project is to demonstrate the application of software engineering principles and showcase the functionality of the game artifact.

## Overview of the Game

The game is a text-based interactive experience that runs in the terminal. It is designed to engage players with a series of scenarios that they must navigate using simple text commands. The game emphasizes logic, problem-solving, and creativity, providing an enjoyable and thought-provoking experience.

## Features

- **Interactive Gameplay**: Players interact with the game through text-based inputs.
- **Dynamic Scenarios**: The game adapts to player choices, offering a unique experience each time.
- **Terminal-Based**: No graphical interface is required; the game runs entirely in the terminal.

## Technologies Used

- **Programming Language**: The game is implemented in TypeScript, leveraging its typing, simplicity and versatility for text-based applications.
- **Libraries**:
  - `node` standard library for terminal interaction and system-level operations.
  - `ESLint` a pluggable JavaScript/TypeScript linter used to catch code errors, enforce style rules, and improve code quality automatically.
  - `Prettier` is an opinionated code formatter that enforces consistent code style by automatically formatting your code based on a set of rules.
  - `Chalk` is a library for styling terminal output in Node.js, allowing you to add colors, bold text, and other formatting to your console logs.

## How to Set Up and Play

1. **Prerequisites**:

   - Ensure Node 20.x is installed on your system. You can download it from [nodejs.org](https://nodejs.org/en/download).
   - A terminal or command-line interface is required to run the game.

2. **Clone the Repository**:

   - Clone the project repository to your local machine using the following command:
     ```bash
     git clone <repository-url>
     ```
   - Replace `<repository-url>` with the actual URL of the repository.

3. **Navigate to the Project Directory**:

   - Open your terminal and navigate to the directory where the project is located:
     ```bash
     cd /path/to/milestone-two-artifact
     ```

4. **Run the Game**:
   - Install the npm dependencies
     ```
     npm i
     ```
   - Execute the game script using npm:
     ```bash
     npm run serve
     ```
   - Optionally, you can run the build to transpile Typescript to Javascript to reflect production and run the output index file
     ```
     npm run build
     npm start
     ```
   - Follow the on-screen instructions to start playing.

## Contributor

This Typescript transpilation project was developed by **Malik Spruill** as part of the CS Capstone course. Contributions, feedback, and suggestions are welcome to improve the game further.

## Notes

- Ensure that the README file is kept up-to-date with any changes to the project.
- For any issues or questions, feel free to reach out via the repository's issue tracker.

Enjoy the game and have fun exploring its challenges!
