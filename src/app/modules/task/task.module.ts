import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateTaskComponent } from './pages/create-task/create-task.component';
import { ListComponent } from './pages/list/list.component';
import { UpdateComponent } from './pages/update/update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskComponent,
    CreateTaskComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class TaskModule { }
