class Gigasecond {
  userDate: Date;
  constructor(date: Date) {
    this.userDate = date;
  }

  date = () => {
    let userDate = new Date(this.userDate);
    const gigaSecond = 1000000000;
    let newDate = userDate.setSeconds(this.userDate.getSeconds() + gigaSecond);
    return new Date(newDate);
  };
}

export default Gigasecond;
