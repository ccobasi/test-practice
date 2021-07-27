const Calculator = require('./calculator');
const calc = new Calculator();

describe('Calculator', () => {
    test('Add', () => {
        expect(calc.add(1,2)).toBe(3)
        expect(calc.add(1)).toBe('b number not provided');
        expect(calc.add()).toBe('both value missing');
    });

    test('Subtract', () => {
        expect(calc.subtract(6,2)).toBe(4)
        expect(calc.subtract(2)).toBe('b number missing');
        expect(calc.subtract(30,10)).not.toBe(15);
    });

    test('Multiply', () => {
        expect(calc.multiply(3,2)).toBe(6)
        expect(calc.multiply(0,3)).toBe(0);
        expect(calc.multiply()).toBe('both value missing');
    });

    test('Divide', () => {
        expect(calc.divide(10,2)).toBe(5)
        expect(calc.divide(0, 3)).toBe('number a missing or invalid number');
        expect(calc.divide(13, 0)).toBe('b number missing or invalid number');
    });
})