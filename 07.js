//정수 num1과 num2가 매개변수로 주어질 때,
// num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

function solution(num1, num2) {
    return (num1 / num2) * 1000 | 0;
}
let result = solution(3, 2);
let result1 = solution(7, 3);
let result2 = solution(1, 16);

console.log(result);
console.log(result1);
console.log(result2);