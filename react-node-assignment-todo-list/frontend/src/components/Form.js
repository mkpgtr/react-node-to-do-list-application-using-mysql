import React from 'react'
import { useState } from 'react';
import './styles.css'

const Form = () => {

    const [task,setTask] = useState();
    const [edit,setEdit] = useState();


    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(task);
       
        try {
            const body = {task};
            await fetch("http://localhost:5000/createTask",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            // ! clear the input after submitting the post request
            setTask('')
        } catch (error) {
            console.log(error)
        }



    }

    const handleChange = (e)=>{
        setTask(e.target.value);
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1 className='form-title'>To-Do List using React & MYSQL </h1>

        <label htmlFor="task">Enter the task</label>
        <input type="text" id='task' name='task' onChange={handleChange} value={task} />
        <button type="submit">Add Task</button>
    </form>
  )
}

export default Form