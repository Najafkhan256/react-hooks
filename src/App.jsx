import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [Input, setInput] = useState("");
  const [count, setCount] = useState(0);

  /* The `useEffect` hook in React is used to perform side effects in functional components. In this
case, the `useEffect` hook is being used to update the document title whenever the `Input` state
changes. */
  useEffect(() => {
    // document.title = "updated title";
    // document.title = Input;
    // console.log("useEffect");

    const incrementer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(incrementer);
  }, []);

  return (
    <>
      <h2 onClick={() => setCount((prevCount) => prevCount + 1)}>
        useState + useEffect Hook {count}
      </h2>
      <h3>{Input}</h3>
      <input
        type="search"
        name="search"
        placeholder="Search here..."
        value={Input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

export default App;
