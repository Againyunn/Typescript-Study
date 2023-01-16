// 함수 자체의 type 지정
function add1(n1: number, n2: number) {
  return n1 + n2;
}

function add2(n1: number, n2: number): number {
  return n1 + n2;
}

// JS에는 void 함수가 없지만, TS는 반환 값이 없는 함수는 void로 지정가능
function testVoid(n1: number, n2: number): void {
  console.log(n1 + n2);
}

let result = testVoid(add1(10, 20), add2(11, 12));
console.log(result); // undefined

// 타입의 역할을 수행하는 함수

// TS와 JS 사이의 컴파일러로 인해 발생하는 런타임 오류
// let combineValues;

// combineValues = add1
// combineValues = 5
// console.log(combineValues(8, 8)) //TS에서 컴파일러가 컴파일할 수 있지만, 실제 JS는 변수에 함수처럼 파라미터를 부여했다고 판단하여 오류 발생

// 이때 타입의 역할을 하는 함수를 타입으로 할당
let combineValues: Function;

combineValues = add1; // 함수를 할당
// combineValues = 5 // 컴파일 단계에서 오류를 발생하여 런타임 오류를 방지
console.log(combineValues(8, 8));

// 콜백 함수 형태의 타입 지정
let combineFunction: (a: number, b: number) => number;

combineFunction = add1; // 함수를 할당

console.log(combineFunction(8, 8));

// 함수의 매개변수로 함수를 받는 경우
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => console.log(result));

// 콜백함수에 void 자료형을 지정했지만, void임에도 값을 반환할 수 있다.
addAndHandle(10, 20, (result) => {
  console.log(result);
  return true;
});
