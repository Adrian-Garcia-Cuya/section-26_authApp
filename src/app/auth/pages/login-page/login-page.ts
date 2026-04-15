import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private authSerice = inject(AuthService);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email: ['isaias@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.myForm.value;
    this.authSerice.login(email, password).subscribe({
      next: () => this.router.navigateByUrl('/dashboard'),
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
  }
}
