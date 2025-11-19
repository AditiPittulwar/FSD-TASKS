

// wap to add two numbers

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

// addTwoNumbers(10,4)

// function addTwoNumbers(number1, number2){

//     let result = number1 + number2
//     return result
// }

// const result = addTwoNumbers(10,4)

// console.log("Result: ",result)


// wap to reverse a Number

// let number = "1234556790";

// function reverseNumber(num) {
//     let reversed = "";

//     for(let i = num.length-1; i >= 0; i--) {
//         reversed = reversed + num[i];
        
//     }
//     return reversed;
// }

// console.log(reverseNumber(number));



//wap to find factorial of a number

// let factorial = (num1) => {
//     let fact = 1;
//     for (let i = 1; i <= num1; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log("Factorial of given number is " + factorial(5));


// wap to check if a number is prime or not

// function isPrime(n) {
//     if (n==2){
//         console.log(`${n} is a prime number`)
//     }
//     let result;
//     for(let i=2; i<n ; i++){
//         if(n%2==0){
//             result = `${n} is not a prime number`
//             break;
//         }else{
//             result = `${n} is a prime number`
//         }
//     }
//     return result
// }

// let p= isPrime(9)
// console.log(p)



// Write a function to find the sum of digits of a number.

// function sumOfDigits(num) {
//     let sum = 0;
//     while (num > 0) {
//         sum += num % 10; 
//         num = Math.floor(num / 10); 
//     }
//     return sum;
// }

// console.log(sumOfDigits(1245687644)); 
// console.log(sumOfDigits(1402)); 



// write a function to check wether a number is armstrong number or not


// let isArmstrong = (num) => {
//     let digit = 0;
//     let sum = 0;
//     for (let i = num; i > 0; i = parseInt(i / 10)) {
//         digit = i % 10;
//         sum = sum + (digit * digit * digit);
//     }

//     if (sum === num) {
//         console.log(`${num} is Armstrong number`);
//     } else {
//         console.log(`${num} is not a Armstrong number`);
//     }
// }

// isArmstrong(500);

// wap to check wether a string is pallindrome or not

// function isPalindrome(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed = reversed + str.charAt(i);
//     }
//     if (str === reversed) {
//         console.log(str + " is a Palindrome.");
//     } else {
//         console.log(str + " is not a Palindrome.");
//     }
// }


// isPalindrome("pop");
// isPalindrome("racer");
// isPalindrome("chalo");
// isPalindrome("world");  



//wap in js to find out unique character within a string

// function findUniqueCharacters(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];


//         if (str.indexOf(char) === str.lastIndexOf(char)) {
//             result += char;
//         }
//     }

//     return result;
// }

// console.log(findUniqueCharacters("Hey Aditi programming here")); 
// console.log(findUniqueCharacters("hello"));      
// console.log(findUniqueCharacters("aabbcc"));      



// write a function in js to count the number in the string

// function countNumbersInString(str) {


//     let count = 0;

//     for (let i = 0; i < str.length; i++) {
//         if (!isNaN(str[i]) && str[i] !== " ") {
//             count++;
//         }
//     }

//     return count;
// }

// // Example usage
// console.log(countNumbersInString("hello123"));   
// console.log(countNumbersInString("abc2025xyza")); 
// console.log(countNumbersInString("no digits"));  