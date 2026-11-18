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

    // Get the current question from the questions array
    const currentQuestion = questions[currentQuestionIndex];

    // Convert the question index to user-friendly number to be displayed on the screen (by adding it to 1)
    const currentQuestionNumber = currentQuestionIndex + 1 ;

    // Get the total number of questions (Which is the length of the array that contains the questions)
    const totalQuestionsNumber = questions.length;

    // Change the text of question count
    questionCount.textContent = "Question " + currentQuestionNumber + " of " + totalQuestionsNumber;

    // Change the text of the question
    question.textContent = currentQuestion.theQuestion;
    
    // To Change the progress bar
    // We need to change the width property percentage
    let questionProgress = (currentQuestionNumber / totalQuestionsNumber * 100) + "%";

    // Apply the width to the progress bar  
    progressFill.style.width = questionProgress;

    // Display the answers of each question dynamically
    // Loop through each item of the options array
    for (let i = 0; i < currentQuestion.theOptions.length; i++) {

        // Get the current answer
        const currentAnswer = currentQuestion.theOptions[i];

        // For each option we need to create a new element
        const optionButton = document.createElement("button");

        // Add the class to it to apply CSS style
        optionButton.classList.add("answer-btn");

        // Display the text inside it
        optionButton.textContent = currentAnswer.text;

        // Call the check answer function when the button is clicked
        optionButton.addEventListener("click", function() {
            checkAnswer(currentAnswer, optionButton);
        })
    
        // Append it to the answer buttons container
        answerBtns.appendChild(optionButton);
    }

    console.log(answerBtns.children.length);
    console.log(questions[currentQuestionIndex].theOptions);
    console.log(questions[currentQuestionIndex].theOptions[currentQuestionIndex].text);

}

// Check Answer Function (Work with the current question displayed)
// It takes 2 arguments
function checkAnswer(selectedAnswer, selectedButton) {

    // Add event listener to each button to know if the answer is correct
    if (selectedAnswer.status ===  "true") {
        // change the selected button to green
        selectedButton.classList.add("correct");
        // Increase the score by one
        currentScore = currentScore + 1;

    } else {
        // Change the selected button to red
        selectedButton.classList.add("incorrect");
    }

    // Get the current question currently displayed
    const currentQuestionDisplayed = questions[currentQuestionIndex];
    
    // Get all the answer buttons currently displayed (get them from the children of the button list)
    const currentAnswersDisplayed =  answerBtns.children;

    // Get the options for the current question
    // Because we're going to have multiple different questions & choices loaded every tim we go to the next question
    const currentAnswers = currentQuestionDisplayed.theOptions;

    // Loop through all displayed answer buttons
    for (let i = 0; i < currentAnswersDisplayed.length; i++) {
        // For each button we need to get the answer 
        
    }

    
}

displayQuestion();