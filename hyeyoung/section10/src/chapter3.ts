/**
 * 3. 조건부 타입 기반의 유틸리티 타입 
 * - Exclude, Extract, ReturnType
 */

import { type } from "os";

//1. Exclude<T, U>  제외하다, 추방하다 -> T에서 U를 제거
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;
// 1단계 
// Exclud<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string | never
// string


//2. Extract<T, U> -> T에서 U를 추출하는 타입
type Extract<T, U> = T extends U ? T: never;

type B = Extract<string | boolean, boolean>
// 1단계 
// Exclud<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// never | boolean
// boolean



//3. ReturnType<T> -> 함수의 반환값 타입을 추출
type ReturnType<T extends (...args: any) => any> = T extends (
    ...agrs : any
    ) => infer R ? R : never;
// T에 funcA 전달  T는 () => string,  R은 string 


function funcA() {
    return "hello";
}

function funcB() {
    return 10;
}

type ReturnA = ReturnType<typeof funcA>;

type ReturnB = ReturnType<typeof funcB>;




