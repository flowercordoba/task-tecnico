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
   
  }


}
