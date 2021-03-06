export const setItem = (key: string, value: string): void =>
  localStorage.setItem(key, JSON.stringify(value));

export const getItem = (key: string) => {
  const item = localStorage.getItem(key);

  return item && JSON.parse(item);
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};
