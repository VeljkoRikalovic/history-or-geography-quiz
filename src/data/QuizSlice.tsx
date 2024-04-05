import { createSlice } from "@reduxjs/toolkit";
import { geoInfoProps } from "../components/Quiz";

type iniStProps = {
  data: geoInfoProps[] | null;
  status: string;
  index: number;
  answer: string | null;
  userGuess: string | null;
  points: number;
  difficulty: string;
  numOfQuestions: number;
};

const initialState: iniStProps = {
  data: null,
  status: "",
  index: 0,
  answer: null,
  userGuess: null,
  points: 0,
  difficulty: "",
  numOfQuestions: 0,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    gettingData(state) {
      return {
        ...state,
        status: "loading",
      };
    },
    getQuizData(state, action) {
      return {
        ...state,
        data: action.payload,
        status: "ready",
      };
    },
    nextQuestion(state) {
      return {
        ...state,
        userGuess: null,
        index: state.index + 1,
        points: state.points,
      };
    },
    rightAnswer(state, action) {
      return {
        ...state,
        answer: action.payload,
      };
    },
    userAnswer(state, action) {
      return {
        ...state,
        userGuess: action.payload,
        points: state.answer?.includes(action.payload)
          ? state.points + 10
          : state.points,
      };
    },
    finishQuiz(state) {
      return {
        ...state,
        status: state.index > state.numOfQuestions - 1 ? "finish" : "ready",
      };
    },
    restart(state) {
      return {
        ...state,
        status: "",
        index: 0,
        answer: null,
        userGuess: null,
        points: 0,
        difficulty: "",
        numOfQuestions: 0,
      };
    },
    setDifficulty(state, action) {
      return {
        ...state,
        difficulty: action.payload,
      };
    },
    setNumOfQuestions(state, action) {
      return {
        ...state,
        numOfQuestions: action.payload,
      };
    },
  },
});

export default quizSlice.reducer;

export const {
  nextQuestion,
  gettingData,
  userAnswer,
  getQuizData,
  rightAnswer,
  finishQuiz,
  restart,
  setDifficulty,
  setNumOfQuestions,
} = quizSlice.actions;
