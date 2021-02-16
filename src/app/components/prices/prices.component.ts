import { Component, OnInit } from '@angular/core';
import { GetoffersService } from 'src/app/services/getoffers.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  constructor(public offerService: GetoffersService) { }

  precios;
  montos;

  ngOnInit(): void {
    this.getPrecios();
  }

  getPrecios(){
    if(this.offerService.ofertaFiltrada !== null || this.offerService.ofertaFiltrada !== undefined){

      this.offerService.obsOfertaFiltrada
      .subscribe( value => {
        this.precios = [];      
        if(value){
          value.precio.forEach((item) => {
           item.versions.forEach(element => {
             this.precios.push(element.name)           
           });           
          });
          setTimeout(() => {
          this.offerService.cargador = false;    
           
          }, 1000);
        }
    })

    this.offerService.obsOfertaFiltrada
      .subscribe( value => {
        this.montos = [];      
        if(value){
          value.precio.forEach((item) => {
           item.versions.forEach(element => {
             this.montos.push(element.price.amount)           
           });           
          });    
        }
    })

    
  }
  }

}
