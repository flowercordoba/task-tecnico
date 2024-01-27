import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: UserService) {
    this.loginForm = this.fb.group({
      email: ['flowercordoba7@gmail.com', [Validators.required, Validators.email]],
      password: ['flower', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.loginUser(this.loginForm.value).subscribe(
        response => {
          console.log(response);
          localStorage.setItem('token', response.token);
        },
        error => {
          console.error(error);
          // Manejar errores, como mostrar un mensaje al usuario
        }
      );
    }
  }
}
