function setDisplay(value) { 

    const display = document.querySelector("#result");
    const equals = document.querySelector("#equals");

    let x;
    let y;
    let result;
    let operator; 

    if (value == '/' || value == '*'|| value == '+' || value == '-') {
        operator = value;
        x = display.innerHTML;
        display.innerHTML = "";
    }
    else { 
        display.innerHTML += value;
    }

    equals.addEventListener('click', event => {
        y = display.innerHTML;
        result = eval(x + operator + y);
        console.log(result);
        display.innerHTML = parseInt(result);   
        x = "";
        y = "";
    })    

}

function clearDisplay() {

    const display = document.querySelector("#result");

    display.innerHTML = "";

}

function back() {
    
    const display = document.querySelector("#result").innerHTML;

    document.querySelector('#result').innerHTML = 
        display.substring(0, display.length -1);

}

function calc() {

    const display = document.querySelector("#result");

    if (display.innerHTML) {
        display.innerHTML = eval(display.innerHTML);
    }
    else {
        display.innerHTML = '0';
    }

}