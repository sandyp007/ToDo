import React from 'react'
import Header from './Header'
import NewTodoForm from './NewTodoForm'
import TestTodos from './TestTodos'

export default function Myindex({todosArray , isOpen , setIsOpen , setTodosArray , deleteTodoFromDatabase , updateTodoFromDatabase,addTodo}) {
  return (
    <div>
    <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
    <NewTodoForm  todosArray={todosArray}
    addTodo={addTodo}
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    setTodosArray={setTodosArray}/>
    <TestTodos deleteTodoFromDatabase={deleteTodoFromDatabase} todosArray={todosArray} updateTodoFromDataBase={updateTodoFromDatabase}/>
    
  </div>
  )
}