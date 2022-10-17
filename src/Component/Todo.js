import React,{useState} from 'react'
import "../Style/Todo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil,faXmark } from '@fortawesome/free-solid-svg-icons'

function Todo({val,key,setList,list,index,setEdit,isEdit}) {

  const deleteTodo = () =>{
    const newArr = [...list];
    newArr.splice(index,1)
    setList(newArr)
  }

  return (
    <div className='todo'>
          <p className={val.check ? "check" : ""}>{val.name}</p>
          <button className={`edit-btn ${isEdit !== null && 'disable-edit'}`} onClick={()=>setEdit(index) } disabled={isEdit !== null}><FontAwesomeIcon icon={faPencil} /></button>
          <button className={`delete-btn ${isEdit !== null && 'disable-delete'}`} onClick={()=>deleteTodo()} disabled={isEdit !== null}><FontAwesomeIcon icon={faXmark} size={"xl"} /></button>
    </div>
  )
}

export default Todo