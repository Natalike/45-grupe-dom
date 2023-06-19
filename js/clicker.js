console.clear();

const formDOM = document.querySelector('form');
const minusDOM = document.querySelector('button')[0];;
const numberDOM = document.querySelector('div')[0];
const plusDOM = document.querySelector('button:last-child')[1];

let counter = 0;

plusDOM.addEventListener('click', (event) => {
    event.prevetDefault();
    numberDOM.textContent = ++counter;

});

minusDOM.addEventListener('click', (event) => {
    event.prevetDefault();
    numberDOM.textContent = --counter;

});