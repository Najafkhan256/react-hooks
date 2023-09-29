import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Contact = () => {
  console.log("render contact");
  return <h2>Contact</h2>;
};

function App() {
  const [count, setCount] = useState(0);
  // 1- useState takes two paramaters first-one is variable and second-one is function
  // 2- using this when we clicked on button its re-render the Contact component as well

  /**
   * The Increment function uses the setCount hook to increment the count state variable by 1 three
   * times.
   */
  function Increment() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <h2>useState</h2>
      <h3>{count}</h3>
      <Contact />
      <button onClick={Increment}>Increment</button>
    </>
  );
}

export default App;
