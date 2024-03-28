import { useSelector } from "react-redux";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  const data = useSelector((state) => state);
  console.log("??????????????app", data);
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
