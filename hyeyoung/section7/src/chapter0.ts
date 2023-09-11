/** 
 * 제네릭 소개 
*/

//1. any타입으로 선언
function func(value: any) {
    return value;
}

let num = func(10); //any타입
num.toUpperCase();  //오류 알려주지 않음 


//2. unknown 타입으로 선언
function func2(value: unknown) {
    return value;
}

let num2 = func2(10); //any타입
// num2.toUpperCase();   //오류O
// num2.toFixed();       //unknown == 전체집합, 모든 메소드 사용 불가

//3. 타입 좁히기 사용 해야함 
if(typeof num2 === "number"){
    num2.toFixed(); 
}

/**
 * 4. 제네릭(포괄적) 함수 사용 
 * -> 함수의 인수에 따라 반환값 타입을 가변적으로 정해줌 
 * -> 제네릭? 모든 타입에 두루두루 범용적으로 사용할 수 있는 함수
 * <T> : 타입 변수
 */
function func3<T>(value: T): T { 
    return value;
}

let num3 = func3(10); //any타입
// num3.toUpperCase();   //오류O
num3.toFixed();       //unknown == 전체집합, 모든 메소드 사용 불가

//명시적 타입 선언
let arr = func3([1, 2, 3] as [number, number, number ]); //타입 단언 사용 
let arr2 = func3<[number, number, number]>([1, 2, 3]);    //제네릭 사용



