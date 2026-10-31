//main game logic (turns, placing stones, calculating liberties and deaths, etc)
//loop over elements of DOM and assign eventlisteners, use those eventlisteners to modify boardArray, update() runs and updates the DOM to match
import { nodeList, divList, Player, Point, Stone, Group, boardArray } from "./board.js";

let whoseTurn = 'black';
const passButton = document.querySelector('#passOption');
/** GAME LOOP
 * Pass or Play: determined by the pass button. if pass, then next player's turn.
 * Play: make the divList, add querySelectors to all divs that can identify which div has been clicked.
 */
console.log(boardArray);
console.log(divList);
//how to link nodelist to divList?
//when I click a square on the board, I need to be able to log the specific point.
//how do I know which point on the board I clicked?
for (let div of divList) {
    let divPoint=divList.indexOf(div);
    let idAtdivPoint = boardArray.at(divPoint).boardID;
    div.addEventListener("click", () => {
        console.log(idAtdivPoint)})
}

//the boardID of the object that is at the same index of boardArray as y.
