// 주어진 숫자가 소수인지 아닌지 판별하는 함수를 작성해주세요.
//소수는 1과 자기 자신으로만 나누어지는 1보다 큰 정수입니다.
//힌트: 나머지 값을 구하는 연산자는 % 입니다. → e.g. 3 % 2는 1입니다.

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// 예시
let result = isPrime(1);
let result1 = isPrime(3);
let result2 = isPrime(5);
let result3 = isPrime(7);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);
