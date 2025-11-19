// do while loop

// do{
//     // statement
//     // updation
// }while(condition);


// do {

//     let number = Number(window.prompt("enter number to check !"))
//     let orginal_number = number
//     let rev = 0
//     let digit = null

//     while (number != 0) {
//         digit = number % 10
//         rev = rev * 10 + digit
//         number = parseInt(number / 10)
//     }
//     if (orginal_number == rev) {
//         console.log(orginal_number + " is a palindrome !")
//     } else {
//         console.log(orginal_number + " is not a palindrome !")
//     }

//     choice = window.confirm("do you wish to continue !")

// } while (choice)

// console.log("programm completed !")

// for loop

//defination:-In JavaScript, a for loop is used when you want to repeat a block of code a certain number of times.

//syntax:-
//for (initialization; condition; increment) {
    // Code to run each iteration
//}
 
//example:-

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }


//wap in js to write all even numbers from 0 to 1000

// for (let start = 0; start <= 1000; start++) {
//     if (start % 2 == 0) {
//         console.log(start)
//     }
// }

//wap print a even number

    for(var i = 0; i<=100;i++)
{
    if (i % 2 ==0)
{
    document.write(i +"<br>")
}
}

// odd number
    for(var i = 0; i<=100;i++)
{
    if (i % 2 !=0)
{
    document.write(i +"<br>")
}
}