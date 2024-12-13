import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id:1, text:"Hello World"}]
}

// Slice is just a bigger version of reducer
export const todoSlice = createSlice({
    // These properties are given by redux Toolkit so their name will be same.
    // name,initialState,reducers.
    name: 'todo', 
    initialState,
    reducers:{
        //reducers are objects
        // It has properties and functions 
        // here our properties according to project are addTodo,removeTodo,updateTodo
        /* Here difference comes from context API, their initially we were only giving name of function not definition 
            but here we also wite definition.
        */
        /* 
            Here we have access of two things:
            (state, action)
            state: This variable gives access to current situation.
            action: action will provide values that are required to perform methods according to our project.
        */
        addTodo:(state,action)=>{
            const todo = {
                id: nanoid(), // used for generating ids
                text: action.payload // payload is an object( which we will send to add in todolist).
                //Dont write action.payload.text , giving wrong output.
            }
            // make changes in state.
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo :(state,action)=>{
            state.todos=state.todos.map((todo)=> todo.id===action.payload?todo.text=action.payload:todo)
        }
    } 
})
/* Now , we already learnt that any change in state or store are done via reducers,
So they need to be exported separately as they will be used later in project*/
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer