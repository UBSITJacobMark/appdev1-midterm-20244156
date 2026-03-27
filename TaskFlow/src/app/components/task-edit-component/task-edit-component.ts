import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './task-edit-component.html'
})
export class TaskEditComponent implements OnInit {
  editForm!: FormGroup;
  taskId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    // Get ID from the parent route (tasks/:id)
    const parentParams = this.route.parent?.snapshot.paramMap;
    this.taskId = Number(parentParams?.get('id'));
    
    const task = this.taskService.getTaskById(this.taskId);

    // Initialize the form with existing task data
    this.editForm = this.fb.group({
      title: [task?.title || '', [Validators.required]],
      dueDate: [task?.dueDate || '', [Validators.required]],
      priority: [task?.priority || 'Low'],
      status: [task?.status || 'Pending']
    });
  }

  onUpdate(): void {
    if (this.editForm.valid) {
      // FIX: Combine ID and form values into ONE argument
      const updatedTask = { 
        id: this.taskId, 
        ...this.editForm.value 
      };

      // Call service with the single combined object
      this.taskService.updateTask(updatedTask);
      
      // Navigate back to the info view
      this.router.navigate(['../info'], { relativeTo: this.route });
    }
  }
}
