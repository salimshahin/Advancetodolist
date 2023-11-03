import React, { createContext, useState } from "react";

const TodoStore = createContext([])

const TodoContext = (props)=>{


    const [todolist, setTodolist] = useState([ ])

    const [showTodoData, setShowTodoData] = useState(true)
    
    
    const handleAddTodo = (title, detail,n_character, n_sentence, n_words)=>{

            setTodolist([...todolist,

                {
                    id:`${new Date()}`,
                    title,
                    detail,
                    n_character,
                    n_sentence,
                    n_words,
                    createAt: `Date: ${new Date().toLocaleDateString()}
                               Time: ${new Date().toLocaleTimeString()} `
                }
            
             ])
    
    }
    const handleDeleteTodo = ()=>{}
    const handleUpdateTodo = ()=>{}
    const handleEditTodo = ()=>{}



    return(<>
    
    
        <TodoStore.Provider value={{todolist, handleAddTodo,handleDeleteTodo,handleUpdateTodo, handleEditTodo}}>

        {props.children}

        </TodoStore.Provider>
        
    </>)
}

export {TodoContext, TodoStore}