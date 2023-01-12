// 인터페이스는 컴파일시 자바스크립트에 포함되지 않는다.
interface Person1 {
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요 ${person.name}입니다.`);
}

const p1: Person1 = {
  name: "Mark",
  age: 39,
};

hello1(p1);
