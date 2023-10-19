/**
 * 제네릭 클래스
 *
 * 제네릭 인터페이스나 제네릭 타입 별칭과는 다르게
 * 인스턴스를 생성할 때의 값으로 타입을 추론하기 때문에
 * 생성자에서 타입을 명시하지 않아도 된다.
 */

class List<T> {
  // private 접근 제어자로 필드 선언 생략 가능
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.pop();
stringList.push("3");
stringList.print();
