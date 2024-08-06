import { Component } from '@angular/core';
import { AuthService } from '../home/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  email: string = '';
  password: string = '';

  login() {
    if (this.email == '' && this.password == '')
      alert('Please fill the credentials');

    this.authService.login(this.email, this.password);
  }

  toRegister() {
    this.router.navigate(['register']);
  }
}
