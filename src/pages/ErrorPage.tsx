import { useNavigate } from "react-router-dom";
import { useQuizDipatch } from "../hooks/hooks";
import { restart } from "../data/QuizSlice";

type props = {
  message: string;
};

function ErrorPage({ message }: props): JSX.Element {
  const navigate = useNavigate();
  const dispath = useQuizDipatch();

  return (
    <div className="error">
      <p>{message}</p>
      <button
        onClick={() => {
          dispath(restart());
          navigate("/");
        }}
        className="primary"
      >
        try again
      </button>
    </div>
  );
}

export default ErrorPage;
