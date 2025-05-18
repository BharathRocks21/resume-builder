import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Add this

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Add FormsModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';  // ✅ Initialize
  email: string = '';
  password: string = '';

  onLogin() {
    // Your login logic
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
    } else {
      this.errorMessage = '';
      console.log('Logging in with', this.email, this.password);
    }
  }
}



