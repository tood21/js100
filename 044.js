// 문제44 : 각 자리수의 합

// **사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

// **예를들어**
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

//내가 짠 코드
const data = prompt("숫자를 입력하세요").split("");
let result = 0;
data.forEach((e) => (result += parseInt(e)));

console.log(result);

// 답안지 정답
let n = prompt("숫자를 입력하세요.");
let sum = 0;

while (n !== 0) {
  sum += n % 10;
  n = Math.floor(n / 10);
}

console.log(sum);
