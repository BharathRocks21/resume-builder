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
  confirm='';
  error = '';
  success = '';

  constructor(private auth: AuthService, private router: Router) {}

  signup() {
if (this.password !== this.confirm) {
      alert('Passwords do not match'); return;
    }

    const res = this.auth.register({ username: this.username, password: this.password });
    if (res) {
      this.success = 'Registered successfully! Please log in.';
      this.router.navigate(['/login']);
    } else {
      this.error = 'User already exists.';
    }
  }
}