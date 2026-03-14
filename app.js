const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const score = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

const quizData = [ 
    {
        question: "What is JavaScript mainly used for in web development?", 
        options: ["Styling a webpage.", "Structuring a webpage.", "Adding interactivity to a webpage.", "Connecting cables in a network."],
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
let correctAnswers = 0;
let currentQuestion = document.createElement("h2");

function loadQuestion() {
    currentQuestion.innerText = quizData[questionNumber].question;
    questionContainer.appendChild(currentQuestion);
}

function checkAnswer(optionsIndex) {
    if (optionsIndex != quizData[questionNumber].answer) {
        return false;
    } else {
        return true;
    }
}

function loadOptions() {
    for (let index = 0; index < quizData[questionNumber].options.length; index++) {
        let questionOptions = document.createElement("button");
        questionOptions.id = "question-options";
        questionOptions.innerText = quizData[questionNumber].options[index];
        optionsContainer.appendChild(questionOptions);
        questionOptions.addEventListener("click", () => {
            if (checkAnswer(index)) {
                correctAnswers += 1;
                questionOptions.style.backgroundColor = "green";
                const allOptions = document.querySelectorAll("#question-options");
                allOptions.forEach((questionOptions) => {
                    questionOptions.disabled = true;
                    questionOptions.style.cursor = "default";
                })
            } else {
                questionOptions.style.backgroundColor = "red";
                const allOptions = document.querySelectorAll("#question-options");
                allOptions[quizData[questionNumber].answer].style.backgroundColor = "green";
                allOptions.forEach((questionOptions) => {
                    questionOptions.disabled = true;
                    questionOptions.style.cursor = "default";
                })
            };
        })
    }
}

function nextQuestion() {
    questionNumber += 1;
    loadQuestion();
    loadOptions();
}

function initialize() {
    questionNumber = 0;
    correctAnswers = 0;
    loadQuestion();
    loadOptions();
}

initialize();

nextButton.addEventListener("click", nextQuestion);
