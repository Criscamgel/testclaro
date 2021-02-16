import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetoffersService {

  ofertas: any;
  cargador = true;
  ofertaFiltrada;
  obsOfertaFiltrada;

  constructor(private http: HttpClient) {
    this.obsOfertaFiltrada = new BehaviorSubject<any>(this.ofertaFiltrada);
   }
  
  
  getOffers(){
    return this.http.get('http://localhost:3000/data')
    .pipe(
      map( (data:any) => {
        return data.map( offer => 
          ( { 
              id: offer.versions[0].id,
              caracteristicas: offer.versions[0].characteristics,
              precio: offer.versions[0].productOfferingPrices
            } ) 
          )
      })
    );
  }

  filtOferta(id){  
    this.ofertas.forEach( item => {  
      if(item.id == id){
        this.ofertaFiltrada = item;
        this.eventChangeFiltOferta();
      };
    });
  }

 // Emit Changes
  eventChangeFiltOferta(){
    this.obsOfertaFiltrada.next(this.ofertaFiltrada);
  }
}

