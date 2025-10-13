import { useState } from "react"

export default function Taskform({addTask}) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [category, setCategory] = useState('general');

    const handlesubmit = (e) =>  {
        e.preventDefault();
        addTask({text: task, priority, category, completed: false});

        //reset
        setTask('');
        setPriority("medium");
        setCategory("General");
    }

    return (
        
        <form onSubmit={handlesubmit} id="task-form">

            <div id="ipt">
                <input type="text" placeholder="Enter Task" value={task} 
                onChange={(e)=> setTask(e.target.value)}/>
                <button type="submit">Add Task</button>
            </div>

            <div id="btns">

                <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    <option value="High">High</option>
                </select>

                <select value={category} onChange={(e)=> setCategory(e.target.value)}>
                    <option value="general">general</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                </select>



                {/* <h1>{task} {priority} {category}</h1> */}
            </div>
        </form>
    )
}