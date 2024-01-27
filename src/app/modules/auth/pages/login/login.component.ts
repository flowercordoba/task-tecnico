import { Component, NgZone, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginData } from 'src/app/core/interfaces/index.interfaces';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {


  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: [ localStorage.getItem('email') || '' , [ Validators.required, Validators.email ] ],
    password: ['', Validators.required ],
    remember: [false]


  });

  constructor( private router: Router,
    private fb: FormBuilder,
    private usuarioService: UserService,

    ) { }

    login() {
      const email = this.loginForm.get('email')?.value || '';
      const password = this.loginForm.get('password')?.value || '';
      const remember = this.loginForm.get('remember')?.value || false;

      const loginData: ILoginData = {
        email,
        password,
        remember
      };

      this.usuarioService.loginUser(loginData)
        .subscribe(resp => {
          if (remember) {
            localStorage.setItem('email', email);
          } else {
            localStorage.removeItem('email');
          }
          this.router.navigateByUrl('/');
        }, (err) => {
          alert('error');
        });
    }








}
