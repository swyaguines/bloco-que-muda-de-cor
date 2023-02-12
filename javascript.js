const container = document.querySelector('.container');
const color = document.querySelector('input');

const corPadrao = '#fff';
container.style.backgroundColor = `${corPadrao}`;

function onChangeBg() {
    container.style.backgroundColor = `${color.value}`;
    
}

