//main game logic (turns, placing stones, calculating liberties and deaths, etc)
//loop over elements of DOM and assign eventlisteners, use those eventlisteners to modify boardArray, update() runs and updates the DOM to match
import { nodeList, divList, Player, Point, Stone, Group, boardArray, boardSize } from "./board.js";

let whoseTurn = 'black';
const passButton = document.querySelector('#passOption');
/** GAME LOOP
 * Pass or Play: determined by the pass button. if pass, then next player's turn.
 * Play: make the divList, add querySelectors to all divs that can identify which div has been clicked.
 */

const logic = (()=>{
    //temporaryPlace: place stone on DOM
    const placeStone = (spot)=>{
        if(boardArray.at(spot).isOccupied===null){
        let stone = document.createElement('div');
        stone.classList.add('stone');
        if (whoseTurn === 'black') {
            stone.style.backgroundColor = '#161b1f';
        } else if (whoseTurn === 'white') {
            stone.style.backgroundColor = '##ede6df';
        }
        let space = divList.at(spot);
        space.appendChild(stone);
        boardArray.at(spot).isOccupied =  new Stone(spot, null);
        console.log(boardArray);}
        else {
            console.error("cannot place a stone here!!");
        }
    }
    //ko: run ko check
    //checkSuicide: update liberties, check suicide
    //placeBoardArray: place stone in array
    //group: add to group (if applicable)
    //capture: run captures
    //updateDOM: update DOM according to the array

    //placeStone: place Stone on DOM
    return {placeStone};
})()

//logic.placeStone(7);
//logic.placeStone(19);

//this for is a loop. that means it happens 25x, 361x, etc.

//how to link nodelist to divList?
//when I click a square on the board, I need to be able to log the specific point.
//how do I know which point on the board I clicked?
for (let div of divList) {
    let divPoint=divList.indexOf(div);
    let idAtdivPoint = boardArray.at(divPoint).boardID;
    //div.addEventListener("click", () => {
       // console.log(idAtdivPoint)})}

    div.addEventListener("click", () => {logic.placeStone(divPoint)})};


//the boardID of the object that is at the same index of boardArray as y.
