
import React,{useContext} from "react";
import { AddTodo } from "../component/AddTodo";
import { TodoStore } from "../context/TodoContext";
import { ShowAllTodos } from "../component/ShowAllTodos";
import { Overlay } from "./Overlay";

const Home = ()=>{

 const {todolist}=useContext(TodoStore)
 console.log(todolist)
    return(<>

        
        <section className="bg-slate-100  flex justify-center ">
             <article className="flex flex-col items-center gap-8 w-full py-9">
               <h1 className="text-4xl font-semibold">Advanced Todo App</h1>
                   <AddTodo />
                   {/* <ShowAllTodos/> */}
                   <ShowAllTodos/>
                   <Overlay/>

            </article>
        </section>

    
    </>)
}

export{Home}