const isLeapYear = (year: number) => {
  const isLeap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  return isLeap;
  // Your code here
};

export default isLeapYear;
