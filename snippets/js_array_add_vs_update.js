// Demonstrates updating vs adding in arrays

let fruits = ["apple", "banana"];

// Update existing index
fruits[1] = "pear";
console.log(fruits); // ["apple", "pear"]

// Add new element at next index
fruits[2] = "grape";
console.log(fruits); // ["apple", "pear", "grape"]

// Add beyond current length (creates gaps)
fruits[5] = "kiwi";
console.log(fruits); // ["apple", "pear", "grape", empty ×2, "kiwi"]
