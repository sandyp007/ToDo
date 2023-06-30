import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import toast from 'react-hot-toast';
import { addDoc ,collection } from "firebase/firestore";
import { db } from "../Firebase";


export default function NewTodoForm({ isOpen, setIsOpen,addTodo,todosArray ,getTodosFromFirebase}) 
{
  let [newTodo, setNewTodo] = useState({
    id:"",
    title: "",
    description: "",
    category: "",
    done: false,
    date: new Date(),
  });


  const options = ["Work", "Home", "School", "Other"];

  useEffect(() => {
    console.log("Title Value:", newTodo);
  }, [newTodo]);

  // console.log(newTodo);


  const handleSubmit = async (e)=>{
    e.preventDefault();
    // console.log("Form Submitted")
    if(newTodo.title === "" || newTodo.description === ""){
      toast.error("All Fields are required");
    }else{
      {
     
      addTodo(newTodo)

      
      
    }
  }
  }
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-lg ">
        {/* The actual dialog panel  */}
        <Dialog.Panel className=" w-1/2 rounded-xl bg-red-50 p-8 border-teal-500 border-2 shadow-xl text-center  bg-teal-100 ">
          
            <Dialog.Title className="text-blue-600 text-3xl font-bold">Create New Todo</Dialog.Title>
            
          <div className="mx-auto p-2 m-2 ">
            <form className="flex flex-col">
              <input
                type="text"
                className="border border-2 mt-4 rounded text-center border-teal-400"
                placeholder="Add New Todo Title"
                value={newTodo.title}
                onChange={(e) => {
                  setNewTodo({ ...newTodo, title: e.target.value });
                }}
              />
              <textarea
                className="border border-2 mt-3  rounded text-center border-teal-400"
                placeholder="Add New Todo Description"
                rows="4"
                value={newTodo.description}
                onChange={(e) => {
                  setNewTodo({ ...newTodo, description: e.target.value });
                }}
              ></textarea>
              <select className="mt-4 border border-2 rounded text-center border-teal-400 " onChange={(e)=>{
                setNewTodo({...newTodo, category: e.target.value})
              }}>
                {options.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
              <button type="submit" 
              onClick={(e)=>{handleSubmit(e)}} 
              className="bg-blue-300 text-lg px-4 py-2 mt-4 font-serif rounded hover:bg-sky-500 border-sky-500 ">
                Add New Todo
              </button>
            </form>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}