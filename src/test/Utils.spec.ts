import { toUpperCase, getStringInfo } from "../app/Utils";
describe('Utils', () => {
  test('Should return uppercase', () => {
    // arrange
    const sut = toUpperCase;
    const expected = "TEST";
    //ACT 
    const actual = sut("test");
    //ASSERT
    expect(actual).toBe(expected);
    //const results = toUpperCase('test');
    //expect(results).toBe('TEST');
  });
  describe('getStringInfo function', () => {
    test('String Info lowerCase', () => {
      const actual = getStringInfo('Test-string');
      expect(actual.lowerCase).toBe('test-string');
    })
    test('String Info upperCase', () => {
      const actual = getStringInfo('Test-string');
      expect(actual.upperCase).toBe('TEST-STRING');
    })
    test('String Info extraInfo', () => {
      const actual = getStringInfo('Test-string');
      expect(actual.extraInfo).toEqual({});
    })
    test('String Info characters', () => {
      const actual = getStringInfo('Test-string');
      expect(actual.characters.length).toBe(11);
      expect(actual.characters).toHaveLength(11);
      expect(actual.characters).toEqual(['T', 'e', 's', 't', '-', 's', 't', 'r', 'i', 'n', 'g']);
      expect(actual.characters).toContain<string>('-');
      expect(actual.characters).toEqual(
        expect.arrayContaining(['T', 'e', 's', 't', '-', 's', 't', 'r', 'i', 'n', 'g'])
      );
    })
    test('String Info ExtraInfo', () => {
      const actual = getStringInfo('Test-string');
      expect(actual.extraInfo).not.toBeUndefined();
      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).toBeTruthy();
    })
  });
  describe('Touppercase examples', () => {
    test.each([
      {input: 'test', expected: 'TEST'},
      {input: 'Test', expected: 'TEST'},
      {input: 'TEST', expected: 'TEST'},
    ])('input toUppercase should be expected', ({input, expected}) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    })
  })
})

