import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // <-- required for *ngFor and *ngIf
import { AuthService } from './auth.service';

interface MenuItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


constructor(private router: Router,
  public auth: AuthService){}
  title='';
  menuItems: MenuItem[] = [
    { icon: 'home', label: 'Home', route: '/home' },
    { icon: 'info', label: 'About', route: '/about' },
    //  { icon: 'info', label: 'Template', route: '/template' },
  ];

  logout() {
    this.auth.logout();  // remove user from localStorage
    this.router.navigate(['/login']);
  }

}
