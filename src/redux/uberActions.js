import { ADD_UBER } from "./actionType";

export const AddHandler = (newUber) => {
  return {
    type: ADD_UBER,
    payload: newUber
  };
};
