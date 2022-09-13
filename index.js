var generateBtn = document.querySelector("#start");
var optionList = document.getElementById("optionList");
var options = document.querySelectorAll(".option");
var timeRemaining = 60;
var question = document.getElementById("question");
var optionOne = document.getElementById("option1");
var optionTwo = document.getElementById("option2");
var optionThree = document.getElementById("option3");
var optionFour = document.getElementById("option4");

/* counter variable */ 
var counter = 1;

/* Question arrays */ 
var questionOne = [];
questionOne.push("What is CSS used for?", 
"To make Javascript look pretty.",
"To design HTML elements on a webpage",
"To hack into a database",
"To save content on a webpage");

var questionTwo = [];
questionOne.push("What color is a tiger?", 
"Green",
"Orange and black",
"Orange and blue",
"Purple");

function timerCountdown() {
    var newInterval = setInterval(function(){
        timeRemaining--;
    document.getElementById("timeRemaining").textContent = timeRemaining;
    }, 1000)
  
}

function startQuiz() {
    timerCountdown();
    questionDisplay();
  
}

function questionDisplay() {
    if (counter == 1) {
    question.textContent = questionOne[0];
    optionOne.textContent = questionOne[1];
    optionTwo.textContent = questionOne[2];
    optionThree.textContent = questionOne[3];
    optionFour.textContent = questionOne[4];
    }
    else if (counter == 2) {
        question.textContent = questionTwo[0];
        optionOne.textContent = questionTwo[1];
        optionTwo.textContent = questionTwo[2];
        optionThree.textContent = questionTwo[3];
        optionFour.textContent = questionTwo[4];
    }
}

/* counter function */
function counter() {
    console.log("here");
    counter+=1;
    questionDisplay();
}
generateBtn.addEventListener("click", startQuiz);
console.log(generateBtn);
// options.addEventListener("click", counter)
for(i=0; i<options.length; i++) {
    console.log(options[i]);

    options[i].addEventListener("click", counter)
}
