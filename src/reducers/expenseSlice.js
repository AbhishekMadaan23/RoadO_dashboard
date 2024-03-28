import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: {
    total: 123456,
    upcoming: 20,
    outgoing: 70,
    completed: 70,
  },
  reducers: {
    incrementTotalExpenses: (state) => {
      state.total++;
    },
    incrementUpcoming: (state) => {
      state.upcoming++;
    },
    //we can add more reducers as per requirement
  },
});

export const { incrementTotalExpenses, incrementUpcoming } =
  expenseSlice.actions;

export default expenseSlice.reducer;
