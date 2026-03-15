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
const currentQuestion = document.createElement("h2");

for (let index = 0; index < quizData[questionNumber].options.length; index++) {
    const questionOptions = document.createElement("button");
    questionOptions.id = "question-options";
    optionsContainer.appendChild(questionOptions);
};

function loadQuestion() {
    currentQuestion.innerText = quizData[questionNumber].question;
    questionContainer.appendChild(currentQuestion);
};

function checkAnswer(optionsIndex) {
    if (optionsIndex != quizData[questionNumber].answer) {
        return false;
    } else {
        return true;
    };
};

function loadOptions() {
    const allOptions = document.querySelectorAll("#question-options");
    // Sets the option buttons to default settings.
    allOptions.forEach((questionOptions) => {
        questionOptions.style.backgroundColor = "white"
        questionOptions.disabled = false;
        questionOptions.style.cursor = "pointer";
    })
    // Gives the option buttons text corresponding to the current question.
    for (let index = 0; index < quizData[questionNumber].options.length; index++) {
        allOptions[index].innerText = quizData[questionNumber].options[index];
        // Checks if they answered correctly and disables buttons until next question.
        allOptions[index].addEventListener("click", () => {
            if (checkAnswer(index)) {
                correctAnswers += 1;
                allOptions[index].style.backgroundColor = "green";
                allOptions.forEach((questionOptions) => {
                    questionOptions.disabled = true;
                    questionOptions.style.cursor = "default";
                })
            } else {
                allOptions[index].style.backgroundColor = "red";
                allOptions[quizData[questionNumber].answer].style.backgroundColor = "green";
                allOptions.forEach((questionOptions) => {
                    questionOptions.disabled = true;
                    questionOptions.style.cursor = "default";
                })
            }
        })
    };
};

function nextQuestion() {
    questionNumber += 1;
    loadQuestion();
    loadOptions();
};

function initialize() {
    questionNumber = 0;
    correctAnswers = 0;
    loadQuestion();
    loadOptions();
}

initialize();

nextButton.addEventListener("click", () => {
    if (questionNumber < quizData.length -1) {
        nextQuestion();
    }
});
