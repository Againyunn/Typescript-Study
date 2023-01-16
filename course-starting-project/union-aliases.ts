type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

// union type 활용
function combine(
  input1: Combinable, //number | string,
  input2: Combinable, //number | string,
  resultConversion: ConversionDescriptor // "as-number" | "as-text" // enum 타입처럼 입력받는 resultConversion의 값 자체를 지정할 수 있다.
) {
  let result: any;

  // result = input1 + input2 //input1과 input2가 숫자, 문자 모두 가능하다면 더하기 연산이 불가능한 다른 연산도 있을 것이라 컴파일러가 추정하여 오류 표시

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2; // +변수 -> 변수의 값을 숫자형태로 변환
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;

  //   if (resultConversaion === "as-number") {
  //     return +result;
  //   } else return result.toString();
}

const combinedAges = combine(27, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("27", "26", "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Annna", "as-text");
console.log(combinedNames);
