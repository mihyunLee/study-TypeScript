// (1) unknown 타입
// any 타입과 같이 모든 값을 할당할 수 있다.
let userIntput: unknown;
let userName: string;

userIntput = "Max";

// 타입 검사를 해야만 다른 타입의 변수에 값을 할당할 수 있다.
if (typeof userIntput === "string") {
  userName = userIntput;
}

// (2) never 타입
// never 타입의 변수에는 never 타입이 아닌 값을 할당할 수 없다.
// 예외를 던지는 함수이거나 무한 루프일 경우 never 타입으로 추론할 수 있다.
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
