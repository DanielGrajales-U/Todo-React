import { useState } from 'react'
import { Route } from 'wouter'
import './App.css'
import './assets/index.css'

import Home from './Pages/Home/Home';
import AddTodo from './Pages/AddTodo/AddTodo';
import Login from './Pages/SingIn/Login'
import Singin from './Pages/SingIn/SingIn'
import Register from './Pages/SingIn/Register'
import { TododosProvider } from './Context/TodosContext';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <UserProvider>
       <TododosProvider>
      <div className="App">
        <Route
          component={Home}
          path='/home'
        />
        <Route
          component={AddTodo}
          path='/addTodo'
        />
        <Route
          component={Singin}
          path='/'
        />
        <Route
          component={Login}
          path='/login'
        />
        <Route
          component={Register}
          path='/register'
        />
        </div>
    </TododosProvider>
    </UserProvider>
   
  )
}

export default App
