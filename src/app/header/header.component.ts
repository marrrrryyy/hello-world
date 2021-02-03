import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titleHeader;

  constructor() { 
    let service = new HeaderService();
    this.titleHeader = service.getTitle();
  }


}
