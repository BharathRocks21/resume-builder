// import { inject } from '@angular/core';
// import { CanActivate, CanActivateFn, Router, UrlTree } from '@angular/router';
// import { AuthService } from '../auth.service';


// export class authGuard implements CanActivate {
//   constructor(private auth: AuthService, private router: Router) {}

//   canActivate(): boolean | UrlTree {
//     return this.auth.isLoggedIn() ? true : this.router.parseUrl('/login');
//   }
// }

// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn() ? true : router.parseUrl('/login');
};
