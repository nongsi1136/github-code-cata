// Q. 문자열 내 에서 각 문자가 몇 번 등장 하는지 세는 프로그램을 작성하세요.
// 예를 들어, 문자열 'spartan'이 주어지면, 결과는 다음과 같아야 합니다
// : { s: 1, p: 1, a: 2, r: 1, t: 1, n: 1 }”

function countCharacters(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}

let inputString = "spartan";
let result = countCharacters(inputString);

console.log("Input String:", inputString);
console.log("Character Counts:", result);
