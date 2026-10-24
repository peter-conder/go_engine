//This .js file makes the gameboard
//plan to export the gameboard array for use in gameFlow.js

//-----
/** How to add a gameboard that resizes?
 * make the code robust enough that it is not dependent on board size and can resize
 * for now the board will be 5x5 for simplicity, with planned support for 7x7 and 9x9 later.
 * Make a loop that adds 25 squares to the boardContainer div, then use css to make them into a grid
 */

const squareContainer = document.querySelector(".squareContainer");

const canvas = document.querySelector(".boardCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#d6bd90";
ctx.fillRect(0, 0, 1000, 1000);
let boardArray = [];

function makeBoardGrid(n) {     //n = desired board size (5 will output a 5x5 board, etc)
let t = 1;
for (i=0; i<n*n; i++) {

    let newSquare = document.createElement("div");
    newSquare.classList.add(`square`);
    squareContainer.appendChild(newSquare);
        //const textContent = document.createTextNode("square exist");
        //newSquare.appendChild(textContent);
    boardArray.push(newSquare); //maybe make a square info object and push that instead of the div
    t++;
        }
    let calculatedSpacing = 100/n;
    squareContainer.style.gridTemplateColumns=`repeat(${n}, ${calculatedSpacing}%)`;

    function makeLineGrid(gridSize) {
        let size = gridSize-2;
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
    /**
     * New problem! the lines aren't moving with the resizing and are also out of frame
     */
    makeLineGrid(n);
}
    makeBoardGrid(5);
    console.log(boardArray);



/**
 * What if I rendered a 4x4 grid instead? If I offset the grid, then the divs will fill the squares perfectly.
 * So we can render 4 lines as a square, this gets reused every time. Then we render a grid inbetween those lines that is (n-2)*(n-2), with evenly spaced lines.
 * Because the official sizes that I'm starting out with is 5x5, 9x9 and 17x17, the canvas will be 855 canvas pixels wide. 855/5 = 171, 855/9 = 95 and 855/19 = 45. This gives me round numbers for each official board size.
 */

/**
 * well now we have a new problem, that being that I actually don't want the canvas to be fully 1:1 with the grid of squares, but I actually want it to be slightly smaller so I can still play stones correctly.
 * The grid needs to actually start in the center of a corner square. So I need 
 */

/**
 * Having dynamic + automatic resizeability is going to be a pain in the butt. I think I need to figure out all the line spacing, then have a function that calculates the spacing for the grid and where it should go based on the grid size, with clean numbers resulting with a 5x5, 9x9 or 19x19.
 */

// this will also be a problem for having the boardArray and all the calculations that that requires. 