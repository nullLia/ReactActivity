import { useState } from 'react';
import './value.css';

function Value() {
    const [count, setCount] = useState(0);

    function handleIncrement() {
      setCount(count + 1);
    }
  
    function handleReset() {
      setCount(0);
    }
  
    function handleDecrement() {
      if (count > 0) {
        setCount(count - 1);
      }
    }

  return (
    <div>
    <h1>The Number: {count}</h1>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleDecrement}>Decrement</button>
    <br />
    <br />
    </div>
  );
}   

export default Value;