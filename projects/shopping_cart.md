# Mini Project: Shopping Cart

Demonstrates arrays + updates + numbers.

```js
let cart = ["apple", "banana"];
let prices = [1.5, 2.0];

// Add a new item
cart[2] = "grape";
prices[2] = 2.5;

// Update existing item
cart[1] = "pear";
prices[1] = 2.2;

// Print cart and total
console.log(cart);        // ["apple", "pear", "grape"]
console.log(prices);      // [1.5, 2.2, 2.5]

let total = prices[0] + prices[1] + prices[2];
console.log("Total: $" + total);
```
