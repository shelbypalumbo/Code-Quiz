//-----------------------Quiz Questions--------------------------------------------------------------
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "c",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "parenthesis", "square brackets", "curly brackets"],
    answer: "b",
  },
  {
    title: "You call a ____ to run a task/procedure.",
    choices: ["method", "object", "function", "constant"],
    answer: "c",
  },
  {
    title: "What does DOM stand for?",
    choices: ["Document Object Model", "Deployment Object Method", "Document Occassion Model", "Deployed Object Model"],
    answer: "a",
  },
  {
    title: "What makes a web page interactive?",
    choices: ["CSS", "JavaScript", "HTML", "None of the above"],
    answer: "b",
  }
];

//----------------------Timer Variables---------------------------------------------------------------
var timeEl = document.querySelector(".time");
var secondsLeft = 75;
var timerInterval;

//--------------------------TIMER----------------------------------------------------------------------
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";
  clearTimeout();
}


//----------------------Question Variables---------------------------------------------------------------------

var questionBox = document.getElementById("questionText");
var choiceA = document.getElementById("abtn");
var choiceB = document.getElementById("bbtn");
var choiceC = document.getElementById("cbtn");
var choiceD = document.getElementById("dbtn");

var userData = [];
var storedAns = [];
var answers = "";
var question = "";
var nextQuestion = 0;
var correctAns = 0;
var highScore = 0;
var highestScore = document.getElementById("highestScore");

//-----------Start button calls the timer and question functions----------------------------------------------
function questAndTime() {
  setTime();
  sendMessage();
  quizQuestions();
};

//--------------Display quiz question container on "Start Quiz"-----------------------------------------------
function start() {
  var v = document.getElementById("intro");
  if (v.style.display === "none") {
    v.style.display = "block";
  } else {
    v.style.display = "none";
  }
}
//-----------------------Hides first quiz question-------------------------------------------------------------
function hideQuestions() {
  var x = document.getElementById("question-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//-----------------------Show first quiz question-------------------------------------------------------------
function showQuestions() {
  var y = document.getElementById("question-container");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

//----------------------------Hide High Scores----------------------------------------------------------------
function hideScores() {
  var x = document.getElementById("highScores-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//---------------------------Show High Scores-----------------------------------------------------------------
function showScores(user) {
  var userScore = document.getElementById("scores");
  var y = document.getElementById("highScores-container");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
  userScore.prepend(user + " scored a " + highScore + "!");
}
//-----------------------------Quiz Questions------------------------------------------------------------------
function quizQuestions() {
  question = questions[nextQuestion].title;
  answers = questions[nextQuestion].answer;

  choiceA.textContent = questions[nextQuestion].choices[0];
  choiceB.textContent = questions[nextQuestion].choices[1];
  choiceC.textContent = questions[nextQuestion].choices[2];
  choiceD.textContent = questions[nextQuestion].choices[3];
  questionBox.textContent = question;
}


//-------Event Listener for when a choice is selected, move to the next question and store the answer
$("#question-container button").on("click", function (event) {
  event.preventDefault();
  var selectChoice = $(event.target).val();
  storedAns.push(selectChoice);
  console.log(selectChoice);

  if (questions[nextQuestion].answer == storedAns[nextQuestion]) {
    console.log("answer " + nextQuestion + " is correct");
  } else if (questions[nextQuestion].answer != storedAns[nextQuestion]) {
    secondsLeft -= 15;
    console.log(secondsLeft);
    console.log("answer " + nextQuestion + " is not correct");
  }
  if (nextQuestion == (questions.length - 1)) {
    clearInterval(timerInterval);
    if (secondsLeft >= highScore) {
      highScore = secondsLeft;
    }
    var user = prompt("Log your score with a Username: ");
    alert("Your Score: " + highScore);
    hideQuestions();

    showScores(user);
    highestScore.append(highScore);
    userScore.prepend(user + " scored a " + highScore + "!");
    localStorage.setItem("user-scores", highScore);

  } else {
    nextQuestion++
    quizQuestions();
  }
  console.log(highScore);
  console.log(storedAns);
})


