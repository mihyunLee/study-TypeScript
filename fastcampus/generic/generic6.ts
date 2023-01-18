// Generic과 extends
// extends를 사용하면 T는 string과 number로 제한된다.
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Mark");
new PersonExtends(39);
// new PersonExtends(true); // ERROR
