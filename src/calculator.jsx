import { useState } from 'react';
import './calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('+');

  function handleNum1(e) {
    setNum1(e.target.value);
  }

  function handleNum2(e) {
    setNum2(e.target.value);
  }

  function handleOperation(e) {
    setOperation(e.target.value);
  }

  function handleCalculate() {
    const number1 = parseFloat(num1) || 0;
    const number2 = parseFloat(num2) || 0;

    if (operation === '+') {
      setResult(number1 + number2);
    } else if (operation === '-') {
      setResult(number1 - number2);
    } else if (operation === '*') {
      setResult(number1 * number2);
    } else if (operation === '/') {
      setResult(number2 !== 0 ? number1 / number2 : 'Error');
    }
  }

  return (
    <div>
      <div>
        <h1>Calculator</h1>
        <input type="number" value={num1} onChange={handleNum1} placeholder="Enter number" />
        <select value={operation} onChange={handleOperation}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input type="number" value={num2} onChange={handleNum2} placeholder="Enter number" />
        <br />
        <button onClick={handleCalculate}>Calculate</button>
        <h3>Result: {result}</h3>
      </div>
    </div>
  );
}

export default Calculator;
