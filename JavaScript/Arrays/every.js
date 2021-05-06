// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value

/*
Description:
    The every() method executes the provided callback function once for each element present in the array until it finds the one where callback returns a falsy value. If such an element is found, every() immediately returns false, otherwise it returns true.

    If every() is called on an empty array it will return true for all conditions.

*/

// Example:
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];
const array2 = [1, 50, 29, 62, 10, 12];

console.log(array1.every(isBelowThreshold)); // true
console.log(array2.every(isBelowThreshold)); // false

// Syntax
/*
// Arrow function
every((element) => {...})
every((element,index) => {...})
every((element, index, array) => {...})

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function callbackFn(element) {...})
every(function callbackFn(element, index) {...})
every(function callbackFn(element, index, array) {...})
every(function callbackFn(element, index, array) {...}, thisArg)
*/
