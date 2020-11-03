import React,{useState} from "react"
import './App.css';

var name = "Minion >>>>";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
     <h2>{name} {count}</h2>
    <button onClick={()=>setCount(count + 1)}>+</button>
    <button onClick={()=>setCount(count - 1)}>-</button>
    <button onClick={()=>setCount(0)}>0</button>
    </div>
  );
}

export default App;
