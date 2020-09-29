class Gigasecond {
  userDate: Date;
  gigaSecond = 1000000000;

  constructor(date: Date) {
    this.userDate = date;
  }

  date = () => {
    const userSeconds = new Date(this.userDate).getSeconds();
    const newDate = this.userDate.setSeconds(userSeconds + this.gigaSecond);
    return new Date(newDate);
  };
}

export default Gigasecond;
