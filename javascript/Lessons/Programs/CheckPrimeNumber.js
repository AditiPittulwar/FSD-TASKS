//Check whether the entered number is prime or Not

num = 45

let prime = true

let i = 2

while (i <= num / 2) {
    if (num % i === 0) {
        prime = false
    }
    i++;
}

if (prime) {
    console.log(num + " is a prime number");
}else {
    console.log(num + " is not a prime number");
}