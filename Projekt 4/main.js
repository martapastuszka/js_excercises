// do środka tej funkcji callback - w tym przypadku do funkcji przekazywany OBIEKT o domyślnej nazwie event. Ten obiekt zawiera różne parametry związane z naszym zdarzeniem.
// const h1 = document.querySelector('h1');
// document.body.addEventListener('mousemove', (event) => {
    // console.log(event.clientX, event.clientY); //clientX i clientY to dwie właściwości obiektu event. Te właściwości pokazują pozycję kursora względem okna przeglądarki. Gdy chcemy aby pokazywana była cała przeglądarka i żeby kursor mógł po niej jeździć, to należy zwrócić uwagę na CSS i właściwości body. Domyślnie body ma 8 px marginesów, wtedy trzeba te wartości wyzerować.
    // clientX - pokazuje pozycję od lewej strony przeglądarki, a nie początku dokumentu
    // pageX - od lewej części strony
    // screenX i screen Y - od początku ekranu
    // clientY - pokazuje pozycję od góry przeglądarki, a nie początku dokumentu
    // pageY - od począku przeglądarki!
//     h1.textContent = `${event.clientX}, ${event.clientY}`;

// document.body.style.backgroundColor = `rgb(${event.clientX / 3}, ${event.clientY / 2}, ${event.clientX/event.clientY * 20})`;
// })

//PROJEKT ZOPTYMALIZOWANY
// zależy nam aby kursor zmieniał kolory w obrębie 0-255 (0 - na początku przeglądarki, 255 na końcu)
const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) =>{
    const x = e.clientX +1; // ta jedynka nie jest obowiązkowa, bez niej też działa. RGB jest liczone od 0 - 254, dodajemy 1 gdy chcemy aby się wyświetlało 255
    const y = e.clientY + 1;
    h1.textContent = `${x}, ${y}`;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const red = x/width * 100;
    const green = y / height *100;
    const blue = ((x/width * 100) + (y/height *100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
})
