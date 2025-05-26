import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule ,RouterModule],
  templateUrl: './login.component.html',
})

export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService) {}

  login() {
    this.auth.login({ username: this.username, password: this.password });
  }
}