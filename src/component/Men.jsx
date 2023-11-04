import React, { useState } from 'react'

export const Men = () => {
    const[todos,setTodos]=useState([])
    const[inputValue,setInputValue]=useState("")


    const addTodo=()=>{
        if(inputValue !== ""){
        setTodos([...todos,inputValue]);
        setInputValue("")
    }

    
    }
    const removeTodo=(index)=>{
        const newTodos=[...todos];
        newTodos.splice(index,1)
        setTodos(newTodos)
        
    }


  return (
    <div>
    <div>
            <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" />
            <button onClick={addTodo}>add</button>

    </div>
    {todos.map((todo,index)=>(
<div>{todo} <button onClick={()=>removeTodo(index)}>remove</button></div>
    ))}
    </div>
  )
}
