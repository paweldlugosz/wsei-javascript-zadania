// Zadanie 1
function getNumber(value, array) {
    return array ? array.indexOf(value) != -1 : false;
}

console.log(getNumber(2, [33, 54, 2, 1, 4, 100])); // true
console.log(getNumber(5, [33, 54, 2, 1, 4, 100])); // false


// Zadanie 2
function createIdentityMatrix(rows, columns) {
    let matrix = new Array(rows);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(columns);
    }
    let columnWith1 = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = j == columnWith1 ? 1 : 0;
        }
        columnWith1++;
    }
    return matrix;
}

console.log(createIdentityMatrix(4,4));


// Zadanie 3
function sortPlanet(planets) {
    return planets.sort((a, b) => b.numberOfMoons - a.numberOfMoons);
}

var planets = [
    {
        name: "Merkury",
        numberOfMoons: 0
    },
    {
        name: "Wenus",
        numberOfMoons: 0
    },
    {
        name: "Ziemia",
        numberOfMoons: 1
    },
    {
        name: "Mars",
        numberOfMoons: 2
    },
    {
        name: "Jowisz",
        numberOfMoons: 63
    },
    {
        name: "Saturn",
        numberOfMoons: 60
    },
    {
        name: "Uran",
        numberOfMoons: 27
    },
    {
        name: "Neptun",
        numberOfMoons: 13
    }
];

console.log(sortPlanet(planets));

// DODATKOWE

// Zadanie 1 - dodatkowe
function addTheSameNumbers(value, array) {
    if (array == null) return null;
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) count++;
    }
    if (count == 0) return null;
    else return count * value;
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));   // 14
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100])); // 9
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));    // 0
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));   // null


// Zadanie 2 - dodatkowe
function factors(number) {
    let array = [];
    if (number <= 0 ) return array;
    for (let i = number; i > 0; i--) {
        if (number % i == 0) array.push(i);
    }
    return array;
}

console.log(factors(2));  // [2, 1]
console.log(factors(54)); // [54, 27, 18, 9, 6, 3, 2, 1]
console.log(factors(-4)); // []


// Zadanie 3 - dodatkowe
function getMissingElement(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] - array[i] > 1) return array[i] + 1
    }
    return null;
}

console.log(getMissingElement([1,2,3,4,5,6,7]));           // null
console.log(getMissingElement([6,7,8,10,11,12,13,14,15])); // 9
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));      // -1


// Zadanie 4 - dodatkowe
function getLastNumbers(value, array) {
    return value && Number.isInteger(value) && value > 0 ? array.slice(-value) : [];
}

console.log(getLastNumbers(2, [1,2,3,4,5,6,7]));           // [6, 7]
console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15])); // [12, 13, 14, 15]
console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4]));         // []
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]));  // []