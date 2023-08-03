/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  name: "바둑이"; // 확장한 Animal의 타입을 Dog에서 재정의 할 수도 있다.
  isBark: boolean;
}

const dog: Dog = {
  // name: "", // !ERROR
  name: "바둑이",
  age: 3,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface CatChicken extends Cat, Chicken {} // 인터페이스 다중 확장

const catChicken: CatChicken = {
  name: "",
  age: 3,
  isScratch: false,
  isFly: true,
};
