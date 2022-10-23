import Footer from "../footer/footer"
import { useSelector } from "react-redux/es/exports"

function Added() {
	const state = useSelector((getRedux) => getRedux.todo.data)

	return (
		<div className='todoItems'>
			{
				state.length
					?
					state.map((item) =>
						<Footer
							key={item.id}
							text={item.text}
							checked={item.status}
							id={item.id}
						/>)
					:
					<h1 className='add-todo'>please add todo</h1>
			}
		</div>
	)
}

export default Added