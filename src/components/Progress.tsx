import { useQuizSelector } from "../hooks/hooks";

function Progress(): JSX.Element {
  const { index, points, numOfQuestions } = useQuizSelector(
    (state) => state.quiz
  );

  return (
    <header className="progress">
      <progress max={numOfQuestions} value={index + 1}></progress>
      <p>
        <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {numOfQuestions * 10}
      </p>
    </header>
  );
}

export default Progress;
