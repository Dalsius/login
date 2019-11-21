import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userUrl = 'api/user';
  private currentUserSubject = new BehaviorSubject<User>(null);
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient
  ) { }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(userName: string, pass: string): Observable<User> 
  {
    return this.http.get<User[]>(this.userUrl)
    .pipe(map(user => 
    {
      const userAux = user.find(f => f.user === userName && f.pass == pass);
      if(userAux)
      {
        this.currentUserSubject.next(userAux);
      }
      return userAux;
    })
    );
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
