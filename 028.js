//문제28 : 2-gram

//2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.

//예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

const inputArr = "Javascript".split("");

for (let i = 0; i < inputArr.length; i++) {
  console.log(inputArr[i - 1], inputArr[i]);
}

//답안지 답
// const data = prompt('문자를 입력하세요.');

// for (let i=0; i<data.length-1; i++){
//   console.log(data[i], data[i+1]);
// }
