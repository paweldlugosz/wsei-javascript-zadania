// Zadanie 0

function distFromAvarage(tab) {
    let sum = 0;
    for (let x  of tab) {
        sum += x;
    }

    let y = sum / tab.length;

    let tab2 = [];

    for (let v of tab) {
        tab2.push(v - y);
    }

    return tab2;
}

distFromAvarage([1,2,3,4,5,6,7]);

// Zadanie 1

function myFavoriteFruits() {
    let tab = ["banan", "kiwi", "ananas"];
    console.log(tab[0]);
    console.log(tab[tab.length - 1]);
    for (let f of tab) {
        console.log(f);
    }
}

myFavoriteFruits();