// 함수 인터페이스
interface HelloPerson {
  (name: string, age?: number): void;
}

// 함수 인터페이스를 함수에 할당하면
// 함수의 매개변수와 리턴 타입의 선언이 인터페이스와 맞는지 체크한다.
// 매개변수의 이름이 같을 필요는 없다.
const helloPerson: HelloPerson = (n: string) => {
  console.log(`안녕하세요 ${n}입니다.`);
};

helloPerson("Mark");
