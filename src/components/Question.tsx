import { shuffle, useQuizDipatch, useQuizSelector } from "../hooks/hooks";
import { nextQuestion, userAnswer, finishQuiz } from "../data/QuizSlice";
import Progress from "./Progress";
import { geoInfoProps } from "./Quiz";
import { useMemo } from "react";
import ErrorPage from "../pages/ErrorPage";

function Question(): JSX.Element {
  const { index, data, userGuess, answer, numOfQuestions } = useQuizSelector(
    (state) => state.quiz
  );
  const dispatch = useQuizDipatch();
  const hasAnswered = userGuess !== null;

  const allAnswers = data?.map((e) => [
    e.correct_answer,
    ...e.incorrect_answers,
  ]);
  const shuffledAnswers = useMemo(() => allAnswers?.map((e) => shuffle(e)), []);

  function handleNextQuestion() {
    dispatch(nextQuestion());
    dispatch(finishQuiz());
  }

  if (data?.length === 0) return <ErrorPage message="Something went wrong!" />;

  return (
    <ul className="quiz">
      <Progress />
      {data?.map((el: geoInfoProps, i: number) => {
        if (index === i)
          return (
            <li key={i}>
              <h2>{el.question.replace("&quot;", "").replace("&quot;", "")}</h2>
              <div className="answer">
                {shuffledAnswers![index].map((e, i) => {
                  return (
                    <button
                      onClick={() => {
                        dispatch(userAnswer(e));
                      }}
                      key={i}
                      className="btn-answer"
                      disabled={hasAnswered}
                    >
                      <span>{e}</span>
                      {hasAnswered && (
                        <span>
                          {hasAnswered
                            ? e === answer![index]
                              ? "✅"
                              : "❌"
                            : ""}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <button
                disabled={!userGuess}
                className="primary"
                onClick={handleNextQuestion}
              >
                {i < numOfQuestions - 1 ? "next question" : "finish quiz"}
              </button>
            </li>
          );
      })}
    </ul>
  );
}

export default Question;
