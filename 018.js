//문제18 : 평균점수

//영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

//공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
//단, 소숫점 자리는 모두 버립니다.

//내가 짠코드 첫번째

// const 국어점수 = prompt("국어점수를 입력하세요.");
// const 수학점수 = prompt("수학점수를 입력하세요.");
// const 영어점수 = prompt("영어점수를 입력하세요.");

// console.log(Math.floor((국어점수 + 수학점수 + 영어점수) / 3));

//결과 101010
//프롬프트로 받는 값은 string

//두번째 코드 parseInt 추가(숫자로 값을 받을수 있게)
const 국어점수 = parseInt(prompt("국어점수를 입력하세요."));
const 수학점수 = parseInt(prompt("수학점수를 입력하세요."));
const 영어점수 = parseInt(prompt("영어점수를 입력하세요."));

console.log(Math.floor((국어점수 + 수학점수 + 영어점수) / 3));

//출력은 맞지만 중복된 코드가 많음

//답안지 답안
const scores = prompt("세 과목의 점수를 입력하세요.").split(" ");
let sum = 0;

for (let i = 0; i < 3; i++) {
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}

console.log(Math.floor(sum / 3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.
