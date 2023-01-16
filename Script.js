// Quiz Variables
var questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Rome", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Saturn", "Neptune"],
        answer: "Jupiter"
    },

];

var timer = 60; // Timer in seconds
var currentQuestion = 0;
var score = 0;

// Timer Function
function startTimer() {
    var interval = setInterval(function() {
        timer--;
        document.getElementById("time").innerHTML = timer;
        if (timer <= 0) {
            clearInterval(interval);
            endQuiz();
        }
    }, 1000);
}

// Display Next Question
function nextQuestion() {
    var question = questions[currentQuestion];
    document.getElementById("question-title").innerHTML = question.question;
    for (var i = 0; i < question.choices.length; i++) {
        var choice = question.choices[i];
        var btn = document.createElement("button");
        btn.classList.add("choice-btn");
        btn.innerHTML = choice;
        btn.onclick = checkAnswer;
        document.getElementById("choices").appendChild(btn);
    }
}

// Check Answer
function checkAnswer() {
    if (this.innerHTML == questions[currentQuestion].answer) {
        score++;
        document.getElementById("feedback").innerHTML = "Correct!";
        document.getElementById("feedback").classList.remove("hide");
    } else {
        timer -= 10;
        document.getElementById("feedback").innerHTML = "Incorrect!";
        document.getElementById("feedback").classList.remove("hide");
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        endQuiz();
    }
    else {
        document.getElementById("choices").innerHTML = "";
        nextQuestion();
    }
}

// End Quiz
function endQuiz() {
    var initials = prompt("Enter your initials:");
    localStorage.setItem(initials, score);
    alert("Quiz Over! Your score is " + score);
}

// Start Quiz
function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("questions").style.display = "";
}