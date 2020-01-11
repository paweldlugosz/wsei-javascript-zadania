document.addEventListener('DOMContentLoaded', () => {
    console.log("Działa");

    let listElements = document.querySelectorAll('.gallery li img');
    let body = document.getElementsByTagName('body')[0];

    console.log(listElements);
    console.log(body);

    let clickEvent = function() {
        console.log('Działa');
        console.log(this.src);

        let div = document.createElement('div');
        div.id = "fullScreenImage"
        div.classList.add('fullScreen');

        let img = document.createElement('img');
        img.src = this.src;
        div.appendChild(img);

        let button = document.createElement('button');
        button.classList.add('close');
        button.innerText = 'Close';
        button.addEventListener('click', () => body.removeChild(div));
        div.appendChild(button);

        body.appendChild(div);
    }

    for (let i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener('click', clickEvent);
    }
});