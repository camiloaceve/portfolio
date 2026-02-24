import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../shared/services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  isSubmitting = false;
  isSuccess = false;
  isError = false;

  constructor(private emailService: EmailService) {}

  onSubmit() {
    if (this.isSubmitting) return;
    
    // Store form data before reset
    const formDataToSend = { ...this.formData };
    
    // Reset form immediately
    this.formData = { name: '', email: '', message: '' };
    this.isSubmitting = true;
    this.isError = false;
    this.isSuccess = false;

    this.emailService.sendEmail(formDataToSend).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
        this.isSubmitting = false;
        this.isSuccess = true;
        
        setTimeout(() => {
          this.isSuccess = false;
        }, 5000);
      },
      error: (error) => {
        console.error('Error sending email:', error);
        this.isSubmitting = false;
        this.isError = true;
        
        setTimeout(() => {
          this.isError = false;
        }, 5000);
      }
    });
  }
}
