import { Component } from '@angular/core';
import { Usuario } from 'src/app/core/models/user.model';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  public usuario: Usuario;
  public menuItems: any[];

  constructor( private sidebarService: SidebarService,
               private usuarioService: UserService) {
    this.menuItems = sidebarService.menu;
    this.usuario = usuarioService.usuario;
  }
}
