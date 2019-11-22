import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../servicios/service.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements OnInit {
  data;
  displayedColumns: string[] = ['name' , 'lastname' , 'user' , 'country'];

  constructor(
    private serviceService: ServiceService) { }

  ngOnInit() 
  {
        this.serviceService.getUser().subscribe
      (
        (data) => 
        {
          console.log(data);
          this.data = data;
        }     
      );

      
    
  }

}
