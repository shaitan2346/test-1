const { plusOne, sum, sub, mult, div } = require('../module-1/functions');

describe('Тестирование мат операций', function () { 
    test("сложение", function () { 
        expect(sum(2, 5)).toEqual(7);
        expect(sum(0, 0)).toEqual(0);
        expect(sum(-1, 5)).toEqual(4);
        expect(sum(-8, -5)).toEqual(-13);
    });
    
    test("вычитание", function () { 
        expect(sub(2, 5)).toEqual(-3);
        expect(sub(0, 0)).toEqual(0);
        expect(sub(-1, 5)).toEqual(-6);
        expect(sub(-8, -5)).toEqual(-3);
    });
});
