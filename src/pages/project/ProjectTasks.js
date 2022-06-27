import { useState, useEffect } from "react";
import Avatar from "../../components/Avatar";
// import doneIcon from "../../assets/done.svg";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
// import { projectFirestore } from "../../firebase/config";

import Select from "react-select";

export default function ProjectTasks({ project }) {
  const { updateDocument, response } = useFirestore("projects");

  const [newTask, setNewTask] = useState("");
  const [taskRes, setTaskRes] = useState(null);
  const { user } = useAuthContext();
  const [users, setUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  useEffect(() => {
    if (project) {
      const options = project.assignedUsersList.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [project]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskRes) {
      setFormError("you have to choose one for the task");
      return;
    }
    const taskToAdd = {
      taskManName: taskRes.value.displayName,
      photoURL: taskRes.value.photoURL,
      taskManUID: taskRes.value.id,
      content: newTask,
      done: false,

      id: Math.random(),
    };

    console.log(taskToAdd);
    await updateDocument(project.id, {
      tasks: [...project.tasks, taskToAdd],
    });

    if (!response.error) {
      setNewTask("");
    }
  };

  // const handleDone = async (task) => {
  //   await projectFirestore
  //     .collection("projects")
  //     .doc(project.id)

  //     .update(task, { done: true });
  // };

  return (
    <div className="tasks">
      <h2>{project.tasks.length > 0 ? "tasks" : "no tasks yet"}</h2>
      {project.tasks &&
        project.tasks.map((task) => (
          <>
            <div key={task.id} className="task">
              <p className="task-content">{task.content.substr(0, 40)}</p>

              <div className="task-man">
                <p>{task.taskManName}</p>
                <Avatar src={task.photoURL} />
                {/* {user.uid === task.taskManUID && (
                  <img
                    onClick={() => handleDone(task)}
                    className={`done-icon ${task.done && "task-done"}`}
                    src={doneIcon}
                    alt="done icon"
                  />
                )} */}
              </div>
            </div>
          </>
        ))}

      {user.uid === project.createdBy.id && (
        <>
          <form onSubmit={handleSubmit}>
            <label>
              <span>add task for one selected user :</span>
              <input
                type="text"
                required
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
              ></input>
            </label>

            <Select options={users} onChange={(option) => setTaskRes(option)} />

            <button className="btn">add task</button>
          </form>

          {formError && <p className="error">{formError}</p>}
        </>
      )}
    </div>
  );
}
