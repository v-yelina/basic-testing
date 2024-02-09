// Uncomment the code below and write your tests
import * as fs from 'fs';
import { doStuffByTimeout, doStuffByInterval, readFileAsynchronously } from '.';

jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  promises: {
    ...jest.requireActual('fs').promises,
    readFile: jest.fn(),
  },
  existsSync: jest.fn(),
}));

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    jest.spyOn(global, 'setTimeout');
    const funcToCall = jest.fn();
    doStuffByTimeout(funcToCall, 2000)
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(funcToCall, 2000);
  });

  test('should call callback only after timeout', () => {
    const funcToCall = jest.fn();
    doStuffByTimeout(funcToCall, 1000);
    expect(funcToCall).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(funcToCall).toHaveBeenCalled();
    expect(funcToCall).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    jest.spyOn(global, 'setInterval');
    const funcToCall = jest.fn();
    doStuffByInterval(funcToCall, 2000)
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(funcToCall, 2000);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const funcToCall = jest.fn();
    doStuffByInterval(funcToCall, 1000);
    expect(funcToCall).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(funcToCall).toHaveBeenCalled();
    expect(funcToCall).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(funcToCall).toHaveBeenCalled();
    expect(funcToCall).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(1000);
    expect(funcToCall).toHaveBeenCalled();
    expect(funcToCall).toHaveBeenCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your code here
  });

  test('should return null if file does not exist', async () => {
    const pathToFile = 'test.txt';

    (fs.existsSync as jest.Mock).mockReturnValueOnce(false);

    const result = await readFileAsynchronously(pathToFile);

    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    // Write your code here
  });
});
