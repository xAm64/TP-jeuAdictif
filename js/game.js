const rules = document.getElementById("rules");
const rulesButton = document.getElementById("rules-btn");
const closeRules = document.getElementById("close-btn");
const gameOver = document.getElementById("you-loose");
const winOver = document.getElementById('you-on');
const sound = document.getElementById('sound-icon');
const restart = document.getElementById("restart");

let lifes = 3;
let moveLeft = false;
let moveRight = false;
let score = 0;

//gestion affichage fonctionnement
rulesButton.addEventListener("click", () =>{
    rules.classList.add("show");
});
closeRules.addEventListener("click", () =>{
    rules.classList.remove("show");
});
//son du jeu
sound.addEventListener("click", () => {
    sound.muted = true;
    paddle_hit.muted = !paddle_hit.muted;
    brick_hit.muted = !brick_hit.muted;
    wall_hit.muted = !wall_hit.muted;
    die.muted = !die.muted;
    win.muted = !win.muted;
});
//Éléments du jeu
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
//Quand appuye sur une touche
function onKeyDown(event) {
    if (event.key === 'ArrowRight') {
        moveRight = true;
    }
    else if (event.key === 'ArrowLeft') {
        moveLeft = true;
    }
}
//Quand on relache la touche
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
    let ballBottomY = ball.offsetTop + ballRadius;
    let paddleLeft = paddle.offsetLeft;
    let paddleTop = paddle.offsetTop;
    let paddleRight = paddleLeft + paddle.offsetWidth;
    let paddleBottom = paddleTop + paddle.offsetHeight;
    if (ballX > paddleLeft && ballX < paddleRight &&
        ballBottomY > paddleTop && ballBottomY < paddleBottom
    ) {
        paddle_hit.play();
        ballDy = -ballDy;
        if (ballX < paddleLeft + paddle.offsetWidth / 2) {
            ballDx = -Math.abs(ballDx);
        }
        if (ballX > paddleLeft + paddle.offsetWidth / 2) {
            ballDx = Math.abs(ballDx);
        }
    }
}
// Colision avec les briques
function checkCollisionBricks() {
    let ballX = ball.offsetLeft + ballRadius;
    let ballY = ball.offsetTop + ballRadius;
    for(let i = bricks.length - 1; i >= 0; i--) {
        let b = bricks[i];
        let brickLeft = b.offsetLeft;
        let brickTop = b.offsetTop;
        let brickRight = brickLeft + b.offsetWidth;
        let brickBottom = brickTop + b.offsetHeight;
        if (ballX > brickLeft &&
            ballX - ballRadius < brickRight &&
            ballY > brickTop &&
            ballY - ballRadius < brickBottom
        ) {
            brick_hit.play();
            ballDy = -ballDy;
            gameSpace.removeChild(b);
            bricks.splice(i, 1);
            score ++;
            document.getElementById("scoreGame").innerText = score;
        }
    }
}
//annimation du jeu
function loop(){
    animationFrame = window.requestAnimationFrame(function() {
        movePaddle();
        moveBall();
        checkCollisionPaddle();
        checkCollisionBricks();
        if(bricks.length === 0){
            win.play();
            winOver.classList.add('show');
            restart.classList.add("show");
            restart.addEventListener("click", () =>{
                location.reload();
            });
            return;
        }
        loop();
    })
}
//initialisation du jeu
function init() {
    initKeyboardListener();
    createBrick();
    loop();
}
init();
