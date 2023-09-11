/**
 * 타입 변수 응용하기
 */

/**
 *  첫번째 사례 : 타입이 다른 파라미터들 받기
 */
function swap<T>(a : T, b: T){
    return [b, a]; //배열로 반환
}

// const [a, b] = swap("1", 2); //오류 -> T: string타입이 됨-> 2는 number 타입이라 오류 

//타입 변수 2개 사용
function swap2<T, U>(a : T, b: U){
    return [b, a];
}

const [a2, b2] = swap2("1", 2); //T: string, U: number


/**
 * 두번째 사례 : 어떤 타입의 배열이던 받기
 */
function returnFirstValue<T>(data: T) {  //data: unknown으로 추론 됨 
    // return data[0];     //오류! unknown에 배열 인덱스 사용 불가
}

//배열타입 사용
function returnFirstValue2<T>(data: T[]) { //data:unknown배열 타입
    return data[0];    
}

let num = returnFirstValue2([0, 1, 2]);  // number타입
let str = returnFirstValue2([1, "hello", "mynameis"]) // (number|string) 유니온 타입  -> 첫번째 요소인 number 타입으로 추론되길 바람

//튜플타입 사용 -> 특정 인덱스 요소 타입 지정 가능
function returnFirstValue3<T>(data: [T, ...unknown[]]) {   //첫번쨰 요소 이후 타입은 몰라도 됨
    return data[0];    
}

let str2 = returnFirstValue3([1, "hello", "mynameis"])  //number 타입으로 추론!


/**
 * 세번째 사례: length가 있는 타입만 받기
 */
function getLength<T>(data: T) {
    // return data.length;  //호출 전은 unknown타입
}

let var1 = getLength([1, 2, 3]);        // 3
let var2 = getLength("12345");          // 5
let var3 = getLength({ length: 10});    // 10
let var4 = getLength(10); //length가 존재하지 않지만 오류 처리 안됨!!!

//확장으로 T 제한
function getLength2<T extends {length: number}> (data: T) { //length가 number인 프로퍼티를 가지고 있어야 함
    return data.length; 
}

// let var5 = getLength2(10); //length가 존재하지 않으므로 오류!

interface interfaceA{
    length:number;
}

interface interfaceB extends interfaceA {}



