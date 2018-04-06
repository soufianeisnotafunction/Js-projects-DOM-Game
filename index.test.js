const randomNumber = require('./index.js')


test('expect that the returned number is greater than 0 and less than 7', () => {
  expect(randomNumber()).toBeGreaterThan(0);
  expect(randomNumber()).toBeLessThan(7);
});