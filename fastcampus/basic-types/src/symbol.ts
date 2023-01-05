// Symbol을 함수로 사용해서 symbol 타입을 만들어낼 수 있다.
// new Symbol로 사용할 수 없다.
// Symbol: Primitive 타입의 값을 담아서 사용한다.
// 고유하고 수정 불가능 값으로 만들어 주로 접근을 제어하는데 사용한다.

console.log(Symbol("foo") === Symbol("foo")); // false

const sym = Symbol();

const obj = {
  [sym]: "value",
  notsym: "value2",
};

// obj["sym"] = "update value"; // Error: 직접 심볼에 접근할 수 없다.
obj[sym] = "update value";
obj["notsym"] = "update value2"; // 심볼이 아닌 값은 접근 가능

console.log(obj);
// { notsym: 'update value2',
// [Symbol()]: 'update value' }
