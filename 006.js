// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! **True를 찾아주세요.**

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));

if (NaN) {
  console.log("i'm true");
} else {
  console.log("i'm false");
}

if (1) {
  console.log("i'm true");
} else {
  console.log("i'm false");
}

if ("") {
  console.log("i'm true");
} else {
  console.log("i'm false");
}

if (0) {
  console.log("i'm true");
} else {
  console.log("i'm false");
}

if (undefined) {
  console.log("i'm true");
} else {
  console.log("i'm false");
}

// 답은 2번
