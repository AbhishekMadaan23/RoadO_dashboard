import { createSlice } from "@reduxjs/toolkit";

const revenueSlice = createSlice({
  name: "revenue",
  initialState: {
    total: 123456,
    upcoming: 40,
    outgoing: 100,
    completed: 70,
  },
  reducers: {
    incrementTotalRevenue: (state) => {
      state.total++;
    },
    incrementUpomingRevenue: (state) => {
      state.upcoming++;
    },
    //we can add more reducers as per requirement
  },
});

export const { incrementTotalRevenue, incrementUpomingRevenue } =
  revenueSlice.actions;
export default revenueSlice.reducer;
