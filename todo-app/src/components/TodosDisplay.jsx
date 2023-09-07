import React from 'react';
import '../App.css'

const TodosDisplay = ({id, task, status, handleDelete, handleToggle}) => {
  

  return (
    <div style={{padding: "20px"}}>
        <div className='taskCard'>
            <h4>{task}</h4>
            <p style={status?{color: "lightgreen"}: {color: "red"}}>{status? "Completed": "Pending"}</p>
            <div className='btnContainer'>
            <button style={{backgroundColor: "lightskyblue", padding: "5px"}} onClick={()=>handleToggle(id, !status)}>{status? "Mark Pending":"Mark Complete"} </button>
            <button style={{backgroundColor: "red", padding: "5px"}} onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default TodosDisplay