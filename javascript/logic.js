//main game logic (turns, placing stones, calculating liberties and deaths, etc)
//loop over elements of DOM and assign eventlisteners, use those eventlisteners to modify boardArray, update() runs and updates the DOM to match
import { nodeList, divList, Player, Point, Stone, Group, boardArray, boardSize } from "./board.js";

let whoseTurn = 'black';
const passButton = document.querySelector('#passOption');
/** GAME LOOP
 * Pass or Play: determined by the pass button. if pass, then next player's turn.
 * Play: make the divList, add querySelectors to all divs that can identify which div has been clicked.
 */

//should I modify the array first then display everything? then go from there
//click > array > DOM, eventlistener at bottom would call updateDOM instead of placeStone

const logic = (()=>{


        const adjacent = (place, size)=> {
            let adjacentArray = [];
            let x = place % size;
            let y = Math.floor(place / size);
            let left = (x-1)+(size*y);
            if (left < 0) {
                    left = null;
                } 
                        adjacentArray.push(left);
            let right = (x+1)+(size*y);
            if (right > size*size-1) {
                    right = null;
                }
                        adjacentArray.push(right);
            let top = x+size*(y-1);
                if (top < 0) {
                    top = null;
                }
                        adjacentArray.push(top);
            let bottom = x+size*(y+1);
                if (bottom > size*size-1) {
                    bottom = null;
                }
                        adjacentArray.push(bottom);
            //i notation = single number
            //click > convert click to x,y > calculate adjacent cells in x,y > check if null > check if in same row/column > convert cells back to i > return all adjacent cells in i notation

        //need to add filter to make sure that liberties can only be on certain rows.
        //same row if x-coordinates match, same column if y-coordinates match.
            return adjacentArray;
        }

    //temporaryPlace: place stone on DOM
    const placeStone = (spot)=>{
        if(boardArray.at(spot).isOccupied===null){
        boardArray.at(spot).isOccupied =  new Stone(spot, null, whoseTurn, null);
            if (whoseTurn === 'black') {
            whoseTurn = 'white';
        } else if (whoseTurn === 'white') {
            whoseTurn = 'black';} 
        //logic.makeLiberties(spot, boardSize);
        //console.log(boardArray);
            }
        else {
            console.error("cannot place a stone here!!");
        }
    
    logic.updateDOM();

    }

    const updateDOM = () => {
        //loop over the boardArray and display stones + liberties
        boardArray.forEach(modifyDOM);
        function modifyDOM(element, index) {
        
            if (element.isOccupied !== null && element.isOccupied.isNew != "old") {
                //console.log(element.isOccupied.isNew);
                let stone = document.createElement('div');
                stone.classList.add('stone');
                //console.log(element.isOccupied.playerColor);
                {if (element.isOccupied.playerColor === 'black') {
                        stone.style.backgroundColor = '#161b1f'
                    } else if (element.isOccupied.playerColor === 'white') {
                        stone.style.backgroundColor = '#ede6df'
                    }}
                let space = divList.at(index);
                space.appendChild(stone);
                element.isOccupied.isNew = 'old';
                //console.log(element.libertyNew);
                //console.log(element.isOccupied.isNew);
                    //console.log(`stone spawned in at ${index}, color is ${element.isOccupied.playerColor}`);
            }            
            if (element.liberty !== null) {
                //console.log(`there is a liberty at ${index}`);
                let marker = document.createElement('div');
                marker.classList.add('marker');
                let libSpace = divList.at(index);
                libSpace.appendChild(marker);
                element.libertyNew = "old";
            } else {
                //return console.log('nothing happened')
            }
        };  
    }

    //ko: run ko check
    //checkSuicide: update liberties, check suicide
    //placeBoardArray: place stone in array
    //group: add to group (if applicable)
    //capture: run captures
    //updateDOM: update DOM according to the array

    //placeStone: place Stone on DOM
    return {placeStone, adjacent, updateDOM};
})()

//logic.placeStone(7);
//logic.placeStone(19);
console.log(boardArray);
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

    (() => {
       /**boardArray.at(3).isOccupied = new Stone(3,null,"black");
        boardArray.at(4).isOccupied = new Stone(3,null,"white");
        boardArray.at(17).isOccupied = new Stone(3,null,"black");
        boardArray.at(8).isOccupied = new Stone(3,null,"white");
        boardArray.at(8).liberty = 'liberty';**/

    })()

    //logic.updateDOM();
//the boardID of the object that is at the same index of boardArray as y.
