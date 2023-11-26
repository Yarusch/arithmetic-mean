let value1= parseFloat(prompt("Enter first value to take arithmetic mean"));

let value2= parseFloat(prompt("Enter second value to take arithmetic mean"));

let value3= parseFloat(prompt("Enter third value to take arithmetic mean"));

let am = (value1 + value2 + value3) / 3;
let roundedam = am.toFixed(2);

alert("Arithmetic Mean: " + roundedam);