// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
  let sumOfEven = 0;

  for (let i = 2; i <= n; i += 2) {
    sumOfEven += i;
  }

  return sumOfEven;
}
// let i = 2: 반복문에서 i를 2부터 시작하도록 초기화합니다.
// i <= n: 반복문의 조건으로, i가 n 이하일 때까지 반복합니다.
// i += 2: 반복문이 한 번 실행될 때마다 i를 2씩 증가시켜서 다음 짝수로 이동합니다.
// sumOfEven += i: 현재 i의 값, 즉 짝수를 sumOfEven에 더합니다

let result = solution(10);
let result1 = solution(4);

console.log(result);
console.log(result1);
