import Taskform from "./component/Taskform"
import Progresstracker from "./component/Progresstracker"
import Tasklist from "./component/Tasklist"
import { useEffect, useState } from "react"

export default function App() {

  const [tasks, settasks] = useState([]);
  
  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const addTask = (task) => {
    settasks([...tasks,task]);
  }

  return (
    <div>
      <h1>Task Buddy</h1>
      <p>your friendly task manager</p>
      <Taskform addTask={addTask}/>
      <Tasklist tasks= {tasks} updateTask = {updateTask} 
      deleteTask = {deleteTask} />
      <Progresstracker/>
      <button>clear all task</button>
    </div>
  )
}