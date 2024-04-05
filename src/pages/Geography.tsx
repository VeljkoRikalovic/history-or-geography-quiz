import { useState } from "react";
import Quiz from "../components/Quiz";
import { useQuizSelector } from "../hooks/hooks";
import Settings from "../components/Settings";

/* const api =
  "https://the-trivia-api.com/api/questions?categories=geography&limit=10&region=RS&difficulty=easy"; */

function Geography(): JSX.Element {
  const { difficulty, numOfQuestions } = useQuizSelector((store) => store.quiz);
  const [display, setDisplay] = useState(false);

  const api = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=22&difficulty=${difficulty}&type=multiple`;

  return (
    <div className="geography">
      {!display && <Settings setDispay={setDisplay} />}
      {display && <Quiz api={api} />}
    </div>
  );
}

export default Geography;
