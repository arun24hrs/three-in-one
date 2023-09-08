import React from 'react';
import '../App.css'

const TodosDisplay = ({id, task, status, handleDelete, handleToggle}) => {
  

  return (
    <div style={{padding: "20px"}}>
        <div className='taskCard'>
            <h4>{task}</h4>
            <p style={status?{color: "lightgreen"}: {color: "pink"}}>{status? "Completed": "Pending"}</p>
            <div className='btnContainer'>
            <button className='actionBtn' id='toggleBtn' onClick={()=>handleToggle(id, !status)}>{status? "Mark Pending":"Mark Complete"} </button>
            <button className='actionBtn' id='deleteBtn'onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default TodosDisplay