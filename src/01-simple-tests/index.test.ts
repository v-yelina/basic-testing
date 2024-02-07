// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 2, action: Action.Add });
    expect(result).toBe(4);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 6, b: 2, action: Action.Subtract });
    expect(result).toBe(4);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 3, b: 2, action: Action.Multiply });
    expect(result).toBe(6);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 2, action: Action.Divide });
    expect(result).toBe(5);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 2, action: Action.Exponentiate });
    expect(result).toBe(100);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 2, b: 2, action: 'Action.Add' });
    expect(result).toBeNull;
  });

  test('should return null for invalid arguments', () => {
    expect(simpleCalculator({ a: 'a', b: 2, action: Action.Add })).toBeNull;
    expect(simpleCalculator({ a: 2, b: 'b', action: Action.Subtract })).toBeNull;
    expect(simpleCalculator({ a: 's', b: 'b', action: Action.Divide })).toBeNull;
  });
});
