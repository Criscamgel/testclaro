import { Component, OnInit } from '@angular/core';
import { GetoffersService } from 'src/app/services/getoffers.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {

  obsOfertaFiltrada;
  caracteristicas = [];

  constructor(public offerService: GetoffersService) { 
   }
  
  ngOnInit(): void {
    this.getCaracteristicas();

    
  }

  getCaracteristicas(){
    
    if(this.offerService.ofertaFiltrada !== null || this.offerService.ofertaFiltrada !== undefined){

      this.offerService.obsOfertaFiltrada
      .subscribe( value => {
        this.caracteristicas = [];      
        if(value){
          value.caracteristicas.forEach((item) => {  
           this.caracteristicas.push(item.id)
          });    
        }
    })

    
  }

}



}
