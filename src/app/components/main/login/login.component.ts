import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { ServiceService } from '../servicios/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/servicios/authentication.service';
import { first} from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  isLogin: boolean = false;
  
  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private activatedRoute: ActivatedRoute

    ) { }

  ngOnInit() { 
  }
  setUser()
  {
    console.log('user',this.user);
  }
  getUser()
  {
    this.serviceService.getUser().subscribe(
      data => 
      {
        console.log('los datos son: ', data);
        if (data.find(f => f.user === this.user.user && f.pass == this.user.pass))
        {
          this.isLogin = true;
        }
        else
        {
          this.isLogin = false;
        }
        console.log('isLogin: ',this.isLogin)
      },
      error =>
      {
        console.log('error', error);
      }
      
    );
  }
  onSubmit(){
    this.authenticationService.login(this.user.user, this.user.pass)
    .pipe(first())
    .subscribe(
      data =>{
        if(data)
        {
          localStorage.setItem('username', data.name + ' ' + data.lastname);
        }
        this.router.navigate(['../home'],{relativeTo: this.activatedRoute});
      },
      error => {
        console.log('error', error);
        
      }
    )
  }
}
