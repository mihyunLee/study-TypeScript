// ERROR: --strictNullCheck가 false이면 null을 모든 타입에 할당할 수 있다.
// let myName: string = null;

// let v: void = void; // void는 타입이기 때문에 할당할 수 없다.
let v: void = undefined; // undefined는 타입이자 값이다. void 타입에는 undefined만 할당할 수 있다.

// union 타입을 사용하면 null 값을 가질 수 있다.
let union: string | null = null;

console.log(typeof union); // object
console.log(typeof v); // undefined
