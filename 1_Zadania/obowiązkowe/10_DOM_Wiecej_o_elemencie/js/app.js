document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */


    // Zadanie 0

    const elements = document.querySelectorAll('.ex5 li');

    for (let i = 0; i < elements.length; i++) {
        if (i % 2 == 0) {
            elements[i].style.backgroundColor = 'green';
        }

        if (i % 3 == 0) {
         elements[i].style.textDecoration = 'underline';
        }
    }

    elements[4].className = 'big';

    // Zadanie 1

    let chrome = document.querySelector('.chrome');
    let edge = document.querySelector('.edge');
    let firefox = document.querySelector('.firefox');

    console.log(chrome);
    console.log(edge);
    console.log(firefox);

    edge.style.backgroundImage = 'url(./assets/img/edge.png)';
    firefox.style.backgroundImage = 'url(./assets/img/firefox.png)';

    
    // dokończyć.............



    // Zadanie 4
    


});