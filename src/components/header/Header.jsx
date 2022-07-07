import './Header.css'
 function Header(props){
	return (
		<header className="Header_wrapper">
			Todos ({props.state.filter((it)=>it.status).length}/{props.state.length})
		</header>
	)
}
export default Header;