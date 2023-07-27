/**
 * 사용자 정의 타입가드 (custom type guard)
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratched: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  // return (animal as Cat).isScratch !== undefined; // !ERROR
  return (animal as Cat).isScratched !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // 강아지
  } else if (isCat(animal)) {
    // 고양이
    animal;
  }
}
