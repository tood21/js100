//문제49 : 최댓값 구하기

//순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

//내가 짠 코드
const data = prompt("숫자를 입력하세요").split(" ");

let arr = data.map((e) => parseInt(e));
let result = Math.max(...arr);

console.log(result);

//답안지 답
let numbers = prompt("10개의 숫자를 입력하세요")
  .split(" ")
  .map((n) => {
    return parseInt(n, 10);
  });

numbers.sort((a, b) => {
  return b - a;
});

console.log(numbers[0]);
