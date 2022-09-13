var generateBtn = document.querySelector("#start");
var timeRemaining = 60;

function timerCountdown() {
    var newInterval = setInterval(function(){
        timeRemaining--;
    document.getElementById("timeRemaining").textContent = timeRemaining;
    }, 1000)
  
}


generateBtn.addEventListener("click", timerCountdown);
