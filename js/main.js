//console.clear();

//paspaudus <button> elementa
//<h1> elemente pasikeistu tekstas

//1. Susirasti <button> elementa
//2. Jei <buttn> elemenntas YRA:
// - susirandame <h1> elementa
//  - jei <h1> elementas YRA:
//      - uzregistruojame ivikio stebejima:
//          - kai/jei vartotojas paspaus <button>
//          - <h1> elemente keiciam teksta
// - jei NERA:
// - nieko nedarom...
import { renderHeader } from './header.js';

renderHeader (true);


const buttomDOM = document.getElementById('mygtukas');
const titleDOM = document.getElementById('antraste');

function kaDaryti() {
    titleDOM.textContent = 'Labas vakaras!';
}

buttomDOM.addEventListener('click', kaDaryti);


