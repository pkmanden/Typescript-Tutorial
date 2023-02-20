// method 1 function definition
function add(num1: number, num2: number) {
    return num1 + num2;
}

// with optional parameter
function addOptional(num1: number, num2: number, num3?: number) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(addOptional(3, 4));
console.log(addOptional(3, 4, 5));

// method 2 function definition
const sub = (num1: number, num2: number): number => num1 - num2;
console.log(sub(3, 4));

const subReq = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3; // with required parameter
console.log(subReq(2, 3));
console.log(subReq(2, 3, 4));

// method 3 function definition
const mult = function (num1: number, num2: number): number {
    return num1 * num2;
}
console.log(mult(5, 6));

// rest parameters
function restAdd(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(restAdd(2, 3, ...numbers));
console.log(restAdd(2, 3, ...[3, 5, 7, 9]));
console.log(restAdd(2, 3, 3, 5, 7, 9, 10));

// Generic functions
function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
// let concatResult = getItems<number>([1,2,3,4,5]);
console.log(concatResult);

let concatString = getItems(["a", "b", "c", "d", "e"]);
// let concatString = getItems<string>(["a", "b", "c", "d", "e"]);
console.log(concatString);