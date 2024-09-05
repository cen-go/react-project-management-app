import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  
  const handleAddProjectButton = () =>
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: null,
      };
    });

  const handleCancel = () =>
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
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
        selectedProjectId: undefined,
        projects: [...prevProjectsState.projects, newProject],
      };
    });
  };

  const handleSelectProject = (projectId) => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: projectId,
      };
    });
  };  

  const handleDelete = () => {
    setProjectsState((prevProjectsState) => {
      return {
        ...prevProjectsState,
        selectedProjectId: undefined,
        projects: prevProjectsState.projects.filter(
          (project) => project.id !== prevProjectsState.projectId
        ),
      };
    });
  };

  const handleAddTask = (taskText) => {
    const task = {
      taskTitle: taskText,
      id: Math.random(),
    }
    
    setProjectsState((prevProjectsState) => {
      let copiedProjects = [...prevProjectsState.projects];
      copiedProjects[index].tasks.push(task);

      return {
        ...prevProjectsState,
        projects: copiedProjects,
      };
    });
  };
  
  const handleDeleteTask = (taskId) => {
    setProjectsState((prevProjectsState) => {
      let copiedProjects = [...prevProjectsState.projects];
      const remainingTasks = copiedProjects[index].tasks.filter(
        (task) => task.id !== taskId
      );
      copiedProjects[index].tasks = remainingTasks;

      return {
        ...prevProjectsState,
        projects: copiedProjects,
      };
    });
  };

  const selectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);
  const index = projectsState.projects.indexOf(selectedProject);
  const tasks = selectedProject ? selectedProject.tasks : [];
  


  return (
    <main className="h-screen mt-8 flex gap-16">
      <Sidebar
        selectedProjectId={projectsState.selectedProjectId}
        onCreate={handleAddProjectButton}
        onSelect={handleSelectProject}
        projects={projectsState}
      />
      {projectsState.selectedProjectId === undefined ? (
        <NoProjectSelected onCreate={handleAddProjectButton} />
      ) : projectsState.selectedProjectId === null ? (
        <NewProject onSave={handleAddProject} onCancel={handleCancel} />
      ) : (
        <SelectedProject
          onDelete={handleDelete}
          project={selectedProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
          tasksList={tasks}
        />
      )}
    </main>
  );
}

export default App;
