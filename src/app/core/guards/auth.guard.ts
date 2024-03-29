import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private usuarioService: UserService,
               private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      return this.usuarioService.validarToken()
        .pipe(
          tap( estaAutenticado =>  {
            if ( !estaAutenticado ) {
              this.router.navigateByUrl('/auth/login');
            }
          })
        );
  }

}
