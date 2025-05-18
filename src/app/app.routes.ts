import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TemplateComponent } from './template/template.component';
import { LoginComponent } from './login/login.component'; // ✅ Added import
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect root to home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'login', component: LoginComponent }, // ✅ Added login route
  { path: 'resume-builder', component: ResumeBuilderComponent }
];
