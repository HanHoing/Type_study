/**
 * 1. map
 */
//사용법
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2, 4, 6]
//사용자 정의 map
function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
map(arr, (it) => it * 2); //it: number
map(['hi', 'hello'], (it) => it.toUpperCase()); //it: string
// map(['hi','hello'], (it) => parseInt(it));      //오류!! string 타입에 number 메소드 불가  -> but return 형 타입이 하나로 정의되선 안됨
//모든 타입 return 사용자 정의 map
function map2(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
map2(['hi', 'hello'], (it) => parseInt(it)); //정상처리  
/**
 * 2. forEach
 */
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it)); //배열 순회
//2-1. 사용자 정의 forEach
function forEach(arr, callback) {
    // for (let i = 0; < arr.length; i++) {
    //   callback(arr[i]);   
    // }
}
//호출
// forEach(arr2, (it)=> {console.log(it.toFixed())}); //현재 it: unknown 
//2-2. 사용자 정의 forEach 제네릭 수정
function forEach2(arr, callback) {
    // for (let i = 0; < arr.length; i++) {
    //   callback(arr[i]);   
    // }
}
//호출
forEach2(['123', '456'], (it) => { it; }); // it: string 
export {};
