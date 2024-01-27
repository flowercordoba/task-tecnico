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
