// Description:

/* 
Array.prototype.concat()

The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

If the parameters are omitted, concat() returns a shallow copy of the existing array on which it was called. If the parameters are not omitted, the new concatenated array will const of elements in the array on which it was called, followed in order, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument was not an array). If the argument is a multidimensional array, it will not recurse them.

The concat method does not alter 'this' or any of the arrays provided as arguments, but instead returns a copy of the combined elements from those arrays. Elements of the original arrays are copied into the new array as follows:
    - Object references (and not the actual object): concat() copies object references into the new array. Both the original and new array refer to the SAME object in memory. So if the referenced object is modified, so are the original and new arrays. This includes elements of array arguments that are also arrays.

    - Data types such as strings, numbers, and booleans (but not String, Number, and Boolean objects): concat() copies the values into the new array.

Syntax:

concat();
concat(value0);
concat(value0, value1);
concat(value0, value1, ...valueN);


*/

// Example:

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
// You can combine entire arrays:
const array3 = array1.concat(array2);
// Or specific parts of an array
const array4 = array1.concat(array2[1]);
// However if you select an element to concat to it returns the values concatenated, but as a string, not as a new array
const array5 = array1[1].concat(array2[2]);
// Leaving the parameters empty just returns a shallow copy of the array it was called on
const concatArray = array1.concat();
// concat() does not reduce multi-dimensional arrays
const multidimensionalArray = ["a", "b", "c", ["d", "e", "f", ["g", "h", "i"]]];

const concatMultidimensionalArray = array1.concat(multidimensionalArray);

/*
console.log(array3);
console.log(array4);
console.log(array5);
console.log(typeof array5);
console.log(concatArray);
console.log(concatMultidimensionalArray);
*/

// More Examples:

// Concatenating two arrays
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];
console.log(letters.concat(numbers));

// Concatenating three arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const myNums = num1.concat(num2, num3);
console.log(myNums);

// Concatenating values to an array
// - Adds values to an array
const myLetters = ["a", "b", "c"];
const alphaNumeric = myLetters.concat(1, [2, 3]);
console.log(alphaNumeric);

// Concatenating nested arrays
// Also modifying num4
const num4 = [[4]];
const num5 = [5, [6]];
const myNumbers = num4.concat(num5);
console.log(myNumbers);
num4[0].push(4);
console.log(myNumbers);
