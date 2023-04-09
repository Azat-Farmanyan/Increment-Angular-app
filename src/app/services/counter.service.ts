import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  currentCount = new BehaviorSubject(0);
  constructor(private http: HttpClient) {}

  // increment(email: string, password: string): Observable<{ token: string }> {
  //   const loginData = {
  //     email: email,
  //     password: password,
  //   };
  //   return this.http.post<{ token: string }>(`${baseUrl}login`, loginData).pipe(
  //     tap((res) => {
  //       localStorage.setItem(userKey, JSON.stringify(res));
  //       this.setToken(res.token);
  //     })
  //   );
  // }
}
