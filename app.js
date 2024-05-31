// Write a function printNumbers that takes an integer n as input and prints all the numbers from 1 to n using a for loop.

function printNumbers(a) {
    let x = 0;
    while (x < a) {
       x+=1
       console.log(x); 
    } 
}
printNumbers (10)
// Write a function sumArray that takes an array of numbers as input and returns the sum of all elements using a for...of loop.


function sumArray() {
    const arr = [1, 2, 7, 9, 3];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

}
sumArray()

// Write a function isEven that takes an integer as input and returns true if it's even and false if it's odd using an if...else statement.

function isEven(a) {
    if (a==0, a % 2 == 0)
        console.log('true');
    else
        console.log('false');
    
}
isEven(2)

// Write a function getSign that takes an integer num as input and returns 'positive', 'negative', or 'zero' based on its sign using the conditional (ternary) operator.

function getSign(a) {

}
getSign()

// Write a function dayOfWeek that takes an integer representing a day of the week (1 for Monday, 2 for Tuesday, etc.) and returns the corresponding day using a switch...case statement.


function dayOfWeek() {
    switch (new Date().getDay()) {
        case 0:
            day = 'Sunday';
        break;
        case 1:
            day = 'Monday';
        break;
        case 2:
            day = 'Tuesday'; 
        break;
        case 3:
            day = 'Wednesday';
        break;
        case 4:
            day = 'Thursday';
        break;
        case 5:
            day = 'Friday';
        break;
        case 6:
            day = 'Saturday';
        break;


}
}
dayOfWeek()
 // Create an object calculator with properties x and y and methods add , subtract , multiply , and divide that perform arithmetic operations using the function context.

 function divide(a, b) {
    return (a/b)
    
 }

 function multiply(a, b) {
    return (a*b)
    
 }
 function add(a, b) {
    return (a+b)
    
 }
 function subtract(a, b) {
    return (a-b)
    
 }
 divide()
 multiply()
 add()
 subtract()