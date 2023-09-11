/**
 * 1. 제네릭 인터페이스와 제네릭 타입 별칭
 */

interface KeyPair<K, V>{
    key: K;
    value: V;
}

//제네릭 인터페이스는 타입 변수의 타입 직접 할당 필수
let keyPair : KeyPair<string, number> = {
    key: "key",
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key : true,
    value: ["1", "2"],
};

/**
 * 2. 인덱스 시그니쳐 
 * 인터페이스 key value 타입의 규칙 설정
 */
interface NumberMap {
    [ket: string]: number;
}

let numberMap1 : NumberMap = {
    key: -1231,
    key2: 123123,
};

//인덱스 시그니쳐 + 제네릭 사용 
interface Map<V> {
    [key:string]: V;
}

let stringMap: Map<string> = {
    key: "value",
};

let booleanMap: Map<boolean> = {
    key: true,
};


/**
 * 3. 제네릭 타입 별칭
 */
type Map2<V> = {
    [key: string]: V;
};

let stringMap2 : Map2<string> = {
    key: "hello",
};

/**
 * 4. 제네릭 인터페이스 활용 예시
 * -> 유저 관리 
 * -> 유저 구분 : 학생 / 개발자
 */
interface Student {
    type: "student";    //서로소
    school: string;
}

interface Developer {
    type: "developer";  //서로소
    skill: string;
}

// interface User {
//     name: string;
//     profile: Student | Developer;
// }

interface User<T> {
    name: string;
    profile: T;
}

// function goToSchoole(user: User) {
//     //타입 좁히기
//     if(user.profile.type !== 'student'){
//         console.log("잘 못 오셨습니다.");  //개발자 유저
//         return;
//     }

//     const school = user.profile.school;
//     console.log(`${school}로 등교 완료`); //학생 유저
// }


// const developerUser : User = {
//     name: "별", 
//     profile: {
//         type: "developer",
//         skill: "Ts",
//     },
// };

// const studentUser : User = {
//     name: "달", 
//     profile: {
//         type: "student",
//         school: "대학교",
//     },
// };

function goToSchoole(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`); //학생 유저
}

const developerUser : User<Developer> = {
    name: "별", 
    profile: {
        type: "developer",
        skill: "Ts",
    },
};

const studentUser : User<Student> = {
    name: "달", 
    profile: {
        type: "student",
        school: "대학교",
    },
};

// goToSchoole(developerUser); //정상 오류 처리됨! -> 타입 좁히기 사용하지 않아도 됨