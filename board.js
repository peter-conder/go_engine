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
    boardArray.push(newSquare);
    t++;
        }
    function setStyles(boardSize) {
        let returnedNumber;
        function calculateNumber(boardSize) {
            //this will take boardsize and calculate the spacing between columns with it
            //divide 100 by 5, 13, 19
        returnedNumber = 100/boardSize;
            
        }
        calculateNumber(n);
        return squareContainer.style.gridTemplateColumns=`repeat(${n}, ${returnedNumber})`;
    //setStyles(n);
    }
    setStyles(n);
}

    makeBoardGrid(6);
    console.log(boardArray);

//this function works with 5, but not with any other number.
//rows aren't being modified, always staying at 5