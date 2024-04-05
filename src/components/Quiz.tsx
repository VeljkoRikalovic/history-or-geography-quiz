import { useQuizDipatch, useQuizSelector } from "../hooks/hooks";
import { gettingData, getQuizData, rightAnswer } from "../data/QuizSlice";
import { useEffect } from "react";
import Question from "./Question";
import Spinner from "./Spinner";
import FinishScreen from "./FinishScreen";

export type geoInfoProps = {
  category: string;
  difficulty: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

type props = {
  api: string;
};

function Quiz({ api }: props) {
  const { status, data } = useQuizSelector((state) => state.quiz);
  const dispatch = useQuizDipatch();

  useEffect(
    function () {
      async function getData() {
        try {
          dispatch(gettingData());
          const res = await fetch(api);
          if (!res.ok) throw new Error("Something went wrong");
          const dataOne = await res.json();
          dispatch(getQuizData(dataOne.results));
        } catch {
          throw new Error("Something went wrong");
        }
      }
      getData();
    },
    [api, dispatch]
  );

  useEffect(() => {
    const correctAnswers = data?.map((e) => e.correct_answer);
    dispatch(rightAnswer(correctAnswers));
  }, [data, dispatch]);

  return (
    <div className="question">
      {status === "loading" && <Spinner />}
      {status === "ready" && <Question />}
      {status === "finish" && <FinishScreen />}
    </div>
  );
}

export default Quiz;
