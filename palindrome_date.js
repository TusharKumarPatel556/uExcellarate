function isleapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDays(month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return isleapYear(year) ? 29 : 28;
    default:
      return 0;
  }
}

function getpaliandromeDates() {
  for (let year = 2001; year <= 2021; year++) {
    for (let month = 1; month <= 12; month++) {
      const days = getDays(month, year);
      for (let day = 1; day <= days; day++) {
        let date = `${day < 10 ? "0" + day : day}${
          month < 10 ? "0" + month : month
        }${year}`;
        let revdate = date.split("").reverse().join("");
        if (date === revdate) {
          console.log(date);
        }
      }
    }
  }
}

getpaliandromeDates();
