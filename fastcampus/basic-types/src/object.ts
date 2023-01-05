// object 타입
// - primitive type 이 아닌 것을 나타내고 싶을 때 사용하는 타입

const person1 = { name: "Mark", age: 39 };
// person1은 object 타입이 아닌
// {name: stirng, age: number} 타입, object literal 타입이라고 한다.

let person2 = Object.create({ name: "Mark", age: 39 });
// create는 Object.create(o: object | null) 타입을 갖는다.
// 여기서 object 타입이 배정되면, primitive type 값을 가질 수 없다.

// person2 = Object.create(false); // ERROR
// person2 = Object.create(1); // ERROR
// person2 = Object.create("1"); // ERROR
