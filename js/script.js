 
 //Timer variables
 var score = 0;
 var timeEl = document.querySelector(".time");
 var secondsLeft = 75;

  //-----------------------TIMER---------------------------------------------------------
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
     
 //---------------------------------------------------------------------------------------
 
 //Question variables
 var questionBox = document.getElementById("questionText");
 var choiceA = document.getElementById("abtn");
 var choiceB = document.getElementById("bbtn");
 var choiceC = document.getElementById("cbtn");
 var choiceD = document.getElementById("dbtn");
 
 var answer = "";
 var question = ""; 
 var options = ["","","",""];
 var nextQuestion = 0;
 
 document.querySelector("choice").addEventListener("click",checkAns);
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
   if( answer === clicked ){ 
     alert("Correct!");
   } else {
       alert("Incorrect");
       wrongAns();
   }
 }
 
   
 //If the answer is wrong this function is called
 function wrongAns() {
   if( questions[i]["choices"] != questions[i]["answer"]) {
     timeEl.textContent = secondsLeft - 15;
     sendMessage();
   }
 }
 
 

 


