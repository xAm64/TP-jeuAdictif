const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rules = document.getElementById("rules");
const rulesButton = document.getElementById("rules-btn");
const closeRules = document.getElementById("close-btn");
//variables
let leftArrow = false;
let rightArrow = false;

//gestion affichage fonctionnement
rulesButton.addEventListener("click", () =>{
    rules.classList.add("show");
});
closeRules.addEventListener("click", () =>{
    rules.classList.remove("show");
});

//Contole de la planche avec touches fléchés du clavier
document.addEventListener("keydown", (k) => {
    if (k.key == "ArrowLeft" || k.key == "Left"){
        leftArrow = true;
    } else if (k.key == "ArrowRight" || k.key == "Right"){
        rightArrow = true;
    }
});
document.addEventListener("keyup", (k) => {
    if (k.key == "ArrowLeft" || k.key == "Left"){
        leftArrow = false;
    } else if (k.key == "ArrowRight" || k.key == "Right"){
        rightArrow = false;
    }
});

function loop(){
    drawPaddle();
    movePaddle();
    requestAnimationFrame(loop());
}

window.onload = (event) => {
    loop();
};