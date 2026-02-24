import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly formspreeUrl = 'https://formspree.io/f/xkovqrgl';

  constructor(private http: HttpClient) {}

  sendEmail(formData: { name: string; email: string; message: string }): Observable<any> {
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      _replyto: formData.email,
      _subject: `New Contact Form Message from ${formData.name}`
    };

    return this.http.post(this.formspreeUrl, payload).pipe(
      map(response => {
        console.log('Formspree response:', response);
        return { success: true, data: response };
      }),
      catchError(error => {
        console.error('Formspree failed:', error);
        return of({ success: false, error: error.message });
      })
    );
  }
}
