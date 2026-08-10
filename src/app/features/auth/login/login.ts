import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../core/authe/authe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  username: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login(): void {

    // Create request payload
    const payload = {
      username: this.username,
      password: this.password
    };

    console.log("Login Payload:", payload);

    // Call Backend Login API
    this.authService.login(payload).subscribe({

      next: (response: { access_token: string; }) => {

        console.log("Login Success:", response);

        // Store JWT Token
        localStorage.setItem(
          'access_token',
          response.access_token
        );

        // Navigate to Dashboard
        this.router.navigate(['/dashboard']);

      },

      error: (error: any) => {

        console.error("Login Failed:", error);

        alert("Invalid Username or Password");

      }

    });

  }

}