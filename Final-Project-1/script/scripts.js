const gameData = [
    {
        image: 'images/apple.jpg',
        options: ['Apple', 'Banana'],
        answer: 'Apple'
    },
    {
        image: 'images/carrot.jpg',
        options: ['Carrot', 'Broccoli'],
        answer: 'Carrot'
    },
    {
        image: 'images/banana.jpg',
        options: ['Banana', 'Apple'],
        answer: 'Banana'
    },
    {
        image: 'images/strawberry.jpg',
        options: ['Strawberry', 'Cherry'],
        answer: 'Strawberry'
    },
    {
        image: 'images/elephant.jpg',
        options: ['Elephant', 'Giraffe'],
        answer: 'Elephant'
    },
    {
        image: 'images/broccoli.jpg',
        options: ['Broccoli', 'Carrot'],
        answer: 'Broccoli'
    },
    {
        image: 'images/tomato.jpg',
        options: ['tomato', 'Strawberry'],
        answer: 'tomato'
    },
    {
        image: 'images/giraffe.jpg',
        options: ['Giraffe', 'Elephant'],
        answer: 'Giraffe'
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeRemaining = 10; // Set the time for each question
const gameArea = document.getElementById('game-area');
const hintButton = document.getElementById('hint');
const imageElement = document.getElementById('image');
const optionsElement = document.getElementById('options');
const feedbackElement = document.createElement('div');
feedbackElement.id = 'feedback';
const timerElement = document.createElement('div');
timerElement.id = 'timer';
gameArea.appendChild(feedbackElement);
gameArea.appendChild(timerElement);

function loadQuestion() {
    clearInterval(timer); // Clear any existing timer
    timeRemaining = 10; // Reset timer
    const question = gameData[currentQuestion];
    imageElement.src = question.image;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
    feedbackElement.innerText = ''; // Clear feedback text
    startTimer(); // Start the timer for the new question
}

function checkAnswer(selectedOption) {
    const correctAnswer = gameData[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
        feedbackElement.innerText = 'Correct!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.innerText = 'Try again!';
        feedbackElement.style.color = 'red';
    }
    currentQuestion++;
    if (currentQuestion < gameData.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        feedbackElement.innerText = `Congratulations! Your score is ${score}.`;
    }
}

function startTimer() {
    timerElement.innerText = `Time remaining: ${timeRemaining}`;
    timer = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = `Time remaining: ${timeRemaining}`;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            feedbackElement.innerText = 'Time\'s up! Moving to the next question.';
            feedbackElement.style.color = 'orange';
            currentQuestion++;
            if (currentQuestion < gameData.length) {
                setTimeout(loadQuestion, 1000);
            } else {
                feedbackElement.innerText = `Game over! Your score is ${score}.`;
            }
        }
    }, 1000);
}

hintButton.addEventListener('click', () => {
    alert(`Hint: The correct answer is ${gameData[currentQuestion].answer}`);
});

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});
