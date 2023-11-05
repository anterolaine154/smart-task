/* 
 * Filename: complexCode.js
 * Description: This code demonstrates a complex implementation of a task management system
 *
 * Instructions:
 * 1. Run the code using Node.js or any JavaScript environment
 * 2. Follow the prompts to perform various tasks in the task management system
 */

class Task {
  constructor(title, description, priority, status) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.status = status;
    this.startDate = null;
    this.dueDate = null;
  }

  setStartDate(startDate) {
    this.startDate = startDate;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Priority: ${this.priority}`);
    console.log(`Status: ${this.status}`);
    console.log(`Start Date: ${this.startDate}`);
    console.log(`Due Date: ${this.dueDate}`);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(index) {
    if (index < 0 || index >= this.tasks.length) {
      console.log("Invalid task index");
      return;
    }

    this.tasks.splice(index, 1);
    console.log("Task deleted successfully");
  }

  displayAllTasks() {
    console.log("All Tasks:");
    this.tasks.forEach((task, index) => {
      console.log(`Task #${index + 1}:`);
      task.displayDetails();
      console.log("--------------------");
    });
  }
}

(function() {
  const taskManager = new TaskManager();
  let exit = false;

  while (!exit) {
    console.log("Task Management System");
    console.log("----------------------");
    console.log("1. Add Task");
    console.log("2. Delete Task");
    console.log("3. Display All Tasks");
    console.log("4. Exit");
    console.log("----------------------");

    const choice = prompt("Enter your choice:");

    switch (choice) {
      case "1":
        const title = prompt("Enter task title:");
        const description = prompt("Enter task description:");
        const priority = prompt("Enter task priority:");
        const status = prompt("Enter task status:");
        const startDate = prompt("Enter task start date:");
        const dueDate = prompt("Enter task due date:");

        const task = new Task(title, description, priority, status);
        task.setStartDate(startDate);
        task.setDueDate(dueDate);

        taskManager.addTask(task);
        console.log("Task added successfully");
        break;

      case "2":
        const index = prompt("Enter task index to delete:");
        taskManager.deleteTask(parseInt(index) - 1);
        break;

      case "3":
        taskManager.displayAllTasks();
        break;

      case "4":
        exit = true;
        break;

      default:
        console.log("Invalid choice");
        break;
    }
  }
})();

// Additional complex code can be added below:
// ...
// ...
// ...
// ...
// ...
// ...