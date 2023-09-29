import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";

function App() {
  const [Input, setInput] = useState("");
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   function test() {
  //     if (count === 0) {
  //       setCount(Math.random() * 200);
  //     }
  //   }
  //   test();
  // }, [count]);

  useLayoutEffect(() => {
    function test() {
      if (count === 0) {
        setCount(Math.random() * 200);
      }
    }
    test();
  }, [count]);

  return (
    <>
      <h2 onClick={() => setCount(0)}>useLayoutEffect Hook {count}</h2>
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
