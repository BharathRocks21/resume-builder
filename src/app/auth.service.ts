import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly USER_KEY = 'auth_user';

  constructor(private router: Router) {}

  login(user: { username: string; password: string }): boolean {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const match = storedUsers.find((u: any) =>
      u.username === user.username && u.password === user.password
    );

    if (match) {
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  }

  register(user: { username: string; password: string }): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find((u: any) => u.username === user.username);
    if (exists) return false;

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.USER_KEY);
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
    this.router.navigate(['/login']);
  }
}