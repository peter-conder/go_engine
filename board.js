//This .js file makes the gameboard
//plan to export the gameboard array for use in gameFlow.js

//-----
/** How to add a gameboard that resizes?
 * make the code robust enough that it is not dependent on board size and can resize
 * for now the board will be 5x5 for simplicity, with planned support for 7x7 and 9x9 later.
 * Make a loop that adds 25 squares to the boardContainer div, then use css to make them into a grid
 */

const squareContainer = document.querySelector(".squareContainer");
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
    }
    makeBoardGrid(5);
    console.log(boardArray);

//now that I have squares on my canvas element, I can choose where to go from here. Ideally the makeBoardGrid function would decide how large the board is and render it dynamically based on how large it is. What that means is that it would render all the square divs, the canvas lines and the board color all at once. This is probably the easiest way to go in the long run.
/** What to do in which order? ((PSEUDOCODE))
 * create divs according to board size
     * make sure that divs are spaced equally around the board
 *  render lines on the canvas
 */
//the canvas will have its color built in and will always remain the same size. Since the number of stones on the board can change dramatically, rendering the stones on the board will require them to have a size proportionate to the number of squares on the board.