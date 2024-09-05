import Tasks from "./Tasks";

function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasksList }) {
  
  const formattedDate = new Date(project.dueDate).toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );  

  return (
    <div className="w-full md:w-6/12 mt-16">
      <header className="border-b-2 border-stone-300 mb-6">
        <div className="flex gap-4 items-center justify-between my-4">
          <h1 className="font-bold md:text-4xl text-stone-800">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="px-6 py-2 font-semibold text-stone-700 rounded-md border border-stone-800 hover:text-stone-950 hover:bg-stone-100"
          >
            Delete
          </button>
        </div>
        <p className="font-medium text-stone-500 mb-4">{formattedDate}</p>
        <p className="text-stone-800 mb-6 whitespace-pre-wrap">
          {project.description}
        </p>
      </header> 
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasksList={tasksList} />     
    </div>
  );
}

export default SelectedProject;
