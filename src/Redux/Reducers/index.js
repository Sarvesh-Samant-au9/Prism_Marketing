import { combineReducers } from "redux";
import dogsReducer from "./DogsInfoReducer";
const rootReducer = combineReducers({
  dogs: dogsReducer,
});
export default rootReducer;
