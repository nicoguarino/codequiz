# Nico Guarino Portfolio

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Code quiz is used to challenge your basic JavaScript knowledge. Test yourself against the clock to get the highest score against your peers.

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/portfolio.git)
* [Code Quiz Website](https://nicoguarino.github.io/codequiz/)

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/codequiz/blob/main/assets/image/code_sampel.png "Sample Code")

### Sample Code
```HTML Sample
<main class="main-section">
    
    <!--Start button that is clicked and starts quiz and timer-->
    <div id="start" class="div">
        <h1>Code Quiz</h1>>
        <button id="start-btn" class="btn">Start</button>
    </div>

    <!--Quiz Div-->
    <div  id="quiz-div" class="quiz">
        <!--quiz question-->
        <p id ="quiz-question" class="div"></p>
        <!--quiz option selections-->
        <div class="question-buttons">
            <button id= "btn-a" value="a" class="quiz-btn"></button>
            <button id= "btn-b" value="b" class="quiz-btn"></button>
            <button id= "btn-c" value="c" class="quiz-btn"></button>
            <button id= "btn-d" value= "d" class="quiz-btn"></button>
        </div>
    </div>
```

```CSS Sample
body {
    font-size: 22px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: rgb(174, 106, 238);
}
button {
    font-size: 18px;
}

button:hover {
    opacity: .7;
    background-color: gray;
}

.div  {
    text-align: center;
}

.quiz {
    position: relative;
    text-align: center;
}
```
```JavaScript Sample
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
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino

## Contributing <a name = "contributing"></a>

Code Quiz website is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Code Quiz
