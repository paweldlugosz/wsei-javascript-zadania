/*
 <span class="tooltipText">Text tooltipa</span>
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Działa');

    let tooltips = document.querySelectorAll('.tooltip');
    console.log(tooltips);

    let span = document.createElement("span");
    span.classList.add('tooltipText');
    

    let mouseOver = (event) => {
        let text = event.target.getAttribute('data-text');
        console.log(text);
        span.innerText = text;
        event.target.appendChild(span);
    };

    let mouseOut = (event) => {
        console.log('out');
        event.target.removeChild(span);
    };


    for (let i = 0;  i < tooltips.length; i++) {
        tooltips[i].addEventListener('mouseover', mouseOver);
        tooltips[i].addEventListener('mouseout', mouseOut);
    }
});
