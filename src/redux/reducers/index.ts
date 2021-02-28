import { combineReducers } from "redux";

import location from "./location";
import theme from "./theme";

const reducers = combineReducers({ location, theme });

export type TState = ReturnType<typeof reducers>;

export default reducers;
