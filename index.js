// PART 1: Fizz Buzz
console.log ("-------PART 1: Fizz Buzz Exercise-----------")
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

for (let n=1; n<=100 && n>0; n++){
    if (n%3===0 && n%5 ===0){
        console.log("Fizz Buzz")
    } else if (n%3===0 && n%5 !== 0){
        console.log("Fizz")
    } else if (n%3 !==0 && n%5 ===0){
        console.log("Buzz")
    } else {
        console.log(n)
    }
}

// Used for loop to iterate a specific number of times.

// PART 2: Prime Time
console.log("----------PART 2: PRIME TIME ---------")
// Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!

// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.

// PART 3: Feeling Loopy

// Create a loop that searches for the next prime number, starting at n and incrementing from there.

// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.

// Be careful! If you set n to a number too large, your loop could take a long time to process.

// THIS CODE WORKS #1:
// let n = 10
// let nextPrime = n++

// while (true){
//     let isPrime =true;

//     for (let i = 2; i<=nextPrime /2; i++ ){
//         if (nextPrime % i === 0){
//             isPrime = false;
//             break;
//     }
// } if (isPrime){
//     break;
// }
// nextPrime++;
// }

//  THIS CODE WORKS #2: 
// let n = parseInt(prompt("Enter a starting number:")); // Input for the starting number
// let nextPrime = n + 1; // Start checking from the next number

// while (true) {
//   let isPrime = true; // Assume the number is prime

//   // Check divisors from 2 up to one less than the current number
//   for (let i = 2; i < nextPrime; i++) {
//     if (nextPrime % i === 0) {
//       isPrime = false; // Not a prime number
//       break; // Exit the for loop early
//     }
//   }


//   if (isPrime) {
//     console.log("The next prime number after " + n + " is " +    nextPrime);
//     break; // Exit the while loop
//   }

//   nextPrime++; // Increment to check the next number
// }

// -------------- TRY TO FIGURE IT OUT ON YOUR OWN:
let num = 3;
let limit = 50;
let nextPrime = num+1

while(num<=limit){
    let isPrime = true
    for (let i=2; i<nextPrime; i++){
        // checks every number between 2 and 7
        if(nextPrime%i ===0){
            isPrime = false
            console.log(`Your ${nextPrime} is not prime`);
            break
        }
    }

    if (isPrime){
        console.log(`Your ${nextPrime} is prime`);
        break
    }
    num++
}


// PART 3: Feeling Loopy
console.log("----------PART 3: FEELING LOOPY ----------")

// As a final task, solve the following practical problem regarding string processing.
// Context: A CSV file, or “Comma-Separated Values” file is traditionally used to store tabular data. You may be familiar with CSVs through past use of programs such as Microsoft Excel or Google Sheets. While each of these programs save their data in different formats to preserve style (e.g., font color or cell backgrounds), at their core, they are storing CSV data.
// CSV data looks like this:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// Not very nice to look at. The “\n” is an escaped Line Feed, which indicates that the following data should begin on a new line, as follows:
// ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26
// As you may have guessed, these values being “comma-separated” means that each comma is also a delimiter. This is why this type of data is traditionally viewed in tables. Here is how the data looks once fully parsed:
// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.
// Use the example string provided above to test your program. Once you are confident it is working correctly, try the following string to see if your program works properly with other data.
// Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232

// imported the document like this
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// imported document #2 -- tested and works
// let csv= "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

let cell1= ""
let cell2= ""
let cell3= ""
let cell4= ""
let currentCell = 1

for (let i=0; i<=csv.length; i++){
    // this will log each letter individually on a different line
    // console.log(csv[i]);
    let char = csv[i];
    // console.log(char);
    if(char===","){
        currentCell++
        // i===csv.length is how we would say to 
    } else if (char==="\n" || i===csv.length){
        console.log(cell1,cell2,cell3, cell4);
        cell1=""
        cell2=""
        cell3=""
        cell4=""
        currentCell= 1
    } else {
        if(currentCell===1){
            cell1+=char;
        } else if (currentCell===2){
           cell2+=char;
        } else if (currentCell===3){
            cell3+=char;
         } else if (currentCell===4){
            cell4+=char;
         }
    }
}
console.log(cell1);
console.log(cell2);
console.log(cell3);
console.log(cell4);