//Quiz Questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "You call a ____ to run a task/procedure.",
        choices: ["method", "object", "function", "constant"],
        answer: "function"
      },
      {
        title: "What does DOM stand for?",
        choices: ["Document Object Model", "Deployment Object Method", "Document Occassion Model", "Deployed Object Model"],
        answer: "Document Object Model"
      },
      {
        title: "What makes a web page interactive?",
        choices: ["CSS", "JavaScript", "HTML","None of the above"],
        answer: "JavaScript"
      },
  ];
  
 //Timer variables
var score = 0;
var timeEl = document.querySelector(".time");
var secondsLeft = 75;

//Question variables
var questionBox = document.getElementById("questionText");
var choiceA = document.getElementById("abtn");
var choiceB = document.getElementById("bbtn");
var choiceC = document.getElementById("cbtn");
var choiceD = document.getElementById("dbtn");

document.getElementById("submit").addEventListener("click", checkAns);


//Start button calls the timer and question functions
function questAndTime(){
  setTime();
  sendMessage();
  quizQuestions();
};


//Provices the content of the questions
function quizQuestions(){
  for ( var i = 0; i < questions.length; i++ ){
    questionBox.textContent=(questions[i]["title"]);
  choiceA.textContent=(questions[i]["choices"][0]);
  choiceB.textContent=(questions[i]["choices"][1]);
  choiceC.textContent=(questions[i]["choices"][2]);
  choiceD.textContent=(questions[i]["choices"][3]);
  }
}

//Check answer function
function checkAns(){
  if ( questions[i]["answer"[0]] === clicked ){ 
    alert("Correct!");
  } else {
      alert("Incorrect");
      wrongAns();
  }
}

//
  function nextQuestion(){
    if( answer === clicked ){ 
      alert("Correct!");
    } else {
        alert("Incorrect");
        wrongAns();
    }
  }

  
//If the answer is wrong this function is called
function wrongAns(){
  timeEl.textContent = (secondLeft - 15);
}


//--------------------------------TIMER---------------------------------------------------------
function setTime() {
   var timerInterval = setInterval(function() {
    secondsLeft--;
     timeEl.textContent = secondsLeft + " seconds left.";
 
      if ( secondsLeft === 0 ) {
        clearInterval(timerInterval);
        sendMessage();
        // add in if (question === false) { secondsLeft - 15;}
      }
  
    }, 1000);
}
    
function sendMessage() {
  timeEl.textContent = " ";
  clearTimeout();
}
    
