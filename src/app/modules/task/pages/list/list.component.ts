import { Component } from '@angular/core';


interface Task {
  _id: string;
  title: string;
  description: string;
  completed: boolean;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {



}
