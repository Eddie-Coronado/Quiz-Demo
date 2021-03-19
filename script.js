var startButton = document.getElementById('start-btn')
var questionConetainerEl = document.getElementById('question-container')
var submitEl = document.getElementById('submit-btn')
var questionEl = document.getElementById('question')
var answerButtonEl = document.getElementById('answer-buttons')
var question = document.getElementById('question-container')
var clockEl = document.getElementById('clock')


var score = 0;
var scoreKeeper = document.getElementById('score')
scoreKeeper.textContent = score;
startButton.addEventListener('click', startClock)
startButton.addEventListener('click', startGame)
submitEl.addEventListener('click', () => {
    currentQuestion++
    setNextQuestion()
})

function startGame() {
startButton.classList.add('hide')
clockEl.classList.remove ('hide')
timerStart = true
randomQuestions = questions.sort(() => + .5)
currentQuestion = 0
questionConetainerEl.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestion])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
        button.addEventListener('click', selectAnswer)
        answerButtonEl.appendChild(button)
    })
}


function resetState() {
    submitEl.classList.add('hide')
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild (answerButtonEl.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    Array.from(answerButtonEl.children).forEach(button => {
        addPoints(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestion +1) {
         currentQuestion++
         setNextQuestion()
     } else {
        score = 0;
        questionConetainerEl.classList.add ('hide')
        startButton.innerText = 'Try Again?'
        startButton.classList.remove ('hide')
        restTimer()
   }}

 

   function startClock () {
    var timeleft = 60;
    var timer = setInterval (function() {
      if (timeleft <= 0) {
        clearInterval(timer);
        document.getElementById('clock').innerHTML = 'Game over!'
        questionConetainerEl.classList.add ('hide')
        startButton.innerText = 'Try Again?'
        startButton.classList.remove ('hide')
        resetScore();
      } 
      else {
        document.getElementById('clock').innerHTML = timeleft + ' seconds left'
      }
      timeleft -= 1;
    }, 1000);
    }

function restTimer() {
    timer = 0;
}

function addPoints(element, correct) {
    if(correct) {
            score += 5;
            scoreKeeper.textContent = score;
            setNextQuestion();
        } else{ 
            setNextQuestion();
            return;
        }
    }


var questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            { text: 'strings', correct: false},
            { text: 'booleans', correct: false},
            { text: 'alerts', correct: true},
            { text: 'numbers', correct: false}
        ]
    },
    {
        question: 'The condition in an if / else statement is enclosed within____.',
        answers: [
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: true },
            { text: 'parantheses', correct: false },
            { text: 'square brackets', correct: false }           
        ]
    }, 
    {
        question: 'Arrays in JavaScript can ne used to store____.',
            answers: [
                { text: 'numbers and strings', correct: false},
                { text: 'other arrays', correct: false},
                { text: 'booleans', correct: false},
                { text: 'all of the above', correct: true}
        ]
    }, 
    {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
            answers: [
                { text: 'commas', correct: false},
                { text: 'curly brackets', correct: false},
                { text: 'quotes', correct: true},
                { text: 'parantheses', correct: false}
        ]
     }, 
     {
            question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
                answers: [
                    { text: 'JavaScript', correct: false},
                    { text: 'terminal / bash', correct: false},
                    { text: 'for loops', correct: false},
                    { text: 'Console log', correct: true}
        ]
     }
]

