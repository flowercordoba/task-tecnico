import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
// import { Label } from 'ng2-charts';
import { TaskService } from 'src/app/services/task.service';
import { TaskModel } from 'src/app/core/models/task.model';

interface TaskCount {
  [userId: string]: number;
}

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.sass']
})
export class GraficaComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  // public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataset[] = [
    { data: [], label: 'Tareas Asignadas' }
  ];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  private loadChartData(): void {
    this.taskService.getAllTasks().subscribe((tasks: TaskModel[]) => {
      // Usa TaskCount como el tipo para el acumulador
      const taskCountByUser = tasks.reduce((acc: TaskCount, task) => {
        const userId = task.assignedTo;
        acc[userId] = (acc[userId] || 0) + 1;
        return acc;
      }, {} as TaskCount); // Inicia el acumulador como un objeto de tipo TaskCount

      // this.barChartLabels = Object.keys(taskCountByUser);
      this.barChartData[0].data = Object.values(taskCountByUser);
    });
  }
}
