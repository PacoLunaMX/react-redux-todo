import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

function TaskList() {
  const tasks = useSelector(state=> state.tasks); 
  const dispatch = useDispatch()

  const handleDelete = (id)=>{
    dispatch(deleteTask(id))
  }

  return (
    <div style={{"display":"flex", "flexDirection":"column", "alignItems":"center"}}>
      <header style={{"textAlign":"left"}}>
        <h1>Tasks {tasks.length}</h1>
        <Link to="/create-task">Create Task</Link>
      </header>
      {tasks.map(task=>{
        return(
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <Link to={`/edit-task/${task.id}`}>Edit</Link>
            <button onClick={()=>handleDelete(task.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList