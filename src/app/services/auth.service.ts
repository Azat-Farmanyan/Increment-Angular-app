import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../core/constants/baseUrl';
import { Observable, tap } from 'rxjs';
import { userKey } from '../core/constants/authconstants';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  login(email: string, password: string): Observable<{ token: string }> {
    const loginData = {
      email: email,
      password: password,
    };
    return this.http.post<{ token: string }>(`${baseUrl}login`, loginData).pipe(
      tap((res) => {
        this.storageService.setUserData(res);
        this.setToken(res.token);
      })
    );
  }
  logout() {
    this.setToken('');
    this.storageService.clearStorage();
  }

  setToken(token: string) {
    this.token = token;
  }
}
