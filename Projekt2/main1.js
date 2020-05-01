// 1. Utworzyć nowego diva, który będzie miał szerokość 100% strony i wysokość dowolną - np 20px
// 2. Dodać tego diva do strony
// 3. Nadać divovi styl, z określonym kolorem
// 4. Zwiększyć okno przeglądarki, aby była możliwość skrolowania strony
// 5. Dodać nasłuchiwanie na skrolowanie i wywołać funkcję
// 6. Ustalić, że w połowie okna przeglądarki div będzie zmieniał kolor (zmienić mu styl, background kolor
// 7. Div zwiększa swoje rozmiary do momentu, w którym dochodzi do połowy okna, potem zmienia kolor i się zmniejsza

const div = document.createElement('div');
let divHeight = 10;
div.style.position="fixed";
div.style.top=0;
div.style.left=0;
div.style.width="100%";
div.style.backgroundColor="red";
div.style.height = divHeight + "px";

document.body.appendChild(div);

let grow = true;

window.addEventListener('scroll', function(){
    if(divHeight >= window.innerHeight/2){
        grow = false;
    } 
    else if(divHeight <=0){
        grow = true;
    } 
    if(grow==true){
        divHeight += 5;
        div.style.backgroundColor='red';
    }
    else{
        divHeight -=5;
        div.style.backgroundColor='green';
    }
    div.style.height= divHeight + 'px';
})