import TaskForm from './component/Taskform'
import TaskList from './component/TaskList'
import ProgressTracker from './component/ProgressTracker'
import { useEffect, useState } from 'react';
export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  });

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index)=>{
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index)=>{
    setTasks(tasks.filter((_, i) => i !=index))
   }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>TaskBuddy</h1>
        <p className='tagline'>Your friendly Task Manager</p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask} />
      <ProgressTracker />
      <button>Clear All Tasks</button>
    </div>

  )
}