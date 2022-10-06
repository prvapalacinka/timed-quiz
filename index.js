var generateBtn = document.querySelector("#start");
var scoreBtn = document.querySelector("#initialsuserscore");
var input = document.getElementsByClassName('form-group');
var optionList = document.getElementById("optionList");
var options = document.querySelectorAll(".option"); //options
var timeRemaining = 60;
var question = document.getElementById("question"); //question
var optionOne = document.getElementById("option1");
var optionTwo = document.getElementById("option2");
var optionThree = document.getElementById("option3");
var optionFour = document.getElementById("option4");
var score = 0;
var correction = document.getElementById("correction");
/* var for container on/off display */
var containerDiv = document.getElementById("containerdiv");
var formdiv = document.getElementById("form");
formdiv.style.display = "none";
/* counter variable */
var counter = 0;
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

// User score:
var userScoreArray = [];

if (localStorage.getItem('savedScoreArray')) {
    userScoreArray = JSON.parse(localStorage).getItem('savedScoreArray');
}

function timerCountdown() {
    var newInterval = setInterval(function () {
        if (timeRemaining > 0) {

            timeRemaining--;
            document.getElementById("timeRemaining").textContent = timeRemaining;
        }
        else {
            containerDisplay();
        }
    }, 1000)
}

function startQuiz() {
    timerCountdown();
    questionDisplay();

}

function questionDisplay() {
    question.textContent = questions[counter].question
    let i = 0
    options.forEach(element => {
        element.textContent = questions[counter].answers[i];
        i++;
    })
}


function checkAnswer(event) {
let userAnswer = event.target.textContent
    console.log(userAnswer);
if (userAnswer == questions[counter].correctAnswer){
    score += 1
    correction.textContent = "You have answered correctly. Current Score:"+score
}
else {
    timeRemaining -= 10;
    correction.textContent = "You have answered incorrectly. Current Score:"+score
}
}
/* display on/off */
/* run func prior */
function containerDisplay() {

    document.getElementById("containerdiv").style.display = "none";
    document.getElementById("formdiv").style.display = "block";
    formdiv.style.display = "block";


}

function displaySwitch() {
    if (timeRemaining <= 0) {
        containerDisplay();
    }
}


generateBtn.addEventListener("click", startQuiz);

for (i = 0; i < options.length; i++) {
    var test = options[i];

    options[i].addEventListener("click", function (event) {

        //console.log(options);
;
        checkAnswer(event);
        if (counter < questions.length - 1) {
            counter++
            questionDisplay();
        }
        else {
            containerDisplay();
        }
    });
}

scoreBtn.addEventListener("click", userScore);

function userScore () {
    var highScore = {
        name: input.value,
        score: score
    }

userScoreArray.push(highScore);
localStorage.setItem('savedScoreArray'), JSON.stringify(userScoreArray);
console.log('worked');
}