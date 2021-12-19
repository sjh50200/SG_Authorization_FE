import { combineReducers } from "redux";
import { authorize } from "./reducer";

const userReducer = combineReducers({ authorize });

export default userReducer;