import { isAuthenticated, key } from './auth';

describe('Helpers/Auth', () => {
  it('should be able to get session with isAuthenticated.', () => {
    const getItemMock = jest.fn().mockReturnValue(JSON.stringify(key));
    global.localStorage.__proto__.getItem = getItemMock;

    const item = isAuthenticated();

    expect(getItemMock).toHaveBeenLastCalledWith(key);
    expect(item).toBe(key);
  });
});
