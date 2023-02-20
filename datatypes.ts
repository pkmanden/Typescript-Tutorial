// datatype string 
let lname: string;
lname = "Doe";

let newname: string = lname.toUpperCase();

console.log(newname);

//datatype number

let age: number;

age = 30;

let d = "20";

let result = parseInt(d);

//datatype boolean
let isValid: boolean = true;

console.log(isValid);

// array
let empList: string[];
empList = ["a", "b", "c"];

let numList: Array<number>;
numList = [1, 2, 3, 4];

let newResult = numList.filter((num) => num > 2);
console.log(newResult);

let num = numList.find((num) => num === 2);
console.log(num);

let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);

// enum
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

// tuples
let swapNums: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNums = swapNumbers(10, 20);
console.log(swapNums);

swapNums[0];
swapNums[1];

// any
let department: any;
// let department;

department = "IT";
department = 20;





