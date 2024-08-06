import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  register(email: string, password: string) {
    console.log(email);
    this.auth.createUserWithEmailAndPassword(email, password).then(
      (success) => {
        success.user?.sendEmailVerification().then((res) => {
          alert('check your inbox for email verification link');
          this.router.navigate(['login']);
        });
      },
      (error) => {
        alert(error);
      }
    );
  }

  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password).then(
      (res) => {
        localStorage.setItem('token', email);
        if (res.user?.emailVerified) this.router.navigate(['home']);
        else alert('email not verified');
      },
      (error) => {
        alert(error);
      }
    );
  }

  logout() {
    this.auth.signOut().then(() => {
      alert('Logout Succesfull');
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    });
  }
}
