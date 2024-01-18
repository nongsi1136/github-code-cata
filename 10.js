// 정수 배열 numbers가 매개변수로 주어집니다.
// numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100
// 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

function solution(numbers) {
  // 1. 배열 안에 있는 원소의 합을 구해야 함.
  const totalSum = numbers.reduce((acc, num) => acc + num, 0);
  // 2. 배열의 총합 / 배열의 갯수=즉,길이 = 평균값 으로 배열의 개수도 구해야 함.
  const length = numbers.length;

  // 3. 평균값 계산 배연 안의 원소의 총합 나누기 원소의 개수(즉, 배열의 길이)
  const average = totalSum / length;

  // 소수 부분이 .0 또는 0.5인 경우 : 나머지 연산자 활용
  if (average % 1 === 0 || average % 1 === 0.5) {
    return average;
  }
  return Math.round(average);
}

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbers2 = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

let result = solution(numbers1);
let result1 = solution(numbers2);

console.log(result);
console.log(result1);
