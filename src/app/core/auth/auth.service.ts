import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;

  constructor() {
    this.isAuthenticated$ = false;
    if (localStorage.getItem('token')) {
      this.isAuthenticated$ = true;
    }
  }

  isAuthenticated$: boolean;

  getUserId() {
    return this.user;
  }
}
