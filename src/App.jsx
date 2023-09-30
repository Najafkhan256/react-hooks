import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const expenseCalculation = () => {
    return Math.random() * 1000;
  };

  // const renderCalculationValue = useMemo(() => expenseCalculation(), []);
  const renderCalculationValue = useMemo(() => expenseCalculation(), [count]);

  return (
    <>
      <h2>useMemo Hook</h2>
      <h3>{renderCalculationValue}</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Change expense
      </button>
    </>
  );
}

export default App;
