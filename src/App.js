import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./actions/todo.action";
import DragnDrop from "./components/DragnDrop/DragnDrop";
import { Touchable } from "./components/Touchable/Touchable";

/**
 *
 * App component gets data from json-placeholder api (todos)
 * @return JSX.Element
 */

const codes = [
  "let a = 5, b=10;\nfunction sum(a,b){\nreturn a+b;\n};\nsum(a,b)",
  "const a=10;\nconsole.log(10)",
  "function isOdd(n){\nif(n%2){\nreturn 'Yes';\n}\nelse{\nreturn 'No';\n};\n}\nisOdd(5);",
];
function App() {
  const dispatch = useDispatch();
  const [showText, setShowText] = useState("Hover Me");
  const { data: todos } = useSelector((state) => state.todos);
  const [JsCode, setJSCode] = useState(
    codes[Math.floor(Math.random() * codes.length)]
  );
  useEffect(() => {
    dispatch(getTodos("https://jsonplaceholder.typicode.com/todos"));
  }, [dispatch]);

  /**
   * On Hover
   * @param {Event} e
   */
  const onHover = (e) => {
    const code = JsCode.replace(/\n/g, "").replaceAll("console.log", "");
    const ans = eval(code);
    setShowText("Compiling!!");
    if (ans) {
      window.timeout = setTimeout(function () {
        setShowText(ans);
      }, 1000);
    }
  };

  /**
   * On Hover Out
   * @param {Event} e
   */
  const onHoverOut = (e) => {
    clearTimeout(window.timeout);
    setShowText("Hover");
  };

  /**
   * Filter Todo for userId == 1 only
   */
  const shoppingTodo = todos?.filter((todo) => todo.userId === 1);
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Write simple JS code</h3>
      <textarea
        style={{ width: "80%", height: 100, margin: "auto" }}
        placeholder="Enter JS code to show result in alert"
        value={JsCode}
        onChange={(e) => setJSCode(e.target.value)}
      ></textarea>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Touchable text={showText} onHover={onHover} onHoverOut={onHoverOut} />
      </div>
      <DragnDrop todos={shoppingTodo || []} />
    </div>
  );
}

export default App;
