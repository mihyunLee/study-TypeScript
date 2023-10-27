/**
 * keyof 연산자
 * - 객체 타입에 적용
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "노르",
  age: 25,
};

getPropertyKey(person, "name");

/**
 * keyof 연산자 + typeof
 */

// typeof 뒤에 오는 변수의 타입을 추론해서 타입 별칭에 정의해준다.
type PersonT = typeof personT;

const personT = {
  name: "노르",
  age: 25,
};

// keyof와 typeof의 조합으로 사용 가능하다.
function getPropertyKey2(person: Person, key: keyof typeof personT) {
  return person[key];
}

getPropertyKey2(personT, "name");
