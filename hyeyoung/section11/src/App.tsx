import { useState, useRef, useEffect } from 'react';
import './App.css';
import Editor from './components/Editor';

interface Todo {
  id: number;
  content: string;
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  //컨텐트 추가시마다 id 바뀌도록
  const idRef = useRef(0);

  const onClickAdd = (text:string) => {
    setTodos([
        ...todos,
        {
            id: idRef.current++,
            content: text,
        }
    ]);
  }

  useEffect(()=>{
    console.log(todos);
  }, [todos]);


  return (
  <div className="App">
    <h1>Todo</h1> 
      <Editor onClickAdd={onClickAdd}>
        <div>chihld</div>
      </Editor> 
  </div>);
}

export default App;
