const display = document.getElementById('display')

function appendtodisplay(input){
    display.value += input;
}
function cleardisplay(){
    display.value = "";
}
function calculate(input){
    display.value = eval(display.value); 
}
document.querySelector('#toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('d');
});