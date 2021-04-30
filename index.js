const input = document.querySelector('.calculator-screen');
const buttons = Array.from(document.querySelectorAll('button'));


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        input.value += buttons[i].innerHTML;
    })

}


function Clear() {
    input.value = "";
}

function Calculate() {
    let ans = eval(input.value);

    input.value = ans;
}


document.getElementById('multi').addEventListener('click', function () {
    input.value += '*';
})



document.getElementById('divide').addEventListener('click', function () {
    input.value += '/'
})

function stepback() {
    let arr = Array.from(input.value);
    arr.pop();
    let str = arr.join('');

    input.value = str;
}









