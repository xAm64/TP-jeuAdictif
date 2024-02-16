let ballRadius = 35;
let ballDx = Math.floor(Math.random() * 6) -2;
let ballDy = -2;
//déplacement de la balle
function moveBall() {
    let currentPositionLeft = ball.offsetLeft;
    let currentPositionTop = ball.offsetTop;
    // Colision à gauche et à droite
    if ((currentPositionLeft <= 0) || (currentPositionLeft + ballRadius > gameSpace.offsetWidth)) {
        wall_hit.play();
        ballDx = -ballDx;
    }
    
    // colision en bas
    if (currentPositionTop <= 0) {
        wall_hit.play();
        ballDy = -ballDy;
    }
    
    //Débloque la balle si coince en haut
    if ((currentPositionLeft <= 0 && currentPositionTop <= 0) || (currentPositionLeft + ballRadius > gameSpace.offsetWidth && currentPositionTop <= 0)) {
        balldx = ballDx * -1;
        ballDy = -2;
    }
    // La balle tombe en bas
    if (currentPositionTop + (ballRadius * 2) > gameSpace.offsetHeight) {
        if (lifes > 0){
            lifes --;
            resetBall();
            die.play();
            document.getElementById("lives-rest").innerText = lifes;
        } else {
            ballDy = 0;
            ballDx = 0;
            cancelAnimationFrame(animationFrame);
            gameOver.classList.add("show");
            restart.classList.add("show");
            document.getElementById("lives-rest").innerText = lifes;
            restart.addEventListener("click", () =>{
                location.reload();
            });
        }
    }
    currentPositionLeft += ballDx;
    currentPositionTop += ballDy;
    ball.style.left = currentPositionLeft + 'px';
    ball.style.top = currentPositionTop + 'px';
}
//Réinitialise la balle
function resetBall(){
    currentPositionLeft = 285;
    currentPositionTop = 400;
    ballDy = -2;
}