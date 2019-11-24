// Wywoła się poprawnie ponieważ deklaracje funkcji się przenoszone na poczętek dokuementu
sayHi();

// sayWelcome is not defined - nie może być wywołana ponieważ nie była zdefiniowana wcześniej
sayWelcome();

sayWelcome = function() {
    console.log("Cześć");
}

function sayHi() {
    console.log("Witaj");
}