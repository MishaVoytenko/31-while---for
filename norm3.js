let positive = 0
let negative = 0
let zeros = 0
let even = 0
let odd = 0
// let nums = []

for (let i = 1; i <= 3; i++) {
  // nums[i - 1] = prompt("введіть число");
  const num = +prompt("введіть число");
  if (num < 0) negative++
  if (num > 0) positive++
  if (num == 0) zeros++
  if (num % 2 == 0) even++
  if (num % 2 != 0) odd++

}
console.log({ positive, negative, zeros, even, odd })
console.log(`positive: ${positive},\nnegative: ${negative},\nzeros: ${zeros},\neven: ${even},\nodd: ${odd}`)


