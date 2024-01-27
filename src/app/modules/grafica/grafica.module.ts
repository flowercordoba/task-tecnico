import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraficaRoutingModule } from './grafica-routing.module';
import { GraficaUserComponent } from './page/grafica-user/grafica-user.component';
import { GraficaTareaComponent } from './page/grafica-tarea/grafica-tarea.component';
import { GraficaComponent } from './grafica.component';


@NgModule({
  declarations: [
    GraficaUserComponent,
    GraficaTareaComponent,
    GraficaComponent
  ],
  imports: [
    CommonModule,
    GraficaRoutingModule
  ]
})
export class GraficaModule { }
