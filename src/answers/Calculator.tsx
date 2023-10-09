import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [total, setTotal] = useState('');

  const handleAddition = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setTotal(result.toString());
  }

  return (
    <>
      <h1> Simple App </h1>
      <input
          type="number"
          placeholder="Enter number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div>
            <button onClick={handleAddition}>Add</button>
        </div>
        {total !== '' && (
        <div>
          <p>Total: {total}</p>
        </div>
      )}
    </>
  )
}

export default Calculator;

