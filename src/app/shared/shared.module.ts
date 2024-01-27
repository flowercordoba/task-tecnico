import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GraficaComponent } from './grafica/grafica.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    // GraficaComponent,
    SidebarComponent
    
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
