//  Task 1: for Loop - Write a function printNumbers that takes an integer n as input and prints all the numbers from 1 to n using a for loop.

function printNumbers(a) {
 for (let i = 0; i <= a; i++) {
    console.log(i);
 } 
}
printNumbers (10)
// Task 2: for...of - Loop Write a function sumArray that takes an array of numbers as input and returns the sum of all elements using a for...of loop.


function sumArray() {
    const arr = [1, 2, 7, 9, 3];
    let sum = 0;
    for (const el of arr) {
    sum += el;
}

console.log(sum);

}
sumArray()

// Task 3: if...else Statement - Write a function isEven that takes an integer as input and returns true if it's even and false if it's odd using an if...else statement.

function isEven(a) {
    if (a==0, a % 2 == 0)
        console.log('true');
    else
        console.log('false');
    
}
isEven(2)

// Task 4: Conditional (Ternary) Operator - Write a function getSign that takes an integer num as input and returns 'positive', 'negative', or 'zero' based on its sign using the conditional (ternary) operator.

function getSign(a) {
    if (a < 0)
        console.log(`${a} is negative`);
    else if (a > 0)
        console.log(`${a} is positive`);
    else 
        console.log('Zero');
}
getSign(-67)
// Task 5: while Loop - Write a function reverseString that takes a string as input and returns its reverse using a while loop.
let arr = [1, 2, 3];
let x = arr.reverse()
console.log(x);


// Task 6: switch...case Statement -  Write a function dayOfWeek that takes an integer representing a day of the week (1 for Monday, 2 for Tuesday, etc.) and returns the corresponding day using a switch...case statement.


function dayOfWeek(day)  {
    if (day < 1 || day > 7)
        console.log(null);
    switch (day) {
            case 1:
            console.log('It is Sunday');
            break;
            case 2:
            console.log('It is Monday');
            break;
            case 3:
            console.log('It is Tuesday');
            break;
            case 4:
            console.log('It is Wednesday');
            break;
            case 5:
            console.log('It is Thrusday');
            break;
            case 6:
            console.log('It is Friday');
            break;
            case 7:
            console.log('It is Saturday');
            break;
    
    }
}
dayOfWeek(1)
 // Task 7: Function Context - Create an object calculator with properties x and y and methods add , subtract , multiply , and divide that perform arithmetic operations using the function context.

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

 // Task 8: Closure - Create a function makeCounter that returns a function counter which, when called, increments and returns a counter value.

 function makeCounter() {
    let count = 0;
    return function() {
        return count++
    }
 }
 makeCounter(23)
 alert(makeCounter());