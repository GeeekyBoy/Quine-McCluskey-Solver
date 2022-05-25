export default function (primes) {
  let cols = {};
  for (const prime of primes) {
    for (const col of prime[0]) {
      if (!cols[col]) {
        cols[col] = [];
      }
      cols[col].push(prime[1]);
    }
  }
  return cols;
}
