//-----------------------Quiz Questions--------------------------------------------------------------
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "c",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "c",
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
  },
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

      for (i = 0; i < questions.length; i++) {
        if (questions[i].answer == storedAns[i]) {
          console.log("answer" + i + "is correct");
        } else {
          console.log("answer" + i + "is not correct");
        }
      }
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

var storedAns = [];
var answers = "";
var question = "";
var nextQuestion= 0;


//-----------Start button calls the timer and question functions----------------------------------------------
function questAndTime() {
  setTime();
  sendMessage();
  quizQuestions();
};


function start() {
  var v = document.getElementById("intro");
  if (v.style.display === "none") {
    v.style.display = "block";
  } else {
    v.style.display = "none";
  }
}

function hideQuestions() {
  var x = document.getElementById("question-container");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function showQuestions() {
  var y = document.getElementById("question-container");
  if (y.style.display === "block") {
    y.style.display = "none";
  } else {
    y.style.display = "block";
  }
}

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
  console.log(selectChoice);


  if (nextQuestion == (questions.length - 1)) {
    clearInterval(timerInterval);
    for (i = 0; i < questions.length; i++) {
      if (questions[i].answer == storedAns[i]) {
        console.log("answer" + i + "is correct");
      } else {
        console.log("answer" + i + "is not correct");
      }
    }
  } else {
    nextQuestion++;
    storedAns.push(selectChoice);
    quizQuestions();
  }
  console.log(storedAns);
})








