import { act, renderHook } from '@testing-library/react-hooks';
import useLoadingImg, {LoadingStatus} from './index';

beforeAll(() => {
  const MockImage = require('../__mocks__/images');
  jest.useFakeTimers();
  Object.defineProperty(global, 'Image', {value: MockImage});
});

describe('useLoadingImg hook test', () => {
  it('should return undefined when load fail', () => {
    const { result } = renderHook(() => useLoadingImg('asdasd'));
    expect(result.current.status).toBe(LoadingStatus.LOADING);
    act(() => {
      jest.runAllTimers();
    });
    expect(result.current.img).toBe(undefined);
    expect(result.current.status).toBe(LoadingStatus.FAIL);
  });
  it('should return img when load success', () => {
    const { result } = renderHook(() => useLoadingImg('success.png'));
    expect(result.current.status).toBe(LoadingStatus.LOADING);
    expect(result.current.img).toBe(undefined);
    act(() => {
      jest.runAllTimers();
    });
    expect(result.current.img).toBe('success.png');
    expect(result.current.status).toBe(LoadingStatus.SUCCESS);
  });
});
