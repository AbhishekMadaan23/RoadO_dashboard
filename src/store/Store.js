import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";
import financeReducer from "../reducers/financeSlice";
import orderReducer from "../reducers/orderSlice";
import tripReducer from "../reducers/tripSlice";
import revenueReducer from "../reducers/revenueSlice";
import expenseReducer from "../reducers/expenseSlice";

// All the reducers are combined and a global store is created using configureStore
// store's state is composed of the state of all the reducers
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
