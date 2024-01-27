import { Injectable } from '@angular/core';

interface Submenu {
  titulo: string;
  url: string;
}

interface MenuItem {
  titulo: string;
  icono: string;
  submenu: Submenu[];
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: MenuItem[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Gráficas', url: 'grafica1' },
      ]
    },
    {
      titulo: 'Mantenimientos',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: 'usuarios' },
        { titulo: 'Tareas', url: 'task' },
      ]
    },
  ];

  constructor() { }
}
