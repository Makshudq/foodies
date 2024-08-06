import { Component } from '@angular/core';
import { AuthService } from '../home/shared/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  email: any;
  password: any;
  useremail: string = '';
  userpassword: string = '';

  register() {
    if (this.email == '' && this.password == '')
      alert('Please fill the credentials');
    this.authService.register(this.email, this.password);
    console.log(this.email);
  }

  tologin() {
    this.router.navigate(['login']);
  }

  newuser = new FormGroup({
    useremail: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });
}
