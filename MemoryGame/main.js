const cardColors = ['red','red', 'blue','blue', 'yellow', 'yellow', 'green', 'green', 'brown', 'brown','gray', 'gray','lightgreen', 'lightgreen', 'cadetblue', 'cadetblue','violet','violet'];

// Cards randomizer
function cardsRandomizer(){
    cardColors.sort(() => Math.random() - 0.5);
}

//Colors signup
function showAllCards(){
    for(i=0; i<divItems.length; i++){
        divItems[i].className=cardColors[i]; 
    }
}

// Hiding cards, when different colors
function hideAllCards(){
    for(i=0; i<divItems.length;i++){
        if(divItems[i].className !='off') divItems[i].className='hidden';
    }
}

// Starting the game timer
let start;
let timeOfGame;
function startTimer(){
    start = Math.floor(Date.now()/1000);
}

function stopTimer(){
    let stop = Math.floor(Date.now()/1000);
    timeOfGame = stop - start;
}

// Display cards onclick and comparing their colors
let visibleCards = 0;
let cardToBeComparedWith;

const showCard =(e) =>{
    if((typeof cardToBeComparedWith==='undefined') || (cardToBeComparedWith.dataset.key!=e.target.dataset.key && e.target.className !='off')){
        visibleCards++;
        if(visibleCards<=2) e.target.className=cardColors[e.target.dataset.key];
        if(visibleCards==1) cardToBeComparedWith=e.target;
        if(visibleCards==2){
            setTimeout(halfSecondTimer, 500);
            removingCards(e) 
        }
    }
}

//I hide a pair with the same color
const removingCards = function(e){ 
     if(cardToBeComparedWith.className==e.target.className){
        cardToBeComparedWith.className = 'off';
        e.target.className='off';
    } 
}

//Check if all colors are out of game. If so, end the game, show alert with time of the game.
const halfSecondTimer = function(){
    hideAllCards();
    visibleCards=0;
    let flag = 0;
    for(i=0; i<divItems.length; i++){
        if(divItems[i].className == 'off'){
            flag++;
        }
        if(divItems.length == flag){
            stopTimer();
            alert (`Gratulacje. Twój czas gry to ${timeOfGame} sekund!`);
            executeAfterLoading();
        }
    }
}

// Elements to be executed after page loaded

function executeAfterLoading(){
    cardsRandomizer();
    showAllCards();
    setTimeout(hideAllCards, 2000);
    startTimer();
}
// fix issues with getting divItems and assigning EventListener
const divItems = [...document.getElementsByTagName('div')];
divItems.forEach(item=> item.addEventListener('click', showCard));
document.addEventListener(onload, executeAfterLoading());







