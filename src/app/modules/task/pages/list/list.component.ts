import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/core/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  tasks: TaskModel[] = []; // Array para almacenar las tareas

  constructor(private taskService: TaskService) {} // Inyectar el TaskService

  ngOnInit() {
    this.loadTasks();
   
  }

  loadTasks() {
    this.taskService.cargarTareas().subscribe({
      next: (tasks) => {
        this.tasks = tasks; 
      },
      error: (error) => {
        console.error('Error al cargar las tareas', error);
      }
    });
   
  }
}
