class Gigasecond {
  userDate: Date;
  constructor(date: Date) {
    this.userDate = new Date(date);
  }

  date = () => {
    const gigaSecond = 1000000000;
    const userDateSeconds = this.userDate.getSeconds();
    const newDate = this.userDate.setSeconds(userDateSeconds + gigaSecond);
    return new Date(newDate);
  };
}

export default Gigasecond;
