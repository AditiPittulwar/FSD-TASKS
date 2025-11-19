// Liner Search Algorithm

// Linear Search is the simplest searching algorithm.
// It checks each element one by one in the array until:

// The target element is found 

// Or the whole array is checked

// Time Complexity: O(n) (worst case)

// Space Complexity: O(1)

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i; // return index of target
//         }
//     }
//     return -1; // not found
// }

// // Example usage:
// let numbers = [10, 25, 30, 45, 50];
// let searchValue = 30;

// let result = linearSearch(numbers, searchValue);

// if (result !== -1) {
//     console.log(`Element found at index ${result}`);
// } else {
//     console.log("Element not found");
// }


function linearSearch(arr, searchValue) {

    let steps = 0

    for (let index = 0; index < arr.length; index++) {
        steps++
        if (arr[index] === searchValue) {
            return `the element ${searchValue} found at position ${index + 1} in ${steps} steps !`
        }
    }
    return `the element ${searchValue} not found at any position in ${steps} steps !`
}

function binarySearch(arr, searchValue) {
    let ub = arr.length - 1
    let lb = 0
    let steps = 0
    while (lb <= ub) {
        steps++
        let midPoint = parseInt((ub + lb) / 2)
        if (arr[midPoint] === searchValue) {
            return `element ${searchValue} found at position ${midPoint + 1} in ${steps} steps`
        }
        if (arr[midPoint] < searchValue) {
            lb = midPoint + 1
        } else {
            ub = midPoint - 1
        }
    }
    return `the element ${searchValue} not found at any position in ${steps} steps !`
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let names = ["Aditi", "Sume", "Avanti"]

console.log(linearSearch(numbers, 1))
console.log(linearSearch(names, "Aditi"))

console.log(binarySearch(numbers, 2))
console.log(binarySearch(names, "Sume"))