import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  responseError = '';
  loginSubs: Subscription;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginSubs = this.authService.login(email, password).subscribe(
        (data) => {
          if (data) this.responseError = '';
          this.router.navigate(['/home']);
        },
        (err) => {
          this.responseError = err?.error?.message;
        }
      );
    }
  }

  isValidForm() {
    return this.loginForm.valid;
  }

  ngOnDestroy(): void {
    this.loginSubs?.unsubscribe();
  }
}
