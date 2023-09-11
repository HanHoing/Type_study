/**
 * 제네릭 클래스
 */
class NumberList {
    //생성자
    constructor(private list:number[]) {}

    //요소 추가
    push(data: number){
        this.list.push(data);
    }

    //요소 제거
    pop(){
        return this.list.pop();
    }

    //모든 값 출력
    print(){
        console.log(this.list);
    }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();   //[1,2]
numberList.push(4); //[1,2,4]
numberList.print(); //console.log([1, 2, 4])

/**
 * 제네릭 클래스로 변경
 */
class List<T> {
    //생성자
    constructor(private list: T[]) {}

    //요소 추가
    push(data: T){
        this.list.push(data);
    }

    //요소 제거
    pop(){
        return this.list.pop();
    }

    //모든 값 출력
    print(){
        console.log(this.list);
    }
}

const stringList = new List(['1', '2', '3']);  //인터페이스와 타입별칭과 다르게 타입 선언 안해줘도 됨!!!!!!!!
stringList.pop();      //[1,2]
stringList.push('hi');  //[1,2,hi]
stringList.print();    //console.log([1, 2, hi])

