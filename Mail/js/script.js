// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creo un array di emails 
const emailList = ['matteo@gmail.com', 'mattia@gmail.com', 'franco@gmail.com', 'francesca@gmail.com', 'francesco@gmail.com', 'andrea@gmail.com', 'lorenzo@gmail.com', 'giorgia@gmail.com', 'chiara@gmail.com', 'federico@gmail.com'];
// Chiedo all'utente di inserire la propria email
const userEmail = prompt('Dimmi la tua email');

// Logica di applicazione 
// Confronto l'email inserita dall'utente con quelle presenti nell'array
let emailFound = false;
for (let i = 0; i < emailList.length; i++){
    const thisEmail = emailList[i];

    if(thisEmail === userEmail){
        emailFound = true;
    }
}

// Stampo un alert che mostra all'utente se l'email da lui inserita è presente o no nell'array
if (emailFound === true) {
    alert("L'email inserita è valida")
} else{
    alert("L'email inserita non è valida")
}