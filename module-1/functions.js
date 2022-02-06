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
    let c = 0;
    if (c < a, c < b) {
        while (c < b) {
            c = plusOne(c);
            a = plusOne(a);
        }
        return a;
    }
    else if (c > a, c > b) {
        a = -a;
        b = -b;
        while (c < b) {
            c = plusOne(c);
            (a) = plusOne(a);
        }
        return -a;
    }
    else if (c > a, c < b) {
        a = -a;
        while (a < b) {
            a = plusOne(a);
            c = plusOne(c);
        }
        return c;
    }

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