import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../servicios/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate 
{
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot)
  {
    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser)
    {
      console.log('Usuario Autorizado');
      return true;
    }
      console.log('Usuario sin Autorizacion');
      this.router.navigate(['/login']);
      return false;
  }
   
}
  
