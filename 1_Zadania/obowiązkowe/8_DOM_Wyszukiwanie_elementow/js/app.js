document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

     // Zadanie 0
     let element = document.querySelector('.title');
     function getDataAnimation(element) {
         let variable = element.getAttribute('data-animation');
         return variable;
     }

     getDataAnimation(element);

     // Zadanie 1
     let home = document.querySelector('#home');
     console.log(home);
     let home2 = document.getElementById('#home');
     console.log(home2);
     let firstLi = document.querySelector('li[data-direction]');
     console.log(firstLi);
     let firstBlock = document.querySelector('.block');
     console.log(firstBlock);

     // Zadanie 2
     let liElements = document.querySelectorAll('nav li');
     console.log(liElements);
     let paragrafElements = document.querySelectorAll('div p');
     console.log(paragrafElements);
     let divElements = document.querySelectorAll('article div');
     console.log(divElements);

     // Zadanie 3
     let articleFirst = document.querySelector('article.first');
     console.log(articleFirst);
     let howManyElements = document.querySelectorAll('h1').length;
     console.log(howManyElements);

});
