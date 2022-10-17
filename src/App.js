import './Style/App.css'
import react,{useState} from "react"
import Todo from './Component/Todo';


function App() {

  const [list,setList] = useState([])
  const [input,setInput] =useState("")
  const [isEdit,setEdit] = useState(null)

  const addTodo = ()=>{
    setList([...list,{name:input}])
    setInput("")
  }
  const updateTodo = () =>{
    const newArr = [...list]
    newArr[isEdit].name = input;
    setList(newArr)
    setEdit(null)
    setInput("")
  }
  const printList = () =>{
    return list.map((v,i)=>{
      return <Todo val={v} key={i} list={list} setList={setList} index={i} setEdit={setEdit} isEdit={isEdit} />
    })
  }

  return (
    <div className="App">
      <h1 className='header'>Todo List</h1>
      <div className='input-container'>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder={ isEdit !== null ? `Type to change ${list[isEdit].name}` :"Type to add to do list "} />
        {isEdit !== null ? <button onClick={()=>updateTodo()}>Apply</button> : <button onClick={()=>addTodo()} disabled={input === ""}>Add</button> }
      </div>
      <div className='todo-container'>
        {printList()}
      </div>
    </div>
  );
}

export default App;
