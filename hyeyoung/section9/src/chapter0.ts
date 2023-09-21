/**
 * 조건부 타입 
 * - 조건에 딸라 타입 결정
 */

//1. number type이 string 타입을 확장하고 있다면 string 아니면 number
type A = number extends string? string : number; // number

//2. 객체 type
type ObjA = {
    a: number;
};

type ObjB = {
    a: number;
    b: number;
};

type B = ObjB extends ObjA ? number : string;  // number

/**
 * 제네릭과 조건부 타입
 * T = number -> string 
 * T = string -> number 
 */
type StringNumberSwitch <T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>; //string
let varB : StringNumberSwitch<string>; //number;


/**
 * 공백문자 제거 함수함수 
 * 만약 text: string | undefined | null 일시 오류 -> 타입 좁히기 사용
 * -> 반환값이 null이라면 result.toUpperCase(); 문자열 메소드 사용 불가
 * -> 조건부 타입 이용 (+제네릭)  -> any단언 사용 -> 함수 오버로딩 추가 any보완
 */
//오버로드 시그니쳐
function removeSpace<T>(text: T) : T extends string ? string : undefined;
function removeSpace<T>(text: any) {
   if(typeof text === "string"){
    return text.replaceAll(" ","");
   } else {
    return undefined;
   }
}

let result = removeSpace("hi im hoing"); //string type
result.toUpperCase();



