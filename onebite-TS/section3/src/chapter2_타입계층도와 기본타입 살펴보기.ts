/**
 * Unknown 타입 (전체 집합)
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // !ERROR : 다운 캐스팅이 되지 않아 에러가 발생한다.
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

/**
 * Never 타입 (공집합)
 */

function nerverExam() {
  function nerverFunc(): never {
    while (true) {}
  }

  // nerver 타입은 모든 타입의 서브타입이므로 업 캐스팅이기 때문에 에러가 발생하지 않는다.
  let num: number = nerverFunc();
  let str: string = nerverFunc();
  let bool: boolean = nerverFunc();

  // !ERROR: never 타입의 다른 타입을 할당하는 것은 다운 캐스팅 이므로 에러 발생
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");

    // void 타입은 undefined 타입의 슈퍼타입이므로 에러가 발생하지 않는다.
    return undefined;
  }

  // 업 캐스팅
  let voidVar: void = undefined;
}

/**
 * Any 타입 - 타입 계층도를 무시하는 치트키이다.
 * 모든 타입의 슈퍼타입이자, 모든 타입의 서브타입이다(never 제외).
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운 캐스팅임에도 에러가 발생하지 않음
  anyVar = unknownVar;

  // 다운 캐스팅임에도 에러가 발생하지 않음
  undefinedVar = anyVar;

  // !ERROR: never 타입은 공집합이기 때문에 어떠한 타입도 다운 캐스팅 할 수 없음
  // neverVar - anyVar;
}
