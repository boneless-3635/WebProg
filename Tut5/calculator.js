function add() {
    let n1 = document.querySelector("#number1");
    let n1Number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2Number = n2.value;
    let result = document.querySelector("#result")
    result.value = Number(n1Number) + Number(n2Number)
}

function subtract () {
    let n1 = document.querySelector("#number1");
    let n1Number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2Number = n2.value;
    let result = document.querySelector("#result")
    result.value = Number(n1Number) - Number(n2Number)
}

function multiply() {
    let n1 = document.querySelector("#number1");
    let n1Number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2Number = n2.value;
    let result = document.querySelector("#result")
    result.value = Number(n1Number) * Number(n2Number)
}

function divide() {
    let n1 = document.querySelector("#number1");
    let n1Number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2Number = n2.value;
    let result = document.querySelector("#result")
    if (Number(n2Number) == 0)
    {
        alert("You can't divide by 0")
    } else {
        result.value = Number(n1Number) / Number(n2Number)
    }
    
}



function calc(operator) {
    let n1 = document.querySelector("#number1");
    let n1Number = n1.value;
    let n2 = document.querySelector("#number2");
    let n2Number = n2.value;
    let result = document.querySelector("#result")
    if (operator == '+') {
        result.value = Number(n1Number) + Number(n2Number)
    }
    else if (operator == '-') {
        result.value = Number(n1Number) - Number(n2Number)
    }
    else if (operator == '*') {
        result.value = Number(n1Number) * Number(n2Number)
    }
    else if (Number(n2Number) == 0)
    {
        alert("You can't divide by 0")
    } else {
        result.value = Number(n1Number) / Number(n2Number)
    }
}