import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('Add');
  const [results, setResults] = useState([]);

  const handleAction = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (isNaN(n1) || isNaN(n2)) return alert("Please enter valid numbers");

    let res;
    if (operation === 'Add') res = n1 + n2;
    else if (operation === 'Subtract') res = n1 - n2;
    else if (operation === 'Multiply') res = n1 * n2;

    // Append the new result to the existing results list
    setResults([...results, `${operation}: ${n1} and ${n2} = ${res}`]);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
      
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="Add">Add</option>
        <option value="Subtract">Subtract</option>
        <option value="Multiply">Multiply</option>
      </select>

      <button onClick={handleAction}>Perform Action</button>

      <h4>History of Results:</h4>
      <ul>
        {results.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;
