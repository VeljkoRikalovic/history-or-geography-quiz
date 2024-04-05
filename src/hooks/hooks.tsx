import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, DipatchFunction } from "../data/Store";

export const useQuizSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useQuizDipatch: DipatchFunction = useDispatch;

export const shuffle = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
