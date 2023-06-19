console.clear();

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

const buttomDOM = document.getElementById('mygtukas');


if (buttomDOM === null) {
    console.log('Mygtuko nera!');
} else {
    console.log('Mygtukas rastas');

    const titleDOM = document.getElementById('antraste');
    console.log(titleDOM);

    if (titleDOM === null) {
        console.log('Nepavyko rasti antrastes');
    } else {
        console.log('Antraste egzistuoja!');

        titleDOM.textContent = 'Labas vakaras!';
    }
}