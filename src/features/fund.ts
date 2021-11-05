import { createSlice } from "@reduxjs/toolkit";

const initialValue = {name: "SBI CONTRA FUND - REGULAR PLAN -GROWTH", link: "https://api.mfapi.in/mf/102414"  };

export const fundSlice = createSlice({
  name: "fund",
  initialState: { value: initialValue },
  reducers: {
    changeFund: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { changeFund } = fundSlice.actions;

export default fundSlice.reducer;
