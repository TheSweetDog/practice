/**
 * Snake Game Components:
 * 
 * ! Initialization
 * 1. Create the snake body: Initialize an array to represent the snake's coordinates.
 * 2. Create food: Randomly place food on the grid.
 *
 * ! Data Storage
 * 1. Store current score: Utilize localStorage to keep track of the current score.
 * 2. Store high score: Utilize localStorage to maintain the high score across sessions.
 *
 * ! Core Mechanics
 * 1. Move the snake: Implement logic to update snake's coordinates and redraw it.
 * 2. Grow the snake: When the snake eats food, extend its body.
 *
 * ! Interactions
 * 1. Eating mechanism: Detect collision between snake and food, then trigger growth and score update.
 * 2. Death conditions: Implement conditions under which the snake will 'die' and the game will end.211111111111
 */

// define the variables
const gameDetails = document.querySelector('.game-details');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
const playBoard = document.querySelector('.play-board');
const controls = document.querySelectorAll('.controls i');

// define the variables for a game
let gameOver = false;
let snakeX = 5 ,snakeY = 5;
let foodX, foodY;
let snakeBody = [];
let score = 0;
let moveX = 0, moveY = 0;
let setIntervalId

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over!");
    location.reload();
}

// update the location of food
const updateFoodLocation = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

// get high score
let highScore = localStorage.getItem("high-score");
highScoreElement.innerHTML = `High Score: ${highScore}`;

// movements of a snake
const snakeMovements = e => {
    if (e.key === "ArrowUp" && moveY != 1) {
        moveX = 0;
        moveY = -1;
    } else if (e.key === "ArrowDown" && moveY != -1) {
        moveX = 0;
        moveY = 1;
    } else if (e.key === "ArrowLeft" && moveX != 1) {
        moveX = -1;
        moveY = 0;
    } else if (e.key === "ArrowRight" && moveX != -1) {
        moveX = 1;
        moveY = 0;
    }
}


//main logic of the game
const main = () => {
    if (gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // when a snake eats food
    if (snakeX === foodX && snakeY === foodY) {
        updateFoodLocation();
        // add a new part to the snake
        snakeBody.push([foodX,foodY]);
        // add scores and update high score
        score++;
        highScore = score >= highScore ? score : highScore;

        localStorage.setItem("high-score", highScore);
        scoreElement.innerHTML = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    };

    // Update Snake Head
    snakeX += moveX;
    snakeY += moveY;

    // shifting forward the snake
    for(let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    };

    snakeBody[0] = [snakeX, snakeY];

    // snake dies when it hits a wall
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }

    // add div for each part of snake body
    for(let i = 0; i < snakeBody.length; i++) {
        html += `<div class="snake" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            gameOver = true;
        };
    };
    playBoard.innerHTML = html;
};

// start the game
setIntervalId = setInterval(main, 100);
updateFoodLocation();
document.addEventListener("keyup", snakeMovements);