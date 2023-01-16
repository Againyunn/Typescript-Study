// Unknwon type
let userInput: unknown; // any와 같은 역할을 수행하지만, any는 모든 값이 할당될 수 있다는 의미이며 unknown은 아직 타입이 지정되지 않았다는 의미를 가진다.
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") userName = userInput;

// never 타입을 통해 절대 해당 함수가 값을 반환하지 않도록 지정
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An Error occurred!", 500);
