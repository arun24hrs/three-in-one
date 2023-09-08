import React from 'react'
import Input from './Input'
import TodosDisplay from './TodosDisplay';
import "../App.css"


const Todo = () => {

    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(false)
    
console.log(todos)
    const handleTaskAdd = (task) => {
        setLoading(true);
        const newTask = {
            id: Date.now(),
            task,
            status: false
        }
        // postTodos(newTask);
        setTodos([...todos, newTask])
        setLoading(false);
    }

    // const getTodos = async() => {
    //     setLoading(true)
    //     let todoData = await fetch('http://localhost:8000/tasks');
    //     todoData = await todoData.json();
    //     setTodos(todoData);
    //     setLoading(false);
    // }

    // const postTodos = async(todoTask) => {
    //     await fetch('http://localhost:8000/tasks',{
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(todoTask)
    //     })
    //     getTodos();
        
    // }

    const handleToggle = (id, newStatus) => {
    //     await fetch(`http://localhost:8000/tasks/${id}`,{
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({status: newStatus})
    //   })
    //   getTodos()
    setLoading(true)
    let data = todos && todos.map((el)=> {
        if(el.id == id){
        el.status = newStatus
        }
        return el;
    })
    setTodos(data)
    setLoading(false)
    }
  
    const handleDelete = async(id) => {
    //   await fetch(`http://localhost:8000/tasks/${id}`,{
    //       method: "DELETE",
    //   })
    setLoading(true)
    const data = todos.filter((el)=> el.id !== id)
        setTodos(data)
        setLoading(false)
    }

    
  return (
    <div className='todoApp'>
        <h1 style={{color: "white", padding: "20px"}}>Todo App</h1>
        <Input handleTaskAdd={handleTaskAdd} todos={todos}/>
        <div style={{color: "#fff"}}>{loading && <h3>...loading</h3>}</div>
        <div style={{color: "#fff"}}>{todos.length===0 ? "No tasks yet." : " "}</div>
        <div className='tasksContainer'>
                {todos.map((task)=>{
                    return <TodosDisplay key={task.id}
                    id={task.id}
                    task={task.task}
                    status={task.status}
                    handleDelete = {handleDelete}
                    handleToggle = {handleToggle}
                    />
                })}
            </div>
    </div>
  )
}

export default Todo