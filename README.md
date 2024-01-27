# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


<div class="container mx-auto p-6 bg-white shadow-md">
  <div class="mb-4">
    <h2 class="text-xl font-semibold text-gray-700">Actualizar perfil</h2>
  </div>

  <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="w-full max-w-lg">
    <!-- Nombre -->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Nombre</label>
      <input type="text" id="name" formControlName="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>

    <!-- Email -->
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Correo Electrónico</label>
      <input type="email" id="email" formControlName="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>

    <!-- Otros campos si son necesarios -->

    <!-- Botones -->
    <div class="flex items-center justify-between">
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Actualizar</button>
      <button type="button" (click)="cancel()" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancelar</button>
    </div>
  </form>
</div>
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.sass']
})
export class UserProfileComponent {
logout // this.imageSrc = ...; // URL de la imagen del perfil
() {
throw new Error('Method not implemented.');
}
goToUserProfile() {
throw new Error('Method not implemented.');
}
cancel() {
throw new Error('Method not implemented.');
}
  userForm!: FormGroup;
  user: any;
  imageSrc!: string;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadUserData();
    this.initForm();
  }

  loadUserData() {
    // Cargar los datos del usuario desde el servicio y asignar a 'user'
    // this.user = ...;
    // this.imageSrc = ...; // URL de la imagen del perfil
  }

  initForm() {
    this.userForm = this.fb.group({
      name: [this.user?.name, Validators.required],
      email: [this.user?.email, [Validators.required, Validators.email]],
      // otros campos si es necesario
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Actualizar los datos del usuario
    }
  }



onImageChange(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input && input.files && input.files.length) {
    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (e.target && e.target.result) {
        this.imageSrc = e.target.result as string;
      }
    };

    reader.readAsDataURL(file);
  }
}


}










<div class="container mx-auto p-6 bg-white shadow-md">
    <div class="mb-4">
      <h2 class="text-xl font-semibold text-gray-700">Mi Perfil</h2>
    </div>
  
    <!-- Sección de detalles del usuario -->
    <div class="w-full max-w-lg">
      <!-- Nombre -->
      <p class="mb-4">Nombre: {{ userProfile.name }}</p>
  
      <!-- Email -->
      <p class="mb-4">Correo Electrónico: {{ userProfile.email }}</p>
  
     
    </div>
  </div>
  

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
