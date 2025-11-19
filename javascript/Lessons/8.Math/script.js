
// Math in JS

//  Math is a built in class in js which has math properties and methods

//  In JavaScript, Math is a built-in object that has properties (constants) and methods (functions).
// Here are the common properties of Math you’ll often use:


// Common Math Properties (Constants)

// Property	Value (Approx.)	Description

// Math.PI	3.14159…	Ratio of a circle’s circumference to diameter
// Math.E	2.718…	Euler’s number (base of natural logarithms)
// Math.LN2	0.693…	Natural logarithm of 2
// Math.LN10	2.302…	Natural logarithm of 10
// Math.LOG2E	1.442…	Base-2 logarithm of E

// Math.LOG10E	0.434…	Base-10 logarithm of E
// Math.SQRT2	1.414…	Square root of 2
// Math.SQRT1_2	0.707…	Square root of 1/2

//  Example:
// console.log(Math.PI);       // 3.141592653589793
// console.log(Math.E);        // 2.718281828459045
// console.log(Math.SQRT2);    // 1.4142135623730951
// console.log(Math.LN10);     // 2.302585092994046


// comman methods of math 

// In JavaScript, the Math object has many methods (functions) for mathematical operations.
// Here are the most common Math methods you’ll use:

//  Common Math Methods


// Method	Description	Example	Output

// Math.round(x)	Rounds x to the nearest integer	Math.round(4.6)	5
// Math.floor(x)	Rounds x down to the nearest integer	Math.floor(4.9)	4
// Math.ceil(x)	Rounds x up to the nearest integer	Math.ceil(4.1)	5
// Math.trunc(x)	Removes the decimal part (keeps only integer part)	Math.trunc(4.7)	4
// Math.pow(x, y)	Returns x raised to the power y	Math.pow(2, 3)	8
// Math.sqrt(x)	Square root of x	Math.sqrt(16)	4
// Math.cbrt(x)	Cube root of x	Math.cbrt(27)	3
// Math.abs(x)	Absolute value of x	Math.abs(-10)	10
// Math.max(...values)	Returns the largest value	Math.max(3, 7, 2)	7
// Math.min(...values)	Returns the smallest value	Math.min(3, 7, 2)	2
// Math.random()	Returns a random number between 0 (inclusive) and 1 (exclusive)	Math.random()	e.g. 0.5382
// Math.sign(x)	Returns -1, 0, or 1 depending on sign of x	Math.sign(-5)	-1


//  Examples in Code

// console.log(Math.round(4.5));   // 5
// console.log(Math.floor(4.9));   // 4
// console.log(Math.ceil(4.1));    // 5
// console.log(Math.trunc(4.9));   // 4

// console.log(Math.pow(2, 4));    // 16
// console.log(Math.sqrt(25));     // 5
// console.log(Math.abs(-12));     // 12

// console.log(Math.max(10, 20, 5)); // 20
// console.log(Math.min(10, 20, 5)); // 5

// console.log(Math.random());     // e.g. 0.3274
