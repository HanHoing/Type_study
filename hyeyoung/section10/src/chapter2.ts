/**
 * 2. 맵드 타입 기반 유틸리티 타입
 *  - Pick<T,K>, Omit<T,K>, Record<V,K>
 */

//1. Pick<T, K> 뽑다,고르다  -> 객체 타입으로부터 특정 프로퍼티만 골라냄
interface Post {
    title : string;
    tags : string[];
    content: string;
    thumbnailURL?: string;
}

//구현
type Pick<T, K extends keyof T> = {  //<객체, T로 들어오는 객체 타입의 키값들을 추출한 유니온의 서브 타입만 할당 가능>
                                     // K extends 'title' | 'tags' | 'content' | 'thumbnailURL'
                                     // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailURL'  -> 참
    [key in K] : T[key];
};

const legacyPost : Pick<Post, "title" | "content"> = {  //title과 content만 있는 type으로 재정의 됨
    title: "옛날 글",
    content: "옛날 컨텐츠",
};


//2. Omit<T, K> 생략하다, 빼다 -> 객체 타입으로부터 특정 프로퍼티 제거 

//구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T,K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>  ----> Exclude< union타입 , 제거할 프로퍼티 >
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

const noTitlePost : Omit<Post, "title"> = {
    content: "",
    tags: [],
    thumbnailURL: "",
};



//3. Record<K, V>  
type Record<K extends keyof any, V> = {
    [key in K] : V
}


type Thumbnail = Record<"large" | "medium" | "small" | "watch", 
    { 
     url: string;
     size:number;
    }>;  //<키 | 키 | 키, value>
/**
 * 
 * type Thumbnail2 = {
    large: {
        url: string;
        size: number;
    };
    medium: {
        url: string;
        size: number;
    };
    small: {
        url: string;
        size: number;
    };
    watch: {
        url: string;
        size: number;
    };
    }
 */