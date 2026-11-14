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