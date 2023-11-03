import { useContext } from "react";
import { TodoStore } from "../context/TodoContext";
import {MdDeleteForever} from "react-icons/md"
import {BiEdit} from "react-icons/bi"



const ShowAllTodos = ()=>{

    
    const {todolist,show} = useContext(TodoStore)
   
    return(<>
    
        <section className=" w-[100%] flex justify-center items-center p-8">
            <article className="flex flex-wrap gap-6 w-[100%]  justify-center">
                {todolist.map(value=>{

                    const {id, title, detail, n_character, n_sentence, n_words, createAt} = value;
                    
                        return(
                        <div className="flex flex-col w-[20%]  gap-6 p-2 border-slate-500 border-2 shadow-lg hover:shadow-xl group">
                            <h3 className="text-3xl bg-slate-300 rounded-md font-semibold text-center">{title}</h3>
                            <p className="text-base bg-slate-200 p-2 h-28 text-ellipsis whitespace-nowrap overflow-hidden">{detail}</p>

                          
                          <div className="group-hover:flex flex-col justify-center items-center gap-8 hidden" >
                                <div className="text-sm flex gap-3  ">
                                    <span className="text-center">Characters : {n_character}</span>
                                    <span className="text-center">Words : {n_words}</span>
                                    <span className="text-center">Sentences : {n_sentence}</span>
                                </div>

                                <div className="flex justify-around w-[100%]">
                                    <button className="bg-red-500 p-2 rounded-lg hover:bg-red-700"><MdDeleteForever className="text-2xl text-white"/>  </button>
                                    <button className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-700 "><BiEdit className="text-2xl text-white" /></button>
                                </div>

                            </div>
                        </div>)
               })}
            </article>
        </section>
           
    </>)
}

export{ShowAllTodos}