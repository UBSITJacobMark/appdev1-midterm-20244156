import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-info-component.html'
})
export class TaskInfoComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute, 
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.loadTasks(); 
  }
  loadTasks(): void {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTaskById(id);
  }
}
