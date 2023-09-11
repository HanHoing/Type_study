/**
 * 1. 제네릭 인터페이스와 제네릭 타입 별칭
 */
//제네릭 인터페이스는 타입 변수의 타입 직접 할당 필수
let keyPair = {
    key: "key",
    value: 0,
};
let keyPair2 = {
    key: true,
    value: ["1", "2"],
};
let numberMap1 = {
    key: -1231,
    key2: 123123,
};
let stringMap = {
    key: "value",
};
let booleanMap = {
    key: true,
};
let stringMap2 = {
    key: "hello",
};
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
function goToSchoole(user) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`); //학생 유저
}
const developerUser = {
    name: "별",
    profile: {
        type: "developer",
        skill: "Ts",
    },
};
const studentUser = {
    name: "달",
    profile: {
        type: "student",
        school: "대학교",
    },
};
export {};
// goToSchoole(developerUser); //정상 오류 처리됨! -> 타입 좁히기 사용하지 않아도 됨
