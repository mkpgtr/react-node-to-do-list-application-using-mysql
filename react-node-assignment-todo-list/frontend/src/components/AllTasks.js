import React, { Fragment, useEffect, useState } from "react";
import './styles.css';

const AllTasks = () => {
  const [allTasks, setAllTasks] = useState([]);
  const fetchTasks = ()=> {
    return fetch("http://localhost:5000/getAllTasks", {
    method: "GET",
  }).then((response) => response.json())
  .then((data) => setAllTasks(data));



}

const handleDelete = (e,id) => {

  console.log(id)
  
   return fetch(`http://localhost:5000/deleteTask/${id}`, {
      method: "DELETE",
    }).then((response) => response.json()).then((data)=>{
      console.log(data)
    });
    
  

}


    

  useEffect(() => {
    fetchTasks();
  },[allTasks]);

  return <div className="tasks-list">

   {allTasks.length===0 ? <div>
    <h1> {allTasks.length===0 ? 'No Tasks To Show. Please Add Some!': 'All Tasks'}</h1>
  
    </div> : <div>
      {/* ! allTasks is an array. its length is the total tasks we have */}
    <h1 style={{display:'flex', justifyContent:'space-between', width:'40rem',margin:'0 auto'}}>All Tasks <span>total tasks : {allTasks.length}</span></h1>
    {
      // ! index is available with map function. we use it here to show the serial number
      allTasks.map((task,index)=>{
        
        return <div key={task.id} className='single-task'>
          <span>{index+1}.</span>
        <h2>{task.taskName}</h2> 
      <button type="button" onClick={(e)=>handleDelete(e,task.id)}><i className="fa fa-times"></i></button>
        </div>
        })


    }
    </div>}

    

  
  </div>
  
};

export default AllTasks;
