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











  
