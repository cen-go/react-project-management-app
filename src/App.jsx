import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

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

  const handleCancel = () =>
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        activeScreen: "noProject",
      };
    });

  const handleAddProject = (project) => {
    const newProject = {
      ...project,
      id: Math.random(),
    };
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        activeScreen: "noProject",
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  };

  const handleSelectProject = (projectId) => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        activeScreen: projectId,
      };
    });
  };

  return (
    <main className="h-screen mt-8 flex gap-16">
      <Sidebar
        selectedProjectId={projectsState.activeScreen}
        onCreate={handleAddProjectButton}
        onSelect={handleSelectProject}
        projects={projectsState}
      />
      {projectsState.activeScreen === "noProject" ? (
        <NoProjectSelected onCreate={handleAddProjectButton} />
      ) : projectsState.activeScreen === "addProject" ? (
        <NewProject onSave={handleAddProject} onCancel={handleCancel} />
      ) : (
        <SelectedProject
          projectId={projectsState.activeScreen}
          projects={projectsState.projects}
        />
      )}
    </main>
  );
}

export default App;
