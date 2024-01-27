import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path:'home',component:HomePageComponent,
  canActivate: [ AuthGuard ],},
  {path:'auth',loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)},
  {path:'user',loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)},
  {path:'grafica',loadChildren:()=>import('./modules/grafica/grafica.module').then(m=>m.GraficaModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
