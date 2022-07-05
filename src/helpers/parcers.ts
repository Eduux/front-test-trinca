export const dayAndMonthParse = (date: string) => {
  const dateToFormat = new Date(date);

  const day = dateToFormat.getDate();
  const month = dateToFormat.getMonth() + 1;

  return `${day >= 9 ? day : `0${day}`} / ${month >= 9 ? month : `0${month}`}`;
};

export const moneySimpleParce = (money: number) => {
  return money.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};
