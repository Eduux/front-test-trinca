import { getItem } from './storage';

export const key = 'trincaTestAuth';

export const isAuthenticated = (): string | null => {
  const tokenStorage = getItem(key);
  return tokenStorage;
};
