import React from 'react'

const Input = ({handleTaskAdd}) => {
    const [task, setTask] = React.useState("");
    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const addTask = () => {
        handleTaskAdd(task)
        setTask("")
    }

  return (
    <div className='inputContainer'>
        <input placeholder="Enter Task" onChange={(e) => handleTask(e)} value={task}/>
        <button onClick={addTask}>Add</button>
    </div>
  )
}

export default Input