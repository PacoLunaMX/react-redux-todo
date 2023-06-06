import React from 'react'
import { useParams } from 'react-router-dom'


function EditTask() {
    const { id } = useParams();
    console.log(useParams)
  return (
    <div>EditTask</div>
  )
}

export default EditTask