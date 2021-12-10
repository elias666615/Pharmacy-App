import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInfo, Store, UserInfo } from '../models/userModels';
import { UserDataManager } from './userDataManager';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signup(data: FormData) {
    return this.http.post('http://127.0.0.1:8000/auth/register/', data);
  }

  login(data: FormData) {
    return this.http.post<LoginInfo>('http://127.0.0.1:8000/auth/login/', data);
  }

  fetchUser(email: string) {
    console.log(UserDataManager.getAccessToken());
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + UserDataManager.getAccessToken()
      })
    };
    return this.http.get<UserInfo>('http://127.0.0.1:8000/auth/user/?email=' + email);
  }

  fetchStore(email: string) {
    const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer ' + UserDataManager.getAccessToken()
      })
    };
    return this.http.get<Store>('http://127.0.0.1:8000/auth/store/?user=' + email);
  }
}
