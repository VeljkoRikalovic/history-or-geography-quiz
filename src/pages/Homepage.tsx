import Title from "../components/Title";
import { restart } from "../data/QuizSlice";
import { useQuizDipatch } from "../hooks/hooks";
import { useNavigate } from "react-router-dom";

function Homepage(): JSX.Element {
  const navigate = useNavigate();
  const dispath = useQuizDipatch();

  return (
    <div className="container">
      <div className="geography_container">
        <button
          className="button geo"
          onClick={() => {
            dispath(restart());
            navigate("/geography");
          }}
        >
          Geography
        </button>
      </div>
      <Title />
      <div className="history_container">
        <button
          className="button his"
          onClick={() => {
            dispath(restart());
            navigate("/history");
          }}
        >
          History
        </button>
      </div>
    </div>
  );
}

export default Homepage;
