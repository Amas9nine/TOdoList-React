import { useState } from 'react';
import './footer.css'
import { useDispatch } from 'react-redux'
import { todoAction } from '../redux/todoSlice';

let Footer = (props) => {
	const [state, setState] = useState(false)
	const [inpVal, setInpVal] = useState(props.text)
	const dispatch = useDispatch()

	const onDelete = () => {
		dispatch(todoAction.deleteTodo(props.id))
	}

	const handleCheck = () => {
		dispatch(todoAction.checkTodo(props.id))
	}

	const editSubmit = (event) => {
		event.preventDefault()
		dispatch(todoAction.editTodo({
			id: props.id,
			text: inpVal,
		}))
		setState(false)
	}

	return (
		<div action="" className='radio' >
			{
				state
					?
					<form onSubmit={editSubmit}>
						<input
							value={inpVal}
							onChange={(e) => setInpVal(e.target.value)}
							type="text"
							placeholder='Enter todo here'
							id="firstButton"
						/>
						<input type="submit" value="submit" id='secondButton' />
					</form>
					:
					<div className='formCheckBox'>
						<input checked={props.checked} onChange={handleCheck} type="checkbox" name="" />
						<span className={props.checked ? 'checked' : ''}>	{props.text} </span>
					</div>
			}
			<div>
				<input onClick={(onEdit) => setState(!state)} type="submit" value="Edit" className='Edit' />
				<input onClick={onDelete} type="submit" value="Del" className='Del' />
			</div>
		</div>
	)
}
export default Footer;

// () => setState(!state)