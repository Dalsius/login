import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../servicios/service.service';
import { User } from 'src/app/model/user.model';
import { Country } from 'src/app/model/country';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
  formG: FormGroup;
  user: User = new User();
  countryList: Country[];
  constructor
  (
    private formB: FormBuilder,
    private serviceService: ServiceService
  ) { }

  ngOnInit() 
  {
    this.buildForm()
    this.getCountries()
  }

 buildForm()
 {
  this.formG = this.formB.group
  ({
    name: [null, Validators.required],
    lastname: [null, Validators.required],
    userN: [null, Validators.required],
    pass: [null, Validators.required],
    country: null
  });
 }
 saveUser()
 {
     this.user.name = this.formG.get('name').value;
     this.user.lastname = this.formG.get('lastname').value;
     this.user.user = this.formG.get('userN').value;
     this.user.pass = this.formG.get('pass').value;
     this.user.countryId = this.formG.get('country').
     value;
     
     this.serviceService.save(this.user).subscribe(
     data => 
     {
       console.log('Se guardo el Usuario', data);
       },
     error =>
     {
       console.log('error guardando', error);
     }
     
   );
 }

 getCountries()
 {
   this.serviceService.getAll().subscribe
   (
    data => 
    {
     this.countryList = data
    },
    error =>
    {
     console.log('error mostrando', error);
    }

   );
 }

}
