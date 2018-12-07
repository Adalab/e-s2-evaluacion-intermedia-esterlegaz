'use strict';

//variables
const input = document.querySelector('.main__input');
const counter = document.querySelector('.main__counter');
const hints = document.querySelector('.main__instructions');
const btn = document.querySelector('.main__btn');
const randomNumber = getRandomNumber(100);
let c = 0;

//generar número aleatorio y mostrarlo por consola
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }  
  console.log('El número aleatorio es ' + randomNumber);

counter.innerHTML = c;

//Al pulsar el botón, acceder al value del input y mostrarlo en consola.
function send(event){
    let inputContent = event.currentTarget;
    inputContent = input.value;
    console.log(inputContent);
}

//Comparar el número que el usuario ha escrito en el input y mostrarlo en consola
function compare(){
    let inputValue = parseInt(input.value);
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

//actualizar el contador de intentos
function all(){
    send(event);
    compare();
    c = c+1;
}

//pintar el feedback
btn.addEventListener('click', all);
