const cardColors = ['red','red', 'blue','blue', 'yellow', 'yellow', 'green', 'green', 'brown', 'brown','gray', 'gray','lightgreen', 'lightgreen', 'cadetblue', 'cadetblue','violet','violet'];

cardColors.sort(() => Math.random() - 0.5);
const divItems = [...document.getElementsByTagName('div')];
// console.log(divItems);
// divItems[1].className='red';
function showAllCards(){
    for(i=0; i<divItems.length; i++){
        divItems[i].className=cardColors[i]; 
    }
}

function hideAllCards(){
    for(i=0; i<divItems.length;i++){
        if(divItems[i].className !='off') divItems[i].className='hidden';
    }
}

// let start;

// function startTimer(){
//     // console.log (start);
//     start = Math.floor(Date.now()/1000);
//     let timeCount = setTimeout(startTimer, 1000);
// }

// function stopTimer(){
//     let stop = Math.floor(Date.now()/1000);
//     let timeOfGame = stop - start;
// }

let visibleCards = 0;
let cardToBeComparedWith;

const showCard =(e) =>{
    if((typeof cardToBeComparedWith==='undefined') || (cardToBeComparedWith.dataset.key!=e.target.dataset.key && e.target.className !='off')){
        visibleCards++;
        console.log(e.target.dataset.key);
        if(visibleCards<=2) e.target.className=cardColors[e.target.dataset.key];
        if(visibleCards==1) cardToBeComparedWith=e.target;
        if(visibleCards==2){
            setTimeout(twoSecondTimer, 1000);
            if(cardToBeComparedWith.className==e.target.className){
                console.log('takie same');
                cardToBeComparedWith.className = 'off';
                e.target.className='off';
            } 
            else{
                console.log('nie takie same');
            }
        }
    }
}

const twoSecondTimer = function(){
    hideAllCards();
    visibleCards=0;
}

//muszę mieć więcej czynności wykonywanych na onload - poprawić
showAllCards();
setTimeout(hideAllCards, 2000);


// document.addEventListener(onload, startTimer());

const myCard = document.querySelectorAll('div').forEach(item=> item.addEventListener('click', showCard));






