import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GraficaComponent } from './grafica/grafica.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { P404Component } from './p-404/p-404.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    // GraficaComponent,
    SidebarComponent,
    P404Component
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgChartsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    // GraficaComponent,
    SidebarComponent
    
  ]
})
export class SharedModule { }
