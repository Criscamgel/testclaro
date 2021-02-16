import { Component } from '@angular/core';
import { GetoffersService } from './services/getoffers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clarotest';

  constructor(public offerService: GetoffersService) {
    
  }
}
