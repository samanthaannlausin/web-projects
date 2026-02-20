const quizData = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Mark Language",
            "Hyper Tool Multi Language"
        ],
        correct: 0
    },
    {
        question: "Which language is used for styling web pages?",
        answers: ["HTML", "CSS", "Python", "C++"],
        correct: 1
    },
    {
        question: "Which is a JavaScript framework?",
        answers: ["Laravel", "React", "Django", "Flask"],
        correct: 1
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        answers: ["//", "<!-- -->", "#", "**"],
        correct: 0
    },
    {
        question: "Which method is used to display output in the console?",
        answers: ["print()", "console.log()", "echo()", "output()"],
        correct: 1
    },
    {
        question: "Which company developed JavaScript?",
        answers: ["Microsoft", "Google", "Netscape", "IBM"],
        correct: 2
    },
    {
        question: "Which HTML tag is used to link a JavaScript file?",
        answers: ["<js>", "<script>", "<link>", "<style>"],
        correct: 1
    },
    {
        question: "Which CSS property changes text color?",
        answers: ["background-color", "font-style", "color", "text-decoration"],
        correct: 2
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answers: ["=", "==", "===", "!="],
        correct: 2
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        answers: ["int", "var", "string", "define"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    answersEl.innerHTML = "";

    currentQuiz.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answersEl.appendChild(button);
    });
}

function selectAnswer(index) {
    if (index === quizData[currentQuestion].correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Finished!";
        answersEl.innerHTML = "";
        nextBtn.style.display = "none";
        scoreEl.innerText = `Your Final Score: ${score}/${quizData.length}`;
    }
});

loadQuestion();