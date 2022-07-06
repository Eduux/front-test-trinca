export const dayAndMonthParse = (date: string) => {
  const dateToFormat = new Date(date).toLocaleDateString('pt-Br', {
    timeZone: 'UTC',
  });

  const [day, month] = dateToFormat.split('/');

  return `${day} / ${month}`;
};

export const moneySimpleParce = (money: number) => {
  return money.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
