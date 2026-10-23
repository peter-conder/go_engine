//This .js file makes the gameboard
//plan to export the gameboard array for use in gameFlow.js

//-----
/** How to add a gameboard that resizes?
 * make the code robust enough that it is not dependent on board size and can resize
 * for now the board will be 5x5 for simplicity, with planned support for 7x7 and 9x9 later.
 * Make a loop that adds 25 squares to the boardContainer div, then use css to make them into a grid
 */

const squareContainer = document.querySelector(".squareContainer");

//=====Canvas logic====
const canvas = document.querySelector(".boardCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#d6bd90";
ctx.fillRect(0, 0, 1000, 1000);
//const boardSquares = document.querySelectorAll(".square");
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
}
    makeBoardGrid(5);
    console.log(boardArray);

/** Drawing Canvas Lines
 * board has n-2 lines, both ways.
 * new function, for loop that draws n-2 lines equally spaced on the x and y axes
     * to draw a line, you use 4 arguments:
     * beginPath() -- nothing needed
     * moveTo(x,y) -- line start
     * lineTo(x,y) -- line end
     * Stroke() -- nothing needed
 * The math only needs to happen at x and y.
 * Math also needs to make a (n-2)^2 grid.
 * We can't space the lines equally with a simple 100/(n-2), because that would space the lines further apart than is necessary. I can reuse calculatedSpacing though, because this divides 100 by n, giving me a percent, and this is perfect. I don't even need to do n-2 actually, b/c I can just render all the lines, which will be perfect. So that solves the spacing issue. Just add calculatedNumber to the x and y coordinates after you render each line.
 */