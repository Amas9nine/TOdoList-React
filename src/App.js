
import './App.css';
import { useEffect } from 'react';
import Header from "./components/header/Header"
import Footer from './components/footer/footer'
import CreatTodo from './components/creat-todo/CreatTodo'
import { useDispatch, useSelector } from 'react-redux';
import { todoAction } from './components/redux/todoSlice';



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
        <CreatTodo />
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
      </div>
    </div>
  );
}

export default App;