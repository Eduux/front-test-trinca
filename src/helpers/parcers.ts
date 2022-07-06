export const dayAndMonthParse = (date: string) => {
  const dateToFormat = new Date(date).toLocaleDateString('pt-Br', {
    timeZone: 'UTC',
  });

  const [day, month] = dateToFormat.split('/');

  return `${day} / ${month}`;
};

export const moneyToNumber = (value: string) => {
  return parseFloat(value.replace(/\D/g, '')) / 100 || 0;
};

export const moneySimpleParce = (money: number) => {
  return money.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const moneyMask = (value: string) => {
  return moneySimpleParce(moneyToNumber(value));
};
