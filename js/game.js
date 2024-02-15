const rules = document.getElementById("rules");
const rulesButton = document.getElementById("rules-btn");
const closeRules = document.getElementById("close-btn");
const gameOver = document.getElementById("you-loose");

let life = 3;
let moveLeft = false;
let moveRight = false;

//gestion affichage fonctionnement
rulesButton.addEventListener("click", () =>{
    rules.classList.add("show");
});
closeRules.addEventListener("click", () =>{
    rules.classList.remove("show");
});

const gameSpace = document.querySelector('#gameSpace');
const paddle = document.querySelector('#paddle');
const ball = document.querySelector('#ball');
let bricks = [];

let animationFrame;

//clavier
function initKeyboardListener() {
    document.addEventListener('keydown', onKeyDown, false);
    document.addEventListener('keyup', onKeyUp, false);
}
function onKeyDown(event) {
    if (event.key === 'ArrowRight') {
        moveRight = true;
    }
    else if (event.key === 'ArrowLeft') {
        moveLeft = true;
    }
}
function onKeyUp(event) {
    if (event.key === 'ArrowRight') {
        moveRight = false;
    }
    else if (event.key === 'ArrowLeft') {
        moveLeft = false;
    }
}

//colisions
function checkCollisionPaddle() {
    let ballX = ball.offsetLeft + ballRadius;
    let ballBottomY = ball.offsetTop + ballRadius * 2;

    let paddleLeft = paddle.offsetLeft;
    let paddleTop = paddle.offsetTop;
    let paddleRight = paddleLeft + paddle.offsetWidth;
    let paddleBottom = paddleTop + paddle.offsetHeight;

    // Collision
    if (ballX > paddleLeft && ballX < paddleRight &&
        ballBottomY > paddleTop && ballBottomY < paddleBottom
    ) {
        ballDy = -ballDy;

        if (ballX < paddleLeft + paddle.offsetWidth / 2) {
            ballDx = -Math.abs(ballDx);
        }

        if (ballX > paddleLeft + paddle.offsetWidth / 2) {
            ballDx = Math.abs(ballDx);
        }

    }
}
function checkCollisionBricks() {
    let ballX = ball.offsetLeft + ballRadius;
    let ballY = ball.offsetTop + ballRadius;

    for(let i = bricks.length - 1; i >= 0; i--) {
        let b = bricks[i];

        let brickLeft = b.offsetLeft;
        let brickTop = b.offsetTop;
        let brickRight = brickLeft + b.offsetWidth;
        let brickBottom = brickTop + b.offsetHeight;

        // Collision
        if (ballX > brickLeft &&
            ballX < brickRight &&
            ballY + ballRadius > brickTop &&
            ballY - ballRadius < brickBottom
        ) {
            ballDy = -ballDy;
            gameSpace.removeChild(b);
            bricks.splice(i, 1);
        }
    }
}

function loop(){
    animationFrame = window.requestAnimationFrame(function() {
        movePaddle();
        moveBall();
        checkCollisionPaddle();
        checkCollisionBricks();

        loop();
    })
}

function init() {
    initKeyboardListener();
    createBrick();

    loop();
}

init();
