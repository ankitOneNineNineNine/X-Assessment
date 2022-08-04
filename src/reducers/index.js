import { combineReducers } from "redux";
import { addTodo } from "./todo.reducer";

const reducers = combineReducers({ todos: addTodo });

export default reducers;
