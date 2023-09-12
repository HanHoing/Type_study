/**
 * 인덱스드 엑세스 타입
 * - 객체타입으로부터 특정 프로퍼티 타입을 뽑아 변수에 정의
 * - 객체, 배열, 튜플 사용가능
 * - 인데그를 이용해 객체에 접근
 */

/** 객체의  경우
interface Post {
    title: string;
    content: string;
    author:{
        id: number;
        name: string;
    };
}

function printAuthorInfo (author:{
    id: number;
    name: string;
}){
    console.log(`${author.name}-${author.id}`);
}

const post : Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author:{
        id: 1,
        name: "한혜영"
    },
};
*/

// ! 위 상황에서 post에 프로퍼티 추가시 모든 함수에 개발자가 직접 추가해야함
interface Post {
    title: string;
    content: string;
    author:{
        id: number;
        name: string;
    };
}

function printAuthorInfo (author:Post['author']){
    console.log(`${author.name}-${author.id}`);
}

const post : Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author:{
        id: 1,
        name: "한혜영"
    },
};

//Example2) 배열
type PostList = {
    title: string;
    content: string;
    author:{
        id: number;
        name: string;
    };
}[];

function printAuthorInfoList (author:PostList[0]['author']){
    console.log(`${author.name}-${author.id}`);
}

const postList : PostList[number] = {  // ==PostList[0]
    title: "게시글 제목",
    content: "게시글 본문",
    author:{
        id: 1,
        name: "한혜영"
    },
};

printAuthorInfoList(post.author);


//Example3) 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];  //number
type Tup1 = Tup[1];  //string
type Tup2 = Tup[2];  //boolean
type TupNum = Tup[number];  //number|string|boolean



