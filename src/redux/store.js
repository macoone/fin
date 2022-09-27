import { createStore } from "redux";
import { UberReducer } from "./uberReducer";

const store = createStore(UberReducer);
export default store;
