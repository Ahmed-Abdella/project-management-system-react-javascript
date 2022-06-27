import { useParams } from "react-router-dom";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";
import "./Project.css";
import ProjectComments from "./ProjectComments";

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);
  if (error) {
    return <div className="error project-margin">{error}</div>;
  }

  if (!document) {
    return <div className="loading project-margin">loading....</div>;
  }

  return (
    <div className="project-details pages-margin">
      <ProjectSummary project={document} />
      <ProjectComments project={document} />
    </div>
  );
}
