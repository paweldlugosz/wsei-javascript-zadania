const priceSpan = document.getElementById('price');
let sum = 0;
const checkboxList = document.querySelectorAll('input[type=checkbox]');

document.getElementsByTagName('button')[0].addEventListener('click', (event) => {
    document.getElementById('page-info').innerText = 'Do zapłaty: ' + sum.toFixed(2);
    event.preventDefault();
    return false;
});



for (let i = 1; i < checkboxList.length - 1; i++) {
    checkboxList[i].addEventListener('click', check);
}

checkboxList[0].addEventListener('click', addAll);
checkboxList[checkboxList.length - 1].addEventListener('click', clear);

function check(event) {
    let input = event.target;
    let price = parseFloat(input.getAttribute('data-price'));
    if (input.checked) {
        sum += price;
    } else {
        sum -= price;
        checkboxList[0].checked = false;
    }
    priceSpan.innerText = sum.toFixed(2) + ' zł';
}

function addAll() {
    sum = 0;
    checkboxList[0].checked = true;
    for (let i = 1; i < checkboxList.length - 1; i++) {
        const input = checkboxList[i];
        input.checked = true;
        let price = parseFloat(input.getAttribute('data-price'));
        sum += price;
    }
    priceSpan.innerText = sum.toFixed(2) + ' zł';
}

function clear() {
    sum = 0;
    priceSpan.innerText = '0 zł';
    for (let i = 0; i < checkboxList.length; i++) {
        checkboxList[i].checked = false;
    }
}