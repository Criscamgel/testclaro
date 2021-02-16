import { Component, OnInit } from '@angular/core';
import { GetoffersService } from '../../services/getoffers.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  idOferta = new FormControl(0);

  constructor(public offerService: GetoffersService) {
    this.idOfertaChange();
   }

  ngOnInit(): void {
    this.offerService.getOffers()
    .subscribe(offers => {
      if (offers.length > 1) {
        this.offerService.ofertas = offers;
        setTimeout(() => {
          this.offerService.cargador = false;          
        }, 2000);
      }
    });
  }

  idOfertaChange(){
    this.idOferta.valueChanges.subscribe(id => {
      this.offerService.cargador = true;
      this.offerService.filtOferta(id);      
    })
  }

}
