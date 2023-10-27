/**
 * infer - Inference(추론)
 * -  제네릭 파라미터의 타입을 추론할 수 있다.
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
// A: string

type B = ReturnType<FuncB>;
// B: number

type C = ReturnType<number>;
// C: never

/**
 * 예제
 * 조건 1. T는 프로미스 타입이어야 한다.
 * 조건 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>;
// 기대 값: number

type PromiseB = PromiseUnpack<Promise<string>>;
// 기대 값: string
