// импортируем функцию plusOne
const { plusOne,  sum } = require('./module-1/functions');

const a = 5, b = 7;

console.log('plusOne(', a, ') = ' , plusOne(a));

console.log('sum(', a, ',', b, ' ) = ' , sum(a, b));
