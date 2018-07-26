import React from 'react'
import AddTodo from '../container/AddTodo'
import VisibleTodoList from '../container/VisibilityTodoList'
import { Footer } from './FnComponent'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App