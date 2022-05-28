'use strict';
const buttonHello = document.querySelector('#submitHello');
const myName = document.querySelector('input[name="myname"]');
const printHello = document.querySelector('#hello');

const hello = function(e){
    e.preventDefault();
    const message = myName.value
    console.log(message);
    if(message !== "") printHello.textContent = "Hello " + message + "!"
}

buttonHello.addEventListener('click', hello);