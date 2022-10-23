
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoAction } from '../redux/todoSlice';
import './creat-todo.css'

function CreatTodo() {
	const dispatch = useDispatch()
	const [inputValue, setInputValue] = useState("")

	const FuncSubmitA = (event) => {
		event.preventDefault()
		dispatch(todoAction.addTodo(inputValue))
		setInputValue('')
	}

	const HandleValue = (event) => {
		setInputValue(event.target.value)
	}


	return (
		<form onSubmit={FuncSubmitA}>
			<input value={inputValue} onChange={HandleValue} type="text" name="" placeholder='Enter todo here' id="firstButton" />
			<input type="submit" value="submit" id='secondButton' />
		</form>
	)
}
export default CreatTodo;