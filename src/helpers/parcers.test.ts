import { dayAndMonthParse } from './parcers';

describe('Helpers/Parcers', () => {
  it('should be able to parce date.', () => {
    expect(dayAndMonthParse('2020-12-12')).toBe('11 / 12');
    expect(dayAndMonthParse('2020-05-05')).toBe('04 / 05');
  });
});
