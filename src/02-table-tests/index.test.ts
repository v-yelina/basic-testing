import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 1, b: 1, action: Action.Divide, expected: 1 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 4, b: 0, action: Action.Multiply, expected: 0 },
  { a: 5, b: 1, action: Action.Multiply, expected: 5 },
  { a: 5, b: 1, action: Action.Subtract, expected: 4 },
  { a: 5, b: 5, action: Action.Subtract, expected: 0 },
  { a: '5', b: 1, action: Action.Subtract, expected: null },
  { a: '5', b: '1', action: Action.Subtract, expected: null },
  { a: 5, b: ' 1', action: Action.Subtract, expected: null },
  { a: 5, b: 1, action: 'Action.Subtract', expected: null }
];

describe('simpleCalculator', () => {
  test.each(testCases)(`Calculate $a $action $b`, ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toBe(expected);
  })
});
