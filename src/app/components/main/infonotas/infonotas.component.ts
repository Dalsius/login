import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { ServiceService } from '../servicios/service.service';

@Component({
  selector: 'app-infonotas',
  templateUrl: './infonotas.component.html',
  styleUrls: ['./infonotas.component.css']
})
export class InfonotasComponent implements OnInit {
@Input() notass;
  constructor(
    private serviceService: ServiceService
  ) { }

  ngOnInit() {
  }

  
 
}
