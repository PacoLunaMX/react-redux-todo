import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { addTask, editTask } from '../features/tasks/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'


function TaskForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  const params = useParams();

  const [task, setTask ] = useState({
    title:"",
    description: ""
  })
  

  const handleChange = event=>{
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(params.id){
      dispatch(editTask({...task, id: params.id}))

    }else{
      dispatch(addTask({...task, id: uuid()}))

    }
    navigate("/")
  }

  useEffect(()=>{
    if(params.id){
      setTask(tasks.find(task=> task.id === params.id))
    }
  },[])
  return (
    <form onSubmit={handleSubmit}>
      <input value={task.title} name="title" type="text" placeholder='title' onChange={handleChange}/>
      <textarea value={task.description} name="description" id="" placeholder='description' onChange={handleChange}></textarea>
      <button>Guardar</button>

    </form>
  )
}

export default TaskForm