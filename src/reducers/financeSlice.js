import { createSlice } from "@reduxjs/toolkit";

const financeSlice = createSlice({
  name: "finance",
  initialState: {
    income: 10000,
    expense: 5000,
  },
  reducers: {
    addIncome: (state, action) => {
      state.income += action.payload;
    },
    addExpense: (state, action) => {
      state.expense += action.payload;
    },
  },
});

export const { addIncome, addExpense } = financeSlice.actions;
export default financeSlice.reducer;
