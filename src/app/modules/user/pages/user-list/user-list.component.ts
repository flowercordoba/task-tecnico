import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Usuario } from "src/app/core/models/user.model";
import { BusquedasService } from "src/app/services/busquedas.service";
import { UserService } from "src/app/services/user.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.sass"],
})
export class UserListComponent implements OnInit, OnDestroy {
chageRol() {
throw new Error('Method not implemented.');
}
verDetalle(arg0: string|undefined) {
throw new Error('Method not implemented.');
}
editarUsuario(arg0: string|undefined) {
throw new Error('Method not implemented.');
}
  public totalUsuarios: number = 0;
  public usuarios: Usuario[] = [];
  
  public usuariosTemp: Usuario[] = [];
  public desde: number = 0;
  public cargando: boolean = true;

  private imgSubs?: Subscription;

  constructor(
    private usuarioService: UserService,
    private busquedasService: BusquedasService
  ) {}

  ngOnDestroy(): void {
    this.imgSubs?.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarUsuarios();
    // this.imgSubs = this.modalImagenService.nuevaImagen
    //   .pipe(delay(100))
    //   .subscribe( _ => this.cargarUsuarios() );
  }

  cargarUsuarios(): void {
    this.cargando = true;
    this.usuarioService.cargarUsuarios(this.desde)
      .subscribe(({ total, usuarios }) => {
        // console.log(usuarios); 
        this.totalUsuarios = total;
        this.usuarios = usuarios;
        this.usuariosTemp = usuarios;
        this.cargando = false;
      });
  }

  cambiarPagina(valor: number): void {
    this.desde += valor;

    if (this.desde < 0) {
      this.desde = 0;
    } else if (this.desde >= this.totalUsuarios) {
      this.desde -= valor;
    }

    this.cargarUsuarios();
  }

  buscar(termino: string): void {
    if (termino.length === 0) {
      this.usuarios = [...this.usuariosTemp];
      return;
    }

    this.busquedasService.buscar('usuarios', termino)
      .subscribe(resp => this.usuarios = resp);
  }

  cambiarRole(usuario: Usuario): void {
    this.usuarioService.guardarUsuario(usuario)
      .subscribe(resp => console.log(resp));
  }

  eliminarUsuario( usuario: Usuario) {
    Swal.fire({
      title: '¿Borrar usuario?',
      text: `Esta a punto de borrar a ${ usuario.name }`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si, borrarlo'
    }).then((result) => {
      if (result.value) {
        
        this.usuarioService.deleteUser( usuario )
          .subscribe( resp => {
            
            this.cargarUsuarios();
            Swal.fire(
              'Usuario borrado',
              `${ usuario.name } fue eliminado correctamente`,
              'success'
            );
            
          });

      }
    })
    
  }



  
  // abrirModal(usuario: Usuario): void {
  //   this.modalImagenService.abrirModal('usuarios', usuario.uid, usuario.img);
  // }


}
