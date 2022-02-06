// Функция + 1
function plusOne(arg) {
    return arg + 1;
}
//Вычитание (Работает с положительными и отрицательными аргументами)
function sub(a, b) {
    let c = 0;
    if (a > b) {
        while (b < a) {
            b = plusOne(b);
            c = plusOne(c);
        }
        return c;
    }
    else if (a < b) {
        while (a < b) {
            a = plusOne(a);
            c = plusOne(c)
        }
        return -c;
    }
}

//Сложение (Работает с положительными и отрицательными аргументами)
function sum(a, b) {
    let i = 0;
    let result;
    if(a >= 0 && b >= 0 ) {
        result = a;
        while (i < b) {
            i = plusOne(i);
            result = plusOne(result);
        }
    }
    else if(a < 0 && b >= 0) {
        return sub(b, -a);
    } else if(a >= 0  && b < 0) {
        return sub(a, -b)
    } else {
        a = -a;
        b = -b;
        result = a;
        while (i < b) {
            i = plusOne(i);
            result = plusOne(result);
        }
        result = -result;
    }

    return result;

}
// Умножение (Работает с положительными и отрицательными аргументами)
function mult(a, b) {
    let d = 0;
    let c = 0;
    if (d < a) {
        while (d < a) {
            d = plusOne(d);
            c = sum(c, b);
        }
        return c;
    }
    else if (d > a) {
        a = -a;
        while (d < a) {
            d = plusOne(d);
            c = sum(c, b);
        }
        return -c;
    }
}
//Деление (Работает только с положительными аргументами)
function div(a, b) {
    let c = 0;
    let d = -1;
    while (c <= a) {
        d = plusOne(d);
        c = sum(c, b);
    }
    return d;
}
module.exports = {
    plusOne: plusOne,
    sum: sum,
    sub: sub,
    mult: mult,
    div: div
}