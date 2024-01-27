// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILoginData, IRegisterData } from '../core/interfaces/index.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    getToken() {
      throw new Error('Method not implemented.');
    }
    private apiUrl = 'http://localhost:3000/api'; // Ajusta a tu URL del backend

    constructor(private http: HttpClient) {}

    login(loginData: ILoginData): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/login`, loginData);
    }

    register(registerData: IRegisterData): Observable<any> {
        return this.http.post(`${this.apiUrl}/auth/register`, registerData);
    }


}
