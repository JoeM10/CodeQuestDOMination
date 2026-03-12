const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const questionContainer = document.getElementById("question-container");
const score = document.getElementById("score");

const quizData = [ 
    {
        question: "What is JavaScript mainly used for in web development?", 
        options: ["Styling a webpage", "Structuring a webpage", "Adding interactivity to a webpage", "Connecting cables in a network"],
        answer: 2
    },
    {
        question: "What data type is this value?",
        options: ["String", "Boolean", "Number", "Undefined"],
        answer: 1
    },
    {
        question: "Which of these is used to display something in the console?",
        options: ["print()", "display()", "show()", "console.log()"],
        answer: 3
    },
    {
        question: 'What kind of value is "Hello" in JavaScript?',
        options: ["Number", "Boolean", "String", "Array"],
        answer: 2
    },
    {
        question: "Which statement is used to make decisions in JavaScript?",
        options: ["if", "for", "while", "function"],
        answer: 0
    }
];

let questionNumber = 0;

function loadQuestion() {
    let currentQuestion = document.createElement("h2")
    currentQuestion.innerText = quizData[questionNumber].question
}
loadQuestion()
// function loadQuestion() {
//     currentQuestion.options.forEach((option, index) => {  
//         const optionButton = document.createElement('button');  
//         optionButton.textContent = option;  
//         optionButton.addEventListener('click', () => selectOption(index));  
//         optionsContainer.appendChild(optionButton);
//     });
// }

// loadQuestion()

