let score = 0;
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");

function setAdditionGame() {
    answerform.setAttribute("data-gametype", "addition");
    additionQuiz();
}

function setSubtractionGame() {
    answerform.setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    answerform.setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function checkAnswer() {
    
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        alert("Hey! You got it right :)");
        score++;
    }
    else {
        alert("Awww...wrong this time :(");
    }
    answerform["answer"].value = "";
    scorebox.textContent = score;
    gameType();
    return false;
}
    

function gameType() {
    
    let gametype = answerform.getAttribute("data-gametype");

    if (gametype == "addition") {
        additionQuiz();
    }
    else if (gametype == "subtraction") {
        subtractionQuiz();
    }
    else if (gametype == "multiplication") {
        multiplicationQuiz();
    }
    
    
    if (score == 10){
        document.getElementById("won").classList.remove("winImageHidden");
        document.getElementById("won").classList.add("winning");
    }
    return false;
}

function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50) + 1;
    let num2 = Math.floor(Math.random() * 50) + 1;
    questionbox.textContent = `What is: ${num1} + ${num2}?`;
    answerform["rightAnswer"].value = (num1 + num2);
}

function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    questionbox.textContent = `What is: ${num1} x ${num2}?`;
    answerform["rightAnswer"].value = (num1 * num2);
}

function subtractionQuiz() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    if (num1 < num2) {
       num1 = num1 * 10;
     }
    questionbox.textContent = `What is: ${num1} - ${num2} ?`;
    answerform["rightAnswer"].value = (num1 - num2);
}

gameType();




