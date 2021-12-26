import { createStore } from "redux";
import { countReducer } from "./reducers";

export const store = createStore(countReducer);
