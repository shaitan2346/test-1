function plusOne(num) {
    return num + 1;
}

/*
    x - number,
    y - number,
    return x + y
*/
// нельзя использовать: +, -, *, /, %
function sum(x, y) {
    let result = x;
    let i = 1;
    
    while(i <= y) {
        result = plusOne(result);
        i = plusOne(i);
    }

    return result;
}

/*
    x - number,
    y - number,
    return x - y
*/
function sub(x, y);

/*
    x - number,
    y - number,
    return x * y
*/
function mul(x, y);

/*
    x - number,
    y - number,
    return x / y
*/
function div(x, y) ;


// экспортируем функции:
module.exports = {
    plusOne: plusOne,
    sum: sum
};