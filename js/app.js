// console.log("hello World!");
// console.log("Hello Java");
// let a = 10;
// let b = 5 ;
// console.log("sum is :", a + b );

// Template Literals 
// they are used to add embedded expressions in a string.
// let a = 5;
//let b = 10;
// console.log(`Your pay ${a + b} rupees`);
// console.log("price is", a+b,"rupees");

let penprice = 10;
let pencileprice = 5 ;
// let output = "the total price is : " + (penprice + pencileprice) + " Rupees.";
let output = `The total price is : ${penprice} Rupees. `;
console.log(output);

// Operators in JS

// 1- Arithmetic (+,-,*,/,%,**)
// 2- Unary (++,--)
// 3- Assingment (=,+=,-=,*=,/=,%= etc.)
// 4- Comparison
// 5- Logical


// Arithmetic Operators

let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Unary operators
// 1. Unary Plus (+)
// The unary plus operator tries to convert its operand into a number. If the operand is already a number, it remains unchanged.
// let num1 = "10";
// let num2 = +num1; // Converts the string "10" into the number 10
// console.log(num2); // 10
// If the operand can't be converted into a number, it will result in NaN.

// 2. Unary Negation (-)
// The unary minus operator negates (flips the sign of) its operand or converts it to a negative number.
// let num1 = "5";
// let num2 = -num1; // Converts 5 to -5
// console.log(num2); // -5
//3. Increment (++)
// The increment operator increases the value of a variable by 1. It can be used in two forms:

// Prefix (++x): Increments the value first and then returns it.
// Postfix (x++): Returns the value first and then increments it.
// let x = 5;
// console.log(++x); // 6 (increment first, then return)
// console.log(x++); // 6 (return first, then increment)
// console.log(x);   // 7 (final value of x)

// Assignment Operator (=,+=,-=,*=,/=,%= etc)

// Comparison Operator
