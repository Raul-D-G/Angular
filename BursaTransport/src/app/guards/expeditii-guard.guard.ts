import { AuthService } from 'src/app/shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ExpeditiiGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (
      this.authService.getRol() === 'transportator' ||
      !this.authService.isLoggedIn()
    ) {
      this.router.navigateByUrl('/companie');
      return false;
    }
    return true;
  }
}
