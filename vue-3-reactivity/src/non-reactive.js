// Non Reactive
let a = 0;
let b = 0;

let lhs = (a + b) ** 2;
let rhs = a ** 2 + b ** 2 + 2 * a * b;

a = 2;
console.log(lhs, rhs);
b = 3;
console.log(lhs, rhs);
