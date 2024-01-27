import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ILoginData, IRegisterData, IUser } from '../core/interfaces/index.interfaces';
import { Usuario } from '../core/models/user.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usuario!: Usuario;

  constructor( private http: HttpClient,
    private router: Router,) { }

  logout() {
    localStorage.removeItem('token');
  }

  validarToken(): Observable<boolean> {

    return this.http.get(`${ base_url }/auth/renew`, {
      headers: {
        'x-token': this.token
      }
    }).pipe(
      map( (resp: any) => {
        const { email, google, name, role, img = '', uid } = resp.usuario;
        console.log('====>',resp.usuario)
        this.usuario = new Usuario( name, email, '', img, google, role, uid );
        localStorage.setItem('token', resp.token );
        return true;
      }),
      catchError( error => of(false) )
    );

  }
  // ... otros métodos ...

getUserDetails(): Observable<Usuario> {
  return this.http.get<Usuario>(`${base_url}/users/me`, {
    headers: {
      'x-token': this.token
    }
  }).pipe(
    map((resp: any) => new Usuario(
      resp.usuario.name, 
      resp.usuario.email, 
      '', // password no es necesario
      resp.usuario.img, 
      resp.usuario.google, 
      resp.usuario.role, 
      resp.usuario.uid
    )),
    catchError(error => {
      console.error('Error al obtener los detalles del usuario', error);
      return of(new Usuario('', '', ''));
    })
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

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get uid():string {
    return this.usuario.uid || '';
  }



}
