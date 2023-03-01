// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] – ages[0] is not allowed!

ages[ages.length-1] - ages[0];

// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages = [2, 3, 9, 23, 64, 2, 8, 28, 93];

ages.push(15);
ages[ages.length-1] - ages[0];

// 1c. Use a loop to iterate through the array and calculate the average age. 
let total = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    total = total + element;
}

let average = total/array.length;

// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, 
//‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// 2a. Use a loop to iterate through the array and calculate the average number of letters 
//per name. 
let totalNumberOfLetters = 0;
for (let index = 0; index < names.length; index++) {
    const element = names[index].length;
    totalNumberOfLetters = totalNumberOfLetters + element;
}
let avg = totalNumberOfLetters/names.length;

// 2b. Use a loop to iterate through the array again and concatenate all the names together, 
//separated by spaces.
let concated;
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    concated = concated + element + ' ';
}

// 3.  How do you access the last element of any array?
let lastElement = array[array.length - 1];



// 4.  How do you access the first element of any array?
let firstElement = array[0];


// 5.  Create a new array called nameLengths. Write a loop to iterate over the apreviously 
//created names array and add the length of each name to the nameLengths array.

// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let nameLengths = [];

for (let index = 0; index < names.length; index++) {
    const length = names[index].length;
   nameLengths.push(length);
}

// nameLengths = [3,5,3,5,4,3]

// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the 
//elements in the array. 
let sumNumbers = 0

for (let index = 0; index < nameLengths.length; index++) {
    const number = nameLengths[index];
    sumNumbers = sumNumbers + number;
}
//0
//0 = 0 + 3
//3 = 3 + 5;
//...

// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word 
//concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the 
//function to return ‘HelloHelloHello’).

function array(word, n){
    console.log(word.repeat(n));
  }


// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full 
//name.  The full name should be the first and the last name separated by a space.
let firstName = "Bailey";
let lastName = "Reisdorff";

function fullname(firstName, lastName){
    return firstName + " " + lastName;
}


// 9.  Write a function that takes an array of numbers and returns true if the sum of all the 
//numbers in the array is greater than 100.

let arrayNumbers = [1, 36, 4, 18];
let sum = 0;

function sumArray(sum) {
    for (let index = 0; index < arrayNumbers.length; index++) {
        sum += numbers[i]  
    }
    return (sum > 100)
}


// 10.  Write a function that takes an array of numbers and returns the average of all the 
//elements in the array.

let arrayOfNumbers = [45, 92, 17, 3, 64];


// 11.  Write a function that takes two arrays of numbers and returns true if the average of 
//the elements in the first array is greater than the average of the elements in the second array.
let array1 = [1,2,4,7,12]
let array2 = [3,5,6,11,9]

// let array1Total, array1Avg;
// let array2Total, array2Avg;

// For loop way of doing it
// for (let index = 0; index < array1.length; index++) {
//     array1Total += array1[index];
// }

// for (let index = 0; index < array2.length; index++) {
//     array2Total = array2[index];
// }

// array1Avg = array1Total/array1.length;
// array2Avg = array2Total/array2.length;

// if (array1Average > array2Average) {
//     return true;
// }

//if the average of array1 > avg of array2, return true
const array1Average = array1.reduce((prev, curr) => prev + curr, 0)/array1.length;
const array2Average = array2.reduce((prev, curr) => prev + curr, 0)/array2.length;

if (array1Average > array2Average) {
    return true;
}

// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number 
//moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } 

    return false;
}



// 13.  Create a function of your own that solves a problem. In comments, write what the function 
//does and why you created it.
function putOnCoat(needToLeaveHouse, TempFahrenheit) {
    if (needToLeaveHouse && TempFahrenheit < 32) {
        return true;
    } 

    return false;
}

// I am using the function to decide if I need to wear a coat when I need to leave the house.
// If I need to leave the house and the temperature is greater than 32 degrees, I do not need to wear a coat and it
//should return false. If the temperature is equal to or less than 32, then I will need a coat and it will return true.