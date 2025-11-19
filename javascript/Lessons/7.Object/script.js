// Object in js

// In JavaScript, an object is a collection of key–value pairs where:

// The keys (also called properties) are always strings (or symbols).

// The values can be any data type (number, string, boolean, array, function, another object, etc.).

// It’s one of the most important data types in JavaScript because objects are used to store structured data.


// let student = {
//     name: "Aditi Pittulwar",
//     phone: 8468953713,
//     address: "Nagpur",
//     subjects: ["English", "Java"]
// }
// console.log(student.name)
// console.log(student.phone)

//  Array of object

// An array of objects in JavaScript means you have a list (array) where each element is an object.
// This is very common when you deal with collections of data (like a list of students, products, tasks, etc.).

// Example: Array of Objects
// let students = [
//     { name: "Aditi", age: 20, isStudent: true },
//     { name: "Sumedh", age: 25, isStudent: false },
//     { name: "Priya", age: 35, isStudent: true }
// ];

// console.log(students[0].name);  // "Aditi"
// console.log(students[1].age);   // 24

// Looping through Array of Objects

// You can use loops like for, for...of, or forEach:

// students.forEach(function(student) {
//     console.log(student.name + " is " + student.age + " years old.");
// });


// Output:

// Aditi is 20 years old.
// Rahul is 25 years old.
// Priya is 35 years old.

// Adding a New Object to the Array

// students.push({ name: "Karan", age: 23, isStudent: true });
// console.log(students);

// Use Case Example: Products
// let products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Phone", price: 20000 },
//     { id: 3, name: "Tablet", price: 30000 }
// ];

// // Find product by name
// let phone = products.find(p => p.name === "Phone");
// console.log(phone); // { id: 2, name: "Phone", price: 20000 }


