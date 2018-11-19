/*
* Task 3:
*  Make this work (without using any built in functions, only a for loop, return the next binary number in a string or as an array)
* */

function reverseArr(input) {
    let reverse = [];
    for (let i = input.length - 1; i >= 0; i--) {
        reverse.push(input[i]);
    }
    return reverse;
}

function getNextNumber(array) {
    let reversedArray = reverseArr(array);
    let number = 0;
    for (let i = 0; i < reversedArray.length; i++) {
        number += (Math.pow(2, i)) * reversedArray[i];
    }
    let nextNumber = number + 1;
    return nextNumber;
}

function getBinary(array) {
    let number = getNextNumber(array);
    let converted = [];
    if (number) {
        while (number >= 1) {
            converted.unshift(number % 2);
            number = Math.floor(number / 2);
        }
    }
    console.log(converted);
}

//getBinary([1, 0, 0, 0, 0, 0, 0]);