const square = document.createElement('div');
document.body.appendChild(square);
let size = 100; //wielkość kwadratu
square.style.width = size + 'px';
square.style.height = size + 'px';

let grow = true; //flaga

//maksymalna wielkość kwadratu - 50% okna przeglądarki
//window.innerWidth*0.5

window.addEventListener("scroll", function(){
    if(size>= window.innerHeight/2){
        grow=false; //inny zapis: grow=!grow
    }
    else if(size<=0){
        grow=true; //tutaj też można zastosować ten zapis grow=!grow
    }
    if(grow==true){ //optymalny zapis if(grow) --> dlatego że if zawsze sprawdza true, nie trzeba tego powtarzać
        size += 5;
        square.style.width=size + 'px';
        square.style.height=size + 'px';
    }
    else{
        size -= 5;
        square.style.width=size + 'px';
        square.style.height=size + 'px';
    }
})