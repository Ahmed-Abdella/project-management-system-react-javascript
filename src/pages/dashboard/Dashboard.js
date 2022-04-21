import ProjectsList from "../../components/ProjectsList";
import { useCollection } from "../../hooks/useCollection";
import "./Dashboard.css";
export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  return (
    <div className="dashboard">
      {error && <p className="error">{error}</p>}
      {documents && <ProjectsList projects={documents} />}
    </div>
  );
}
