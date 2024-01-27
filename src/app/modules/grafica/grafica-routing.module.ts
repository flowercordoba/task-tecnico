import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { GraficaComponent } from 'src/app/shared/grafica/grafica.component';
import { GraficaUserComponent } from './page/grafica-user/grafica-user.component';
import { GraficaTareaComponent } from './page/grafica-tarea/grafica-tarea.component';
import { GraficaComponent } from './grafica.component';

const routes: Routes = [
  {path:'',component:GraficaComponent,
  children:[
    {
      path:'users',component:GraficaUserComponent
    },
    {
      path:'tareas',component:GraficaTareaComponent
    }

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficaRoutingModule { }
