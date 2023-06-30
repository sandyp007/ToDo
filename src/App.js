import {db} from './Firebase'
import { addDoc, collection, getDoc, getDocs  ,deleteDoc ,doc, updateDoc, orderBy} from 'firebase/firestore'
import React, { useEffect, useState } from 'react';
import { async } from '@firebase/util';
import Header from './components/Header';
import Todo  from './components/Todo';
import TodoList from './components/ToDoList';
import TestTodos from './components/TestTodos'
import NewTodoForm from './components/NewTodoForm';
import Myindex from './components/Myindex';
import toast,{Toaster} from 'react-hot-toast';
import Loading from './components/Loading';
 

export default function App() {
  const [todosArray ,setTodosArray]=useState([]);
  const [isOpen ,setIsOpen]=useState(false);
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    getTodosFromFirebase();
    // saveTodoTFirebase();
    // deleteTodoFromDatabase();

  },[])
  const getTodosFromFirebase= async ()=>{
    const todoSnapshot=await getDocs(collection(db ,"todo"));
    
    const todoList =await todoSnapshot.docs.map((doc)=>{
    

      return { ...doc.data() , "id": doc.id }
      

    })
    setTodosArray(todoList)
    setLoading(todoList)

  }
  
  const deleteTodoFromDatabase= async (todo)=>{
    console.log("Delete called")
        const todoref=doc(db,'todo',todo.id)
        await deleteDoc(todoref).then(()=>{
          console.log("todo deleted");
          getTodosFromFirebase();
        })

  }
  const updateTodoFromDatabase= async (todo)=>{
    console.log("update button clicked")
    const todoref=doc(db,'todo',todo.id)
    await updateDoc(todoref,{
      done:"true"

    }).then(()=>{
      console.log("todo is updated");
      getTodosFromFirebase();

    })



  }

  const addTodo=async(newTodo)=> {
    console.log(newTodo);
    await addDoc(collection(db,"todo"),newTodo);
    setIsOpen(false);
    getTodosFromFirebase();

    
    
  }

  useEffect(()=>{
    getTodosFromFirebase()
  },[])


  return (
    <div className='bg-violet-200 rounded'>
      <Toaster/>
      {
        loading? 
        <Myindex 
        deleteTodoFromDatabase={deleteTodoFromDatabase} 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        setTodosArray={setTodosArray} 
        todosArray={todosArray}
        updateTodoFromDatabase={updateTodoFromDatabase}
        addTodo={addTodo}/>
                      : <Loading/>
      }
    </div>
  );
  
    }
    