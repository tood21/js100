// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.

//
// var nums = [100, 200, 300, 400, 500];
//

var nums = [100, 200, 300, 400, 500];

// 1번째 방법
// nums.pop();
// nums.pop();
// console.log(nums);

// 2번째 방법
// newArr = nums.slice(0, 3);
// console.log(newArr);

// 3번째 방법
nums.splice(3, 2);
console.log(nums);
