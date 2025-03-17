let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = parseInt(input[0]);
// 런타임 에러

// function gcd(a, b) {
//   let m = Math.max(a, b);
//   while (true) {
//     if (m % a === 0 && m % b === 0) {
//       return m;
//     }
//     m++;
//   }
// }

// for (let i = 1; i <= n; i++) {
//   const [a, b] = input[i].split(" ").map(Number);
//   console
// .log(gcd(a, b));
// }

function lcm(a, b) {
  for (i = Math.min(a, b); a * b + 1; i++) {
    if (i % a == 0 && i % b == 0) {
      return i;
    }
  }
}

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(lcm(a, b));
}
