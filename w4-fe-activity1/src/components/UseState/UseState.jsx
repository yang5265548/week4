import './UseState.css';
import { useState } from 'react';

const UseState = () => {
  const [theme, setTheme] = useState('light');
  let [count,setCount]=useState(0);


  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      {/* <button onClick={()=>setTheme('dark')}>Dark</button>
      <button onClick={()=>setTheme('light')}>Light</button> */}

      <button onClick={()=>setTheme(theme==='light'?'dark':"light")}>Toggle Theme </button>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>
        Increment
      </button>
      <button onClick={()=>setCount(count-1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
