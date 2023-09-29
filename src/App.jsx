/**
 * The above code is a React application that uses the useContext hook to create a counter with
 * increment and decrement functionality.
 * @returns The App component is returning the CounterProvider component, which wraps the
 * IncrementCounter and DecrementCounter components.
 */
import { createContext, useContext, useState } from "react";
import "./App.css";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  const contextValue = {
    count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

const IncrementCounter = () => {
  const { count, increment } = useContext(CounterContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const DecrementCounter = () => {
  const { count, decrement } = useContext(CounterContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

function App() {
  return (
    <CounterProvider>
      <h2>useContext Hook</h2>
      <IncrementCounter />
      <DecrementCounter />
    </CounterProvider>
  );
}

export default App;
