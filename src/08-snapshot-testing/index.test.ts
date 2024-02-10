// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const elements = ['one', 'two', 'three'];
    const expectedLinkedList = {
      value: 'one',
      next: {
        value: 'two',
        next: {
          value: 'three',
          next: {
            value: null,
            next: null,
          },
        },
      },
    };

    const generatedList = generateLinkedList(elements);

    expect(generatedList).toStrictEqual(expectedLinkedList);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const elements = ['a', 'b', 'c'];
    const generatedList = generateLinkedList(elements);
    expect(generatedList).toMatchSnapshot();
  });
});
