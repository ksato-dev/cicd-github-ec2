import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input type="text" onChange={(e) => setText(e.target.value)}></input>
      <button onClick={() => {console.log(text)}}>hoge</button>
    </div>
  );
}

export default App;
