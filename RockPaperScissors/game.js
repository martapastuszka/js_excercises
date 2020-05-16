const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws:0,
}

const game = {
    playerHand: null,
    aiHand: null,
}

function handSelection(){
    game.playerHand = this.dataset.option;
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
}

// const handSelection = () =>{
//     //this - nie tworzy
//     console.log(e.target);
//     console.log(e.currentTarget);
// }

const hands = [...document.querySelectorAll('.select img')]; 
hands.forEach(img => 
    img.addEventListener('click', handSelection))