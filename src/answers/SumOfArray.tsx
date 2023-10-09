import { SetStateAction, useState } from "react";

const SumOfArray = () => {
  const [numbers, setNumbers] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState('');

  const handleNumbersChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setNumbers(event.target.value);
  };

  const handleTargetChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setTarget(event.target.value);
  };

  const findTwoSum = () => {
    const numArray = numbers.split(',').map(Number); // Convert the input string to an array of numbers
    const targetNum = parseInt(target, 10); // Parse the target as an integer

    if (isNaN(targetNum)) {
      setResult('Please enter a valid target number.');
      return;
    }

    let left = 0;
    let right = numArray.length - 1;

    while (left < right) {
      const currentSum = numArray[left] + numArray[right];

      if (currentSum === targetNum) {
        setResult(`Indices of the two numbers: [${left + 1}, ${right + 1}], ${numArray[left]} + ${numArray[right]} = currentSum: ${currentSum}`);
        return;
      } else if (currentSum < targetNum) {
        left++;
      } else {
        right--;
      }
    }

    setResult('No solution found.');
  };

  return (
    <>
      <div className="App">
        <h1>Two Sum Finder</h1>
        <div>
          <label htmlFor="numbers">Array of Numbers (comma-separated):</label>
          <input type="text" id="numbers" value={numbers} onChange={handleNumbersChange} />
        </div>
        <div>
          <label htmlFor="target">Target Number:</label>
          <input type="text" id="target" value={target} onChange={handleTargetChange} />
        </div>
        <button onClick={findTwoSum}>Find Two Sum</button>
        <div>
          <p>{result}</p>
        </div>
      </div>
    </>
  )
}

export default SumOfArray;