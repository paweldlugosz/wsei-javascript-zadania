// Zadanie 2

// 1
let menu = document.getElementById('menu');

function getDataInfo(element) {
    let liElements = element.querySelectorAll('li');
    let array = new Array(liElements.length);
    for (let i = 0; i < liElements.length; i++) {
        array[i] = liElements[i].getAttribute('data-info');
    }
    return array;
}

console.log(getDataInfo(menu));


// 2
let mainContener = document.getElementById('main-contener');

function getElementClass(element) {
    return element.classList;
}

console.log(getElementClass(mainContener));


// 3
let pinkColor = document.getElementsByClassName('pink-color');

function getElementText(element) {
    return element.innerHTML;
}

console.log(getElementText(pinkColor[0]));


// 4
let images = document.getElementsByClassName('images');

function getElementAlt(elements) {
    let array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].alt);
    }
    return array;
}

console.log(getElementAlt(images));


// 5
let myLink = document.getElementsByClassName('my-link');

function getElementHref(elements) {
    let array = [];
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].href);
    }
    return array;
}

console.log(getElementHref(myLink));


