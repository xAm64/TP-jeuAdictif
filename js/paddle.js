const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
//variables
//largeur de la planche
let paddle_width = 100;
//placement de la planche
const paddle_margin_bottom = 20;
//hauteur de la planche
const paddle_height = 10;
//vitesse déplacement de la planche
let speedPaddle = 8;

//créer la planche
let paddle = {
    //centre la planche, moitié largeur canvas - moitié largeur planche.
    x: (canvas.width /2) - (paddle_width /2),
    //place la planche en hauteur
    y: canvas.height - paddle_margin_bottom - paddle_height,
    //prends la largeur actuelle de la planche
    w: paddle_width,
    //prends la hauteur de la planche
    h: paddle_height,
    //vitesse de déplacement de la planche
    dx: speedPaddle
}

//dessiner la planche
function drawPaddle(){
    //prends le modèle 2D de la planche
    ctx.beginPath();
    //change la couleur de planche (ou texture)
    ctx.fillStyle = "#da87f1";
    //dessinner la planche
    ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
    //couleur de bordure
    ctx.strokeStyle = "#e9a0ff";
    ctx.strokeRect(paddle.x, paddle.y, paddle.w, paddle.h);
    ctx.closePath();
}

//déplacer la planche
function movePaddle(){
    if (leftArrow && paddle.x > 0) {
        paddle.x -= paddle.dx
    } else if (rightArrow && paddle.x + paddle.w < canvas.width){
        paddle.x += paddle.dx
    }
}