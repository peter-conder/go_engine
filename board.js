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
const border = document.querySelector(".borderCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#B49A67";
ctx.fillRect(0, 0, 1000, 1000);
const ctx2 = border.getContext("2d");
ctx2.fillStyle = "#B49A67";
ctx2.fillRect(0, 0, 1000, 1000);
ctx2.clearRect(0, 0, 1000,1000);
ctx2.strokeStyle = '#000000';
ctx2.lineWidth = 2;
ctx2.strokeRect(0,0,1000,1000)
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
//so to have dynamic lines, I need to start and end the lines at (1000/size)/2
console.log(boardArray);
    function drawCanvas(size) {
            function drawGrid(size) {
                let calculatedNumber = 1000/size;
                //draws the grid
                function drawHorizontal(size) {
                let currentY = (1000/size)/2;
                const snapShotY = (1000/size)/2;
                console.log(snapShotY);
                for (i=0; i<size; i++) {
                    ctx.beginPath(); //starts at 100
                    //start point
                    ctx.moveTo(0+snapShotY, currentY);
                    //end point
                    ctx.lineTo(1000-snapShotY, currentY);
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    currentY += calculatedNumber;
                }}
                function drawVertical(size) {
                let currentX = (1000/size)/2;
                const snapShotX = (1000/size)/2;
                for (i=0; i<size; i++) {
                    ctx.beginPath(); //starts at 100
                    //start point
                    ctx.moveTo(currentX, 0+snapShotX);
                    //end point
                    ctx.lineTo(currentX, 1000-snapShotX);
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    currentX += calculatedNumber;
                }}
                drawHorizontal(size);
                drawVertical(size);
            }
        function addStarPoints(size) {
            const star = 1000/size;
            function makeStarPoint(x,y) {
            ctx.beginPath();
            ctx.arc(x,y, 5, 0, 2*Math.PI);
            ctx.fillStyle = 'black';
            ctx.fill();
            ctx.lineWidth = 5 * (size/100);
            ctx.stroke();}
            makeStarPoint(500,500);
            if (size === 9) {
                makeStarPoint(star*2.5, star*2.5);
                makeStarPoint(star*2.5, star*6.5);
                makeStarPoint(star*6.5, star*2.5);
                makeStarPoint(star*6.5, star*6.5);
            } else if (size === 19) {
                makeStarPoint(star*3.5, star*3.5);
                makeStarPoint(star*3.5, star*15.5);
                makeStarPoint(star*3.5, star*9.5);
                makeStarPoint(star*9.5, star*3.5);
                makeStarPoint(star*15.5, star*3.5);
                makeStarPoint(star*15.5, star*9.5);
                makeStarPoint(star*9.5, star*15.5);
                makeStarPoint(star*15.5, star*15.5);

            } else {
                console.log("board size not supported (yet)");
            }
        }

        function addBorder(size) {

        }
        drawGrid(size);
        addStarPoints(size);
    }
   
    drawCanvas(n);
}
makeDivGrid(9);



const nodeList = document.querySelectorAll('.square');
const divList = Array.from(nodeList);
console.log(divList); 
