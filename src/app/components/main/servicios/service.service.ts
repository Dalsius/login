import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/model/country';
import { Alumno } from 'src/app/model/alumno';
import { Notas } from 'src/app/model/notas';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private userUrl = 'api/user';
  private countryUrl = 'api/country';
  private alumUrl = 'api/alumno';
  private notasUrl = 'api/notas'

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
  getAlumno(): Observable<Alumno[]>
  {
    return this.http.get<Alumno[]>(this.alumUrl).pipe();
  }
  getNotas(rut): Observable<Notas[]>
  {
    return this.http.get<Notas[]>(this.notasUrl + '?rut=' + rut).pipe();
  }
}
