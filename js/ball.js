let ballRadius = 30;
let ballDx = Math.floor(Math.random() * 6) -2;
let ballDy = -2;

function moveBall() {
    let currentPositionLeft = ball.offsetLeft;
    let currentPositionTop = ball.offsetTop;

    // Limit left
    if (currentPositionLeft < 0) {
        ballDx = -ballDx;
    }

    // Limit Right
    if (currentPositionLeft + ballRadius * 2 > gameSpace.offsetWidth) {
        ballDx = -ballDx;
    }

    // Limit Top
    if (currentPositionTop < 0) {
        ballDy = -ballDy;
    }

    // Limit Bottom
    if (currentPositionTop + ballRadius * 2 > gameSpace.offsetHeight) {
        gameOver.classList.add("show");
        restart.classList.add("show");
        cancelAnimationFrame(animationFrame);
        restart.addEventListener("click", () =>{
            location.reload();
        });

    }

    currentPositionLeft += ballDx;
    currentPositionTop += ballDy;


    ball.style.left = currentPositionLeft + 'px';
    ball.style.top = currentPositionTop + 'px';
}