import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();
  const [operation, setOperation] = useState('+');

  function handleNum1(e) {
    setNum1(parseFloat(e.target.value) || 0);
  }

  function handleNum2(e) {
    setNum2(parseFloat(e.target.value) || 0);
  }

  function handleOperation(e) {
    setOperation(e.target.value);
  }

  function handleCalculate() {
    if (operation === '+') {
      setResult(num1 + num2);
    } else if (operation === '-') {
      setResult(num1 - num2);
    } else if (operation === '*') {
      setResult(num1 * num2);
    } else if (operation === '/') {
      setResult(num1 / num2);
    }
  }

  return (
    <>
    <div style={{ textAlign: "center", padding: "20px" }}>
    <h1>Calculator</h1>
      <input type="number" value={num1} onChange={handleNum1} />
      <select value={operation} onChange={handleOperation}>
        <option value="+" >+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={handleNum2} />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      <h3>Result: {result}</h3>
    </div>
    </>
  );
}

export default Calculator;