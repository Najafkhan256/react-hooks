import { createContext, useContext, useReducer, useState } from "react";
import "./App.css";

const initialState = { backgroundColor: "#cecece" };

const reducer = (state, action) => {
  switch (action) {
    case "black": {
      return { backgroundColor: "#000" };
    }
    case "red": {
      return { backgroundColor: "#f00" };
    }
    default: {
      return { backgroundColor: "initial" };
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2
        style={{ backgroundColor: state.backgroundColor, padding: "40px 20px" }}
      >
        useContext Hook
      </h2>

      <button onClick={() => dispatch("red")}>
        Change Background into red
      </button>
      <button onClick={() => dispatch("black")}>
        Change Background into Black
      </button>
    </>
  );
}

export default App;
