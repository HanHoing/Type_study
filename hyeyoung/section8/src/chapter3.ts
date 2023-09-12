/**
 * 맵드 타입
 * - 객체 타입에 사용
 */
interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    //[key정의]: key들의 value타입 정의
    // ? => 모든 프로퍼티가 선택적 프로퍼티가 됨
    [key in 'id' | 'name' | 'age']?: User[key];
}; //비효율적 -> 맵드 타입 사용

//User 프로퍼티들 boolean타입으로 변경
type BooleanUser = {
    //[key in 'id' | 'name' | 'age']: boolean;
    [key in keyof User]: boolean;
};

//읽기 전용
type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}

//한명의 유저 정보를 불러오는 기능 
function fetchUser(): User {
    //...기능
    return {
        id: 1, 
        name: "한혜영",
        age: 25,
    };
}

//한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {
    //... 수정하는 기능
}

updateUser({
    id:1, 
    name: "한혜영",  //id, name: 기존값 -> 보낼 이유가 있나?
    age: 25,
})
