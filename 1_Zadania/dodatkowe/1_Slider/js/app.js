document.addEventListener('DOMContentLoaded', function() {
    console.log('Działa');
    let prevPicture = document.getElementById('prevPicture');
    let nextPicture = document.getElementById('nextPicture');
    let listElements = document.querySelectorAll('.slider li');
    let index = 0;
    console.log(prevPicture);
    console.log(nextPicture);
    console.log(listElements);
    listElements[index].classList.add('visible');

    prevPicture.addEventListener('click', function() {
        console.log('click prev');
        listElements[index].classList.remove('visible');
        if (index <= 0) index = listElements.length - 1;
        else index--;
        listElements[index].classList.add('visible');
    });

    nextPicture.addEventListener('click', function() {
        console.log('click next');
        listElements[index].classList.remove('visible');
        if (index >= listElements.length - 1) index = 0;
        else index++;
        listElements[index].classList.add('visible');
    });

});

