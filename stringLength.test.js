const stringLength = require('./stringLength');

test('Returns its characters count', () => {
    expect(stringLength('Chukwuma')).toBe(8);
    expect(stringLength('stringlength')).toBe('Error: Enter text between 1-10');
})