import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [{
  path:'',
  component:PagesComponent,
  children:[
    {path:'detail',component:UserDetailComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
