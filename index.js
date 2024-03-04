const questions = [
    {
        question: "What's the capital of India?",
        answers: [
            { text: "Delhi", correct: true },
            { text: "Gujarat", correct: false },
            { text: "Mumbai", correct: false },
            { text: "Kolkata", correct: false },
        ]
    },
    {
        question: "Which animal is the national symbol of India?",
        answers: [
            { text: "Tiger", correct: false },
            { text: "Elephant", correct: false },
            { text: "Lion", correct: false },
            { text: "Peacock", correct: true },
        ]
    },
    {
        question: "What is the currency of India?",
        answers: [
            { text: "Dollar", correct: false },
            { text: "Yen", correct: false },
            { text: "Dirham", correct: false },
            { text: "Rupee", correct: true },
        ]
    },
    {
        question: "Which Indian city is known as the Silicon Valley of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Hyderabad", correct: false },
            { text: "Chennai", correct: false },
            { text: "Bangalore", correct: true },
        ]
    },

];
const QuestionElement = document.getElementById("question");
const AnswerButton = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-btn");
let score = 0;
let currQuesIndex = 0;


function startquiz() {
    currQuesIndex = 0;
    score = 0;
    NextButton.innerHTML = "Next";
    showquiz();
}

function showquiz() {

    reset();
    let curQuestion = questions[currQuesIndex];
    let questionNo = currQuesIndex + 1;
    QuestionElement.innerHTML = questionNo + ". " + curQuestion.question;

    curQuestion.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        AnswerButton.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", function (e) {
            const selectedBtn = e.target;
            console.log(selectedBtn)
            const iscorrect = selectedBtn.dataset.correct === 'true';
            if (iscorrect) {
                selectedBtn.classList.add("correct");
                score++;
            }
            else {
                selectedBtn.classList.add("incorrect");
            }
            Array.from(AnswerButton.children).forEach(button => {
                if (button.dataset.correct === 'true') {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });
            NextButton.style.display = "block";
        })
    });
}


function reset() {
    NextButton.style.display = "none";
    while (AnswerButton.firstChild) {
        AnswerButton.removeChild(AnswerButton.firstChild);
    }
}
NextButton.addEventListener("click", () => {
    if (currQuesIndex < questions.length) {
        handleNextbtn();
    }
    else {
        startquiz();
    }

});

function handleNextbtn() {
    currQuesIndex++;
    if (currQuesIndex < questions.length) {
        showquiz();
    }
    else {
        reset();
        QuestionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
        NextButton.innerHTML = 'Play Again';
        NextButton.style.display = "block";
    }
}
startquiz();








// NextButton.addEventListener("click", function () {
//     if (currQuesIndex < questions.length) {
//         currQuesIndex++;
//         if (currQuesIndex < questions.length) {
//             showquiz();
//         }
//         else {
//             reset();
//             QuestionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;

//             NextButton.innerHTML = 'Play Again';
//             NextButton.style.display = "block";

//         }
//     }
//     else {
//         showquiz();
//     }
// })