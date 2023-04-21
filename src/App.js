import logo from "./logo.svg";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/reducers/CounterSlice";

function App() {
  const stateValue = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>Counter is {stateValue.counter}</p>
      <div className="btn-class">
        <button onClick={() => dispatch({ type: increment })}>Increment</button>
        <button onClick={() => dispatch({ type: decrement })}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
