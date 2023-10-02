import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//! 사용해 document.getElementById 반환값이 null이 아님을 단언
//const root = ReactDOM.createRoot(document.getElementById('root')!); 
// or 더 직관적으로
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

