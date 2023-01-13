console.log("Your code goes here...");

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result); //result로 숫자 연산을 분리하지 않으면 TS도 문자 데이터를 우선시한다.(문자 + 연산은 모두 문자로 반환)
  } else return n1 + n2;
}

// 변수 선언 후 값을 할당하지 않은 경우에만 데이터 형태를 지정
let number0: number;

// 변수 선언과 동시에 값을 할당한다면 TS와 compiler가 타입 추론을 하기 때문에 굳이 데이터 형태를 지정하지 않는다.
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
