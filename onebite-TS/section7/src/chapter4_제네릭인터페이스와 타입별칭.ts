/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스는 제네릭 함수와는 달리
// 어떠한 변수의 타입으로 정의할 때 반드시 타입 변수의 값을 지정해주어야 한다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 제네릭 인터페이스 + 인덱스 시그니쳐
 *
 * - 인덱스 시그니쳐
 * { [key: T]: U }
 * 기본적인 key, value의 타입 틀 안에서
 * 일치하는 타입을 가지고 있다면 어떠한 key-value 쌍이든 가질 수 있다.
 */

// 인덱스 시그니쳐 예제
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key1: -1231,
  key2: 123123,
};

// 제네릭 인터페이스 + 인덱스 시그니쳐
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 * - 제네릭 인터페이스와 문법만 다를 뿐, 동일하게 동작한다.
 */

type Map2<V> = {
  [key: string]: V;
};

// 제네릭 인터페이스와 동일하게 제네릭 타입 별칭 또한
// 타입을 변수에 할당할 때 타입 변수를 직접 지정해주어야 한다.
let stringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 / 개발자
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

// 제네릭 인터페이스를 사용하면 타입 가드가 필요없다.
function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "노르",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentuser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "타입대학교",
  },
};
