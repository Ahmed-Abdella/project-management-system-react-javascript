import { useState } from "react";
import ProjectsList from "../../components/ProjectsList";
import ProjectsFilter from "./ProjectsFilter";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./Dashboard.css";
export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentFilter] = useState("all");
  const { user } = useAuthContext();

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const projects = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;
          case "mine":
            let assignedToMe = false;
            document.assignedUsersList.forEach((u) => {
              if (user.uid === u.id || user.uid === document.createdBy.id) {
                assignedToMe = true;
              }
            });

            return assignedToMe;
          case "development":
          case "design":
          case "sales":
          case "marketing":
            return document.category === currentFilter;

          default:
            return true;
        }
      })
    : null;
  return (
    <div className="dashboard pages-margin">
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectsFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {projects && <ProjectsList projects={projects} />}
    </div>
  );
}
