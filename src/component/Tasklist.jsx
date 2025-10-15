export default function Tasklist({ tasks, updateTask, deleteTask }) {

  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <div className="task-list">
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className= {task.completed ? 'completed': ''}>
            <div>
              <span>
                {task.text}
              </span>
              <small> ({task.priority}, {task.category})</small>
            </div>
            <button onClick={() => toggleComplete(index)} className="complete-btn">
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}