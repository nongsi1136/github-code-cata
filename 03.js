function solution (num1,num2) {
    return num1 / num2 | 0;
}   

let result  = (solution(10,5));
let result1 = (solution(7,2));

console.log(result);
console.log(result1);

//소수점 이하를 버리고 정수 부분을 얻는 방법들
// 01. toFixed() 메서드와 + 연산자 사용
// function solution(num1, num2) {
//    return +(num1 / num2).toFixed(0);
// }

// 02. Math.trunc() 함수 사용
// function solution(num1, num2) {
//     return Math.trunc(num1 / num2);
// }

// 03. 소수점 이하를 빼는 방법
// function solution(num1, num2) {
//     return num1 / num2 - (num1 / num2 % 1);
// }

// 04. 비트 연산자 ~~ 사용
// function solution(num1, num2) {
//     return ~~(num1 / num2);
// }

// 05. parseInt() 함수 사용
// function solution(num1, num2) {
//     return parseInt(num1 / num2);
// }

// 06. Math.floor() 함수 사용
// function solution(num1, num2) {
//     return Math.floor(num1 / num2);
// }



