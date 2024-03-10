// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Faccio generare all'utente un numero random
// Associo il bottone alla creazione del numero
const randomBtn = document.querySelector('#random-btn');

randomBtn.addEventListener('click', function(){
    const randomNumberUser = (Math.floor(Math.random() * 6) + 1);
    // Faccio generare al computer un numero random
    const randomNumberComputer = (Math.floor(Math.random() * 6) + 1);

    // Logica dell'applicazione e stampo del risultato sulla pagina
    if (randomNumberComputer > randomNumberUser){
        alert('Il tuo numero è ' + randomNumberUser + '. Il computer ha generato ' + randomNumberComputer + ', hai perso')
    } else if (randomNumberComputer < randomNumberUser) {
        alert('Il tuo numero è ' + randomNumberUser + '. Il computer ha generato ' + randomNumberComputer + ', hai vinto')
    } else {
        alert('Il tuo numero è ' + randomNumberUser + '. Il computer ha generato ' + randomNumberComputer + ', è un pareggio')
    }
});