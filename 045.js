// 문제45 : getTime()함수 사용하기

// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 현재 연도(현시점:2021)를 출력해보세요.
//내가 짠 코드
const date = new Date();
const newDate = date.getFullYear();
console.log(newDate);

//답안지 답
const d = new Date(); //현재 시점

let year = d.getTime(); // 1970년 부터 현재까지 흐른 밀리초
year = Math.floor(year / (3600 * 24 * 365 * 1000)) + 1970;
// 흐른 밀리초/1년의 밀리초 = 1970년 부터 흐른 년수
// 흐른 년수 + 1970 = 현재 년도

//윤년에 의해서 366일인 경우도 존재하므로 코드를 실행하는 날짜에 따라서 오류가 존재한다. 12월 25일 실행하면 1970년부터 존재했던 윤년들이 하루씩 더해지므로 현재년도 2021년도가 아니라 2022년도로 찍힐 수 있다.(물론 나의 뇌피셜)
console.log(year);
