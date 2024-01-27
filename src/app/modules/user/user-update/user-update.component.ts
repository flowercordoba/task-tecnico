import { Component } from '@angular/core';
import { IUser } from 'src/app/core/interfaces/index.interfaces';
import { Usuario } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.sass']
})
export class UserUpdateComponent {
  userProfile!: Usuario; 

  constructor(private authService: UserService) { }



  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this.authService.getUserDetails().subscribe(
      (usuario: Usuario) => {
        this.userProfile = usuario;
      },
      (error) => {
        console.error('Error al obtener los datos del usuario', error);
      }
    );
  }



logout() {
throw new Error('Method not implemented.');
}
goToUserProfile() {
throw new Error('Method not implemented.');
}

}
