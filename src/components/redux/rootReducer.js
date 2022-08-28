import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";

const reducers = combineReducers({
	todo: todoReducer
})

export const store = configureStore({
	reducer: reducers
})

store.subscribe(() => {
	const state = store.getState()
	localStorage.setItem("todo", JSON.stringify(state.todo.data))
})
