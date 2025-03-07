// 약수 구하기

const fs = require("fs");

const [N, K] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let cnt = 0;
for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    cnt++;

    if (cnt === K) {
      console.log(i);
      break;
    }
  }
}

if (cnt < K) {
  console.log(0);
}
