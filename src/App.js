
import './App.css';
import { useEffect } from 'react';
import Header from "./components/header/Header"
import CreatTodo from './components/creat-todo/CreatTodo'
import { useDispatch, useSelector } from 'react-redux';
import { todoAction } from './components/redux/todoSlice';
import Added from './components/added/Added';



function App() {
  const state = useSelector((getRedux) => getRedux.todo.data)
  const isPending = useSelector((getRedux) => getRedux.todo.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(todoAction.setLoading(false))
    }, 2000)
  }, [])

  if (isPending) {
    return <div className='preloader'>
      <img src='./1.jpeg' alt='loader' />
    </div>
  }


  return (
    <div className="App">
      <Header state={state} />
      <div className='todoBody'>
        <Added />
        <CreatTodo />
      </div>
    </div>
  );
}

export default App;