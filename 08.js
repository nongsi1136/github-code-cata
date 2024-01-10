// 각에서 0도 초과 90도 미만은 예각,
// 90도는 직각, 90도 초과 
// 180도 미만은 둔각 180도는 평각으로 분류합니다. 
// 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

function solution(angle) {
    let i = angle
    if (i > 0 && i < 90) {
        return 1;
    } else if (i === 90) {
        return 2;
    } else if (90 < i && i < 180) {
        return 3;
    } else if (i === 180) {
        return 4;
    } else {
        return "주어진 조건이 아닙니다!";
    }
}
let result = solution(40);
let result1 = solution(90);
let result2 = solution(120);
let result3 = solution(180);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

// 삼항 연산자 사용 ?:
// function solution(angle) {
//     return angle > 0 && angle < 90 ? 1 :
//         angle === 90 ? 2 :
//             angle > 90 && angle < 180 ? 3 :
//                 angle === 180 ? 4 :
//                     -1;
// }

// let result = solution(40);
// let result1 = solution(90);
// let result2 = solution(120);
// let result3 = solution(180);

// console.log(result); // 1
// console.log(result1); // 2
// console.log(result2); // 3
// console.log(result3); // 4

// if 만 사용
// function solution(angle) {
//     if (angle > 0 && angle < 90) return 1; // 예각
//     if (angle === 90) return 2; // 직각
//     if (angle > 90 && angle < 180) return 3; // 둔각
//     if (angle === 180) return 4; // 평각
//     return -1; // 주어진 조건 이외의 경우
// }

// let result = solution(40);
// let result1 = solution(90);
// let result2 = solution(120);
// let result3 = solution(180);

// console.log(result); // 1
// console.log(result1); // 2
// console.log(result2); // 3
// console.log(result3); // 4