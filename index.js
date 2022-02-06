// импортируем функции
const { plusOne, sum, sub, mult, div } = require('./module-1/functions');

console.log('Ай Вэ, Братан');
console.log('');

const a = 69, b = 3;

console.log('plusOne(', a, ') = ', plusOne(a));
console.log('sum(', a, ',', b, ') = ', sum(a, b));
console.log('sub(', a, ',', b, ') = ', sub(a, b));
console.log('mult(', a, ',', b, ') = ', mult(a, b));
console.log('div(', a, ',', b, ') = ', div(a, b));

