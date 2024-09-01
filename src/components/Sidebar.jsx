export default function Sidebar() {
  return (
    <aside className="w-1/3 md:w-96 px-8 py-16 rounded-se-2xl bg-stone-900 text-stone-50">
      <h2 className="font-bold mb-8 md:text-2xl text-stone-200">YOUR PROJECTS</h2>
      <button className="px-4 py-2 mb-8 text-xs md:text-base rounded bg-stone-700 text-stone-300 hover:bg-stone-600 hover:text-stone-100">
        + Add Project
      </button>
      <ul>PROJECTS...</ul>
    </aside>
  );
}
