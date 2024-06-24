document.addEventListener('DOMContentLoaded', () => {
    const gameImages = [
        { src: 'images/apple.jpg', answer: 'Apple' },
        { src: 'images/banana.jpg', answer: 'Banana' },
        { src: 'images/car.jpg', answer: 'Car' },
        { src: 'images/dog.jpg', answer: 'Dog' },
        { src: 'images/elephant.jpg', answer: 'Elephant' },
        { src: 'images/flower.jpg', answer: 'Flower' },
        { src: 'images/guitar.jpg', answer: 'Guitar' },
        { src: 'images/house.jpg', answer: 'House' },
        { src: 'images/icecream.jpg', answer: 'Ice Cream' },
        { src: 'images/jacket.jpg', answer: 'Jacket' }
    ];
    
    let currentImageIndex = 0;
    let timer;

    function startGame() {
        console.log('Game started');
        loadImage();
        startTimer();
    }

    function loadImage() {
        const imageElement = document.getElementById('image');
        imageElement.src = gameImages[currentImageIndex].src;
        console.log(`Loading image: ${gameImages[currentImageIndex].src}`);

        const optionsElement = document.getElementById('options');
        optionsElement.innerHTML = '';
        gameImages.forEach((image, index) => {
            const button = document.createElement('button');
            button.textContent = image.answer;
            button.addEventListener('click', () => checkAnswer(index));
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(index) {
        const feedbackElement = document.getElementById('feedback');
        if (index === currentImageIndex) {
            feedbackElement.textContent = 'Correct!';
        } else {
            feedbackElement.textContent = 'Try again!';
        }
        clearTimeout(timer);
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % gameImages.length;
            startGame();
        }, 2000);
    }

    function startTimer() {
        const timerElement = document.getElementById('timer');
        let timeRemaining = 10;
        timerElement.textContent = `Time left: ${timeRemaining}s`;

        timer = setInterval(() => {
            timeRemaining -= 1;
            timerElement.textContent = `Time left: ${timeRemaining}s`;
            if (timeRemaining <= 0) {
                clearInterval(timer);
                checkAnswer(-1); // Simulate incorrect answer
            }
        }, 1000);
    }

    startGame();
});
