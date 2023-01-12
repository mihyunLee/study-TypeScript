interface IPerson2 {
  name: string;
  age?: number;
}

// extends: 인터페이스 상속받기
// 인터페이스에는 하나의 인터페이스만 상속받을 수 있다.
interface IKorean extends IPerson2 {
  city: string;
}

const k: IKorean = {
  name: "홍길동",
  city: "서울",
  age: 39,
};
