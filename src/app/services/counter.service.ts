import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { baseUrl } from '../core/constants/baseUrl';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor(private http: HttpClient) {}

  increment(count: number) {
    return this.http.post(`${baseUrl}increment`, { count });
  }
}
