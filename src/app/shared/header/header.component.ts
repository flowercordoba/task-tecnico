import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  constructor(private authService: UserService, private router: Router) {}

logout() {
  this.authService.logout();
  this.router.navigate(['/auth/login']);
}
goToUserProfile() {
  this.router.navigate(['/user/profile']);
}

}
