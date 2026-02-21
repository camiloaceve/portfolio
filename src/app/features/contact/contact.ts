import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  onSubmit() {
    this.isSubmitting = true;

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.isSuccess = true;

      // Reset form after success
      setTimeout(() => {
        this.isSuccess = false;
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      }, 3000);
    }, 1500);
  }
}
