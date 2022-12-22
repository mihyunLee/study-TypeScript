// (3) 타입 별칭(Type Alias) - type 별칭 = 타입 정의
// 복잡한 타입에 상수처럼 타입 별칭을 붙여서 타입을 재사용 할 수 있다.
// 주로 유니온 타입에 많이 사용된다.
type Combinable = number | string;

// (1) 유니온 타입 - 타입 | 타입
// 여러개의 타입을 지정할 수 있다.
// 유니온 타입에서 A나 B타입 중에 온다는 것만 알고, 정확한 타입을 알지 못하기 때문에 타입 검사가 필요하다.
// (2) 리터럴 타입 - 타입으로 문자열이나 숫자등 정확한 값을 지정한다.
function combine(
  input1: number | string, // (1)
  input2: Combinable, // (3)
  resultType: "as-number" | "as-text" // (2)
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedAgesToNumber = combine("30", "26", "as-number");
console.log(combinedAgesToNumber);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
