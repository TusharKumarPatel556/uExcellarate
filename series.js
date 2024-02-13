function isPrime(num) {
  let count = 0;
  if (num <= 1) {
    return false;
  } else if (num == 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function printSeries() {
  let i = 1;
  while (i <= 75) {
    let numIsprime = isPrime(i);
    if (!numIsprime) {
      let prevnumIsprime = isPrime(i - 1);
      if (prevnumIsprime) {
        let afternumIsprime = isPrime(i + 1);
        if (!numIsprime && prevnumIsprime && afternumIsprime) {
          console.log(i);
        }
      }
    }
    i++;
  }
}

printSeries();
