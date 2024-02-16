//vitesse du paddle
let step = 10;
//déplacement du paddle
function movePaddle() {
    let currentPositionLeft = paddle.offsetLeft;
    if (moveRight) {
        currentPositionLeft += step;
    }
    else if(moveLeft) {
        currentPositionLeft -= step;
    }
    // Limit Left
    if(currentPositionLeft < 0) {
        currentPositionLeft = 0;
    }
    // Limit Right
    if(currentPositionLeft + paddle.offsetWidth > gameSpace.offsetWidth) {
        currentPositionLeft = gameSpace.offsetWidth - paddle.offsetWidth;
    }
    paddle.style.left = currentPositionLeft + 'px';
}