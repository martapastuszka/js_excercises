const cardColors = ['red','red', 'blue','blue', 'yellow', 'yellow', 'green', 'green', 'brown', 'brown','gray', 'gray','lightgreen', 'lightgreen', 'cadetblue', 'cadetblue','violet','violet'];

cardColors.sort(() => Math.random() - 0.5);
const divItems = [...document.getElementsByTagName('div')];

//przypisuję divom kolory
function showAllCards(){
    for(i=0; i<divItems.length; i++){
        divItems[i].className=cardColors[i]; 
    }
}

// ukrywam karty, jeśli para ma różne kolory
function hideAllCards(){
    for(i=0; i<divItems.length;i++){
        if(divItems[i].className !='off') divItems[i].className='hidden';
    }
}

// włączam timer liczący czas gry
let start;
let timeOfGame;
function startTimer(){
    start = Math.floor(Date.now()/1000);
}

function stopTimer(){
    let stop = Math.floor(Date.now()/1000);
    timeOfGame = stop - start;
}

// odkrywam karty na kliknięcie i porównuję ich kolory
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

//ukrywam parę kard o tym samym kolorze. 
const removingCards = function(e){ 
     if(cardToBeComparedWith.className==e.target.className){
        cardToBeComparedWith.className = 'off';
        e.target.className='off';
    } 
}

// sprawdzam, czy wczystkie karty odkryte, jeżeli tak, kończę grę i wyświetlam czas gry
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

// elementy do wykonania po załadowaniu strony

function executeAfterLoading(){
    showAllCards();
    setTimeout(hideAllCards, 2000);
    startTimer();
    const myCard = document.querySelectorAll('div').forEach(item=> item.addEventListener('click', showCard));
}

document.addEventListener(onload, executeAfterLoading());







