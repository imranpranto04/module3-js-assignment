// 2 num
function squareRootOfSumOfSquares(numbers) {
  const sumOfSquares = numbers.reduce((acc, num) => acc + num ** 2, 0);
  const squareRoot = Math.sqrt(sumOfSquares);
  return squareRoot;
}
const numbers = [3, 4, 5];
const result = squareRootOfSumOfSquares(numbers);
console.log(result);
// !2 num
