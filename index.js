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

/* Question arrays */
var questionOne = [];
questionOne.push("What is CSS used for?",
    "To make Javascript look pretty.",
    "To design HTML elements on a webpage",
    "To hack into a database",
    "To save content on a webpage");

var questionTwo = [];
questionTwo.push("What color is a tiger?",
    "Greenl alkdj k jk j",
    "Orange and blac adjflkjdfk",
    "Orange and blue kaldfajdlfj",
    "Purple jadkfjkadf");

var questionThree = [];
questionThree.push("What is HTML?",
    "The contents of a webpage",
    "A way to style the webpage",
    "How often a page receives info",
    "All of the above");

var questionFour = [];
questionFour.push("What is code?",
    "Something cool",
    "No idea",
    "Brother man",
    "The best thing ever");
    
var questionFive = [];
questionFive.push("What is banana?",
    "The best fruit",
    "A way of life",
    "Party time",
    "All of the above");

    /* timer */
function timerCountdown() {
    var newInterval = setInterval(function () {
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
    else if (counter == 3) {
        question.textContent = questionThree[0];
        optionOne.textContent = questionThree[1];
        optionTwo.textContent = questionThree[2];
        optionThree.textContent = questionThree[3];
        optionFour.textContent = questionThree[4];
    }
    else if (counter == 4) {
        question.textContent = questionFour[0];
        optionOne.textContent = questionFour[1];
        optionTwo.textContent = questionFour[2];
        optionThree.textContent = questionFour[3];
        optionFour.textContent = questionFour[4];
    }
    else if (counter == 5) {
        question.textContent = questionFive[0];
        optionOne.textContent = questionFive[1];
        optionTwo.textContent = questionFive[2];
        optionThree.textContent = questionFive[3];
        optionFour.textContent = questionFive[4];
    }
    else (containerDisplay);
}

/* counter function */
function incrementCounter() {
    counter += 1;
    questionDisplay();
}
generateBtn.addEventListener("click", startQuiz);
console.log(generateBtn);
// options.addEventListener("click", counter)
for (i = 0; i < options.length; i++) {
    console.log(options[i]);

    options[i].addEventListener("click", incrementCounter)
}

/* display on/off */
/* run func prior */
function containerDisplay() {
    if (timeRemaining <= 0) {
        document.getElementById("containerdiv").style.display = "none";
        document.getElementById("formdiv").style.display = "block";
       
    }
}

function displaySwitch () {
    if (timeRemaining <= 0) {
        containerDisplay();
    }
}

while (timerRemaining > 0) {
    document.getElementById("containerdiv").style.display = "block";
}

while (timeRemaining <= 0) {
    document.getElementById("formdiv").style.display = "block";
}