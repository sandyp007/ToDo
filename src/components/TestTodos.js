import React from 'react'
import Done from '../Done'
import Notdone from '../Notdone'
export default function TestTodos({todosArray ,deleteTodoFromDatabase ,updateTodoFromDataBase}) {
  return (
    <div>
        {
        todosArray.map((todo)=>{
          // <p>todo.title</p>
          return(
            <div key={todo.id}>
                
            <div className="max-w-4xl mx-auto flex justify-between px-8 py-6 bg-emerald-200 shadow-xl mt-10 rounded-xl">
        <div>
          <h2 className="text-3xl font-bold font-serif">{todo.title}</h2>
          <p className='text-xl my-1 mx-6 font-mono text-indigo-800'>{todo.description}</p>
          

          <p className='text-md text-yellow-600 my-2 mx-2 rounded-lg'>{new Date(todo.date.seconds * 1000).toLocaleDateString("en-US")}</p>
          
          <div className="flex space-x-6">
            <button onClick={()=>{updateTodoFromDataBase(todo)}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            
            <button onClick={()=>{deleteTodoFromDatabase(todo)}} > 
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
  
        <div>
          <h3 className="bg-fuchsia-200 p-2 rounded-lg  ">Category: {todo.category}</h3>
          <h4 className="flex my-6">
              
              {todo.done==="true"?<Done/>:<Notdone/>}
          </h4>
          
        </div>
      </div>
            </div>
          )
          

        })
      }

    </div>
  )
}