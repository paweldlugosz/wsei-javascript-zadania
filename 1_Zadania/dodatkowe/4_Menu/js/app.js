document.addEventListener('DOMContentLoaded', () => {
    console.log('Działa');

    let mainMenuItems = document.querySelectorAll('div>ul>li');
    console.log(mainMenuItems);

    let mouseOver = (event) => {
        let children = event.target.children[0];
        if (children) {
            console.log('mouseOver');
            children.style.display = 'inline-block';
        }
    }

    let mouseOut = (event) => {
        let children = event.target.children[0];
        if (children) {
            console.log('mouseout');
            children.style.display = 'none';
        }
    }

    for (let i = 0; i < mainMenuItems.length; i++) {
        mainMenuItems[i].addEventListener('mouseover', mouseOver);
        mainMenuItems[i].addEventListener('mouseout', mouseOut);
    }
});