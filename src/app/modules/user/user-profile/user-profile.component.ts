import { Component } from "@angular/core";
import { Usuario } from "src/app/core/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.sass"],
})
export class UserProfileComponent {
  userProfile!: Usuario;

  constructor(private authService: UserService) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.authService.getUserDetails().subscribe(
      (usuario: Usuario) => {
        this.userProfile = usuario;
      },
      (error) => {
        console.error("Error al obtener los datos del usuario", error);
      }
    );
  }

}
