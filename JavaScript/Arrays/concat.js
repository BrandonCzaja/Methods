// Array.prototype.concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array

// Syntax
/* 
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

console.log(array3);
console.log(array4);
console.log(array5);
console.log(typeof array5);
console.log(concatArray);
