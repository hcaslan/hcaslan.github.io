import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScrollState {
  disableScroll: boolean;
}

const initialState: ScrollState = {
  disableScroll: false,
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    setDisableScroll: (state, action: PayloadAction<boolean>) => {
      state.disableScroll = action.payload;
    },
  },
});

export const { setDisableScroll } = scrollSlice.actions;
export default scrollSlice.reducer;
