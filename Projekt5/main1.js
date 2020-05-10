//strzałka w górę rozjaśnia tło do bieli, czyli do 255
//strzałka w dół przyciemnia tło do czerni, czyli do 0
//wartość początkowa tła - kolor szary
let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) =>{
    // console.log(e.keyCode, e.which);
    //38 - strzałka do góry,
    //40 - strzałka w dół,

    //wersja 1 - instrukcja if 

//     if(e.keyCode == 38 && blue<255-8){
//             blue +=8;
//             red = green = blue;
//             console.log(red,green,blue);
//             document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
//     }
//     else if(e.keyCode == 40 && blue>0+4){
//             blue -=8;
//             red = green = blue;
//             console.log(red,green,blue);
//         }
//         document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

 //wersja 2 - switch

 switch(e.keyCode){
    case 38: 
        document.body.style.backgroundColor = `rgb(${red<255 ? red++ : red},${green<255 ? green++ : green},${blue < 255 ? blue++ : blue})`;
        break;
    case 40: 
        document.body.style.backgroundColor = `rgb(${red>0 ? red-- : red},${green >0 ? green-- : green},${blue > 0 ? blue-- : blue})`;
        break;
 }
}
window.addEventListener('keydown', changeColor)
