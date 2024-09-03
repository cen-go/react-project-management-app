import CreateButton from "./CreateButton";

export default function Sidebar({ onCreate, projects }) {
  return (
    <aside className="w-1/3 md:w-96 px-8 py-16 rounded-se-2xl bg-stone-900 text-stone-50">
      <h2 className="font-bold mb-8 md:text-2xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <CreateButton onClick={onCreate}>+ Add Project</CreateButton>
      <ul className="mt-10">
        {projects.projects.length !== 0 &&
          projects.projects.map((project) => (
            <li key={project.id}>
              <button className="w-full py-1 mb-1 md:text-base font-semibold hover:text-orange-200 hover:bg-stone-800 border-b-2 border-stone-600">
                <p className=" flex justify-between items-center">
                  <span>{project.title}</span>{" "}
                  <span className="font-light text-base">
                    {project.dueDate}
                  </span>
                </p>
              </button>
            </li>
          ))}
      </ul>
    </aside>
  );
}
