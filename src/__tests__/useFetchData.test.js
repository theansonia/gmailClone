import { renderHook } from '@testing-library/react-hooks';
import { useFetchData } from '../utils/useFetchData';

const stubbedFolders = ['Inbox', 'Trash'];
const stubbedFetchUrl = 'api/folders-mocked';

afterEach(() => {
  global.fetch.mockClear();
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe('useFetchFolders', () => {
  it('should return data after fetch', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(stubbedFolders),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchData(stubbedFetchUrl, 'json')
    );
    await waitForNextUpdate();
    expect(result.current).toStrictEqual(stubbedFolders);
    expect(result.current).toHaveLength(2);
  });
});
