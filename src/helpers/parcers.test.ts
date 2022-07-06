import { dayAndMonthParse, moneyToNumber } from './parcers';

describe('Helpers/Parcers', () => {
  it('should be able to parce date.', () => {
    expect(dayAndMonthParse('2020-12-12')).toBe('12 / 12');
    expect(dayAndMonthParse('2020-05-05')).toBe('05 / 05');
  });

  it('should be able to parce money to number.', () => {
    expect(moneyToNumber('R$ 25,05')).toBe(25.05);
    expect(moneyToNumber('')).toBe(0);
  });
});
