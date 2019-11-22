import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/model/country';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private userUrl = 'api/user';
  private countryUrl = 'api/country';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>
  {
    return this.http.get<User[]>(this.userUrl).pipe();
  }
  save(user: User)
  {
    console.log('usuario a guardar', user);
    return this.http.post<User>(this.userUrl, user).pipe();
  }
  getAll(): Observable<Country[]>
  {
    return this.http.get<Country[]>(this.countryUrl).pipe();
  }
}
