//This .js file makes the gameboard
//plan to export the gameboard array for use in gameFlow.js
const setup = (() => {

const squareContainer = document.querySelector(".squareContainer");

const canvas = document.querySelector(".boardCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#B49A67";
ctx.fillRect(0, 0, 1000, 1000);
let boardArray = [];

class Point {
    constructor(isOccupied, liberty, boardID) {
        this.isOccupied = isOccupied;
        this.liberty = liberty;
        this.boardID = boardID;
    }
}

//this will get more robust in the future (maybe with things like isLiberty, who has a piece there, etc) but for now we can have isOccupied=true/false 

function makeBoardGrid(n) {     //n = desired board size (5 will output a 5x5 board, etc)
let t = 0;
for (i=0; i<n*n; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add(`square`);
    squareContainer.appendChild(newSquare);
    const newPoint = new Point(0,0,t);
    boardArray.push(newPoint); 
        newSquare.addEventListener("click", () => {
        console.log(`hi ${newPoint.boardID}`);
        })
    t++;
        }
    let calculatedSpacing = 100/n;
    squareContainer.style.gridTemplateColumns=`repeat(${n}, ${calculatedSpacing}%)`;

console.log(boardArray);
//why does setting boardID to t make everything 25? t is 25 in every instance, but I need a number that stays the same for only the duration of loop and then changes. but t should be doing this right?
//square is affecting the glocal object square, but not the individual object square. I think the squares need to be individual objects; so should I add classes here?
    //PURELY COSMETIC
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


return {boardArray, makeBoardGrid};
})()


//Will have board logic + creation in this file, and then will have game engine + playing other people in another file.
//this works b/c module export has live copies, not a static copy that has to be updated.

//====== Board Logic =======

//when a square is clicked, the array updates then the board updates
//all the array math/game logic should happen first and then the board should update to reflect that state
//so first I need to add a function that updates the array on click eventListener

const logic = (() => {
    function placeStone(color, location) {
       interactionSquare.addEventListener("click", () => {

       }) 
    }

    //return {placeStone}
})()