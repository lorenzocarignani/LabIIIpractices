import React, { useRef } from "react";
import ScoreBoard2 from "./components/scoreBoard2/ScoreBoard2";

const AppScoreBoard = () => {
  const maxScore = useRef(0);
  return (
    <div>
      <ScoreBoard2 maxScore={maxScore} />
    </div>
  );
};

export default AppScoreBoard;
