import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';

const routes: Routes = [{
  path:'',
  component:PagesComponent,
  children:[
    {path:'/:id',component:UserDetailComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
