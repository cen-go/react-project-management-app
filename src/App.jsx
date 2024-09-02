import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    activeScreen: "noProject",
    projects: [],
  });

  const handleAddProjectButton = () =>
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        activeScreen: "addProject",
      };
    });

  const handleAddProject = (project) => {
    const newProject = {
      ...project,
      id: Math.random(),
    }
    setProjectsState(prevProjectsState => {
      return {
        ...prevProjectsState,
        projects: [...prevProjectsState.projects, newProject]
      }
    });
  };
  console.log(projectsState);    

  return (
    <main className="h-screen mt-8 flex gap-16">
      <Sidebar onCreate={handleAddProjectButton} />
      {projectsState.activeScreen === "noProject" && (
        <NoProjectSelected onCreate={handleAddProjectButton} />
      )}
      {projectsState.activeScreen === "addProject" && <NewProject onSave={handleAddProject} />}
    </main>
  );
}

export default App;
