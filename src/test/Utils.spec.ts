import { toUpperCase } from "../app/Utils";
describe('Utils', () => {
  test('Should return uppercase', () => {
    const results = toUpperCase('test');
    expect(results).toBe('TEST');
  })
})