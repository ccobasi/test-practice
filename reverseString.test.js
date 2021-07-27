const reverseString = require('./reverseString');

test('Takes a string as an argument and return it reversed', () => {
    expect(reverseString('raise')).toBe('esiar');
})