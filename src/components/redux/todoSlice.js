import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		isLoading: true,
		data: JSON.parse(localStorage.getItem('todo')) || []
	},
	reducers: {
		addTodo: (state, action) => {
			state.data.push({ text: action.payload, status: false, id: Date.now() })
		},
		deleteTodo: (state, action) => {
			state.data = state.data.filter((item) => item.id !== action.payload)
		},

		checkTodo: (state, action) => {
			const newArr = state.data.map((item) => {
				if (item.id === action.payload) {
					item.status = !item.status
				}
				return item
			})
			state.data = newArr
		},
		onEditText: (state, action) => {
			const newArr = state.map((item) => {
				if (item.id === action.payload) {
					item.text = action.payload;
				}
				return item
			})
			state.data = newArr
		},
		editTodo: (state, action) => {
			const newArrEdit = state((item) => {
				return item.id !== action.payload
			})
			state.data = newArrEdit
		},
		setLoading: (state, action) => {
			state.isLoading = action.payload
		},
		
	}
})
export const todoReducer = todoSlice.reducer
export const todoAction = todoSlice.actions