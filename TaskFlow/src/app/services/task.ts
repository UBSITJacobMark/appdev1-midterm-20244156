import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [
    { id: 101, title: 'Buy Budget Meal', description: 'Budget Meal', dueDate: '2026-03-25', status: 'Pending', priority: 'Low', category: 'Personal' },
    { id: 102, title: 'Buy Groceries', description: 'Peanut Butter and Bread', dueDate: '2026-03-26', status: 'Pending', priority: 'Medium', category: 'Personal' },
    { id: 103, title: 'Gym Session', description: 'Leg day', dueDate: '2026-03-24', status: 'Completed', priority: 'Low', category: 'Health' }
  ];

  getTasks(): Task[] { return [...this.tasks]; }
  getTaskById(id: number) { return this.tasks.find(t => t.id === id); }
  addTask(task: Task) { this.tasks.push({ ...task, id: Date.now() }); }
  updateTask(updated: Task) {
    const i = this.tasks.findIndex(t => t.id === updated.id);
    if (i !== -1) this.tasks[i] = updated;
  }
  deleteTask(id: number) { this.tasks = this.tasks.filter(t => t.id !== id); }
  toggleStatus(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.status = task.status === 'Completed' ? 'Pending' : 'Completed';
  }
}