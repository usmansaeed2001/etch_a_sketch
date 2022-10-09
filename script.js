
const container = document.querySelector('#container');
const num = parseInt(prompt('Please enter an even number: '));

let idv = 0;
for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.setAttribute('id', idv);
    container.appendChild(div);
    idv++;
}


document.getElementsByClassName('box').addEventListener("click", function() {
    let elemetn = document.getElementsByClassName('box');
    elemetn.classList.add('clicked');
});
