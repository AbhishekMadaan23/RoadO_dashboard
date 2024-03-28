import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    total: 123456,
    upcoming: 50,
    outgoing: 120,
    completed: 30,
  },
  reducers: {
    incrementTotalOrders: (state) => {
      state.total++;
    },
    incrementUpcomingOrders: (state) => {
      state.upcoming++;
    },
    //we can add more reducers as per requirement
  },
});

export const { incrementTotalOrders, incrementUpcomingOrders } =
  orderSlice.actions;
export default orderSlice.reducer;
