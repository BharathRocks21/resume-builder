import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',  // or 'app-templates' if that's your selector
  templateUrl: './template.component.html',  // or 'templates.component.html'
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

   constructor(private router: Router) {}

  templates = [
    {
      name: 'Modern Blue',
      image: 'assets/templates/template1.png'
    },
    {
      name: 'Classic Gray',
      image: 'assets/templates/template2.png'
    },
    {
      name: 'Minimalist',
      image: 'assets/templates/template3.png'
    }
  ];

  // ✅ This is the missing method causing the error
 selectTemplate(template: string) {
    // Navigate to a different component (e.g., 'template-preview')
    this.router.navigate(['/resume-builder']);
  }
}
