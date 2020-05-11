const input = document.querySelector('#pass');
const div = document.querySelector('.message');
const passwords = ['user', 'wiosna', 'bez'];
const messages = ['wyjechałam na zawsze', 'piękna pora roku', 'mój ulubiony kwiat'];
input.addEventListener('input', (e) =>{
    // console.log(e.target.value);
    // console.log(this.value) - inny zapis powyższego - this. odwołuje się do obiektu, na którym wykonywana jest dana metoda/funkcja - w tym wypadku do input/e.target. ta metoda w tym wypadku zadziała na funkcji zadeklarowanej jako function(){} a nie na funkcji strzałkowej, bo strzałkowa nie ma swojego .this i odwołuje się do zakresu wyższego czyli w tym wypadku window. A window.value nie istnieje.

    const text = e.target.value;
    div.textContent = '';
    // console.log(text);
    //dla metody forEach pierwszy parametr (password) informuje o elemencie a drugi (index) o jego indeksie.
    passwords.forEach((password, index) =>{
        if(password === text){
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
  
})

input.addEventListener('focus', (e)=>{
    e.target.classList.add('active');
})

input.addEventListener('blur', (e)=>{
    e.target.classList.remove('active');
})

// if(password === e.target.value){
//     div.textContent = message;
//     e.target.value = '';
// }
// else div.textContent = '';