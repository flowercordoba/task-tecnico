import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        response => {
          console.log(response);
          // Aquí manejas la respuesta. Normalmente, guardarías el token en localStorage y redirigirías al usuario
          localStorage.setItem('token', response.token);
          // Redirigir al usuario a la página principal o dashboard
        },
        error => {
          console.error(error);
          // Manejar errores, como mostrar un mensaje al usuario
        }
      );
    }
  }
}
