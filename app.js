//data types                             
let name = "Diego";
console.log ("Your name is: " + name);                                                         

//arethmetic
let age = 19;
console.log ("Your age is: " + age);


let x = 15;
let y = 16;
let sum = x + y;
console.log ("The sum is: " + sum);

//logical operators

let a = true;
let b = false;

console.log (a && !b);

//if else
if (age >= 18) {
    console.log("Guwang");
} else
    console.log("Linghud");


//switch

let score = 100;

let grade;

switch (true) {  
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
        break;
}

console.log("The grade is: " + grade);


//loops

for (let i = 5; i >= 1; i--) {
    console.log(i);
}
//while loop

let i2 = 1;

while (i2 <= 5) {
    console.log("The number is: " + i2);
    i2++; 
}

//do while
let i3 = 1;

do {
    console.log("count: " + i3);
    i3++; 
} while (i3 <= 5);

//nested for loop
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let rowString = '';
    for (let j = 1; j <= i; j++) {
        rowString += '* ';
    }
    console.log(rowString.trim()); 
}


//odd or even
let number = 11; 

if (number % 2 === 0) {
    console.log("The number " + number, "is even");
} else if (number % 2 !== 0) {
    console.log( "The number " + number,"is odd");
} 

//prime number
let number1 = 12; 

if (number1 % 2 === 1) {
    console.log(number1 + " is Prime Number");
} else  {
    console.log(number1 + " is not a Prime Number");
} 






 


