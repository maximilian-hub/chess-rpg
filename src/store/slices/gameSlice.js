import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeScene: "TitleScene",
};

export const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    setScene: (state, action) => {
      state.activeScene = action.payload;
    },
  },
});

export const { setScene } = gameSlice.actions;

export default gameSlice.reducer;
