import React, { useContext } from 'react'

export const todoContext = React.createContext({
    todos:[{
        id:"1",
        todo:"first todo",
        completed :false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    removeTodo:(id)=>{},
    toggleComplete:(id)=>{},
})
export const TodoProvider =todoContext.Provider

export const useTodo=()=>{
    return useContext(todoContext)
}