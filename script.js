
const container = document.querySelector('#container');
let num = 1;

do {
    num = parseInt(prompt('Please enter an number(1-64): '));
} while (num < 1 || num > 64);


let width = Math.floor(400 / num);


let idv = 0;
for (let i = 0; i < num; i++) {
    const upperdiv = document.createElement('div');
    upperdiv.classList.add('row');
    upperdiv.style.height = width + 'px';
    for (let i = 0; i < num; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.style.width = width + 'px';
        div.style.height = width + 'px';
        div.setAttribute('id', idv);
        upperdiv.appendChild(div);
        idv++;
    }
    container.appendChild(upperdiv);
}
