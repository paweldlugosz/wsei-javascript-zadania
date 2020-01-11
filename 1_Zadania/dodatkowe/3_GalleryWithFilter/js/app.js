document.addEventListener('DOMContentLoaded', () => {
    console.log('Działa');

    let images = document.querySelectorAll('#gallery img');
    let show = document.getElementById('showButton');
    let hide = document.getElementById('hideButton');
    let input = document.getElementById('tagInput');

    console.log(images);
    console.log(show);
    console.log(hide);
    console.log(input);

    let callBack = (event) => {
        console.log('Działa - click');
        let valule = input.value;
        input.value = '';
        console.log(valule);

        for (let i = 0; i < images.length; i++) {
            let image = images[i];
            let attributes = image.getAttribute('data-tag').split(',');

            if (attributes.indexOf(valule) != -1) {
                console.log(attributes);
                if (event.target.id == 'showButton') {
                    image.classList.remove('invisible');
                } else {
                    image.classList.add('invisible');
                }
            }
        }
    };

    show.addEventListener('click', callBack);
    hide.addEventListener('click', callBack);
});