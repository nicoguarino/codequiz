var questions = [
    {
        quizQ: "Inside which HTML element do we put the JavaScript?",

        optionA: "js",

        optionB: "script",

        optionC: "scripted",

        optionD: "javascript"

        //b is correct
    },

    { 
        quizQ: "What is the correct way to get an element by the id in Javascript if the id= 'demo'?",

        optionA: "document.getElementById('demo')",

        optionB: "getelementidby('#demo')",

        optionC: "getElementIdBy('id = demo')",

        optionD: "getid('demo')"

        //a is correct
    },

    {  
        quizQ: "Where is the correct place to insert JavaScript?",

        optionA: "footer section",

        optionB: "head section",

        optionC: "body",

        optionD: "Or any of the above?"

        //c is correct
    },

    {
        quizQ: "What is the correct way to call a js script?",

        optionA: "'script img='script.js'",

        optionB: "'script href='script.js''",

        optionC: "'script alt='script.js'",

        optionD: "script src='script.js'"

        //d is correct
    },

    {
        quizQ: "How do you write 'Hello world' in an alert box?",

        optionA: "prompt('Hello World!')",

        optionB: "prompt.alert('Hello World!')",

        optionC: "alert('Hello World!')",

        optionD: "window('Hello World!')"

        //c is correct
    },

    {
        quizQ: "How do you create a function in a  JavaScript file?",

        optionA: "function = afunction {}",

        optionB: "function afunction() {}",

        optionC: "var afunction = function() {}",

        optionD: "Both option b and c"

        //d is correct
    },

    {
        quizQ: "How do you call a function?",

        optionA: "afunction call();",

        optionB: "afunction();",

        optionC: "call afunction;",

        optionD: "afunction;"

        //b is correct
    },

    {
        quizQ: "What is the correct syntax for a if statement?",

        optionA: "(if = );",

        optionB: "if[]{}",

        optionC: "if[]{}",

        optionD: "if(){}"

        //d is correct
    },

    {
        quizQ: "What is the correct snytax of a for loop?",

        optionA: "for (i=0; i < 8; i++){}",

        optionB: "for (index = 0; index = index - 1){}",

        optionC: "for (i++; i = 0; i = 0){}",

        optionD: "for (i = 0; i = 12; i)"

        //a is correct
    },

    {
        quizQ: "How can you write a comment in JavaScript?",

        optionA: "!--comment--!",

        optionB: "//comment",

        optionC: "[comment]",

        optionD: "comment = 'a comment'"

        //b is correct
    }
];
var ranQue = "";
var score = 0;
var highScore = 0;
var seconds = 50;
const startBtn = document.querySelector("#start-btn");
const selectedQuestion = document.getElementById("quiz-question");
const answerA = document.getElementById("btn-a");
const answerB = document.getElementById("btn-b");
const answerC = document.getElementById("btn-c");
const answerD = document.getElementById("btn-d");
const btnClick = document.getElementsByClassName("quiz-btn");



// Funtion that randomly pulls from the quetions array
function randomQuestion() {
    for (var i = 0; i < questions.length; i++) {
        ranQue = questions[Math.floor(Math.random() * questions.length)];

        return ranQue;
    }
    return ranQue;
};

// function to load quiz questions
function loadQuestions() {
    
    randomQuestion();

    selectedQuestion.innerHTML = ranQue.quizQ;
    answerA.innerHTML = ranQue.optionA;
    answerB.innerHTML = ranQue.optionB;
    answerC.innerHTML = ranQue.optionC;
    answerD.innerHTML = ranQue.optionD;
    console.log(ranQue);

   answerA.addEventListener("click", loadQuestions);
   answerB.addEventListener("click", loadQuestions);
   answerC.addEventListener("click", loadQuestions);
   answerD.addEventListener("click", loadQuestions);
}


// function for timer
function timer() {

    var timer = setInterval(function(){

        document.getElementById("quiz-timer-display").innerHTML = seconds + " seconds";

        seconds--;

        if ( seconds < 0) {
            clearInterval(timer);
            
        }
    }, 1000)
};

// function to store score of user


// fuction to start quiz on start button click
function startQuiz() {

    timer();
    loadQuestions();
};

// event listener to start quiz on click of start btn
startBtn.addEventListener("click", startQuiz);


