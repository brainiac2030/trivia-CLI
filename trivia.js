console.log("---Welcome to the Trivia game---");

const readline = require('readline'); // I need this for the back and forth with the user.

const rl = readline.createInterface({     //.createInterface creates the link I need between this program and the terminal. To facilitate this back and forth with the user
    input: process.stdin,  // yser will type this
    output: process.stdout // this will get printed in the terminal
});

const questions = [
    {
        question: "What is the capital city of Kenya?",
        options: ["A) Kisumu", "B) Mombasa", "C) Vasha", "D) Nairobi" ],
        correct: "B"
    },
    {
        question: "Who is the worst president in Kenya?",
        options: ["A) Jomo kenyatta", "B) Daniel Arap Moi", "C) William Ruto", "D) Mwai Kibaki"],
        correct: "C"
    },
    {
        question: "What is 5 + 5?",
        options: ["A) 25", "B) 15", "C) 5", "D) 10"],
        correct: "D"
    },
    {
        question: "Which is the best music genre in Kenya?",
        options: ["A) Gengetone", "B) Arbantone", "C Rhumba", "D) Millenial slop"],
        correct: "A"
    },
    {
        question: "Who is the greatest Marathon runner in the world?",
        options: ["A) Usain Bolt", "B) Eliud Kipchoge", "C) Kelvin Kiptum", "D) Mo farah"],
        correct: "B"
    }
];

let currentQuestionIndex = 0;
let score = 0;


