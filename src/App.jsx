import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";

function App() {
  const hookRef = useRef();

  useEffect(() => {
    console.log(hookRef.current.offsetHeight);
  }, []);

  return (
    <>
      <h2 ref={hookRef}>useRef Hook</h2>
    </>
  );
}

export default App;
