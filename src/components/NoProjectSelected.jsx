import projectImg from "../assets/no-projects.png";
import CreateButton from "./CreateButton";

export default function NoProjectSelected({ onCreate }) {
  return (
    <div className="w-7/12 mt-36 flex flex-col items-center justify-start gap-6">
      <img src={projectImg} alt="no project selected image" className="w-20" />
      <h2 className="font-bold md:text-2xl text-stone-600">
        No Project Selected
      </h2>
      <p className="font-medium md:text-lg mb-4 text-stone-500">
        Select a project or get started with a new one
      </p>
      <CreateButton onClick={onCreate}>Create new project</CreateButton>
    </div>
  );
}
