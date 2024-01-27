import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ILoginData, IRegisterData } from '../core/interfaces/index.interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient,
    private router: Router,) { }

  logout() {
    localStorage.removeItem('token');
  }

  validarToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ base_url }/auth/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token );
      }),
      map( resp => true),
      catchError( error => of(false) )
    );

  }


  RegisterUser( formData: IRegisterData ) {

    return this.http.post(`${ base_url }/auth/register`, formData )
              .pipe(
                tap( (resp: any) => {
                  localStorage.setItem('token', resp.token );
                  this.router.navigateByUrl('/home'); // Redirige al usuario al home después del inicio de sesión

                })
              )

  }

  loginUser( formData: ILoginData ) {

    return this.http.post(`${ base_url }/auth/login`, formData )
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.token );
                    this.router.navigateByUrl('/home'); // Redirige al usuario al home después del inicio de sesión

                  })
                );

  }


}
