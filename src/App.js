import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  let dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.user;
  });
  console.log("selectors" + JSON.stringify(selector));
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => dispatch({ type: "Create", payload: "jaideep" })}>
        Store
      </button>
      {selector}
    </div>
  );
}
