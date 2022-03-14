import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ILogin, IOnboarding } from '../../interfaces/user';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  // baseUrl = 'https://api.test.woodcoreapp.com/api/v1/clients';
  baseUrl = 'https://gamelyd.herokuapp.com/';
  headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };

  // handle error method
  public handleError(errorRsponse: HttpErrorResponse): Observable<never> {
    if (errorRsponse.error instanceof ErrorEvent) {
      console.log('error from frontend', errorRsponse.error);
    } else {
      console.log('error from server', errorRsponse);
    }
    return throwError(() => errorRsponse);
  }

  getOnboardingStage(id: string): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.baseUrl + `${id}`)
      .pipe(catchError(this.handleError));
  }

  // onboarding service
  onboarding(data: IOnboarding): Observable<void> {
    return this.httpClient
      .post<void>(this.baseUrl, data, this.headers)
      .pipe(catchError(this.handleError));
  }

  // login service
  login(user: ILogin): Observable<void> {
    return this.httpClient
      .post<void>(this.baseUrl + 'users/login', user, this.headers)
      .pipe(catchError(this.handleError));
  }
}
