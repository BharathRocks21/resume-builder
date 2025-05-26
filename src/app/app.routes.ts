import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login.component';
import { SignupComponent } from './pages/signup.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'home',
    canActivate: [authGuard],
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    canActivate: [authGuard],
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'template',
    canActivate: [authGuard],
    loadComponent: () => import('./template/template.component').then(m => m.TemplateComponent),
  },
  {
    path: 'api-setup',
    canActivate: [authGuard],
    loadComponent: () => import('./api-setup/api-setup.component').then(m => m.ApiSetupComponent),
  },
  {
    path: 'resume-builder',
    canActivate: [authGuard],
    loadComponent: () => import('./resume-builder/resume-builder.component').then(m => m.ResumeBuilderComponent),
  },
  { path: '**', redirectTo: 'login' },
];
