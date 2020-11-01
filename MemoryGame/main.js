const cardColors = ['red','red', 'blue','blue', 'yellow', 'yellow', 'green', 'green', 'brown', 'brown','gray', 'gray','lightgreen', 'lightgreen', 'cadetblue', 'cadetblue','violet','violet'];

cardColors.sort(() => Math.random() - 0.5);
const divItems = [...document.getElementsByTagName('div')];
console.log(divItems);
// divItems[1].className='red';
function divColored(){
    for(i=0; i<divItems.length; i++){
        divItems[i].className=cardColors[i]; 
    }
}

function divHidden(){
    for(i=0; i<divItems.length;i++){
        divItems[i].className='hidden';
    }
}

divColored();
setTimeout(divHidden, 2000);





