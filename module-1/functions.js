// Функция + 1
function plusOne(arg) {
    return arg + 1;
}
//Вычитание 
function sub(a, b) {
    let i = 0;
    let result;
    if (a > b) {
        while (b < a) {
            b = plusOne(b);
            i = plusOne(i);
        }
        result = i;
    }
    else if (a < b) {
        while (a < b) {
            a = plusOne(a);
            i = plusOne(i)
        }
        result = -i;
    }
    else {
        result = i;
    }
    return result;
}

//Сложение 
function sum(a, b) {
    let i = 0;
    let result;
    if (a >= 0 && b >= 0) {
        result = a;
        while (i < b) {
            i = plusOne(i);
            result = plusOne(result);
        }
    }
    else if (a < 0 && b >= 0) {
        return sub(b, -a);
    } else if (a >= 0 && b < 0) {
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
// Умножение 
function mult(a, b) {
    let i = 0;
    let result = 0;
    if (i <= a) {
        while (i < a) {
            i = plusOne(i);
            result = sum(result, b);
        }    
    }
    else if (i >= a) {
        a = -a;
        while (i < a) {
            i = plusOne(i);
            result = sum(result, b);
        }
        result = -result;
    }
    return result;
}
//Деление 
function div(a, b) {
    let result;
    let i = 0;
    let k = b;
    if (a >= 0 && b > 0) {
        while (b <= a) {
            i = plusOne(i);
            b = sum(b, k);
        }
        result = i;
    }
    else if (a < 0 && b < 0) {
        while (b >= a) {
            i = plusOne(i);
            b = sum(b, k);
        }
        result = i;
    }
    else if (a >= 0 && b < 0) {
        a = -a;
        while (b >= a) {
            i = plusOne(i);
            b = sum(b, k);
        }
        result = -i;
    }
    else if (a < 0 && b > 0) {
        a = -a;
        while (b <= a) {
            i = plusOne(i);
            b = sum(b, k);
        }
        result = -i;
        
    }
    else {
        result = 'infinity';
    }
    return result;
}


module.exports = {
    plusOne: plusOne,
    sum: sum,
    sub: sub,
    mult: mult,
    div: div
}