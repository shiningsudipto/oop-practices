export class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.completed = false;
  }

  toggleCompletion() {
    this.completed = !this.completed;
  }

  getDetails() {
    return {
      title: this.title,
      description: this.description,
      completed: this.completed,
    };
  }
}
