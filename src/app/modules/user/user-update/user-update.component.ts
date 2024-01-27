import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Usuario } from "src/app/core/models/user.model";

@Component({
  selector: "app-user-update",
  templateUrl: "./user-update.component.html",
  styleUrls: ["./user-update.component.sass"],
})
export class UserUpdateComponent implements OnInit {
  public perfilForm!: FormGroup;
  public usuario: Usuario;

  constructor(private fb: FormBuilder, private usuarioService: UserService) {
    this.usuario = usuarioService.usuario;
    this.initForm();
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  initForm() {
    this.perfilForm = this.fb.group({
      // name: [ this.usuario.name, Validators.required ],
      // email: [ this.usuario.email, [Validators.required, Validators.email] ],
    });
  }

  loadUserProfile() {
    this.usuarioService.getUserDetails().subscribe(user => {
      this.usuario = user;
      this.perfilForm.patchValue({
        name: user.name,
        email: user.email,
      });
    });
  }

  actualizarPerfil() {
    if (this.perfilForm.valid) {
      this.usuarioService.updatePerfil(this.perfilForm.value).subscribe({
        next: (resp) => {
          const { name, email } = this.perfilForm.value;
          
          this.usuario.name = name;
          this.usuario.email = email;
          alert('Perfil actualizado con éxito');
        },
        error: (err) => {
          alert('Ocurrió un error al actualizar el perfil');
        }
      });
    }
  }
}
