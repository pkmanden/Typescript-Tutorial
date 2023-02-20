"use strict";
// datatype string 
let lname;
lname = "Doe";
let newname = lname.toUpperCase();
console.log(newname);
//datatype number
let age;
age = 30;
let d = "20";
let result = parseInt(d);
//datatype boolean
let isValid = true;
console.log(isValid);
// array
let empList;
empList = ["a", "b", "c"];
let numList;
numList = [1, 2, 3, 4];
let newResult = numList.filter((num) => num > 2);
console.log(newResult);
let num = numList.find((num) => num === 2);
console.log(num);
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* Color.Blue */;
// tuples
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);
swapNums[0];
swapNums[1];
// any
let department;
// let department;
department = "IT";
department = 20;
