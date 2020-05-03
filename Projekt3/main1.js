// <!-- Projekt 3 - Zadanie 2 -
//  https://websamuraj.pl/examples/js/projekt3-zad2/
 
// - Stwórz rozwiązanie z pomocą dwóch funkcji w oparciu o strukturę w main.js Nie dodawaj nic więcej do zakresu globalnego.

// - funkcja init, która będzie uruchomiona po wczytaniu strony. Jej zadaniem jest:
// --- stworzyć dwa elementy
// <button>Dodaj 10 elementów listy</buttn>
// <ul></ul>
// --- dodaj je do body
// --- ustaw nasłuchiwanie na przycisk


// --- funkcja createLiElements, która będzie uruchamiana po kliknięciu przycisku stworzonego przez funkcję init. Jej zadanie to:
// --- tworzenie 10 elementów li i umieszczanie ich w elemencie ul
// --- kazdy z 10 elementów ma mieć swój indeks (order) pczy czym kolejne 10 elementów ma być konynuacją (czilu pierwszy klik mamy 1-10, kolejny 11-20 itd)
// --- każdy kolejny element li ma mieć font-size większy o 1px.

// - bez zmian w pliku html (nie dodajemy html-a i css-a). Cały kod piszemy w elemencie main.js

// -->


let size = 10;
let orderElement = 1;

const init = () => {
   const btn = document.createElement('button');
   btn.textContent='Stwórz listę';
   document.body.appendChild(btn);
   const ul = document.createElement('ul');
   document.body.appendChild(ul);
   btn.addEventListener('click', createLiElements);
   console.log("init");
}
const createLiElements = () => {
    const myUl = document.querySelector('ul');
    // let fontSize = 10; - tak wcześniej zrobiłam. Źle, ponieważ po wykonaniu się funkcji, fontSize znowu się resetował do 10px. Dlatego za każdym kliknięciem zaczynałam od fontSize 10px. Gdy zmienna globalna, to przechowuje ostatnią wartość.
    for(i=0; i<10; i++){
        const li = document.createElement('li');
        myUl.appendChild(li);
        li.textContent=`Element ${orderElement}`
        li.style.fontSize=`${size}px`
        size += 1;
        orderElement++;
    } 
}

init();
