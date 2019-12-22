 //-----------------------Quiz Questions--------------------------------------------------------------
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
//----------------------Timer Variables------------------------------------------------------------------
 //var score = 0;
 var timeEl = document.querySelector(".time");
 var secondsLeft = 75;

  //-----------------------TIMER----------------------------------------------------------------------
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";
      if ( secondsLeft === 0 ) {
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
 
 var answer = "";
 var question = ""; 
 var options = ["","","",""];
 var nextQuestion = 0;
 
 document.querySelector(".choice").addEventListener("click",checkAns);
 document.querySelector("#startBtn").addEventListener("click",quizQuestions);
 
 
 
 //Start button calls the timer and question functions
 function questAndTime(){
   setTime();
   sendMessage();
   quizQuestions();
 };
 
 function quizQuestions(){
   question = questions[nextQuestion].title;
   answer = questions[nextQuestion].answer;
   for ( var i = 0; i < questions[nextQuestion].choices.length; i++ ){
   options[i] = questions[nextQuestion].choices[i];}
   
   questionBox.append(question);
   choiceA.append(questions[0].choices[0]);
   choiceB.append(questions[0].choices[1]);
   choiceC.append(questions[0].choices[2]);
   choiceD.append(questions[0].choices[3]);
 }
 
 
 //Check answer function****
 function checkAns(){
 if ( question.choices === questions.answer){ 
     alert("Correct!");
    nextQuestion();
   } else {
       alert("Incorrect");
       wrongAns();
   }
 }
 
 //Next question *********
 function nextQuestion(){
  question = questions[nextQuestion].title;
  answer = questions[nextQuestion].answer;
  for ( var i = 0; i < questions[nextQuestion].choices.length; i++ ){
  options[i] = questions[nextQuestion].choices[i];}
  
  questionBox.append(question);
  choiceA.append(questions[1].choices[0]);
  choiceB.append(questions[1].choices[1]);
  choiceC.append(questions[1].choices[2]);
  choiceD.append(questions[1].choices[3]);
   }
 
 
   
 //If the answer is wrong this function is called
 /*function wrongAns() {
   if( questions.choices != questions.answer ) {
     timeEl.textContent = secondsLeft - 15;
     sendMessage();
   }
 }*/
 
 

 


