/**
 * 1.맵드타입 기반 유틸리티 타입
 * - Partial<T>, Required<T>, Readonly<T>
 */

//1. Partial<T>  부분적인, 일부분 -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 바꿔주는 타입
interface Post {
    title : string;
    tags : string[];
    content: string;
    thumbnailURL?: string;
}

//직접 구현
//특정 객체타입을 새로운 객체 타입으로 변환 -> 맵드타입 이용
type Partial<T> = {
    [key in keyof T]? : T[key];  //keyof : 모든 프로퍼티를 유니온 타입으로
};


//초안 게시물을 선택적 프로퍼티로 변경
const draft: Partial <Post> = {
    title: "제목",
    content: "초안...",
}


//2. Required<T> 필수의, 필수적인 -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿈
//썸네일이 반드시 포함된 게시물 생성
type Required<T> = {
    [key in keyof T]-?: T[key];  //? 빼기
};

const withThumbnailPost : Required<Post> = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL : "https://...",  //필수프로퍼티로 변경됨 -> 주석처리시 오류!
}


//3. ReadOnly<T> -> 읽기 전용
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
};

const readOnlyPost : Readonly<Post> = {
    title: "보호된 게시글입니다.",
    tags: [],
    content: "",
};

//readOnlyPost.content = ""; //오류! 변경 불가










