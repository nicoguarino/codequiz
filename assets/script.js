var questions = [
    {
        quizQ: "Inside which HTML element do we put the JavaScript?",

        optionA: "js",

        optionB: "script",

        optionC: "scripted",

        optionD: "javascript",

        correctAnswer: "b"

        //b is correct
    },

    { 
        quizQ: "What is the correct way to get an element by the id in Javascript if the id= 'demo'?",

        optionA: "document.getElementById('demo')",

        optionB: "getelementidby('#demo')",

        optionC: "getElementIdBy('id = demo')",

        optionD: "getid('demo')",

        correctAnswer: "a"

        //a is correct
    },

    {  
        quizQ: "Where is the correct place to insert JavaScript?",

        optionA: "footer section",

        optionB: "head section",

        optionC: "body",

        optionD: "Or any of the above?",
        
        correctAnswer: "c"

        //c is correct
    },

    {
        quizQ: "What is the correct way to call a js script?",

        optionA: "'script img='script.js'",

        optionB: "'script href='script.js''",

        optionC: "'script alt='script.js'",

        optionD: "script src='script.js'",

        correctAnswer: "d"

        //d is correct
    },

    {
        quizQ: "How do you write 'Hello world' in an alert box?",

        optionA: "prompt('Hello World!')",

        optionB: "prompt.alert('Hello World!')",

        optionC: "alert('Hello World!')",

        optionD: "window('Hello World!')",
        
        correctAnswer: "c"

        //c is correct
    },

    {
        quizQ: "How do you create a function in a  JavaScript file?",

        optionA: "function = afunction {}",

        optionB: "function afunction() {}",

        optionC: "var afunction = function() {}",

        optionD: "Both option b and c",

        correctAnswer: "d"

        //d is correct
    },

    {
        quizQ: "How do you call a function?",

        optionA: "afunction call();",

        optionB: "afunction();",

        optionC: "call afunction;",

        optionD: "afunction;",
        
        correctAnswer: "b"

        //b is correct
    },

    {
        quizQ: "What is the correct syntax for a if statement?",

        optionA: "(if = );",

        optionB: "if[]{}",

        optionC: "if[]{}",

        optionD: "if(){}",

        correctAnswer: "d"
    },

    {
        quizQ: "What is the correct snytax of a for loop?",

        optionA: "for (i=0; i < 8; i++){}",

        optionB: "for (index = 0; index = index - 1){}",

        optionC: "for (i++; i = 0; i = 0){}",

        optionD: "for (i = 0; i = 12; i)",

        correctAnswer: "a"

        //a is correct
    },

    {
        quizQ: "How can you write a comment in JavaScript?",

        optionA: "!--comment--!",

        optionB: "//comment",

        optionC: "[comment]",

        optionD: "comment = 'a comment'",

        correctAnswer: "b"

        //b is correct
    },

    {
        
        quizQ: "This is dumb",

        optionA: "this is really dumb",

        optionB: "I second that",

        optionC: "Doesn't make sense",

        optionD: "HELP",

        correctAnswer: "d"

    }
];
var seconds = 50;
var playerName= "";
var currentQuestion = 0;
const startBtn = document.querySelector("#start-btn");
const selectedQuestion = document.getElementById("quiz-question");
const answerA = document.getElementById("btn-a");
const answerB = document.getElementById("btn-b");
const answerC = document.getElementById("btn-c");
const answerD = document.getElementById("btn-d");
const btnClick = document.getElementsByClassName("quiz-btn");
const homepage = document.getElementById("start");
const quizSection = document.getElementById("quiz-div");
const highScorePage = document.getElementById("high-score-page");
const userScore = document.getElementById("user-score");
const userName = document.getElementById("user-name");
const highScoreButton = document.getElementById("high-score-btn");

// Funtion that checks for right answer
 function checkAnswer(e) {
    if(e.target.value !== questions[currentQuestion].correctAnswer){  
        seconds -= 5;
    } 

    if (currentQuestion <= 9) {
    currentQuestion++;
    selectedQuestion.innerHTML = questions[currentQuestion].quizQ;
    answerA.innerHTML = questions[currentQuestion].optionA;
    answerB.innerHTML = questions[currentQuestion].optionB;
    answerC.innerHTML = questions[currentQuestion].optionC;
    answerD.innerHTML = questions[currentQuestion].optionD;

    } else {
        stopGame();
     }
};

// function to load quiz questions and starts the for loop
function loadQuestions() {
    quizSection.style.display = "unset";

    if ( currentQuestion <= 9) {

        selectedQuestion.innerHTML = questions[currentQuestion].quizQ;
        answerA.innerHTML = questions[currentQuestion].optionA;
        answerB.innerHTML = questions[currentQuestion].optionB;
        answerC.innerHTML = questions[currentQuestion].optionC;
        answerD.innerHTML = questions[currentQuestion].optionD;
        
        answerA.addEventListener("click", checkAnswer);
        answerB.addEventListener("click", checkAnswer);
        answerC.addEventListener("click", checkAnswer);
        answerD.addEventListener("click", checkAnswer);

     } else {
        stopGame();
     }
};

// function for timer
var clockTimer;   
const timeClock = document.getElementById("quiz-timer-display");

function timeLeft() {
    
    timeClock.innerHTML = seconds + " seconds";

    seconds--;

    if ( seconds === 0) {
        clearInterval(clockTimer);
        stopGame();   
    }
};

//Do not know why it won't appear if we try to do local storage.
//player name function
function nameFunction(){
    
    localStorage.setItem("name", playerName);
    var localname = localStorage.getItem("name");
    userName.innerHTML = localname;
};

// function to stop
function stopGame() {
    
    clearInterval(clockTimer);
    localStorage.setItem("score", seconds.toString());
    var localScore = localStorage.getItem("score");
    userScore.innerHTML = localScore;


    highScorePage.style.display = "unset";
    quizSection.style.display = "none";
    
    //nameFunction();
    // localStorage.setItem("name", playerName);
    // var localname = localStorage.getItem("name");
    // userName.innerHTML = localname;
};

// fuction to start quiz on start button click
function startQuiz() {  
    homepage.style.display = "none";
    clockTimer = setInterval(timeLeft, 1000);
    loadQuestions();
};

// event listener to start quiz on click of start btn
quizSection.style.display = "none";
highScorePage.style.display = "none";
startBtn.addEventListener("click", startQuiz);

highScoreButton.addEventListener("click", function(){
    quizSection.style.display = "none";
    homepage.style.display = "none";
    highScorePage.style.display = "unset";
});
