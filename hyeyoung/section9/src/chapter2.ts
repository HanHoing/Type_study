/**
 * infer (inference 추론)
 * 조건부 타입에서 특정 타입 추론
 */

type FuncA = () => string;  

type FuncB = () => number;

//func타입에 반환값만 해당하는 타입 가져오기
type ReturnType<T> = T extends () => string ? string : never;

type S = ReturnType<FuncA>;  //string

type A = ReturnType<FuncA>;  //string

type B = ReturnType<FuncB>;  //never


//함수 타입의 반환값 타입을 원함 -> B가 number이길 원했음 -> infer 이용
//조건식을 참이 되도록 만들 수 있는 최적의 R 타입을 추론
type ReturnType2<T> = T extends () => infer R ? R : never;

type C = ReturnType2<FuncB>;  //number  R이 number로 추론됨

type D = ReturnType2<number>;  //R추론 불가  -> never

 /**
  * Ex. Promise의 결과값 타입만 떼어오기
  * 조건
  * 1. T는 프로미스 타입이어야 한다.
  * 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
  */
 type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

 type PromiseA = PromiseUnpack<Promise<number>>;
 //number

type PromiseB = PromiseUnpack<Promise<string>>;
//string 



