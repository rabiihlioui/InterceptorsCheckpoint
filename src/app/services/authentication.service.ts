import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_AUTH_LINK = 'https://immense-citadel-91115.herokuapp.com/api/Users/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  login(credentials) {
    return this.http.post<any>(API_AUTH_LINK, credentials)
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('loginToken')
    return !(user === null)    // null means user is not logged in
  }

  logout() {
    localStorage.removeItem('loginToken')
  }

  getToken() {
    return localStorage.getItem('loginToken')
  }

}
