"use strict";
// method 1 function definition
function add(num1, num2) {
    return num1 + num2;
}
// with optional parameter
function addOptional(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(addOptional(3, 4));
console.log(addOptional(3, 4, 5));
// method 2 function definition
const sub = (num1, num2) => num1 - num2;
console.log(sub(3, 4));
const subReq = (num1, num2, num3 = 10) => num1 - num2 - num3; // with required parameter
console.log(subReq(2, 3));
console.log(subReq(2, 3, 4));
// method 3 function definition
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(5, 6));
// rest parameters
function restAdd(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(restAdd(2, 3, ...numbers));
console.log(restAdd(2, 3, ...[3, 5, 7, 9]));
console.log(restAdd(2, 3, 3, 5, 7, 9, 10));
// Generic functions
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
// let concatResult = getItems<number>([1,2,3,4,5]);
console.log(concatResult);
let concatString = getItems(["a", "b", "c", "d", "e"]);
// let concatString = getItems<string>(["a", "b", "c", "d", "e"]);
console.log(concatString);
