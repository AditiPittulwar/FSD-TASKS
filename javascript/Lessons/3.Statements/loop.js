//loop statemnets

//A looping statement is a programming instruction that repeats a block of code as long as a certain condition is true.

// There are five types of looping statement 
//1.while
//2.do while
//3.for
//4.for...in loop
//5.for...of loop

// While loop:- The while loop in JavaScript is used to repeat a block of code as long as a given condition is true.

// while syntax

// while(condition){
// statements
// update the condition)
// }

// example:-

// print even number from 1 t0 100 using while loop

//   let num = 1;
//   while (num <= 100) {
//     if (num % 2 == 0) {
//         console.log(num)
//      }
//      num++;
//  }

// // print odd number from 1 to 50 using while loop

// let number = 1;
//  while (number >= 50) {
//     if (number % 2 != 0) {
//         console.log(number)
//     }
//  }

 // factorials

// if a variable is involve in multiplication/division then initilize with 1
// if add/sub then 0

// let fact = 1;
// let number = 10;
// while (number > 0) {
//     fact = fact * number;
//     number--;
// }
// console.log("Factorial: " + fact);


// let num1 = 1;
// while (num1 <= 10) {
//     let fact = 1;
//     let i = 1;

//     while (i <= num1) {
//         fact *= i;
//         i++;
//     }

//     console.log("Factorial of " + num1 + " is: " + fact);
//     num++;
// }


// Sum Of digits of a number using while loop

// let num1 = 1402;
// let sum = 0;
// let digit = 0;

// while(num1 > 0){
//     digit = num1 % 10; // last digit
//     sum  = sum + digit; //add the digit to sum
//     num1 = parseInt(num1 / 10); // remove the last digit
// }
// console.log("Sum of digits: " + sum);


// Armstrong Number using while loop

// let start = 1;
// let end = 2000;
// while(start <= end){
//     let num2 = start;
//     let sum = 0;
//     let digit = 0;
//     while(num > 0){
//         digit = num2 % 10;
//         sum = sum + (digit * digit * digit); // for 3 digit armstrong number
//         num2 = parseInt(num / 10);
//     }
//     if(sum === start){
//         console.log(start + " is an Armstrong number");
//     }
//     start++;
// }


// do while loop

//A do...while loop in JavaScript is a type of loop that will always execute the code block at least once before checking the condition.

//Syntax

//do {
    // Code to be executed
//} while (condition);

//1. The loop executes at least once — even if the condition is false at the start.

//2. The condition is checked after the first execution.

//3. It's useful when you must run code at least once before checking.

//Example

// let count = 1;

// do {
//   console.log("Count is: " + count);
//     count++;
// } while (count <= 5);

// Output:
// Count : 1
// Count : 2
// Count : 3
// Count : 4
// Count : 5

// do{
//     // statement
//     // updation
// }while(condition);

//wap for do while loop

// let num0 = 10

//  while(num0 < 10){
//     console.log(num0)
//     num0++ 
// }

//  do{
//     console.log(num0)
//     num0++
//  }while(num0 < 10)



//  let choice = false

//  do {

//      let number = Number(window.prompt("enter number to check !"))
//      let orginal_number = number
//      let rev = 0
//      let digit = null

//      while (number != 0) {
//          digit = number % 10
//          rev = rev * 10 + digit
//          number = parseInt(number / 10)
//      }
//      if (orginal_number == rev) {
//          console.log(orginal_number + " is a palindrome !")
//      } else {
//          console.log(orginal_number + " is not a palindrome !")
//      }

//      choice = window.confirm("do you wish to continue !")

//  } while (choice)

//  console.log("programm completed !")



 //for loop

 // print even and odd number using for loop

 //even number

//  for(var i = 0; i<=100;i++)
// {
//     if (i % 2 ==0)
// {
//     document.write(i +"<br>")
// }
// }

// odd number

//     for(var i = 0; i<=100;i++)
// {
//     if (i % 2 !=0)
// {
//     document.write(i +"<br>")
// }
// }

// print a prime number
 

// for (let i = 2; i <= 100; i++){
//    let isPrime = true;
//    for (let j = 2; (j * j) <= i; j++) {
//       if(i % j == 0){
//          isPrime = false;
//          break;
//       }
//    }
//    if(isPrime){
//       console.log(i+" is Prime.");
//    }
// }

//Reverse program using for loop

// const x = "Aditi";
// let y = "";

// for (let i = x.length - 1; i>= 0; i--) {
//     y += x[i];
// };

// console.log(y);

//Factorial Of A number

// let p = 7;
// let f = 1;

// for ( i=1; i<=p; i++) {
     
//     f = f*i;

//     console.log(f);
// }

//sum of digits using for loop

// const num = 1402;
// let sum = 0;

// for( let i = 1; i<= num; i++) {

//     sum +=i;
// }

// console.log(sum);

//Armstrong number using for loop

// let count=0;
// for (let i = 1; i <= 1000; i++) {
//    let digit = 0;
//    let sum = 0;
   
//    for (let num = i; num > 0; num = parseInt(num / 10)) {
//       digit = num % 10;
//       sum = sum + (digit*digit*digit);
//    }
//    if(sum === i){
//       console.log(sum+" is Armstrong number.");
//       count++;
//    }
// }
// console.log(count);
