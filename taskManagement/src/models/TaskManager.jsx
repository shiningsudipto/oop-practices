import { Task } from "./Task";

export class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description) {
    const task = new Task(title, description);
    this.tasks.push(task);
  }

  removeTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }

  getTasks() {
    return this.tasks;
  }

  toggleTaskCompletion(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].toggleCompletion();
    }
  }
}
