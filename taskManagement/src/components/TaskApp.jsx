// src/components/TaskApp.js
import { useState } from "react";
import { TaskManager } from "../models/TaskManager";

const taskManager = new TaskManager();

const TaskApp = () => {
  const [tasks, setTasks] = useState(taskManager.getTasks());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    taskManager.addTask(title, description);
    setTasks([...taskManager.getTasks()]);
    setTitle("");
    setDescription("");
  };

  const removeTask = (index) => {
    taskManager.removeTask(index);
    setTasks([...taskManager.getTasks()]);
  };

  const toggleTaskCompletion = (index) => {
    taskManager.toggleTaskCompletion(index);
    setTasks([...taskManager.getTasks()]);
  };

  return (
    <div>
      <h1>Task Management System</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {task.title} - {task.description}{" "}
            {task.completed ? "(Completed)" : ""}
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskApp;
