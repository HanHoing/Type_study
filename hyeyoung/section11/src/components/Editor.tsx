import { ReactElement, useState } from 'react';

interface Props {
    onClickAdd: (text: string) => void;
    children: ReactElement;  //참고! child 전달시 필요
}

export default function Editor(props: Props) {
    
    const [text, setText] = useState(""); 
    // useState에 전달한 변수에 따라 text, setText 자동 추론됨 
    // useState => 제네릭 함수

    //미리 정의된 이벤트 객체 타입 불러와 타입 정의 해야함
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value)
    };
      
    const onClickButton = () => {
        props.onClickAdd(text);
        setText("");
    }

    return <div>
        <input value={text} onChange={onChangeInput}></input>
        <button onClick={onClickButton}>추가</button>
    </div>
}