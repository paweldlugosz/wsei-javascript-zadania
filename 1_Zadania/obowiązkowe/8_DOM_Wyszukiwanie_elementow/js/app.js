document.addEventListener("DOMContentLoaded", function () {
    // Zad 0
    let elemClass = document.getElementsByClassName('title')[0];

    function getDataAnimation(element) {
        let newVariable = element.getAttribute('data-animation');
        return newVariable;
    }

    console.log(getDataAnimation(elemClass));

    // Zad 1
    let el1 = document.getElementById('home');
    let el2 = document.querySelector('#home');
    let el3 = document.querySelector('li[data-direction]');
    let elClassBlock = document.querySelector('.block');

    // Zad 2

    let el4 = document.querySelector('nav li');
    let el5 = document.querySelector('div p');
    let el6 = document.querySelector('article div');
});
