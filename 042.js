// 문제42 : 2020년

// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// **제한 조건**
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다.
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

//내가 짠 코드
const a = parseInt(prompt("몇월입니까?"));
const b = parseInt(prompt("며칠입니까?"));

const 달별일수 = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
const 요일 = ["TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"];

function solution(a, b) {
  let 현재일수 = 0;
  let 일수 = 0;
  for (let i = 0; i < a; i++) {
    일수 = 일수 + 달별일수[i];
  }
  현재일수 = 일수 + b;
  for (let j = 0; j < 7; j++) {
    if (현재일수 % 7 == j) {
      console.log(요일[j]);
    }
  }
}

solution(a, b);

//답안지 답안
//Date사용해도 되는 구나;;
const month = prompt("월을 입력하세요.");
const date = prompt("일을 입력하세요.");

function solution(a, b) {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const x = new Date("2020-" + a + "-" + b);
  return day[x.getDay()];
}
console.log(solution(month, date));
