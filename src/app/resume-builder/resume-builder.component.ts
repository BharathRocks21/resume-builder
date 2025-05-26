import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-resume-builder',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, ReactiveFormsModule, MatInputModule, HttpClientModule],
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.css']
})
export class ResumeBuilderComponent {


 templateImage?: File;
  coverImage?: File;
  resumeForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.resumeForm = this.fb.group({
      jobTitle: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      profileSummary: ['', Validators.required],
      skillOne: [''],
      skillTwo: [''],
      skillThree: [''],
      skillFour: [''],
      skillFive: [''],
      languageOne: [''],
      languageTwo: [''],
      languageThree: [''],
      languageFour: [''],
      languageFive: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      firstCompanyName: [''],
      firstCompanyRole: [''],
      firstCompanyLocation: [''],
      firstCompanyDescriptionOne: [''],
      firstCompanyDescriptionTwo: [''],
      secondCompanyName: [''],
      secondCompanyRole: [''],
      secondCompanyLocation: [''],
      secondCompanyDescriptionOne: [''],
      secondCompanyDescriptionTwo: [''],
      firstFieldOfStudy: [''],
      firstFieldOfStudyGrade: [''],
      firstFieldOfStudyLocation: [''],
      secondFieldOfStudy: [''],
      secondFieldOfStudyGrade: [''],
      secondFieldOfStudyLocation: [''],
      thirdFieldOfStudy: [''],
      thirdFieldOfStudyGrade: [''],
      thirdFieldOfStudyLocation: ['']
    });
  }

  onImageSelected(event: any): void {
     const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.templateImage = file;
  }

  onCoverImageSelected(event: any): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) this.coverImage = file;
  }

  previewResume() {
    const fd = new FormData();
    fd.append('templateId', '1');
    fd.append('jobTitle', this.resumeForm.value.jobTitle);
    fd.append('email', this.resumeForm.value.email);
    fd.append('phone', this.resumeForm.value.phone);
    fd.append('location', this.resumeForm.value.location);
    fd.append('profileSummary', this.resumeForm.value.profileSummary);
    fd.append('lastName', this.resumeForm.value.lastName);
    fd.append('firstName', this.resumeForm.value.firstName);
    fd.append('firstCompanyName', this.resumeForm.value.firstCompanyName);
    fd.append('firstCompanyRole', this.resumeForm.value.firstCompanyRole);
    fd.append('firstCompanyLocation', this.resumeForm.value.firstCompanyLocation);
    fd.append('secondCompanyName', this.resumeForm.value.secondCompanyName);
    fd.append('secondCompanyRole', this.resumeForm.value.secondCompanyRole);
    fd.append('secondCompanyLocation', this.resumeForm.value.secondCompanyLocation);
    fd.append('firstFieldOfStudy', this.resumeForm.value.firstFieldOfStudy);
    fd.append('firstFieldOfStudyGrade', this.resumeForm.value.firstFieldOfStudyGrade);
    fd.append('firstFieldOfStudyLocation', this.resumeForm.value.firstFieldOfStudyLocation);
    fd.append('secondFieldOfStudy', this.resumeForm.value.secondFieldOfStudy);
    fd.append('secondFieldOfStudyGrade', this.resumeForm.value.secondFieldOfStudyGrade);
    fd.append('secondFieldOfStudyLocation', this.resumeForm.value.secondFieldOfStudyLocation);
    fd.append('thirdFieldOfStudy', this.resumeForm.value.thirdFieldOfStudy);
    fd.append('thirdFieldOfStudyGrade', this.resumeForm.value.thirdFieldOfStudyGrade);
    fd.append('thirdFieldOfStudyLocation', this.resumeForm.value.thirdFieldOfStudyLocation);
    fd.append('skillOne', this.resumeForm.value.skillOne);
    fd.append('skillTwo', this.resumeForm.value.skillTwo);
    fd.append('skillThree', this.resumeForm.value.skillThree);
    fd.append('skillFour', this.resumeForm.value.skillFour);
    fd.append('skillFive', this.resumeForm.value.skillFive);
    fd.append('languageOne', this.resumeForm.value.languageOne);
    fd.append('languageTwo', this.resumeForm.value.languageTwo);
    fd.append('languageThree', this.resumeForm.value.languageThree);
    fd.append('languageFour', this.resumeForm.value.languageFour);
    fd.append('languageFive', this.resumeForm.value.languageFive);
    fd.append('firstCompanyDescriptionOne', this.resumeForm.value.firstCompanyDescriptionOne);
    fd.append('firstCompanyDescriptionTwo', this.resumeForm.value.firstCompanyDescriptionTwo);
    fd.append('secondCompanyDescriptionOne', this.resumeForm.value.secondCompanyDescriptionOne);
    fd.append('secondCompanyDescriptionTwo', this.resumeForm.value.secondCompanyDescriptionTwo);

    if (this.templateImage) {
      fd.append('templateImage', this.templateImage);
    }
    if (this.coverImage) {
      fd.append('coverImage', this.coverImage);
    }

    this.http.post('https://resume-backend-utyr.onrender.com/generate-resume', fd, { responseType: 'text' as 'text' })
      .subscribe(html => {
        const resumeHtml: string = html;
        const popup = window.open('', '_blank');

        if (popup) {
          popup.document.open();
          popup.document.write(`
               <!DOCTYPE html>
                <html>
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width">
                <title>Resume Preview</title>
                 <style>
                /* dark backdrop */

                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center; 
                    font-family: Arial, sans-serif;
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                    background: #000;
                  }
                    .outer-design {
                                padding: 2%;
                              }

                    /* the printable A4 page */
                    .a4-container {
                      width: 210mm;
                      height: 297mm;
                      background: #fff;
                      box-shadow: 0 0 15px rgba(255,255,255,.2);
                      transform: scale(.6);          /* zoom-out factor                            */
                      transform-origin: top center;  /* keep top edge fixed while scaling          */
                      overflow: hidden;              /* hide any spill-over inside the page        */
                    }

                              @media print {
                                body      { background: #fff; padding: 0; }
                                .a4-container {
                                  box-shadow: none;
                                  transform: none;             /* print at 100 % size                        */
                                  margin: 0;
                                }
                              }
                            </style>
                          </head>
                          <body>
                          <div class="outer-design">
                            <div class="a4-container">
                              ${resumeHtml}
                            </div>
                            </div>
                          </body>
                        </html>
                  `);

          popup.document.close();
        } else {
          console.error('Popup blocked! Please allow popups for this site.');
        }
      });
  }

   printResume() {
   const fd = new FormData();
    fd.append('templateId', '1');
    fd.append('jobTitle', this.resumeForm.value.jobTitle);
    fd.append('email', this.resumeForm.value.email);
    fd.append('phone', this.resumeForm.value.phone);
    fd.append('location', this.resumeForm.value.location);
    fd.append('profileSummary', this.resumeForm.value.profileSummary);
    fd.append('lastName', this.resumeForm.value.lastName);
    fd.append('firstName', this.resumeForm.value.firstName);
    fd.append('firstCompanyName', this.resumeForm.value.firstCompanyName);
    fd.append('firstCompanyRole', this.resumeForm.value.firstCompanyRole);
    fd.append('firstCompanyLocation', this.resumeForm.value.firstCompanyLocation);
    fd.append('secondCompanyName', this.resumeForm.value.secondCompanyName);
    fd.append('secondCompanyRole', this.resumeForm.value.secondCompanyRole);
    fd.append('secondCompanyLocation', this.resumeForm.value.secondCompanyLocation);
    fd.append('firstFieldOfStudy', this.resumeForm.value.firstFieldOfStudy);
    fd.append('firstFieldOfStudyGrade', this.resumeForm.value.firstFieldOfStudyGrade);
    fd.append('firstFieldOfStudyLocation', this.resumeForm.value.firstFieldOfStudyLocation);
    fd.append('secondFieldOfStudy', this.resumeForm.value.secondFieldOfStudy);
    fd.append('secondFieldOfStudyGrade', this.resumeForm.value.secondFieldOfStudyGrade);
    fd.append('secondFieldOfStudyLocation', this.resumeForm.value.secondFieldOfStudyLocation);
    fd.append('thirdFieldOfStudy', this.resumeForm.value.thirdFieldOfStudy);
    fd.append('thirdFieldOfStudyGrade', this.resumeForm.value.thirdFieldOfStudyGrade);
    fd.append('thirdFieldOfStudyLocation', this.resumeForm.value.thirdFieldOfStudyLocation);
    fd.append('skillOne', this.resumeForm.value.skillOne);
    fd.append('skillTwo', this.resumeForm.value.skillTwo);
    fd.append('skillThree', this.resumeForm.value.skillThree);
    fd.append('skillFour', this.resumeForm.value.skillFour);
    fd.append('skillFive', this.resumeForm.value.skillFive);
    fd.append('languageOne', this.resumeForm.value.languageOne);
    fd.append('languageTwo', this.resumeForm.value.languageTwo);
    fd.append('languageThree', this.resumeForm.value.languageThree);
    fd.append('languageFour', this.resumeForm.value.languageFour);
    fd.append('languageFive', this.resumeForm.value.languageFive);
    fd.append('firstCompanyDescriptionOne', this.resumeForm.value.firstCompanyDescriptionOne);
    fd.append('firstCompanyDescriptionTwo', this.resumeForm.value.firstCompanyDescriptionTwo);
    fd.append('secondCompanyDescriptionOne', this.resumeForm.value.secondCompanyDescriptionOne);
    fd.append('secondCompanyDescriptionTwo', this.resumeForm.value.secondCompanyDescriptionTwo);

    if (this.templateImage) {
      fd.append('templateImage', this.templateImage);
    }
    if (this.coverImage) {
      fd.append('coverImage', this.coverImage);
    }

    this.http.post('https://resume-backend-utyr.onrender.com/generate-resume', fd, { responseType: 'text' as 'text' })
      .subscribe(html => {
        const resumeHtml: string = html;

        const previewWindow = window.open('', '_blank');

        if (previewWindow) {
          previewWindow.document.open();
          previewWindow.document.write(`
            <html>
              <head>
                <title>Resume</title>
                <style>
                  @media print {
                    body {
                      margin: 0;
                    }
                  }
                </style>
              </head>
              <body onload="window.print(); window.close();">
                ${resumeHtml}
              </body>
            </html>
          `);
          previewWindow.document.close();
        } else {
          console.error('Popup blocked! Please allow popups for this site.');
        }
      });
  }
}
