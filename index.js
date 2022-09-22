var generateBtn = document.querySelector("#start");
var optionList = document.getElementById("optionList");
var options = document.querySelectorAll(".option");
var timeRemaining = 60;
var question = document.getElementById("question");
var optionOne = document.getElementById("option1");
var optionTwo = document.getElementById("option2");
var optionThree = document.getElementById("option3");
var optionFour = document.getElementById("option4");

/* var for container on/off display */
var containerDiv = document.getElementById("containerdiv");

/* counter variable */
var counter = 1;
var questions = [
    {
        question: "What does HTML stand for?",
        answers: ["HyperText Markup Language", "Hyperbolic TimeChamber Makeup Linguistics", "It is not an acronym,", "HyperText Makeup Laboratory"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "What does SQL stand for?",
        answers: ["Structured Query Language", "Stored Query Language", "Storks Quirk Linguistics", "Super Query Language"],
        correctAnswer: "Structured Query Language"
    },
    {
        question: "What is an algorithm?",
        answers: ["A set of instructions for accomplishing a well-defined task", "A set of hypotheses", "Scientific knowledge and math", "A theory"],
        correctAnswer: "A set of instructions for accomplishing a well-defined task"
    },
    {
        question: "What is CSS used for?",
        answers: ["To style HTML elements", "To simplify code", "To acquire data from various sources", "To save code to a database"],
        correctAnswer: "To style HTML elements"
    },
    {
        question: "What is the acronym for JavaScript?",
        answers: ["JS", "JSS", "JC", "J"],
        correctAnswer: "JS"
    },
]
// /* Question arrays */
// var questionOne = [];
// questionOne.push("What is CSS used for?",
//     "To make Javascript look pretty.",
//     "To design HTML elements on a webpage",
//     "To hack into a database",
//     "To save content on a webpage");

// var questionTwo = [];
// questionTwo.push("What color is a tiger?",
//     "Greenl alkdj k jk j",
//     "Orange and blac adjflkjdfk",
//     "Orange and blue kaldfajdlfj",
//     "Purple jadkfjkadf");

// var questionThree = [];
// questionThree.push("What is HTML?",
//     "The contents of a webpage",
//     "A way to style the webpage",
//     "How often a page receives info",
//     "All of the above");

// var questionFour = [];
// questionFour.push("What is code?",
//     "Something cool",
//     "No idea",
//     "Brother man",
//     "The best thing ever");

// var questionFive = [];
// questionFive.push("What is banana?",
//     "The best fruit",
//     "A way of life",
//     "Party time",
//     "All of the above");


// /* correct answers */
// var answerKey = [];
// answerKey.push("To design HTML elements on a webpage",
//     "Greenl alkdj k jk j",
//     "The contents of a webpage",
//     "Something cool",
//     "The best fruit");

/* timer */
function timerCountdown() {
    var newInterval = setInterval(function () {
        if (timeRemaining > 0) {

            timeRemaining--;
            document.getElementById("timeRemaining").textContent = timeRemaining;
        }
        else {
            document.getElementById("containerdiv").style.display = "none";
            document.getElementById("form").style.display = "block";
        }
    }, 1000)
}

function startQuiz() {
    timerCountdown();
    questionDisplay();

}

function questionDisplay() {
    if (counter == 1) {
        question.textContent = questions.question[0];
        console.log(questions[1]);
    }
    else if (counter ==2) {
        optionOne.textContent = questions[1];
    }
    else if (counter ==3) {
        optionOne.textContent = questions[2];
    }
    else if (counter ==4) {
        optionOne.textContent = questions[3];
    }
    else if (counter ==5) {
        optionOne.textContent = questions[4];
    }
}

// function questionDisplay() {
//     if (counter == 1) {
//         question.textContent = questionOne[0];
//         optionOne.textContent = questionOne[1];
//         optionTwo.textContent = questionOne[2];
//         optionThree.textContent = questionOne[3];
//         optionFour.textContent = questionOne[4];
//     }
//     else if (counter == 2) {
//         question.textContent = questionTwo[0];
//         optionOne.textContent = questionTwo[1];
//         optionTwo.textContent = questionTwo[2];
//         optionThree.textContent = questionTwo[3];
//         optionFour.textContent = questionTwo[4];
//     }
//     else if (counter == 3) {
//         question.textContent = questionThree[0];
//         optionOne.textContent = questionThree[1];
//         optionTwo.textContent = questionThree[2];
//         optionThree.textContent = questionThree[3];
//         optionFour.textContent = questionThree[4];
//     }
//     else if (counter == 4) {
//         question.textContent = questionFour[0];
//         optionOne.textContent = questionFour[1];
//         optionTwo.textContent = questionFour[2];
//         optionThree.textContent = questionFour[3];
//         optionFour.textContent = questionFour[4];
//     }
//     else if (counter == 5) {
//         question.textContent = questionFive[0];
//         optionOne.textContent = questionFive[1];
//         optionTwo.textContent = questionFive[2];
//         optionThree.textContent = questionFive[3];
//         optionFour.textContent = questionFive[4];
//     }
//     else (containerDisplay);
// }

/* counter function */
// function incrementCounter() {
//     counter += 1;
//     //console.log(options);
//     var test = options[i];
//     console.log(test);
//     checkAnswer();
//     questionDisplay();
// }

function checkAnswer() {

}

/* display on/off */
/* run func prior */
function containerDisplay() {
    if (timeRemaining <= 0) {
        document.getElementById("containerdiv").style.display = "none";
        document.getElementById("formdiv").style.display = "block";

    }
}

function displaySwitch() {
    if (timeRemaining <= 0) {
        containerDisplay();
    }
}


generateBtn.addEventListener("click", startQuiz);

for (i = 0; i < options.length; i++) {
    var test = options[i];

    options[i].addEventListener("click", function () {
        counter += 1;
        //console.log(options);

        console.log(test);
        checkAnswer();
        questionDisplay();
    });
}


