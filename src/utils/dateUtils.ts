export const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const getCurrentMonthIndex = (): number => {
  return new Date().getMonth();
};

export const getVisibleMonths = (startIndex: number): string[] => {
  const months: string[] = [];
  for (let i = 0; i < 6; i++) {
    const monthIndex = (startIndex + i) % 12;
    months.push(MONTH_NAMES[monthIndex]);
  }
  return months;
};

export const formatNumber = (num: number): string => {
  return num.toLocaleString();
};