// Create an array
const names = ["Brandon", "Nora", "Zach", "Erin", "Vlad", "Violetta", "Colin"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Length
console.log(names.length);

// Access @ index
console.log(names[3], names[4], names[10], names[names.length - 1]);

// Loop
names.forEach((name, index) => {
    // console.log(`Hello ${name}, at index ${index}`);
});

for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);
}

for (let i = names.length - 1; i >= 0; i--) {
    // console.log(`Hi ${names[i]}, at ${i}`);
}

numbers.forEach((number) => {
    // console.log(number * 10);
});

// Add item at end
names.push("Martin");
numbers.push(11);
console.log(names);
console.log(numbers);

// Add item at end
names.unshift("Sylvia");
numbers.unshift(0);
console.log(names);
console.log(numbers);
