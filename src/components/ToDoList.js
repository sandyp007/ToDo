import Todo from "./Todo"

export default function TodoList({todosArray}) { //,deletetodo 
     console.log("Todos Array:" , todosArray)
  return (

    <div>
        {todosArray.map((todos)=>{
            return(
                <Todo todoss={todos}  />//deleteTodo={deleteTodo}
            )
        })}
        
    </div>
   

  )
}