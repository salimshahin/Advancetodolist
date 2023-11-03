import { useContext,useState } from "react";
import { TodoStore } from "../context/TodoContext";
import {MdDeleteForever} from "react-icons/md"
import { BiEdit } from "react-icons/bi";

const Overlay = ()=>
{

    
    const {todolist, contex} = useContext(TodoStore)
    const {id, title, detail, n_character, n_sentence, n_words, createAt} = useState();

    return(
    <>
         {setShow && <section className="h-[100vh] w-[100vw]  bg-[#000a] fixed top-0 left-0 ">
          
          <article className="w-[100%] flex justify-center items-center h-[90%]">
            <div className="flex flex-col w-[90%]  h-[80%]  gap-[5vh] p-4 rounded-md border-slate-300 border-2 shadow-lg bg-white">
              <h3 className="text-3xl bg-slate-200 rounded-md p-2 font-semibold text-center">
                {title}
              </h3>
              <p className="text-2xl bg-slate-200 p-2 text-ellipsis whitespace-nowrap overflow-hidden h-[35vh]">
                {detail}
              </p>
              <div className="flex  flex-col gap-8 justify-center items-center">
                <div className="text-2xl flex gap-3  ">
                  <span className="text-center">
                    Characters : {n_character}
                  </span>
                  <span className="text-center">Words : {n_words}</span>
                  <span className="text-center">Sentence : {n_sentence}</span>
                </div>
                <div className="flex justify-around  w-[100%]">
                  <button className="bg-red-500 p-2 rounded-lg hover:bg-red-700 ">
                    <MdDeleteForever className="text-2xl text-white" />
                  </button>
                  <button className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-700 ">
                    <BiEdit className="text-2xl text-white" />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
}
    </>
    )
}

export {Overlay}