// Event listener na kliknięcie w body.
// Wywołanie funkcji, która sprawdza następujące parametry:
// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jedna z wartości jest parzysta a druga nieparzysta to kolor zielony

document.body.addEventListener('click', (e) =>{
    const X = e.clientX;
    const Y = e.clientY;
    const bodyEl=document.querySelector('body');
    if(X%2==0 && Y%2==0){
        console.log(X,Y);
        bodyEl.style.backgroundColor='red';
    }
    else if(X%2!=0 && Y%2!=0){
        console.log(X,Y);
        bodyEl.style.backgroundColor='blue';
    }
    else if(X%2==0 && Y%2!=0){
        console.log(X,Y);
        bodyEl.style.backgroundColor='green';
    }
    else{
     console.log(X,Y);
     bodyEl.style.backgroundColor='green';
    }
})