//문제19 : 제곱을 구하자

//공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

//내가 짠코드 1

// let a = prompt("제곱할 숫자를 입력하세요");
// let b = prompt("몇번 제곱하시겠습니까?");

// console.log(a ** b);

//문제에서 공백으로 구분하여 두 숫자  -> 이거 적용안했음
//문제를 잘 읽어야지

//내가 짠코드 2

let num = prompt("숫자를 입력하세요").split(" ");

console.log(num[0] ** num[1]);

//잘됨

//답안지 답안

const n = prompt("수를 입력하세요.").split(" ");

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
