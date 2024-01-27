import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  public formSubmitted = false;
  public registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', [ Validators.required, Validators.email ] ],
      password: ['', Validators.required ],
      repassword: ['', Validators.required ],
      terminos: [ true, Validators.required ],
    }, {
      validators: this.passwordsIguales('password', 'repassword')
    });
  }

  crearUsuario() {
    this.formSubmitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    // Realizar el posteo
    this.authService.RegisterUser(this.registerForm.value)
      .subscribe(resp => {
        // Navegar al Dashboard
        this.router.navigateByUrl('/');
      }, (err) => {
        // Si sucede un error
        alert('error');
      });
  }

  campoNoValido(campo: string): boolean {
    if (this.registerForm.get(campo)!.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  contrasenasNoValidas() {
    const pass1 = this.registerForm.get('password')!.value;
    const pass2 = this.registerForm.get('repassword')!.value;

    if ((pass1 !== pass2) && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos() {
    return !this.registerForm.get('terminos')!.value && this.formSubmitted;
  }


  passwordsIguales(pass1Name: string, pass2Name: string) {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if (pass1Control!.value === pass2Control!.value) {
        pass2Control!.setErrors(null);
      } else {
        pass2Control!.setErrors({ noEsIgual: true });
      }
    };
  }
}
