console.log("---Welcome to the Trivia game---");

const readline = require('readline'); // I need this for the back and forth with the user.

const rl = readline.createInterface({     //.createInterface creates the link I need between this program and the terminal. To facilitate this back and forth with the user
    input: process.stdin,  // yser will type this
    output: process.stdout // this will get printed in the terminal
});


