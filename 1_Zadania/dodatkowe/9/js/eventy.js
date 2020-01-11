let aList = document.querySelectorAll('a');
aList[0].addEventListener('click', (event) => {
    let parent = event.target.parentElement.querySelector('.content');
    parent.style.display = 'block';
});

aList[1].addEventListener('mouseover', (event) => {
    let parent = event.target.parentElement.querySelector('.content');
    parent.style.display = 'block';
});