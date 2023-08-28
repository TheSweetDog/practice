
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
const highScore = document.querySelector('.high-score');
const playBoard = document.querySelector(`.play-board`);
const controls = document.querySelectorAll('.controls i');

// define the variables for a game
let gameOVer = false;
let snakeX = 15 ,snakeY = 15;
let foodX, foodY;
let snakeBody = [];
let score = 0;

// update the location of food
const updateFoodLocation = () => {
    const getRandomCoordinate = () => Math.floor(Math.random() * 30 + 1);
    const foodX = getRandomCoordinate();
    const foodY = getRandomCoordinate();
    const foodHtml = `<div class="food" style="grid-area: ${foodX} / ${foodY};">`;
    playBoard.innerHTML = foodHtml;
}


updateFoodLocation();

