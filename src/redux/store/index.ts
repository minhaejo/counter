import { combineReducers, Reducer } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import counter from "../slices/counter";

const rootReducer: Reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default:
      return combineReducers({ counter })(state, action);
  }
};
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
