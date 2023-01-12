class Person3 {
  constructor(public _name: string, public age: number) {}

  get name() {
    /* 
    함수에서 하는 동작들을 할 수 있다. 
    데이터를 get 하기전에 하고 싶은 동작을 정의한다.
    또한 반환값을 재가공하여 반환할 수 있다.
    */
    return this._name;
  }

  set name(n: string) {
    /* 
    함수에서 하는 동작들을 할 수 있다. 
    데이터를 set 하기전에 하고 싶은 동작을 정의한다.
    */
    this._name = n;
  }
}

const p3 = new Person3("Mark", 39);

console.log(p3.name); // get을 하는 함수 getter
p3.name = "Anna"; // set을 하는 함수 setter
