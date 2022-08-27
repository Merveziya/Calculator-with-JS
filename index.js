let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");
let result = document.getElementById("result").innerHTML;

console.log(num1);
console.log(num2);

function add() {
  document.getElementById("result").innerHTML = `TOTAL:  = ${
    Number(num1.value) + Number(num2.value)
  }`;
}

function subtract() {
  document.getElementById("result").innerHTML = `TOTAL: = ${
    Number(num1.value) - Number(num2.value)
  }`;
}

function divide() {
  document.getElementById("result").innerHTML = `TOTAL: = ${
    Number(num1.value) / Number(num2.value)
  }`;
}

function multiply() {
  document.getElementById("result").innerHTML = `TOTAL:  = ${
    Number(num1.value) * Number(num2.value)
  }`;
}

function square() {
  document.getElementById("result").innerHTML = `  NUMBER 1 : ${
    Number(num1.value) * Number(num1.value)
  } and    NUMBER 2 : ${Number(num2.value) * Number(num2.value)} `;
}
function mod() {
  document.getElementById("result").innerHTML = `TOTAL: = ${
    Number(num1.value) % Number(num2.value)
  }`;
}
