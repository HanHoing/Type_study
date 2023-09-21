/**
 * 분산적인 조건부 타입 
 * 조건부 타입 + union 타입 -> 분산적으로 동작
 */

type StringNumberSwitch<T> = T extends number ? string : number;

//참고! 분산타입 적용 방지
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

//Ex 1
let c: StringNumberSwitch<number | string>;  //string | number -> 분산적 조건부 타입
/**
 * number 과 string이 분산되어 T에 할당됨
 * -> StringNumberSwitch<number>       //string
 *   | StringNumberSwitch<string>       //number 
 * ->  string | number
 */

//Ex 2 
let d : StringNumberSwitch<boolean | number | string>;  //string 
/**
 * ->  StringNumberSwitch<boolean>      //number
 *   | StringNumberSwitch<number>       //string
 *   | StringNumberSwitch<string>       //number 
 * ->  string | number
 */


//Ex 3 
//U에 해당하는 타입만 제거
type Exclude<T, U> = T extends U ? never : T; //T가 U의 서브타입이라면 never

type A = Exclude<number | string | boolean, string>
/**
 * Exclude<number, string>          //number
 * | Exclude<string, string>        //never
 * | Exclude<boolean, string>       //boolean
 * -> number | never | boolean      //never은 공집합 타입 -> 원본 집합이라 사라짐
 * -> number | boolean
 */


//Ex 4 
//U에 해당하는 타입만 뽑아내기
type Extract<T, U> = T extends U? T: never;
type B = Extract<number | string | boolean, string>;
/**
 * Extract<number, string>          //never
 * | Extract<string, string>        //string
 * | Extract<boolean, string>       //never
 * -> never | string | never      //never은 공집합 타입 -> 원본 집합이라 사라짐
 * -> never | string
 */



