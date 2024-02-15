// Brick config
let brickWidth = 75;
let brickHeight = 20;
let brickMargin = 10;

let numberBrickPerLine = 6;
let numberBrickPerColumn = 5;

//marges des briques
let brickOffsetLeft = 50;
let brickOffsetTop = 50;

function createBrick() {
    let positionX = brickOffsetLeft;
    let positionY = brickOffsetTop;

    for (let i = 0; i < numberBrickPerColumn; i++) {
        for(let j = 0; j < numberBrickPerLine; j++) {
            let brick = document.createElement('div');
            brick.className = 'brick';

            brick.style.width = brickWidth + 'px';
            brick.style.height = brickHeight + 'px';
            brick.style.left = positionX + 'px';
            brick.style.top = positionY + 'px';

            gameSpace.appendChild(brick);

            positionX += brickWidth + brickMargin;

            bricks.push(brick);
        }

        positionX = brickOffsetLeft;
        positionY += brickHeight + brickMargin;
    }
}