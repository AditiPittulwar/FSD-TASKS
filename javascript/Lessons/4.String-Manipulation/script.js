
//wap to get reverse of a string

// let str = "Aditi world";
// let revstr = "";

// for (let i=str.length-1; i>=0; i--){
//     revstr += str[i];
// }
// console.log(revstr);

// let string = 'Naveena';
// console.log(string.length);
// console.log('Naveena'[2]);
// console.log('Naveena'.charAt(5));
// console.log('Naveena'.toUpperCase());
// console.log('Naveena'.toLowerCase());
// console.log('Naveena'.slice(2,5));
// //Naveena
// //0123456
//        -1
//// a= -5 and 5  
// console.log('Naveena'.substring(-2,2)); //-ve-->0,2-->


// wap to count a specific character in a string

// const string1 = "This is my first Program in the javascript";
// const object = {};

// for (let a of string1) {

//     if(object[a]) {

//         object[a] +=1;    
//     }else {
//         object[a] = 1;
//     }
// }

// console.log(object);

//wap in js to find out unique character within a string /non-repeating char in string

// const S1 = 'Sanskrit';
// const count = {};
// const unique = [];

// count occurrence

// for (const char of S1) {
//     count[char] = (count[char] || 0) + 1;
// }

// unique character

// for (const char in count) {

//     if (count [char] === 1) 
//         unique.push(char) ;
// }
//  console.log(unique);

 // wap in js to print count of each charchter occurence

 const str = 'Hey Myself Aditi and I am learning Javascript'

 const object = {} 
 
 for (let x of str) {

    if(object[x]) {
        object[x] +=1;
    }else {
        object[x] = 1
    }
 }

 console.log(object);