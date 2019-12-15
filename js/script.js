var timeEl = document.querySelector(".time");
var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();


      // if (question === false) { secondsLeft - 15;}
      // if (question === true) { secondsLeft + 15;}
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
}
  setTime();

