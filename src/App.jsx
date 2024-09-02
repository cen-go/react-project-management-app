import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectsState, setProjectsState] = useState({
    activeScreen: "noProject",
    projects: [],
  });

  const handleAddProject = () =>
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        activeScreen: "addProject",
      };
    });

  return (
    <main className="h-screen mt-8 flex gap-16">
      <Sidebar onCreate={handleAddProject} />
      {projectsState.activeScreen === "noProject" && (
        <NoProjectSelected onCreate={handleAddProject} />
      )}
      {projectsState.activeScreen === "addProject" && <NewProject />}
    </main>
  );
}

export default App;
