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

    if(e.keyCode == 38){
        if(blue<255-8){
            blue +=8;
            red = green = blue;
            // console.log(red,green,blue);
        }
        else{red=green=blue=255;}

        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }


    

    // else if(e.keyCode == 40){
    //     console.log('strzałka w dół');
    //     for(red=255; red>=0; red-8){
    //         red = green = blue;
    //         document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;  
    //         console.log('strzałka w dół');
    //     }
    // }

   
}


 //wersja 2 - switch
window.addEventListener('keydown', changeColor)
