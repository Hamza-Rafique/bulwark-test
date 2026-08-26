// calculator.test.js
import { calculateTotal } from './calculator.js';

describe('calculateTotal', () => {
  test('calculates total correctly', () => {
    const items = [{ price: 10 }, { price: 20 }, { price: 30 }];
    expect(calculateTotal(items)).toBe(60);
  });
});
