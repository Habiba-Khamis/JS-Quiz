// Grab the DOM elements
const progressFill = document.getElementById("progress-fill");
const questionCount = document.getElementById("question-count");
const question = document.getElementById("question");
const answerBtns = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

// Quiz Questions
// Create an array of objects
const questions = [
    {
        theQuestion: "Which keyword creates a variable that can be reassigned?",
        // Each option is an object of itself to show the true and false answer
        theOptions: [
            {
                text: "const",
                status: "false"
            },
            {
                text: "let",
                status: "true"
            },
            {
                text: "function",
                status: "false"
            },
            {
                text: "return",
                status: "false"
            }
        ]
    },
    {
        theQuestion: "Which method selects an HTML element using its ID",
        theOptions: [
            {
                text: "querySelectorAll()",
                status: "false"
            },
            {
                text: "createElement()",
                status: "false"
            },
            {
                text: "getElementById()",
                status: "true"
            },
            {
                text: "appendChild()",
                status: "false"
            }
        ]
    },
    {
        theQuestion: "Which data type stores multiple values together?",
        theOptions: [
            {
                text: "String",
                status: "false"
            },
            {
                text: "Boolean",
                status: "false"
            },
            {
                text: "Number",
                status: "false"
            },
            {
                text: "Array",
                status: "true"
            }
        ]
    },
    {
        theQuestion: "Which method adds a childe element to a parent element?",
        theOptions: [
            {
                text: "appendChild",
                status: "true"
            },
            {
                text: "getElementById()",
                status: "false"
            },
            {
                text: "createElement()",
                status: "false"
            },
            {
                text: "textContent",
                status: "false"
            }
        ]
    },
    {
        theQuestion: "Which JS feature allows us to write reusable blocks of code?",
        theOptions: [
            {
                text: "Array",
                status: "false"
            },
            {
                text: "Function",
                status: "true"
            },
            {
                text: "Boolean",
                status: "false"
            },
            {
                text: "Variable",
                status: "false"
            }
        ]
    },
];


// Set the state for the quiz, the default first question, no scores
// Quiz state (how should the default state of the app when the user first open it)
// The current index and the score should be 0
// Use let variable because it's assignable later in the code
let currentQuestionIndex = 0;
let currentScore = 0 

function displayQuestion() {
    // Convert the question index to user-friendly number to be displayed on the screen (by adding it to 1)
    let currentQuestionNumber = currentQuestionIndex + 1 ;

    // Get the total number of questions (Which is the length of the array that contains the questions)
    let totalQuestionsNumber = questions.length;

    // Change the text of question count
    questionCount.textContent = "Question " + currentQuestionNumber + " of " + totalQuestionsNumber;

    // Get the current question of the questions array to display it
    const currentQuestion = questions[currentQuestionIndex].theQuestion;

    // Change the text of the question
    question.textContent = currentQuestion;

    
    // To Change the progress bar
    // We need to change the width property percentage
    let questionProgress = (currentQuestionNumber / totalQuestionsNumber * 100) + "%";
    console.log(questionProgress);
    // Apply the width to the progress bar  
    progressFill.style.width = questionProgress; 
}

displayQuestion();