import { useNavigate } from "react-router-dom";
import { restart } from "../data/QuizSlice";
import { useQuizDipatch, useQuizSelector } from "../hooks/hooks";

function FinishScreen(): JSX.Element {
  const { points, numOfQuestions } = useQuizSelector((state) => state.quiz);
  const dispatch = useQuizDipatch();
  const navigate = useNavigate();

  const percentage = (points / (numOfQuestions * 10)) * 100;
  let score;
  if (percentage === 100) score = "Congratulations";
  if (percentage >= 80 && percentage < 100) score = "So close!";
  if (percentage >= 50 && percentage < 80) score = "Nice effort!";
  if (percentage >= 0 && percentage < 50) score = "You have some work to do!";
  if (percentage === 0) score = "Disappointing!";

  return (
    <div className="finish_screen">
      <p className="score">
        <span>{score}</span>
        <br /> You scored <strong>{points}</strong> out of {numOfQuestions * 10}{" "}
        points ({Math.ceil(percentage)}%)
      </p>
      <button
        onClick={() => {
          navigate("/");
          dispatch(restart());
        }}
        className="primary"
      >
        Try again!
      </button>
    </div>
  );
}

export default FinishScreen;
