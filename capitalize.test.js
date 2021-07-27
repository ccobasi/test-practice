const capitalize = require('./capitalize');

describe('Tests On Capitalize method', ()=> {
    it('alex =>  Alex', ()=> {
      expect(capitalize('alex')).toBe('Alex');
      expect(capitalize('Alex')).toBe('Alex');
      expect(capitalize('hello')).toBe('Hello');
    })
  })