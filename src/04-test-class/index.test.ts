import { BankAccount, getBankAccount, InsufficientFundsError, SynchronizationFailedError, TransferFailedError } from '.';
import _ from 'lodash';

describe('BankAccount', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  let account: BankAccount;
  const anotherAccount = getBankAccount(200);

  test('should create account with initial balance', () => {
    const initialBalance = 100;
    account = getBankAccount(initialBalance);
    expect(account.getBalance()).toBe(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => account.withdraw(200)).toThrowError(InsufficientFundsError)
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => account.transfer(200, anotherAccount)).toThrowError(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(200, account)).toThrowError(TransferFailedError);
  });

  test('should deposit money', () => {
    account.deposit(100);
    expect(account.getBalance()).toBe(200);
  });

  test('should withdraw money', () => {
    account.withdraw(50);
    expect(account.getBalance()).toBe(150);
  });

  test('should transfer money', () => {
    account.transfer(50, anotherAccount);
    expect(account.getBalance()).toBe(100);
    expect(anotherAccount.getBalance()).toBe(250);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(50);

    await expect(account.fetchBalance()).resolves.toEqual(expect.any(Number));
  });

  test('should set new balance if fetchBalance returned number', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(90);

    await account.synchronizeBalance();
    expect(account.getBalance()).toBe(90);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.spyOn(account, 'fetchBalance').mockResolvedValueOnce(null);

    await expect(account.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
