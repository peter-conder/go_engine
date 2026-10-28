//This .js file makes the gameboard
//plan to export the gameboard array for use in gameFlow.js


//point (on board), stone, group objects
class Player {
    constructor(userName, color, dan) {
        this.userName = userName;
        this.color = color;
        this.dan = dan;
    }
}
class Point {
    constructor(isOccupied, liberty, boardID) {
        this.isOccupied = isOccupied;
        this.liberty = liberty;
        this.boardID = boardID;
    }
}

class Stone {
    constructor(location, group) {
        this.location = location;
        this.group = group;
    }
}

class Group {
    constructor(stones, liberty) {
        this.stones = stones;
        this.liberty = liberty;
    }
}

const squareContainer = document.querySelector(".squareContainer");
const canvas = document.querySelector(".boardCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#B49A67";
ctx.fillRect(0, 0, 1000, 1000);
let boardArray = [];

function makeBoardGrid(n) {     //n = desired board size (5 will output a 5x5 board, etc)
let t = 0;
for (i=0; i<n*n; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add(`square`);
    squareContainer.appendChild(newSquare);
    
    const newPoint = new Point(null,null,t);
    boardArray.push(newPoint); 

        //newSquare.addEventListener("click",() => {
          //  newPoint.isOccupied = "white";
          //  return console.log(`${newPoint.isOccupied} at ${newPoint.boardID}`);
       // });
        //console.log(`${newPoint.isOccupied}`);
        //return console.log(`hi ${newPoint.boardID}`);
        //logic.placeStone(newPoint.boardID, "black")

    t++;
        }
    let calculatedSpacing = 100/n;
    squareContainer.style.gridTemplateColumns=`repeat(${n}, ${calculatedSpacing}%)`;

console.log(boardArray);
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


const nodeList = document.querySelectorAll('.square');
const divList = Array.from(nodeList);
console.log(divList); 
const logic = (() => {
})()


