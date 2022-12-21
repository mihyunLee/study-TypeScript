// const person: {} 는 person이 객체라는 것을 명시한다.
// 객체 타입은 '키: 타입' 쌍으로 구성되어 있고
//;(세미콜론)을 사용하여 다른 키 값과 구분한다.
const person: {
  name: string;
  age: number;
  hobbies: string[]; // array
  order: [number, string]; // tuple
} = {
  name: "Nor",
  age: 24,
  hobbies: ["sports", "camping"],
  order: [2, "pizza"],
};

// 예외) number나 string 타입일 경우에는 push 할 때 에러가 발생하지 않는다.
person.order.push(33);

// person.role[1] = 3; // Error: role 배열의 인덱스 1의 값은 string이어야 한다.

// hobbies 배열이 string 타입의 요소들로 구성되어 있음을 알기 때문에
// 배열 메서드인 map을 사용하면 에러가 발생한다.
for (let hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // Error
}

console.log(person.name);

// 열거형
// 초기 값을 주지 않으면 0부터 차례로 1씩 증가된 값을 갖는다.
// ADMIN - 0, READ_ONLY - 1, AUTHOR - 2
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const user = {
  id: "123",
  role: Role.READ_ONLY,
};

if (user.role === Role.READ_ONLY) {
  console.log("is Read only");
}
