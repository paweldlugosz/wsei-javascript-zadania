document.addEventListener('DOMContentLoaded', function () {
    let numbers = [5, 10, 12, 20, 100];
    let result = numbers.reduce(function (prev, curr, index, array) {
        return prev * curr;
    })
    console.log(result);

    // Zadanie 0
    let cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];
    let numberLetters = cities.map(city => city.length);
    console.log(numberLetters);

    // Zadanie 1
    randomize(20, 30, val => console.log(val));

    // Zadanie 2
    let animals = ["cat", "shrimp", "giraffe"];
    animals.forEach(animal => console.log(animal));

    // Zadanie 3
    let years = [1995, 1856, 2014, 1987];
    let currentYear = new Date().getFullYear();
    let peopleAge = years.map(year => currentYear - year);
    console.log(peopleAge);

    // Zadenie 4
    let numberArray = Array.from(Array(10).keys()).map((v) => ++v);
    console.log(numberArray)
    let sum = numberArray.reduce((prev, curr) => prev + curr);
    let product = numberArray.reduce((prev, curr) => prev * curr);
    console.log(sum);
    console.log(product);
    
});

function randomize(param1, param2, callback) {
    if (typeof callback === "function") callback(Math.random() * (param2 - param1) + param1);
    else throw new Error('This is not a function');
}