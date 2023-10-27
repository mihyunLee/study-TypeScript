/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

// 조건부 타입이 분산되지 않게 하려면 extends 양 옆의 타입들에 대괄호를 작성한다.
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;
// a: string

let b: StringNumberSwitch<string>;
// b: number

let c: StringNumberSwitch<number | string>;
// 타입 변수에 유니온 타입을 할당하면 분산적 조건부 타입이 된다.
// StringNumberSwitch<number> | StringNumberSwitch<string>
// 위의 두 타입이 모두 할당되어 해당 결과값을 유니온으로 묶어 정의된다.
// c: string | number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계 - 유니온 타입이 각각 분리된다
// StringSwtich<boolean> |
// StringSwtich<number> |
// StringSwtich<string>

// 2단계
// StringSwtich<boolean> -> number |
// StringSwtich<number> -> string |
// StringSwtich<string>  -> number |

// 결과
// number | string

/**
 * 실용적인 예제
 * - 유니온 타입에서 특정 타입을 제거하는 방법
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// Exclude<number, string> -> T -> number |
// Exclude<string, string> -> never |
// Exclude<boolean, string> -> T -> boolean |

// 결과
// number | never | boolean
// 유니온은 타입들의 합집합
// never 타입은 공집합
// 따라서 일반 타입들과 never 타입을 유니온 타입으로 작성하면 never는 사라진다.

// 최종 결과
// numbr | boolean
// T와 U가 동일한 string 타입이라면 never 타입이 할당되 유니온 타입에서 제거된다.

/**
 * 실용적인 예제
 * - 유니온 타입에서 특정 타입만 추출하는 방법
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// Exclude<number, string> -> never |
// Exclude<string, string> -> T -> string |
// Exclude<boolean, string> -> never |

// 최종 결과
// string
