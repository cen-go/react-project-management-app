import { useState } from "react";

function Tasks({ onAddTask, onDeleteTask, tasksList }) {
  const [taskInput, setTaskInput] = useState("");
  
  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };
  
  const handleAdd = () => {    
    if (taskInput) {
      onAddTask(taskInput);
    } else {
      return;
    }    
    setTaskInput("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4 mb-4">
        <input
          value={taskInput}
          onChange={handleChange}
          type="text"
          name=""
          id=""
          className="w-72 h-8 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleAdd}
          className="font-medium text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {tasksList.length < 1 ? (
        <p className="mb-4">This project does not have any tasks yet.</p>
      ) : (
        <ul className="mt-8 rounded-md bg-stone-100 p-4">
          {tasksList.map(task => {
            return (
              <li key={task.id} className="flex items-center justify-between gap-4 mb-2">
                <p>{task.taskTitle}</p>
                <button onClick={() => onDeleteTask(task.id)} className="font-medium text-stone-700 hover:text-red-700">Clear</button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
