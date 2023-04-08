import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const loginData = {
      email: email,
      password: password,
    };
    return this.http.post('http://localhost:3000/login', loginData);
  }
}
