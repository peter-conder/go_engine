//This .js file makes the gameboard
//plan to export the gameboard array for use in gameFlow.js

const squareContainer = document.querySelector(".squareContainer");

const canvas = document.querySelector(".boardCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#B49A67";
ctx.fillRect(0, 0, 1000, 1000);
let boardArray = [];
let square = {
    isOccupied: false,
};
//this will get more robust in the future (maybe with things like isLiberty, who has a piece there, etc) but for now we can have isOccupied=true/false 

function makeBoardGrid(n) {     //n = desired board size (5 will output a 5x5 board, etc)
let t = 1;
for (i=0; i<n*n; i++) {

    let newSquare = document.createElement("div");
    newSquare.classList.add(`square`);
    squareContainer.appendChild(newSquare);
        //const textContent = document.createTextNode("square exist");
        //newSquare.appendChild(textContent);
    boardArray.push(square); 
    t++;
        }
    let calculatedSpacing = 100/n;
    squareContainer.style.gridTemplateColumns=`repeat(${n}, ${calculatedSpacing}%)`;

    function makeLineGrid() {
            // Draws square
            function drawSquare() {
            ctx.beginPath();
            ctx.moveTo(97.5, 100);
            ctx.lineTo(900, 100);
            ctx.lineWidth = 5;
            ctx.stroke();
            //====
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.lineTo(100, 900);
            ctx.lineWidth = 5;
            ctx.stroke();
            //====
             ctx.beginPath();
            ctx.moveTo(897.5, 900);
            ctx.lineTo(900, 97.5);
            ctx.lineWidth = 5;
            ctx.stroke();
            //====
            ctx.beginPath();
            ctx.moveTo(900,900);
            ctx.lineTo(97.5, 900);
            ctx.lineWidth = 5;
            ctx.stroke();
            }
            //draws grid
            //keeping these two functions separated will let me do more precise calculations later
            function drawGrid() {
                ctx.beginPath();
                ctx.moveTo(300, 100);
                ctx.lineTo(300, 900);
                ctx.lineWidth = 5;
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(500, 100);
                ctx.lineTo(500, 900);
                ctx.lineWidth = 5;
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(700, 100);
                ctx.lineTo(700, 900);
                ctx.lineWidth = 5;
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(100, 300);
                ctx.lineTo(900, 300);
                ctx.lineWidth = 5;
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(100, 500);
                ctx.lineTo(900, 500);
                ctx.lineWidth = 5;
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(100, 700);
                ctx.lineTo(900, 700);
                ctx.lineWidth = 5;
                ctx.stroke();
            }
        drawSquare();
        drawGrid();
    }
   
    makeLineGrid();
}
    makeBoardGrid(5);
    console.log(boardArray);

let interactionSquare = document.querySelectorAll('.square');
console.log(interactionSquare);

const placeStone = () => {

}

//Will have board logic + creation in this file, and then will have game engine + playing other people in another file.
//this works b/c module export has live copies, not a static copy that has to be updated.

