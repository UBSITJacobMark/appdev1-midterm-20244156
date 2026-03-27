import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add-component.html'
})

export class TaskAddComponent {
  newTask: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Medium',
    category: 'General'
  };

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit() {
    if (this.newTask.title && this.newTask.description) {
      this.taskService.addTask(this.newTask);
      alert('Task added successfully!');
      this.router.navigate(['/tasks']);
    }
  }
}