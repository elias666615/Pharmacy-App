import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signupSeller(data: FormData) {
    return this.http.post('http://127.0.0.1:8000/auth/register/', data);
  }
}
