// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { TemplateComponent } from './template/template.component';
// import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';

// export const appRoutes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to home
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'template', component: TemplateComponent },
//   { path: 'resume-builder', component: ResumeBuilderComponent }
// ];

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
    path: 'resume-builder',
    canActivate: [authGuard],
    loadComponent: () => import('./resume-builder/resume-builder.component').then(m => m.ResumeBuilderComponent),
  },
  { path: '**', redirectTo: 'login' },
];
