// Q1 Write a program to display alert with your name and class on next line.(use line break)

// alert('Binish Farooq \nWeb and app batch 10')

// QUESTION 2
// Declare a variable birthYear and assign your birthyear in this variable and alert the type of the variable like this 'type of birth year is number'
// var birthYear = 1989
// console.log("type of birth year is " , typeof(birthYear));

// QUESTION 4
// Write a program that returns your age in days. (take age as an input)
// var userInput = +prompt('Enter your age');
// var ageInDays = userInput*365
// alert(`Youe are ${ageInDays} days old`);

// QUESTION 5
// Create a program that takes a number as an input, increments the number
//  by +1 and returns the result. (take number as an input)
var uI = +prompt('Enter a number');
var incrNum = ++uI
console.log(incrNum)

// QUESTION 6
// Create a program that takes a number as an input, decrements the number
//  by -1 and returns the result.
// var uI = +prompt('Enter a number');
// uI--
// console.log(uI)

// QUESTION 7
// Create a function that takes a number and return square of a number

// Question  8
// check if the entered number is a positive or a negative integer

// var num = prompt('enter a number');
// if(num < 0){
//     console.log('The entered number is a negitive number')
// }else{
//     console.log('The eneterd number is positive no')
// }

// =====Question 9

// Assume we have 10 US dollars & 25 Saudi Riyals.
//  Write a script to  convert the total currency to Pakistani Rupees.
//  Perform all calculations in a single expression.
//  (Exchange rates : 1 US Dollar = 163 Pakistani Rupee and 1 Saudi Riyal = 43 Pakistani Rupee)

// var dollar = +prompt('Convert Dollar in to Rupees: Enter your amount');
// var dollarToPkr = dollar * 163
// var riyal = +prompt('Convert Riyal in to Rupees: Enter your amount');
// var riyalToPkr = riyal * 43

// var rupees = dollarToPkr + riyalToPkr
// console.log("🚀 ~ file: app.js:55 ~ rupees:", rupees)

// Question 10
// ## 10 What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;  // 1 - 0 + 1 + 1 // 3
// // console.log("🚀 ~ file: app.js:61 ~ result:", result)
// // Explain the output at each stage:
// --a; // 0  
// var stage1 = --a - --b; //  0 - 0 //0
// console.log("🚀 ~ file: app.js:65 ~ stage1:", stage1)

// var stage2 = --a - --b + ++b;
// console.log("🚀 ~ file: app.js:68 ~ stage2:", stage2)
// // 0  - 0 + 1 // -1
// //   --a - --b + ++b + b--;
//      0  - 1 + 1 + 1

// === Question 11
// var firstNum = +prompt('Enter your number');
// var secondNum = +prompt('Enter your number');
// var operation = prompt('Which number operation you want');

// if(operation == "+") {
//     console.log(firstNum + secondNum)
    
// }else if(operation == "-"){
//     console.log(firstNum - secondNum)
// }








