import React, { useState, useRef, useEffect, useReducer } from 'react';
import './App.css';
import Editor from './components/Editor';
import {Todo} from "./types";
import TodoItem from './components/TodoItem';

type Action = 
| {
  type: "CREATE",
  data: {
    id : number;
    content : string;
  };
 }
| {type: "DELETE"; id: number};

function reducer(state: Todo[], action: Action) {
  switch(action.type){
    case 'CREATE':{
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

export const TodoStateContext = React.createContext(null);

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  //컨텐트 추가시마다 id 바뀌도록
  const idRef = useRef(0);

  //추가 기능
  const onClickAdd = (text:string) => {

    dispatch({
      type: "CREATE",
      data:{
        id: idRef.current++,
        content: text,
      }
    })

  }

  //삭제 기능
  const onClickDelete = (id: number) => {
    // setTodos(todos.filter((todo=>todo.id !== id))); 

    dispatch({
      type: "DELETE",
      id: id,
    }); 
  };
 
  useEffect(()=>{
    console.log(todos);
  }, [todos]);


  return (
  <div className="App">
    <h1>Todo</h1> 
      <Editor onClickAdd={onClickAdd}>
        <div>chihld</div>
      </Editor> 
      <div>
        {todos.map((todo)=>(
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />  
        ))}
      </div>
  </div>);
}

export default App;
