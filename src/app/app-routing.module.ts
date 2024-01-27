import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'auth',loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  {path:'user',loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }