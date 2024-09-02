import CreateButton from "./CreateButton";

export default function Sidebar({ onCreate }) {
  return (
    <aside className="w-1/3 md:w-96 px-8 py-16 rounded-se-2xl bg-stone-900 text-stone-50">
      <h2 className="font-bold mb-8 md:text-2xl text-stone-200">YOUR PROJECTS</h2>
      <CreateButton onClick={onCreate}>+ Add Project</CreateButton>      
      <ul className="mt-10">PROJECTS...</ul>
    </aside>
  );
}
