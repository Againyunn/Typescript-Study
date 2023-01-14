// const person: object = {
//   name: "Jaeyun",
//   age: 27,
// };

// // JS에서 지정된 값을 처리하는 일반적인 방법
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// TS의 enum 자료형 이용
enum Authorization {
  "ADMIN",
  "READ_ONLY",
  "AUTHOR" = 200,
}

// 객체에 type을 지정하여 선언할 때에는 {} : object, {}내부에 각 메서드 별 타입을 선언해야 한다.
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // TS의 Tuple 자료형 -> 배열 내에 원소 개수 & 각 원소 별 데이터 형태가 제한
  authorization: number;
} = {
  name: "Jaeyun",
  age: 27,
  hobbies: ["Sports", "Singing"],
  role: [2, "author"], // role은 반드시 [숫자, 문자] 형태로 제한되어야 하는 상황
  authorization: Authorization.ADMIN,
};

// let favoriteActivities: string[]
// favoriteActivities = ["Sports", 1] // 숫자형 데이터 1로 인해 오류 발생

let favoriteActivities: any[]; // 유연한 데이터 형태처리
favoriteActivities = ["Sports", 1];

console.log(person.name);

// person.hobbies 를 문자열 배열로 인식하기 때문에 배열 형태에 반복문을 통해 접근 가능
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

// 권한을 확인
if (person.authorization === Authorization.ADMIN) {
  console.log("is ADMIN");
}
