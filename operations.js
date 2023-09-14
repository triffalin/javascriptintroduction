// Math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);

console.log(10 % 4); // 10/4 => 2 * 4 => Remainder: 2
console.log(10 % 3); // Expected Remainder: 1

console.log(10 + 3 - 5 * 10); // expected: -37
console.log((10 + 3 - 5) * 10); // changed the priority, expected result: 80

let result = (10 + 3 - 5) * 10;
result = 10 * 4;
result = result + 1;
console.log(result);

// Shorthand
result++; // result = result + 1
result--; // result = result - 1

result += 5; // result = result + 5
result -= 5; // result = result - 5
result *= 5; // result = result * 5
result /= 5; // result = result / 5

// perfoming string operations
console.log('Alin' + '' + 'Triff'); // concat
console.log('Alin' - 'ax'); // NaN = not a number

let userName = 'Alin';
console.log(userName.length);
console.log(userName.toUpperCase());

let hobbies = ['Sports', 'Cooking'];
console.log(hobbies.length);
