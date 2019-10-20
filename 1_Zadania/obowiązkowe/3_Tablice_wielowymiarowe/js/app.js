
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];


var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];


// Zadanie 0

function checkArray(array) {
    let  result = [];
    for (let i = 0; i < array.length; i++) {
        let bool;
        for (let j = 0; j < array[i].length; j++) {
            if(array[i][j] % 2 === 0) {
                bool = true;
            } else {
                bool = false;
                break;
            }
        }
        result.push(bool);
    }
    return result;
}

console.log(checkArray(arr));


// Zadanie 1

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);


// Zadanie 2

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[0][i]);
}

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}

for (let i = 0; i < task2Array.length; i++) {
    for (let j = 0; j < task2Array[i].length; j++) {
        console.log(task2task2Array[i][j]);
    }
}


// Zadanie 3

function print2dArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
}

// Zadanie 4

let arr = [[1,2], [3,4], [5,6]];
print2dArray(arr);


// Zadanie 5

function create2DArray(rows, cols) {
    let array = [];
    let number = 1;
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < cols; j++) {
            array[i][j] = number++;
        }
    }
    return array;
}

create2DArray(4, 4);


