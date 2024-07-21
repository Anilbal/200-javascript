const quiz = [
    {
        question: "What is the capital of France?",
        answers: [
            { answer: "Berlin", isCorrect: false },
            { answer: "Madrid", isCorrect: false },
            { answer: "Paris", isCorrect: true },
            { answer: "Rome", isCorrect: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { answer: "Earth", isCorrect: false },
            { answer: "Mars", isCorrect: true },
            { answer: "Jupiter", isCorrect: false },
            { answer: "Venus", isCorrect: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { answer: "Atlantic Ocean", isCorrect: false },
            { answer: "Indian Ocean", isCorrect: false },
            { answer: "Arctic Ocean", isCorrect: false },
            { answer: "Pacific Ocean", isCorrect: true }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { answer: "O2", isCorrect: false },
            { answer: "H2O", isCorrect: true },
            { answer: "CO2", isCorrect: false },
            { answer: "NaCl", isCorrect: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { answer: "Mark Twain", isCorrect: false },
            { answer: "Charles Dickens", isCorrect: false },
            { answer: "William Shakespeare", isCorrect: true },
            { answer: "Jane Austen", isCorrect: false }
        ]
    }
];

let startBtn = document.getElementById("startBtn");
let question_div = document.querySelector(".questions");

function displayShow(){
    if(question_div.classList.contains("hidden")){
        question_div.classList.remove("hidden");
        startBtn.classList.add("hidden");
    }else{
        question_div.classList.add("hidden");
        startBtn.classList.remove("hidden");
    }
}
startBtn.addEventListener("click", displayShow);

// Logic
let currentIndex = 0;
let totalIndex = quiz.length;
let score = 0;

let questionsIndex = document.getElementById("currentIndex");
questionsIndex.innerText = currentIndex + " of " + totalIndex + " questions";

// Display answers
function displayAnswers(){
    let currentQuestion = quiz[currentIndex];
    let title = document.getElementById("title");
    let answers = document.querySelector(".answers");
    
    // Clear the previous answers
    answers.innerHTML = "";
    
    title.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(ans => {
        let answerBtn = document.createElement("button");
        answerBtn.innerText = ans.answer;
        answerBtn.addEventListener("click", () => checkAnswer(ans.isCorrect));
        answers.appendChild(answerBtn);
    });
    
    questionsIndex.innerText = (currentIndex + 1) + " of " + totalIndex + " questions";
}

displayAnswers();

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    currentIndex++;
    if (currentIndex < totalIndex) {
        displayAnswers();
    } else {
        showResults();
    }
}

let result = document.querySelector(".result");
let restartBtn=document.createElement("button")
restartBtn.className="restart"
restartBtn.innerText="Restart"
function showResults() {
    let scoreDisplay = document.createElement("p");
    scoreDisplay.innerText = "Your score: " + score + " out of " + totalIndex;
    result.appendChild(scoreDisplay);
    result.appendChild(restartBtn)

     // Hide the question div and show the result div
     question_div.classList.add("hidden");
     result.classList.remove("hidden");
}
questionsIndex=currentIndex + " of " + totalIndex + " questions"
// Restart quiz
restartBtn.addEventListener("click", () => {
    result.innerHTML=""
    if(question_div.classList.contains("hidden")){
        question_div.classList.remove("hidden");
        result.classList.add("hidden");
    }else{
        question_div.classList.add("hidden");
        result.classList.remove("hidden");
    }
});
