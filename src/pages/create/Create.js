import { useState, useEffect } from "react";
import Select from "react-select";
import { useCollection } from "../../hooks/useCollection";
import "./Create.css";

const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];
export default function Create() {
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category) {
      setFormError("you have to choose category");
      return;
    }

    if (assignedUsers.length < 1) {
      setFormError("you have to assign users");
      return;
    }

    setFormError("");
    console.log(name, dueDate, details, category.value);
    console.log(assignedUsers);
  };

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);
  return (
    <div className="create-form">
      <h2 className="page-title">Create new project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
        </label>
        <label>
          <span>Project Details:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          ></textarea>
        </label>

        <label>
          <span>Due date::</span>
          <input
            type="date"
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          ></input>
        </label>
        <label>
          <span>Project category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assign to:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>

        <button className="btn">Add project</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
