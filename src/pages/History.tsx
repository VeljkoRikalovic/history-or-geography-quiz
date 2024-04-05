import { useState } from "react";
import Quiz from "../components/Quiz";
import { useQuizSelector } from "../hooks/hooks";
import Settings from "../components/Settings";

function History(): JSX.Element {
  const { difficulty, numOfQuestions } = useQuizSelector((store) => store.quiz);
  const [display, setDisplay] = useState(false);

  const api = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=23&difficulty=${difficulty}&type=multiple`;

  return (
    <div className="history">
      {!display && <Settings setDispay={setDisplay} />}
      {display && <Quiz api={api} />}
    </div>
  );
}

export default History;
