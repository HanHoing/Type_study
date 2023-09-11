/**
 * 프로미스 (Promise) 객체
 * - 비동기 처리 코드 예시
 */
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20); //Promise자동 추론 불가 -> Promise<number>로 할당
        reject('~떄문에 실패');
    }, 3000);
});
promise.then((response) => {
    console.log(response * 10); //response: unknown (모든 연산 불가)
});
promise.catch((err) => {
    if (typeof err === "string") {
        console.log(err);
    }
});
//3초뒤 게시글 불러오기
function fetchPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "게시글 제목",
                content: "게시글 컨텐츠",
            });
        }, 3000);
    });
}
const postRequest = fetchPost();
postRequest.then((post) => {
    post.id; //타입 변수 할당하지 않을시 unknown타입 -> Promise<Post>로 해결 
});
export {};
