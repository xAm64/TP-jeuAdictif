const brickWidth = 60;
const brickHeight = 20;
const brickMargin = 10;
let positionY = 30;
let row = 3;
let container = document.getElementById('gameSpace');
//créer les briques
function createBrick(){
    for(let i = 0; i < row; i++){
        let positionX = 20 + (i * 10);
        let brickCount = Math.random() * (7 - 2) + 2;
        positionY += i;
        for(let j = 0; j < brickCount; j++){
            let newBrick = document.createElement('div');
            newBrick.setAttribute('class', "brick");
            newBrick.style.width = brickWidth + 'px';
            newBrick.style.height = brickHeight + 'px';
            newBrick.style.left = positionX + 'px';
            newBrick.style.top = positionY + 'px';
            container.appendChild(newBrick);
            positionX += brickWidth + brickMargin;
            bricks.push(newBrick);
        }
        positionY += brickHeight + brickMargin;
    }
}