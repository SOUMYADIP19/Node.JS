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

// let penprice = 10;
// let pencileprice = 5 ;
// // let output = "the total price is : " + (penprice + pencileprice) + " Rupees.";
// let output = `The total price is : ${penprice} Rupees. `;
// console.log(output);

// Operators in JS

// 1- Arithmetic (+,-,*,/,%,**)
// 2- Unary (++,--)
// 3- Assingment (=,+=,-=,*=,/=,%= etc.)
// 4- Comparison
// 5- Logical


// Arithmetic Operators

// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

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
// comparison operators to compare 2 values
// > Greater than
// >= greater than equal to
// < lesser than
// <= lesser than equal to
// == equal to
// != not equal to

// let age = 18;
// console.log(age > 18);

// comparison for non-numbers

// Conditional Statements
// if-else, nested if-else, switch

 // if statement
 // some code before if

 // if(some condition){
 
// DO SOMETHING

//  }

// some code after if

// console.log("before my if statement");
// let age = 25;
// if (age>=18) {
    
//     console.log("you can drive");
// }
// if (age<18){
//     console.log("you cannot drive");
// }
// console.log("after my if statement");
// if (age>20){
//     console.log("you are in your 20s");
// }

// let firstName = "soumya";
// if (firstName == "soumya"){
//     console.log(`Welcome ${firstName}`);
// }
// practice question
// create a traffic light system that shows what to do based on color

// let color ="red";

// // traffic light system
// if (color ==="red"){
//     console.log("Stop! light color is red");
// }
// if (color ==="yellow"){
//     console.log("Slow down. light color is yellow");
// }
// if (color ==="green"){
//     console.log("Go. light color is green");
// }

// let age =16;
// if (age >= 18){
//     console.log("you can vote");
// } else if (age <18){
//     console.log("you cannot vote");
// }


// let marks = 89;

// if (marks >=80){
//     console.log("A+");
// }
// else if (marks >= 60){
//     console.log("A");
// }
// else if (marks >= 33){
//     console.log("B");
// }
// else if (marks < 33){
//     console.log("F");
// }

// practice question - 2
// create a system to calculate popcorn prices based on the size customer asked for :

// let price = 250;

// if (price ===250){
//     console.log("Size is XL");
// } else if (price === 200){
//     console.log("Size is L");
// } else if (price === 100){
//     console.log("Size is M");
// } else if (price === 50){
//     console.log("Size is S");
// }

// Nested if-else
// Nesting is writing if-else inside if-else statements. It can have many levels.

let marks = 92;

if (marks>=33){
    console.log("Pass");
    if (marks >= 80){
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
} else{
    console.log("Better luck next time");
}