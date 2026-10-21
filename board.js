//This .js file makes the gameboard
//plan to export the gameboard array for use in gameFlow.js

//-----
/** How to add a gameboard that resizes?
 * make the code robust enough that it is not dependent on board size and can resize
 * for now the board will be 5x5 for simplicity, with planned support for 7x7 and 9x9 later.
 * Make a loop that adds 25 squares to the boardContainer div, then use css to make them into a grid
 */

const squareContainer = document.querySelector(".squareContainer");
const boardCanvas = document.querySelector(".boardCanvas");
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
