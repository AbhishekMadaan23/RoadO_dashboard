import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import financeReducer from "../reducers/financeSlice";
import orderReducer from "../reducers/orderSlice";
import tripReducer from "../reducers/tripSlice";
import revenueReducer from "../reducers/revenueSlice";
import expenseReducer from "../reducers/expenseSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    finance: financeReducer,
    order: orderReducer,
    trip: tripReducer,
    revenue: revenueReducer,
    expense: expenseReducer,
  },
});
