import { createSlice } from "@reduxjs/toolkit";

const tripSlice = createSlice({
  name: "trip",
  initialState: {
    total: 123456,
    upcoming: 50,
    outgoing: 100,
    completed: 50,
  },
  reducers: {
    incrementTotalTrip: (state) => {
      state.total++;
    },
    incrementUpcomingTrips: (state) => {
      state.upcoming++;
    },
    //we can add more reducers as per requirement
  },
});

export const { incrementTotalTrip, incrementUpcomingTrips } = tripSlice.actions;
export default tripSlice.reducer;
