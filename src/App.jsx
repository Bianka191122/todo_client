import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header';
import { TodoList } from './Components/TodoList';
import { Login } from './Components/Login';
import { Logout } from './Components/Logout';
import { AddTodo } from './Components/AddTodo';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  //console.log(import.meta.env.VITE_USERNAME, import.meta.env.VITE_PW);
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <Header />
        {isLoggedIn ?
          <>
            <AddTodo />
            <TodoList />
            <Logout setIsLoggedIn={setIsLoggedIn} />
          </>
          :
          <Login setIsLoggedIn={setIsLoggedIn} />}
      </div>
    </QueryClientProvider>
  )
}

export default App
