import { useRef } from "react";
import "./App.css";
import ScoreBoard from "./components/scoreBoard/ScoreBoard";

function App() {
  const maxScore = useRef(0);
  return (
    <div className="App">
      <ScoreBoard maxScore={maxScore} />
    </div>
  );
}

export default App;
