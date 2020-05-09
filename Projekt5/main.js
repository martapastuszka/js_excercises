//Pobrać diva
//Ustawić listenera na mousedown i wywołać funkcję, która zmieni kolor diva na szary
// Jeżeli mousedown, to można przesuwać diva - czyli nowe zdarzenie mousemove -- IF?
//Jeżeli usunę mousedown to zablokuje ruch myszki i diva
//Zmieni kolor spowrotem na czarny.

const div = document.querySelector('div');
let divX = 250; 
let divY = 70;
div.style.left = `${divX}px`; //pozycja początkowa na osi X
div.style.top = `${divY}px`; //pozycja początkowa na osi Y

let drawActive = false; 
let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e)=>{
    div.style.backgroundColor='grey';
    drawActive = true; //można też zapisać drawActive = !drawActive

    insertDivX= e.offsetX; //offsetX i offsetY informują jak daleko od krawędzi elementu kliknęliśmy
    insertDivY = e.offsetY;
    console.log(insertDivX, insertDivY);
})

div.addEventListener('mousemove', (e)=>{
    if(drawActive){
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        div.style.left = `${divX}px`; 
        div.style.top = `${divY}px`; 
    }
})

div.addEventListener('mouseup', ()=>{
    div.style.backgroundColor='black';
    drawActive = false; //można też zapisać drawActive = !drawActive
})
