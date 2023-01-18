// class에 generic 사용
// T의 유효 범위는 class 전체로 지정
class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person("Mark", 39);
// new Person<string, string>("Mark", 39); // Error: string에 number 타입을 할당할 수 없음
new Person<string, number>("Mark", 39);
