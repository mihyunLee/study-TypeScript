/**
 * 맵드 타입
 * - 객체 타입 조작
 * { [ P in K ] : T }
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// Mapped 타입 정의
type PartialUser = {
  // [어떤 key 값을 가질지 정의]: 어떤 value 값을 가질지 정의
  // key가 id 일수도, name 일수도, age 일수도 있다.
  // 인덱스 시그니쳐와는 다르게 'in' 연산자를 사용한다.
  // 오른쪽 User[key] 부분은 인덱스드 엑세스 타입이다.
  [key in "id" | "name" | "age"]?: User[key];
};

// 예시 - 객체 타입의 모든 프로퍼티를 boolean 타입으로 변경하기
type BooleanUser = {
  [key in keyof User]: boolean;
};

// 예시 - 함수의 반환 값이 모두 readonly 프로퍼티로 바뀌길 원할 때 반환 값 타입 정의
type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능

  return {
    id: 1,
    name: " 노르",
    age: 25,
  };
}

const user = fetchUser();
// user.id = 2; // !ERROR, 모든 프로퍼티가 읽기 전용이 되었기 때문

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정 기능
}

// 매개변수로는 변경될 값을 전달한다.
updateUser({
  // id: 1,
  // name: "노르",
  age: 20,
});
