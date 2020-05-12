// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
let div;
const passwords = ['jedEN', 'DwA', "trzy"];
const messages = ["super", "działa!", "długi kod"]

const showMessage = (e) => {
//pierwszy sposób
    // const text = e.target.value;
    // let passToUpperCase;
    // let textToUpperCase = text.toUpperCase();
    //    for(i=0; i<passwords.length; i++){
    //     passToUpperCase = passwords[i].toUpperCase();
    //     if(textToUpperCase === passToUpperCase){
    //         div = document.querySelector('div').innerHTML = messages[i];
    //         } 
    //     } 
    
    
//drugi sposób forEach()
    const text = e.target.value;
    let passwordsToUpperCase;
    let textToUpperCase = text.toUpperCase();

    passwords.forEach((password, index) =>{
        passwordsToUpperCase = password.toUpperCase();
        if(textToUpperCase === passwordsToUpperCase){
            div = document.querySelector('div').innerHTML = messages[index];
            } 
        })

}

input.addEventListener("input", showMessage)


