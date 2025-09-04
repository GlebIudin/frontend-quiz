import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    score: 0,
    currentQuestion: 0,
    isFinished: false,
  },
  reducers: {
    startQuiz: (state, action) => {
      state.score = 0;
      state.currentQuestion = 0;
    },
    submitAnswer: (state, action) => {
      if (action.payload.isCorrect) {
        state.score += 1;
      }
    },
  },
});
