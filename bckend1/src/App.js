import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [word, setWord] = useState();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/%22")
      .then((res) => {
        console.log(res.data);
        setWord(res.data.result[0].name);
      })
      .catch((err) => console.log(err));
  }, []);
  const sum = () => {
    let str = `http://localhost:8080/add?a=${a}&b=${b}`;
    axios
      .get(str)
      .then((res) => {
        console.log(res.data);
        setResult(res.data.value);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type={"text"} value={a} onChange={(e) => setA(e.target.value)} />
      <input type={"text"} value={b} onChange={(e) => setB(e.target.value)} />
      <button onClick={sum}>Add</button>
      <span>Result: {result}</span>
      <br />
      {word}
    </div>
  );
}

export default App;
