interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "Mark",
  age: 39,
};

// function getProp(obj: IPerson, key: "name" | "age"): string | number {
//   return obj[key];
// }

// value는 key가 "name"일 때 string, "age"일 때 number 타입이어야 하는데,
// 유니온 타입으로 지정해버리면 원치않은 결과이기 때문에 에러가 발생한다.
// function setProp(
//   obj: IPerson,
//   key: "name" | "age",
//   value: string | number
// ): void {
//   obj[key] = value;
// }

// [ 해결방법 ] - keyof 타입
// 객체의 key 값이 유니온 타입으로 나온다.
// keyof IPerson
// => "name" | "age"
type Keys = keyof IPerson;

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
// 제너릭을 사용해주면 유니온 타입이 아닌 지정 타입이 나온다.
// extends를 활용해서 관계를 규명해줌으로써 정확한 타입을 요구한다.
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person, "name", "Anna");
// setProp(person, "name", 39); // ERROR!
