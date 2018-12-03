'use strict';
//generar número aleatorio y mostrarlo por consola
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }  
console.log('El número aleatorio es ' + getRandomNumber(100));

const randomNumber = getRandomNumber(100);

//variables
const input = document.querySelector('.main__input');
const counter = document.querySelector('.main__counter');
const hints = document.querySelector('.main__instructions');
const btn = document.querySelector('.main__btn');
let inputValue = parseInt(input.value);

//Al pulsar el botón, acceder al value del input y mostrarlo en consola.
function send(event){
    let inputContent = event.currentTarget;
    inputContent = input.value;
    console.log(inputContent);
}

btn.addEventListener('click', send);

//Comparar el número que el usuario ha escrito en el input y mostrarlo en consola

function compare(){
    console.log('>',randomNumber,inputValue);
    if(inputValue === randomNumber) {
        hints.innerHTML = '¡HAS GANADO, CAMPEONA!';
    }
    else if(inputValue < randomNumber) {
        hints.innerHTML = 'Demasiado bajo';
    }
    else {
        hints.innerHTML = 'Demasiado alto';  
    };
}

//pintar el feedback (pistas)
btn.addEventListener('click', compare);

//actualizar el contador de intentos


