import axios, { AxiosInstance } from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');


describe('throttledGetDataFromApi', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.mock('axios');
  });

  test('should create instance with provided base url', async () => {
    const relativePath = '/users';

    const mockCreate = axios.create as jest.MockedFunction<typeof axios.create>;
    mockCreate.mockReturnValue({
      get: jest.fn().mockResolvedValueOnce({ data: 'User1, User2' }),
    } as unknown as AxiosInstance);

    await throttledGetDataFromApi(relativePath);

    expect(mockCreate).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
  });

  test('should return response data', async () => {
    const relativePath = '/users';

    const mockCreate = axios.create as jest.MockedFunction<typeof axios.create>;
    mockCreate.mockReturnValue({
      get: jest.fn().mockResolvedValueOnce({ data: 'User1, User2' }),
    } as unknown as AxiosInstance);

    const responseData = await throttledGetDataFromApi(relativePath);

    // Expect the response data to match the expected value
    expect(responseData).toEqual('User1, User2');
  });
});
