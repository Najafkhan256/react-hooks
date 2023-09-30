import { useMemo, useState } from "react";
import "./App.css";
import Multiplier from "./Multiplier";

function App() {
  const [count, setCount] = useState(0);

  const expenseCalculation = () => {
    return Math.random() * 1000;
  };

  // const handleMultiplier = () => {
  //   setCount((prevCount) => prevCount * 2);
  // };

  const handleMultiplier = useMemo(() => {
    return function () {
      setCount((prevCount) => prevCount * 2);
    };
  }, []);

  // const renderCalculationValue = useMemo(() => expenseCalculation(), []);
  const renderCalculationValue = useMemo(() => expenseCalculation(), [count]);

  return (
    <>
      <h2>useMemo Hook</h2>
      <h3>{Math.ceil(renderCalculationValue)}</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Change expense
      </button>
      <Multiplier handleClick={handleMultiplier} />
    </>
  );
}

export default App;
