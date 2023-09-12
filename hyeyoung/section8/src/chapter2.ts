/**
 * keyof 연산자
 * - 객체 타입에 적용
 * - 객체 타입의 프로퍼티의 키들을 유니온 타입으로 만들어줌
 */

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person : Person,  key: keyof Person) {  
    //key: string 할당시 오류! => 모든 key의 값이 Person에 있지 않음
    // 방법1: key: "name" | "age" => 비효율적
    // 방법2: key: keyof Person  => "name" | "age"이 됨
    return person[key];
}

const person : Person = {
    name: "한혜영",
    age: 25 ,
};

getPropertyKey(person, "name"); //한혜영


/**
 * keyof + typeof  연산자
 */
type Person2 = typeof person2;

// type Person2 = {
//     name: string;
//     age: number;
// }  추론됨

const person2 = {
    name: "한혜영",
    age: 25 ,
};

function getPropertyKey2(person : Person,  key: keyof typeof person2) {  
    return person[key];
}