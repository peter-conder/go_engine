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

function makeDivGrid(n) {     //n = desired board size (5 will output a 5x5 board, etc)
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


//====PURELY COSMETIC=====
console.log(boardArray);
    function makeLineGrid(size) {
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
            function drawGrid(size) {
                let calculatedNumber = 1000/size;
                //draws the grid
                function drawHorizontal(size) {
                console.log(`width calculated to be ${calculatedNumber}`);
                let currentY = (1000/size)/2;
                for (i=0; i<size; i++) {
                    ctx.beginPath(); //starts at 100
                    //start point
                    ctx.moveTo(0, currentY);
                    //end point
                    ctx.lineTo(1000, currentY);
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    currentY += calculatedNumber;
                    console.log(currentY);
                }}
                function drawVertical(size) {
                console.log(`height calculated to be ${calculatedNumber}`);
                let currentX = (1000/size)/2;
                for (i=0; i<size; i++) {
                    ctx.beginPath(); //starts at 100
                    //start point
                    ctx.moveTo(currentX, 0);
                    //end point
                    ctx.lineTo(currentX, 1000);
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    currentX += calculatedNumber;
                    console.log(currentX);
                }}
                drawHorizontal(size);
                drawVertical(size);
            }
        //drawSquare();
        drawGrid(size);
        //drawGrid has to be optimized to work with 5x5, 9x9 and 13x13.
        /**
         * I need a for loop that loops =to n. But how do I make sure that they are all spaced correctly?
         * the canvas grid is 1000x1000. 1000/19 = 52.6315789474
         * 1000/9 = 111.1111111111
         * 1000/5 = 200 
         * I think I need 2 separate functions: drawHorizontal and drawVertical. 
         * drawHorizontal will draw n-2 lines, starting at 1000/n pixels and adding 1000/n each iteration. 1000/n will be a variable that adds 1000/n each time the loop happens.
         * same for vertical. I need to figure out the exact ctx.moveTo and ctx.lineTo arguments, but that shouldn't be extremely hard.
         * */ 
    }
   
    makeLineGrid(n);
}
makeDivGrid(9);


const nodeList = document.querySelectorAll('.square');
const divList = Array.from(nodeList);
console.log(divList); 
