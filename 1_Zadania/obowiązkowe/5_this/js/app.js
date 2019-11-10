// Zadanie 0

const car = {
    brand: "aaaa",
    color: "red",
    numberOfKilometers: 0,

    printCarInfo: function() {
        return this.brand + " " + this.color + " " + this.numberOfKilometers;
    },

    drive: function(kilometers) {
        this.numberOfKilometers += kilometers;
    }
}


console.log(car.printCarInfo());
car.drive(20);
console.log(car.printCarInfo());


// Zadanie 1

car.list = [
    '2018:10:10',
    '2017:10:10',
    '2016:10:10'
];

car.appednDate = function(date) {
    this.list.push(date);
}

car.getList = function() {
    return this.list;
}

car.appednDate('2019:10:10');
console.log(car.getList());

// Zadanie 3

let stairs = {
    step: 0,
    up: function() {
        this.step++;
    },
    down: function() {
        this.step--;
    },
    printStep: function() {
        return this.step;
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep() // 2
