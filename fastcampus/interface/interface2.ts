interface Person2 {
  name: string;
  age?: number; // optional property
  [index: string]: any; // indexable type, index의 타입은 숫자 또는 문자만 가능하다.
}

function hello2(person: Person2): void {
  console.log(`안녕하세요 ${person.name}입니다.`);
}

hello2({ name: "mark", age: 39 });
hello2({ name: "Anna" }); // age 프로퍼티가 없어도 오류가 발생하지 않는다.
hello2({ name: "John", sisters: ["Yoon", "Hong"] }); // 문자로 된 sisters 프로퍼티를 추가할 수 있다.
