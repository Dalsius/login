import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicios/service.service';
import { Alumno } from 'src/app/model/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  estudiante;
  notas;
  alumno: Alumno = new Alumno();

  constructor(
    private serviceService: ServiceService) { }

  ngOnInit() 
  {
    this.serviceService.getAlumno().subscribe
    (
      (data) => 
      {
        console.log(data);
        this.estudiante = data;
      }     
    );      
  }

  desplegar( params) 
  {
    this.serviceService.getNotas(params).subscribe
    (
      (data) => 
      {
        console.log(data);
        this.notas = params;
      }     
    );     
  }

}
