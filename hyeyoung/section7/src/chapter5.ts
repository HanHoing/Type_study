/**
 * 프로미스 (Promise) 객체
 * - 비동기 처리 코드 예시
 */
const promise = new Promise<number>((resolve, reject)=>{ //(성공시 호출, 실패시 호출)
    setTimeout(() => {
        resolve(20);  //Promise자동 추론 불가 -> Promise<number>로 할당
        reject('~떄문에 실패');
    }, 3000);
});

promise.then((response) => {
    console.log(response * 10); //response: unknown (모든 연산 불가)
});

promise.catch((err)=>{
    if(typeof err === "string") {
        console.log(err);
    }
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

//게시글 타입
interface Post{
    id: number;
    title: string;
    content: string;
}

//3초뒤 게시글 불러오기
function fetchPost() : Promise<Post> { //이방법으로 명시하는것 추천
    return new Promise<Post>((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠",
            });
        }, 3000);
    })
}

const postRequest = fetchPost(); 

postRequest.then((post)=>{
    post.id //타입 변수 할당하지 않을시 unknown타입 -> Promise<Post>로 해결 
})

