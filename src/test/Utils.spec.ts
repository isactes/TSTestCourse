import { toUpperCase } from "../app/Utils";
describe('Utils', () => {
  test('Should return uppercase', () => {
    // arrange
    const sut  = toUpperCase;
    const expected = "TEST";
    //ACT 
    const  actual = sut("test");
    //ASSERT
    expect(actual).toBe(expected);

    //const results = toUpperCase('test');
    //expect(results).toBe('TEST');
  })
})