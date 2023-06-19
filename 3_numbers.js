function getPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

const result = getPrimeNumber(-2);
console.log(result);
