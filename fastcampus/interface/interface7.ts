interface Person8 {
  name: string;
  age?: number;
  readonly gender: string; // readonly property
}

const p81: Person8 = {
  name: "Mark",
  gender: "male",
};

p81.name = "Anna";
// p81.gender = "female"; // ERROR, readonly property는 한번 초기화 후에는 값을 변경할 수 없다.
