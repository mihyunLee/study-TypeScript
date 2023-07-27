/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과를 반환하는지 이야기 -> js
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과를 반환하는지 이야기 -> ts
// 💡 매개변수의 타입이 정의되었다면 return 문을 기준으로 반환 값의 타입이 자동으로 추론된다.
function func(a: number, b: number): number {
  return a + b;
}

/**
 *  화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

function introduce(name = "노르", age: number, tall?: number) {
  console.log(`name: ${name}`);

  if (typeof tall === "number") {
    // 타입 가드를 사용하지 않으면 tall 매개변수는 선택적 매개변수이기 때문에
    // undefined 일 수 있어 에러가 발생한다.
    console.log(`tall: ${tall + 10}`);
  }
}

// introduce(1, 165); // !ERROR
introduce("노르", 25, 165);
introduce("노르", 25);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((el) => (sum += el));

  return sum;
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15
