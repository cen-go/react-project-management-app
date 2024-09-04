import CreateButton from "./CreateButton";

export default function Sidebar({
  onCreate,
  projects,
  onSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 md:w-96 px-8 py-16 rounded-se-2xl bg-stone-900 text-stone-50">
      <h2 className="font-bold mb-8 md:text-2xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <CreateButton onClick={onCreate}>+ Add Project</CreateButton>
      <ul className="mt-10">
        {projects.projects.length !== 0 &&
          projects.projects.map((project) => {
            let cssClasses =
              "w-full py-2 px-1 md:text-base font-semibold hover:text-orange-200 hover:bg-stone-800 border-b-2 border-stone-600";
            if (selectedProjectId === project.id) {
              cssClasses =
                "w-full py-2 px-1 md:text-base font-semibold text-orange-300 bg-stone-700 border-b-2 border-stone-600";
            }

            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelect(project.id)}
                  className={cssClasses}
                >
                  <p className=" flex justify-between items-center">
                    <span>{project.title}</span>{" "}
                    <span className="font-light text-base">
                      {project.dueDate}
                    </span>
                  </p>
                </button>
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
