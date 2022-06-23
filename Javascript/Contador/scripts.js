/* var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
} */

let count = 0;

const valor = document.querySelector('#valor');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains("diminuir")){
            count--;   
        }
        else if (styles.contains ('somar')){
            count++;
        }
        else {
          count = 0;  
        }
        if(count > 0) {
            valor.style.color = 'green';
        }
        if(count < 0) {
            valor.style.color = 'red';
        }
        if(count == 0) {
            valor.style.color = 'black';
        }
        valor.textContent = count;
    });
});

