import { useNavigate } from "react-router-dom";
import { setDifficulty, setNumOfQuestions } from "../data/QuizSlice";
import { useQuizDipatch, useQuizSelector } from "../hooks/hooks";

type props = {
  setDispay: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

function Settings({ setDispay }: props) {
  const navigate = useNavigate();
  const dispatch = useQuizDipatch();
  const { difficulty, numOfQuestions } = useQuizSelector((store) => store.quiz);

  return (
    <div className="settings">
      <div className="difficulty">
        <label>Choose difficulty</label>
        <select
          name="difficulty"
          defaultValue={difficulty}
          onChange={(e) => dispatch(setDifficulty(e.target.value))}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className="numOfQuestions">
        <label>Choose number of questions(5-50)</label>
        <input
          onChange={(e) => dispatch(setNumOfQuestions(Number(e.target.value)))}
          type="number"
          id="questions"
          min={5}
          max={50}
          defaultValue={numOfQuestions}
        />
      </div>
      <button
        onClick={() => {
          setDispay(true);
        }}
        className="primary"
        disabled={numOfQuestions < 5 || numOfQuestions > 50}
      >
        Start quiz!
      </button>
      <button onClick={() => navigate(-1)} className="btn-back">
        Go back
      </button>
    </div>
  );
}

export default Settings;
