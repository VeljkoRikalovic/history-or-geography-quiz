import { configureStore } from "@reduxjs/toolkit";
import { quizSlice } from "./QuizSlice";

const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;

export type DipatchFunction = () => AppDispatch;

export type RootState = ReturnType<typeof store.getState>;
