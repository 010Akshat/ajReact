import {createContext , useContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        },
    ],
    // here we will give only names to functionality but their implementation will be in App.jsx
    // Remember in App.jsx , names should be exactly similar else error
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider