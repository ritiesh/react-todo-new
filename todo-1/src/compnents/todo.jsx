import { useState } from 'react'

function Todo() {
  const [task, setTask] = useState(['eat', 'sleep', 'play'])
  const [newtask, setNewtask] = useState()


  function Onhandleinput(event) {
    setNewtask(event.target.value);
  }
  function addTask() {
    if (newtask.trim() !== "") {
      setTask(t => [...t, newtask])
      setNewtask("");
    }
  }
  function deleteTask(index) {
    const updatelist = task.filter((_, i) => i !== index)
    setTask(updatelist)
  }
  function moveUp(index) {
    if (index > 0) {
      const updatelist = [...task];
      [updatelist[index], updatelist[index - 1]] = [updatelist[index - 1], updatelist[index]]
      setTask(updatelist)
    }
  }
  function moveDown(index) {
    if (index < task.length - 1) {
      const updatelist = [...task];
      [updatelist[index], updatelist[index + 1]] = [updatelist[index + 1], updatelist[index]]
      setTask(updatelist)
    }
  }
  return (
    <div className='main'>
      <div>
        <h1>TO-DO LIST</h1>
      </div>
      <div>
        <input className='input-1' type='text' placeholder='Enter new task' value={newtask} onChange={Onhandleinput}></input>
        <button className='button-1' onClick={addTask}>Add</button>
      </div>


      <ol className='list-1'>{task.map((task, index) =>
        <li key={index}>
          <span>{task}</span>
          <button className='delete-1' onClick={() => deleteTask(index)}>delete</button>
          <button className='move-1' onClick={() => moveUp(index)}>up</button>
          <button className='move-2' onClick={() => moveDown(index)}>down</button>
        </li>)}
      </ol>
    </div>

  )
}

export default Todo