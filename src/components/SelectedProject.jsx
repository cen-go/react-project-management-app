function SelectedProject({ projectId, projects }) {
  const [selectedProject] = projects.filter(
    (project) => project.id === projectId
  );
  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString("en-GB", {
    year:"numeric",
    month:"long",
    day:"numeric",
  })

  return (
    <div className="w-full md:w-6/12 mt-16">
      <header className="border-b-2 border-stone-300 mb-6">
        <div className="flex gap-4 items-center justify-between my-4">
          <h1 className="font-bold md:text-4xl text-stone-600">
            {selectedProject.title}
          </h1>
          <button className="px-6 py-2 font-semibold text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>
        <p className="font-medium text-stone-400 mb-4">
          {formattedDate}
        </p>
        <p className="text-stone-800 mb-6 whitespace-pre-wrap">{selectedProject.description}</p>
      </header>
      <div>
        <h2>Tasks</h2>
        <input type="text" name="" id="" />
        <button>Add Task</button>
        <ul>TASKS LIST</ul>
      </div>
    </div>
  );
}

export default SelectedProject;
