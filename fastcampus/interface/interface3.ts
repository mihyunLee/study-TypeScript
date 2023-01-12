// function in interface
interface Person3 {
  name: string;
  age: number;
  hello(): void;
}

const p31: Person3 = {
  name: "Mark",
  age: 39,
  hello: function (): void {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};

const p32: Person3 = {
  name: "Mark",
  age: 39,
  hello(): void {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};

const p33: Person3 = {
  name: "Mark",
  age: 39,
  hello: (): void => {
    // arrow function의 this는 해당 객체를 가리키지 않는다.
    // 매개변수에 this: Person3를 해주어도 arrow function의 매개변수에는
    // this를 사용할 수 없기 떄문에 에러가 발생한다.
    // console.log(`안녕하세요 ${this.name}입니다.`);
  },
};

p31.hello();
p32.hello();
