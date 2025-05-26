import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  username = '';
  password = '';
  confirm = '';

  constructor(private auth: AuthService) {}

  signup() {
    if (this.password !== this.confirm) {
      alert('Passwords do not match');
      return;
    }
    this.auth.signup({ username: this.username, password: this.password });
  }
}