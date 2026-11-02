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


        const makeLiberties = (place, size)=> {
        //making liberties is a tricky mathematical problem
        let left = boardArray.at(place-1).boardID;
        let right = boardArray.at(place+1).boardID;
        let top = boardArray.at(place-size).boardID;
        let bottom = boardArray.at(place+size).boardID;
        //console.log(left, right, top, bottom);
        let libertyArray = [];
        libertyArray.push(left, right, top, bottom);
        //libertyArray.forEach(checkBorders);
        //console.log(left, right, top, bottom);
        boardArray.at(left).liberty = 'liberty';
        boardArray.at(right).liberty = 'liberty';
        boardArray.at(top).liberty = 'liberty';
        boardArray.at(bottom).liberty = 'liberty';
        }

    //temporaryPlace: place stone on DOM
    const placeStone = (spot)=>{
        if(boardArray.at(spot).isOccupied===null){
        boardArray.at(spot).isOccupied =  new Stone(spot, null, whoseTurn, null);
            if (whoseTurn === 'black') {
            whoseTurn = 'white';
        } else if (whoseTurn === 'white') {
            whoseTurn = 'black';} 
        logic.makeLiberties(spot, boardSize);
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
    return {placeStone, makeLiberties, updateDOM};
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
