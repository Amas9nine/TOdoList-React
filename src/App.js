
import './App.css';
import { useEffect, useState } from 'react';
import Header from "./components/header/Header"
import Footer from './components/footer/footer'
import CreatTodo from './components/creat-todo/CreatTodo'


function App() {
  const todoArr = JSON.parse(localStorage.getItem('todo')) || []

  const [state, setState] = useState(todoArr)

  const [isPending,setPending]=useState(true)

  console.log(state)

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(state))
  }, [state])

  useEffect(()=>{
    setTimeout(()=>{
      setPending(false)
    },5000)
  },[])

  const addNewTodo = (str) => {
    setState([...state, { text: str, status: false, id: Date.now() }])
  }

  const deleteTodo = (id) => {
    const newArr = state.filter((item) => {
      return item.id !== id
    })
    setState(newArr)
  }


  const editTodo = (id) => {
    const newArrEdit = state((item) => {
      return item.id !== id
    })
    setState(newArrEdit)
  }




  const onCheck = (id) => {
    const newArr = state.map((item) => {
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    })
    setState(newArr)
  }

  const onEditText = (newText, id) => {
    const newArr = state.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
      return todo
    })

    setState(newArr)

  }

  if (isPending) {
    return <div className='preloader'>
<img  src='https://i.pinimg.com/originals/77/4f/36/774f3653848cb34c8d90f07771284d51.gif' alt='loader'/>
    </div>
  }
  

  return (
    <div className="App">

      <Header state={state} />

      <div className='todoBody'>

        <CreatTodo
          addNew={addNewTodo} />

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

                  onDelete={deleteTodo}
                  onEdit={editTodo}
                  onCheck={onCheck}
                  onEditText={onEditText} />)
              :
              <h1 className='add-todo'>please add todo</h1>
          }


        </div>


      </div>
    </div>



  );
}

export default App;
// onSubmit