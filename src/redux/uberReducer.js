import { uberdata } from "../Data";

import { ADD_UBER } from "./actionType";
const initState = {
  uberlist: uberdata
};

export const UberReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_UBER:
      return { ...state, uberlist: [...state.uberlist, action.payload] };
    default:
      return state;
  }
};
