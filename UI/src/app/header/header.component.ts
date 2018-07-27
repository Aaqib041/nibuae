import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AppService ]
})
export class HeaderComponent implements OnInit {
  
  constructor(
    public appService: AppService) {
   
  }

  ngOnInit() {
    
  }

 }
